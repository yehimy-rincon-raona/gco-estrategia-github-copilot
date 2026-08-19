# Tablero de Producción — Estrategia de Adopción GitHub Copilot GCO
> Punto de entrada único de seguimiento y estado del proyecto.
> Última actualización: 18 agosto 2026

---

## 🔴 Estado actual, en 4 líneas

- **Teams GCO sigue en pausa**, pero varios posts se **auto-publicaron por error** (programación automática que siguió corriendo pese al congelamiento). Hoy, en la reunión de seguimiento, se decidió **retirarlos todos** de la cuenta de GCO.
- Evidencia de lo retirado: `Produccion/elimina-post-teams-gco/` (capturas de cada post borrado).
- **La cadencia semanal (martes y jueves) se retoma la semana del 14-18 de septiembre**, publicando en el mismo orden de la cola — no se salta ni se repite nada.
- El resto de la serie gco-dev-suite (Pub 12-19) sigue en producción o esperando visibilidad de prueba en Teams Raona — ver el cronograma abajo.

---

## 🗓️ Cronograma maestro — cola de publicación en Teams GCO

> Fechas marcadas *(estimada)* son una proyección mecánica de la regla ya acordada — 2 publicaciones por semana, martes y jueves, en orden — a partir de la semana del 14-18 sep. Se confirman semana a semana, igual que el resto del calendario.

### ✅ Ya publicadas en Teams GCO — se quedan, sin cambios

| Pub | Fecha | Canal | Tema |
|-----|-------|-------|------|
| 1 | Mar 14 jul | Todos los canales | Bienvenida — 6 canales activados |
| 2 | Jue 16 jul | Primeros Pasos | Activa GitHub Copilot en Visual Studio (+ Videos 01, 02 y 03) |

### A · Cola de republicación — contenido ya producido

| Orden | Pub | Fecha *(estimada)* | Canal | Tema | Por qué está en cola |
|---|-----|------|-------|------|----------------------|
| 1 | 3 | Mar 15 sep | Primeros Pasos | No tiene memoria permanente. Tiene un cajón. | 🗑️ Retirada de Teams GCO (auto-publicada, borrada 18 ago) |
| 2 | 4 | Jue 17 sep | Anuncios y Tips | ¿Siempre usas el mismo modelo en GitHub Copilot? + 4 respuestas (incluye el post-hilo "Memoria vs. Instrucciones", programado 1h después — no es una Pub aparte) | 🗑️ Retirada de Teams GCO (auto-publicada, borrada 18 ago) — confirmar con Yehimy si fue el post completo o solo la tarjeta "Optimización de tokens" |
| 3 | 5 | Mar 22 sep | Primeros Pasos | ¿Copias y pegas código en el chat? | 🗑️ Retirada de Teams GCO (auto-publicada, borrada 18 ago) |
| 4 | 6 | Jue 24 sep | Casos de Uso Reales | Caso de uso #1 — Entender COBOL heredado | 🗑️ Retirada de Teams GCO (auto-publicada, borrada 18 ago) |
| 5 | 7 | Mar 29 sep | Casos de Uso Reales | Caso de uso #2 — Bug fixing | 🗑️ Retirada de Teams GCO (auto-publicada, borrada 18 ago) |
| 6 | 8 | Jue 1 oct | Anuncios y Tips | La fórmula del prompt — parte 1 | 🗑️ Retirada de Teams GCO (auto-publicada, borrada 18 ago) |
| 7 | 9 | Mar 6 oct | Anuncios y Tips | La fórmula del prompt — parte 2 | 🔵 Nunca llegó a auto-publicarse — solo está en Teams Raona (3 jul) |
| 8 | 10 | Jue 8 oct | Casos de Uso Reales | Video 05 — Tres casos, un mismo copiloto | 🔵 Solo en Teams Raona (prueba, 3 ago) |
| 9 | 11 | Mar 13 oct | Casos de Uso Reales | Video 06 — Dos errores de pantalla | 🔵 Solo en Teams Raona (prueba, 3 ago) |
| 10 | 12 | Jue 15 oct | Anuncios y Tips | gco-dev-suite: qué es y por qué existe | 🟡 Borrador cargado en Teams Raona — falta que Yehimy lo publique ahí primero |
| 11 | 13 | Mar 20 oct | Anuncios y Tips | ¿Qué es una Skill (y qué no es)? | 🔵 Post + 2 infografías producidas — falta publicarlo de prueba en Teams Raona |

### B · En producción — falta pieza gráfica, sin fecha todavía

