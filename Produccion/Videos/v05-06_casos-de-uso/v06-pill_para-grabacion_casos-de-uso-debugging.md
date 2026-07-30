# Nombre del video: Dos bugs de pantalla resueltos con GitHub Copilot — Píldora ágil (Video 06)
## Debugging del frontend al COBOL: el botón de opción que se reseteaba y el combo que se recalculaba

> **Título corto en pantalla (esquina superior derecha, máx. 5 palabras):** `Debugging real con GitHub Copilot`

---

## Nota de producción — leer antes de generar la voz

Esta píldora sale de la **misma grabación fuente del Video 05**: entrevista de Víctor Gisbert Climent a Luis De la Fuente Velado (desarrollador de GCO), 22 de junio de 2026. Ver la nota de producción completa (datos de la fuente, anonimato, visor de sesiones) en `pill_para-grabacion_casos-de-uso-reales.md` — **aplica todo igual aquí**.

Usa los 2 casos de **debugging** que quedaron fuera del Video 05: el botón de opción que se resetea y el combo que se recalcula al grabar. Duración objetivo: **1:45 – 2:15 min**.

**Canal destino:** Casos de Uso Reales.

**Cómo generar la voz:** Clipchamp, voz **Alessio Dragon HD Latest**. Fonética en los bloques de voz: **"Copilot" → "Copáilot"**, **".NET" → "punto net"**. El texto en pantalla conserva la escritura real. El asistente se nombra siempre **GitHub Copilot**.

**Datos sensibles — difuminar en edición** (misma lista del Video 05, y en esta píldora en particular):
- El recuadro de la reunión de Teams con la cámara de Luis.
- La **URL de producción** (`catalanadaplicaciones.gco.global`) y el **número de operativa real** que aparecen en el caso de los combos — se ve el portal en producción.
- IDs de sesión, rutas con proyectos reales y nombres de COBOLs en las tool calls.
- El rótulo del visor "Gestor Sesiones Copilot" cuando quede protagónico.

---

### Sección 1 · Intro compartida con el Video 05

> **Nota de producción (decisión del 10 jul 2026):** esta píldora usa el **mismo audio de intro que el Video 05** (Sección 1 de `v05-pill_para-grabacion_casos-de-uso-reales.md`). Se graba una sola vez y abre ambas píldoras; el texto dice "estos casos" sin fijar cantidad. No grabar un audio distinto para esta sección.

**Voz en off (la misma del Video 05 · Sección 1):**
> ¿Funciona GitHub-CopÁilot con el código real de GCO? Estos casos nacen del trabajo diario del equipo, en punto net, GAN y CÓBOL. No son demos: son sesiones reales de GitHub-CopÁilot.
>
> Para verlas usamos una interfaz en HTML creada dentro del propio equipo: lee la carpeta local donde GitHub-CopÁilot guarda sus sesiones y muestra cada una tal cual quedó — la petición que se le hizo, los pasos que fue ejecutando y el resultado final. Con ella vamos a recorrer cada caso.
>
> El método detrás de todos es simple: una carpeta por tarea, y adentro solo el código que GitHub-CopÁilot debe revisar. Con el contexto justo, no se pierde buscando información.

**Qué mostrar en pantalla:**
Fotograma de apertura con las sesiones en el visor (reutilizar un plano general del Video 05) o portada gráfica.

Texto en pantalla: **"2 bugs reales · del frontend al CÓBOL"**.

---

### Sección 2 | Caso 01 · Error 1: el botón de opción que se reseteaba

**Voz en off:**
> Primer error: un formulario con un botón de opción que marca si la gestión es de defensa o de reclamación. Al dar de alta y recargar la página, ese botón de opción se cambiaba solo de una opción a la otra, arrastrando otros datos de la pantalla.
>
> GitHub-CopÁilot revisó el JavaScript del formulario y encontró la causa: al pulsar el alta se calculaba una variable que no se guardaba ni se reinyectaba al volver del servidor. Su valor se perdía en cada recarga.
>
> La solución: mantener una variable de estado que solo se carga al inicio de la aplicación. GitHub-CopÁilot ajustó el JavaScript, validó el cambio, y el formulario dejó de perder los datos.

**Qué mostrar en pantalla:**
- La sesión "fix radio button state reset" (`30`).
- El análisis de GitHub Copilot y su respuesta (`31`–`34_gestor-sesiones-incidencia02-respuesta-del-analisis-del-copilot`).

Texto en pantalla: **"Botón de opción que se resetea → variable de estado que no se guardaba"**.

