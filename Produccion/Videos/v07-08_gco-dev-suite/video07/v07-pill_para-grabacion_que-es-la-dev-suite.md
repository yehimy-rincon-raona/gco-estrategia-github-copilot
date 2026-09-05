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
| 4 · Credenciales | ~1:09 | Por grabar |
| 5 · Cómo se usa | ~12 s de voz + 2 s de aire final | Por grabar |
| 6 · Cierre | ~28 s | Por grabar |
| **Total** | **~3:45** | |

> **Remedición del 2 sep 2026.** Al desglosar el guion frase a frase para el montaje se contaron otra vez las palabras de las secciones sin grabar. Las Secciones 4 y 6 estaban estimadas por debajo. Las Secciones 1, 2 y 3 sí cuadran con lo estimado.
>
> **Ampliación de la Sección 4 (3 sep 2026).** La sección estaba en 22 s y **no explicaba el procedimiento: enunciaba los pasos sin decir cómo se hacen.** Se amplió a ~1:09 para que se entienda sin haber hecho la formación, que es lo que pidió Óscar. Con eso el guion queda en **~3:45**.

> 🔒 **El texto de las secciones 1, 2 y 3 no se toca:** cualquier cambio ahí obliga a volver a generar el audio. Las tres se llevan 1:55, así que **todo el ajuste de duración sale de las secciones 4 a 6.** Si hiciera falta bajar mucho más, no se recorta: se parte el vídeo en dos piezas.
>
> ⚠️ **El guion está en ~3:45 sobre un objetivo de 2:30 (estado al 3 sep 2026).** No cabe recortando: la Sección 4 ya se recortó una vez al hueso y el resultado fue una sección que no explicaba nada. **Toca aplicar la salida que esta misma nota ya preveía: partir el vídeo en dos piezas.**
>
> **Corte propuesto — cae solo, porque las tres primeras secciones son un bloque cerrado y las tres últimas son otro:**
>
> | Pieza | Secciones | Duración | Estado del audio |
> |---|---|---|---|
> | **07a · Qué es la Dev Suite y cómo se instala** | 1 · 2 · 3 | **1:54** | 🔒 Ya grabado. No hay que tocar nada. |
> | **07b · Cómo darle tus credenciales y cómo se usa** | 4 · 5 · 6 | **1:51** | Por grabar. |
>
> Las dos quedan holgadas bajo el techo de 2:30, y **la 07a se puede montar y publicar ya** sin esperar a nada. Cada pieza necesitaría su remate: un cierre corto en la 07a y una entrada de dos frases en la 07b. **Decisión pendiente de Yehimy.**

**Qué espera cada parte de este vídeo** — lo que se acordó en las reuniones del 18 y el 25 de agosto:

- **Óscar (GCO):** que sea **autoformativo**. Tiene que entenderlo alguien que **no hizo la formación**, incluido quien entre en septiembre. Y pidió expresamente *"un vídeo que muestre la instalación"*.
- **Nibaldo (Raona):** el encuadre es *"tienes esta cajita de herramientas, y estas son las herramientas que puedes ocupar; si necesitas algo más, nos lo pides"*.
- **Formato del proyecto:** corto, concreto, tono de colega. Nada de "la IA transformará tu trabajo".
- **La URL de Confluence no va en el vídeo.** Va en el post que lo acompaña, para que si la instalación cambia no haya que reeditar el vídeo. Acuerdo del 25 ago.

**Reparto con el Vídeo 04 — actualizado el 3 sep 2026.** El Vídeo 04 ya cubre la instalación y las credenciales paso a paso. Este vídeo mostraba esa parte condensada, y **se comprobó en edición que condensada no se entiende**. Ahora la Sección 4 explica el recorrido completo hasta el paso 5 de la guía, la creación del token de Jira y los comandos. **Lo que sigue fuera y se queda en el Vídeo 04 y en el post:** la navegación de Confluence pantalla por pantalla y la configuración de DB2.

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

