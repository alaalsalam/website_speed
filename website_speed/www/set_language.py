import frappe
from urllib.parse import urlparse

def get_context(context):
    lang = frappe.form_dict.get('lang')
    redirect_to = frappe.form_dict.get('redirect_to', '/')

    parsed_url = urlparse(redirect_to)
    safe_redirect = parsed_url.path or '/'

    if lang in ['en', 'ar']:
        frappe.response["type"] = "redirect"
        frappe.response["location"] = safe_redirect

        frappe.local.cookie_manager.set_cookie("preferred_lang", lang)
        
        if frappe.session:
            frappe.local.session.lang = lang

        return {}

    frappe.response["type"] = "redirect"
    frappe.response["location"] = "/"
    return {}