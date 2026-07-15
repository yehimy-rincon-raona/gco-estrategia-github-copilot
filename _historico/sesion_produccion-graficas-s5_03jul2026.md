# Resumen de sesión — Producción gráfica Semana 5 + sincronización de documentos con las imágenes reales · 3 julio 2026
> Continúa desde: sesion_planificacion-semana5_30jun2026.md

---

## Contexto de la sesión

Cierre de la Semana 5. Yehimy diseñó las piezas gráficas de las Pub 8 y Pub 9 (con cambios respecto a lo que se había planteado en los briefs) y las dejó en las carpetas de producción. El trabajo de la sesión fue **sincronizar todos los documentos con las imágenes reales** para que el proyecto quede coherente, separar el ejemplo de Pub 8 (imagen de apoyo vs. respuesta) y crear un respuesta único de alto valor para Pub 9.

---

## Qué se completó en esta sesión

### 1. Pub 8 — dos piezas producidas y documentos sincronizados
Archivo: `Produccion/semana-5_29jun-03jul/pub-08_mar-30jun_(repub-09_mar-11-ago)/canal-anuncios-tips_pub8.md`
- **Pieza 1 — Infografía de la fórmula** (`08-S5-infografia_prompts.jpg`): las descripciones de las 5 piezas cambiaron a imperativo — Rol "Define desde qué experiencia debe responder", Contexto "Dale el código, dato o caso sobre el que trabaja", Tarea "Pide una acción concreta, con un objetivo claro", Restricciones "Indica límites, reglas y estándares que debe respetar", Formato "Dile cómo entregar la respuesta para usarla directo". El brief se actualizó a ese texto.
- **Pieza 2 — Tarjeta del ejemplo** (`08-S5-card-contexto.jpg`): es la tarjeta "El mismo encargo, dos resultados" (antes/después). Se reescribió el brief completo con los dos paneles (Prompt incompleto / Prompt con fórmula), bloques de código anotados por pieza y los bloques **Resultado + Eficiencia**.
- **Separación pedida por Yehimy:** se eliminó la sección "Ejemplo real…" que mezclaba diseño y texto. Ahora el antes/después vive en el **brief de la pieza 2** y el **Respuesta 1** quedó como pie de foto corto que complementa la tarjeta sin duplicarla.
- `prompt_pub8-formula.md`: descripciones de las 5 piezas y nombre de exportación (`08-S5-infografia_prompts.jpg`) alineados con la imagen.

### 2. Pub 9 — díptico producido y respuesta único de alto valor
Archivo: `Produccion/semana-5_29jun-03jul/pub-09_jue-02jul_(repub-10_jue-13-ago)/canal-anuncios-tips_pub9.md`
- Se produjo como **díptico de dos tarjetas horizontales** (~1920×1080), no una sola tarjeta comparativa:
  - **Tarjeta 1 — Contexto** (`9-S5-card-contexto.jpg`): orden de referencias (`#selection` → método/clase → `#file` → `@workspace`) + panel "Menos tokens, mayor enfoque" con terminal mainframe (SQLCODE -911 / SQLSTATE 40001 / DEADLOCK).
  - **Tarjeta 2 — Restricciones** (`9-S5-card-restricciones.jpg`): COBOL columnas 7–72, SQL sin LIKE/DELETE/TRUNCATE, .NET C# 12 async/await, cierre "nunca credenciales en el código".
- Brief, tablas y reparto reescritos para reflejar el díptico real.
- **Respuesta único creado** (a pedido de Yehimy — "que genere mucho valor"): "Escribe las reglas una vez, no en cada prompt" — el salto a `.github/copilot-instructions.md` con un bloque de ejemplo copiable armado con las reglas reales de GCO. Se consolidaron en este respuesta los dos respuestas anteriores (instructions.md + ejemplo .NET); el `async/await` quedó dentro del ejemplo.

### 3. Coherencia transversal
- **`Produccion/TABLERO.md`:** Pub 8 y 9 con ambas/las piezas producidas; sección "Piezas gráficas" con las 4 piezas reales y nombres correctos; resumen de avance y fecha (3 jul) al día.
- **Remapeo:** las tarjetas `1-S2` a `5-S2` (optimización de tokens) se corrigieron de "Pub 8 / 9" a **Pub 4** en el tablero (pertenecen a Pub 4, ya publicada; Pub 8/9 tratan la fórmula del prompt).
- **`Configuraciones/catalogo-de-formatos.md`:** la variante **F2-D (fórmula/componentes)** ya no está "pendiente" — su imagen de referencia oficial es ahora la infografía de Pub 8 (`08-S5-infografia_prompts.jpg`).