## Cómo leer las tablas de montaje *(añadido el 2 sep 2026, para la edición)*

Cada sección lleva una tabla con **una fila por frase de la voz**, para no tener que adivinar qué captura va con qué parte del audio. Las columnas:

- **Tiempo** — minuto y segundo **relativos al inicio de esa sección**, no del vídeo entero. Están **calculados sobre el número de palabras a 150 por minuto**, que es el ritmo de Alessio. Sirven para saber cuánto dura cada plano y en qué orden entra; **la marca exacta la manda siempre la onda del audio ya generado**, no esta tabla.
- **Frase de la voz** — el trozo literal de la narración. **El corte de plano entra en la primera palabra de la fila.** Cuando una fila repite la captura de la fila anterior, no hay corte: el plano se mantiene.
- **Captura** — el archivo numerado de esta carpeta. `03` → `04` significa dos planos seguidos dentro de la misma frase.
- **Movimiento y rótulo** — qué hace el plano y qué texto está en pantalla en ese momento.

**Dónde arranca cada sección sobre el total** (solo voz, sin aire entre bloques):

| Sección | Arranca en | Dura |
|---|---|---|
| 1 · Qué es y qué le falta | 0:00 | 42 s |
| 2 · Antes y después | 0:42 | 46 s |
| 3 · Instalación | 1:28 | 26 s |
| 4 · Credenciales | 1:54 | 1:09 |
| 5 · Cómo se usa | 3:03 | 12 s + 2 s de aire |
| 6 · Cierre | 3:17 | 28 s |
| **Fin** | **3:45** | |

---

### Sección 1 · GitHub Copilot sabe programar, pero no conoce GCO *(~40 s)*

**Voz en off:**
> GitHub-Copáilot ya lo tienes instalado. Es la ventana desde la que le escribes a la inteligencia artificial, y trae los modelos que incluye tu licencia. Se actualiza solo cuando salen modelos nuevos.
>
> Programar lo hace bien. Lo que no conoce es cómo se trabaja dentro de GCO: no sabe cómo se nombran ni se organizan las cosas aquí, no puede entrar a Yira ni a las bases de datos, y no ve los registros de errores.
>
> Para eso está la Dev Suit. No es un programa nuevo ni algo más que abrir: es el mismo GitHub-Copáilot que ya usas, ahora con las herramientas de GCO adentro.

**Montaje frase a frase** *(tiempos relativos al inicio de la sección)*

| Tiempo | Frase de la voz — el corte entra en la primera palabra | Captura | Movimiento y rótulo |
|---|---|---|---|
| 0:00–0:02 | «GitHub-Copáilot ya lo tienes instalado.» | `01` | Plano fijo. |
| 0:02–0:07 | «Es la ventana desde la que le escribes a la inteligencia artificial,» | `02` | La ventana completa, plano fijo. |
| 0:07–0:10 | «y trae los modelos que incluye tu licencia.» | `03` → `04` | Corte en «y trae». ~1,5 s cada captura. |
| 0:10–0:13 | «Se actualiza solo cuando salen modelos nuevos.» | `05` → `06` | Sigue el recorrido de la lista de modelos. |
| 0:13–0:14 | «Programar lo hace bien.» | `06` | Se mantiene, sin corte. |
| 0:14–0:19 | «Lo que no conoce es cómo se trabaja dentro de GCO:» | `07` | **Corte duro en «Lo».** Es la barra inferior **sin** indicador de Dev Suite. |
| 0:19–0:23 | «no sabe cómo se nombran ni se organizan las cosas aquí,» | `07` | Zoom lento hacia la barra inferior. |
| 0:23–0:28 | «no puede entrar a Yira ni a las bases de datos,» | `08` | Corte en «no puede». Plano fijo. |
| 0:28–0:30 | «y no ve los registros de errores.» | `08` | Se mantiene. |
| 0:30–0:33 | «Para eso está la Dev Suit.» | **Placa · tiempo 1** | Barrido rojo que tapa la captura `08` y entra el título. |
| 0:33–0:37 | «No es un programa nuevo ni algo más que abrir:» | **Placa · tiempo 2** | Entran y se tachan las dos líneas de lo que **no** es. |
| 0:37–0:42 | «es el mismo GitHub-Copáilot que ya usas, ahora con las herramientas de GCO adentro.» | **Placa · tiempo 3** | Se caen los tachados y entra el rótulo de la sección. |

