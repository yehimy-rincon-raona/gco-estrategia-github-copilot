Este audio corresponde al tutorial grabado por **Víctor Gisbert** (el nuevo integrante del equipo que se mencionó en tu reunión de seguimiento). En él, hace una demostración técnica paso a paso sobre cómo instalar y configurar un paquete personalizado llamado "Copilot Dev Suite", el cual habilita el uso de *Skills* y servidores MCP (Model Context Protocol) para los desarrolladores de GCO.

Aquí tienes el resumen de los pasos y contenidos principales que Víctor muestra en el vídeo:

**1. Instalación desde el Portal de Empresa**
El proceso comienza yendo al "Portal de empresa" para instalar el paquete de integraciones. Víctor muestra cómo revisar la carpeta de *logs* para confirmar que todos los componentes (como Node.js) se han instalado correctamente en segundo plano.

**2. Configuración de credenciales para Atlassian (Jira y Confluence)**
Siguiendo una guía alojada en una unidad compartida de GCO, Víctor explica cómo vincular las cuentas para que la IA lea los proyectos. El proceso consiste en:
*   Abrir PowerShell y ejecutar un script (`.bat`).
*   Ir a las plataformas de Jira y Confluence, entrar al perfil de usuario y crear un **Token Personal de Acceso (PAT)** con duración de 90 días llamado "MCP Atlasian".
*   Pegar estos tokens en la terminal junto con el correo/usuario corporativo.

**3. Configuración de credenciales para Bases de Datos**
A continuación, Víctor ejecuta otro comando en la terminal para configurar las credenciales de la base de datos **DB2**, advirtiendo a los usuarios que tengan cuidado de escribir correctamente su contraseña ya que la consola no muestra los caracteres mientras se teclean.

**4. Pruebas de funcionamiento (Llamadas a los MCP)**
Para confirmar que todo quedó bien instalado, Víctor arranca Copilot y lanza *prompts* de prueba:
*   Utiliza el **MCP de Atlassian** preguntándole: *"dime qué tareas tengo asignadas"*, y Copilot logra leer correctamente los tickets a su nombre.
*   Utiliza el **MCP de DB2** y el **MCP de SQL Server**, pidiéndole a la IA que le liste las bases de datos disponibles en el servidor de desarrollo.
*   Finalmente, menciona la existencia de un agente llamado **"GTO coordinador"** y un MCP experimental para Google Chrome que actualmente pide credenciales pero que en el futuro migrará al mismo sistema de tokens.

**Aporte clave según nuestro historial de conversación:** 
Recordando lo que Nibaldo explicó en las formaciones pasadas, es vital tener en cuenta que **esta configuración de MCPs y Skills solo funciona para Visual Studio Code o la Terminal**. Como ya habíamos identificado, la versión actual de Visual Studio 2022 que usan de forma nativa en GCO no tiene soporte para estas integraciones. Por tanto, este vídeo está orientado exclusivamente a los usuarios que estén adoptando el entorno "multientorno" (VS Code) que propone Nibaldo.