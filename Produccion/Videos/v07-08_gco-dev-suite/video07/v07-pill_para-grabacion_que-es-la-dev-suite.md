# Nombre del video: Qué es la Copilot Dev Suite y cómo la activas — Píldora ágil (Video 07)
## La capa que le enseña a GitHub Copilot dónde están los sistemas de GCO: qué es, cómo se instala y cómo se ve funcionando

> **Título corto en pantalla (esquina superior derecha, máx. 5 palabras):** `Activa la Copilot Dev Suite`

---

## Nota de producción — leer antes de generar la voz

**Fuente:** grabación del equipo de Nibaldo recibida el 28 ago 2026 (dos audios). Transcripción en `transcripciones/transcripcion_video_gco-dev-suite.md`; qué aporta y qué contradice, en `resumenes/que-aporta-esta-grabacion.md`. Las 51 capturas numeradas de esta carpeta corresponden al orden real de la grabación y sus nombres siguen el hilo de la transcripción.

**Duración objetivo: máximo 2:30 (decisión del 31 ago 2026).** El guion medido está en **~2:45 de voz**, contado sobre el texto real a 150 palabras por minuto, que es el ritmo de Alessio. La grabación original es mucho más larga; esta píldora la condensa. Igual que en los Vídeos 05 y 06, **no se usa nada del audio original**: se monta al 100 % con voz en off nueva sobre los fragmentos de pantalla.

**Reparto del tiempo — las tres primeras secciones están cerradas:**

| Sección | Voz | Estado |
|---|---|---|
| 1 · Qué es y qué le falta | ~42 s | 🔒 **Audio grabado el 31 ago 2026** |
| 2 · Antes y después | ~46 s | 🔒 **Audio grabado el 31 ago 2026** |
| 3 · Instalación | ~27 s | 🔒 **Audio grabado el 31 ago 2026** |
| 4 · Credenciales | ~19 s | Por grabar |
| 5 · Cómo se usa | ~12 s | Por grabar |
| 6 · Cierre | ~19 s | Por grabar |
| **Total** | **~2:45** | |

> 🔒 **El texto de las secciones 1, 2 y 3 no se toca:** cualquier cambio ahí obliga a volver a generar el audio. Las tres se llevan 1:55, así que **todo el ajuste de duración sale de las secciones 4 a 6.** Si hiciera falta bajar mucho más, no se recorta: se parte el vídeo en dos piezas.
>
> ⚠️ **El guion está 15 s por encima del objetivo de 2:30 (estado al 1 sep 2026).** La Sección 6 creció de 8 a 19 s por decisión de ese día: el cierre anterior informaba dónde estaba la guía pero no llamaba a nada, y la píldora necesita cerrar como cierran los Vídeos 05 y 06 — recapitulando la ganancia y llamando al canal. **Las Secciones 4 y 5 siguen recortadas al hueso, con el peso repartido a los rótulos en pantalla.** Si el techo de 2:30 se mantiene firme, lo que se recorta está señalado dentro de la Sección 6.

**Qué espera cada parte de este vídeo** — lo que se acordó en las reuniones del 18 y el 25 de agosto:

- **Óscar (GCO):** que sea **autoformativo**. Tiene que entenderlo alguien que **no hizo la formación**, incluido quien entre en septiembre. Y pidió expresamente *"un vídeo que muestre la instalación"*.
- **Nibaldo (Raona):** el encuadre es *"tienes esta cajita de herramientas, y estas son las herramientas que puedes ocupar; si necesitas algo más, nos lo pides"*.
- **Formato del proyecto:** corto, concreto, tono de colega. Nada de "la IA transformará tu trabajo".
- **La URL de Confluence no va en el vídeo.** Va en el post que lo acompaña, para que si la instalación cambia no haya que reeditar el vídeo. Acuerdo del 25 ago.

**Reparto con el Vídeo 04 — decidir antes de montar.** El Vídeo 04 ya cubre la instalación y las credenciales paso a paso. Este vídeo las muestra condensadas **con una excepción: el token, que sí se explica** (decisión del 31 ago 2026 — era el paso donde el guion daba por sabido lo que nadie sabe). El resto del detalle sigue en el 04: el PAT campo por campo, la navegación de Confluence y la configuración de DB2. Si en la reunión se decide que el 07 absorbe al 04, la Sección 4 crece todavía más y hay que replantear la duración.