---

#### Placa animada de cierre de la Sección 1 *(0:30–0:42 · especificada el 2 sep 2026)*

**Por qué existe.** Las capturas `01`–`08` se agotan en 0:30 y quedan 12 s de voz. Además el tramo anterior ya venía muy quieto: `07` y `08` son dos planos fijos seguidos durante 16 s. La placa resuelve las dos cosas — cubre el hueco y **mete el único movimiento fuerte de la sección** justo donde la imagen se estaba muriendo.

**Fondo:** rojo de marca `#DC0028` a pantalla completa. Texto en blanco. Títulos en **CO**, cuerpo en **GCO Sans**. Sin iconos.

**Tiempo 1 · La entrada — 0:30 a 0:33**
- En «Para eso», **barrido rojo de izquierda a derecha** que cubre la captura `08` en ~0,4 s. El barrido es lo que rompe la quietud: entra a corte, no en fundido.
- Sobre el rojo, centrado y grande, en CO: **Copilot Dev Suite**. Aparece con un fundido de ~0,3 s, ya quieto.

**Tiempo 2 · Lo que no es — 0:33 a 0:37**
- Debajo del título, en GCO Sans y a un cuerpo claramente menor, entran dos líneas una detrás de otra:

  | Línea | Entra en la palabra | Se tacha en |
  |---|---|---|
  | un programa nuevo | «programa» (~0:34) | ~0:34,5 |
  | algo más que abrir | «abrir» (~0:36) | ~0:36,5 |

- **El tachado se dibuja de izquierda a derecha en ~0,3 s**, no aparece de golpe. Ese trazo es todo el movimiento que necesita el bloque.
- Las dos líneas van en blanco al **70 % de opacidad**: tienen que leerse como descartadas, no como el mensaje.

**Tiempo 3 · Lo que sí es — 0:37 a 0:42**
- En «es el mismo», las dos líneas tachadas **se desvanecen a la vez** (~0,3 s) y el título sube un poco para dejar sitio.
- Entra el rótulo que ya estaba escrito para esta sección, en dos tiempos:
  - **"La misma aplicación."** — en «es el mismo GitHub-Copáilot que ya usas»
  - **"Con las herramientas de GCO dentro."** — en «ahora con las herramientas de GCO adentro»
- **misma** y **dentro** en peso más fuerte. Son las dos palabras que sostienen el argumento del vídeo entero.
- En los últimos 2 s entra abajo a la derecha, pequeño, el isotipo en negativo: `Manual de marca/logotipo_GCO/isotypo_catalana-occidente_negativo.png`.

**Salida:** **corte seco** a la captura `09` en 0:42. El salto del rojo pleno a la pantalla de terminal es un golpe visual que arranca la Sección 2 con energía — no poner fundido.

> **Versión mínima, si no da tiempo a animar.** La misma placa sin los tachados: título arriba, rótulo abajo, quietos los 12 s. Funciona, pero pierde lo único que la hacía moverse. Si se va por aquí, al menos dejar un **zoom in muy lento sobre el texto** para que el plano no esté congelado.
>
> **Variante que descarté y por qué.** La otra idea era montar aquí la *cajita de herramientas* de Nibaldo — un marco fijo donde van cayendo las etiquetas de Yira, Cónfluens, Elástic y de-be-dos. Encaja con el encuadre y sería más vistosa, pero **se come el golpe de la Sección 2**: el contraste entre `11` y `21` es el argumento entero de la píldora y depende de que los conectores se vean por primera vez ahí. Si en la revisión se prefiere esa vía, hay que rehacer la Sección 2.

---

