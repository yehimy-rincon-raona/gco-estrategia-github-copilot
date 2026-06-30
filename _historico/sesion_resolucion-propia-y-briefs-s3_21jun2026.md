# Resumen de sesión — Resolución propia + briefs Semana 3 + ajuste facturación + trípticos y publicación Pub 6 · 21 junio 2026
> Continúa desde: sesion_reunion-ajustes-y-semana4_16jun2026.md

---

## Contexto de la sesión

Nibaldo no entregó ninguno de los inputs pendientes de la semana. Ante la reunión del **martes 23 de junio**, se trabajó todo lo que se podía resolver **por cuenta propia** (desde las sesiones de formación ya impartidas y búsqueda web), dejando marcado con preguntas puntuales solo lo que realmente depende de él.

**Encuadre temporal del trabajo:** el equipo va una semana atrasado. Lo trabajado ahora es **producción de Semana 3** que se **publica en Semana 4** (Pub 6 = martes 23 jun, Pub 7 = jueves 25 jun). Los briefs viven en la carpeta `semana-4_22-26jun/` con nota de producción aclarando este desfase.

---

## Qué se completó en esta sesión

### 1. Tabla de resolución propia para la reunión del 23 jun
- Creado `Seguimiento/resolucion-propia_reunion-23jun2026.md`
- Tabla de 9 ítems (ajustes + acciones pendientes de la semana) con columnas: tipo, tema, ¿resoluble por cuenta propia?, vía sugerida + opinión, y **Seguimiento (decisión del 21 jun)**
- Ítems **#4, #5 y #7 marcados ✅ HECHO** en esta sesión
- Contiene **3 preguntas puntuales redactadas para Nibaldo**:
  - Ítem #2 — qué exactamente no quiere que aparezca en el login de GCO en Vídeo 2
  - Ítem #6 — qué ajuste concreto necesita (opciones A/B/C de enfoque para Vídeo 2)
  - Ítem #5 — confirmar el lenguaje del caso de bug fixing (.NET sí/no)

### 2. Ajuste por cambio de facturación de GitHub Copilot (ítem #7)
- Investigación web documentada en `Conocimiento/facturacion-github-copilot-2026.md` (con fuentes): el modelo **0x / 1x / 3x (multiplicadores de peticiones premium) quedó legacy el 1 de junio de 2026**. Ahora se consume por **tokens contra una bolsa de GitHub AI Credits**. Planes anuales legacy conservan multiplicadores hasta vencer.
- Registrado el cambio en `Produccion/semana-2_08-12jun/pub-04_jue-11jun/ajuste-facturacion-tokens_pub4.md` (documento de cambio: qué se cambió, por qué, y punto por punto qué corregir en el post y en la card).
- **Solo la card `1-S2-Infografia_pub4` cambia de forma obligatoria** — se reformuló a lenguaje **plan-agnóstico** ("modelos ligeros / avanzados", "bolsa mensual de uso") que es durable sin importar el plan exacto de GCO. Cards 3, 4 y 5 no cambian; 2-S2 quedó como ajuste de consistencia.
- Consolidado `canal-anuncios-tips_pub4.md` para reflejar lo realmente publicado: post con "ligeros/avanzados", tabla Ligero/Avanzado, hilo reestructurado (Reply 1 = card 2-S2 con texto planificador-ejecutor, sin repetir la 1-S2; texto "cuánto consume" retirado).
- Aviso legacy añadido al inicio de `propuestas-nibaldo/prop_modelo-apropiado.md` apuntando al documento de ajuste.

### 3. Briefs desarrollados a fondo — Pub 6 y Pub 7 (Semana 3 → publican Semana 4)
- **Pub 6** — `semana-4_22-26jun/pub-06_mar-23jun/canal-casos-de-uso_pub6.md`
  Caso real COBOL: **entender código heredado antes de tocarlo**. Reformulado como **caso de uso** (escenario → objetivo → solución). Pieza gráfica = **tríptico `card-triptico`** (`S3-Card_pub6-portada` / `-problema` / `-solucion`, 1080×1080): Portada (pregunta) → Problema (tocar un campo y no saber qué rompes) → Solución (método + análisis de impacto del copybook). Post + 3 prompts + 2 replies + briefs panel por panel. **Autosuficiente** — Nibaldo es refuerzo opcional (caso concreto/cifra), no bloqueante.