| Pub | Canal | Tema | Estado |
|-----|-------|------|--------|
| 14 | Anuncios y Tips | Skills 2/3 — el mapa de los 5 niveles | 🟡 Propuesta de contenido — bloquea a Pub 15 (va antes en la cola) |
| 15 | Anuncios y Tips | Skills 3/3 — anatomía y cuándo usar | ✅ 3 piezas producidas y corregidas (18 ago), lista para Raona — pero **espera a que Pub 14 esté producida**, porque la cola respeta el orden numérico |
| 16 | Anuncios y Tips | MCP 1/2 — los 5 conectores | 🟡 Propuesta de contenido |
| 17 | Anuncios y Tips | MCP 2/2 — MCP en acción | 🟡 Propuesta de contenido |
| 18 | Anuncios y Tips | Agentes 1/2 — los 3 que deciden | 🟡 Propuesta de contenido |
| 19 | Anuncios y Tips | Agentes 2/2 — los agentes en acción, cierra la serie | 🟡 Propuesta de contenido |

> Cuando 14-19 estén listas, continúan la cola A en orden desde mar 27 oct en adelante.

### Bloqueadas, sin fecha

| Ítem | Falta |
|------|-------|
| AMA (Foro de ayuda) | Fecha (Nibaldo + Guillermo) |
| Reservas 1:1 (Microsoft Bookings) | Configurar Bookings (Yehimy) |

---

## Bloqueantes activos

| Ítem | Responsable | Notas |
|------|-------------|-------|
| Confirmar alcance real de lo auto-publicado en Pub 4 (¿post completo o solo 1 tarjeta?) | Yehimy | Ver cola A, fila Pub 4 |
| URL canal corporativo para enlace en Vídeo 1 | Nibaldo | Necesaria tras publicación V1 |
| Fecha sesión AMA | Nibaldo + Guillermo | Sin fecha — desbloquea pub AMA |
| Microsoft Bookings | Yehimy | Sin configurar — desbloquea pub Reservas 1:1 |
| Confirmar si `dotnet-review`/`cobol-analyzer` son parte de las 32 skills reales | Nibaldo | Bloquea el cierre final de Pub 15 |
| Confirmar si "gco-dev-suite" es la misma "Copilot Dev Suite" del guion del Video 04 | Nibaldo | Sin respuesta todavía |

---

## Vídeos — resumen

| Video | Pub asociada | Título | Estado |
|-------|--------------|--------|--------|
| 01 | Pub 2 | Verifica tu acceso e instala las herramientas | ✅ Publicado en Teams GCO (16 jul) |
| 02 | Pub 2 (post propio) | Autenticación en Visual Studio y VS Code | ✅ Publicado en Teams GCO (16 jul) |
| 03 | Pub 2 (post propio) | Autenticación desde la terminal | ✅ Publicado en Teams GCO (16 jul) |
| 04 | Respuesta en hilo de Pub 2 | Instala y configura tus MCP con la gco-dev-suite | ✅ Publicado de prueba en Teams Raona (14 ago) — no en Teams GCO. Falta producir la infografía (`V04-S1-infografia_activa-tus-mcp`) |
| 05 | Pub 10 | Tres casos, un mismo copiloto | 🔵 Publicado de prueba en Teams Raona (3 ago) — pendiente edición final (difuminados) y piezas gráficas |
| 06 | Pub 11 | Dos errores de pantalla | 🔵 Publicado de prueba en Teams Raona (3 ago) — pendiente audio de la sección 01 y piezas gráficas |

> Detalle completo de cada video (guiones, feedback, tareas pendientes): ver la sección "Vídeos — detalle" en el historial más abajo.

---

## 📚 Historial y detalle (archivo de referencia)

> Todo lo que sigue es el registro completo de decisiones y detalle técnico. Consúltalo cuando necesites el porqué de algo del cronograma de arriba — el cronograma es la vista rápida, esto es la memoria completa.

### Notas fechadas

