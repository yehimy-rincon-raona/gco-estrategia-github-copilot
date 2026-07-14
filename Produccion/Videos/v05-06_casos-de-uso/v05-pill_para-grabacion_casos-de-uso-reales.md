# Nombre del video: GitHub Copilot con código real de GCO: incidencias, GAN y producción — Píldora ágil (Video 05)
## 3 casos compartidos desde GCO: una incidencia resuelta desde el PDF, una operativa GAN generada con contexto y un cambio ya en producción

> **Título corto en pantalla (esquina superior derecha, máx. 5 palabras):** `Casos reales con GitHub Copilot`

---

## Nota de producción — leer antes de generar la voz

Esta píldora cubre el guion de voz en off para la **grabación de la entrevista de Víctor Gisbert Climent a Luis De la Fuente Velado (desarrollador de GCO)**, realizada el **22 de junio de 2026** (duración: al menos ~29 min — el contador del recuadro de la reunión marca 28:41 durante el último caso). Nombre del archivo de video fuente: `[No hay información — confirmar con Yehimy]`.

La grabación es una **conversación**, no un tutorial: **no se usa nada del audio original**. La píldora se monta 100 % con voz en off nueva, sincronizada con fragmentos de la pantalla compartida. Duración objetivo: **2:30 – 3:00 min**.

**Qué muestra la pantalla:** Luis navega un **visor HTML de sus sesiones pasadas de GitHub Copilot** (rótulo "Gestor Sesiones Copilot"). **Decisión de guion (9 jul): la voz en off SÍ explica el entorno al inicio** — una interfaz en HTML **creada dentro del propio equipo** (nació en el hackathon interno) que lee la carpeta local de sesiones de GitHub Copilot y muestra cada sesión (petición, pasos, resultado); sin eso la audiencia no entiende qué está mirando. Se le da valor como trabajo interno, **sin presentarla como producto disponible**: no se dice su nombre ("Gestor Sesiones Copilot") ni cómo conseguirla. Si el encuadre muestra el rótulo del visor de forma protagónica, difuminarlo.

**Canal destino:** Casos de Uso Reales. Es una píldora de **concienciación** (qué es posible con código real de GCO), no un paso a paso.

**Reparto de la grabación:** esta grabación trae 5 casos. Esta píldora usa los casos de la incidencia en PDF, la operativa GAN generada y el servicio externo. Los otros 2 casos (radio button y combos interrelacionados) se producen aparte como **Video 06** — ver `pill_para-grabacion_casos-de-uso-debugging.md`.

**Anonimato del protagonista:** por defecto la voz en off **no menciona el nombre de Luis, ni habla de "un desarrollador", ni usa "desde GCO nos compartieron"** — el marco es el trabajo mismo: **"estos casos salieron del trabajo diario del equipo"** (decisión de Yehimy, 9 jul: referirse a una persona anónima suena despectivo, y "nos compartieron" confunde porque la audiencia es el propio GCO). Si se quiere dar crédito en pantalla, confirmar antes con él y con Nibaldo. En cualquier caso, difuminar su cámara y su nombre de perfil (ver lista de datos sensibles).

**Cómo generar la voz:**
La voz en off se genera con **Clipchamp**, usando la voz **Alessio Dragon HD Latest**. Copiar únicamente el texto del bloque de voz en off (sin comillas ni encabezados) y pegarlo en el campo de texto de Clipchamp. Si alguna frase queda con ritmo extraño, dividirla en dos bloques separados.

**Pronunciación de términos en inglés:** esta voz no lee bien las palabras en inglés. En los bloques de voz en off, los términos problemáticos se escriben **fonéticamente** (no cambia el texto en pantalla ni los títulos, que conservan la escritura real). Convención aplicada en este guion: **"Copilot" → "Copáilot"**, **".NET" → "punto net"**, **"JSON" → "yeison"**. Si al generar el audio detectas otra palabra mal pronunciada (por ejemplo "backend", "frontend" o "GitHub"), escríbela fonéticamente igual antes de regenerar.