**⚠️ Regla que atraviesa todo el guion: la voz en off no dice ninguna cifra.** Ni agentes, ni skills, ni conectores. La grabación muestra en pantalla **39 skills y 5 servidores MCP**, y las publicaciones ya producidas (Pub 14, 16, 18 y 19) dicen 3 agentes, 32 skills y 5 conectores. Hasta que Nibaldo aclare cuál es la cifra buena, **la narración habla de "agentes, skills y conectores" sin contarlos** — la pantalla enseña lo que enseña, y el vídeo no afirma un número que puede quedar desmentido.

**Cómo generar la voz:** Clipchamp, voz **Alessio Dragon HD Latest**. Copiar solo el texto de los bloques de voz en off. Si una frase queda con ritmo raro, dividirla en dos bloques.

**Cómo escribir para que la voz suene fluida** (aprendido al grabar, 31 ago 2026):
- **Nada de rayas ni incisos.** Alessio lee cada `—` como una pausa larga: si la frase lleva un inciso en medio, arranca, se corta, dice otra cosa y vuelve. Suena a error de montaje. Lo que iría entre rayas va en su propia frase.
- **Una idea por frase, en orden directo** — sujeto, verbo, complemento. Las frases con dos o tres cláusulas encadenadas son las que salen con ritmo raro.
- **Un párrafo por idea**, separados por línea en blanco: así se generan por separado y el aire entre uno y otro se ajusta al montar, sin regrabar el bloque entero.

**Pronunciación de términos en inglés** (solo en el texto hablado — los títulos y textos en pantalla conservan la escritura real):
`GitHub Copilot` → **GitHub-Copáilot** · `Dev Suite` → **Dev Suit** · `Jira` → **Yira** · `Confluence` → **Cónfluens** · `PowerShell` → **Páwer Shel** · `MCP` → **eme-ce-pe** · `PAT` → **pe-a-te**

**Nota de guion:** el asistente se nombra siempre **GitHub Copilot**, nunca solo "Copilot". El producto se nombra **Copilot Dev Suite** — que es como aparece en el portal de empresa; `gco-dev-suite` es el nombre de la carpeta instalada, y también se ve en pantalla. Ambos son correctos.

**En la voz en off, el producto se dice "la Dev Suit", sin "Copilot" delante.** "La Copilot Dev Suit" suena forzado al oído: el artículo femenino delante de "Copilot" hace tropezar la frase justo en el nombre que más importa que se entienda. El nombre completo **Copilot Dev Suite** se sostiene en los textos en pantalla, en el título del vídeo y en la Sección 3 sin artículo — *"buscas Copilot Dev Suit"* —, que es donde la persona lo necesita literal para encontrarlo en el portal. En el resto de la narración: **la Dev Suit** o **la suite**.

**Datos sensibles — revisar en edición:**
- Usuario y nombre de perfil en rutas y terminal.
- **El token, siempre.** Aparece en las capturas del PAT.
- Nombres reales de proyectos y tareas en las respuestas de Jira.
- **Los errores de conexión visibles** (`Failed to connect to MCP server "mcp-elastic"`) — decidir si se recortan. Son reales y honestos, pero en un vídeo de bienvenida pueden leerse como que la instalación falló. **Recomendación: recortar el encuadre en las secciones 3 y 5, y no mencionarlos.**
- Las direcciones `proyectos.gco.global` y `soporte.gco.global` **sí se dejan visibles**: son las que la persona necesita para crear sus tokens.

---

### Sección 1 · GitHub Copilot sabe programar, pero no conoce GCO *(~40 s)*

**Voz en off:**
> GitHub-Copáilot ya lo tienes instalado. Es la ventana desde la que le escribes a la inteligencia artificial, y trae los modelos que incluye tu licencia. Se actualiza solo cuando salen modelos nuevos.
>
> Programar lo hace bien. Lo que no conoce es cómo se trabaja dentro de GCO: no sabe cómo se nombran ni se organizan las cosas aquí, no puede entrar a Yira ni a las bases de datos, y no ve los registros de errores.
>
> Para eso está la Dev Suit. No es un programa nuevo ni algo más que abrir: es el mismo GitHub-Copáilot que ya usas, ahora con las herramientas de GCO adentro.

**Qué mostrar en pantalla:**
- Capturas `01` y `02` — la aplicación de GitHub Copilot abierta.
- Capturas `03` a `06` — el selector de modelos, mientras la voz habla de la licencia.
- Capturas `07` y `08` — la barra inferior **sin** indicador de Dev Suite, cuando la voz dice "lo que no conoce es cómo se trabaja dentro de GCO".