> **18 agosto 2026 (segunda actualización)**
> - **Intercambio de contenido Pub 14 ↔ Pub 15** (decisión de Yehimy, por sentido narrativo): la anatomía de una Skill (3 tarjetas ya producidas y corregidas) pasa de Pub 14 a **Pub 15**; "el mapa de los 5 niveles de personalización" pasa de Pub 15 a **Pub 14**. Razón: igual que Pub 12 da la visión general antes de que cada pieza haga su zoom, dentro del bloque de Skills conviene mostrar primero dónde encaja la Skill frente a los demás niveles (panorámico) y solo después la anatomía por dentro (lo más específico) — así el zoom cierra en el punto más profundo, en vez de volver a lo panorámico al final. Los 3 PNG se renombraron de `14-S8-card-*` a `15-S8-card-*`. Consecuencia en la cola de republicación: Pub 15 (ya producida) debe esperar a que Pub 14 (el mapa, sin producir) esté lista, porque la cola respeta el orden numérico.
>
> **18 agosto 2026**
> - **Auto-publicación y retiro de posts en Teams GCO:** en la reunión de seguimiento del 18 ago (Jonatan + Óscar), Yehimy reportó que varios posts programados se publicaron solos pese al congelamiento — se decidió retirarlos todos de Teams GCO hoy mismo, y reactivarlos manualmente, bloque a bloque, cuando el equipo lo indique. Evidencia guardada en `Produccion/elimina-post-teams-gco/`. Retoma de la cadencia semanal: **14-18 de septiembre**. Ver `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md`.
> - **Reorganización de la serie gco-dev-suite:** Pub 14 y 15 no estaban en la misma semana de producción y cambiaban de tema (14=Skills, 15=MCP) — se corrige así:
>   - **Pub 14 (martes) + Pub 15 (jueves)** quedan en la misma semana, ambas cerrando el "zoom" de Skills: 14 = anatomía (sin cambios), 15 = nuevo tema — "el mapa de los 5 niveles de personalización" (Skill/Instruction/Prompt file/Agente/MCP), que además responde a la duda de Óscar sobre Copilot Memory vs. Instructions planteada en esa misma reunión.
>   - **MCP pasa a Pub 16-17** (2 publicaciones, martes/jueves) — antes era 1 sola publicación (Pub 15 original). La reunión del 18 ago reconfirmó el conteo de **5 conectores** (Jira, Confluence, Elastic, DB2, navegador), resolviendo el bloqueante que arrastrábamos con el guion del Video 04.
>   - **Agentes pasa a Pub 18-19** (2 publicaciones, martes/jueves) — antes era 1 sola publicación (Pub 16 original).
>   - **Corrección (18 ago, aclaración de Yehimy sobre "Memoria vs. Instrucciones"):** este contenido nunca fue una publicación propia — es un ajuste/aclaración que siempre vivió como respuesta 4 del hilo de Pub 4 (`post-memoria-vs-instrucciones_mar-28jul.md`, en la carpeta de Pub 4). Se le había asignado por error un número propio (Pub 17 el 10-11 ago, luego Pub 20 al chocar con el nuevo Pub 17 de MCP) — eso se revierte. **No consume número de la serie ni de la cola**: republica junto con Pub 4, como su hilo, igual que el Video 04 se publica como respuesta a Pub 2. La serie Dev Suite cierra en **Pub 19**, sin Pub 20.
>   - Carpetas creadas: `semana-9_fechas-pendiente(pub-16-17)/` y `semana-10_fechas-pendiente(pub-18-19)/`. Carpeta de Pub 14-15 renombrada a fechas pendientes (el rango "17-21 ago" ya no aplicaba).
>
> **14 agosto 2026**
> - Creadas las carpetas de producción `Produccion/semana-7_10-14ago(pub-12-13)/` y `Produccion/semana-8_17-21ago(pub-14-15)/`, siguiendo la convención `pub-NN_dia-DDmes/`.
> - **Ajuste (14 ago, aclaración de Yehimy):** cada semana de producción trae 2 publicaciones, igual que Pub 12-13 — la semana 17-21 ago suma **Pub 15** (MCP, "Las llaves de los sistemas") junto a Pub 14, en vez de dejar esa semana con una sola pub. Carpeta renombrada a `semana-8_17-21ago(pub-14-15)/`.
> - **Borradores listos** (post + brief de pieza gráfica, falta producir en Figma) para **Pub 12**, **Pub 13** y **Pub 14**, con base en el material entregado por el equipo de Nibaldo (`información-equipo-raona-gco-devsuite.md`) y por Esteban Serrano (`material-base_skills-que-son-y-cuando-usarlas.md`).
> - Objetivo: tener estos tres contenidos listos para presentar en la reunión con GCO del **18 de agosto**. Las fechas de publicación propuestas (11, 13 y 20 ago) quedan pendientes de confirmar en esa reunión — la fecha original del 11 ago ya pasó sin que la serie se validara.
> - Pendiente antes de publicar Pub 14: confirmar con Nibaldo si `dotnet-review`/`cobol-analyzer` son parte de las 32 skills reales de la gco-dev-suite.
> - **Corrección de estado — Pub 10 y Pub 11:** Yehimy aportó las capturas — ambas SÍ están publicadas en Teams Raona desde el 3 de agosto (post + video + 3 piezas gráficas cada una), pero **no** en Teams GCO. Guardadas en `Produccion/imagenes_teams/04_casos-de-uso-reales/`.
> - ✅ **Videos 01, 02 y 03 — confirmados publicados en Teams GCO (jue 16 jul):** Yehimy aportó capturas (14 ago) que resuelven la duda que se había dejado abierta.
> - ⚠️ **Video 04 — sigue sin ninguna evidencia** de publicación en Teams GCO. **Decisión de Yehimy — no lleva número de Pub propio**, se publica como respuesta en el hilo de Pub 2 junto a los Videos 01-03, una vez aprobado.
> - **Corrección de modelo (14 ago, aclaración de Yehimy):** "semana de producción" y "fecha de publicación en Teams GCO" son dos cosas separadas. La semana de producción es cuándo se hace el trabajo (con antelación); las fechas del plan son las del plan original, no compromisos de publicación, porque Teams GCO seguía congelado. El destino inmediato de este material, una vez terminado, es quedar visible en Teams Raona (mismo tratamiento que Pub 10/11).
>
> **31 julio 2026**
> - Se retira la numeración "Caso de uso #N" de Pub 10 y Pub 11 (decisión de Yehimy): quedaba confusa al leerse junto al video. Nuevos títulos: Pub 10 = "Tres casos, un mismo copiloto: así se resuelven con código real de GCO" · Pub 11 = "Dos errores de pantalla que tenían la causa en otro lado".
>
> **30 julio 2026**
> - Pub 6 y Pub 7 traían fechas viejas en el borrador de Teams GCO (heredadas del sufijo de carpeta) — corregido a tiempo, ninguna se había enviado en ese momento. Quedaron programadas para martes 25 y jueves 27 de agosto (fechas que hoy, 18 ago, resultan irrelevantes porque ambas se auto-publicaron de todos modos y fueron retiradas — ver nota del 18 ago).
> - Los Videos 05 y 06 van después de Pub 6/7 en la cola de Casos de Uso Reales.
> - **Renumeración** (decisión de Yehimy): por tener contenido ya producido, Video 05 y Video 06 toman Pub 10 y Pub 11; Pub 10 original (Skills + instructions, aún sin producir) pasa a ser Pub 12.
> - La tabla de Publicaciones separa el estado en Teams Raona y Teams GCO. Detalle: `Planeacion/calendario-republicacion_teams-de-gco.md`.
>
> **28 julio 2026**
> - ⏸️ Congelamiento de publicaciones desde el 28 jul (decisión de Yehimy): todo lo programado desde el martes 28 jul en adelante (Pub 4, Memoria vs. Instrucciones, Pub 5, 6, 7, 8, 9) se pausa y se reprograma con un corrimiento de +3 semanas exactas.
> - ⚠️ No se encontró en el proyecto un registro previo de esta directriz como pedido de Jonatan — `[Confirmar con Yehimy]` antes de comunicarlo a GCO.
>
> **14 julio 2026**
> - Verificación de todas las publicaciones contra las capturas de Teams (`Produccion/imagenes_teams/` — fuente de verdad): Pub 7 confirmada como publicada, respuestas 2–4 de la Pub 4 confirmadas.
> - Comentarios de Jonatan en Teams (16 jun) registrados: reordenar el post de licencia antes de Pub 3 + enlace clicable a My Profile + sin anglicismos.
>
> **9 julio 2026**
> - Guiones de los Videos 05 y 06 listos: la grabación de casos de uso (entrevista Víctor → Luis De la Fuente, 22 jun) trae 5 casos, repartidos en dos píldoras (Video 05 = 3 casos principales · Video 06 = 2 casos de debugging).

