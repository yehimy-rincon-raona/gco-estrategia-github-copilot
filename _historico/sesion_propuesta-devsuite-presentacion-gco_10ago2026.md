# Resumen de sesión — Propuesta Dev Suite y presentación para GCO · 10 agosto 2026
> Continúa desde: `sesion_propuesta-agosto-suite-skills-y-reunion-gco_04ago2026.md`

## Qué se completó en esta sesión

- **Primera respuesta real del equipo de Nibaldo, leída y analizada:** `Produccion/semana-7_03-agos/información-equipo-raona-gco-devsuite.md` — confirma nombre y arquitectura de la herramienta (3 agentes, 32 skills, 5 MCPs), los 3 problemas que resuelve, 2 ejemplos de uso y 5 decisiones de diseño. Responde varias de las 12 preguntas enviadas el 30 jul / 4 ago.
- **Plan de agosto reescrito** en `Produccion/semana-7_03-agos/plan-agosto_devsuite-skills-mcp-agentes.md` — reemplaza el plan "solo Skills" del 3-4 ago. Detecta que los slots libres originales (mar 4 · jue 6 ago) ya pasaron sin publicarse, y propone la secuencia real disponible: **Pub 12–16** (DevSuit → Skills → MCP → Agentes, 11/13/20/25/27 ago).
- **Presentación HTML construida y afinada en muchas iteraciones:** `Presentaciones/presentacion-propuesta-agosto-devsuite_10ago2026.html` (mismo template obligatorio del proyecto). Cambios principales, en orden:
  - Título y secciones reescritos para quitar toda narrativa interna (fechas de reuniones, "6 de 12 preguntas resueltas", nombres de personas en titulares) — la audiencia es GCO, que debe validar el plan, no conocer el proceso interno de cómo se llegó a él.
  - Corregida una corrupción de un buscar-y-reemplazar hecho fuera de esta conversación ("devsuit" → "Dev Suite" rompió un id de pestaña y una referencia a archivo real).
  - Reordenadas las 4 cifras del hero para seguir el mismo orden temático del resto de la página (Skills → MCP → Agentes → publicaciones propuestas).
  - Añadida una fila visible en el cronograma para el 18 de agosto (ya ocupado por Pub 4) en vez de omitir esa fecha en silencio — evita que se vea como un error.
  - **Pub 17 creada:** "Memoria vs. Instrucciones" salió del 18 ago (el canal ya tenía a Pub 4 ese día) y se reprogramó con número propio — nunca lo había tenido — al **martes 8 de septiembre** (primer martes libre en Anuncios y Tips Ágiles tras la serie).
  - Comentadas (no borradas) todas las referencias a nombres de archivo internos (`información-equipo-raona-gco-devsuite.md`, `material-base_skills...md`) — quedan en el código, no se ven en la página.
  - Quitados dos puntos de la sección "Puntos por confirmar" a pedido de Yehimy: si "Dev Suite" es la misma "Copilot Dev Suite" del Video 04, y la discrepancia de MCPs (5 vs. 4) — pasó de 7 a 5 puntos.
  - La tarjeta de "Siguientes pasos" sobre esos dos puntos se reemplazó por una sobre **Reservas 1:1**, con el contenido real acordado en la reunión del 4 de agosto (equipo completo: Yehimy, Nibaldo, Jonatan, Óscar) — proceso manual por Outlook, sin herramienta automatizada, asignación de Nibaldo y Raúl, respuesta en máximo una semana.
- **Guion de apoyo creado** en `Produccion/semana-7_03-agos/guion-apoyo_cifras-presentacion-devsuite.md` — notas de ampliación para Yehimy, organizadas en el mismo orden que la presentación (hero → secciones 01, 03, 04, 05, 06), todas redactadas para poder leerse en voz alta frente a GCO sin exponer proceso interno.
- **Calendario real actualizado:** `Planeacion/calendario-republicacion_teams-de-gco.md` — nueva "Semana 9" (Pub 17, 8 sep), nota de reasignación de Pub 12 a la serie Dev Suite, "Memoria vs. Instrucciones" removida de "Sin fecha asignada" (ya tiene fecha).
- **Tablero actualizado:** `Produccion/TABLERO.md` — fila de Pub 12 con nota de reasignación, fila nueva para Pub 17.