---

### Sección 3 | Caso 02  · Error 2: el combo que se recalculaba al grabar

**Voz en off:**
> Segundo error, en una pantalla antigua con muchas listas desplegables — los combos — que dependen unas de otras: eliges un valor en una y se recalculan las demás.
>
> Una de esas listas es la de situación, que indica el estado en el que queda el caso. El usuario elegía la situación "rehabilitado" y grababa. Pero al grabar, la pantalla mostraba otra situación: "iniciada". Lo que el usuario había elegido se perdía.
>
> Encontrar el porqué a mano era complicado, con tantos campos recalculándose entre sí. GitHub siguió el recorrido completo, desde los eventos de la pantalla hasta los CÓBOL que se llaman por debajo, y encontró la causa: al grabar, la pantalla se volvía a rellenar y recalculaba la situación desde cero, pisando la elegida, porque uno de los valores nunca se estaba guardando.
>
> La instrucción fue simple: si viene "rehabilitado", mantenlo. GitHub-CopÁilot hizo el ajuste y la situación dejó de recalcularse al grabar.

**Qué mostrar en pantalla:**
1. La sesión "debug situación value change" (`34_gestor-sesiones-incidencia03-debug-situacion-calue-change`).
2. La operativa en el portal, el combo de situación y el cambio (`49`–`53`). **Difuminar URL de producción y número de operativa.**
3. Cómo identifica el problema, la revisión y la solución (`54`–`57`).

Texto en pantalla: **"Combo que se recalcula al grabar → rastreó del front al COBOL"**.

---

### Sección 4 · Cierre

**Voz en off:**
> Los dos errores se resolvieron con el mismo método, en tres pasos. Uno: una carpeta con solo el código que hay que revisar. Dos: describirle a GitHub-CopÁilot el síntoma tal como lo ve el usuario — qué hiciste y qué pasó en la pantalla. Tres: dejar que recorra el código completo, de la pantalla al COBOL, y dé con la causa.
>
> ¿Llevas días con un error que no logras encontrar? Prueba este método y cuéntanos cómo te fue en el canal de Casos de Uso.

**Qué mostrar en pantalla:**
Fotograma de la solución del bug 2 (`56` o `57`) o cierre gráfico de marca.

Texto en pantalla: **"1 carpeta con el código · el síntoma · deja que rastree"** y al cierre el CTA: **"Cuéntanos tu bug → canal Casos de Uso Reales"**.

---

## Fuera de esta píldora (decisión de guion)

- Los 3 casos principales de la grabación (incidencia PDF, GAN generado, servicio externo) → **Video 05**.
- El comentario de Luis sobre el modo autopilot y los permisos: detalle de configuración personal, no aporta al mensaje.
- Todo lo listado en "Fuera de esta píldora" del Video 05 (modelos y créditos, MCP locales, herramienta del hackathon, UTF-8, capturas `77`–`84`).

---

## Recomendaciones para edición

- Duración objetivo: **1:45 – 2:15 min** — es la píldora corta de la pareja.
- Los dos casos tienen la misma estructura narrativa (síntoma raro en pantalla → GitHub Copilot rastrea el código → causa → ajuste): mantener el mismo ritmo visual en ambos para que se sienta el "método".
- En el bug 2, el plano del portal en producción es el más delicado de toda la grabación: **difuminar URL, número de operativa y datos del siniestro** antes de cualquier revisión externa.

---

## Tabla de correspondencia — rótulos en pantalla (para el editor)

| Sección | Momento | Imágenes | Texto en pantalla | Texto lateral |
|---------|---------|----------|-------------------|---------------|
| S1 | Apertura | plano general del visor o portada | 2 bugs reales · del frontend al COBOL | Sesiones reales del trabajo diario del equipo |
| S2 | Sesión del botón de opción | `30` | Botón de opción que se resetea | — |
| S2 | Análisis y respuesta | `31`–`34` (incidencia02) | La variable no se guardaba ni se reinyectaba | — |
| S3 | Portal con la operativa y el combo | `49`–`53` | Al grabar, la situación se recalculaba sola | Datos de la operativa difuminados por confidencialidad |
| S3 | Diagnóstico y solución | `54`–`57` | Rastreó del front al COBOL | — |
| S4 | Cierre — el método en 3 pasos | `56`/`57` o cierre de marca | 1 carpeta con el código · el síntoma · deja que rastree | — |
| S4 | CTA final | cierre de marca | Cuéntanos tu bug → canal Casos de Uso Reales | — |