### Publicaciones — detalle completo

> Fecha = fecha histórica de publicación en el tenant Raona (registro original), cuando aplica. Las fechas del tenant GCO viven en su propia columna.

| Pub | Semana | Fecha Raona | Canal | Contenido | Estado Teams Raona | Estado Teams GCO | Carpeta |
|-----|--------|-------|-------|-----------|---------------------|-------------------|---------|
| 1 | S1 | Mar 3 jun | Todos los canales | Posts de bienvenida — 6 canales activados | ✅ Publicada | ✅ Publicada mar 14 jul | [pub-01_mar-02jun_(dia-01_mar-14-jul)/](semana-1_01-05jun(pub-01-02)/pub-01_mar-02jun_(dia-01_mar-14-jul)/) |
| 2 | S1 | Jue 5 jun | Primeros Pasos | Cómo activar GitHub Copilot en Visual Studio — post + infografía + tarjetas paso a paso | ✅ Post + infografía publicados · tarjetas en Figma | ✅ Publicada jue 16 jul (con Videos 01–03) | [pub-02_jue-04jun_(dia-02_jue-16-jul)/](semana-1_01-05jun(pub-01-02)/pub-02_jue-04jun_(dia-02_jue-16-jul)/) |
| 3 | S3 | — | Primeros Pasos | No tiene memoria permanente. Tiene un cajón. | ✅ Publicada | 🗑️ **Retirada (18 ago):** se auto-publicó pese al congelamiento — borrada, en cola de republicación (ver cronograma) | `semana-3_15-19jun/` |
| 4 | S2 | — | Anuncios y Tips Ágiles | ¿Siempre usas el mismo modelo en GitHub Copilot? + 4 respuestas del hilo (la 4ª, "Memoria vs. Instrucciones", se publica como post propio 1h después — no es una Pub aparte, ver nota abajo) | ✅ Publicada | 🗑️ **Retirada (18 ago):** al menos la tarjeta "Optimización de tokens" se auto-publicó — confirmar con Yehimy si fue el post completo | [pub-04_jue-11jun_(dia-05_mar-28-jul)/](semana-2_08-12jun(pub-03-04-05)/pub-04_jue-11jun_(dia-05_mar-28-jul)/) |
| 5 | S2 | Jue 11 jun | Primeros Pasos | Hay una forma más precisa. — Jerarquía de referencias de GitHub Copilot | ✅ Post + infografía publicados · tarjeta minimalista en Figma | 🗑️ **Retirada (18 ago):** se auto-publicó pese al congelamiento — borrada, en cola de republicación | [pub-05_jue-11jun_(dia-06_jue-30-jul)/](semana-2_08-12jun(pub-03-04-05)/pub-05_jue-11jun_(dia-06_jue-30-jul)/) |
| 6 | S4 | Mar 23 jun | Casos de Uso Reales | Caso de uso real 1 — Entender código heredado con GitHub Copilot · COBOL | ✅ Publicada — post + tríptico (3 tarjetas) + respuesta "Prompts listos para el equipo" | 🗑️ **Retirada (18 ago):** se auto-publicó pese al congelamiento — borrada, en cola de republicación | [semana-4_22-26jun(pub-06-07)/pub-06_mar-23jun_(dia-07_mar-04-ago)/](semana-4_22-26jun(pub-06-07)/pub-06_mar-23jun_(dia-07_mar-04-ago)/) |
| 7 | S4 | Jue 25 jun | Casos de Uso Reales | Caso de uso real 2 — Bug fixing con GitHub Copilot | ✅ Publicada — post + tríptico + respuesta "Prompts listos para el equipo" · confirmar lenguaje (.NET) con Nibaldo | 🗑️ **Retirada (18 ago):** se auto-publicó pese al congelamiento — borrada, en cola de republicación | [semana-4_22-26jun(pub-06-07)/pub-07_jue-25jun_(dia-08_jue-06-ago)/](semana-4_22-26jun(pub-06-07)/pub-07_jue-25jun_(dia-08_jue-06-ago)/) |
| 8 | S5 | Mar 30 jun | Anuncios y Tips Ágiles | La fórmula del prompt que funciona — parte 1 (caso real SQLCODE en COBOL) | ✅ Publicada 3 jul — infografía + tarjeta antes/después | 🗑️ **Retirada (18 ago):** se auto-publicó pese al congelamiento — borrada, en cola de republicación | [semana-5_29jun-03jul(pub-08-09)/pub-08_mar-30jun_(dia-09_mar-11-ago)/](semana-5_29jun-03jul(pub-08-09)/pub-08_mar-30jun_(dia-09_mar-11-ago)/) |
| 9 | S5 | Jue 2 jul | Anuncios y Tips Ágiles | La fórmula del prompt — parte 2 (Contexto y Restricciones) | ✅ Publicada 3 jul — díptico de 2 tarjetas | 🔵 Nunca se auto-publicó — sigue solo en Teams Raona, en cola de republicación | [semana-5_29jun-03jul(pub-08-09)/pub-09_jue-02jul_(dia-10_jue-13-ago)/](semana-5_29jun-03jul(pub-08-09)/pub-09_jue-02jul_(dia-10_jue-13-ago)/) |
| 10 | S6 | 3 ago 2026 | Casos de Uso Reales | Video 05 — Tres casos, un mismo copiloto | ✅ Publicado (prueba) — post + video + 3 piezas gráficas | 🔵 No enviado — pendiente edición final (difuminados) | [pub-10_mar-01sep/](semana-6_27-31jul(pub-10-11)/pub-10_mar-01sep/) |
| 11 | S6 | 3 ago 2026 | Casos de Uso Reales | Video 06 — Dos errores de pantalla | ✅ Publicado (prueba) — post + video + 3 piezas gráficas | 🔵 No enviado — pendiente audio sección 01 | [pub-11_jue-03sep/](semana-6_27-31jul(pub-10-11)/pub-11_jue-03sep/) |
| 12 | S7 | — | Anuncios y Tips Ágiles | gco-dev-suite: qué es y por qué existe | 🟡 4 piezas producidas, cargadas como borrador — falta que Yehimy presione "Publicar en el canal" | 🔵 No enviado — pendiente de Raona primero | [pub-12_mar-11ago/](semana-7_10-14ago(pub-12-13)/pub-12_mar-11ago/) |
| 13 | S7 | — | Anuncios y Tips Ágiles | ¿Qué es una Skill (y qué no es)? — serie Skills 1/3 | 🟡 Post + 2 infografías producidas — falta publicar de prueba | 🔵 No enviado — pendiente de Raona primero | [pub-13_jue-13ago/](semana-7_10-14ago(pub-12-13)/pub-13_jue-13ago/) |
| 14 | S8 | — | Anuncios y Tips Ágiles | Skills 2/3 — el mapa de los 5 niveles | 🟡 Propuesta de contenido | ⚪ Sin producir todavía | [pub-14_mar-sem8-pendiente/](semana-8_fechas-pendiente(pub-14-15)/pub-14_mar-sem8-pendiente/) |
| 15 | S8 | — | Anuncios y Tips Ágiles | Skills 3/3 — anatomía y cuándo usar | ✅ 3 piezas producidas y corregidas — lista para publicar de prueba (espera a Pub 14) | ⚪ Sin producir todavía | [pub-15_jue-sem8-pendiente/](semana-8_fechas-pendiente(pub-14-15)/pub-15_jue-sem8-pendiente/) |
| 16 | S9 | — | Anuncios y Tips Ágiles | MCP 1/2 — los 5 conectores | 🟡 Propuesta de contenido | ⚪ Sin producir todavía | [pub-16_mar-sem9-pendiente/](semana-9_fechas-pendiente(pub-16-17)/pub-16_mar-sem9-pendiente/) |
| 17 | S9 | — | Anuncios y Tips Ágiles | MCP 2/2 — MCP en acción | 🟡 Propuesta de contenido | ⚪ Sin producir todavía | [pub-17_jue-sem9-pendiente/](semana-9_fechas-pendiente(pub-16-17)/pub-17_jue-sem9-pendiente/) |
| 18 | S10 | — | Anuncios y Tips Ágiles | Agentes 1/2 — los 3 que deciden | 🟡 Propuesta de contenido | ⚪ Sin producir todavía | [pub-18_mar-sem10-pendiente/](semana-10_fechas-pendiente(pub-18-19)/pub-18_mar-sem10-pendiente/) |
| 19 | S10 | — | Anuncios y Tips Ágiles | Agentes 2/2 — cierra la serie Pub 12-19 | 🟡 Propuesta de contenido | ⚪ Sin producir todavía | [pub-19_jue-sem10-pendiente/](semana-10_fechas-pendiente(pub-18-19)/pub-19_jue-sem10-pendiente/) |

