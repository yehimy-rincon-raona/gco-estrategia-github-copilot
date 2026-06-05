# Canal Anuncios y Tips Ágiles — Pub 4 · Fórmula del prompt
> Canal: Anuncios y Tips Ágiles · Fecha: Jueves 12 junio · Tipo: Tip práctico
> Estado: Brief listo — pendiente aprobación Nibaldo · lunes 8 junio

---

## Objetivo de esta publicación

Dar la herramienta más básica y más poderosa para usar Copilot: la fórmula del prompt.

Copilot responde mejor cuando el desarrollador le da tres cosas: **quién es Copilot en este contexto**, **cuál es la situación** y **qué necesita exactamente**. Sin eso, las respuestas son genéricas.

Este tip es directo, aplicable en el mismo momento de leer el post y funciona en cualquier tecnología (COBOL, .NET, DB2, PL/SQL).

---

## Post listo para Teams

**Asunto:** `📣 El prompt que funciona siempre: 3 partes, una respuesta útil`

---

📣 **¿Las respuestas de Copilot te parecen genéricas? Prueba esta fórmula.**

La diferencia entre una respuesta mediocre y una útil casi siempre está en cómo se pregunta.

**La fórmula: Rol + Contexto + Tarea**

> *"Eres un experto en [tecnología]. Tengo [situación concreta]. Necesito [qué exactamente]."*

**Ejemplo real — COBOL:**
> *"Eres un experto en COBOL para mainframe. Tengo un `PERFORM UNTIL` que controla el flujo de procesamiento de pólizas. Explícame qué hace en términos de negocio, sin tecnicismos."*

**Ejemplo real — DB2:**
> *"Eres un experto en DB2. Tengo una consulta con múltiples `CASE` anidados que tarda demasiado. Propón cómo simplificarla manteniendo el mismo resultado."*

Cuanto más contexto le das, más útil es la respuesta.

👉 **Pruébalo en tu próxima pregunta a Copilot.**

---

## Tono de comunicación

Práctico y directo. Este es el tipo de tip que se lee en 30 segundos y se aplica inmediatamente. No necesita explicación teórica sobre LLMs — solo la fórmula y dos ejemplos reales.

Claves de tono:
- La pregunta de apertura identifica el problema real ("¿las respuestas te parecen genéricas?")
- Los ejemplos son con tecnologías reales de GCO: COBOL y DB2
- El CTA es inmediato: "pruébalo en tu próxima pregunta"

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Fórmula Rol + Contexto + Tarea | `plan_de_capacitacion.md` · Capítulo 1 · Prompting Técnico Estructurado |
| Ejemplo COBOL `PERFORM UNTIL` | `ejemplos_practicos_Github-Copilot.md` · Módulo 1 · Sesión 1 G4M |
| Ejemplo DB2 `CASE` anidados | `ejemplos_practicos_Github-Copilot.md` · Módulo 1 · Sesión 1 G4M |

---

## Infografía / pieza gráfica

**Tipo de pieza:** tip formato tarjeta — fórmula visual

### Estructura visual

| Elemento | Texto |
|----------|-------|
| Franja canal | 📣 Anuncios y Tips Ágiles |
| Pill fase | Fase 1 · Concienciación |
| Título | La fórmula del prompt que funciona siempre |
| Subtítulo | 3 partes. Una respuesta útil. |
| Bloque fórmula | ROL + CONTEXTO + TAREA (visual destacado, cada parte en bloque separado) |
| Ejemplo 1 | Eres un experto en COBOL... (truncado visualmente) |
| Ejemplo 2 | Eres un experto en DB2... (truncado visualmente) |
| CTA | 👉 Pruébalo en tu próxima pregunta |
| Footer | Estrategia de Adopción · 2026 |

### Especificaciones para Figma
- Fondo: blanco
- Franja canal: `#DC0028` + texto blanco + icono 📣
- Pill fase: gris claro + texto `#DC0028`
- Bloques ROL / CONTEXTO / TAREA: tres rectángulos con color de acento (rojo borde o fondo gris claro), texto bold negro
- Ejemplos: fondo gris muy claro, tipografía monospace o regular en gris oscuro (simular terminal/chat)
- Tipografía: Inter o Segoe UI (hasta confirmar design system Occident)
