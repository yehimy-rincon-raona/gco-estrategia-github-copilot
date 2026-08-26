> # ⛔ DEPRECADO — no usar
>
> **Fecha de deprecación:** 25 de agosto de 2026
> **Archivo original:** `canal-anuncios-tips_pub4-a.md` (carpeta de Pub 4)
> **Sustituido por:** `post-una-vez-o-siempre_pub4.md`
>
> ## Por qué se deprecó
>
> Este hilo existía para **parchear** el post de "Memoria vs. Instrucciones" sin tocarlo, porque en su momento ya estaba publicado en Teams GCO. Dos cosas lo dejaron sin sentido:
>
> 1. **El post ya no está publicado.** Se retiró de Teams GCO el 18 ago, así que se corrige en origen en vez de parchearlo encima. Republicar un post equivocado seguido de una corrección enseña primero el error.
> 2. **Su contenido quedó desmentido.** En la reunión del 25 ago, Jonatan estableció que la Memoria de GitHub Copilot *"es el contexto de la conversación actual, no algo que tú puedas editar"*, y Nibaldo que *"si es siempre, ese concepto etéreo se aterriza en lo que es el instruction"*. Este hilo dice lo contrario: *"si mañana lo cambias tú solo, es Memoria"* y *"la próxima vez que le escribas una preferencia a GitHub Copilot, hazte esa pregunta antes de **guardarla**"* — presenta la Memoria como un sitio donde se guardan preferencias.
>
> **Nunca se produjo la pieza gráfica**, así que no hay imagen asociada que deprecar.
>
> Acta: `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_25-08-26.md`
>
> ---

# Canal Anuncios y Tips — Hilo 4-a · ¿Esto es tuyo o del equipo?

> Canal: Anuncios y Tips Ágiles · Tipo: Hilo/respuesta de **Pub 4** — reafirma su tarjeta original `5-S2` ("Memoria vs. Instrucciones"), no lleva número de Pub propio, igual que el Video 04 es hilo de Pub 2
> Perspectiva: desde tu día a día — cómo distinguir en la práctica si algo va a Memoria o a Instructions
> Trabaja en pareja con el hilo **`14-a`** (`canal-anuncios-tips_pub14-a.md`, en la carpeta de Pub 14) — mismo tema, ángulo distinto: este hilo lo aborda desde tus hábitos de trabajo, el otro desde el mapa de personalización
> Origen: responde al diagnóstico de Óscar en la reunión del 18 ago — el post original (`post-memoria-vs-instrucciones_mar-28jul.md`) no dejaba claro qué es Copilot Memory ni cómo se distingue de Instructions en la práctica. Ver `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md`, tema 3
> Estado: 🟡 Propuesta de contenido — falta producir la pieza gráfica y validar con Nibaldo

---

## Objetivo de esta publicación

Pub 4 ya explicó Memoria vs. Instrucciones (tarjeta `5-S2`), pero solo con las definiciones — no dio un criterio para decidir en el momento. Este hilo cierra ese hueco con una sola pregunta accionable, aplicada a ejemplos concretos de GCO, sin repetir la comparación conceptual completa (esa vive en `14-a`).

---

## Post listo para Teams (respuesta en el hilo de Pub 4)

**Asunto:** `¿Esto es tuyo o del equipo? La pregunta que resuelve Memoria vs. Instructions`

---

🧩 **¿Esto es tuyo o del equipo? La pregunta que resuelve Memoria vs. Instructions**

Ya vimos qué es cada una. La pregunta del día a día es más simple: cuando le das una preferencia a GitHub Copilot, **¿es tuya o es del equipo?**

- "Contesta en español, sin comentarios de más" → tuya, cambia según el día → **Memoria**.
- "En este repo, SQL sin `LIKE` ni `DELETE`" → del equipo, no cambia → **Instructions**.

Regla rápida: si mañana lo cambias tú solo sin avisarle a nadie, es Memoria. Si cambiarlo significa una conversación con el equipo, es Instructions.

👉 La próxima vez que le escribas una preferencia a Copilot, hazte esa pregunta antes de guardarla.

---

## Piezas gráficas de esta publicación

| # | Pieza | Rol | Estado |
|---|-------|-----|--------|
| 1 | Tarjeta comparativa "¿Esto es tuyo o del equipo?" (`4a-S2-card_memoria-o-instructions`) | Refuerza con ejemplos concretos de GCO — un solo criterio de decisión, no una tabla de definiciones | 🔄 Brief listo, falta producir en Figma |

---

## Brief — Tarjeta comparativa `4a-S2-card_memoria-o-instructions`

**Tipo de pieza:** Tarjeta comparativa horizontal, panel único (ver `Configuraciones/matriz-componentes-graficos.csv`, fila "Tarjeta comparativa horizontal")
**Origen del contenido:** brief `5-S2-card_pub4` (definiciones ya publicadas) + ejemplos de `material-base_skills-que-son-y-cuando-usarlas.md`, sección 8.3

> **Nota de diseño (18 ago, feedback de Yehimy):** el card de `14-a` ya explica **por qué** existen ambas categorías — este resuelve **cómo distinguirlas en la práctica**, con ejemplos, no con definiciones repetidas. Una sola pregunta de decisión, dos ejemplos por columna, nada más.

| Elemento | Texto |
|----------|-------|
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT · HILO 4-a |
| Título | ¿Esto es tuyo o del equipo? |
| Columna A — encabezado | Memoria |
| Columna A — ejemplo 1 | "Contesta en español, sin comentarios de más" |
| Columna A — ejemplo 2 | "Esta semana trabajo en el módulo de facturación" |
| Columna A — criterio | Cambia según lo que estés haciendo — lo ajustas tú solo |
| Columna B — encabezado | Instructions |
| Columna B — ejemplo 1 | "SQL sin `LIKE` ni `DELETE`" |
| Columna B — ejemplo 2 | "COBOL: código solo entre columnas 7–72" |
| Columna B — criterio | No cambia — cambiarlo implica hablarlo con el equipo |
| Remate | Si lo cambias tú solo sin avisar a nadie, es Memoria. Si implica una conversación de equipo, es Instructions. |
| Logo | Occident — inferior derecha |

### Especificaciones Figma

- **Formato:** 1920×1080 px (landscape), igual que la tarjeta `5-S2` original de Pub 4
- **Fondo:** blanco · acento rojo `#DC0028` · sin fondos negros
- **Columnas:** fondo `#F5F5F5`, esquinas redondeadas — mismo tratamiento visual que `5-S2-card_pub4`, para que se lea como su continuación directa
- **Título:** CO Bold · texto corriente GCO Sans
- **Logo:** Occident, inferior derecha

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Definiciones base de Memoria e Instructions | Brief `5-S2-card_pub4`, `canal-anuncios-tips_pub4.md` (misma carpeta) |
| Ejemplo "prefiero respuestas concisas" | `Conocimiento/temas_mes-agosto/material-base_skills-que-son-y-cuando-usarlas.md` — sección 8.3 |
| Ejemplo "esta semana trabajo en el módulo de facturación" | `Conocimiento/temas_mes-agosto/material-base_skills-que-son-y-cuando-usarlas.md` — sección 3.7 |
| Reglas de código GCO (SQL sin `LIKE`, COBOL columnas 7–72) | `post-memoria-vs-instrucciones_mar-28jul.md` (misma carpeta) — ya publicadas como ejemplo de Instructions |
| Diagnóstico de Óscar (18 ago) | `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md` — tema 3 |
