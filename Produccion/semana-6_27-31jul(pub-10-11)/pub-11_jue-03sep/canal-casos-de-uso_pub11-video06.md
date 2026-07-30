# Canal Casos de Uso Reales — Pub 11 · Video 06 · Debugging del frontend al COBOL
> Canal: Casos de Uso Reales · Tipo: Soporte de video · **Pub 11** (asignado 30 jul — va después de Pub 6/7 y de Pub 10)
> Estado: 🔄 Post redactado (30 jul) — pendiente de video final (edición/postproducción) y de contenido gráfico para adjuntar antes de publicar
> Programado en calendario: **jueves 3 de septiembre**, en paralelo con Pub 9 (canal distinto) — ver `Planeacion/calendario-republicacion_teams-de-gco.md`
> Fuente del guion: `v06-pill_para-grabacion_casos-de-uso-debugging.md` (misma carpeta)

---

## Objetivo de esta publicación

Acompañar el Video 06 con un post que funcione como "Caso de uso #4" del canal — continuando la numeración de Pub 6, Pub 7 y Video 05 ("Caso de uso #3") — mostrando cómo GitHub Copilot rastrea un bug desde la pantalla hasta el COBOL. `[Confirmar con Yehimy: numeración "#4" propuesta por continuidad, no está registrada en el proyecto]`.

---

## Post listo para copiar en Teams (tenant GCO)

**Asunto:** `Caso de uso #4: debugging del frontend al COBOL`

---

**Caso de uso #4: dos errores de pantalla, resueltos con el mismo método**

**El escenario:** un botón de opción que se reseteaba solo al recargar la página, y una lista desplegable que cambiaba de valor al grabar — dos síntomas raros, sin causa evidente en el código visible.

**El objetivo:** mostrar cómo GitHub Copilot rastrea un error desde la pantalla hasta el COBOL que hay detrás, cuando el bug no está donde parece.

🎬 En el video vas a ver el método en 3 pasos:
1. Una carpeta con solo el código que hay que revisar.
2. Describirle el síntoma tal como lo ve el usuario.
3. Dejar que recorra el código completo hasta dar con la causa.

👉 Míralo — menos de 2:30 minutos. ¿Llevas días con un error así? Cuéntanos cómo te fue.

---

## Conexión con el video

El post referencia directamente las secciones 2 y 3 del guion (`v06-pill_para-grabacion_casos-de-uso-debugging.md`): el botón de opción que se resetea y el combo que se recalcula al grabar. No incluye la Sección 1 (intro compartida con el Video 05) ni el cierre — esos quedan solo en el video.

## Recursos adjuntos

- El video (enlace pendiente — depende de edición/postproducción, ver `Produccion/TABLERO.md` sección Vídeos).
- Tríptico gráfico `11-S7-Card_pub11-*` (ver brief abajo) — teaser de los 2 errores para quien no vea el video completo.

---

## Brief — tríptico Pub 11 (`11-S7-Card_pub11-*`) · card-triptico · 3 paneles (carrusel)

**Tipo de pieza:** `card-triptico` — 3 paneles cuadrados (1080×1080) en carrusel: **Portada → Los 2 errores → El método**
**Origen del contenido:** guion Video 06, secciones 2 y 3 (ver `v06-pill_para-grabacion_casos-de-uso-debugging.md`)
> Algunos datos de esta pieza (cifras de tiempo sin resolver antes de usar GitHub Copilot) están pendientes de confirmación del equipo de Nibaldo — ver `preguntas-equipo-nibaldo_contenido-grafico.md` (misma carpeta). Mientras no lleguen, la pieza se queda con el flujo genérico, sin inventar cifras.

### Panel 1 — Portada · `11-S7-Card_pub11-portada` · `1/3`

| Elemento | Texto |
|----------|-------|
| Logo | Occident — isótipo superior izquierda |
| Pill fase | Fase 3 \| Multi-entorno — superior derecha · contorno gris · texto negro |
| Eyebrow / overline | CASO DE USO REAL · VIDEO · DEBUGGING |
| Headline (pregunta) | ¿Llevas días con un error que no logras encontrar? |
| Subtext | Dos errores de pantalla, resueltos con el mismo método — del frontend al COBOL. |
| Numeración | `1/3` — chip esquina inferior derecha |

### Panel 2 — Los 2 errores · `11-S7-Card_pub11-errores` · `2/3`

| Elemento | Texto |
|----------|-------|
| Eyebrow | LO QUE VAS A VER |
| Fila 1 | Un botón de opción que se reseteaba solo al recargar la página |
| Fila 2 | Un combo que cambiaba de valor al grabar, sin causa visible en pantalla |
| Numeración | `2/3` |

### Panel 3 — El método · `11-S7-Card_pub11-metodo` · `3/3`

| Elemento | Texto |
|----------|-------|
| Eyebrow | EL MÉTODO |
| Fila 1 | Una carpeta con solo el código que hay que revisar |
| Fila 2 | Describir el síntoma tal como lo ve el usuario |
| Fila 3 | Dejar que GitHub Copilot recorra el código hasta la causa |
| CTA | 👉 Mira el video (menos de 2:30 min) y cuéntanos cómo te fue |
| Numeración | `3/3` |

### Especificaciones Figma (`card-triptico`)

- **Formato:** 1080×1080 px por panel (3 paneles · carrusel Teams)
- **Fondo:** blanco — sin fondos negros; rojo `#DC0028` permitido como acento o fondo según el diseño de la pieza
- **Eyebrow:** rojo `#DC0028` · uppercase · GCO Sans pequeño
- **Headline:** negro (o blanco si el fondo es rojo) · CO Bold · display
- **Filas de los paneles 2 y 3:** numeración/viñeta en rojo `#DC0028` + texto GCO Sans
- **CTA (panel 3):** GCO Sans bold · con el 👉 como único ícono
- **Logo Occident:** isótipo presente — superior izquierda en portada, inferior derecha en paneles 2 y 3
- **Tipografía:** CO para headlines · GCO Sans para texto corriente

## Procedencia del contenido

| Punto del post | Fuente |
|----------------|--------|
| Botón de opción que se resetea al recargar | Guion Video 06 · Sección 2 — grabación Víctor Gisbert / Luis De la Fuente, 22 jun |
| Combo que se recalcula al grabar | Guion Video 06 · Sección 3 |

---

## Estado: qué falta antes de publicar

- 🔄 Falta grabar el audio de la Sección 1 (intro) del video.
- 🔄 Video en edición/postproducción — ver `Produccion/TABLERO.md`.
- 🔄 Pendiente revisión de coherencia por Nibaldo.
- 🔄 Revisar mismo riesgo de audio TTS que el Video 05.
- ✅ Este post queda listo para dejarse en cola en el canal interno de Raona; se adjunta el enlace del video final antes de programarlo en Teams GCO.
