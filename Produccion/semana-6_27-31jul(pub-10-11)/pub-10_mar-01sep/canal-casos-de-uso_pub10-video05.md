# Canal Casos de Uso Reales — Pub 10 · Video 05 · Código real de GCO: incidencias, GAN y producción
> Canal: Casos de Uso Reales · Tipo: Soporte de video · **Pub 10** (asignado 30 jul — va después de Pub 6/7)
> Estado: 🔄 Post redactado (30 jul) — pendiente de video final (edición/postproducción) y de contenido gráfico para adjuntar antes de publicar
> Programado en calendario: **martes 1 de septiembre**, en paralelo con Pub 8 (canal distinto) — ver `Planeacion/calendario-republicacion_teams-de-gco.md`
> Fuente del guion: `Produccion/Videos/v05-06_casos-de-uso/v05-pill_para-grabacion_casos-de-uso-reales.md`

---

## Objetivo de esta publicación

Acompañar el Video 05 con un post que funcione como "Caso de uso #3" del canal — continuando la numeración de Pub 6 ("Caso de uso #1") y Pub 7 ("Caso de uso #2") — mostrando con código real de GCO (.NET, GAN, COBOL) tres situaciones resueltas con GitHub Copilot. `[Confirmar con Yehimy: numeración "#3" propuesta por continuidad, no está registrada en el proyecto]`.

---

## Post listo para copiar en Teams (tenant GCO)

**Asunto:** `Caso de uso #3: código real de GCO en video`

---

**Caso de uso #3: tres casos reales, contados en menos de 3 minutos**

**El escenario:** una incidencia que llegó en PDF, una operativa GAN completa por generar, y un backend en producción con un servicio externo que empezó a fallar.

**El objetivo:** mostrar, con código real de GCO —.NET, GAN y COBOL—, qué es posible resolver con GitHub Copilot cuando le das el contexto justo.

🎬 En el video vas a ver:
1. Cómo diagnosticó y corrigió una incidencia completa a partir de un PDF escaneado.
2. Cómo generó una operativa GAN completa a partir de 30-40 ejemplos de contexto.
3. Cómo ajustó un backend que hoy sigue en producción.

👉 Míralo — menos de 3 minutos. Cuéntanos en este canal qué caso te gustaría resolver tú.

---

## Conexión con el video

El post referencia directamente las secciones 2, 3 y 4 del guion (`v05-pill_para-grabacion_casos-de-uso-reales.md`): incidencia en PDF, operativa GAN, backend con servicio externo en producción. No incluye la Sección 1 (intro compartida con el Video 06) ni el cierre — esos quedan solo en el video.

## Recursos adjuntos

- El video (enlace pendiente — depende de edición/postproducción, ver `Produccion/TABLERO.md` sección Vídeos).
- Tríptico gráfico `10-S7-Card_pub10-*` (ver brief abajo) — teaser de los 3 casos para quien no vea el video completo.

---

## Brief — tríptico Pub 10 (`10-S7-Card_pub10-*`) · card-triptico · 3 paneles (carrusel)

**Tipo de pieza:** `card-triptico` — 3 paneles cuadrados (1080×1080) en carrusel: **Portada → Los 3 casos → CTA**
**Origen del contenido:** guion Video 05, secciones 2, 3 y 4 (ver `v05-pill_para-grabacion_casos-de-uso-reales.md`)
> Algunos datos de esta pieza (cifras de tiempo, vigencia del cambio en producción) están pendientes de confirmación del equipo de Nibaldo — ver `Produccion/Videos/v05-06_casos-de-uso/preguntas-equipo-nibaldo_contenido-grafico.md`. Mientras no lleguen, la pieza se queda con el flujo genérico, sin inventar cifras.

### Panel 1 — Portada · `10-S7-Card_pub10-portada` · `1/3`

| Elemento | Texto |
|----------|-------|
| Logo | Occident — isótipo superior izquierda |
| Pill fase | Fase 3 \| Multi-entorno — superior derecha · contorno gris · texto negro |
| Eyebrow / overline | CASO DE USO REAL · VIDEO · .NET · GAN · COBOL |
| Headline (pregunta) | ¿Funciona GitHub Copilot con el código real de GCO? |
| Subtext | Tres casos reales, contados en menos de 3 minutos. |
| Numeración | `1/3` — chip esquina inferior derecha |

### Panel 2 — Los 3 casos · `10-S7-Card_pub10-casos` · `2/3`

| Elemento | Texto |
|----------|-------|
| Eyebrow | LO QUE VAS A VER |
| Fila 1 | Una incidencia resuelta a partir de un PDF escaneado |
| Fila 2 | Una operativa GAN completa, generada con 30-40 ejemplos de contexto |
| Fila 3 | Un ajuste en un backend que hoy sigue en producción |
| Numeración | `2/3` |

### Panel 3 — CTA · `10-S7-Card_pub10-cta` · `3/3`

| Elemento | Texto |
|----------|-------|
| Eyebrow | TU TURNO |
| Headline | El siguiente caso puede ser el tuyo. |
| CTA | 👉 Mira el video (menos de 3 minutos) y cuéntanos qué quieres resolver |
| Numeración | `3/3` |

### Especificaciones Figma (`card-triptico`)

- **Formato:** 1080×1080 px por panel (3 paneles · carrusel Teams)
- **Fondo:** blanco — sin fondos negros; rojo `#DC0028` permitido como acento o fondo según el diseño de la pieza
- **Eyebrow:** rojo `#DC0028` · uppercase · GCO Sans pequeño
- **Headline:** negro (o blanco si el fondo es rojo) · CO Bold · display
- **Filas del panel 2:** numeración/viñeta en rojo `#DC0028` + texto GCO Sans
- **CTA (panel 3):** GCO Sans bold · con el 👉 como único ícono
- **Logo Occident:** isótipo presente — superior izquierda en portada, inferior derecha en paneles 2 y 3
- **Tipografía:** CO para headlines · GCO Sans para texto corriente

## Procedencia del contenido

| Punto del post | Fuente |
|----------------|--------|
| Incidencia resuelta desde el PDF | Guion Video 05 · Sección 2 — grabación Víctor Gisbert / Luis De la Fuente, 22 jun |
| Operativa GAN generada con contexto | Guion Video 05 · Sección 3 |
| Backend con servicio externo en producción | Guion Video 05 · Sección 4 |

---

## Estado: qué falta antes de publicar

- 🔄 Video en edición/postproducción (condensar a 2:30–3:00 + difuminar datos sensibles) — ver `Produccion/TABLERO.md`.
- 🔄 Pendiente revisión de coherencia por Nibaldo.
- 🔄 Corregir audio TTS (feedback Jonatan 15 jul: "prop" en lugar de "prompt").
- ✅ Este post queda listo para dejarse en cola en el canal interno de Raona; se adjunta el enlace del video final antes de programarlo en Teams GCO.
