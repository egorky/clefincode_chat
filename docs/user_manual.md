# Manual de Usuario

Este manual de usuario proporciona una guía sobre cómo utilizar las diversas funciones de la aplicación ClefinCode Chat.

## Funcionalidades Principales

### Chat Básico

ClefinCode Chat te permite comunicarte con tu equipo a través de mensajería directa y grupos de chat.

-   **Mensajería Directa:** Para iniciar una conversación uno a uno, busca a un usuario en la barra de búsqueda y haz clic en su nombre para abrir una ventana de chat.
-   **Grupos de Chat:** Puedes crear canales de grupo para discusiones en equipo. Para crear un grupo, haz clic en el botón "+" en la lista de canales y sigue las instrucciones para nombrar el grupo y añadir miembros.

![Pantalla principal de ClefinCode Chat](screenshots/web/dark_main_screen.png)

### Mensajería Multimedia

Puedes compartir una variedad de archivos multimedia en tus conversaciones:

-   **Imágenes y Videos:** Arrastra y suelta archivos de imagen o video en la ventana de chat, o usa el botón de adjuntar para seleccionarlos desde tu dispositivo.
-   **Archivos:** Comparte documentos, hojas de cálculo, PDFs y más.
-   **Clips de Voz:** Graba y envía mensajes de voz directamente desde la aplicación.

### Menciones

-   **Mencionar Usuarios:** Para notificar a un usuario específico en un chat de grupo, escribe `@` seguido de su nombre de usuario. El usuario recibirá una notificación.
-   **Vincular Documentos (Doctypes):** Puedes hacer referencia a documentos de ERPNext en tus conversaciones. Escribe `#` seguido del tipo de documento y el nombre del documento para crear un enlace al mismo.

### Portal de Soporte para Invitados

ClefinCode Chat incluye un portal de soporte que permite a los usuarios no registrados (invitados) comunicarse con tu equipo. Esta función es ideal para el soporte al cliente.

Para configurar el portal de soporte, ve a la configuración de ClefinCode Chat en tu escritorio de ERPNext y activa la opción "Permitir chat de invitados". Se te proporcionará un enlace a una página de portal de chat que puedes incrustar en tu sitio web.

### Integración con WhatsApp

Integra tu cuenta de WhatsApp Business para gestionar las conversaciones directamente desde ClefinCode Chat.

#### Configuración Inicial

Primero, necesitarás configurar tus assets de desarrollador y obtener credenciales del Portal de Desarrolladores de Meta. Sigue esta guía para empezar: [Guía del Portal de Desarrolladores de Meta](https://developers.facebook.com/docs/whatsapp/cloud-api/get-started#set-up-developer-assets)

#### 1. Introduce las Credenciales de WhatsApp

![Credenciales de WhatsApp](screenshots/web/Whatsapp_credentials.png)

#### 2. Configura el Perfil de WhatsApp

![Perfil de WhatsApp](screenshots/web/whatsapp_profile.png)

**Consejos Importantes:**

-   Al introducir el número de WhatsApp, no incluyas `00` o `+`. Comienza directamente con el código del país y el número, ej., `971xxxxxxxxx`.
-   Hay dos tipos de perfiles de WhatsApp que puedes crear:
    1.  **Personal** 👤: Abre un canal de comunicación directo entre el remitente y el receptor.
    2.  **Soporte** 👥: Abre un canal de grupo entre el remitente y el receptor, permitiendo al administrador añadir o eliminar a otros miembros del canal.
-   Después de guardar el perfil de WhatsApp, se creará automáticamente una plantilla de WhatsApp.

![Guardar Perfil de WhatsApp](screenshots/web/save_whatsapp_profile.png)
![Plantilla de WhatsApp](screenshots/web/whatsapp_template.png)

¡Ahora puedes empezar a enviar y recibir mensajes de WhatsApp directamente usando nuestra aplicación de chat dentro de tu sistema ERP!

![Enviar Mensaje de WhatsApp](screenshots/web/send_message.png)

### Función "Meet"

La función "Meet" está actualmente en desarrollo y no está disponible en la versión actual de la aplicación. Esta función está planificada para futuras versiones y permitirá a los usuarios iniciar videoconferencias directamente desde el chat.

### Acceso de Administrador

Por razones de seguridad y para evitar la exposición accidental de datos sensibles, el usuario **Administrador** de Frappe tiene un acceso restringido a los canales y conversaciones en ClefinCode Chat. El Administrador puede ver la configuración de la aplicación y gestionar los usuarios, pero no puede acceder al contenido de los chats privados o de grupo a menos que sea añadido explícitamente como miembro.

Se recomienda crear un usuario "Manager" o "Supervisor" con los permisos adecuados para supervisar las conversaciones si es necesario, en lugar de utilizar el usuario Administrador para este propósito.
