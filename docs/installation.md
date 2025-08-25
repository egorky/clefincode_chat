# Guía de Instalación

Este documento proporciona instrucciones detalladas para instalar la aplicación ClefinCode Chat en tu entorno Frappe.

## Prerrequisitos

Antes de comenzar, asegúrate de tener un [entorno de Frappe Bench](https://frappeframework.com/docs/v14/user/en/bench) instalado y configurado en tu sistema.

## Pasos de Instalación

Sigue estos pasos para instalar la aplicación ClefinCode Chat:

1.  **Descarga la aplicación:**

    Abre tu terminal, navega al directorio de tu bench y ejecuta el siguiente comando para descargar la aplicación desde GitHub:

    ```bash
    bench get-app https://github.com/clefincode/clefincode_chat.git
    ```

2.  **Instala la aplicación en tu sitio:**

    Una vez que la aplicación se haya descargado, instálala en tu sitio de Frappe con el siguiente comando. Reemplaza `tusitio.nombre` con el nombre de tu sitio.

    ```bash
    bench --site tusitio.nombre install-app clefincode_chat
    ```

3.  **Ejecuta las migraciones:**

    Después de la instalación, ejecuta las migraciones de la base de datos para aplicar los cambios necesarios en el esquema de la base de datos.

    ```bash
    bench --site tusitio.nombre migrate
    ```

4.  **Reconstruye los assets:**

    Finalmente, reconstruye los assets de la aplicación (archivos JavaScript y CSS) para asegurarte de que todos los cambios en la interfaz de usuario se apliquen correctamente.

    ```bash
    bench build
    ```

¡Y eso es todo! La aplicación ClefinCode Chat debería estar instalada y lista para usar en tu sitio de Frappe.
