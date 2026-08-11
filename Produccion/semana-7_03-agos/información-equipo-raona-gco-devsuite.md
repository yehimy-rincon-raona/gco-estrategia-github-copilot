# gco-dev-suite Qué es y por qué existe

## La idea en una frase

**gco-dev-suite es un paquete que se instala sobre GitHub Copilot y le da lo que le falta para trabajar en Grup Catalana Occident: las llaves de los sistemas de la casa, los manuales de cómo se hacen aquí las cosas y las normas de cuándo tiene que parar y preguntar.**

La inteligencia artificial ya estaba. Copilot viene de fábrica sabiendo programar —COBOL, .NET, SQL— pero llega a GCO sin saber nada de GCO: no conoce sus convenciones, no puede consultar sus datos ni ver sus logs, y no distingue un cambio inofensivo de uno que arrastra media plataforma. **La suite no es otra IA: es todo lo que hay que ponerle encima a la que ya existe para que sirva aquí.**

En la práctica es un fichero que se instala en el ordenador del desarrollador en unos minutos. No hay aplicación que abrir ni web a la que entrar: a partir de ese momento, el Copilot que ya usaba —dentro de las mismas herramientas que ya usaba— sabe tres cosas que antes no sabía: **dónde está la información**, **cómo se hacen aquí las cosas** y **cuándo debe pararse a preguntar**.

## El problema que había detrás

GCO tiene un núcleo de negocio que funciona y que lleva décadas funcionando: mainframe, programas COBOL, bases de datos DB2, y por encima una capa moderna de .NET que es la que ve el usuario final. Cuando alguien consulta una póliza, esa petición atraviesa seis capas de software encadenadas, una detrás de otra.

El problema nunca fue el sistema. Fue lo que cuesta moverse dentro de él.

### Primer problema: la información está repartida

Cuando algo falla, el desarrollador no tiene un sitio donde mirar: tiene cinco. El error está en Elastic. La explicación de qué hace ese programa está en Confluence. El código fuente está en TFS. El ticket que le han asignado está en Jira. Y la estructura real de los datos está en DB2. Cada diagnóstico empieza con el mismo ritual de abrir pestañas, copiar identificadores de una a otra y reconstruir a mano una historia que está troceada en cinco sistemas.

### Segundo problema: el conocimiento vive en las personas

Las seis capas del sistema tienen que encajar entre ellas con una precisión total. Si un dato se define de una manera en la base de datos, tiene que definirse de una manera muy concreta —y distinta— en COBOL, y de otra en .NET. Esas reglas de equivalencia existen, son estrictas, y en su mayoría **no están escritas en ningún manual**: están en la cabeza de la gente que lleva años en el equipo.

El detalle importante: cuando alguien se equivoca en una de esas equivalencias, **el sistema no avisa**. No hay error de compilación. El fallo aparece más tarde, en ejecución, como un dato truncado o un error críptico de base de datos. Es el tipo de error que cuesta horas encontrar y que a un recién llegado le puede pasar sin que nadie lo vea venir.

### Tercer problema: un Copilot genérico no llegaba

Copilot, tal cual, escribe COBOL correcto en abstracto. Pero no conoce las convenciones internas de GCO, no puede consultar cómo está definida hoy una tabla real, no ve los logs de esta noche y no sabe que un cambio aparentemente pequeño obliga a tocar otras cuatro capas. Podía ayudar a escribir líneas; no podía ayudar a **tomar decisiones**.

Ese era exactamente el hueco que había que rellenar.

## Por qué se decidió construirla

La suite nace de juntar dos iniciativas que ya existían por separado y que resolvían la mitad del problema cada una:

- Una estaba orientada a **investigar**: incidencias, logs, tickets, documentación.

- La otra estaba orientada a **construir**: generar el código coherente de las seis capas.

La decisión de fusionarlas viene de una observación sencilla: **en el día real de un desarrollador esas dos cosas son el mismo hilo**. Un ticket empieza como «esto falla», se convierte en «hay que cambiar esto» y termina en «hay que documentar lo que se ha cambiado». Tener dos asistentes distintos para las dos mitades de la misma tarea no tenía sentido.

Y hay una segunda decisión igual de importante: **empaquetarlo**. Un puñado de instrucciones que cada uno guarda en su carpeta es una manía personal; se pierde, se desactualiza y no hay dos desarrolladores con el mismo asistente. Convertirlo en un producto instalable, con versión, con guía y con desinstalador, es lo que lo transforma en **una herramienta de equipo**. Se instala en unos cinco minutos, no necesita permisos de administrador y se puede desplegar de forma centralizada en las máquinas de todo el equipo.

