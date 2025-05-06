document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-contact-form");
    const form = document.getElementById("customer-contact-form");

    if (!submitButton || !form) {
        console.warn("Form or button not found.");
        return;
    }

    submitButton.addEventListener("click", function () {
        const full_name = form.querySelector("input[name='full_name']").value.trim();
        const email = form.querySelector("input[name='email']").value.trim();
        const phone_number = form.querySelector("input[name='phone_number']").value.trim();
        const message = form.querySelector("textarea[name='message']").value.trim();

        if (!full_name || !email || !message) {
            frappe.show_alert({
                message: "Please fill in all required fields.",
                indicator: 'orange'
            });
            return;
        }
        

        frappe.call({
            method: "website_speed.www.contact-us.submit_customer_contact",
            type: "POST",
            args: {
                full_name,
                email,
                phone_number,
                message
            },
            callback: function (r) {
                if (!r.exc) {
                    frappe.show_alert({ message: "Thank you for your message.", indicator: 'green' });
                    form.reset();
                } else {
                    frappe.show_alert({ message: "Something went wrong.", indicator: 'red' });
                }

            }
        });
    });
});