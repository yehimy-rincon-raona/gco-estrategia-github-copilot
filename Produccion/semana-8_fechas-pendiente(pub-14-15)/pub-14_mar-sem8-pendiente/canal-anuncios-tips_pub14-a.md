# Canal Anuncios y Tips — Hilo 14-a · ¿Por qué Memoria no es un sexto nivel?

> Canal: Anuncios y Tips Ágiles · Tipo: Hilo/respuesta de **Pub 14** (el mapa de los 5 niveles) — no lleva número de Pub propio, igual que el Video 04 es hilo de Pub 2
> Perspectiva: desde el mapa de personalización — por qué Memoria queda fuera de los 5 niveles, no es una omisión
> ⚠️ **PENDIENTE DE REESCRITURA (25 ago 2026) — no republicar tal cual.** Dos motivos:
> 1. **El cierre del post remite al hilo `4-a`, que quedó deprecado el 25 ago** (está en `Produccion/semana-2.../pub-04.../deprecados/`). El enlace no lleva a ninguna parte.
> 2. **El eje que usa —"¿esto es mío o es del equipo?"— es el que se abandonó en Pub 4.** En la reunión del 25 ago, Jonatan y Nibaldo establecieron que la Memoria de GitHub Copilot **es el contexto de la conversación actual**, no algo que persista sobre ti. Decir que *"le enseña a GitHub Copilot algo sobre ti"* apunta en la misma dirección que la frase que Óscar objetó. Pub 4 pasó a organizarse por **duración**, no por propiedad.
>
> **Qué falta para reescribirlo:** la respuesta de Nibaldo a si **la Memoria y el "cajón" de Pub 3 son la misma cosa**. Si lo son, la respuesta del post cambia (Memoria queda fuera del mapa por ser el contexto donde ocurre todo, no por ser "tuya"). Si no lo son, hace falta la diferencia real. Ver `Seguimiento/solicitudes-nibaldo_26ago2026.md`, sección 3.4.
>
> Está publicado **solo en Teams Raona** (21 ago), así que hay margen antes de GCO. Sustituto de Pub 4: `post-una-vez-o-siempre_pub4.md`.
> Origen: responde al diagnóstico de Óscar en la reunión del 18 ago sobre la confusión Copilot Memory vs. Instructions — ver `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md`, tema 3
> Estado: 🟠 **Publicado en Teams Raona el 21 ago** (post + tarjeta producida) — pendiente de reescritura, ver aviso arriba

---

## Objetivo de esta publicación

Pub 14 (el mapa) deja una nota aparte breve: "Memoria no es un nivel de personalización". Este hilo responde la pregunta que esa nota abre: **¿por qué no?** — sin repetir la comparación completa de `4-a`, sino explicando la lógica del mapa: los 5 niveles comparten un mismo eje (le enseñan a Copilot algo sobre el proyecto o la tarea); Memoria vive en un eje distinto (le enseña a Copilot algo sobre ti). Por eso no compite por un lugar en la lista — no es un nivel que falte, es una categoría aparte.

---

## Post listo para Teams (respuesta en el hilo de Pub 14)

**Asunto:** `¿Por qué Memoria no aparece en el mapa de los 5 niveles?`

---

🧭 **¿Por qué Memoria no aparece en el mapa de los 5 niveles?**

No es que falte un sexto nivel. Es que Memoria responde una pregunta distinta a las otras cinco.

Instructions, Prompt files, Skills, Agentes y MCP tienen algo en común: todos le enseñan a GitHub Copilot algo sobre **el proyecto o la tarea que tienes enfrente**. Da igual si es del equipo (Instructions) o tuyo en el momento (un Prompt file que escribiste hoy) — el eje es "esto es sobre lo que estamos construyendo".

Memoria vive en otro eje: le enseña a Copilot algo sobre **ti**. No sobre el proyecto.

👉 Por eso la pregunta que la distingue no es "¿qué tan compleja es la tarea?" (esa es la que ordena los otros 5 niveles) — es "¿esto es mío o es del equipo?". Esa comparación completa la vemos en el hilo `4-a`.

---

## Piezas gráficas de esta publicación

| # | Pieza | Rol | Estado |
|---|-------|-----|--------|
| 1 | Tarjeta comparativa "Los 5 niveles (del proyecto) vs. Memoria (tuya)" (`pub-14a_s-8_tarjeta-comparativa_los-5-niveles-hablan-del-proyecto-memoria-habla-de-ti-no-es-nivel`) | Refuerza visualmente por qué Memoria queda fuera del mapa — un solo criterio, no una tabla completa | 🔄 Brief listo, falta producir en Figma |

---

## Brief — Tarjeta comparativa `pub-14a_s-8_tarjeta-comparativa_los-5-niveles-hablan-del-proyecto-memoria-habla-de-ti-no-es-nivel`

**Tipo de pieza:** Tarjeta comparativa horizontal, panel único (ver `Configuraciones/matriz-componentes-graficos.csv`, fila "Tarjeta comparativa horizontal")
**Origen del contenido:** `material-base_skills-que-son-y-cuando-usarlas.md` — secciones 3.1 y 3.7

> **Nota de diseño (18 ago, feedback de Yehimy):** una sola comparación, un solo criterio — no repetir las 3 filas de `4-a`. Este card resuelve **por qué** Memoria no es un nivel; el card de `4-a` resuelve **cómo distinguirla en la práctica** del día a día. Si se meten los dos criterios en la misma pieza, vuelve a pasar lo que ya pasó con la nota aparte: se satura y deja de aclarar.

| Elemento | Texto |
|----------|-------|
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT · SKILLS — HILO 14-a |
| Título | Los 5 niveles hablan del proyecto. Memoria habla de ti. |
| Columna A — encabezado | Instructions · Prompt files · Skills · Agentes · MCP |
| Columna A — descripción | Los 5 niveles del mapa — todos le enseñan a Copilot algo sobre el proyecto o la tarea, sea del equipo o tuya en el momento |
| Columna B — encabezado | Memoria |
| Columna B — descripción | Le enseña a Copilot algo sobre ti — no es del proyecto, por eso no compite por un lugar en la lista |
| Remate | No falta un sexto nivel. Es una pregunta distinta: ¿esto es sobre el proyecto, o es sobre mí? |
| Logo | Occident — inferior derecha |

### Especificaciones Figma

- **Formato:** 1920×1080 px (landscape), igual que el resto de tarjetas comparativas de la serie (Pub 8, Pub 4)
- **Fondo:** blanco · acento rojo `#DC0028` · sin fondos negros
- **Columnas:** fondo `#F5F5F5`, esquinas redondeadas — Columna A puede listar los 5 niveles como chips pequeños agrupados bajo un mismo encabezado, no 5 filas repetidas
- **Título:** CO Bold · texto corriente GCO Sans
- **Logo:** Occident, inferior derecha

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Los 5 niveles comparten el eje "proyecto/tarea" | `material-base_skills-que-son-y-cuando-usarlas.md` — sección 3.1 (definición de cada nivel) |
| Memoria como categoría aparte, individual y temporal | `material-base_skills-que-son-y-cuando-usarlas.md` — sección 3.7 |
| Diagnóstico de Óscar (18 ago) | `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md` — tema 3 |