## Estado de dependencias externas

- ⏳ **Bloqueante inmediato:** validación de GCO en la reunión del **11 de agosto** — orden y fechas de Pub 12–16, fecha de Pub 17, y los 5 puntos de gobernanza que siguen sin definir (proceso para proponer Skill/MCP/agente nuevo, qué pasa si se instala un MCP sin aprobación, si hay alguna Skill propia mostrable).
- 📨 Sigue pendiente la respuesta completa a las 12 preguntas originales — el documento recibido resolvió varias, pero no el proceso de gobernanza de MCP/Skills/Agentes.
- 📅 Nibaldo debe preguntarle a Francesc quién sustituye a Raúl durante sus vacaciones (tarea de la reunión del 4 ago, sigue abierta).
- 🔧 Yehimy: diseñar el flujo lógico de Reservas 1:1 durante agosto, para lanzarlo en septiembre (acordado en la reunión del 4 ago).

## Decisiones tomadas

- **La presentación para GCO debe ser impersonal e institucional, sin narrativa de proceso interno** — decisión de Yehimy tras ver que el borrador original (heredado de la propuesta del 3 ago) contaba "cómo llegamos aquí" en vez de presentar el plan para validar. Aplica a título, encabezados de sección y cualquier "quién dijo qué en qué reunión".
- **"Dev Suite" vs. "Copilot Dev Suite" y la discrepancia de MCPs (5 vs. 4) no se plantean a GCO en esta presentación** — decisión de Yehimy, quitados de "Puntos por confirmar" y de "Siguientes pasos".
- **"Memoria vs. Instrucciones" toma número propio: Pub 17**, reprogramada al 8 de septiembre — mismo criterio de numeración que la excepción documentada el 30 jul (CLAUDE.md).
- **El contenido de Reservas 1:1 se corrige con la información real de la reunión del 4 de agosto** — se abandona la suposición de una herramienta tipo Microsoft Bookings; Jonatan propuso gestión manual por Outlook.

## Próximas tareas pendientes

- Presentar y validar con GCO el 11 de agosto: secuencia Pub 12–16, fecha de Pub 17, y los 5 puntos de gobernanza abiertos.
- Si se aprueba, producir la pieza gráfica de Pub 12 de inmediato (infografía de las 3 piezas + números de la Dev Suite).
- Decidir en la reunión si el desglose de las 9 áreas de las 32 skills va dentro de Pub 14 o en un post propio más adelante (punto dejado abierto a propósito, ver guion de apoyo).
- Confirmar con Nibaldo si `dotnet-review`/`cobol-analyzer` (ejemplos del material de Esteban) son parte de las 32 skills reales de la suite, antes de publicar Pub 14.
- Seguimiento a Nibaldo/Francesc sobre el sustituto de Raúl en vacaciones.

## Archivos clave del momento

- `Produccion/semana-7_03-agos/plan-agosto_devsuite-skills-mcp-agentes.md` — plan de contenidos completo.
- `Presentaciones/presentacion-propuesta-agosto-devsuite_10ago2026.html` — presentación para la reunión del 11 ago.
- `Produccion/semana-7_03-agos/guion-apoyo_cifras-presentacion-devsuite.md` — notas de apoyo de Yehimy para la misma reunión.
- `Produccion/semana-7_03-agos/información-equipo-raona-gco-devsuite.md` — fuente de todos los datos de la Dev Suite.
- `Planeacion/calendario-republicacion_teams-de-gco.md` y `Produccion/TABLERO.md` — calendario y tablero ya actualizados con Pub 12 y Pub 17.