Texto en pantalla: **"La misma aplicación. Con las herramientas de GCO dentro."**

---

### Sección 2 · Antes y después, en la misma pantalla *(~45 s)*

**Voz en off:**
> Se nota a simple vista. Esto es GitHub-Copáilot sin la suite. En la terminal escribimos eme-ce-pe show, que es el comando que muestra a qué sistemas está conectado. La lista es corta: aparece un solo conector. Y las herramientas que puede usar son dos, las dos de uso general — nada que entienda de COBOL, nada que sepa consultar una base de datos.
>
> Esta es la misma pantalla, ya con la Dev Suit instalada. La barra del pie de la ventana dice otra cosa: ahí están los conectores a Yira, a Cónfluens, a Elástic, a de-be-dos y al resto de los sistemas de la casa, con las herramientas que trae la suite para trabajar con ellos.

**Qué mostrar en pantalla:**
1. Captura `09` y `10` — se escribe `mcp show`.
2. Captura `11` — el resultado: un solo conector. **Dejarlo en pantalla el tiempo suficiente para que se lea.**
3. Capturas `12` y `13` — las dos herramientas genéricas disponibles.
4. **Corte directo** a la captura `21` — la barra inferior con la suite cargada y la lista de conectores. El contraste entre `11` y `21` es el argumento entero de la sección: no hace falta narrarlo más.

Texto en pantalla: **"Sin la suite"** sobre las primeras capturas, y **"Con la suite"** sobre la última.

> **Nota de edición:** en la captura `21` la barra dice `39 skills, 5 MCP servers`. **Se muestra tal cual, sin lupa ni destacado, y la voz no lo lee.** Ver la regla de las cifras en la nota de producción.

---

### Sección 3 · Se instala desde el portal de empresa *(~25 s)*

**Voz en off:**
> Instalarla es un clic. Entras al portal de empresa, buscas Copáilot Dev Suit y le das a instalar. Tarda unos minutos, se instala en tu perfil de usuario y no necesita permisos de administrador.
>
> Para comprobar que quedó bien, abre una terminal — da igual dónde — y escribe: Copáilot. Si en la barra de abajo aparece el nombre de la suite con su versión, ya está.

**Qué mostrar en pantalla:**
- Capturas `14` a `17` — la ficha de la Copilot Dev Suite en el portal de empresa.
- Captura `18` — el clic en **Instalar**.
- Capturas `19` y `20` — la terminal, escribiendo `copilot`.
- Captura `21` — **zoom a la esquina inferior izquierda**, donde se lee el nombre de la suite y su versión.

Texto en pantalla: **"Portal de empresa → Instalar"**, después **"~5 minutos · sin permisos de administrador"**.

---

### Sección 4 · Un paso más: darle tus llaves *(~18 s)*

**Voz en off:**
> Falta un solo paso: darle tus credenciales.
>
> Abre la guía en el paso cinco y crea tu token de Yira. ¡Pero cuidado! El token se muestra una sola vez, así que cópialo enseguida.
>
> Luego pega los dos comandos en Páwer Shel y escribe tu usuario y tu token. Y listo. Todo queda cifrado en Windows.

**Qué mostrar en pantalla:**
1. Capturas `25` y `26` — la guía abierta, con el **paso 5 destacado**.
2. Capturas `31` a `33` — la creación del token, en secuencia rápida y sin narrar ningún campo.
3. Captura `34` — **el botón de copiar, con el token difuminado**, sobre "se ve una sola vez".
4. Capturas `38` a `40` — los comandos pegados en PowerShell y el programa pidiendo usuario y token.

Texto en pantalla — **a 18 segundos, los rótulos cargan casi todo. No son decorativos:**
- **"Guía → unidad común → Paso 5"**
- **"Un token es una clave que te identifica, sin escribir tu contraseña"** — sobre las capturas `31`–`32`. En Jira se llama *personal access tokens*.
- **"Se ve una sola vez. Cópialo antes de cerrar."**
- **"Tiene que ser PowerShell"** — sobre la captura `38`.
- **"No abre ninguna puerta que tú no tuvieras ya abierta."**

> **Nota de edición — versión recortada al hueso (decisión 31 ago 2026).** La sección pasó por tres versiones: 45 s originales, 1:40 con el token explicado, y estos 18 s. Manda el tope de 2:30 de la píldora.
>
> **Lo que la voz ya no dice y sostiene el rótulo:** qué es un token y que en Jira aparece en inglés. **Lo que sale del vídeo entero:** el PAT de Confluence y el caso de quien no tiene permisos (capturas `35` y `36`), y DB2 (captura `41`). **Los dos tienen que ir en el post que acompaña al vídeo** — el de Confluence sobre todo, porque le pasa a bastante gente y sin el aviso parece que la instalación falló.

