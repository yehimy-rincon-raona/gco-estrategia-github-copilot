# Propuesta de contenido — Modelo apropiado para una tarea
> Eje: Novedades, Actualizaciones y Tips de uso
> Fase: 2 · Entorno Nativo y Primeros Pasos
> Propuesto por: Nibaldo · 5 junio 2026
> Estado: 📋 Propuesta — pendiente validación técnica Nibaldo

---

## Concepto

GitHub Copilot permite seleccionar el modelo de IA que responde a tus preguntas. Elegir el modelo adecuado según el tipo de tarea no es solo una cuestión de calidad: impacta directamente en el consumo de tokens y en la velocidad de respuesta.

**El mensaje central para los developers de GCO:**
No todas las preguntas necesitan el modelo más potente. Saber cuándo usar cada uno es un hábito de eficiencia.

---

## Ejemplos de uso (pendiente validación Nibaldo)

| Tipo de tarea | Modelo recomendado | Por qué |
|--------------|-------------------|---------|
| Explicar un bloque COBOL largo | [PENDIENTE — confirmar con Nibaldo] | Requiere razonamiento complejo |
| Autocompletar una línea en .NET | [PENDIENTE — confirmar con Nibaldo] | Tarea sencilla, respuesta rápida |
| Consulta de documentación DB2 | [PENDIENTE — confirmar con Nibaldo] | [PENDIENTE] |

---

## Borrador del post para Teams

**Canal sugerido:** Anuncios y Tips Ágiles
**Formato:** Tip práctico (3 puntos)

---

📣 **¿Siempre usas el mismo modelo en GitHub Copilot? Puede que estés gastando más de lo necesario.**

GitHub Copilot te deja elegir el modelo que responde. La elección importa: un modelo más ligero para tareas simples es más rápido y consume menos. Uno más potente para razonamiento complejo da mejores resultados.

**3 criterios para elegir:**

- **Tarea simple, modelo rápido:** completar una línea, renombrar una variable, generar un comentario básico.
- **Tarea compleja, modelo avanzado:** explicar un módulo heredado, depurar una query con múltiples `JOIN`, proponer refactorizaciones.
- **¿No sabes cuál?** Empieza con el que tienes por defecto y cambia si la respuesta no es suficiente.

👉 [PENDIENTE — añadir dónde se cambia el modelo en Visual Studio / VS Code tras confirmar con Nibaldo]

---

## Brief visual (Figma)

**Tipo de pieza:** tarjeta comparativa — dos columnas (tarea simple vs. tarea compleja)

| Elemento | Texto |
|----------|-------|
| Franja canal | 📣 Anuncios y Tips Ágiles |
| Pill fase | Fase 2 · Entorno Nativo |
| Título | Elige el modelo según la tarea |
| Subtítulo | No todas las preguntas necesitan el mismo motor |
| Columna A | Tarea simple → modelo rápido (ejemplos) |
| Columna B | Tarea compleja → modelo avanzado (ejemplos) |
| CTA | 👉 Cámbialo desde [ubicación — pendiente Nibaldo] |
| Footer | Estrategia de Adopción · 2026 |

**Specs Figma:** 1080×1350px · fondo blanco · `#DC0028` para encabezados de columna · texto negro

---

## Qué necesito de Nibaldo para completar este brief

- [ ] Confirmar qué modelos tiene disponibles GCO en GitHub Copilot (nombres exactos)
- [ ] Confirmar cómo se cambia el modelo en Visual Studio (menú o selector exacto)
- [ ] Validar o corregir la tabla de ejemplos por tipo de tarea
- [ ] Ejemplo real de GCO donde el cambio de modelo marcó diferencia (si existe)