### Sección 2 · Antes y después, en la misma pantalla *(~45 s)*

**Voz en off:**
> Se nota a simple vista. Esto es GitHub-Copáilot sin la suite. En la terminal escribimos eme-ce-pe show, que es el comando que muestra a qué sistemas está conectado. La lista es corta: aparece un solo conector. Y las herramientas que puede usar son dos, las dos de uso general — nada que entienda de COBOL, nada que sepa consultar una base de datos.
>
> Esta es la misma pantalla, ya con la Dev Suit instalada. La barra del pie de la ventana dice otra cosa: ahí están los conectores a Yira, a Cónfluens, a Elástic, a de-be-dos y al resto de los sistemas de la casa, con las herramientas que trae la suite para trabajar con ellos.

**Montaje frase a frase** *(tiempos relativos al inicio de la sección)*

| Tiempo | Frase de la voz — el corte entra en la primera palabra | Captura | Movimiento y rótulo |
|---|---|---|---|
| 0:00–0:02 | «Se nota a simple vista.» | `09` | Rótulo **"Sin la suite"** entra aquí y se queda hasta 0:25. |
| 0:02–0:04 | «Esto es GitHub-Copáilot sin la suite.» | `09` | Se mantiene. |
| 0:04–0:07 | «En la terminal escribimos eme-ce-pe show,» | `10` | Corte en «En». Se ve el comando escrito. |
| 0:07–0:11 | «que es el comando que muestra a qué sistemas está conectado.» | `10` | Se mantiene. |
| 0:11–0:14 | «La lista es corta: aparece un solo conector.» | `11` | **Corte exacto en «La».** Plano fijo, sin movimiento: es el dato que hay que poder leer. |
| 0:14–0:20 | «Y las herramientas que puede usar son dos, las dos de uso general,» | `12` → `13` | Corte en «Y». ~3 s cada captura. |
| 0:20–0:25 | «nada que entienda de COBOL, nada que sepa consultar una base de datos.» | `13` | Se mantiene. |
| 0:25–0:29 | «Esta es la misma pantalla, ya con la Dev Suit instalada.» | `21` | **Corte directo en «Esta», sin transición.** El salto es el argumento de la sección. El rótulo cambia a **"Con la suite"**. |
| 0:29–0:33 | «La barra del pie de la ventana dice otra cosa:» | `21` | Empieza el zoom hacia la barra inferior. |
| 0:33–0:42 | «ahí están los conectores a Yira, a Cónfluens, a Elástic, a de-be-dos y al resto de los sistemas de la casa,» | `21` | Barra inferior en plano cerrado, quieta. |
| 0:42–0:46 | «con las herramientas que trae la suite para trabajar con ellos.» | `21` | Zoom out suave hasta la pantalla completa. |

> **⚠️ Aviso de montaje (2 sep 2026): la captura `21` sostiene 21 s seguidos** — todo el segundo párrafo. Un plano fijo tanto tiempo se cae. El zoom in lento hacia la barra y el zoom out final son lo que lo mantiene vivo; si aun así pesa, la alternativa es intercalar un plano cerrado de la lista de conectores y volver.

> **Nota de edición:** en la captura `21` la barra dice `39 skills, 5 MCP servers`. **Se muestra tal cual, sin lupa ni destacado, y la voz no lo lee.** Ver la regla de las cifras en la nota de producción.

---

### Sección 3 · Se instala desde el portal de empresa *(~25 s)*

**Voz en off:**
> Instalarla es un clic. Entras al portal de empresa, buscas Copáilot Dev Suit y le das a instalar. Tarda unos minutos, se instala en tu perfil de usuario y no necesita permisos de administrador.
>
> Para comprobar que quedó bien, abre una terminal — da igual dónde — y escribe: Copáilot. Si en la barra de abajo aparece el nombre de la suite con su versión, ya está.

**Montaje frase a frase** *(tiempos relativos al inicio de la sección)*