- **Pub 7** — `semana-4_22-26jun/pub-07_jue-25jun/canal-casos-de-uso_pub7.md`
  Caso real bug fixing: **prima en negativo al aplicar descuento del 10%** — la causa estaba en la regla de negocio, no en el código. Reformulado como **caso de uso**. Pieza gráfica = **tríptico `card-triptico`** (`S3-Card_pub7-portada` / `-problema` / `-solucion`, 1080×1080): Portada (¿dónde está el error?) → Problema (buscar donde no está) → Solución (contexto completo en 4 capas: ticket Jira → regla Confluence → código → solución). Post + 3 prompts + 2 replies (Reply 2 = puente con MCP de Atlassian) + briefs panel por panel. **Publicable como "bug fixing con contexto de negocio"** sin Nibaldo; el eyebrow dice "BUG FIXING" (no ".NET") hasta que él confirme el lenguaje.

### 4. Cambio de tono a impersonal en los dos casos de uso
- A petición de Yehimy, se pasó la narración de ambos posts a registro impersonal: "**se presentó / se le pidió / se resolvió**" en lugar de "vimos / el developer".
- Pub 6: pasos del post + Reply 1. Pub 7: cuerpo del post.
- Las secciones internas no publicables ("Tono de comunicación", "Estado") se dejaron como estaban — ahí "el developer" es genérico, no narración del caso.

### 5. Reformulación a caso de uso + tríptico + publicación Pub 6 (cierre del día)
- **Estructura de caso de uso** aplicada a los dos posts: arrancan por **escenario → objetivo → cómo se resuelve**, no por "en las sesiones se presentó". La trazabilidad real queda en la sección Procedencia.
- **Reparto texto/gráfica explícito** en ambos docs: los prompts viven solo en el texto (copiables); la gráfica cuenta el caso de un vistazo. No se duplica contenido.
- **Secciones internas "Enfoque y tono del caso de uso"** alineadas: qué debe resaltar cada pieza (post / tríptico / replies).
- **Cambio de formato gráfico: de infografía vertical a `card-triptico`** (3 paneles 1080×1080 · Portada → Problema → Solución). Decisión de Yehimy: el tríptico resuelve mejor porque plantea un problema y su solución. En Pub 6 el **análisis de impacto del copybook es el panel Solución**.
- **Renombrado de imágenes** a `S3-Card_pubN-portada` / `-problema` / `-solucion` (las 6). Actualizadas todas las referencias en ambos docs + TABLERO.
- **Fase:** se evaluó moverlas a "Fase 2 | Visual Studio" y se decidió **mantenerlas en "Fase 3 | Multi-entorno"** (pill sin cambios). Las 4 fases del `index.html` no se tocaron.
- **Pub 6 PUBLICADA** en el canal Casos de Uso Reales: post principal + tríptico (3 cards) + reply "Prompts listos para el equipo". Reply 2 (análisis de impacto, opcional) pendiente. Info validada contra el brief — todo coincide. El **diseño de las cards lo determina Yehimy**: no se observan estilos, solo se valida información (memoria `feedback_diseno-cards-determinado`).
- **Mensaje consolidado para Nibaldo** creado: `Seguimiento/solicitudes-nibaldo_23jun2026.md` — las 3 preguntas + plan de facturación + regrabaciones + URLs + refuerzo opcional Pub 6/7. Listo para la reunión del martes.

---

## Estado de dependencias externas

