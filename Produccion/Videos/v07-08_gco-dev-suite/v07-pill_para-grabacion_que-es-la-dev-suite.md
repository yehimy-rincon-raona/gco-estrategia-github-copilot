# Nombre del video: Qué es la Copilot Dev Suite y cómo la activas — Píldora ágil (Video 07)
## La capa que le enseña a GitHub Copilot dónde están los sistemas de GCO: qué es, cómo se instala y cómo se ve funcionando

> **Título corto en pantalla (esquina superior derecha, máx. 5 palabras):** `Activa la Copilot Dev Suite`

---

## Nota de producción — leer antes de generar la voz

**Fuente:** grabación del equipo de Nibaldo recibida el 28 ago 2026 (dos audios). Transcripción en `transcripciones/transcripcion_video_gco-dev-suite.md`; qué aporta y qué contradice, en `resumenes/que-aporta-esta-grabacion.md`. Las 51 capturas numeradas de esta carpeta corresponden al orden real de la grabación y sus nombres siguen el hilo de la transcripción.

**Duración objetivo: 2:45 – 3:00 min.** La grabación original es mucho más larga; esta píldora la condensa. Igual que en los Vídeos 05 y 06, **no se usa nada del audio original**: se monta al 100 % con voz en off nueva sobre los fragmentos de pantalla.

**Qué espera cada parte de este vídeo** — lo que se acordó en las reuniones del 18 y el 25 de agosto:

- **Óscar (GCO):** que sea **autoformativo**. Tiene que entenderlo alguien que **no hizo la formación**, incluido quien entre en septiembre. Y pidió expresamente *"un vídeo que muestre la instalación"*.
- **Nibaldo (Raona):** el encuadre es *"tienes esta cajita de herramientas, y estas son las herramientas que puedes ocupar; si necesitas algo más, nos lo pides"*.
- **Formato del proyecto:** corto, concreto, tono de colega. Nada de "la IA transformará tu trabajo".
- **La URL de Confluence no va en el vídeo.** Va en el post que lo acompaña, para que si la instalación cambia no haya que reeditar el vídeo. Acuerdo del 25 ago.

**Reparto con el Vídeo 04 — decidir antes de montar.** El Vídeo 04 ya cubre la instalación y las credenciales paso a paso. Este vídeo **las muestra condensadas**, no las explica: enseña que existe una guía y que son dos comandos, y quien necesite el detalle va al 04. Si en la reunión se decide que el 07 absorbe al 04, la sección 4 tiene que crecer.

**⚠️ Regla que atraviesa todo el guion: la voz en off no dice ninguna cifra.** Ni agentes, ni skills, ni conectores. La grabación muestra en pantalla **39 skills y 5 servidores MCP**, y las publicaciones ya producidas (Pub 14, 16, 18 y 19) dicen 3 agentes, 32 skills y 5 conectores. Hasta que Nibaldo aclare cuál es la cifra buena, **la narración habla de "agentes, skills y conectores" sin contarlos** — la pantalla enseña lo que enseña, y el vídeo no afirma un número que puede quedar desmentido.

**Cómo generar la voz:** Clipchamp, voz **Alessio Dragon HD Latest**. Copiar solo el texto de los bloques de voz en off. Si una frase queda con ritmo raro, dividirla en dos bloques.

**Pronunciación de términos en inglés** (solo en el texto hablado — los títulos y textos en pantalla conservan la escritura real):
`GitHub Copilot` → **GitHub-Copáilot** · `Dev Suite` → **Dev Suit** · `Jira` → **Yira** · `Confluence` → **Cónfluens** · `PowerShell` → **Páuer Shel** · `MCP` → **eme-ce-pe** · `PAT` → **pe-a-te**

**Nota de guion:** el asistente se nombra siempre **GitHub Copilot**, nunca solo "Copilot". El producto se nombra **Copilot Dev Suite** — que es como aparece en el portal de empresa; `gco-dev-suite` es el nombre de la carpeta instalada, y también se ve en pantalla. Ambos son correctos.