**Datos sensibles — difuminar en edición:**
- El **recuadro de la reunión de Teams** (esquina inferior derecha) con la cámara de Luis y las miniaturas — recortar el encuadre o cubrirlo siempre.
- El nombre de perfil **"Luis Marco, GCO"** en el explorador de Windows.
- **IDs de sesión** del visor (ej. `e2b56271-…`) y rutas con nombres reales de proyectos (`C:\Proyectos\…`, `C:\VSNET\…`).
- La **URL de producción** (`catalanadaplicaciones.gco.global`) y los números reales de siniestro y operativa.
- El **ticket Jira real de la incidencia** (`SOLDES-22195` y sus datos) visible en el PDF abierto en el navegador.
- Los **JSON del servicio externo**: contienen scores y datos de personas — difuminar siempre el contenido.
- El nombre del **servicio externo (Equifax)** en rutas y carpetas — la voz en off no lo nombra; se recomienda difuminarlo también en pantalla.
- Nombres reales de **COBOLs y módulos** (`STAR…`) visibles en las tool calls de las sesiones — mismo criterio que en el Video 04 con las BBDD.
- El rótulo del visor **"Gestor Sesiones Copilot"** cuando quede protagónico en el encuadre.

**Nota de guion:** el asistente se nombra siempre **GitHub Copilot**.

---

### Sección 1 · Casos reales, no demos

> **Nota de producción:** esta intro es **compartida con el Video 06** — se graba una sola vez y el mismo audio abre ambas píldoras. Por eso el texto no menciona la cantidad de casos (tres aquí, dos en el 06): dice "estos casos", no "estos tres casos".

**Voz en off:**
> ¿Funciona GitHub Copáilot con el código real de GCO? Estos casos nacen del trabajo diario del equipo, en punto net, GAN y COBOL. No son demos: son sesiones reales de GitHub Copáilot.
>
> Para verlas usamos una interfaz en HTML creada dentro del propio equipo: lee la carpeta local donde GitHub Copáilot guarda sus sesiones y muestra cada una tal cual quedó — la petición que se le hizo, los pasos que fue ejecutando y el resultado final. Con ella vamos a recorrer cada caso.
>
> El método detrás de todos es simple: una carpeta por tarea, y adentro solo el código que GitHub Copáilot debe revisar. Con el contexto justo, no se pierde buscando información.

**Qué mostrar en pantalla:**
- Mientras la voz dice "una página HTML que lee la carpeta local": el archivo `visor-sesion-copilot.html` en el explorador (`01`) y la apertura del visor en el navegador con las sesiones cargadas (`02`–`06`). Difuminar rótulo del visor, nombre de perfil e IDs.
- Mientras la voz enumera las tres partes de una sesión, zoom a una sesión abierta donde se distingan: el prompt del usuario, los pasos ejecutados (tool calls) y la respuesta (`21` sirve de referencia).
- Explorador de Windows con la carpeta de proyectos y sus subcarpetas, sincronizado con el bloque del método (plano de la carpeta `Proyectos`, imagen `10`). Difuminar el nombre de perfil.

Texto en pantalla: **"Casos reales · .NET · GAN · COBOL"**, después **"Una interfaz HTML con las sesiones guardadas: petición → pasos → resultado"** y al cierre **"1 carpeta por tarea = el contexto justo"**.

---

### Sección 2 · Caso 1: la incidencia que llegó en PDF

**Voz en off:**
> Primer caso: una incidencia que llegó como PDF, con pantallas escaneadas. El prompt fue directo: revisa el PDF de la incidencia, analízalo y genérame un documento con la causa y la posible solución. Te dejo el código en las carpetas GAN y COBOL.
>
> GitHub Copáilot extrajo las imágenes del PDF, leyó la operativa punto net y los COBOL asociados, y generó un informe en español con la causa: la pantalla tiene una lista desplegable para elegir la figura — el asegurado o el perjudicado — y una tabla con sus garantías. Al cambiar de una figura a otra, la tabla no se vaciaba, y las garantías de una se acumulaban con las de la otra: por eso salían duplicadas.
>
> Y no se quedó en el diagnóstico: aplicó la limpieza en el backend y además corrigió en el COBOL un dato que llegaba con caracteres extraños. Una incidencia completa, resuelta de una sola tirada.

