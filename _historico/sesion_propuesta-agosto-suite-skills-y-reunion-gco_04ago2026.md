# Resumen de sesión — Propuesta de agosto (Skills → DevSuit/MCP/Agentes) y reunión de seguimiento GCO · 4 agosto 2026
> Continúa desde: `sesion_renumeracion-pub10-11-12-dia-nn-y-push_30jul2026.md`

## Qué se completó en esta sesión

- Formato de `Produccion/semana-7_03-agos/propuesta-de-contenidos.md` — preguntas de Pub 12 organizadas en secciones, sin inventar datos.
- Reorganización de `Produccion/semana-7_03-agos/resumen-de-reunion_03-08-26_raona-interno.md`: se separó el resumen real de la reunión con Esteban Serrano (3 ago) del material de referencia sobre Skills que había quedado pegado por error en el mismo archivo.
- Nuevo archivo `Produccion/semana-7_03-agos/material-base_skills-que-son-y-cuando-usarlas.md` — documento completo sobre Skills (15 secciones) enviado por Esteban, reformateado en Markdown limpio (tablas reales, bloques de código para los ejemplos de `SKILL.md`).
- Nuevo documento `Produccion/semana-7_03-agos/plan-agosto_propuesta-contenidos-skills-y-booking.md` — propuesta inicial de 4 publicaciones (Pub 12–15) sobre Skills + propuesta de flujo de booking en 3 etapas. Expandido después a **7 publicaciones** (Pub 12–18, Bloques 1–4) usando más secciones del material ya recibido, sin depender de nuevo insumo de Esteban.
- Presentación HTML `Presentaciones/presentacion-propuesta-agosto_03ago2026.html` — creada copiando el template obligatorio de `presentacion-semana1_01jun2026.html` (mismo CSS/fuentes/favicon embebidos, solo cambia el contenido). Actualizada en paralelo con el plan en cada iteración (4 → 7 publicaciones).
- Corrección aplicada: se retiraron los nombres de responsables de la presentación HTML — las tareas quedaron en infinitivo, sin comprometer a nadie. Solo quedan menciones históricas (quién asistió a la reunión del 3 ago).
- Corrección aplicada: "Microsoft Bookings" dejó de asumirse como herramienta confirmada en la Etapa 1 del flujo de booking — se generalizó a "software de agendamiento, por definir" (tanto en el plan como en el HTML), porque en la reunión del 3 ago Yehimy le pidió sugerencias de herramientas a Esteban y la elección quedó abierta.
- Reorganización de `Produccion/TABLERO.md` (líneas 2–8, bitácora de actualizaciones) — de párrafos densos de una sola línea a blockquote con fecha en negrita y viñetas por punto.
- Decisión de arquitectura: la carpeta `Reuniones/seguimientos-semanales/` (ya existente, hasta ahora subutilizada) se confirma como el lugar para la transcripción + el resumen de cada reunión de seguimiento semanal (martes) — se descartó crear una carpeta nueva duplicada (se evaluaron `Seguimiento/reuniones-de-seguimiento/` y otras opciones).
- Formateados en Markdown, conservando el contenido tal cual: `transcripcion_reunion-semanal-GCO-y-raona-04-08-26.md` (transcripción íntegra con speaker + timestamp, sin corregir imprecisiones del reconocimiento de voz) y `resumen_reunion-semanal-GCO-y-raona-04-08-26.md` (notas por tema + resumen por persona + informe ejecutivo), ambos de la reunión de seguimiento del 4 de agosto con Nibaldo, Jonatan y Óscar (GCO).
- Nuevo documento `Planeacion/pregunta-equipo-nibaldo_contenido-suite-skills-mcp-agentes.md` — a partir de lo dicho por Nibaldo en esa reunión (minuto 4:23 de la transcripción), se propuso un **nuevo orden de temas para agosto: DevSuit → Skills → MCP → Agentes**, que reemplaza el enfoque "solo Skills" del plan anterior. Incluye 12 preguntas específicas (3 por tema) para pedirle insumos reales al equipo de Nibaldo antes de armar el cronograma definitivo.
- Revisión del mensaje que Yehimy redactó para publicar esas preguntas en el canal interno de Raona: se señalaron 2 ajustes (una referencia faltante al material de Esteban en la sección de Skills, un salto de línea raro en el saludo) y se propuso un cierre agradecido y sin fecha límite impuesta.
- Corrección de nomenclatura: "Dev Suite"/"Suite" se corrigió a **"DevSuit"** en todos los documentos de la sesión — Nibaldo escribió el nombre así, tal cual, en el chat de Teams de la misma reunión (captura verificada por Yehimy). Se corrigió en `pregunta-equipo-nibaldo_contenido-suite-skills-mcp-agentes.md`, `resumen_reunion-semanal-GCO-y-raona-04-08-26.md`, `ESTADO.md`, `README.md` y este archivo. La transcripción original no se tocó (queda "Suite"/"Switch", que es lo que capturó el reconocimiento de voz) — se le agregó solo una nota aclaratoria. "Copilot Dev Suite" (nombre del Video 04) tampoco se tocó, porque sigue sin confirmarse si es lo mismo que "DevSuit".

