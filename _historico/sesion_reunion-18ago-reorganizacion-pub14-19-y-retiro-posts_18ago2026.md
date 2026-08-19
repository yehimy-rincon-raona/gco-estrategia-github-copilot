# Resumen de sesión — Reunión del 18 ago, ampliación Pub 14-19, intercambio de contenido y retiro de posts auto-publicados · 18 agosto 2026
> Continúa desde: `sesion_reorganizacion-agosto-y-verificacion-teams_14ago2026.md`

## Qué se completó en esta sesión

### 1. Lectura y formateo de la reunión del 18 ago
`Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md` reescrito completo (era un resumen automático con párrafos corridos, sin estructura). Asistentes: Jonatan Hospital Adriao y Óscar Segura Herrera. Puntos clave:
- Orden temático validado: Dev Suite (Pub 12) → Skills (Pub 13-15) → MCP (Pub 16-17) → Agentes (Pub 18-19).
- MCP y Agentes pasan de 1 publicación cada uno a **2 publicaciones cada uno**.
- Se reconfirman los **5 conectores MCP** (Jira, Confluence, Elastic, DB2, navegador) — resuelve la discrepancia que arrastraba el guion del Video 04.
- Óscar señala que el post ya publicado "Memoria vs. Instrucciones" (ahora Pub 20) no distingue bien Copilot Memory (individual) de Copilot Instructions (de equipo) — pendiente de aclarar con Nibaldo a su regreso, posible repost anidado.
- Sugerencias: video de instalación + 1 ejemplo por componente; enlazar a Confluence para pasos de instalación en vez de embeberlos en los posts.

### 2. Ampliación de la serie: Pub 12-16 pasa a Pub 12-19
Por el cambio de 1→2 publicaciones en MCP y Agentes, la serie crece de 5 a 8 publicaciones. Consecuencia directa: **Pub 17 ("Memoria vs. Instrucciones") se renumera a Pub 20** (queda como excepción documentada de renumeración, mismo mecanismo ya usado el 30 jul).
Carpetas nuevas creadas:
- `Produccion/semana-8_fechas-pendiente(pub-14-15)/pub-14_mar-sem8-pendiente/` y `pub-15_jue-sem8-pendiente/` — Pub 14 y 15 pasan a la misma semana de producción (antes estaban en semanas distintas).
- `Produccion/semana-9_fechas-pendiente(pub-16-17)/` — Pub 16 ("Las llaves de los sistemas: los 5 conectores MCP") y Pub 17 ("De cinco pestañas a una frase: MCP en acción").
- `Produccion/semana-10_fechas-pendiente(pub-18-19)/` — Pub 18 ("Los 3 agentes que deciden, ejecutan y validan por ti") y Pub 19 ("Añadir un campo: los 3 agentes en acción", cierra la serie 12-19).

### 3. Intercambio de contenido Pub 14 ↔ Pub 15 (decisión de Yehimy, por sentido narrativo)
Yehimy señaló que, siguiendo el patrón ya establecido en el proyecto (general antes que específico, como Pub 12 antes de cada zoom), el mapa completo de los 5 niveles de personalización debía ir **antes** que la anatomía de una Skill, no después. Se ejecutó el intercambio:
- **Pub 14** = ahora "El mapa de los 5 niveles de personalización" (antes era la anatomía). Brief listo, infografía sin producir todavía.
- **Pub 15** = ahora "Anatomía y cuándo usar una Skill" (antes era el mapa). Sus **3 tarjetas ya estaban producidas y corregidas** (cápsula, numeración 1/3-2/3-3/3, ejemplo `dotnet-review`) — se movieron y renombraron de `14-S8-*` a `15-S8-*`.
- Revisadas y corregidas 3 piezas gráficas de Pub 15 antes del intercambio: cápsula incorrecta (`Tips y Anuncios | Skills` → `Fase 3 | Multi-entorno`), colisión de numeración (`SKILLS 2/2` duplicado entre 2 piezas → `1/3-2/3-3/3`), ejemplo inconsistente entre tarjetas (unificado a `dotnet-review`).

### 4. Retiro de posts auto-publicados en Teams GCO
En la reunión del 18 ago se decidió **retirar de Teams GCO** los posts que se habían publicado solos pese al congelamiento (programación automática que siguió corriendo). Evidencia en `Produccion/elimina-post-teams-gco/`. Afecta a Pub 3, 4 (al menos una tarjeta), 5, 6, 7, 8 y 20. **La cadencia semanal (martes/jueves) se retoma la semana del 14-18 de septiembre**, republicando en el mismo orden de la cola, sin saltar ni repetir nada.

### 5. Simplificación del `Produccion/TABLERO.md`
Yehimy señaló que el tablero estaba "muy denso y confuso". Se reestructuró con:
- Resumen de 4 líneas al inicio ("Estado actual").
- Cronograma maestro con 3 tablas: publicadas que se quedan (Pub 1-2), cola de republicación con fechas estimadas desde el 15 sep (Pub 3-13, 20), y "en producción sin fecha" (Pub 14-19).
- Todo el historial denso (notas fechadas antiguas, tablas viejas, comentarios de Jonatan) movido a una sección de archivo más abajo, sin borrar nada.
- Corrección posterior: se agregó la tabla de "ya publicadas, sin cambios" que faltaba (Pub 1-2).