El objetivo no era que Copilot escribiera más código. Era que todo el equipo tuviera acceso al mismo conocimiento —el que hasta ahora estaba repartido entre veteranos, wikis y costumbre— y lo tuviera disponible en el momento exacto en que lo necesita.

## Qué es, por dentro

La suite está hecha de tres tipos de piezas. Entender la diferencia entre ellas es entender el producto entero.

| **Pieza** | **Qué aporta** | **La analogía** |
|---|---|---|
| **Agentes** (3) | El criterio: escuchan lo que pide el usuario, deciden qué hay que hacer y en qué orden, y saben cuándo parar a preguntar | El responsable de equipo que reparte el trabajo |
| **Skills** (32) | El procedimiento: cada una es una tarea concreta explicada paso a paso, con las convenciones de GCO dentro | Los manuales de «cómo se hace esto aquí» |
| **MCPs** (5) | El acceso: son los conectores que permiten consultar de verdad Jira, Confluence, Elastic, DB2 y el navegador | Las llaves de cada sistema |

Y la regla que las une es siempre la misma: **el agente decide, la skill explica cómo se hace, el conector va a buscar el dato real**. Nada está duplicado. El agente no sabe generar código; la skill no sabe hablar con la base de datos; el conector no sabe qué se está intentando conseguir.

### Los tres agentes

Solo uno habla con el usuario. Los otros dos son especialistas a los que él llama cuando hacen falta.

- **El coordinador** es la puerta de entrada única. Escucha la petición en lenguaje natural —no hace falta aprenderse comandos—, decide qué tarea corresponde, y si el trabajo se puede repartir, lanza varias líneas de investigación en paralelo y devuelve una única respuesta consolidada.

- **El orquestador de cambios** entra en juego cuando un cambio afecta a más de una capa. Su trabajo es reconocer de qué tipo de cambio se trata —hay dieciocho situaciones típicas catalogadas— y poner las tareas en el orden correcto, que no es negociable.

- **El validador** es el control de calidad final. Comprueba, campo a campo, que las tres capas se entienden entre sí, aplicando doce reglas de coherencia. Es deliberadamente conservador: **detecta los problemas pero no los arregla por su cuenta**; señala qué hay que corregir y quién debe hacerlo.

### Las capacidades: qué sabe hacer

Las 32 skills cubren el ciclo completo de trabajo del equipo. Agrupadas por lo que resuelven:

| **Área**                   | **Qué resuelve**                                                                                                                                                                                                        |
|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Incidencias y logs**     | Buscar los errores de un proceso, dar el parte de salud del día, cruzar un ticket con las trazas reales y publicar un informe formal en el ticket                                                                       |
| **Tickets**                | Fijar un ticket como contexto de trabajo de la sesión, consultarlo, cerrarlo con el resumen de lo hecho, o crear uno nuevo directamente a partir de un error detectado en los logs                                      |
| **COBOL**                  | Entender un programa existente (qué hace, cómo fluye, qué tablas toca), depurarlo reuniendo documentación, código y errores de una sola vez, y generar programas nuevos con la estructura y las convenciones de la casa |
| **Base de datos**          | Consultar y modificar la estructura real, optimizar consultas lentas, proponer índices y generar scripts de corrección seguros (con verificación previa y marcha atrás)                                                 |
| **.NET**                   | Generar la capa de código que conecta la aplicación moderna con el mainframe, y depurar los componentes cuando fallan                                                                                                   |
| **Coherencia entre capas** | Antes de tocar nada, decir qué se va a ver afectado; después de tocarlo, verificar que todo encaja                                                                                                                      |
| **Documentación**          | Generar automáticamente el mapa de un flujo completo, con diagrama incluido, a partir de cualquier punto de entrada. Sirve para documentar lo que no está documentado y para incorporar gente nueva                     |
| **Trazabilidad**           | Saber quién y cuándo pasó un programa a producción, a qué llama y quién lo llama                                                                                                                                        |
| **Gestión ágil**           | Una familia pensada para Scrum Masters, no para desarrolladores: preparar el daily, planificar el sprint, cerrarlo y volcar la planificación del Excel del equipo a los tickets                                         |

## Cómo se ve en el día a día

### Ejemplo 1 — Investigar un fallo

El desarrollador escribe, tal cual: *«¿por qué falla este proceso?»*.

El coordinador lanza tres búsquedas **a la vez**: los errores en los logs, si ya hay algún ticket abierto sobre eso, y qué dice la documentación interna. Cuando las tres vuelven, no le entrega tres volcados: le entrega un informe consolidado con lo relevante. Y si de ahí sale que hay que abrir un ticket, lo redacta con el error real ya estructurado dentro y pide confirmación antes de crearlo.

**Lo que antes eran cinco pestañas y veinte minutos de recopilación, es ahora una frase.**

