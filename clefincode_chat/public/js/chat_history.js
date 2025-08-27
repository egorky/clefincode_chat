class ChatHistory {
    constructor() {
        this.container = $('#chat-history-container');
        this.contact = frappe.get_route()[1];
        this.get_history();
    }

    get_history() {
        frappe.call({
            method: 'clefincode_chat.api.api_1_2_1.api.get_chat_history',
            args: {
                contact: this.contact
            },
            callback: (r) => {
                if (r.message) {
                    this.render_history(r.message);
                }
            }
        });
    }

    render_history(messages) {
        messages.forEach(message => {
            const message_html = `
                <div class="chat-message">
                    <div class="message-sender">${message.sender}</div>
                    <div class="message-content">${message.content}</div>
                    <div class="message-time">${moment(message.creation).format('h:mm A')}</div>
                </div>
            `;
            this.container.append(message_html);
        });
    }
}

frappe.chat_history = new ChatHistory();
