import frappe
from datetime import datetime

def safe_dict(doc):
    """Converts a Frappe document to a dict with datetime converted to str"""
    result = {}
    for key, value in doc.as_dict().items():
        if isinstance(value, datetime):
            result[key] = value.isoformat()
        else:
            result[key] = value
    return result

def get_context(context):
    doc = frappe.get_all(
        "Shipping Website Content",
        order_by="creation desc",
        limit_page_length=1,
        fields=["name"]
    )

    if not doc:
        frappe.throw("No Shipping Website Content found.")

    full_doc = frappe.get_doc("Shipping Website Content", doc[0].name)

    auctions = list(set(row.auction.strip() for row in full_doc.shipping_price_list if row.auction))

    context.shipping_doc = {
        "destination_country": full_doc.destination_country,
        "destination_port": full_doc.destination_port,
        "car_is_not_drivable_fee": full_doc.car_is_not_drivable_fee,
        "electric_and_hybrid_fee": full_doc.electric_and_hybrid_fee,
        "shipping_price_list": [safe_dict(row) for row in full_doc.shipping_price_list],
        "additional_costs": [safe_dict(row) for row in full_doc.additional_costs],
        "auctions": auctions,
    }

    return context