| Ítem | Responsable | Estado |
|------|-------------|--------|
| Vídeo 1 — regrabar flujo de licencia myaccess | Nibaldo | Pendiente — bloqueo, le toca a él |
| Vídeo 2 — qué ocultar en el login + flujo VS Code | Nibaldo | Pregunta puntual redactada (ítems #2 y #6) |
| Confirmar lenguaje del caso bug fixing (.NET) | Nibaldo | Pregunta puntual redactada (ítem #5) — no bloquea, define solo el encuadre |
| Plan de facturación real de GCO (¿legacy 0x/1x/3x o nuevo por tokens?) | Nibaldo | Pendiente — la card 1-S2 ya es plan-agnóstica, así que no bloquea |
| Caso concreto / cifra para reforzar Pub 6 | Nibaldo | Refuerzo opcional — el brief ya es autosuficiente |
| Acceso al Teams oficial de GCO (tenant Occident) | Catalana Occidente | ⛔ Bloqueante principal persistente |

---

## Decisiones tomadas

- El modelo de facturación 0x/1x/3x es **legacy** (verificado con fuentes web). Todo el contenido de tokens se reformuló a lenguaje **plan-agnóstico** para que sea durable sin importar el plan de GCO.
- De las 5 cards de tokens, **solo la 1-S2 cambia obligatoriamente**. Las demás no se tocan.
- El hilo de Pub 4 **no repite la card 1-S2**: va en el post principal; Reply 1 lleva la card 2-S2 con el texto del planificador-ejecutor.
- Single source of truth: el documento `ajuste-facturacion-tokens_pub4.md` es el **registro del cambio y su porqué**; el archivo del post (`canal-anuncios-tips_pub4.md`) es el **contenido final publicado**. Se enlazan entre sí, no se duplica contenido.
- Pub 6 y Pub 7 se desarrollaron como **autosuficientes**: se pueden publicar sin Nibaldo; sus inputs quedan como refuerzo/confirmación, no como bloqueo.
- Tono de los casos de uso = **impersonal** ("se presentó / se le pidió").

---

## Próximas tareas pendientes

- **Reunión 23 jun:** llevar `Seguimiento/resolucion-propia_reunion-23jun2026.md` + el mensaje `Seguimiento/solicitudes-nibaldo_23jun2026.md` — hacer las 3 preguntas y confirmar el plan de facturación de GCO.
- **Pub 7** — pendiente de publicar (jueves 25 jun). Brief y tríptico listos; falta solo producir las 3 cards en Figma.
- **Reply 2 de Pub 6** (análisis de impacto, opcional) — pendiente de publicar si se quiere reforzar.
- (Pendiente de decisión del equipo) Publicar Replies 2/3/4 del hilo de Pub 4 en Teams.
- Producción gráfica en Figma de los dos trípticos: `S3-Card_pub6-*` (Pub 6 ya publicada) y `S3-Card_pub7-*` (pendiente).
- Tras publicar Pub 6 y Pub 7 → redactar brief y guion del **Vídeo 3** (demo de los casos reales COBOL + .NET).

---

## Archivos clave del momento

| Archivo | Para qué |
|---------|----------|
| `Seguimiento/resolucion-propia_reunion-23jun2026.md` | **Documento principal para la reunión del 23 jun** — tabla de 9 ítems + 3 preguntas a Nibaldo |
| `Seguimiento/solicitudes-nibaldo_23jun2026.md` | Mensaje consolidado listo para enviar a Nibaldo (3 preguntas + facturación + regrabaciones + URLs + refuerzo opcional) |
| `Conocimiento/facturacion-github-copilot-2026.md` | Investigación con fuentes del cambio de facturación (0x/1x/3x → tokens / AI Credits) |
| `Produccion/semana-2_08-12jun/pub-04_jue-11jun/ajuste-facturacion-tokens_pub4.md` | Registro del cambio de la card 1-S2 — qué cambió, por qué, punto por punto |
| `Produccion/semana-2_08-12jun/pub-04_jue-11jun/canal-anuncios-tips_pub4.md` | Contenido final publicado de Pub 4 (post + hilo consolidado) |
| `Produccion/semana-4_22-26jun/pub-06_mar-23jun/canal-casos-de-uso_pub6.md` | Pub 6 — COBOL, entender código heredado · **PUBLICADA** (post + tríptico + reply prompts) |
| `Produccion/semana-4_22-26jun/pub-07_jue-25jun/canal-casos-de-uso_pub7.md` | Brief Pub 7 — bug fixing con contexto de negocio |
| `Produccion/TABLERO.md` | Estado actualizado al 21 jun — Pub 6 publicada, Pub 7 lista, trípticos `S3-Card_*`, card 1-S2 reformulada |
