# Resumen de sesión — Presentación reunión GCO · 31 mayo 2026
> Continúa desde: `sesion_semana-0_29may2026.md`

---

## Qué se completó en esta sesión

### 🖥️ Presentación para reunión GCO del 1 de junio — TERMINADA

Archivo: `Exportar/presentacion-semana1_01jun2026.html`

Nueva presentación HTML creada desde cero (NO modifica `presentacion-gco.html` original). Misma base CSS con fuentes CO embebidas en base64 (~2.4 MB). Contiene 6 secciones:

| Sección | Contenido |
|---------|-----------|
| 01 — Hoja de Ruta | 4 phase-cards (Concienciación, Primeros Pasos, Multi-entorno, Customización) + grid de 3 horizontes |
| 02 — Cronograma | Tabla 4 semanas (1–5 jun, 8–12 jun, 15–19 jun, 22–26 jun) con canal, publicación y estado |
| 03 — Zoom Semana 1 | Gantt detallado + Pub 1 y Pub 2 con texto completo y brief de diseño |
| 04 — Plan Editorial | Tabs por semana S1–S4 con ecards por publicación (8 pubs, 2 bloqueadas marcadas) |
| 05 — Los 3 Vídeos | cat-cards con concepto + lista de 6 secciones por guion |
| 06 — Siguientes Pasos | 4 pasos de acción (ver detalle de correcciones abajo) |

### Correcciones aplicadas a la presentación

1. **Logo** — SVG de Occident embebido en base64 extraído del original, con `onerror` fallback al texto
2. **Paso AMA reemplazado** — ahora dice "Presentación de los 3 vídeos como cápsulas rápidas · al recibir el feedback, ejecutarlos dentro del cronograma"
3. **"Bloqueante" eliminado** de todos los step-tags
4. **Paso Guillermo / Recibir manual de marca eliminado** completamente — no estaba en los archivos fuente de esta sesión

---

## Regla reforzada esta sesión

**No inventar en presentaciones de cliente** — Si un responsable, fecha o acción no proviene de los archivos fuente declarados para esa sesión o de la conversación activa, se marca `[FALTA INFORMACIÓN]` y se pregunta. No se infiere del CLAUDE.md ni del histórico.

Guardada en memoria: `memory/feedback_no_inventar_presentaciones.md`

---

## Estado de dependencias externas

| Qué | Bloqueado por | Fecha límite |
|-----|--------------|--------------|
| Pub 5 — AMA | Canal Foro AMA operativo + sesión agendada | Antes del 13 jun |
| Pub 8 — Reservas 1:1 | Microsoft Bookings activo con enlace público | Antes del 20 jun |
| Manual de marca Occident | Guillermo entrega brand book | [PENDIENTE — confirmar fecha] |
| Acceso a Teams GCO | Catalana Occidente crea el equipo y da permisos | [PENDIENTE] |

---

## Decisiones tomadas

- El archivo `presentacion-semana1_01jun2026.html` es el único que se crea — `presentacion-gco.html` queda intacto como plantilla base
- Los 3 vídeos se presentan como prueba de concepto (guiones), no como vídeos terminados
- La sesión AMA no tiene fecha confirmada — se presenta como paso por confirmar, no como bloqueante con etiqueta

---

## Próximas tareas pendientes

- [ ] Presentar la prueba de concepto de los 3 vídeos en la reunión GCO (1 jun)
- [ ] Confirmar acceso a Teams de GCO (desbloquea publicación de contenidos)
- [ ] Confirmar fecha sesión AMA con Nibaldo y Guillermo (desbloquea Pub 5)
- [ ] Activar Microsoft Bookings (desbloquea Pub 8)
- [ ] Recibir manual de marca de Occident — Guillermo (desbloquea producción de piezas gráficas finales)
- [ ] Producir las 8 piezas gráficas (6 listas para producir, 2 en espera)
- [ ] Limpiar archivo temporal `Exportar/_logo_block.txt` si aún existe

---

## Archivos clave del momento

| Archivo | Para qué |
|---------|---------|
| `Exportar/presentacion-semana1_01jun2026.html` | Presentación del 1 de junio — llevar a reunión GCO |
| `Exportar/presentacion-gco.html` | Plantilla base original — NO tocar |
| `Produccion/semana-0_25-29may/graficas/plan-contenidos-graficos.md` | 8 publicaciones con texto + brief (fuente de verdad del plan editorial) |
| `Produccion/semana-0_25-29may/videos/v0[1-3]*/` | 3 guiones de vídeo completos (prueba de concepto para la reunión) |
| `Planeacion/Semana-0_planeacion-del-proyecto/` | Estructura del calendario y checklist (no modificar) |