**Qué mostrar en pantalla (en orden, sincronizado con la voz):**
1. La sesión de la incidencia seleccionada y el documento PDF original (`07`–`16`).
2. Las imágenes extraídas del PDF por GitHub Copilot (`17`, `18`).
3. El prompt donde deja los COBOL asociados (`20_deja-los-cobol` y `20_deja-los-cobol-asociados-a-esa-operativa`).
4. El desglose de lo que hizo: extrae texto del PDF, lee los ficheros COBOL (`21`).
5. El resumen tras el contexto, el diagnóstico ("lo que sucedía era…") y la posible solución (`22`–`24`).
6. La conversación, lo que termina haciendo y los resultados (`25`–`28`).

Texto en pantalla: **"PDF de incidencia → causa + solución + código corregido"**.

> **Nota edición:** este caso es el corazón de la píldora — es el flujo que cualquier developer de GCO reconoce. Darle el mayor tiempo en pantalla de los tres.

---

### Sección 3 · Caso 2: una operativa GAN completa, generada con contexto

**Voz en off:**
> Segundo caso: generar una operativa GAN completa. GAN tiene estructura, controles y XML propios, así que trabajarlo con inteligencia artificial puede parecer complicado. Este caso muestra una forma de lograrlo.
>
> El punto de partida: una aplicación de Windows con todo el negocio embebido en un formulario, y la petición de extraer ese negocio y generar un backend. El truco fue el contexto: una carpeta con treinta o cuarenta ejemplos de código, y la instrucción de usar la misma estructura y solo los controles permitidos.
>
> GitHub Copáilot generó el backend, la operativa GAN y su XML. Funciona, y solo necesitó dos ajustes manuales. La conclusión: se puede, si le das el contexto suficiente para que sepa cómo hacerlo.

**Qué mostrar en pantalla:**
- La carpeta de la aplicación original (`35_carpeta-analizador-logs-be-zip` y la vista `44_carpeta-genera-un-backend-vista-de-gannt`).
- La sesión "genera un backend" y el momento donde le puso el contexto (`35`–`43`, `43`/`44_…le-puso-contexto`).
- El resultado abierto en Visual Studio (`46`–`48`).

Texto en pantalla: **"30–40 ejemplos como contexto → operativa GAN completa"** y después **"Solo 2 ajustes manuales"**.

---

### Sección 4 · Caso 3: un backend con servicio externo — y en producción

**Voz en off:**
> Tercer caso: un backend puro de punto net, sin pantalla, que consulta un servicio externo para validar si una persona es confiable. El servicio responde con un yeison: un paquete de datos.
>
> Ese paquete empezó a llegar con campos nuevos, y un campo vacío o inexistente podía romper el código. GitHub Copáilot recibió el código y un yeison real, con una instrucción clara: contrólalo para que no falle. Hizo el ajuste, y lo repitió en las tres versiones del código que consumen el servicio.
>
> Después, ya en producción, se detectó otro problema: cuando el servicio devolvía un error, ese error no quedaba registrado en ninguna parte. Con la estructura de las tablas como contexto, GitHub Copáilot modificó el código para guardarlo. Y ese cambio está hoy en producción, funcionando.

**Qué mostrar en pantalla:**
- La sesión del servicio externo: búsqueda, ejemplo encontrado y ajustes (`58`–`76`). **Difuminar siempre** el contenido de los JSON (datos de personas) y el nombre del servicio en rutas.

Texto en pantalla: **"Backend + servicio externo → cambio en producción"**.

---

### Sección 5 · Cierre

**Voz en off:**
> ¿La ganancia? Tiempo y, sobre todo, contexto. Aunque no conozcas la aplicación, GitHub Copáilot te la explica: partes de una operativa GAN y terminas entendiendo el COBOL que hay detrás.
>
> Todos estos casos son código real de GCO. El siguiente puede ser el tuyo: cuéntanos en el canal de Casos de Uso qué quieres resolver.

