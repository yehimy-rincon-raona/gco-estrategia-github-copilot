> # ⛔ DEPRECADO — no usar
>
> **Fecha de deprecación:** 25 de agosto de 2026
> **Archivo original:** `canal-anuncios-tips_pub4-b.md` (carpeta de Pub 4)
> **Sustituido por:** `post-una-vez-o-siempre_pub4.md`
>
> ## Por qué se deprecó
>
> Se escribió el 25 ago por la mañana, **antes de la reunión**, para responder al diagnóstico de Óscar del 18 ago. La reunión de ese mismo día lo desmintió en su punto central.
>
> Este borrador organiza el tema en tres contenedores y dice: *"**La Memoria dura entre sesiones, y es tuya**"*. En la reunión, Jonatan y Nibaldo establecieron lo contrario — la Memoria **es el contexto de la conversación actual**, no algo que persista entre sesiones ni que se pueda editar.
>
> Además, sus "tres contenedores" (cajón · Memoria · Instructions) tienen un problema de fondo: si la Memoria es el contexto de la conversación actual, **es lo mismo que el cajón que ya explicó Pub 3**. No son tres cosas, son dos.
>
> **Lo que sí se conserva de aquí:** el eje de **duración** — cuánto dura cada cosa — que es el que estructura el post nuevo.
>
> **Nunca se produjo la pieza gráfica**, así que no hay imagen asociada que deprecar.
>
> Acta: `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_25-08-26.md`
>
> ---

# Canal Anuncios y Tips — Hilo 4-b · El cajón, la Memoria y las Instructions

> Canal: Anuncios y Tips Ágiles · Tipo: Hilo/respuesta anidada de **Pub 4** — no lleva número de Pub propio, igual que el hilo `4-a` y que el Video 04 es hilo de Pub 2
> Perspectiva: desde el vocabulario — separar las dos cosas distintas que el proyecto llamó "memoria" ante los mismos lectores
> Origen: responde al diagnóstico de Óscar en la reunión del 18 ago — el post original (`post-memoria-vs-instrucciones_mar-28jul.md`) no deja claro qué es la Memoria, cómo se modifica, ni por qué mezcla un concepto individual con uno de equipo. Ver `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md`, tema 3
> Formato acordado con Óscar: **repost anidado dentro del post original**, no una publicación nueva — para ampliar el post, no duplicarlo
> Estado: 🟠 Post cerrado y brief listo para producir — falta únicamente producir la infografía en Figma

---

## El problema que resuelve esta publicación

Óscar señaló tres huecos en el post original. Este hilo cierra dos de ellos, y deja el tercero explícitamente abierto:

| Hueco señalado por Óscar | Dónde se resuelve |
|---|---|
| No se entiende **qué es** la Memoria | ✅ Este hilo — se define por su duración y su alcance, contra los otros dos contenedores |
| El post **mezcla** un concepto individual (Memoria) con uno de equipo (Instructions) | ✅ Este hilo — los separa en tres contenedores con tres duraciones distintas |
| No explica **cómo se modifica** la Memoria en la práctica | ⛔ Pendiente — ver "Lo que falta" al final de este documento |

**La causa de raíz, que ni `4-a` ni `14-a` tocan:** el proyecto usó la palabra "memoria" para dos cosas distintas ante la misma audiencia.

- **Pub 3** (Primeros Pasos) se publicó con el asunto *"GitHub Copilot no tiene memoria permanente. Tiene un cajón."* — hablando de la ventana de contexto.
- **El post de Pub 4** dice *"Copilot Memory guarda tus preferencias personales"* — algo que sí persiste entre sesiones.

Leídos seguidos, se contradicen. `4-a` compara Memoria contra Instructions, y `14-a` compara Memoria contra los 5 niveles del mapa — pero ninguno mete el cajón en la comparación, que es justo la pieza que falta para deshacer el nudo.

---

## Cómo se relaciona con los otros hilos de este tema

| Hilo | Qué resuelve | Estado |
|---|---|---|
| `14-a` (carpeta de Pub 14) | **Por qué** la Memoria no es un sexto nivel del mapa de personalización | ✅ Publicado en Teams Raona el 21 ago |
| `4-a` (esta carpeta) | **Cómo distinguir** en el día a día si algo va a Memoria o a Instructions | 🟡 Propuesta, sin pieza producida |
| `4-b` (este documento) | **Qué es cada cosa** — separa los tres contenedores y sus duraciones | 🟠 Post cerrado, falta pieza |

