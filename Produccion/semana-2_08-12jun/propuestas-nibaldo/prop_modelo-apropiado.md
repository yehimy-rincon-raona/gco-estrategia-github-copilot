# Propuesta de contenido — Modelo apropiado para una tarea
> Eje: Novedades, Actualizaciones y Tips de uso
> Fase: 2 · Entorno Nativo y Primeros Pasos
> Propuesto por: Nibaldo · 5 junio 2026
> Estado: ✅ Validado con sesiones Nibaldo · pendiente confirmación ubicación exacta en Visual Studio

---

## Concepto

GitHub Copilot permite seleccionar el modelo de IA que responde a tus preguntas. Elegir el modelo adecuado según el tipo de tarea no es solo una cuestión de calidad: impacta directamente en el consumo de tokens y en la velocidad de respuesta.

Nibaldo lo dice sin rodeos:

> "Si tú ocupas un modelo Premium para todas tus tareas siempre, yo te aseguro que en dos días te vas a quedar sin tokens."

**El mensaje central para los developers de GCO:**
No todas las preguntas necesitan el modelo más potente. Saber cuándo usar cada uno es un hábito de eficiencia.

---

## Cómo funciona — según Nibaldo

### Modelos estándar vs modelos premium

| Tipo | Indicador | Qué dice Nibaldo |
|------|-----------|------------------|
| **Estándar** | `0x` | No consume tokens adicionales de la bolsa premium. Sirve para tareas genéricas o que no requieren análisis profundo. |
| **Premium** | `1x` o `3x` | Consume la bolsa de tokens. Cuanto mayor el multiplicador, mayor consumo. |

> "Los modelos estándar sirven para tareas más genéricas o que no requieren análisis profundo."
> "Si te quedas sin tokens, puedes cambiar de modelo."

La bolsa de tokens premium **se renueva el primer día de cada mes**.

### Qué modelo usar según la tarea

| Tarea | Modelo sugerido | Por qué |
|-------|-----------------|---------|
| Explicar un error simple | Estándar | No requiere razonamiento complejo |
| Generar documentación básica | Estándar | Tarea repetible y directa |
| Resumir o explicar un bloque de código | Estándar | Lectura y síntesis, no análisis profundo |
| Completar una línea o renombrar una variable | Estándar | Tarea simple, respuesta inmediata |
| Analizar un bug complejo en COBOL / DB2 | Premium (si el estándar no alcanza) | Requiere razonamiento y contexto |
| Refactor delicado en .NET o PL/SQL | Premium | Cambios que necesitan más precisión |
| Análisis de impacto con varios archivos | Premium o modelo con más contexto | El contexto es grande y el riesgo también |
| Interpretar y proponer corrección a SQLCODE desconocido | Premium | Requiere base de conocimiento técnica profunda |

> "Para una tarea robusta, importante o delicada, probablemente usaría un modelo que razone más. Pero para generar documentación quizá usaría uno más sencillo."

### El "modo auto" (disponible en VS Code)

En VS Code existe un **modo auto** que selecciona el modelo según la dificultad estimada de la tarea. Evita que el usuario tenga que decidir siempre manualmente.

> "El modo auto lo que hace es escoger el modelo de acuerdo al nivel de dificultad de la tarea que tú le estás dando."

Útil como nota en el post: presentarlo como ayuda, no como sustituto de entender cómo funcionan los modelos.

⚠️ Disponibilidad en Visual Studio pendiente de confirmar.

### El nivel de razonamiento también importa

Más allá del modelo, en la terminal Nibaldo muestra que se puede controlar el **nivel de razonamiento**: `low`, `medium`, `high`, `extra high`. Cuanto más alto, más vueltas da el modelo y más tokens consume.

> "Si le estoy preguntando algo pequeño, dejo el razonamiento en low porque no necesito una respuesta hiper elaborada."

**Idea clave:** no solo importa qué modelo usas, sino cuánto razonamiento le pides.

---

## Borrador del post para Teams

**Canal sugerido:** Anuncios y Tips Ágiles
**Formato:** Tip práctico (3 puntos)

---

📣 **¿Siempre usas el mismo modelo en GitHub Copilot? Puede que estés gastando más de lo necesario.**

En Copilot no todos los modelos cuestan lo mismo. Los modelos premium (marcados como 1x o 3x) consumen tu bolsa de tokens. Los estándar (0x) no.

La idea no es usar siempre el más potente — es usar el adecuado para lo que necesitas ahora.

**3 criterios para elegir:**

- **Tarea simple → modelo estándar.** Explicar un error, documentar un método, resumir código.
- **Tarea compleja → modelo premium.** Refactor delicado, análisis de impacto, lógica COBOL o DB2 que requiere más razonamiento.
- **¿No sabes cuál?** Empieza con el estándar. Si la respuesta no alcanza, sube de modelo.

Y recuerda: si te quedas sin tokens premium, puedes usar el estándar. La bolsa se renueva el primer día de cada mes.

👉 Antes de tu próxima consulta, mira qué modelo tienes seleccionado.

---

## Brief visual (Figma)

**Tipo de pieza:** tarjeta comparativa — dos columnas (tarea simple / tarea compleja) + dato sobre renovación

| Elemento | Texto |
|----------|-------|
| Franja canal | 📣 Anuncios y Tips Ágiles |
| Pill fase | Fase 2 · Entorno Nativo |
| Título | Elige el modelo según la tarea |
| Subtítulo | No todas las preguntas necesitan el mismo motor |
| Columna A — Tarea simple | Estándar (0x) · explicar error · documentar · renombrar · resumir |
| Columna B — Tarea compleja | Premium (1x/3x) · refactor COBOL · análisis impacto · SQLCODE difícil |
| Dato adicional | La bolsa se renueva cada 1º de mes |
| CTA | 👉 Mira qué modelo tienes antes de preguntar |
| Footer | Estrategia de Adopción · 2026 |

**Specs Figma:** 1080×1350px · fondo blanco · `#DC0028` para encabezados de columna premium · texto negro sobre blanco · columna estándar en gris claro

---

## Estado del checklist

- [x] **¿Qué tipos de modelos existen en Copilot?** — Estándar (0x) y premium (1x, 3x). Los premium consumen bolsa mensual de tokens.
- [x] **¿Cómo elegir según la tarea?** — Estándar para tareas simples y recurrentes. Premium para razonamiento complejo, refactor delicado o análisis de impacto.
- [x] **¿Qué pasa si se agotan los tokens premium?** — Cambiar a modelo estándar. La bolsa se renueva el 1 de cada mes.
- [x] **¿Existe modo automático de selección?** — Sí, en VS Code. En Visual Studio pendiente confirmar.
- [x] **Ejemplos para el stack de GCO** — COBOL/DB2/PL/SQL refactor delicado = premium. Documentar método simple = estándar.
- [ ] **Confirmar nombres exactos de modelos disponibles en la licencia de GCO** — Nibaldo mencionó GPT 4.1 (estándar) y Claude Opus 4.6 (premium) como ejemplos, pero no confirmó la lista exacta para GCO. Pendiente.
- [ ] **Confirmar cómo se cambia el modelo y el nivel de razonamiento en Visual Studio** — Nibaldo lo mostró en VS Code y terminal, no en Visual Studio específicamente. Pendiente.