| Tiempo | Frase de la voz — el corte entra en la primera palabra | Captura | Movimiento y rótulo |
|---|---|---|---|
| 0:00–0:02 | «Instalarla es un clic.» | `14` | Ficha de la Copilot Dev Suite en el portal. Rótulo **"Portal de empresa → Instalar"**. |
| 0:02–0:04 | «Entras al portal de empresa,» | `15` | Corte en «Entras». |
| 0:04–0:05 | «buscas Copáilot Dev Suit» | `16` → `17` | Muy rápido, ~1 s cada una. Si hay resalte del buscador, va aquí. |
| 0:05–0:07 | «y le das a instalar.» | `18` | **El clic tiene que caer sobre la palabra «instalar».** |
| 0:07–0:14 | «Tarda unos minutos, se instala en tu perfil de usuario y no necesita permisos de administrador.» | `18` | Se mantiene. El rótulo cambia a **"~5 minutos · sin permisos de administrador"** en «Tarda». |
| 0:14–0:17 | «Para comprobar que quedó bien, abre una terminal» | `19` | Corte en «Para». |
| 0:17–0:18 | «da igual dónde» | `19` | Se mantiene. |
| 0:18–0:19 | «y escribe: Copáilot.» | `20` | Corte en «y escribe». Se ve el comando en la terminal. |
| 0:19–0:26 | «Si en la barra de abajo aparece el nombre de la suite con su versión, ya está.» | `21` | Corte en «Si» + **zoom a la esquina inferior izquierda**. Es el plano de la comprobación: se deja quieto hasta el final. |

---

### Sección 4 · Un paso más: darle tus llaves *(~1:09 · ampliada el 3 sep 2026)*

**Voz en off:**
> Falta un paso: darle tus credenciales.
>
> Abre el explorador de archivos y entra a la unidad común, la O. Ahí está la carpeta Copilot Dev Suite, y dentro, la Guía GCO Dev Suit.
>
> Ábrela y baja al paso cinco.
>
> En el paso cinco, la cajita verde de Yira te lleva a tu perfil. Ahí, en personal access tokens, le das a crear y le pones un nombre.
>
> El token aparece una sola vez. Cópialo con el botón de copiar, no lo selecciones a mano, y déjalo pegado en un bloc de notas. Cuando cierres esa ventana ya no se vuelve a ver.
>
> Para Cónfluens son exactamente los mismos pasos, desde la cajita de al lado.
>
> Vuelve a la guía y copia los dos primeros comandos. Solo esos dos: los de abajo son de otras herramientas.
>
> Pégalos en Páwer Shel. Tiene que ser Páwer Shel.
>
> Se abre un programa que te pide usuario y token. El usuario es el mismo con el que entras a la red. Y listo: todo queda cifrado en Windows.

**Montaje frase a frase** *(tiempos relativos al inicio de la sección)*

**Bloque 1 · Llegar a la guía**

| Tiempo | Frase de la voz — el corte entra en la primera palabra | Captura | Movimiento y rótulo |
|---|---|---|---|
| 0:00–0:02 | «Falta un paso: darle tus credenciales.» | `21` | Se mantiene de la Sección 3. Cierra la idea: ya está instalado, pero falta esto. |
| 0:02–0:08 | «Abre el explorador de archivos y entra a la unidad común, la O.» | `22` → `23` | Corte en «Abre». Cambio a `23` en «entra a la unidad». **Resaltar la letra de la unidad `O:`** en la barra de direcciones. |
| 0:08–0:13 | «Ahí está la carpeta Copilot Dev Suite, y dentro, la Guía GCO Dev Suit.» | `24` → `25` | `24` la carpeta, `25` el clic sobre la guía. |
| 0:13–0:16 | «Ábrela y baja al paso cinco.» | `26` | La guía abierta. **Los pasos 1 a 4 se atenúan y el 5 se resalta.** Rótulo **"Los pasos 1 a 4 son solo para quien instaló con el ZIP"**. |

**Bloque 2 · El token**

