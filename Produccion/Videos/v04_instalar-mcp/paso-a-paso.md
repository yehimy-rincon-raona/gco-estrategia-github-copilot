Gracias a las imágenes que has proporcionado y a la transcripción del audio de Víctor Gisbert, podemos reconstruir con total precisión el paso a paso visual y técnico que se muestra en este videotutorial. 

Este vídeo detalla la instalación del paquete "Swiit" (también llamado *Copilot Dev Suite* en las capturas) y la configuración de los servidores MCP para Atlassian, DB2 y SQL.

Aquí tienes el paso a paso exacto de lo que se muestra en pantalla:

**Paso 1: Instalación de Copilot Dev Suite desde el Portal de Empresa** (Imágenes 01 a 05)
*   El vídeo comienza en el **Portal de empresa** de GCO, donde Víctor busca e instala la aplicación **"Copilot Dev Suite"**.
*   Mientras se instala, abre el Explorador de archivos de Windows y navega a `C:\logsgco` para revisar el archivo de texto con los *logs* de instalación (`gco-dev-suite-install...`) y comprobar en tiempo real cómo se instalan los componentes (como Node.js) en segundo plano.
*   Finalmente, el Portal de empresa muestra un check azul indicando que la aplicación está **"Instalada"**.

**Paso 2: Apertura de la Guía de Configuración** (Imágenes 06 a 08)
*   Víctor abre el navegador web y accede a un archivo local/compartido ubicado en `O:/PE2782/guia-gco-dev-suite.html`. 
*   Se dirige directamente al **Paso 5 de la guía: "Configura las credenciales"**, donde se muestran los comandos que debe copiar para configurar Jira y Confluence.

**Paso 3: Configuración de credenciales de Atlassian (Jira y Confluence)** (Imágenes 09 a 22)
*   Abre una consola de **Windows PowerShell** y pega los comandos indicados en la guía: `cd $env:USERPROFILE\gco-dev-suite` seguido de `.\setup-atlassian-credentials.bat`.
*   El script le pide su correo corporativo y un **PAT (Personal Access Token) de Jira**.
*   **Creación del PAT en Jira:** Va a Jira en el navegador, hace clic en su avatar (arriba a la derecha), entra a **Perfil**, selecciona **Tokens personales de acceso**, hace clic en "Crear token" y lo nombra `mcp-atlassian` con una caducidad de 90 días.
*   Copia el código generado (que advierte que parece un "churro de cosas") y lo pega en la consola de PowerShell.
*   **Creación del PAT en Confluence:** Repite el proceso yendo a Confluence, hace clic en los 9 cuadros arriba a la izquierda, entra a "Administrar Confluence", luego a su perfil, "Configuración", "Tokens personales de acceso", crea el token y lo pega en PowerShell.

*(Nota: En el audio menciona que repite un proceso similar ejecutando el script de DB2 para meter el usuario y la contraseña, la cual no se ve al teclear por seguridad)*.

**Paso 4: Inicialización y validación de los servidores MCP** (Imágenes 23 a 25)
*   Abre la herramienta de **GitHub Copilot** (en su versión CLI/Terminal) y ejecuta el comando de inicio.
*   Se despliega una lista (Imagen 24) que confirma que los **MCP Servers** están cargados y activos. En la pantalla se leen los conectores disponibles: `mcp-jira`, `mcp-gco`, `mcp-elastic`, `mcp-atlassian`, `mcp-db2`, `mcp-sql`, y `mcp-playwright`.

**Paso 5: Pruebas de funcionamiento (Lanzamiento de Prompts)** (Imágenes 26 a 32)
*   Víctor lanza su primer *prompt* para probar Atlassian: ***"dime que tareas tengo asignadas"***.
*   Copilot utiliza la herramienta `jira_search` y le devuelve una tabla perfectamente estructurada con **4 tareas asignadas** del proyecto PROGCO.
*   A continuación, lanza *prompts* más complejos para probar las bases de datos (Imágenes 30 y 31), pidiéndole a Copilot: ***"No, quiero probar el mcp-db2 y que me digas que bases de datos ves..."*** y luego otra consulta para el servidor de `yuletide` usando `mcp-sql`. Copilot responde con tablas listando las bases de datos disponibles.

**Paso 6: Prueba de Custom Agents (gco-coordinador y Chrome)** (Imágenes 33 a 39)
*   En la terminal, Víctor escribe `/agent` para cambiar el agente por defecto. Selecciona de la lista el agente **`gco-coordinador`**.
*   Le da la instrucción en lenguaje natural: ***"abre chrome"***.
*   Copilot invoca la herramienta "Open Chrome with CDP" y efectivamente abre una ventana del navegador Chrome en la página de inicio de sesión de Microsoft de GCO (`login.microsoftonline.com`). Víctor aclara en el audio que esto es experimental para que el agente navegue por herramientas, pero que en el futuro se usará todo por tokens (PAT).

**Paso 7: Verificación final en Jira** (Imágenes 40 y 41)
*   Para terminar, Víctor vuelve a la ventana de configuración de tokens en Jira. Muestra cómo la plataforma ha registrado que el token `mcp-atlassian` **acaba de ser utilizado** (actualizando la "Fecha de última autenticación" a la hora exacta de la prueba), confirmando que la integración entre Copilot y Jira fue exitosa.

**Un recordatorio estratégico:** 
Tal como hemos hablado en nuestra estrategia "De menos a más", ten en cuenta que todo este proceso visual está ocurriendo fuera del entorno estándar de Visual Studio 2022. Está ejecutándose en aplicaciones nativas e interfaces tipo CLI, lo cual confirma que este vídeo está destinado a usuarios avanzados de la **Fase 3 (Visual Studio Code o Terminal)**.