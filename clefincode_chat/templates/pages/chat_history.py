import frappe

def get_context(context):
    contact_name = frappe.local.form_dict.contact
    context.contact_name = frappe.db.get_value("Contact", contact_name, "full_name")
    return context
