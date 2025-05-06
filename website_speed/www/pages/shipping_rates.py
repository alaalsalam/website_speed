import frappe

no_cache = True

def get_context(context):
    shipping_website_content = frappe.get_all(
        'Shipping Website Content',
        fields=['name', 'instructions', 'from', 'to'],
        order_by='creation desc',
        limit_page_length=1
    )

    if shipping_website_content:
        record = shipping_website_content[0]
        shipping_rates = frappe.get_all(
            'Shipping Price List',
            filters={'parent': record.name},
            fields=[
                'auction', 'state', 'location', 'city', 'zip', 'port',
                'internal', 'external', 'total', 'notes', 'port_color'
            ],
            order_by='idx asc'
        )

        context.shipping_rates = shipping_rates
        context.shipping_instructions = record.instructions
        context.shipping_from_date = record['from']
        context.shipping_to_date = record['to']

    else:
        context.shipping_rates = []
        context.shipping_instructions = ''
        context.shipping_from_date = ''
        context.shipping_to_date = ''

    return context
