import frappe
from frappe import _

@frappe.whitelist(allow_guest=True)
def get_locations_by_auction(auction_name):
    if not auction_name:
        return []

    locations = frappe.get_all(
        'Location Shipping',
        filters={'auction': auction_name},
        fields=['name'],
        order_by='name asc'
    )
    return locations




@frappe.whitelist(allow_guest=True)
def get_shipping_info_by_location(location_name):
    if not location_name:
        return None

    shipping_website_content = frappe.get_all(
        'Shipping Website Content',
        fields=['name'],
        order_by='creation desc',
        limit_page_length=1
    )

    if not shipping_website_content:
        return None

    parent_name = shipping_website_content[0].name

    shipping_info = frappe.get_all(
        'Shipping Price List',
        filters={
            'parent': parent_name,
            'location': location_name
        },
        fields=[
            'auction', 'state', 'location', 'city', 'zip', 'port',
            'internal', 'external', 'total', 'notes', 'port_color'
        ],
        limit_page_length=1
    )

    if shipping_info:
        return shipping_info[0]
    else:
        return None