### 6. Barrido de consistencia en todo el proyecto
Tras el intercambio Pub 14↔15 y la reorganización, se revisaron y corrigieron referencias cruzadas en: presentación HTML (`presentacion-propuesta-agosto-devsuite_10ago2026.html` — cronograma, ecards, badge "✅ Producida" con `--mint`), `plan-agosto_devsuite-skills-mcp-agentes.md`, Pub 13 (corregidas 2 frases que describían mal el nuevo orden Pub 14/15), `matriz-componentes-graficos.csv` (nuevo ejemplo Pub 15), `Seguimiento/base-reunion-seguimiento.md` (reescrito completo, estaba desactualizado desde el 30 jul), `Planeacion/calendario-republicacion_teams-de-gco.md` (marcado como superado, corregidas menciones a Pub 20). Documentos ya obsoletos (`plan-agosto_propuesta-contenidos-skills-y-booking.md`, `guion-apoyo_cifras-presentacion-devsuite.md`) marcados como superados sin reescribirlos, preservando su contenido histórico.

## Estado de dependencias externas

- ⏳ Cadencia semanal de Teams GCO se retoma la **semana del 14-18 de septiembre 2026**.
- 📨 Pendiente confirmar con Nibaldo si `dotnet-review`/`cobol-analyzer` son parte real de las 32 skills — bloquea el cierre final de **Pub 15** (antes bloqueaba Pub 14).
- 📨 Pendiente aclarar con Nibaldo, a su regreso de vacaciones, la confusión Copilot Memory vs. Instructions (Pub 20) — posible repost anidado.
- 🔄 Yehimy está produciendo ahora mismo la infografía de Pub 14 (el mapa de los 5 niveles).
- 🔄 Falta producir: infografías/tarjetas de Pub 16, 17, 18, 19.

## Decisiones tomadas

- **La serie Dev Suite crece de Pub 12-16 a Pub 12-19** (MCP y Agentes pasan de 1 a 2 publicaciones cada uno) — Pub 17 ("Memoria vs. Instrucciones") se renumera a **Pub 20**, misma excepción de renumeración documentada el 30 jul (contenido no producido cede su número a contenido ya producido/en cola).
- **Intercambio de contenido Pub 14 ↔ Pub 15**: el mapa de los 5 niveles va primero (panorámico), la anatomía real después (zoom) — sigue el patrón general-antes-que-específico ya usado en Pub 12.
- **Se confirman los 5 conectores MCP** (Jira, Confluence, Elastic, DB2, navegador) como cifra definitiva, validada en la reunión del 18 ago.
- **Se retiran de Teams GCO los posts auto-publicados** durante el congelamiento; se retoma la cadencia el 14-18 sep, republicando en el mismo orden, sin saltos ni repeticiones.
- **TABLERO.md se reestructura** con un resumen simple arriba y el historial denso relegado a una sección de archivo — patrón a mantener en adelante, no revertir a una estructura monolítica.

## Próximas tareas pendientes

1. Yehimy produce la infografía de Pub 14 (mapa de los 5 niveles) — en curso.
2. Producir piezas gráficas de Pub 16, 17, 18 y 19 (MCP y Agentes).
3. Confirmar con Nibaldo `dotnet-review`/`cobol-analyzer` como parte de las 32 skills reales (bloquea cierre de Pub 15).
4. Aclarar con Nibaldo la confusión Copilot Memory vs. Instructions (ver corrección más abajo: ya no es Pub 20, es hilo de Pub 4) a su regreso de vacaciones.
5. Preparar la republicación en Teams GCO para la semana del 14-18 de septiembre, en el orden de la cola vigente (ver `Produccion/TABLERO.md`).
6. Seguir sin resolver: fecha del AMA, Microsoft Bookings para Reservas 1:1.

## Corrección posterior, misma sesión: "Memoria vs. Instrucciones" no es una Pub

Después de cerrar el punto 2 (donde el "Pub 17"/"Pub 20" quedó documentado como una renumeración más), Yehimy señaló que ese contenido **nunca fue una publicación propia**: es un ajuste/aclaración que vive como respuesta 4 del hilo de Pub 4 (`post-memoria-vs-instrucciones_mar-28jul.md`) — igual que el Video 04 es un hilo de Pub 2, no una publicación con número propio. El número que se le había asignado por error (Pub 17 el 10-11 ago, luego Pub 20 el 18 ago) queda revertido. **La serie Dev Suite cierra en Pub 19, sin Pub 20.** Corregido en: `Produccion/TABLERO.md`, `plan-agosto_devsuite-skills-mcp-agentes.md`, la presentación HTML, `Planeacion/calendario-republicacion_teams-de-gco.md`, `Seguimiento/base-reunion-seguimiento.md` y `_historico/ESTADO.md`.

## Archivos clave del momento

- `Produccion/TABLERO.md` — cronograma maestro simplificado, fuente de verdad para el orden de republicación.
- `Planeacion/Semana-7_plan-agosto-devsuite/plan-agosto_devsuite-skills-mcp-agentes.md` — plan vigente, ahora Pub 12-19.
- `Seguimiento/base-reunion-seguimiento.md` — reescrito, documento vivo para preparar la próxima reunión.
- `Produccion/semana-8_fechas-pendiente(pub-14-15)/` — Pub 14 (mapa, en producción) y Pub 15 (anatomía, ya producida y corregida).
- `Produccion/semana-9_fechas-pendiente(pub-16-17)/` y `Produccion/semana-10_fechas-pendiente(pub-18-19)/` — MCP y Agentes, briefs listos.
- `Produccion/elimina-post-teams-gco/` — evidencia de los posts retirados de Teams GCO.
- `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md` — acta reformateada de la reunión del 18 ago.
- `Presentaciones/presentacion-propuesta-agosto-devsuite_10ago2026.html` — actualizada con la serie Pub 12-19 y el intercambio 14/15.
