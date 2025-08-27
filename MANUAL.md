# Manual de Configuración y Uso de ClefinCode Chat

## 1. Introducción

Este manual proporciona una guía detallada para configurar y utilizar el módulo **ClefinCode Chat** en su instancia de ERPNext. Siga los pasos a continuación para configurar los diferentes canales de comunicación y gestionar las funcionalidades del chat.

---

## 2. Configuración General (ClefinCode Chat Settings)

Este es el punto de partida para la configuración global del módulo. Busque `ClefinCode Chat Settings` en la barra de búsqueda para acceder.

### Pestaña: Firebase Server Key
-   **Firebase Server Key**: Introduzca aquí la clave del servidor de su proyecto de Firebase. Esta clave es **esencial** para el funcionamiento de las notificaciones push en dispositivos móviles.

### Pestaña: Mobile Notifications
-   **Enable Mobile Notifications**: Active esta casilla para permitir el envío de notificaciones a través de Firebase a la aplicación móvil.
-   **With Message Content**: Si se activa, el cuerpo de las notificaciones push incluirá el contenido del mensaje. Si se desactiva, se enviará una notificación genérica ("Nuevo mensaje") por motivos de privacidad.

### Pestaña: Portal Support
-   **Enable Portal Support**: Marque esta opción para activar el widget de chat de soporte en vivo en el portal de clientes de su sitio web.
-   **Chat Support Title**: El título que se mostrará en la cabecera del widget de chat. Ejemplo: "Soporte en Línea".
-   **Welcome Message**: El primer mensaje que un cliente verá al abrir el chat de soporte.
-   **Role**: Seleccione el rol de los usuarios que atenderán los chats de soporte. Las conversaciones se asignarán a los usuarios con este rol.

### Pestaña: DocType Shortcuts
-   **DocType Shortcut (Tabla)**: Esta tabla le permite definir atajos para buscar documentos rápidamente desde el chat.
    -   **Shortcut**: El atajo que escribirá en el chat (ej: `so`).
    -   **DocType Name**: El DocType al que se refiere el atajo (ej: `Sales Order`).

---

## 3. Configuración de Canales de Comunicación

### 3.1. WhatsApp

#### a) ClefinCode WhatsApp Integration (Configuración Global)
DocType singleton para conectar con la API de WhatsApp Business.

-   **Webhook URL**: **(Campo de solo lectura)** Esta es la URL que debe copiar y pegar en la sección "Webhook" de la configuración de su aplicación en el portal de **META for Developers**. Es la dirección a la que META enviará los eventos, como los mensajes entrantes.
-   **Access Token**: Su token de acceso permanente de la API de WhatsApp Business.
-   **Webhook Verify Token**: Un token secreto de su elección. Debe introducir este mismo valor en el campo "Verify Token" en el portal de META para verificar su webhook.

#### b) ClefinCode WhatsApp Profile (Números Individuales)
Aquí se configuran los números de teléfono de WhatsApp que usará para enviar y recibir mensajes.

-   **WhatsApp Number**: El número de teléfono con el código de país (ej: `15551234567`).
-   **Type**:
    -   **Personal**: El número está asociado a un único usuario del sistema. Ideal para agentes de ventas o soporte con líneas directas.
        -   **User**: El usuario de ERPNext al que pertenece el número.
    -   **Support**: El número es compartido por un equipo.
        -   **Authorized Users (Tabla)**: Añada a todos los usuarios de ERPNext que pueden enviar mensajes desde este número.
-   **Phone Number ID**: El ID del número de teléfono, proporcionado por META.
-   **Business Account ID**: El ID de su cuenta de WhatsApp Business, proporcionado por META.
-   **Message Template**: (Visible al guardar) Le permite seleccionar una plantilla de mensaje (previamente creada en `ClefinCode WhatsApp Template`) para iniciar conversaciones con clientes después de que haya pasado la ventana de 24 horas.

### 3.2. Telegram

#### ClefinCode Telegram Integration
DocType singleton para la configuración del bot de Telegram.

-   **Access Token**: El token de acceso de su bot, que puede obtener de **BotFather** en Telegram.
-   **Webhook URL**: Para Telegram, la URL del webhook es fija y no necesita configuración manual aquí. El sistema usa la ruta `/telegram/webhook` en su dominio. Deberá configurar esta URL manualmente usando la API de Telegram o una herramienta de su elección para que Telegram sepa a dónde enviar las actualizaciones.

### 3.3. Instagram

#### ClefinCode Instagram Integration
DocType singleton para la configuración de la API de Instagram.

-   **Access Token**: Su token de acceso de la API de Instagram.
-   **Webhook URL**: (Próximamente) Al igual que en WhatsApp, aquí aparecerá la URL para configurar en el portal de META.
-   **Webhook Verify Token**: Su token secreto para verificar el webhook en el portal de META.

### 3.4. Facebook Messenger

#### ClefinCode Facebook Messenger Integration
DocType singleton para la configuración de la API de Facebook Messenger.

-   **Access Token**: Su token de acceso de la API de Messenger.
-   **Webhook URL**: (Próximamente) Al igual que en WhatsApp, aquí aparecerá la URL para configurar en el portal de META.
-   **Webhook Verify Token**: Su token secreto para verificar el webhook en el portal de META.

---

## 4. Uso del Chat

### Iniciar una Conversación
Una vez configurado un perfil de WhatsApp para su usuario, puede ir a la interfaz de chat de ClefinCode, seleccionar un contacto y hacer clic en el icono de WhatsApp para iniciar una conversación.

### Historial de Conversaciones en el Contacto
Para ver el historial de una conversación de WhatsApp con un contacto:
1.  Vaya al DocType **Contact** en ERPNext.
2.  Abra el contacto deseado.
3.  Busque y haga clic en la pestaña **"WhatsApp History"**.
4.  En esta pestaña, verá la transcripción completa de la conversación.
