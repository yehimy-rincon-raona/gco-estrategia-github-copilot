Aquí tienes la transcripción literal del audio, estructurada y formateada en Markdown para que sea mucho más fácil de leer y seguir paso a paso:

### 1. Instalación del paquete Swiit
"Hola, pues este vídeo es para grabar una demo de cómo se instala el paquete de Swiit que hemos desarrollado para los desarrolladores de GCO, analistas, a todo el mundo para que se instalen las *skills* y los MCPs que tenemos para ellos. Entonces, lo que tienen que hacer primero es venir aquí al **portal de empresa** y hacer clic en instalar. En principio esto puede tardar un poco. Lo que se puede hacer es, bueno, cuando se ponga aquí ya que está descargando, pasa instalando, podemos ir a nuestra carpeta de logs de instalación. Entonces, bueno, mi fichero vais a ver que el día de hoy se acaba de actualizar a las 12:26. Vemos que empieza la instalación. Esto va a tardar un poquito porque hace muchas cosas, pero bueno, lo dejamos aquí trabajando, que haga lo que tenga que hacer.

Y ahora cuando termine de instalar explicaremos los siguientes pasos. Vemos que ya ha pasado esta parte [...] Mira, 12:28 se acaba de actualizar. ¿Qué ha hecho? Pues está convirtiendo ya estos son pues cosas de Node JS. En principio solo lo vamos dejando y simplemente lo dejamos aquí que esté instalando y cuando él termine pondrá que está instalado y ya podemos pasar a configurar. Y aparte el portal de empresa nos ha avisado de que está todo instalado. Vale, pues esto ya lo podríamos cerrar."

### 2. Acceso a la Guía de Configuración
"Y como antes pasábamos un *.zip* que contenía la guía, ahora mismo he dejado la guía en la unidad común que tiene acceso todo el mundo en mi carpeta de usuario, en el `PE278.32`. Demos doble clic. En guía, esto estaba un poco más orientado a la parte de *.zip*, pero bueno, nosotros ya vamos a que tenemos la instalación completada (estaríamos en el paso cuatro), entonces tenemos que configurar las credenciales para poder usar el MCP de Atlassian que contiene tanto Jira como Confluence."

### 3. Configuración de credenciales de Atlassian (Jira y Confluence)
"¿Qué hacemos? Vamos aquí, copiamos esta línea, abrimos **PowerShell**, pegamos con clic derecho, volvemos y ejecutamos el fichero `.bat` e irá a meter nuestros datos. Entonces aquí, yo esto lo tengo ya configurado en local, obviamente después de este vídeo cambiaré mi *PAT*. Por temas de seguridad, obviamente este *PAT* no servirá nunca más. 

Entonces el usuario puede ser tanto el correo como el usuario que nosotros metemos aquí normalmente, ¿no? El `PE2782` nos van a dar dos cosas. Entonces, vamos al correo. Aquí tenemos el *PAT* de Jira, ya de hecho voy a crear un *PAT* de Jira para que veáis cómo se hace. Es fácil. 
*   **Para Jira:** Nos vamos aquí [...] abrimos proyectos, jefe global, tu avatar arriba a la derecha, le damos a perfil y vamos aquí a **Tokens personales de acceso** y le damos en crear un token y le ponemos *MCP TP Atlassian*, por ejemplo. Esto dura 90 días por temas de seguridad [...] os saldrá un churro, básicamente, un churro de cosas. Lo copiamos y nos vamos a donde teníamos esto ejecutando. Pegamos clic derecho.
*   **Para Confluence:** Vale, para el *PAT* de Confluence es lo mismo. [...] Los nueve cuadros, arriba a la izquierda, administrar Confluence. Y luego vamos al icono del perfil arriba a la derecha, configuración y tokens personales de acceso. Tenemos un token *MCP Atlassian* [...] Copiado en el portapapeles. Click derecho y ahí estamos."

### 4. Configuración de credenciales para Base de Datos (DB2)
"Configurar credenciales ahora para **DB2**. Es lo mismo en esta ruta. Ya estamos porque lo hemos hecho antes. Simplemente copiamos este comando y seteamos las credenciales. Usuario DB2. Contraseña. Vuestra contraseña. Asegurar de ponerla bien porque no lo veis, no veis qué estáis escribiendo, así que tener cuidado con mayúsculas y minúsculas. Y ya lo tenemos todo por aquí. En principio ya funcionaría todo."

### 5. Pruebas de funcionamiento (Llamadas a MCPs)
"Vamos a arrancar el **Copilot**, ¿vale? Vamos a ver que todo funciona bien. Está cargando los MCPs [...]. En principio está todo funcionando los tokens que usa y tal, así que vamos a hacer una prueba usando el MCP de Atlassian:
> *"Dime qué tareas tengo asignadas"*

Mirando qué tokens tiene. Vale, está usando el MCP, como podemos ver aquí que tengo cuatro tareas asignadas. Vale, que quiero probar el de DB2 y que me digas qué bases de datos ves. Prioriza porque esto apunta al servidor de desarrollo y hay muchas cosas [...]. Y vale, eso, bases de datos por ahí servidor de desarrollo de sistema.

Y le decimos que no, porque quiero probar el **MCP de SQL**. Quiero que me digas qué bases de datos puedes ver. Vale, un error algo raro ha hecho él por dentro. Está contestando y aquí tenemos de SQL Server."

### 6. Agentes adicionales y Cierre
"Y seleccionamos el agente y ponemos **GTO coordinador** aquí, y le vamos a decir Chrome. Esto es para otros MCPs, pero bueno, esto desaparecerá, pero bueno, lo explico por si alguna vez va al MCP por lo que sea. Vamos a decirle que Chrome aquí en la guía, abre Chrome y desde aquí también cogería cosas tanto de Jira como de Confluence como de Elastic. Esto es una versión preliminar. Esto en algún momento cambiará. Está pidiendo que las credenciales aquí incluiríais vuestro usuario para todo y os loguearíais, pero en un principio esto va a evolucionar a que todos usemos el *PAT*, como os he enseñado, un *Personal Access Token* [...] que todos trabajemos con esto.

Y básicamente, mira, como he entrado con el MCP con este token aquí, reconoce que a las 12:36 [...] ya lo ha detectado ahí que se está usando ese token. Así que bueno, en principio la instalación ya estaría hecha, y todo funcionando. Si tenéis cualquier duda podéis escribirme. Yo soy Víctor, soy Víctor Gisbert Clement. Me escribís y lo vemos sin ningún problema. Así que muchas gracias a todos y vamos hablando."