> **"Memoria vs. Instrucciones" no es una Pub numerada.** Es un ajuste/aclaración que vive como hilo de **Pub 4** (`post-memoria-vs-instrucciones_mar-28jul.md`, en la carpeta de Pub 4) — igual que el Video 04 es un hilo de Pub 2, no una publicación propia. Republica junto con Pub 4, no ocupa su propio turno en la cola.
>
> _Nota de numeración: Pub 3 y 4 estuvieron ausentes de esta tabla en versiones anteriores del tablero por un descuido — quedan restituidas el 18 ago. **Renumeración del 30 jul:** Video 05/06 toman Pub 10/11; Skills+instructions pasa a Pub 12. **Renumeración del 18 ago:** la serie gco-dev-suite crece de Pub 12-16 a **Pub 12-19** (cierre de la serie, sin Pub 20). Ningún número se elimina, solo se corren hacia adelante — ver `CLAUDE.md` ("Regla de numeración")._

### Piezas gráficas — detalle

| Pieza | Pub | Tipo | Estado |
|-------|-----|------|--------|
| Infografía "Activa GitHub Copilot en Visual Studio" | Pub 2 | Infografía 1080×1350 px | ✅ Publicada |
| 6 tarjetas paso a paso (T1: VS instalado · T2: licencia) | Pub 2 (respuesta al hilo) | Tarjeta 1080×1350 px | 🔄 Producción Figma |
| Infografía jerarquía de referencias | Pub 5 | Infografía 1080×1350 px | ✅ Producida |
| Tríptico Pub 6 — Entender COBOL heredado | Pub 6 | card-triptico · 3 paneles · 1080×1080 px | ✅ Producida |
| Tríptico Pub 7 — Bug fixing con contexto | Pub 7 | card-triptico · 3 paneles · 1080×1080 px | ✅ Producida |
| Infografía "La fórmula del prompt que funciona" (`09-S5-infografia_prompts`) | Pub 8 | Infografía · 1080×1350 px | ✅ Producida |
| Tarjeta "El mismo encargo, dos resultados" (`09-S5-card-contexto`) | Pub 8 (respuesta 1) | Tarjeta comparativa horizontal | ✅ Producida |
| Tarjeta "Contexto" del díptico (`10-S5-card-contexto`) | Pub 9 | Tarjeta horizontal ~1920×1080 px | ✅ Producida |
| Tarjeta "Restricciones" del díptico (`10-S5-card-restricciones`) | Pub 9 | Tarjeta horizontal ~1920×1080 px | ✅ Producida |
| Tarjeta minimalista "Empieza por lo más acotado" | Pub 5 | Tarjeta minimalista 1080×1350 px | 🔄 Producción Figma |
| 1-S2 · Optimización de Tokens y Modelos | Pub 4 | Tarjeta comparativa 1920×1080 px | ✅ Reformulada (plan-agnóstica) — pendiente confirmar plan de GCO con Nibaldo |
| 2-S2 · Diseñe la solución con un modelo Premium | Pub 4 | Tarjeta minimalista 1080×1350 px | 🔄 Producción Figma |
| 3-S2 · Carga progresiva de Skills | Pub 4 | Tarjeta minimalista 1080×1350 px | 🔄 Producción Figma |
| 4-S2 · Higiene de la memoria a corto plazo | Pub 4 | Tarjeta minimalista 1080×1350 px | 🔄 Producción Figma |
| 5-S2 · Memoria vs. Instrucciones del equipo | Pub 4 | Tarjeta comparativa 1920×1080 px | 🔄 Producción Figma |
| Tríptico Pub 10 — Video 05, código real de GCO | Pub 10 | card-triptico · 3 paneles · 1080×1080 px | 🔄 Brief listo, cifras pendientes de Nibaldo |
| Tríptico Pub 11 — Video 06, debugging | Pub 11 | card-triptico · 3 paneles · 1080×1080 px | 🔄 Brief listo, cifras pendientes de Nibaldo |
| Tríptico + 3 tarjetas Pub 12 | Pub 12 | card-triptico + tarjeta minimalista | ✅ Producidas, cargadas como borrador |
| 2 infografías Pub 13 (qué es / qué no es) | Pub 13 | Infografía 1080×1350 px | ✅ Producidas |
| Infografía "El mapa de los 5 niveles de personalización" | Pub 14 | Infografía 1080×1350 px | 🔄 Brief listo |
| 3 tarjetas Pub 15 (anatomía / cerebro-metadata / rendimiento y carga) | Pub 15 | Tarjeta ~1080×1350 px | ✅ Producidas y corregidas (cápsula `Fase 3 \| Multi-entorno`, numeración `1/3-2/3-3/3`) |
| Infografía "Las llaves de cada sistema" | Pub 16 | Infografía 1080×1350 px | 🔄 Brief listo |
| Tarjeta "Investigar un fallo: antes / ahora" | Pub 17 | Tarjeta comparativa horizontal | 🔄 Brief listo |
| Tríptico "Los 3 agentes" | Pub 18 | card-triptico · 3 paneles · 1080×1080 px | 🔄 Brief listo |
| Infografía "El flujo de un cambio: 6 pasos" | Pub 19 | Infografía 1080×1350 px | 🔄 Brief listo |
| Tarjeta "¿Esto es tuyo o del equipo?" (`4a-S2-card_memoria-o-instructions`) | Hilo `4-a` (de Pub 4) | Tarjeta comparativa horizontal | 🔄 Brief listo |
| Tarjeta "Los 5 niveles vs. Memoria" (`14a-S8-card_memoria-no-es-nivel`) | Hilo `14-a` (de Pub 14) | Tarjeta comparativa horizontal | 🔄 Brief listo |