**Datos sensibles — revisar en edición:**
- Usuario y nombre de perfil en rutas y terminal.
- **El token, siempre.** Aparece en las capturas del PAT.
- Nombres reales de proyectos y tareas en las respuestas de Jira.
- **Los errores de conexión visibles** (`Failed to connect to MCP server "mcp-elastic"`) — decidir si se recortan. Son reales y honestos, pero en un vídeo de bienvenida pueden leerse como que la instalación falló. **Recomendación: recortar el encuadre en las secciones 3 y 5, y no mencionarlos.**
- Las direcciones `proyectos.gco.global` y `soporte.gco.global` **sí se dejan visibles**: son las que la persona necesita para crear sus tokens.

---

### Sección 1 · GitHub Copilot ya sabe programar. No sabe de GCO. *(~30 s)*

**Voz en off:**
> GitHub-Copáilot ya lo tienes. Es la aplicación desde la que hablas con los modelos de inteligencia artificial que incluye la suscripción, y se va actualizando conforme salen modelos nuevos.
>
> Sabe programar. Lo que no sabe es cómo se hacen las cosas aquí: no conoce las convenciones de la casa, no puede consultar tus sistemas y no ve tus registros de errores.
>
> La Copilot Dev Suit es la capa que le da eso. No es otra aplicación, no hay nada nuevo que abrir: es la misma que ya usas, con las herramientas de GCO dentro.

**Qué mostrar en pantalla:**
- Capturas `01` y `02` — la aplicación de GitHub Copilot abierta.
- Capturas `03` a `06` — el selector de modelos, mientras la voz habla de la suscripción.
- Capturas `07` y `08` — la barra inferior **sin** indicador de Dev Suite, cuando la voz dice "lo que no sabe es cómo se hacen las cosas aquí".

Texto en pantalla: **"La misma aplicación. Con las herramientas de GCO dentro."**

---

### Sección 2 · Antes y después, en la misma pantalla *(~35 s)*

**Voz en off:**
> Se nota a simple vista. Sin la suite, el comando eme-ce-pe show lista los conectores que tienes configurados, y hay uno. Las herramientas disponibles son un par de utilidades genéricas: nada de COBOL, nada de bases de datos.
>
> Con la suite instalada, la barra inferior cambia. Ahí aparecen los conectores a Yira, Cónfluens, Elástic, de-be-dos y los demás sistemas, y las herramientas especializadas que trae el paquete.

**Qué mostrar en pantalla:**
1. Captura `09` y `10` — se escribe `mcp show`.
2. Captura `11` — el resultado: un solo conector. **Dejarlo en pantalla el tiempo suficiente para que se lea.**
3. Capturas `12` y `13` — las dos herramientas genéricas disponibles.
4. **Corte directo** a la captura `21` — la barra inferior con la suite cargada y la lista de conectores. El contraste entre `11` y `21` es el argumento entero de la sección: no hace falta narrarlo más.

Texto en pantalla: **"Sin la suite"** sobre las primeras capturas, y **"Con la suite"** sobre la última.

> **Nota de edición:** en la captura `21` la barra dice `39 skills, 5 MCP servers`. **Se muestra tal cual, sin lupa ni destacado, y la voz no lo lee.** Ver la regla de las cifras en la nota de producción.

---

### Sección 3 · Se instala desde el portal de empresa *(~30 s)*

**Voz en off:**
> Instalarla es un clic. Entras al portal de empresa, buscas la Copilot Dev Suit y le das a instalar. Tarda unos cinco minutos, se instala en tu perfil de usuario y no necesita permisos de administrador.
>
> Para comprobar que quedó bien, abre una terminal — da igual dónde — y escribe: copilot. Si en la barra de abajo aparece el nombre de la suite con su versión, ya está.

**Qué mostrar en pantalla:**
- Capturas `14` a `17` — la ficha de la Copilot Dev Suite en el portal de empresa.
- Captura `18` — el clic en **Instalar**.
- Capturas `19` y `20` — la terminal, escribiendo `copilot`.
- Captura `21` — **zoom a la esquina inferior izquierda**, donde se lee el nombre de la suite y su versión.