## Estado de dependencias externas

| Dependencia | Responsable | Estado |
|-------------|-------------|--------|
| Respuesta a `Planeacion/pregunta-equipo-nibaldo_contenido-suite-skills-mcp-agentes.md` (12 preguntas: DevSuit, Skills, MCP, Agentes) | Equipo de Nibaldo | Pendiente — sin plazo fijado (`[Confirmar con Yehimy]`). Bloquea el cronograma real de agosto. |
| Confirmar si "la DevSuit" de Nibaldo es la misma "Copilot Dev Suite" del guion del Video 04 | Nibaldo/equipo | Pendiente |
| Nombre de la herramienta de booking (antes se asumía Microsoft Bookings, ahora abierto) | Esteban | Pendiente |
| Responsable sustituto de Raúl (Pasiona) durante sus vacaciones | Nibaldo → Francesc | Pendiente |
| Imágenes rotas en el post del "primer paso" (reportado por Jonatan, 4 ago) | Yehimy | Pendiente de revisar |

**Importante:** el plan de 7 publicaciones (`plan-agosto_propuesta-contenidos-skills-y-booking.md`, Pub 12–18) y su presentación HTML quedaron **desactualizados** por la reunión del 4 ago — el enfoque "solo Skills" fue reemplazado por "DevSuit → Skills → MCP → Agentes". Decisión explícita de esta sesión: no reescribirlos todavía, esperar primero la respuesta del equipo de Nibaldo.

## Decisiones tomadas

- El cronograma real de publicaciones de agosto (fechas, formatos, piezas gráficas) se construye **después** de recibir las respuestas del equipo de Nibaldo a las preguntas de DevSuit/Skills/MCP/Agentes — no antes.
- Orden de temas propuesto para agosto, según lo planteado por Nibaldo: DevSuit → Skills → MCP → Agentes (de lo más general a lo más específico).
- Canal propuesto para la serie de contenidos: Anuncios y Tips Ágiles en vez de Primeros Pasos (Skills es contenido de Fase 4, no de ruta básica) — pendiente de validar con Nibaldo/Jonatan.
- No se asume ningún software específico de booking hasta que Esteban confirme el nombre.
- Nomenclatura confirmada: el nombre correcto es **"DevSuit"** (una palabra, tal como lo escribió Nibaldo por chat) — no "Suite" ni "Dev Suite". Sigue pendiente confirmar si es lo mismo que "Copilot Dev Suite" (nombre usado en el guion del Video 04).
- Transcripciones y resúmenes de las reuniones de seguimiento semanal (martes) se consolidan en `Reuniones/seguimientos-semanales/`, un archivo de transcripción + un archivo de resumen por semana.

## Próximas tareas pendientes

1. Yehimy: publicar el mensaje revisado (con los 2 ajustes señalados) en el canal interno de Raona con las preguntas de `pregunta-equipo-nibaldo_contenido-suite-skills-mcp-agentes.md`.
2. Equipo de Nibaldo: responder las 12 preguntas (DevSuit, Skills, MCP, Agentes).
3. Una vez lleguen las respuestas: reescribir `plan-agosto_propuesta-contenidos-skills-y-booking.md` y `Presentaciones/presentacion-propuesta-agosto_03ago2026.html` con el nuevo orden de temas.
4. Confirmar con Esteban el nombre de la herramienta de booking.
5. Nibaldo: confirmar con Francesc quién sustituye a Raúl durante sus vacaciones.
6. Yehimy: revisar y corregir las imágenes rotas del "primer paso" reportadas por Jonatan.

## Archivos clave del momento

- `Reuniones/seguimientos-semanales/transcripcion_reunion-semanal-GCO-y-raona-04-08-26.md` y su resumen — fuente del replanteamiento de agosto.
- `Planeacion/pregunta-equipo-nibaldo_contenido-suite-skills-mcp-agentes.md` — preguntas pendientes de respuesta, bloquea el siguiente paso.
- `Produccion/semana-7_03-agos/plan-agosto_propuesta-contenidos-skills-y-booking.md` — plan de 7 publicaciones, desactualizado, pendiente de reescribir.
- `Presentaciones/presentacion-propuesta-agosto_03ago2026.html` — presentación asociada, también pendiente de actualizar.
- `Produccion/semana-7_03-agos/material-base_skills-que-son-y-cuando-usarlas.md` — material de base sobre Skills (Esteban), sigue vigente como fuente para producir contenido.
