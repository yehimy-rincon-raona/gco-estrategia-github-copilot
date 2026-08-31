# **Qué es, cómo se instala y cómo se configura la Copilot Dev Suite** dentro de GCO.

A continuación, se presenta un resumen concreto y estructurado con los aspectos clave de ambos audios:

---

### 1. ¿Qué es la Copilot Dev Suite?
Es una capa o extensión personalizada de software desarrollada conjuntamente por **Passiona y Raona** que se añade directamente sobre GitHub Copilot. 
* **Objetivo:** Está diseñada específicamente para facilitar el trabajo técnico en GCO, dando soporte para tecnologías y necesidades como COBOL, .NET, análisis y conexiones seguras a bases de datos.
* **Contenido de la Suite:** Integra conectores de sistemas (**MCPs** como Jira, Confluence, Elastic, Kibana, SQL y DB2), **agentes** y paquetes de conocimiento especializado (**skills**).
* **Ventaja de Autodescubrimiento:** Los desarrolladores no necesitan recordar qué herramientas tienen instaladas. Gracias al procesamiento de lenguaje natural, **Copilot detecta automáticamente la intención de la consulta** del usuario e invoca de manera autónoma la *skill* o el conector pertinente.

---

### 2. Instalación y Verificación
* **Portal de Empresa:** Para instalar la suite, los usuarios de GCO simplemente deben ingresar a su **Portal de Empresa** corporativo y hacer clic en instalar, lo que simplifica enormemente el despliegue sin requerir la descompresión manual de archivos ZIP.
* **Comprobación:** Para verificar que se ha instalado correctamente, se abre la terminal y se ejecuta el comando `copilot`. Si la instalación fue exitosa, el sistema mostrará el icono de la Suite junto a su versión.
* **Visualizador de Contexto:** Una utilidad exclusiva añadida a la interfaz de la terminal es un indicador que muestra el **porcentaje de uso de la ventana de contexto**, facilitando que el desarrollador controle los tokens sin tener que ejecutar comandos adicionales.

---

### 3. Configuración de Credenciales de Sistemas
El instalador deposita una guía interactiva en la unidad de red común de la empresa bajo la ruta **`O:\copilot-dev-suite\Guia GCO Dev Suite.html`**. Los pasos fundamentales para configurar los conectores (*MCPs*) son:

* **Atlassian (Jira y Confluence):** Se requiere el uso de **PATs (Personal Access Tokens)** como el método de conexión más seguro.
  * *Creación del PAT en Jira:* Se accede al perfil web personal en Jira, se ingresa a *Personal Access Tokens*, se genera un token con el nombre deseado y se configura con la caducidad sugerida por seguridad de **90 días**. Se debe copiar inmediatamente el token (usando el botón copiar) antes de cerrar la ventana, ya que no se volverá a mostrar.
  * *Creación del PAT en Confluence:* El proceso es similar, accediendo a través del menú de los nueve cuadros en la parte superior izquierda, seleccionando *Administrar Confluence* y navegando hacia la sección de tokens del perfil. (El vídeo ejemplifica que si el desarrollador no cuenta con estos permisos de Confluence, puede continuar el flujo dejando la casilla vacía).
* **Asignación en PowerShell:** Se copian los comandos del "Paso 5" de la guía y se ejecutan obligatoriamente en la consola de **PowerShell**. El programa interactivo solicitará el código de usuario (ej. PG...) y el token correspondiente.
* **Bases de Datos (DB2):** Se sigue un proceso similar mediante los comandos proporcionados en la guía, donde el script interactivo solicitará el usuario y contraseña de conexión habituales de Squirrel.

---

### 4. Pruebas de Funcionamiento
Una vez todo queda configurado, el ecosistema completo se carga al inicializar Copilot (en el ejemplo se muestran 4 agentes, 39 skills y los MCPs activos).

Para corroborar que el conector de Jira funciona, se puede hacer una consulta directa en lenguaje natural, como: *"Hola, buenos días, puedes traerme las issues que tengo asignadas para hoy"*. La herramienta identifica automáticamente que requiere utilizar el MCP de Jira (`jira_search`), solicita los permisos de ejecución del comando por seguridad y recupera con éxito las incidencias pendientes asignadas al usuario.

---
¿Te gustaría que profundicemos en el diseño de alguna guía visual para Teams basada en este proceso de instalación y configuración de credenciales?