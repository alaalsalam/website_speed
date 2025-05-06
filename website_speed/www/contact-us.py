import frappe
from frappe.utils import validate_email_address, escape_html

@frappe.whitelist(allow_guest=True)
def submit_customer_contact(full_name, email, phone_number=None, message=None):
    validate_email_address(email, throw=True)

    doc = frappe.get_doc({
        "doctype": "Customer Communication",
        "full_name": escape_html(full_name),
        "email": email,
        "phone_number": phone_number,
        "message": escape_html(message),
    })
    doc.insert(ignore_permissions=True)

    return {"message": "Submitted successfully"}
