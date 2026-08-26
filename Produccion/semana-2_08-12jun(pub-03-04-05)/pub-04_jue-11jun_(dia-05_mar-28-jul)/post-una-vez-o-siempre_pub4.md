# Canal Anuncios y Tips Ágiles — Post propio · Una vez o siempre
> Canal: Anuncios y Tips Ágiles · Tipo: Publicación independiente, programada una hora después del post principal de Pub 4
> 📍 **Teams GCO congelado.** La fecha se confirma cuando se retome la cadencia (previsto la semana del 14-18 sep, en orden de creación).
> Estado: ✅ **Reescrito y publicado en Teams Raona el 25 ago 2026** — post + tarjeta. Se editó el post existente (el del 11 jun), así que la versión anterior ya no está visible en ningún canal.
> Sustituye a: `deprecados/deprecado_post-memoria-vs-instrucciones_mar-28jul.md` — ver ahí por qué se deprecó.
> 📍 **Teams GCO:** no enviado. Republica junto con Pub 4 cuando se retome la cadencia.
> Origen: diagnóstico de Óscar (reunión 18 ago) + definición técnica de Jonatan y Nibaldo (reunión 25 ago). Acta: `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_25-08-26.md`

---

## Objetivo de esta publicación

Responder la pregunta que un desarrollador se hace de verdad: **"¿dónde escribo algo para que GitHub Copilot lo aplique siempre?"**

La versión anterior no la respondía. Comparaba *lo tuyo* contra *lo del equipo*, y eso llevó a Óscar y a Salva a buscar un sitio donde guardar sus preferencias personales — un sitio que no existe.

---

## El cambio de fondo respecto a la versión anterior

| | Versión anterior (deprecada) | Esta versión |
|---|---|---|
| **Eje** | Propiedad — tuyo vs. del equipo | **Duración** — lo que dura la conversación vs. lo que dura siempre |
| **Contenedores** | Copilot Memory · `copilot-instructions.md` | El cajón de la conversación · `.github/copilot-instructions.md` |
| **Enlace con Pub 3** | Ninguno. Pub 3 hablaba del "cajón", este post hablaba de "Memoria" — dos nombres sin relación aparente | **Directo.** Pub 3 explicó el cajón; este post explica cómo meter algo que no se vaya al cerrarlo |

**Por qué se saca "Copilot Memory" de la pieza:** en la reunión del 25 ago, Jonatan estableció que es *"el contexto de la conversación actual, no algo que tú puedas editar"*, y Nibaldo que *"es este espacio de ventana donde tú escribes"*. Si no se puede editar y no tiene un sitio donde vivir, un desarrollador no tiene ninguna acción que tomar sobre ello — y ponerlo como columna de una comparativa genera exactamente la pregunta *"¿y dónde modifico eso?"*, que no tiene respuesta.

> **Ventaja de este encuadre:** aguanta las dos respuestas posibles a la pregunta abierta con Nibaldo. Si la Memoria resulta ser lo mismo que el cajón, este post ya es correcto. Si resulta ser algo distinto, este post tampoco afirma nada sobre ella y el tema puede entrar después, bien definido, como contenido propio.

---

## Post listo para copiar en Teams

**Asunto:** `Escríbelo una vez, aplícalo siempre`

---

⚙️ **Lo que le pides en el chat dura lo que dura el chat. Lo que va en el archivo se aplica siempre.**

Cuando le pides algo a GitHub Copilot dentro de una conversación — *"contéstame en español"*, *"no me pongas comentarios de más"* — eso vive en el cajón de esa conversación. La cierras y se fue. **No es un archivo que puedas abrir y editar.**

Si quieres que una regla se aplique **siempre**, va en `.github/copilot-instructions.md`. Ese archivo entra al cajón en cada conversación, para todos, sin que nadie tenga que escribirlo en el prompt. Es donde el equipo define las reglas permanentes del proyecto. En GCO:

- SQL: sin `LIKE`, sin `DELETE` ni `TRUNCATE`
- COBOL: código solo entre columnas 7–72 · no modificar copybooks sin listar primero el impacto
- .NET: C# 12 · `async/await` en toda operación I/O
- Todos: sin credenciales, tokens ni contraseñas escritos directamente en el código

👉 Si lo quieres una vez, pídelo en el chat. Si lo quieres siempre, escríbelo en el archivo.

---

## Tono de comunicación

Mismo tono del canal: colega, directo y accionable. La distinción se explica con el mecanismo —dónde vive cada cosa y cuánto dura—, no con teoría. El remate es una regla de decisión de una línea, que es lo que faltaba en la versión anterior.

Enlaza hacia atrás con Pub 3 ("el cajón") sin necesidad de nombrarla: quien la leyó reconoce la palabra, quien no, la entiende igual por contexto.

---

## Piezas gráficas de esta publicación

| # | Pieza | Rol | Estado |
|---|-------|-----|--------|
| 1 | `pub-04_s-2_tarjeta-comparativa_una-vez-o-siempre.png` — Tarjeta comparativa horizontal "Una vez o siempre" | Acompaña el post — los dos contenedores lado a lado, con la duración como criterio | ✅ Producida y publicada (25 ago) · falta guardar el PNG exportado en esta carpeta |

> **Se reaprovecha la pieza deprecada:** la columna derecha de `deprecados/deprecado_pub-04_s-2_tarjeta-comparativa_memoria-vs-instrucciones.png` es correcta y se conserva casi igual. **Lo que se rehace es la columna izquierda, el título y el subtítulo.**

---

## Brief — Tarjeta comparativa `pub-04_s-2_tarjeta-comparativa_una-vez-o-siempre`

