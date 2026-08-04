# Resumen de sesión — Renumeración Pub 10/11/12, sistema dia-NN, estructura semana-6 y push · 30 julio 2026
> Continúa desde: `sesion_posts-video05-06-y-corrimiento-calendario_30jul2026.md`

## Qué se completó en esta sesión

### 1. Corrección: Pub 6 y Pub 7 NO se publicaron fuera de tiempo
Yehimy mostró capturas de Teams GCO donde Pub 6 y Pub 7 aparecían con fecha 4 y 6 de agosto (fechas viejas del sufijo de carpeta). Tras confirmar con ella que **ninguna se había enviado todavía** (seguían editables), se corrigieron a sus fechas naturales del congelamiento: **martes 25 y jueves 27 de agosto** — sin corrimiento adicional. El primer diagnóstico ("ya se publicaron, no se pueden revertir") fue un error de interpretación mío, corregido antes de tocar ningún documento de forma irreversible.

### 2. Colisión de numeración: "Pub N" vs. "repub-NN" → renombrado a "dia-NN"
Yehimy detectó que el folder de Pub 9 traía el sufijo `repub-10`, y que eso chocaba visualmente con el nuevo "Pub 10" (Video 05). Se confirmó que son dos sistemas distintos (número de contenido vs. día de republicación) y, a pedido de Yehimy, se renombró el sistema completo:
- Las 10 carpetas `_(repub-NN_...)` pasaron a `_(dia-NN_...)` (`git mv`).
- Se corrigió un efecto colateral: la descripción genérica del patrón usaba "dia" también como placeholder del día de la semana — se cambió ese placeholder a "dow" para no duplicar el término.
- Se actualizaron todas las menciones y enlaces en documentos vivos (TABLERO, calendario, ESTADO, base de reunión, README de semana-2, catálogo de formatos, comparativo de plan, propuesta de Nibaldo). Los archivos de `_historico/` y las minutas fechadas de `Seguimiento/` se dejaron intactos (registro histórico, no se reescribe).

### 3. Descubrimiento: las carpetas de semana ya no coincidían con los documentos
Al revisar el sistema de archivos apareció que Yehimy había renombrado las carpetas `semana-N_fechas/` agregando un sufijo `(pub-XX-YY)` — **por fuera de Git**, mientras se trabajaba en esta conversación. Se confirmó con ella que el cambio era intencional y se registró en Git (`git add`), detectado como 85 archivos renombrados, sin pérdida de contenido. Más adelante en la sesión, Yehimy volvió a ajustar esos mismos sufijos (`semana-2(pub-03-04-05-06)`→`(pub-03-04-05)`, `semana-4(pub-07-08)`→`(pub-06-07)`, `semana-5(pub-09-10)`→`(pub-08-09)`) para que reflejaran correctamente qué Pub vive en cada carpeta — se detectó y sincronizó antes de comitear.

### 4. Renumeración: Video 05/06 = Pub 10/11 (no Pub 11/12)
Yehimy pidió que Video 05 y Video 06 (contenido ya producido) tomaran los números más bajos disponibles, y que Skills + instructions (Pub 10 original, sin producir) cediera su número. Como esto contradice la regla vigente en `CLAUDE.md` ("un número desplazado nunca se reasigna"), se confirmó explícitamente con ella antes de aplicarlo. Resultado:
- **Video 05 = Pub 10**, **Video 06 = Pub 11**, **Skills + instructions = Pub 12** (antes Pub 10).
- Se documentó la excepción a la regla de numeración en `CLAUDE.md` ("Regla de numeración"): un número bloqueado puede cederse a contenido nuevo ya producido si el bloqueado no está producido todavía.
- Orden final en la cola de Casos de Uso Reales: Pub 6 (25 ago) → Pub 7 (27 ago) → Pub 10/Video 05 (1 sep, en paralelo con Pub 8) → Pub 11/Video 06 (3 sep, en paralelo con Pub 9).

### 5. Estructura `semana-6` creada para Pub 10 y Pub 11
Siguiendo el mismo patrón de las semanas anteriores, se creó `Produccion/semana-6_27-31jul(pub-10-11)/` con las subcarpetas `pub-10_mar-01sep/` y `pub-11_jue-03sep/`, y se movieron ahí (`git mv`) los posts de Video 05 y Video 06 — renombrados a `canal-casos-de-uso_pub10-video05.md` y `canal-casos-de-uso_pub11-video06.md`. El guion original y las preguntas para Nibaldo se quedaron en `Produccion/Videos/v05-06_casos-de-uso/` (son insumo, no el post). Se corrigieron las autorreferencias internas de ambos posts a su guion y al documento de preguntas.