| Tiempo | Frase de la voz — el corte entra en la primera palabra | Captura | Movimiento y rótulo |
|---|---|---|---|
| 0:16–0:19 | «En el paso cinco, la cajita verde de Yira te lleva a tu perfil.» | `27` | Recuadro sobre **la cajita verde del PAT de Jira**. Rótulo **"Un token es una clave que te identifica, sin escribir tu contraseña"**. |
| 0:19–0:21 | *(sigue la frase)* | `30` | Corte en «te lleva a tu perfil». El perfil de Jira. |
| 0:21–0:27 | «Ahí, en personal access tokens, le das a crear y le pones un nombre.» | `31` → `32` → `33` | Tres planos cortos, ~2 s cada uno: la sección de tokens, el botón de crear, el campo del nombre. |
| 0:27–0:29 | «El token aparece una sola vez.» | `34` | Corte en «El token». **El token va difuminado.** |
| 0:29–0:37 | «Cópialo con el botón de copiar, no lo selecciones a mano, y déjalo pegado en un bloc de notas.» | `34` | ⚠️ **Plano crítico — ver la nota de abajo.** Zoom al **botón de copiar** con un señalador o un círculo animado encima. Rótulo **"Usa el botón de copiar. A mano se pierde un carácter."** |
| 0:37–0:41 | «Cuando cierres esa ventana ya no se vuelve a ver.» | `34` | Rótulo **"Se ve una sola vez. Cópialo antes de cerrar."** |
| 0:41–0:46 | «Para Cónfluens son exactamente los mismos pasos, desde la cajita de al lado.» | `27` | Vuelve a la guía. **El recuadro salta de la cajita de Jira a la de Confluence.** Rótulo **"Confluence: mismos pasos, la cajita de al lado"** y debajo, más pequeño, **"¿No tienes acceso? Déjalo vacío y sigue."** |

**Bloque 3 · Los comandos**

| Tiempo | Frase de la voz — el corte entra en la primera palabra | Captura | Movimiento y rótulo |
|---|---|---|---|
| 0:46–0:50 | «Vuelve a la guía y copia los dos primeros comandos.» | `37` | ⚠️ **Recuadro sobre las dos primeras líneas** — ver la nota de abajo. |
| 0:50–0:54 | «Solo esos dos: los de abajo son de otras herramientas.» | `37` | **Las líneas de abajo se atenúan al 40 %.** El contraste tiene que ser evidente. |
| 0:54–0:56 | «Pégalos en Páwer Shel.» | `38` | Corte en «Pégalos». |
| 0:56–0:57 | «Tiene que ser Páwer Shel.» | `38` | Rótulo **"Tiene que ser PowerShell"**. |
| 0:57–1:01 | «Se abre un programa que te pide usuario y token.» | `39` | Corte en «Se abre». |
| 1:01–1:06 | «El usuario es el mismo con el que entras a la red.» | `40` | Corte en «El usuario». El campo pidiendo usuario. |
| 1:06–1:09 | «Y listo: todo queda cifrado en Windows.» | `40` | Rótulo de cierre: **"No abre ninguna puerta que tú no tuvieras ya abierta."** |

> **⚠️ Dos momentos que la grabación no enseña bien y hay que resolver en edición (detectado el 3 sep 2026, montando).**
>
> 1. **Cómo se copia el token.** En la captura `34` se ve la pantalla, pero **no se distingue que hay que usar el botón de copiar** en vez de seleccionar el texto a mano. La voz ya lo dice; en pantalla hace falta **un señalador o un círculo animado sobre el botón**, no basta con el plano tal cual. La razón está en la grabación: seleccionándolo a mano es fácil dejarse un carácter y el token deja de servir.
> 2. **Qué datos hay que copiar de la guía.** En la captura `37` se ven varias líneas de comandos y **no queda claro cuáles son las dos que van**. Hace falta **recuadrar las dos primeras y atenuar el resto**. Las de abajo son de otras herramientas y copiarlas todas es el error más fácil de cometer.
>
> **Sobre Confluence.** La grabación no muestra el proceso porque el hablante no tenía acceso. **Se resuelve sin material nuevo:** se vuelve a la captura `27` y el recuadro salta a la cajita de al lado, mientras la voz dice que son los mismos pasos. Las capturas `35` y `36` siguen fuera del montaje. El caso de quien no tiene permisos se cubre con un rótulo pequeño, porque le pasa a bastante gente y sin el aviso parece que la instalación falló.
>
> **Historial de la sección.** Pasó por cuatro versiones: 45 s originales, 1:40 con el token explicado, 22 s recortada al hueso (31 ago), y estos ~1:09. **La versión de 22 s se descartó el 3 sep al montarla: enunciaba los pasos pero no decía cómo se hacen, y el vídeo tiene que entenderse sin haber hecho la formación.** Lo que queda fuera es la navegación de Confluence pantalla por pantalla y DB2, que siguen en el Vídeo 04 y en el post.

