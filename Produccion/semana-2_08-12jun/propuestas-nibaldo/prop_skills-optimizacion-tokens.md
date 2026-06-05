# Propuesta de contenido — Skills para optimización de uso de tokens
> Eje: Novedades, Actualizaciones y Tips de uso
> Fase: 2 · Entorno Nativo y Primeros Pasos
> Propuesto por: Nibaldo · 5 junio 2026
> Estado: 📋 Propuesta — pendiente validación técnica Nibaldo

---

## Concepto

GitHub Copilot tiene skills (capacidades o comandos especializados) que le permiten hacer cosas concretas sin necesidad de que el developer copie y pegue contexto en el chat. Usarlos bien significa menos texto en el prompt, menos tokens consumidos y respuestas más precisas.

**El mensaje central para los developers de GCO:**
No rellenes el chat con código copiado. Deja que GitHub Copilot lo lea directamente con las herramientas adecuadas.

---

## Ejemplos de skills (pendiente validación Nibaldo)

| Skill / Referencia | Qué hace | Cuándo usarlo |
|-------------------|----------|---------------|
| `#selection` | Le dice a Copilot que mire el código seleccionado | Cuando quieres explicar o depurar un bloque específico |
| `#file` | Referencia un archivo completo sin copiarlo | Cuando la pregunta afecta a todo un fichero COBOL o .NET |
| `@workspace` | Copilot busca en todo el proyecto | Cuando la pregunta involucra múltiples ficheros o dependencias |
| [PENDIENTE] | [Skills adicionales que Nibaldo quiera incluir] | [PENDIENTE] |

---

## Borrador del post para Teams

**Canal sugerido:** Primeros Pasos con GitHub Copilot
**Formato:** Tip práctico — 3 comandos, 3 situaciones

---

🪡 **¿Copias y pegas código en el chat para que GitHub Copilot lo entienda? Hay una forma mejor.**

Cada vez que copias código en el chat, consumes tokens innecesariamente. GitHub Copilot tiene referencias directas que le dicen exactamente dónde mirar.

**3 referencias que te ahorran tiempo y tokens:**

- **`#selection`** — selecciona un bloque y Copilot lo ve directamente. Sin copiar, sin pegar.
- **`#file`** — referencia un archivo completo. Útil cuando la pregunta afecta a todo el fichero.
- **`@workspace`** — Copilot busca en todo el proyecto. Para preguntas que cruzan varios archivos.

Menos texto en el prompt = respuesta más limpia y más rápida.

👉 Prueba `#selection` en tu próxima pregunta sobre código heredado.

---

## Brief visual (Figma)

**Tipo de pieza:** guía rápida de referencia — 3 bloques con comando y situación de uso

| Elemento | Texto |
|----------|-------|
| Franja canal | 🪡 Primeros Pasos con GitHub Copilot |
| Pill fase | Fase 2 · Entorno Nativo |
| Título | 3 referencias que usan menos tokens |
| Subtítulo | Deja que Copilot lea el código — no lo copies en el chat |
| Bloque 1 | `#selection` · para un bloque específico |
| Bloque 2 | `#file` · para un archivo completo |
| Bloque 3 | `@workspace` · para todo el proyecto |
| CTA | 👉 Pruébalo en tu próxima pregunta |
| Footer | Estrategia de Adopción · 2026 |

**Specs Figma:** 1080×1350px · fondo blanco · `#DC0028` · tipografía monospace para los comandos (`#selection`, `#file`, `@workspace`)

---

## Qué necesito de Nibaldo para completar este brief

- [ ] Confirmar qué skills / referencias están disponibles en Visual Studio (vs. VS Code — pueden diferir)
- [ ] Añadir cualquier skill adicional relevante para el entorno de GCO
- [ ] Validar que `@workspace` funciona en Visual Studio con proyectos COBOL/DB2
- [ ] Ejemplo real de cuando el uso de skills evitó que un developer tuviera que copiar contexto manualmente
