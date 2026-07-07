# Canal Anuncios y Tips — Pub 8 · La fórmula del prompt que funciona (parte 1)
> Canal: Anuncios y Tips Ágiles · Tipo: Tip de uso
> ⏱️ **Producción: Semana 5 (trabajo del 30 jun)** · **Publicación: Semana 5 — martes 30 jun (fecha a confirmar en la reunión)**
> Estado: ✅ Ambas piezas producidas — infografía de la fórmula (`08-S5-infografia_prompts.jpg`) + imagen de apoyo del ejemplo (`08-S5-card-contexto.jpg`)
> Fuente: `Configuraciones/estructura_prompt.md` · sesiones de formación · `Planeacion/Semana-0_planeacion-del-proyecto/ejemplos_practicos_Github-Copilot.md`

---

## Objetivo de esta publicación

Que el equipo deje de escribir prompts sueltos ("hazme esto") y adopte una **fórmula repetible** para pedirle bien a GitHub Copilot. El hábito que se quiere instalar: antes de escribir el prompt, pensar en cinco piezas — **Rol + Contexto + Tarea + Restricciones + Formato**. Un buen prompt no es más largo, es más completo.

**Por qué este tema ahora:** tras los dos casos de uso reales (COBOL y bug fixing), el equipo ya vio *qué* puede hacer GitHub Copilot. Esta pub responde el *cómo se lo pido* para que la respuesta sea la que necesito a la primera, sin tres o cuatro reintentos que gastan tiempo y tokens.

---

## Post listo para Teams

**Asunto:** `📣 La fórmula del prompt que funciona: 5 piezas, no más`

---

📣 **La fórmula del prompt que funciona: 5 piezas, no más**

Un buen prompt no es más largo — es más completo. Cuando la respuesta no sale a la primera, casi siempre falta una de estas cinco piezas:

**Rol + Contexto + Tarea + Restricciones + Formato**

- **Rol:** quién quieres que sea ("actúa como programador COBOL experto en Mainframe").
- **Contexto:** el código o el dato sobre el que trabaja.
- **Tarea:** qué quieres exactamente, un solo objetivo claro.
- **Restricciones:** los límites — lo que no debe tocar, las reglas que debe respetar.
- **Formato:** cómo quieres la respuesta (solo el bloque, una tabla, paso a paso).

Las **Restricciones** son lo que separa "algo parecido" de "justo lo que necesitaba" — y es la pieza que más se olvida.

👉 En tu próximo prompt, antes de enviarlo, revisa: ¿están las cinco?

---

## Piezas gráficas de esta publicación

Esta pub lleva **dos piezas gráficas** con roles distintos:

| # | Pieza | Rol | Estado |
|---|-------|-----|--------|
| 1 | Infografía de la fórmula (`08-S5-infografia_prompts`) | Acompaña el **post principal**. Fija las 5 piezas de un vistazo. | ✅ Producida |
| 2 | Imagen de apoyo del ejemplo (`08-S5-card-contexto`) | Acompaña el **Reply 1**. Muestra el mismo encargo en dos resultados: incompleto vs. con la fórmula. | ✅ Producida |

> Regla de no duplicar: la infografía fija **la fórmula**; la imagen de apoyo muestra **el ejemplo aplicado**; el texto del Reply 2 aporta la plantilla copiable. Cada pieza dice algo distinto.

---

## Reparto del contenido — texto vs. gráficas

**En el texto del post (Teams):**
- **Post principal:** la fórmula + qué es cada pieza + el aviso sobre Restricciones + CTA → adjunta la **infografía de la fórmula (pieza 1)**.
- **Reply 1:** el mismo prompt mal y bien escrito (antes/después) con el caso real de GCO → adjunta la **imagen de apoyo del ejemplo (pieza 2)**.
- **Reply 2 (opcional):** la plantilla en blanco para copiar → solo texto, sin gráfica.

**En la infografía de la fórmula (pieza 1):**
- La fórmula `Rol + Contexto + Tarea + Restricciones + Formato` y una línea por pieza.
- **No lleva el ejemplo** — el ejemplo tiene su propia imagen de apoyo (pieza 2).

