# Prompt para Claude Design — Pub 8 · Infografía de la fórmula del prompt

> Copia el bloque de "PROMPT" de abajo y pégalo en el chat del proyecto de Claude Design.
> Contexto: el catálogo `catalogo-de-formatos.md` ya está en el proyecto; Claude Design debe usar la variante F2-D.
> Nota: la variante F2-D todavía no tiene imagen de referencia (esta es la primera pieza de este tipo). Es esperable que la primera salida sea un borrador a iterar; la pieza que apruebes se convertirá en la referencia futura.

---

## PROMPT (para pegar en Claude Design)

Crea una nueva página en este canvas y diseña en ella una infografía formato **F2-D (fórmula / componentes)** según el catálogo de formatos del proyecto. Respeta el sistema base común (colores, tipografía CO Bold / GCO Sans, iconos de `assets/icons`, reglas de marca). Fondo blanco, rojo `#DC0028` solo como acento.

Contenido exacto de la pieza (no inventes ni añadas texto que no esté aquí):

- Eyebrow (overline, rojo uppercase): GUÍA DE MAESTRÍA EN GITHUB COPILOT · PROMPTING
- Título principal (CO Bold, negro): La fórmula del prompt que funciona
- Fórmula central (elemento protagonista, palabras en negro CO Bold, signos + en rojo): Rol + Contexto + Tarea + Restricciones + Formato
- Componentes de la fórmula (cada uno: nombre en CO Bold + explicación en GCO Sans gris):
  1. Rol — Quién quieres que sea.
  2. Contexto — El código o el dato sobre el que trabaja.
  3. Tarea — Qué quieres, un solo objetivo claro.
  4. Restricciones — Los límites y las reglas que debe respetar.
  5. Formato — Cómo quieres la respuesta.
- Remate (destacado con rojo como acento): La pieza que más se olvida es Restricciones.
- Logo Occident: inferior derecha.

Formato: vertical 1080×1350 px. El ejemplo completo y la plantilla NO van en la pieza (viven en el texto del post). La gráfica solo fija la fórmula de un vistazo.

Si algún dato de estilo no está definido en el catálogo (retícula, tamaños exactos), tómalo de la lógica de las otras infografías del proyecto y avísame de qué asumiste, en lugar de inventarlo en silencio.

---

## Notas para ti (no van en el prompt)

- Si Claude Design pregunta por la variante, confírmale F2-D.
- Cuando devuelva el primer diseño, revísalo contra el brief: que la fórmula sea el elemento central, que los `+` estén en rojo, que "Restricciones" tenga el acento, y que no haya colado el ejemplo de código (ese va en el texto del post, no en la pieza).
- Cuando la apruebes, expórtala como `infografia_formula-componentes.jpg` y súbela a `uploads`: pasa a ser la imagen de referencia oficial de la variante F2-D.