---

### Sección 5 · Cómo se siente al usarla *(~12 s)*

**Voz en off:**
> Y ya está: le escribes en lenguaje natural. Le pides tus tareas de hoy, él arma la consulta a Yira y se detiene a preguntarte si la ejecuta. Tú decides.

**Qué mostrar en pantalla:**
1. Captura `44` — la petición escrita en lenguaje natural.
2. Captura `45` — la herramienta que elige sola.
3. **Captura `46` — el plano más importante de la píldora.** La consulta construida y la pregunta **"Do you want to use this tool?"**. **Es el único plano que se deja respirar; el resto va rápido.**

Texto en pantalla: **"Una frase. Sin comandos."** y **"Te enseña qué va a hacer y espera tu confirmación"**.

> **Nota de edición:** se cae el cierre de la ventana de contexto (`ctx:3%`) y las capturas `42`, `43` y `47`. **No se muestra el resultado de la consulta** — en la grabación no llega a verse. El vídeo cierra en la confirmación, que además es el plano más valioso.

---

### Sección 6 · Cierre *(~19 s)*

**Voz en off:**
> ¿La ganancia? GitHub Copáilot deja de ser genérico. Sigue siendo la misma aplicación de siempre, pero ahora conoce los sistemas de GCO, igual para todo el equipo. Se instala desde el portal de empresa, en unos minutos y sin permisos de administrador.
>
> Acá encontrarás como ir a la guía completa en Confluence. ¿Qué es lo primero que le vas a pedir? Cuéntanoslo en el canal de Anuncios y Tips.

**Qué mostrar en pantalla:**
- Captura `21` — la barra con la suite ya cargada. Es la imagen de *"ahora conoce los sistemas de GCO"*.
- Captura `26` — la guía abierta, plano fijo y corto, sincronizado con la frase de la guía.
- Cierre con el logo Occident y el título corto.

Texto en pantalla: **"La misma aplicación. Ahora conoce los sistemas de GCO."** y al cierre el CTA: **"¿Qué le vas a pedir primero? → cuéntanoslo en el canal Anuncios y Tips"**

> **La fórmula viene de los Vídeos 05 y 06:** una frase que recapitula la ganancia, y después la llamada a la acción con verbo y canal — *"cuéntanos en el canal de Casos de Uso qué quieres resolver"* (V05), *"prueba este método y cuéntanos cómo te fue"* (V06). El *"cuéntanoslo en el canal"* es la parte que no se puede recortar: sin ella el cierre informa pero no mueve a nadie.
>
> **No dice "tus sistemas" ni "tus datos".** La suite es una capa estándar para todo el ecosistema de GCO, no una configuración que cada persona se arma. El posesivo la volvería herramienta personal y contradiría el encuadre de la cajita de herramientas común — *"tienes esta cajita, y si necesitas algo más, nos lo pides"*.
>
> **El enlace de Confluence va en el post, no aquí.** Cuando Nibaldo lo entregue, entra en el mensaje que acompaña al vídeo.
>
> **Coste en duración: el cierre pasa de ~8 s a ~19 s**, y el total del guion sube de ~2:34 a ~2:45 sobre un objetivo de máximo 2:30. Las Secciones 1 a 3 tienen el audio grabado, así que no hay de dónde recortar. **Si hay que recuperar segundos, la frase que se cae primero es la de la instalación** (*"Se instala desde el portal de empresa, en unos minutos y sin permisos de administrador"*): ya se contó completa en la Sección 3. Eso devuelve el cierre a ~13 s y el total a ~2:39.

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
| "Igual para todo el equipo" | Transcripción, parte 1 — *"ese conjunto de herramientas que hemos empaquetado para que todo el mundo pueda usar"* · encuadre de Nibaldo del 25 ago (*"tienes esta cajita de herramientas"*) |
| La fórmula del cierre: recapitular la ganancia y llamar al canal | `v05-pill_para-grabacion_casos-de-uso-reales.md` Sección 5 · `v06-pill_para-grabacion_casos-de-uso-debugging.md` Sección 4 |
| El canal del CTA: Anuncios y Tips Ágiles | Es el canal de Pub 12, la publicación que soporta este vídeo · `Configuraciones/config_canal-teams.md` |