---

## Estado de dependencias externas

| Ítem | Responsable | Estado |
|------|-------------|--------|
| Acceso al Teams oficial de GCO (tenant Occident) | Catalana Occidente | ⛔ Bloqueante principal — se sigue publicando en Teams de Raona |
| VPN de Raona para que Yehimy entre al usuario de GCO desde Colombia | Nibaldo + sistemas | 🔄 En gestión (esperado esta semana o la próxima) · contingencia: pasar copy a Nibaldo/Víctor |
| Video caso de uso 1 (COBOL) y Video MCP | Nibaldo | 🔄 En producción con material en bruto |
| Ajustes Video 1 y Video 2 + URL canal corporativo | Nibaldo | Pendiente |
| Fecha sesión AMA · Manual de marca Occident | Guillermo | Pendiente |
| Microsoft Bookings (sesiones 1:1) | Yehimy | Sin configurar |
| Fechas de publicación Pub 8 (mar) y Pub 9 (jue) | Equipo | A confirmar en reunión |

---

## Decisiones tomadas

- **Pub 8 lleva dos piezas gráficas** con roles distintos: infografía de la fórmula (post principal) + tarjeta del ejemplo antes/después (Respuesta 1). El ejemplo dejó de ser "solo texto".
- **Pub 9 es un díptico** de dos tarjetas horizontales, no una tarjeta comparativa única.
- **Pub 9 lleva un solo respuesta** (consolidado), enfocado en `copilot-instructions.md` con ejemplo copiable de reglas reales de GCO. El antes/después de .NET se puede recuperar como segundo respuesta si se pide.
- Las descripciones de las 5 piezas de la fórmula quedan como en la imagen (imperativo), no como el borrador previo.
- Se mantiene la convención `_historico/` (no el skill `historial-sesiones`) para no fragmentar la trazabilidad.
- **No se editaron** documentos fechados/snapshot: `Seguimiento/resumen-reunion_30jun2026.md` (aún menciona nombres de tarjeta antiguos como "pendiente esta semana" — correcto para su fecha) ni los archivos de `_historico/`.

---

## Próximas tareas pendientes

- **Confirmar fechas** de publicación de Pub 8 y Pub 9 en la reunión.
- **Decisión de Yehimy (pendiente):** ¿renombrar `08-S5-card-contexto.jpg` → algo tipo `08-S5-card-ejemplo`? El nombre dice "contexto" pero el contenido es el ejemplo antes/después.
- **Decisión de Yehimy (pendiente):** corregir "Github Copilot" → "GitHub Copilot" en el cuerpo de las tarjetas (regla de marca del proyecto).
- **Opcional:** sumar un segundo respuesta a Pub 9 con el antes/después específico de .NET (está en el historial).
- **Videos:** producir Video caso 1 (COBOL) y Video MCP con el material de Nibaldo.
- **Bloqueantes:** seguir gestión de la VPN de Raona y del acceso al Teams de GCO.

---

## Archivos clave del momento

| Archivo | Para qué |
|---------|----------|
| `Produccion/semana-5_29jun-03jul/pub-08_mar-30jun_(repub-09_mar-11-ago)/canal-anuncios-tips_pub8.md` | Pub 8 — briefs de las 2 piezas + posts + respuesta, sincronizado con las imágenes |
| `Produccion/semana-5_29jun-03jul/pub-09_jue-02jul_(repub-10_jue-13-ago)/canal-anuncios-tips_pub9.md` | Pub 9 — brief del díptico + post + respuesta único de valor |
| `Produccion/TABLERO.md` | Estado al 3 jul — 4 piezas de Semana 5 producidas · remapeo 1-S2..5-S2 → Pub 4 |
| `Configuraciones/catalogo-de-formatos.md` | Variante F2-D con su imagen de referencia oficial (Pub 8) |
| Imágenes: `08-S5-infografia_prompts.jpg` · `08-S5-card-contexto.jpg` · `9-S5-card-contexto.jpg` · `9-S5-card-restricciones.jpg` | Piezas producidas de Semana 5 |