**Tipo de pieza:** Tarjeta comparativa horizontal, panel único (ver `Configuraciones/matriz-componentes-graficos.csv`, fila "Tarjeta comparativa horizontal")
**Base de producción:** la pieza deprecada — misma retícula, mismo sistema visual

> ✅ **Producida el 25 ago.** Lo de abajo es lo que se llevó a la pieza, verificado contra la captura de Teams Raona. **Diferencia menor sin corregir:** la tarjeta imprime `copilot-instructions.md` mientras el post dice `.github/copilot-instructions.md`. Viene de la pieza anterior. Como la duda de Óscar era literalmente *"no sé dónde está"*, poner la ruta completa también en la tarjeta lo resolvería sin abrir el post — opcional.

| Elemento | Texto |
|----------|-------|
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT |
| Título principal | Una vez o siempre |
| Subtítulo | Dónde va cada cosa que le pides a GitHub Copilot |
| **Columna A — encabezado** | En la conversación |
| **Columna A — badge** | Dura lo que dura el chat |
| **Columna A — descripción** | Lo que le pides dentro de un chat vale para ese chat. Al cerrarlo, se va. No es un archivo que puedas abrir y editar. |
| **Columna A — ejemplo** | "Contéstame en español" · "No me pongas comentarios de más" |
| Columna B — encabezado | `copilot-instructions.md` |
| Columna B — badge | Se aplica siempre |
| Columna B — descripción | Define convenciones de código, arquitectura y reglas del proyecto que aplican a todos. Se versiona en Git junto al código. |
| Columna B — ejemplo GCO | SQL: sin `LIKE` · COBOL: col. 7–72 · .NET: C# 12 · sin credenciales escritas en el código |
| Logo | Occident — inferior derecha |

### Cambios exactos respecto a la pieza deprecada

| Zona | Antes (pieza deprecada) | Ahora |
|---|---|---|
| Título | Memoria vs. Instrucciones | **Una vez o siempre** |
| Subtítulo | Dos formas de darle contexto **permanente** a GitHub Copilot — una personal, una de equipo | **Dónde va cada cosa que le pides a GitHub Copilot** |
| Col. A — encabezado | Copilot Memory | **En la conversación** |
| Col. A — badge | Individual | **Dura lo que dura el chat** |
| Col. A — descripción | "Guarda tus preferencias de respuesta, estilo de código personal y atajos propios. Solo tú lo ves — no afecta al resto del equipo." | **Reemplazada entera** (ver tabla de arriba) |
| Col. A — ejemplo | *(no había)* | **Se añade**, dos frases de ejemplo |
| Col. B — badge | Equipo | **Se aplica siempre** |
| Col. B — bloque de código | `sin credenciales hardcodeadas` | **`sin credenciales escritas en el código`** — corrección de anglicismo (regla de Jonatan) |
| Col. B — resto | — | Sin cambios |
| Íconos | Chip/procesador (A) · Documento (B) | El de la columna B se queda. **En producción, el chip de la columna A se cambió por una burbuja de conversación** (decisión de Yehimy, 25 ago) — el chip representaba una memoria y ya no aplica |

### Especificaciones Figma

- **Formato:** landscape, mismo que la pieza deprecada (3830×2272 px de exportación)
- **Fondo:** blanco · acento rojo `#DC0028` · sin fondos negros
- **Eyebrow:** rojo `#DC0028` · mayúsculas · GCO Sans pequeño
- **Título principal:** gris oscuro · CO Bold · display grande
- **Subtítulo:** gris · GCO Sans regular
- **Columnas:** fondo `#F5F5F5` · esquinas redondeadas · A izquierda, B derecha
- **Encabezados de columna:** gris oscuro · CO Bold
- **Badges:** rojo `#DC0028`, bajo el encabezado de cada columna — **los dos con el mismo tratamiento visual**, porque ahora son dos duraciones, no una categoría personal y otra de equipo
- **`copilot-instructions.md` y el bloque de reglas:** monospace · fondo `#F5F5F5` · borde sutil
- **Logo:** Occident, inferior derecha

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| "La Memoria es el contexto de la conversación actual, no algo editable" | Jonatan Hospital Adriao — reunión 25 ago 2026 (transcripción literal de Teams) |
| "Si es siempre, ese concepto se aterriza en lo que es el instruction" | Nibaldo Alfonso Pino Araya — reunión 25 ago 2026 |
| El "cajón" como metáfora del contexto de conversación | Pub 3 (`pub-03_mar-09jun_(dia-04_jue-23-jul)/`) — ya publicada, misma audiencia |
| Mecanismo de `copilot-instructions.md` y las 4 reglas de GCO | `semana-2_08-12jun/propuestas-nibaldo/resumen_nibaldo-uso-de-la-memoria.md` — reconfirmadas por Nibaldo el 25 ago |

---

## Pendiente de confirmar con Nibaldo — no bloquea este post

Estas preguntas afinan el contenido, pero el post es correcto sin ellas:

1. **¿La Memoria de GitHub Copilot y el "cajón" de Pub 3 son la misma cosa?** Si lo son, no hay nada más que hacer. Si no, la Memoria entra después como tema propio.
2. ¿Se puede **ver** de alguna forma lo que hay en ese contexto, o es completamente opaco?
3. ¿Se **borra** al cerrar la conversación, al cerrar Visual Studio, o tiene alguna caducidad?
4. ¿Funciona **igual en Visual Studio que en VS Code**?

> Ver `Seguimiento/solicitudes-nibaldo_26ago2026.md`, sección 3.4.