---

### Sección 5 · Cómo se siente al usarla *(~12 s)*

**Voz en off:**
> Y ya está: le escribes en lenguaje natural. Le pides tus tareas de hoy, él arma la consulta a Yira y se detiene a preguntarte si la ejecuta. Tú decides.

**Montaje frase a frase** *(tiempos relativos al inicio de la sección)*

| Tiempo | Frase de la voz — el corte entra en la primera palabra | Captura | Movimiento y rótulo |
|---|---|---|---|
| 0:00–0:03 | «Y ya está: le escribes en lenguaje natural.» | `44` | La petición escrita. Rótulo **"Una frase. Sin comandos."** |
| 0:03–0:06 | «Le pides tus tareas de hoy,» | `44` | Se mantiene. |
| 0:06–0:08 | «él arma la consulta a Yira» | `45` | Corte en «él». Se ve la herramienta que elige sola. |
| 0:08–0:11 | «y se detiene a preguntarte si la ejecuta.» | `46` | **Corte en «y se detiene».** La pregunta *"Do you want to use this tool?"* tiene que quedar legible. Rótulo **"Te enseña qué va a hacer y espera tu confirmación"**. |
| 0:11–0:12 | «Tú decides.» | `46` | Se mantiene. |
| 0:12–0:14 | *(sin voz)* | `46` | **Dos segundos de plano en silencio.** Es el plano más importante de la píldora y el único que se deja respirar; el resto va rápido. |

> **Nota de edición:** se cae el cierre de la ventana de contexto (`ctx:3%`) y las capturas `42`, `43` y `47`. **No se muestra el resultado de la consulta** — en la grabación no llega a verse. El vídeo cierra en la confirmación, que además es el plano más valioso.

---

### Sección 6 · Cierre *(~28 s medidos)*

**Voz en off:**
> ¿La ganancia? GitHub Copáilot deja de ser genérico. Sigue siendo la misma aplicación de siempre, pero ahora conoce los sistemas de GCO, igual para todo el equipo. Se instala desde el portal de empresa, en unos minutos y sin permisos de administrador.
>
> Acá encontrarás cómo ir a la guía completa en Cónfluens. ¿Qué es lo primero que le vas a pedir? Cuéntanoslo en el canal de Anuncios y Tips.

**Montaje frase a frase** *(tiempos relativos al inicio de la sección)*