### 6. Documento nuevo: pregunta al equipo de Nibaldo por Pub 12 (Skills + instructions)
`Planeacion/pregunta-equipo-nibaldo_contenido-pub12-skills.md` — Pub 12 es la única publicación de la cola sin ningún insumo (ni guion, ni caso, ni ejemplo). El documento pide 5 cosas concretas al equipo de Nibaldo (qué Skill mostrar, si el enfoque es Skills+instructions o solo Skills, caso de uso real, demo existente, confirmación de canal). **Plazo: lunes 3 de agosto**, para la reunión del **martes 4 de agosto**.

### 7. Commit y push a GitHub
Se comiteó todo el trabajo pendiente (63 archivos: renombrados, movidos, creados) en un solo commit y se subió a `origin/main`:
- `2294b1d` — "Renombra sistema repub- a dia-, crea semana-6 para Pub 10/11 y corrige numeracion"
- Repo queda sincronizado, working tree limpio.

## Estado de dependencias externas

| Dependencia | Responsable | Estado |
|-------------|-------------|--------|
| Respuesta a `pregunta-equipo-nibaldo_contenido-pub12-skills.md` | Nibaldo + equipo | Pendiente — plazo lunes 3 ago |
| Cifras de tiempo para las tarjetas de Pub 10/11 | Nibaldo + equipo | Pendiente — ver `preguntas-equipo-nibaldo_contenido-grafico.md` |
| Edición/postproducción Video 05 y Video 06 | — | Pendiente — bloquea adjuntar el video final a los posts ya movidos a semana-6 |
| Revisión de coherencia Videos 05/06 | Nibaldo | Pendiente |

## Decisiones tomadas
- Pub 6/Pub 7 confirmadas como NO publicadas fuera de tiempo — quedan en 25/27 ago.
- Sistema `repub-NN` renombrado a `dia-NN` en todo el proyecto (carpetas + documentos).
- Video 05 = Pub 10, Video 06 = Pub 11, Skills+instructions = Pub 12 — excepción a la regla de numeración documentada en `CLAUDE.md`.
- Estructura de carpeta `semana-6_27-31jul(pub-10-11)/pub-10.../` y `pub-11.../` creada, con los posts movidos ahí.
- Se solicita a Nibaldo/equipo el insumo de Pub 12 con plazo lunes 3 ago.
- Se comiteó y subió todo a `origin/main` (commit `2294b1d`).

## Próximas tareas pendientes
1. Nibaldo/equipo: responder `pregunta-equipo-nibaldo_contenido-pub12-skills.md` antes del lunes 3 ago.
2. Nibaldo/equipo: responder `preguntas-equipo-nibaldo_contenido-grafico.md` (cifras para Pub 10/11).
3. Cerrar edición/postproducción de Videos 05 y 06 para adjuntar el enlace final a sus posts.
4. Yehimy: confirmar o ajustar la numeración temática "Caso de uso #3/#4" de los posts de Pub 10/11 (sigue marcada como propuesta).
5. Producir en Figma las tarjetas gráficas de Pub 10 y Pub 11 una vez lleguen las cifras de Nibaldo.
6. Reunión martes 4 de agosto: revisar si llegó respuesta sobre Pub 12.

## Archivos clave del momento
- `Produccion/TABLERO.md` — estado de producción, numeración Pub 1-12 actualizada
- `Planeacion/calendario-republicacion_teams-de-gco.md` — calendario operativo con fechas finales
- `Planeacion/pregunta-equipo-nibaldo_contenido-pub12-skills.md` — solicitud pendiente, plazo lunes
- `Produccion/semana-6_27-31jul(pub-10-11)/pub-10_mar-01sep/canal-casos-de-uso_pub10-video05.md`
- `Produccion/semana-6_27-31jul(pub-10-11)/pub-11_jue-03sep/canal-casos-de-uso_pub11-video06.md`
- `_historico/ESTADO.md` — punto de entrada de contexto actualizado