> **Hilos `4-a` y `14-a` (18 ago, feedback de Yehimy):** dos publicaciones distintas que profundizan la misma aclaración (Memoria vs. Instructions) desde ángulos distintos, cada una respondiendo dentro del hilo de su Pub — no llevan número de Pub propio, igual que el Video 04 es hilo de Pub 2. `4-a` lo aborda desde el día a día (tus hábitos); `14-a` desde el mapa de personalización (por qué Memoria no es un sexto nivel). Ver `canal-anuncios-tips_pub4-a.md` y `canal-anuncios-tips_pub14-a.md`.

### Vídeos — detalle

> Registro del intercambio con Nibaldo (25–30 jun): `Seguimiento/seguimiento-videos-y-acceso_30jun2026.md`
> **Convención de numeración (8 jul 2026):** cada vídeo publicado lleva un número global y correlativo, igual que las pubs.

| Video | Bloque conceptual | Título | Estado | Carpeta |
|-------|-------------------|--------|--------|---------|
| 01 | Configuración del entorno | Verifica tu acceso e instala las herramientas | ✅ Publicado en Teams GCO jue 16 jul (con Pub 2) — confirmado con captura (14 ago) · URL canal corporativo pendiente | [Videos/v01_configuracion-entorno/](Videos/v01_configuracion-entorno/) |
| 02 | Configuración del entorno | Autenticación en Visual Studio y VS Code | ✅ Publicado en Teams GCO jue 16 jul (post propio) — confirmado con captura (14 ago) | [Videos/v01_configuracion-entorno/](Videos/v01_configuracion-entorno/) |
| 03 | Configuración del entorno | Autenticación desde la terminal (`gh auth login`) | ✅ Publicado en Teams GCO jue 16 jul (post propio) — confirmado con captura (14 ago) | [Videos/v01_configuracion-entorno/](Videos/v01_configuracion-entorno/) |
| 04 | Multientorno · MCP (Fase 3) | Instala y configura tus MCP con la gco-dev-suite | ✅ Guion listo, grabación de Víctor Gisbert (~16 min) · 🔄 pendiente edición (condensar a 2:30-3:00 + difuminar datos sensibles) · ✅ Publicado de prueba en Teams Raona (14 ago), respuesta en hilo de Pub 2 · no lleva número de Pub propio · falta producir la infografía `V04-S1-infografia_activa-tus-mcp` | [Videos/v04_instalar-mcp/](Videos/v04_instalar-mcp/) |
| 05 (Pub 10) | Casos de uso reales | GitHub Copilot con código real de GCO | ✅ Guion listo, post redactado · 🔄 pendiente edición/postproducción (difuminados: cámara de Luis, URL de producción, JSON con datos de personas) · falta contenido gráfico · pendiente revisión de coherencia por Nibaldo · 📌 corregir audio (errores TTS tipo "prop" por "prompt") | [pub-10_mar-01sep/](semana-6_27-31jul(pub-10-11)/pub-10_mar-01sep/) |
| 06 (Pub 11) | Casos de uso reales | Dos bugs de pantalla resueltos | ✅ Guion revisado, post redactado · 🎙️ audios secciones 02-04 generados, falta sección 01 · falta contenido gráfico · pendiente revisión de coherencia por Nibaldo | [pub-11_jue-03sep/](semana-6_27-31jul(pub-10-11)/pub-11_jue-03sep/) |
| Por asignar | Primeros pasos | Primera conversación con GitHub Copilot Chat + completado inline (decisión de Jonatan, 15 jul: Opción A) | 🔄 Ajustes pendientes (Nibaldo): ocultar dato del login + regrabar autenticación VS Code | [Videos/v02_primeros-pasos/](Videos/v02_primeros-pasos/) |
| V-Nibaldo | — | Videos propios de Nibaldo | 🔄 En curso | — |