| Tiempo | Frase de la voz — el corte entra en la primera palabra | Captura | Movimiento y rótulo |
|---|---|---|---|
| 0:00–0:01 | «¿La ganancia?» | `21` | Corte a la barra con la suite ya cargada. |
| 0:01–0:03 | «GitHub Copáilot deja de ser genérico.» | `21` | Se mantiene. |
| 0:03–0:06 | «Sigue siendo la misma aplicación de siempre,» | `21` | Entra el rótulo **"La misma aplicación. Ahora conoce los sistemas de GCO."** |
| 0:06–0:11 | «pero ahora conoce los sistemas de GCO, igual para todo el equipo.» | `21` | Zoom lento a la lista de conectores de la barra. |
| 0:11–0:17 | «Se instala desde el portal de empresa, en unos minutos y sin permisos de administrador.» | `18` | ⚠️ Plano que no estaba asignado: se reutiliza el clic en **Instalar** de la Sección 3. **Es la frase que se cae primero si hay que recuperar segundos** — ver la nota de duración. |
| 0:17–0:21 | «Acá encontrarás cómo ir a la guía completa en Cónfluens.» | `26` | Corte en «Acá». Plano fijo y corto de la guía. |
| 0:21–0:24 | «¿Qué es lo primero que le vas a pedir?» | — | Placa de cierre: logo Occident + título corto. |
| 0:24–0:28 | «Cuéntanoslo en el canal de Anuncios y Tips.» | — | CTA en pantalla: **"¿Qué le vas a pedir primero? → cuéntanoslo en el canal Anuncios y Tips"**. |

> **Corrección de guion (2 sep 2026):** el texto decía *"encontrarás como ir"* y *"en Confluence"*. Queda **"cómo"** con tilde y **"Cónfluens"** en fonética, según la tabla de pronunciación de la nota de producción. Esta sección todavía no está grabada, así que el cambio no obliga a regrabar nada.

> **La fórmula viene de los Vídeos 05 y 06:** una frase que recapitula la ganancia, y después la llamada a la acción con verbo y canal — *"cuéntanos en el canal de Casos de Uso qué quieres resolver"* (V05), *"prueba este método y cuéntanos cómo te fue"* (V06). El *"cuéntanoslo en el canal"* es la parte que no se puede recortar: sin ella el cierre informa pero no mueve a nadie.
>
> **No dice "tus sistemas" ni "tus datos".** La suite es una capa estándar para todo el ecosistema de GCO, no una configuración que cada persona se arma. El posesivo la volvería herramienta personal y contradiría el encuadre de la cajita de herramientas común — *"tienes esta cajita, y si necesitas algo más, nos lo pides"*.
>
> **El enlace de Confluence va en el post, no aquí.** Cuando Nibaldo lo entregue, entra en el mensaje que acompaña al vídeo.
>
> **Coste en duración.** El cierre creció de ~8 s a lo que hay ahora, y al medirlo frase a frase el 2 sep 2026 salen **28 s, no los 19 estimados**. Con eso el total del guion es **~2:58** sobre un objetivo de máximo 2:30. Las Secciones 1 a 3 tienen el audio grabado, así que no hay de dónde recortar ahí. **Si hay que recuperar segundos, la frase que se cae primero es la de la instalación** (*"Se instala desde el portal de empresa, en unos minutos y sin permisos de administrador"*, fila 0:11–0:17): ya se contó completa en la Sección 3, y quitarla deja el cierre en ~22 s y el total en ~2:52. Para bajar de 2:30 haría falta partir el vídeo en dos piezas, que es la salida ya prevista en la nota de producción.

---

## Capturas que no entran en el montaje

De las 51 capturas de la carpeta, el montaje usa 40 tras ampliar la Sección 4. **Las 11 restantes no tienen sitio en esta píldora** — quedan listadas para que en la edición no se pierda tiempo buscándoles un hueco:

| Capturas | Por qué quedan fuera |
|---|---|
| `28` | El texto de la guía explicando qué es un PAT. Lo dice la voz y lo remata el rótulo; el plano no aporta. |
| `29` | El clic para configurar Jira. Redundante con el salto de `27` a `30`. |
| `35`, `36` | El PAT de Confluence y el caso de quien no tiene permisos. **La grabación no llega a mostrarlo porque el hablante no tenía acceso.** Se resuelve volviendo a `27` con el recuadro en la otra cajita. |
| `41` | La configuración de DB2. Se queda en el Vídeo 04 y en el post. |
| `42`, `43` | GitHub Copilot cargando. No aportan nada al relato. |
| `47`, `48`, `49`, `50`, `51` | Lo que pasa después de confirmar la consulta. **El vídeo cierra en la confirmación (`46`)** y el resultado no llega a verse en la grabación. |

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
