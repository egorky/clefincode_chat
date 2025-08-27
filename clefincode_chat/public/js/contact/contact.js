frappe.ui.form.on('Contact', {
    refresh: function(frm) {
        if (frm.doc.__islocal) {
            return;
        }

        // Fetch and render WhatsApp history
        frappe.call({
            method: 'clefincode_chat.api.api_1_2_1.api.get_chat_history',
            args: {
                contact: frm.doc.name
            },
            callback: function(r) {
                let history_html = '';
                if (r.message && r.message.length > 0) {
                    history_html = r.message.map(msg => `
                        <div style="margin-bottom: 10px; padding: 10px; border: 1px solid #d1d8dd; border-radius: 3px;">
                            <div><strong>${frappe.utils.escape_html(msg.sender)}:</strong></div>
                            <div style="margin-top: 5px;">${frappe.utils.escape_html(msg.content)}</div>
                            <div style="margin-top: 5px; font-size: 85%; color: #8d99a6;">${moment(msg.creation).fromNow()}</div>
                        </div>
                    `).join('');
                } else {
                    history_html = '<p>No WhatsApp history found for this contact.</p>';
                }
                frm.get_field('whatsapp_history_html').$wrapper.html(history_html);
            }
        });
    }
});