### Ejemplo 2 — Añadir un campo

Petición: *«añade la fecha de baja a la consulta de pólizas»*.

Parece un cambio pequeño y no lo es: toca cinco capas en cascada. El coordinador lo reconoce como tal y llama al orquestador, que hace lo siguiente:

1. Analiza qué se va a ver afectado

2. Escribe un plan y se lo presenta al desarrollador

3. ESPERA. No toca nada hasta que el plan se aprueba

4. Ejecuta capa por capa, en el orden correcto

5. Pasa el control de calidad campo a campo

6. Entrega un resumen de todo lo que ha hecho

El paso 3 es el que define el carácter del producto. **La suite no implementa nada por su cuenta.** Propone, enseña el plan, y espera. Lo mismo ocurre antes de publicar cualquier cosa en un ticket o de ejecutar cualquier acción que no tenga marcha atrás: siempre pide confirmación.

## Las decisiones de diseño que la definen

Más allá de lo que hace, hay cinco decisiones que explican por qué está construida así.

### 1. La base de datos manda

Cuando hay que saber cómo está definido un dato, la suite **nunca lo supone ni tira de memoria**: va y lo consulta en la base de datos real, en ese momento. Es la única fuente de verdad. Todo lo que genera después se apoya en ese dato verificado, y esa es la diferencia entre generar código reproducible y generar código plausible.

### 2. Nada se implementa sin aprobación

Para cualquier tarea que no sea trivial, el ciclo obligatorio es: analizar, escribir el plan, pedir aprobación, ejecutar, resumir. El desarrollador mantiene el control en todo momento y queda un rastro escrito de qué se hizo y por qué.

### 3. Una sola puerta de entrada

El usuario no tiene que aprenderse un catálogo de comandos ni elegir qué herramienta usar. Habla en lenguaje natural con un único interlocutor, y ese interlocutor decide —incluso encadenando varias tareas si hace falta—. Los comandos existen, pero son opcionales, para quien quiera control fino.

### 4. Las credenciales nunca viajan en el paquete

Los accesos de cada persona se registran una sola vez y se guardan cifrados en el almacén de credenciales de Windows, no en ficheros. Cada desarrollador trabaja con sus propios permisos: la suite no abre ninguna puerta que esa persona no tuviera ya abierta.

### 5. Lo que se mide, se queda en casa

Hay registro de uso —sirve para saber qué funciona y qué no—, pero es **completamente local**: se escribe en el propio ordenador, no sale por la red a ningún sitio, se anonimiza y se puede desactivar. Es una decisión consciente sobre datos de un cliente asegurador.

## Qué cambia para el equipo

| **Antes**                                                             | **Con la suite**                                    |
|-----------------------------------------------------------------------|-----------------------------------------------------|
| Cinco sistemas abiertos para diagnosticar un fallo                    | Una frase, y un informe consolidado                 |
| Las reglas de equivalencia entre capas, en la cabeza de los veteranos | Escritas, aplicadas y verificadas automáticamente   |
| Los errores de coherencia aparecen en ejecución, tarde                | Se detectan antes de cerrar el cambio               |
| Cada desarrollador con su propia forma de hacerlo                     | Un mismo procedimiento para todo el equipo          |
| Documentar el flujo de un proceso: días de trabajo manual             | Se genera desde cualquier punto de entrada          |
| Incorporar a alguien nuevo depende de quién tenga tiempo              | El conocimiento está disponible desde el primer día |

## Los números

**3** agentes que deciden  ·  **32** capacidades que ejecutan  ·  **5** sistemas conectados  
**6** capas de software cubiertas, de la base de datos a la pantalla  
**18** tipos de cambio catalogados  ·  **12** reglas de coherencia verificadas automáticamente  
**~5** minutos de instalación, sin permisos de administrador

## Ideas para contar

Los ángulos que mejor resumen el producto:

- **No es un asistente que escribe código: es un asistente que sabe dónde mirar.** El valor no está en generar líneas, está en reunir en segundos un contexto que estaba repartido en cinco sistemas.

- **Convierte conocimiento tácito en conocimiento verificable.** Reglas que vivían en la cabeza de los veteranos ahora están escritas y, sobre todo, se comprueban solas.

- **La IA con freno de mano.** Propone un plan, espera la aprobación, y detecta problemas sin arreglarlos por su cuenta. En un sistema crítico de seguros, esa contención es una función, no una limitación.

- **Mainframe e IA no son mundos opuestos.** Es exactamente el tipo de sistema —veterano, crítico, con conocimiento concentrado en pocas personas— donde una herramienta así aporta más.

- **De manía personal a herramienta de equipo.** Empaquetar, versionar y distribuir es lo que separa un truco individual de algo que mejora el trabajo de todo un departamento.