**Qué mostrar en pantalla:**
Fotograma de los resultados del caso 1 (`27` o `28`) o cierre gráfico de marca.

Texto en pantalla: **"Tiempo y contexto"** y después el CTA: **"Cuéntanos tu caso → canal Casos de Uso Reales"**.

---

## Fuera de esta píldora (decisión de guion)

De la grabación original se dejan **fuera** de esta píldora:
- **Casos "radio button" y "combos interrelacionados"** → van al **Video 06** (`pill_para-grabacion_casos-de-uso-debugging.md`).
- La **charla de modelos y créditos** (GPT/Sonnet/Opus, los "4000 créditos"): es conversación interna entre expertos, no aporta al mensaje del canal.
- Los **MCP modificados en local** por Luis: no es el flujo oficial.
- La **herramienta del hackathon** (visor de sesiones de Óscar de GCA): se usa solo como soporte visual, sin nombrarla, porque no es una herramienta oficial distribuida.
- El comentario del **cambio de codificación / acentos rotos (UTF-8)**: es una limitación real pero requiere más contexto del que cabe en la píldora.
- Las capturas `77`–`84` (cierre de la reunión e "incidencia05 AUT85S01"): ese caso aparece en pantalla pero no tiene narración suficiente en la transcripción para contarlo sin inventar.

---

## Recomendaciones para edición

- Duración objetivo: **2:30 – 3:00 min**. La grabación fuente dura ~29 min o más; los fragmentos se usan como soporte visual de la voz, no como narración.
- El material visual es mayormente **scroll sobre sesiones ya ejecutadas** (texto en pantalla): usar zooms a los prompts y a las respuestas clave para que se lean, y evitar planos generales largos donde el texto no se distingue.
- **Recortar o cubrir siempre** el recuadro de la reunión de Teams (cámara de Luis) — aparece en casi toda la grabación.
- El momento más citable es la frase del caso GAN ("se puede si le das el contexto suficiente") — sincronizar el rótulo con ese golpe de voz.

---

## Tabla de correspondencia — rótulos en pantalla (para el editor)

**Cómo leer esta tabla:**
- **Texto en pantalla** = rótulo principal que resume el momento.
- **Texto lateral** = aviso fijo en franja lateral o inferior, en fondo semitransparente.
- Esta tabla NO cambia la voz en off; solo define lo que se escribe en pantalla.

| Sección | Momento | Imágenes | Texto en pantalla | Texto lateral |
|---------|---------|----------|-------------------|---------------|
| S1 | HTML en el explorador + visor abierto con sesiones | `01` · `02`–`06` | Casos reales · .NET · GAN · COBOL | Sesiones reales del trabajo diario del equipo |
| S1 | Zoom a una sesión abierta (prompt, pasos, respuesta) | `21` (referencia) | Una interfaz HTML con las sesiones guardadas: petición → pasos → resultado | Herramienta creada internamente en el equipo |
| S1 | Carpeta de proyectos en el explorador | `10` | 1 carpeta por tarea = el contexto justo | — |
| S2 | PDF de la incidencia + imágenes extraídas | `07`–`18` | PDF de incidencia → causa + solución | Datos de la incidencia difuminados por confidencialidad |
| S2 | Desglose, diagnóstico y solución | `20`–`24` | Leyó el .NET y los COBOL asociados | — |
| S2 | Resultados | `25`–`28` | Código corregido de una sola tirada | — |
| S3 | Carpeta de contexto + sesión de generación | `35`–`45` | 30–40 ejemplos como contexto → operativa GAN completa | — |
| S3 | Resultado en Visual Studio | `46`–`48` | Solo 2 ajustes manuales | — |
| S4 | Sesión del servicio externo | `58`–`76` | Backend + servicio externo → cambio en producción | Datos del servicio difuminados por confidencialidad |
| S5 | Cierre | `27`/`28` o cierre de marca | Cuéntanos tu caso → canal Casos de Uso Reales | — |