### Comentarios de Jonatan en Teams (16 jun) — acciones derivadas

> Fuente: hilo "¿GitHub Copilot no aparece en tu Visual Studio?", canal Primeros Pasos.

1. Reordenar en el despliegue oficial: el post de licencia va como segunda publicación del canal Primeros Pasos, antes de Pub 3.
2. Enlace clicable a My Profile: ✅ Aplicado (15 jul) — enlaza a `myprofile.microsoft.com`.
3. Sin anglicismos: se reemplaza "tarjeta" y "respuesta" en documentos y posts. Los nombres de archivo técnicos no cambian.

### Acuerdos de la reunión del 30 jun (con Jonatan)

> Acta completa: `Reuniones/[GCO] reunion_semanal-30-06-26.md`

- Estrategia de lanzamiento en Teams GCO: subir primero el contenido inicial ("Semana 1") y luego añadir de golpe a todo el departamento de informática, liberando contenidos progresivamente.
- Jonatan no recibe notificación cuando se le etiqueta en Teams Raona — Yehimy avisa a través de Nibaldo o Guillermo.
- Parrilla Semana 5: publicaciones sobre uso de prompts (Pub 8 y 9), martes y jueves — confirmado.

### Propuestas en validación

| Propuesta | Eje | Propuesto por | Estado | Archivo |
|-----------|-----|---------------|--------|---------|
| Modelo apropiado para una tarea | Novedades y Tips | Nibaldo · 5 jun | ✅ Integrada en Pub 4 (tarjeta 1-S2) | [prop_modelo-apropiado.md](semana-2_08-12jun(pub-03-04-05)/propuestas-nibaldo/prop_modelo-apropiado.md) |
| Skills para optimización de tokens | Novedades y Tips | Nibaldo · 5 jun | ✅ Integrada en Pub 4 (tarjeta 3-S2) | [prop_skills-optimizacion-tokens.md](semana-2_08-12jun(pub-03-04-05)/propuestas-nibaldo/prop_skills-optimizacion-tokens.md) |
| Correcto uso de la memoria | Novedades y Tips | Nibaldo · 5 jun | ✅ Integrada en Pub 4 (tarjeta 4-S2) | [prop_memoria-copilot.md](semana-2_08-12jun(pub-03-04-05)/propuestas-nibaldo/prop_memoria-copilot.md) |