> **Recomendación para Yehimy (decisión pendiente):** `4-a` y `4-b` son dos hilos anidados en el mismo post de Pub 4, sobre el mismo tema. Publicar los dos satura — es exactamente el riesgo que ya se marcó en la nota de diseño del 18 ago para `14-a`. Como `4-a` todavía no tiene pieza producida, la salida más limpia es **publicar `4-b` y retirar `4-a`**: `4-b` responde el diagnóstico de Óscar de raíz (qué es cada cosa), y el criterio práctico de `4-a` ("¿es tuyo o del equipo?") ya queda absorbido en el remate de este post. Si prefieres conservar los dos, deben ir separados en el tiempo y `4-a` debe entrar después, nunca antes.

---

## Post listo para Teams (respuesta anidada en el post de Memoria vs. Instrucciones)

**Asunto:** `Dijimos "memoria" para dos cosas distintas. Vamos a separarlas.`

---

🧠 **Dijimos "memoria" para dos cosas distintas. Vamos a separarlas.**

Cuando dijimos que GitHub Copilot **no tiene memoria permanente, tiene un cajón**, hablábamos de la ventana de contexto: lo que carga dentro de un hilo y se vacía cuando abres uno nuevo.

La **Memoria** es otra cosa. Guarda preferencias tuyas que siguen ahí entre una sesión y la siguiente: "prefiero respuestas concisas", "esta semana trabajo en el módulo de facturación". Es individual — solo aplica a ti.

Y **`.github/copilot-instructions.md`** es del equipo: vive en el repositorio y aplica a todos, siempre.

Tres contenedores, tres duraciones:

- El **cajón** dura lo que dura el hilo.
- La **Memoria** dura entre sesiones, y es tuya.
- Las **Instructions** duran mientras estén en el repositorio, y son del equipo.

👉 ¿Tienes una preferencia y no sabes en cuál de los tres va? Escríbela aquí abajo y la ubicamos entre todos.

---

## Tono de comunicación

Mismo tono del canal Anuncios y Tips Ágiles: colega, directo, sin condescendencia. Tres decisiones de tono:

- **Se asume el error de vocabulario, no se disimula.** "Dijimos memoria para dos cosas distintas" es honesto y desarma la confusión de entrada. Un developer que leyó Pub 3 y Pub 4 y sintió que algo no cuadraba, aquí encuentra la confirmación de que no era él.
- **Se define por duración y alcance, no por teoría.** "Dura lo que dura el hilo" es verificable en el uso diario. "Es contexto efímero de sesión" no lo es.
- **La llamada a la acción invita a interactuar**, no solo a leer — criterio de copy del 21 ago: el canal es un espacio de interacción social, no un tablón de anuncios.

---

## Piezas gráficas de esta publicación

| # | Pieza | Rol | Estado |
|---|-------|-----|--------|
| 1 | Infografía "Tres contenedores, tres duraciones" (`4b-S2-infografia_tres-contenedores`) | Ordena los tres contenedores de menor a mayor permanencia — resuelve visualmente la mezcla que Óscar señaló | 🔄 Brief listo, falta producir en Figma |

---

## Brief — Infografía `4b-S2-infografia_tres-contenedores`

**Tipo de pieza:** Infografía vertical, panel único (ver `Configuraciones/matriz-componentes-graficos.csv`, fila "Infografia" — jerarquía de un concepto)
**Origen del contenido:** `resumen_nibaldo-uso-de-la-memoria.md` (el cajón) · `material-base_skills-que-son-y-cuando-usarlas.md` §3.7 y glosario (la Memoria) · `post-memoria-vs-instrucciones_mar-28jul.md` (las Instructions, ya publicadas)

> **Nota de diseño:** el formato es infografía, no tarjeta comparativa — la tarjeta comparativa está definida para exactamente 2 columnas y aquí son 3 elementos, y además el orden importa: van de menor a mayor permanencia. Esa progresión es el mensaje. No convertirla en tres columnas al mismo nivel: se pierde la jerarquía y vuelve a leerse como una mezcla, que es el problema que esta pieza existe para resolver.

| Elemento | Texto |
|----------|-------|
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT |
| Título | Tres contenedores, tres duraciones |
| Subtítulo | Dijimos "memoria" para dos cosas distintas. Aquí están separadas. |
| Bloque 1 — nombre | El cajón |
| Bloque 1 — qué es | La ventana de contexto: lo que GitHub Copilot carga dentro de un hilo |
| Bloque 1 — duración | Dura lo que dura el hilo — se vacía al abrir uno nuevo |
| Bloque 1 — alcance | Solo esa conversación |
| Bloque 2 — nombre | La Memoria |
| Bloque 2 — qué es | Tus preferencias personales de trabajo |
| Bloque 2 — ejemplo | "Prefiero respuestas concisas" · "Esta semana trabajo en el módulo de facturación" |
| Bloque 2 — duración | Sigue ahí entre una sesión y la siguiente |
| Bloque 2 — alcance | Solo tú |
| Bloque 3 — nombre | Las Instructions |
| Bloque 3 — qué es | `.github/copilot-instructions.md` — las reglas del proyecto |
| Bloque 3 — ejemplo | SQL sin `LIKE`, sin `DELETE` · COBOL entre columnas 7–72 |
| Bloque 3 — duración | Mientras estén en el repositorio |
| Bloque 3 — alcance | Todo el equipo |
| Remate | Si lo cambias tú solo, es Memoria. Si implica hablarlo con el equipo, es Instructions. Si desaparece al abrir un hilo nuevo, era el cajón. |
| Logo | Occident — inferior derecha |

