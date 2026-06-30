# Canal Anuncios y Tips — Pub 8 · La fórmula del prompt que funciona (parte 1)
> Canal: Anuncios y Tips Ágiles · Tipo: Tip de uso
> ⏱️ **Producción: Semana 5 (trabajo del 30 jun)** · **Publicación: Semana 5 — martes 30 jun (fecha a confirmar en la reunión)**
> Estado: 📝 Brief listo — presentado en la reunión del 30 jun como plan de la semana
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

La pieza que más se olvida es **Restricciones** — y es la que evita que te devuelva algo que no sirve.

👉 En tu próximo prompt, antes de enviarlo, revisa: ¿están las cinco?

---

## Qué va en el post (texto) y qué va en la pieza gráfica

**En el texto del post (Teams):**
- El cuerpo de arriba: la fórmula + qué es cada pieza + el aviso sobre Restricciones + CTA.
- **Reply 1:** el mismo prompt mal y bien escrito (antes/después) con un caso real de GCO.
- **Reply 2 (opcional):** la plantilla en blanco para copiar.

**En la pieza gráfica (infografía o card de fórmula):**
- La fórmula `Rol + Contexto + Tarea + Restricciones + Formato` como elemento central.
- Una línea por pieza explicando qué aporta.
- **No lleva el ejemplo completo** — ese va en el texto, para que el equipo lo copie.

> Regla: la gráfica fija la fórmula de un vistazo; el texto la aterriza con el ejemplo copiable. No se duplica el contenido entre ambos.

---

## Ejemplo real para el equipo — antes y después

> Caso base: control de errores tras una sentencia SQL en COBOL (Sesión 2 · G4M/G5M). El developer reemplaza lo que está entre corchetes.

**Prompt incompleto (lo que muchos escriben):**
```
Añádele el control de errores a esta consulta.
```
Resultado: GitHub Copilot adivina el estilo, puede salirse de las columnas 7–72 y no sabe a qué variables mover el error.

**Prompt con la fórmula completa:**
```
Actúa como programador COBOL experto en Mainframe.                 ← Rol
Este programa hace una consulta a DB2 sobre la tabla de pólizas:    ← Contexto
[pega el bloque SQL]
Genera el control de errores tras la sentencia, evaluando SQLCODE.  ← Tarea
Respeta las columnas 7–72, mueve el código de error a WS-[...] y     ← Restricciones
asigna el nombre del párrafo. No modifiques la sentencia SQL.
Devuélveme solo el bloque de control de errores, listo para pegar.  ← Formato
```

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

Mira el mismo encargo escrito de dos formas:

Incompleto → `Añádele el control de errores a esta consulta.`
Te devuelve algo genérico que igual se sale de las columnas 7–72.

Con la fórmula → le das el **Rol** (COBOL experto), el **Contexto** (el bloque SQL), la **Tarea** (control de errores con SQLCODE), las **Restricciones** (columnas 7–72, a qué variables mover el error) y el **Formato** (solo el bloque listo para pegar).

Mismo modelo, respuesta usable a la primera.

→ Adjuntar: infografía/card de la fórmula

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

| # | Nombre de archivo | Tipo | Tema |
|---|-------------------|------|------|
| 1 | `S5-Card_pub8-formula` | card / infografía · 1080×1350 px (a confirmar formato con Yehimy) | La fórmula de 5 piezas: Rol + Contexto + Tarea + Restricciones + Formato |

> El **ejemplo completo y la plantilla** no van en la pieza gráfica: viven en el texto del post (Reply 1 y Reply 2) para que el equipo pueda copiarlos.

---

## Brief — `S5-Card_pub8-formula` · card de fórmula

**Tipo de pieza:** card / infografía — panel único con la fórmula como protagonista
**Origen del contenido:** `estructura_prompt.md` + caso COBOL SQLCODE de las sesiones

### Contenido

| Elemento | Texto |
|----------|-------|
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT · PROMPTING |
| Título principal | La fórmula del prompt que funciona |
| Fórmula (elemento central) | Rol + Contexto + Tarea + Restricciones + Formato |
| Pieza 1 — Rol | Quién quieres que sea. |
| Pieza 2 — Contexto | El código o el dato sobre el que trabaja. |
| Pieza 3 — Tarea | Qué quieres, un solo objetivo claro. |
| Pieza 4 — Restricciones | Los límites y las reglas que debe respetar. |
| Pieza 5 — Formato | Cómo quieres la respuesta. |
| Remate | La pieza que más se olvida es Restricciones. |
| Logo | Occident — inferior derecha |

### Especificaciones Figma (referencia — el diseño final lo define Yehimy)

- **Formato:** 1080×1350 px para Teams
- **Fondo:** blanco — sin fondos negros ni rojos
- **Eyebrow:** rojo `#DC0028` · uppercase · GCO Sans pequeño
- **Título principal:** negro · CO Bold · display
- **Fórmula central:** las 5 palabras con los signos `+` en rojo `#DC0028` como acento; las palabras en negro CO Bold
- **Las 5 piezas:** cada una con su nombre en CO Bold + la explicación en GCO Sans gris
- **Remate "Restricciones":** destacado con rojo `#DC0028` como acento
- **Logo Occident:** inferior derecha
- **Tipografía:** CO para títulos · GCO Sans para texto corriente
- **Marca:** rojo `#DC0028` solo como acento (eyebrow, signos `+`, remate)