**En la imagen de apoyo del ejemplo (pieza 2):**
- El antes/después del prompt (incompleto vs. con la fórmula), anotado pieza por pieza.
- El detalle de diseño y el texto exacto están en el brief de la pieza 2, más abajo.

---

## Tono de comunicación

El gancho es práctico: "deja de pelear con los reintentos". No es una clase de teoría de prompting — es una checklist mental de cinco piezas que se puede aplicar hoy.

Claves:
- La fórmula es el mensaje central — si solo leen la línea en negrita, ya se llevan algo útil.
- El antes/después es lo que convence: el mismo developer, dos resultados distintos.
- Resaltar **Restricciones** porque es donde está el valor para GCO (reglas de Mainframe, SQL seguro).
- Sin condescendencia: el prompt incompleto no está "mal", solo le falta una pieza.

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Fórmula Rol + Contexto + Tarea + Restricciones + Formato | `Configuraciones/estructura_prompt.md` |
| Caso de control de errores SQLCODE en COBOL | Sesión 2 · G4M, G5M — `ejemplos_practicos_Github-Copilot.md` |
| Restricción columnas 7–72 · variables de error · nombre de párrafo | Sesión 2 · G4M, G5M |
| Reglas de código GCO (refuerzo para parte 2) | Card `5-S2` · `copilot-instructions.md` del proyecto |

---

## Posts de hilo

> El post principal va con la infografía/card de la fórmula. Reply 1 aterriza el antes/después. Reply 2 (opcional) entrega la plantilla en blanco.

---

### Reply 1 — el mismo prompt, dos resultados

🔧 **La diferencia no es el modelo. Es cómo se lo pediste.**

El mismo encargo —añadir el control de errores tras una consulta SQL en COBOL— escrito de dos formas. A la izquierda, el prompt suelto; a la derecha, el mismo pedido con las 5 piezas de la fórmula.

Mismo modelo, dos resultados: uno genérico que toca reintentar 3 o 4 veces, y otro usable a la primera que respeta las columnas 7–72.

👉 Fíjate en las **Restricciones**: son las que hacen que el código salga listo para pegar.

→ Adjuntar: imagen de apoyo del ejemplo (antes/después) — pieza 2

---

### Reply 2 — (opcional) plantilla para copiar

📋 **Guárdate esta plantilla — sirve para cualquier lenguaje.**

```
Actúa como [rol].
Contexto: [código, dato o situación].
Tarea: [lo que quieres, un solo objetivo].
Restricciones: [lo que no debe tocar, reglas que respetar].
Formato: [cómo quieres la respuesta].
```

No hace falta rellenar las cinco siempre — pero cuando algo no sale, revisa cuál te faltó.

---

## Archivos de salida

| # | Nombre de archivo | Tipo | Tema | Estado |
|---|-------------------|------|------|--------|
| 1 | `08-S5-infografia_prompts` | infografía · fórmula / componentes · 1080×1350 px | La fórmula de 5 piezas: Rol + Contexto + Tarea + Restricciones + Formato | ✅ Producida |
| 2 | `08-S5-card-contexto` | card comparativa horizontal · antes/después | El mismo encargo, dos resultados: prompt incompleto vs. con la fórmula (caso SQLCODE en COBOL) | ✅ Producida |

> La **plantilla en blanco** (Reply 2) es solo texto para copiar. El **ejemplo antes/después** tiene su imagen de apoyo (pieza 2), además del texto del Reply 1.

---

## Pieza 1 — Infografía de la fórmula · `08-S5-infografia_prompts` ✅ Producida

**Tipo de pieza:** infografía vertical con la fórmula desglosada en sus 5 componentes (una tarjeta por pieza, con icono)
**Origen del contenido:** `estructura_prompt.md` + caso COBOL SQLCODE de las sesiones

### Contenido (tal como quedó en la pieza)

