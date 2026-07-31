# Base para reunión de seguimiento
> Documento vivo — se actualiza antes de cada reunión de seguimiento, no se crea uno nuevo por fecha.
> Fuentes: `Produccion/TABLERO.md` (producción) · `Planeacion/calendario-republicacion_teams-de-gco.md` (calendario) · `_historico/ESTADO.md` (estado general).

**Última actualización:** 30 julio 2026

---

## 🔧 Corrección a tiempo: Pub 6 y Pub 7 traían fechas viejas (detectado y resuelto 30 jul)

Al revisar el Teams de GCO, Pub 6 y Pub 7 aparecían programadas para **martes 4 ago** y **jueves 6 ago** — las fechas antiguas de los sufijos de carpeta, no las del calendario. Confirmado con Yehimy: **ninguna se había enviado todavía**. Quedan en sus fechas naturales del congelamiento, sin corrimiento adicional: **martes 25 y jueves 27 de agosto**. Detalle: `Planeacion/calendario-republicacion_teams-de-gco.md` (principio 9).

## ✅ Videos 05 y 06 con número de Pub propio: Pub 10 y Pub 11 (30 jul, renumerado el mismo día)

Van *después* de Pub 6 y Pub 7 en la cola del canal Casos de Uso Reales — toman los siguientes slots: **martes 1 y jueves 3 de septiembre**, en paralelo con Pub 8 y Pub 9 (canal distinto, sin conflicto). **Renumeración:** Skills + instructions (Pub 10 original, sin producir) pasa a **Pub 12** — se prioriza el número más bajo para el contenido ya producido. Esto actualiza la regla de numeración en `CLAUDE.md`. Anglicismos corregidos en ambos guiones; posts redactados para el canal Casos de Uso Reales, listos en cola en el canal interno de Teams de Raona. Documentos: `Produccion/semana-6_27-31jul(pub-10-11)/pub-10_mar-01sep/canal-casos-de-uso_pub10-video05.md` y `Produccion/semana-6_27-31jul(pub-10-11)/pub-11_jue-03sep/canal-casos-de-uso_pub11-video06.md`.

## ⏸️ Congelamiento de publicaciones (28 jul) — vigente

Desde el 28 jul se pausa todo lo que estaba programado desde ese martes en adelante (Pub 4, Memoria vs. Instrucciones, Pub 5, 6, 7, 8, 9). Se reprograma con un corrimiento de **+3 semanas exactas**, reanudando la **tercera semana de agosto** (martes 18 ago, confirmado 30 jul sin cambios). ⚠️ No se encontró en el proyecto un registro previo de esta directriz como pedido de Jonatan — `[Confirmar con Yehimy la fuente]` antes de comunicarlo a GCO. Detalle completo: `Planeacion/calendario-republicacion_teams-de-gco.md`.

## Calendario de publicaciones — estado real

| Fecha | Canal | Contenido | Estado |
|---|---|---|---|
| Mar 18 ago | Anuncios y Tips Ágiles | Pub 4 + "Memoria vs. Instrucciones" (1h después) | Programada (congelamiento) |
| Jue 20 ago | Primeros Pasos | Pub 5 — jerarquía de referencias | Programada (congelamiento) |
| Mar 25 ago | Casos de Uso Reales | Pub 6 — Caso #1: COBOL heredado + tríptico | Corregida (traía fecha vieja 4 ago) |
| Jue 27 ago | Casos de Uso Reales | Pub 7 — Caso #2: bug fixing | Corregida (traía fecha vieja 6 ago) |
| Mar 1 sep | Casos de Uso Reales | **Pub 10** — Video 05, "Caso de uso #3": código real de GCO en video | Post listo, falta video final y contenido gráfico |
| Mar 1 sep | Anuncios y Tips Ágiles | Pub 8 — Fórmula del prompt, parte 1 | Programada (congelamiento) |
| Jue 3 sep | Casos de Uso Reales | **Pub 11** — Video 06, "Caso de uso #4": debugging del frontend al COBOL | Post listo, falta video final y contenido gráfico |
| Jue 3 sep | Anuncios y Tips Ágiles | Pub 9 — Fórmula del prompt, parte 2 | Programada (congelamiento) |

Pub 12 (Skills + instructions, renumerada de Pub 10) y AMA siguen bloqueadas sin fecha (ver bloqueantes).

📨 **Pendiente clave para el martes:** el equipo de Nibaldo debe responder `Planeacion/pregunta-equipo-nibaldo_contenido-pub12-skills.md` a más tardar el **lunes 3 de agosto**, para tener temas listos en esta reunión.

## Videos en producción

| Video | Pendiente | Post de publicación (canal GCO) |
|---|---|---|
| 04 — Instalar/configurar MCP | Edición/postproducción (condensar a 2:30–3:00 + difuminar datos) · enlace de SharePoint | ⚠️ **Falta crear** — solo existe el post interno para el canal de Raona (`Seguimiento/post-interno_video-v04-instalar-mcp_08jul2026.md`), no el post para publicarlo en el canal de GCO |
| 05 — Casos de uso reales (incidencias/GAN/producción) — Pub 10 | Corregir audio TTS ("prop" → "prompt") · difuminados delicados · revisión de coherencia (Nibaldo) · adjuntar video final al post · falta contenido gráfico (tarjetas) | ✅ **Post creado (30 jul)** — programado para el 1 sep |
| 06 — Debugging (frontend a COBOL) — Pub 11 | Grabar audio de la intro (Sección 1) · revisar mismo riesgo de TTS · revisión de coherencia (Nibaldo) · adjuntar video final al post · falta contenido gráfico (tarjetas) | ✅ **Post creado (30 jul)** — programado para el 3 sep |

> Video 04 sigue sin post — falta escribirlo antes de poder programarlo, a diferencia de los Videos 05 y 06 (ya redactados) y 01-03 (ya publicados).

## Bloqueantes activos

| Ítem | Responsable | Notas |
|---|---|---|
| Fecha sesión AMA | Nibaldo + Guillermo | Sin fecha |
| Microsoft Bookings | Yehimy | Sin configurar — bloquea Reservas 1:1 |

---

## Cómo mantener este documento

Antes de cada reunión de seguimiento: releer `Produccion/TABLERO.md` y `Planeacion/calendario-republicacion_teams-de-gco.md`, actualizar las tres secciones de arriba con lo que haya cambiado, y refrescar la fecha de "Última actualización". No crear un archivo nuevo por reunión — este es el único punto de entrada para preparar la reunión.
