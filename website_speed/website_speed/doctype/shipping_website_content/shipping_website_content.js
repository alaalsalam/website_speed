// Copyright (c) 2025, alaalsalam and contributors
// For license information, please see license.txt


frappe.ui.form.on('Shipping Website Content', {
    fetch_price_list: function(frm) {
        // تنظيف الجدول أولاً
        frm.clear_table("shipping_price_list");
        frm.refresh_field("shipping_price_list");

        // نبدأ بجلب كل تركيبات الشحن الداخلي من السيرفر
        frappe.call({
            method: "car_shipping.api.calculator.get_inland_shipping_combinations",
            callback: function(res) {
                const combinations = res.message || [];

                if (combinations.length === 0) {
                    frappe.msgprint("لم يتم العثور على أي تركيبات شحن داخلي.");
                    return;
                }

                frappe.show_progress(__('جلب الأسعار...'), 0, combinations.length);
                let processed = 0;

                combinations.forEach(row => {
                    frappe.call({
                        method: "car_shipping.api.calculator.calculator_selling_price",
                        args: {
                            auction: row.auction,
                            location_shipping: row.auction_location,
                            nearest_port: row.to_port,
                            to_country: frm.doc.destination_country,
                            to_port: frm.doc.to_port,
                            final_port: frm.doc.destination_port,
                            vehicle_type: frm.doc.vehicle_type
                        },
                        callback: function(r) {
                            let prices = r.message;

                            let child = frm.add_child("shipping_price_list");
                            child.auction = row.auction;
                            child.location = row.auction_location;
                            child.zip_code = row.zip_code;
                            child.port = row.to_port;
                            child.state = row.state;
                            child.city = row.city;
                            child.towing_price = prices?.inland_price || 0;
                            child.ocean_price = prices?.ocean_price || 0;
                            child.total = prices?.selling_price || 0;

                            processed += 1;
                            frappe.show_progress(__('جلب الأسعار...'), processed, combinations.length);

                            if (processed === combinations.length) {
                                frm.refresh_field("shipping_price_list");
                                frappe.hide_progress();
                                frappe.msgprint("تم تعبئة جدول الشحن بنجاح.");
                            }
                        }
                    });
                });
            }
        });
    }
});

