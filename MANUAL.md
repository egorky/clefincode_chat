# Manual de Configuración y Uso de ClefinCode Chat

## 1. Introducción

Este manual proporciona una guía detallada para configurar y utilizar el módulo **ClefinCode Chat** en su instancia de ERPNext. Siga los pasos a continuación para configurar los diferentes canales de comunicación y gestionar las funcionalidades del chat.

## 2. Configuración General (ClefinCode Chat Settings)

La configuración general del módulo se gestiona desde el DocType **ClefinCode Chat Settings**. Siendo un DocType singleton, solo existe un documento de configuración para todo el sistema.

Para acceder, busque `ClefinCode Chat Settings` en la barra de búsqueda principal de ERPNext.

### Opciones de Configuración:

-   **Firebase Server Key**:
    -   **Clave del Servidor de Firebase**: Aquí debe introducir la clave del servidor de su proyecto de Firebase. Esta clave es necesaria para enviar notificaciones push a dispositivos móviles (Android/iOS).

-   **Mobile Notifications**:
    -   **Enable Mobile Notifications**: Marque esta casilla para habilitar las notificaciones push a través de Firebase.
    -   **With Message Content**: Si está marcada, el cuerpo de las notificaciones push incluirá el contenido del mensaje. Si no, mostrará un mensaje genérico.

-   **Portal Support**:
    -   **Enable Portal Support**: Active esta opción para mostrar un widget de chat de soporte en el portal de cliente de su sitio web.
    -   **Chat Support Title**: El título que se mostrará en la cabecera del widget de chat de soporte.
    -   **Welcome Message**: El mensaje de bienvenida que verán los clientes al iniciar un chat de soporte.
    -   **Role**: Asigne los chats de soporte a los usuarios que tengan un rol específico en el sistema.

-   **DocType Shortcuts**:
    -   Esta tabla le permite crear atajos para buscar documentos de un DocType específico directamente desde la barra de chat. Por ejemplo, puede crear un atajo `so` para el DocType `Sales Order`.

## 3. Configuración de Canales

### 3.1. WhatsApp

La integración con WhatsApp requiere configurar dos DocTypes: `ClefinCode WhatsApp Integration` y `ClefinCode WhatsApp Profile`.

#### a) ClefinCode WhatsApp Integration

Este es un DocType singleton para la configuración global de la API de WhatsApp Business.

-   **Access Token**: Su token de acceso de la API de WhatsApp Business.
-   **Webhook URL**: **(Campo de solo lectura)** Esta es la URL que debe proporcionar a META en el panel de desarrolladores de su aplicación de WhatsApp. El sistema la genera automáticamente.
-   **Webhook Verify Token**: Un token de su elección para verificar la autenticidad de las peticiones que llegan a su webhook. Debe configurar este mismo token en el panel de META.

#### b) ClefinCode WhatsApp Profile

Este DocType le permite configurar números de teléfono de WhatsApp individuales para enviar y recibir mensajes.

-   **WhatsApp Number**: El número de teléfono.
-   **Type**:
    -   **Personal**: Vincula el número a un único usuario del sistema.
    -   **Support**: Configura el número para un equipo de soporte. Puede asignar conversaciones por `Role` o a perfiles de chat específicos.
-   **Default**: (Oculto) Esta casilla marca un número como el predeterminado para un usuario. **Es crucial que cada usuario que vaya a enviar mensajes de WhatsApp tenga un perfil con un número marcado como predeterminado para evitar errores.**
-   **Phone Number ID** y **Business Account ID**: Sus credenciales de la plataforma de META.
-   **Authorized Users**: Si el tipo es "Support", aquí puede añadir los usuarios autorizados para usar este número.
-   **Message Template**: Puede seleccionar una plantilla de mensaje de WhatsApp para iniciar conversaciones con clientes después de que haya pasado la ventana de 24 horas.

### 3.2. Telegram

-   Vaya al DocType **ClefinCode Telegram Integration**.
-   **Access Token**: Introduzca el token de acceso de su bot de Telegram, que puede obtener de BotFather.
-   **Webhook**: A diferencia de WhatsApp, la URL del webhook de Telegram es fija. No necesita configurarla aquí. El sistema usa la ruta `/telegram/webhook`.

### 3.3. Instagram y Facebook Messenger

La configuración para Instagram y Facebook Messenger es muy similar a la de WhatsApp.

-   Vaya a los DocTypes **ClefinCode Instagram Integration** o **ClefinCode Facebook Messenger Integration**.
-   Estos son DocTypes singleton donde debe configurar el **Access Token** y el **Webhook Verify Token**.
-   Al igual que en WhatsApp, el sistema generará una **Webhook URL** que deberá configurar en el panel de desarrolladores de META para cada plataforma.

## 4. Gestión de Perfiles de Chat (ClefinCode Chat Profile)

Este DocType se crea automáticamente cuando se crea un `Contact` en el sistema. Almacena los diferentes identificadores de un contacto en las distintas plataformas (email, teléfono de WhatsApp, ID de Instagram, etc.). Normalmente no necesitará editarlo manualmente.

## 5. Uso del Chat

### Iniciar una Conversación

-   Puede iniciar una conversación desde la interfaz de chat de ClefinCode.
-   Al seleccionar un contacto, verá iconos para las diferentes plataformas configuradas para ese contacto.
-   Haga clic en el icono de WhatsApp para iniciar una conversación de WhatsApp. Si no tiene un número predeterminado configurado en su perfil de WhatsApp, recibirá un error.

### Ver el Historial de Conversaciones

-   Para ver el historial de una conversación de WhatsApp con un contacto, vaya al DocType **Contact**.
-   Abra el contacto deseado.
-   Verá una nueva pestaña llamada **"WhatsApp History"**.
-   En esta pestaña, podrá ver todo el historial de mensajes de WhatsApp con ese contacto.