Texto en pantalla: **"Portal de empresa → Instalar"**, después **"~5 minutos · sin permisos de administrador"**.

---

### Sección 4 · Un paso más: darle tus llaves *(~45 s)*

**Voz en off:**
> Falta un paso, y es el único que pide algo de ti: darle permiso para entrar a los sistemas con tus propias credenciales.
>
> La guía está en la unidad común, dentro de la carpeta de la Copilot Dev Suit. Ábrela y ve al paso cinco. Ahí tienes dos comandos: los copias, los pegas en Páuer Shel, y el programa te pide tu usuario y un token de Yira, y después el de Cónfluens.
>
> El token se crea desde tu perfil, en la sección de tokens personales de acceso. Solo se muestra una vez, así que cópialo antes de cerrar la ventana. Y una cosa importante: tus credenciales se guardan cifradas en el almacén de Windows. No hay ningún fichero que editar, y la suite no abre ninguna puerta que tú no tuvieras ya abierta.
>
> Si no tienes permisos en Cónfluens, no pasa nada: dejas ese campo vacío y sigues. Le ocurre a bastante gente y el resto funciona igual.

**Qué mostrar en pantalla:**
1. Capturas `22` a `25` — explorador de archivos, unidad común, carpeta y doble clic en la guía.
2. Captura `26` — la guía abierta. **Destacar el paso 5 en la barra lateral**, no leer los siete pasos.
3. Captura `27` y `46` (mitad izquierda) — el bloque del paso 5 con los comandos y el aviso de que las credenciales se guardan en el almacén de Windows.
4. Capturas `28` a `34` — la creación del token en Jira, en secuencia rápida: perfil → tokens personales → crear → nombre → copiar. **Difuminar el token.**
5. Capturas `35` y `36` — el acceso a Confluence, mientras la voz menciona el caso de los permisos.
6. Capturas `37` a `40` — copiar los comandos, pegarlos en PowerShell y el programa pidiendo usuario y token.
7. Captura `41` — DB2, solo de paso.

Texto en pantalla: **"Guía → Paso 5"**, después **"Se guarda cifrado. No hay fichero que editar."** y al cierre **"¿Sin permisos en Confluence? Déjalo vacío y sigue."**

> **Nota de edición:** esta es la sección que más hay que condensar. En la grabación ocupa la mayor parte del metraje; aquí tiene que caber en 45 segundos. **Se enseña que existe una guía y que son dos comandos — no se explica cada campo.** Quien necesite el paso a paso completo tiene el Vídeo 04 y la guía.

---

### Sección 5 · Cómo se siente al usarla *(~40 s)*

**Voz en off:**
> Y ya está. A partir de aquí no hay comandos que aprenderse: le escribes en lenguaje natural lo que necesitas.
>
> Mira lo que pasa cuando le pides las tareas que tienes asignadas para hoy. Nadie le dijo qué herramienta usar: la elige él, arma la consulta a Yira, te la enseña, y se detiene a preguntarte si la ejecuta. Tú decides.
>
> Esa pausa no es un tropiezo: es cómo está construida la suite. Propone y espera. Y si no encuentra exactamente lo que pediste, busca lo relacionado en vez de devolverte una pantalla vacía.
>
> Arriba a la izquierda, además, tienes siempre a la vista cuánto contexto llevas gastado en la conversación, sin ejecutar nada.

**Qué mostrar en pantalla:**
1. Capturas `42` y `43` — la suite cargando y el prompt escrito: *"Hola buenos días,"*.
2. Captura `44` — la petición completa en lenguaje natural.
3. Captura `45` — la herramienta que elige sola.
4. **Captura `46` — el plano más importante de la píldora.** Se ve la consulta que ha construido y, debajo, la pregunta **"Do you want to use this tool?"** con las opciones. **Dejarla el tiempo suficiente para leerla; es la prueba de que no actúa sola.**
5. Captura `47` — la búsqueda en marcha.
6. Cierre con **zoom a `ctx:3%`** en la barra inferior, mientras la voz habla de la ventana de contexto.