### Especificaciones Figma

- **Formato:** 1080×1350 px (vertical), igual que el resto de infografías de la serie (Pub 5, Pub 13)
- **Fondo:** blanco · acento rojo `#DC0028` · sin fondos negros
- **Estructura:** tres bloques apilados en vertical, de arriba abajo en orden de permanencia creciente — el cajón arriba, las Instructions abajo. Fondo `#F5F5F5` con esquinas redondeadas en cada bloque, mismo tratamiento que las columnas de las tarjetas comparativas de Pub 4 y Pub 8, para que se lea como continuación directa de esa familia
- **Señal de progresión:** el eje de permanencia debe verse, no solo leerse — una barra o escala lateral que crece de arriba abajo, o intensidad de rojo creciente en el borde izquierdo de cada bloque. Es el único recurso gráfico que carga significado en la pieza: sin él son tres cajas sueltas
- **Etiqueta de duración:** cada bloque lleva su duración como chip destacado, no como texto corrido — es el dato que diferencia los tres y debe poder compararse de un vistazo
- **Ejemplos:** en tipografía monoespaciada o con tratamiento de código donde el texto lo sea (`.github/copilot-instructions.md`, `LIKE`, `DELETE`)
- **Título:** CO Bold · texto corriente GCO Sans
- **Eyebrow:** sin código interno de hilo — criterio de copy del 21 ago: `4-b` es nomenclatura interna, nunca va en una pieza de cara al lector
- **Logo:** Occident, inferior derecha

---

## Lo que falta — bloquea el cierre completo del diagnóstico de Óscar

**Óscar preguntó también cómo se modifica la Memoria en la práctica.** No hay ninguna fuente en el proyecto que lo documente: ni las sesiones de Nibaldo, ni el material base de agosto, ni la documentación de la gco-dev-suite explican dónde se ve la Memoria, cómo se edita, cómo se borra ni si está activa por defecto en Visual Studio.

`[No hay información — confirmar con Nibaldo]`

Este post no lo inventa ni lo insinúa. Queda como ampliación posterior, en cuanto Nibaldo lo confirme a su regreso. Dos opciones cuando llegue el dato:

1. **Añadirlo a esta misma pieza** como cuarto elemento ("dónde la encuentras"), si la respuesta es corta.
2. **Un hilo aparte con captura de pantalla**, si resulta que el procedimiento tiene varios pasos o difiere entre Visual Studio y VS Code.

Preguntas concretas para Nibaldo:

- ¿Dónde ve el developer lo que la Memoria tiene guardado?
- ¿Se edita y se borra desde la interfaz, o solo escribiéndole a GitHub Copilot en el chat?
- ¿Está activa por defecto, o hay que habilitarla?
- ¿Funciona igual en Visual Studio que en VS Code? (Es la misma duda que ya quedó abierta en `prop_memoria-copilot.md` para `copilot-instructions.md`.)

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| El cajón / ventana de contexto, y que se vacía al abrir hilo nuevo | `propuestas-nibaldo/resumen_nibaldo-uso-de-la-memoria.md` §1, §4, §6 — sesiones Nibaldo G2M, G3M, G5M, G6M |
| Asunto publicado de Pub 3 ("no tiene memoria permanente, tiene un cajón") | `pub-03_mar-09jun_(dia-04_jue-23-jul)/canal-primeros-pasos_pub3.md` — verificado contra captura |
| La Memoria guarda preferencias personales entre sesiones, individual | `Conocimiento/temas_mes-agosto/material-base_skills-que-son-y-cuando-usarlas.md` §3.7 y glosario final |
| Ejemplos "prefiero respuestas concisas" y "esta semana trabajo en el módulo de facturación" | `material-base_skills-que-son-y-cuando-usarlas.md` §3.7 y §8.3 |
| Reglas de código GCO (SQL sin `LIKE`, COBOL columnas 7–72) | `post-memoria-vs-instrucciones_mar-28jul.md` (esta carpeta) — ya publicadas como ejemplo de Instructions |
| Criterio "si lo cambias tú solo, es Memoria" | `canal-anuncios-tips_pub4-a.md` (esta carpeta) — remate ya redactado, absorbido aquí |
| Diagnóstico de Óscar y formato de repost anidado | `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md` — tema 3 |
