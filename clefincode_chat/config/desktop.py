from frappe import _

def get_data():
    return [
        {
            "module_name": "Redes Sociales",
            "color": "#4E9A47",
            "icon": "octicon octicon-broadcast",
            "type": "module",
            "label": _("Redes Sociales"),
            "description": "Configuration for social network integrations.",
            "items": [
                {
                    "type": "doctype",
                    "name": "ClefinCode Chat Settings",
                    "label": _("Chat Settings"),
                    "description": _("Global settings for ClefinCode Chat."),
                },
                {
                    "type": "doctype",
                    "name": "ClefinCode WhatsApp Integration",
                    "label": _("WhatsApp Integration"),
                },
                {
                    "type": "doctype",
                    "name": "ClefinCode WhatsApp Profile",
                    "label": _("WhatsApp Profiles"),
                },
                {
                    "type": "doctype",
                    "name": "ClefinCode WhatsApp Template",
                    "label": _("WhatsApp Templates"),
                },
                {
                    "type": "doctype",
                    "name": "ClefinCode Telegram Integration",
                    "label": _("Telegram Integration"),
                },
                {
                    "type": "doctype",
                    "name": "ClefinCode Instagram Integration",
                    "label": _("Instagram Integration"),
                },
                {
                    "type": "doctype",
                    "name": "ClefinCode Facebook Messenger Integration",
                    "label": _("Facebook Messenger Integration"),
                },
                {
                    "type": "doctype",
                    "name": "ClefinCode Chat Channel",
                    "label": _("Chat Channels"),
                }
            ]
        }
    ]