Texto en pantalla: **"Una frase. Sin comandos."**, después **"Te enseña qué va a hacer y espera tu confirmación"** y al final **"El contexto, siempre a la vista"**.

> **Nota de edición:** **no se muestra el resultado final de la consulta.** En la grabación no llega a verse — él mismo dice que probablemente no tiene tareas asignadas, y el audio se corta. El vídeo cierra en el momento de la confirmación, que además es el más valioso. Las capturas `48`, `49` y `50` (la búsqueda por otro usuario) **no se usan**: llevan un nombre real y no aportan al argumento.

---

### Sección 6 · Cierre *(~15 s)*

**Voz en off:**
> La guía completa está en la carpeta de la Copilot Dev Suit, en la unidad común, y también te la dejamos en el mensaje que acompaña a este vídeo.
>
> Si te falta una herramienta para lo que haces cada día, dilo en el canal. La suite crece con lo que pida el equipo.

**Qué mostrar en pantalla:**
- Captura `26` — la guía abierta, plano fijo.
- Cierre con el logo Occident y el título corto.

Texto en pantalla: **"La guía está en el mensaje de este vídeo"** y **"¿Te falta una herramienta? Dilo en el canal."**

> **El enlace de Confluence va en el post, no aquí.** Cuando Nibaldo lo entregue, entra en el mensaje que acompaña al vídeo.

---

## Lo que este vídeo NO cubre

Queda dicho para que no se le pida a esta píldora lo que no puede dar:

- **Los agentes trabajando.** No hay material. Es el **Vídeo 08** — ver la lista de ocho momentos en `planteamiento-grabacion_videos-07-08.md`.
- **El catálogo de herramientas.** Se ve el número al cargar, pero no cuáles son ni para qué sirve cada una. Es lo que pidió Óscar como paso siguiente: caso de uso y ejemplo por componente.
- **Una petición que toque varios sistemas a la vez.** La prueba consulta solo Jira. El relato de *"una frase en vez de cinco pestañas"* necesita ver dos o tres conectores respondiendo juntos.

---

## Procedencia del contenido

| Elemento del guion | De dónde sale |
|---|---|
| Qué es GitHub Copilot y qué le falta para GCO | Transcripción, parte 1 · `información-equipo-raona-gco-devsuite.md` — "El problema que había detrás" |
| "No es otra aplicación, es una capa encima" | Transcripción, parte 1 (literal del hablante) |
| `mcp show` con un conector frente a la barra con la suite cargada | Transcripción, parte 1 · capturas `10`, `11`, `21` |
| Instalación desde el portal, ~5 minutos, sin permisos de administrador | Transcripción, parte 1 · guía `gco-dev-suite`, captura `26` |
| La guía en la unidad común y el paso 5 | Transcripción, parte 2 · capturas `23`–`27` |
| Credenciales cifradas en el almacén de Windows, sin fichero que editar | Captura `46` (guía, paso 5) · `información-equipo-raona-gco-devsuite.md` — decisión de diseño 4 |
| "La suite no abre ninguna puerta que tú no tuvieras ya abierta" | `información-equipo-raona-gco-devsuite.md` — decisión de diseño 4 |
| El caso de los permisos de Confluence | Transcripción, parte 2 (el hablante dice que a mucha gente le pasa) |
| Elige la herramienta sola, sin comandos | Transcripción, parte 1 — autodescubrimiento |
| Se detiene a pedir confirmación | Captura `46` — "Do you want to use this tool?" · `información-equipo-raona-gco-devsuite.md` — decisión de diseño 2 |
| Si no encuentra lo pedido, busca lo relacionado | Transcripción, parte 2 (literal del hablante) |
| La ventana de contexto en porcentaje | Transcripción, parte 2 · capturas `21`, `46` (`ctx:0%`, `ctx:3%`) |
| "Si te falta una herramienta, dilo en el canal" | Encuadre de Nibaldo en la reunión del 25 ago — *"si necesitas algo más, nos lo pides"* |