| Elemento | Texto |
|----------|-------|
| Logo | Occident — superior izquierda |
| Etiqueta (pill) | Tips y Anuncios \| Prompts — superior derecha |
| Título principal | La fórmula del prompt que funciona |
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT · PROMPTING |
| Subtítulo (fórmula) | Rol + Contexto + Tarea + Restricciones + Formato |
| Tarjeta 1 — Rol | Define desde qué experiencia debe responder. |
| Tarjeta 2 — Contexto | Dale el código, dato o caso sobre el que trabaja. |
| Tarjeta 3 — Tarea | Pide una acción concreta, con un objetivo claro. |
| Tarjeta 4 — Restricciones | Indica límites, reglas y estándares que debe respetar. |
| Tarjeta 5 — Formato | Dile cómo entregar la respuesta para usarla directo. |
| Remate | Las Restricciones son lo que separa: "Algo parecido" de "justo lo que necesitaba". |
| Footer | Estrategia de Adopción · 2026 (con isotipo Occident, inferior derecha) |

> La pieza **no incluye** el ejemplo antes/después — ese va en la pieza 2 (imagen de apoyo). El diseño de esta pieza ya está aprobado; esta tabla registra su contenido para validación de información.

---

## Pieza 2 — Imagen de apoyo del ejemplo · `08-S5-card-contexto` ✅ Producida

**Tipo de pieza:** card comparativa horizontal antes/después — dos paneles (Prompt incompleto vs. Prompt con fórmula), el segundo anotado pieza por pieza
**Origen del contenido:** control de errores tras una sentencia SQL en COBOL — Sesión 2 · G4M/G5M (`ejemplos_practicos_Github-Copilot.md`)
**Acompaña:** el Reply 1 del hilo

### Contenido (tal como quedó en la pieza)

| Elemento | Texto |
|----------|-------|
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT · PROMPTING |
| Etiqueta (pill) | Tips y Anuncios \| Prompting — superior derecha |
| Título principal | El mismo encargo, dos resultados |
| Panel izquierdo — encabezado | Prompt incompleto |
| Panel izquierdo — subtítulo | Añádele el control de errores a esta consulta. |
| Panel izquierdo — texto | GitHub Copilot adivina el estilo, puede salirse de las columnas 7–72 y no sabe a qué variables mover el error. |
| Panel izquierdo — bloque de código | Añádele el control de errores a esta consulta. |
| Panel izquierdo — nota | Sin contexto ni restricciones, GitHub Copilot tiene que adivinar el estilo, las variables y el formato esperado. |
| Panel izquierdo — resultado | Resultado: Genérico, fuera de margen. · Eficiencia: Requiere 3 o 4 reintentos. |
| Panel derecho — encabezado | Prompt con fórmula |
| Panel derecho — subtítulo | Listo para pegar |
| Panel derecho — texto | Al incluir las 5 piezas, se obtiene una respuesta usable a la primera, ahorrando tiempo y tokens. |
| Panel derecho — bloque de código | Actúa como programador COBOL experto en Mainframe. (Rol) · Este programa hace una consulta a DB2 sobre la tabla de pólizas: [pega el bloque SQL] (Contexto). · Genera el control de errores tras la sentencia, evaluando SQLCODE. (Tarea) · Respeta las columnas 7–72, mueve el código de error a WS-[...] y asigna el nombre del párrafo. No modifiques la sentencia SQL. (Restricciones). · Devuélveme solo el bloque de control de errores, listo para pegar. (Formato). |
| Panel derecho — nota | Con rol, contexto, tarea, restricciones y formato, GitHub Copilot entiende qué hacer y cómo entregar una respuesta usable. |
| Panel derecho — resultado | Resultado: Código preciso, respeta variables y estándares de Mainframe. · Eficiencia: Reduce reintentos, mucho más cerca de una respuesta usable. |
| Logo | Occident — inferior derecha |

> El diseño de esta pieza ya está aprobado; esta tabla registra su contenido para validación de información. La plantilla en blanco (Reply 2) no va en esta pieza — es solo texto.
