# Propuesta de contenido — Referencias de contexto para optimizar el uso de Copilot
> Eje: Novedades, Actualizaciones y Tips de uso
> Fase: 2 · Entorno Nativo y Primeros Pasos
> Propuesto por: Nibaldo · 5 junio 2026
> Estado: ✅ Validado con sesiones Nibaldo · pendiente confirmación disponibilidad en Visual Studio

---

## ⚠️ Nota importante — aclaración de concepto

En las sesiones, **Nibaldo NO presenta Skills como una herramienta de optimización directa de tokens**. Lo que sí presenta así son las **referencias de contexto** (`#selection`, `#file`, `@workspace`, clase, método, líneas).

Hay dos capas distintas:

| Capa | Qué es | Fase |
|------|--------|------|
| **Referencias de contexto** (`#file`, `#selection`, clase, método) | Formas de decirle a Copilot exactamente qué mirar, sin copiar y pegar código en el chat. Reduce tokens y mejora la respuesta. | **Fase 2 — este contenido** |
| **Skills** (capacidades de agentes) | Habilidades específicas que se crean para agentes avanzados. Parte de un ecosistema con MCP, prompts y agentes. Para flujos Jira/Confluence/COBOL avanzados. | **Fase 4 — no publicar aún** |

Este prop cubre la **Fase 2**: cómo referenciar el contexto correcto. El contenido de Skills avanzados queda para más adelante.

---

## Concepto

Cuando el developer copia y pega código directamente en el chat, consume tokens innecesariamente y contamina la ventana de contexto con información que ya estaba disponible. GitHub Copilot tiene formas de referenciar archivos, selecciones y métodos directamente — sin copiar ni pegar.

> "Con esto yo puedo limitar la cantidad de tokens a consumir. Puedo hacer una búsqueda más inteligente y más rápida. Puedo hacer que la solución se enfoque."

**El mensaje central para los developers de GCO:**
No rellenes el chat con código copiado. Deja que Copilot lo lea directamente desde donde ya está.

---

## Cómo funcionan las referencias — según Nibaldo

### Tipos de referencia disponibles

| Referencia | Qué hace | Cuándo usarla |
|------------|----------|---------------|
| `#selection` | Copilot ve el código seleccionado en el editor | Cuando el problema o la pregunta afecta a un bloque específico |
| `#file` | Referencia un archivo completo sin copiarlo | Cuando la pregunta afecta a todo el fichero (COBOL, .NET, SQL) |
| Clase | Referencia una clase específica | Cuando el problema está acotado a una clase, sin necesitar todo el archivo |
| Método | Referencia un método específico | La forma más quirúrgica — acota al máximo y ahorra más contexto |
| Líneas concretas | Pide a Copilot revisar un rango de líneas | Cuando sabes exactamente dónde está el problema |
| `@workspace` | Copilot busca en todo el proyecto | Solo cuando no sabes dónde está el problema — no como primer recurso |

> "Corrige el bug que se encuentra en el archivo. Revisa específicamente dentro de las líneas 1007 y 1024."
> "Yo puedo referenciar clase, puedo referenciar métodos, con la almohadilla puedo referenciar archivos."

### El orden lógico de referencia

**Empieza acotado. Sube solo si no alcanza.**

1. `#selection` o líneas concretas → lo más quirúrgico
2. Método o clase → si el problema está en esa unidad
3. `#file` → si afecta a todo el archivo
4. `@workspace` → solo cuando genuinamente no sabes dónde está

> "`@workspace` sirve cuando sabes que tienes un problema, pero no sabes dónde está."

### Por qué importa para los developers de GCO

Un developer de COBOL no debería cargar 20 programas para preguntarle a Copilot por un SQLCODE que falla en un módulo específico.

**Ejemplo práctico:**
> ❌ "Revisa toda la solución y dime por qué falla."
> ✅ "Revisa este método `#selection` y compáralo con este archivo `#file` para detectar por qué falla el SQLCODE -803."

La segunda pregunta es más rápida, consume menos contexto y da una respuesta más enfocada.

---

## Borrador del post para Teams

**Canal sugerido:** Primeros Pasos con GitHub Copilot
**Formato:** Tip práctico — 3 referencias, 3 situaciones

---

🔍 **¿Copias y pegas código en el chat para que Copilot lo entienda? Hay una forma más precisa.**

Cada vez que copias código en el chat, le das a Copilot más información de la que necesita — y eso hace más lenta y menos enfocada la respuesta.

Copilot puede leer directamente desde donde ya está el código.

**3 referencias que cambian el resultado:**

- **`#selection`** — selecciona un bloque y Copilot lo ve directamente. Sin copiar, sin pegar.
- **`#file`** — referencia un archivo completo. Útil cuando la pregunta afecta todo el fichero.
- **Método o clase** — la opción más quirúrgica. Apunta exactamente donde está el problema.

Cuanto más acotada la referencia, más enfocada la respuesta.

👉 Prueba: en tu próxima pregunta, en vez de copiar el código, selecciónalo y usa `#selection`.

---

## Brief visual (Figma)

**Tipo de pieza:** guía de referencia rápida — niveles de acotación del contexto

| Elemento | Texto |
|----------|-------|
| Franja canal | 🔍 Primeros Pasos con GitHub Copilot |
| Pill fase | Fase 2 · Entorno Nativo |
| Título | Dale a Copilot solo lo que necesita |
| Subtítulo | Cuanto más acotada la referencia, mejor la respuesta |
| Bloque 1 — más acotado | `#selection` · Método · Líneas · para un bloque específico |
| Bloque 2 — intermedio | `#file` · Clase · para un archivo o unidad |
| Bloque 3 — más amplio | `@workspace` · solo cuando no sabes dónde está el problema |
| CTA | 👉 Empieza siempre por lo más acotado |
| Footer | Estrategia de Adopción · 2026 |

**Specs Figma:** 1080×1350px · fondo blanco · `#DC0028` para el nivel más acotado (mejor práctica) · degradado hacia gris para los niveles más amplios · tipografía monospace para los comandos

---

## Estado del checklist

- [x] **¿Skills optimizan tokens directamente?** — No. Nibaldo no lo plantea así. La optimización directa viene de referencias de contexto, elección de modelo y apertura de hilos nuevos.
- [x] **¿Qué referencias de contexto existen?** — `#selection`, `#file`, clase, método, líneas específicas, `@workspace`.
- [x] **¿Cuándo usar `@workspace`?** — Solo cuando no sabes dónde está el problema. No como primer recurso.
- [x] **Ejemplo para el stack de GCO** — Método COBOL + SQLCODE específico: referenciar el método o las líneas exactas, no toda la solución.
- [ ] **Confirmar disponibilidad de estas referencias en Visual Studio vs VS Code** — Nibaldo las mostró principalmente en VS Code. En Visual Studio puede haber diferencias. Pendiente confirmar con Nibaldo.
- [ ] **¿`@workspace` funciona en VS con proyectos COBOL / soluciones grandes?** — No confirmado. Pendiente.

---

## Nota para Fase 4 — Skills avanzados

Cuando el equipo tenga consolidado el uso básico de Copilot (Fase 2 y 3), el contenido de Skills puede salir como:

**Mensaje para Fase 4:**
> Un Skill es una habilidad específica que le das a un agente. No es un prompt — es una capacidad que empaquetas para que el agente sepa hacer algo concreto: consultar documentación de Confluence, aplicar reglas backend .NET, apoyar un flujo COBOL específico. En GCO esto cobra sentido cuando ya tengamos flujos propios con Jira y Confluence integrados.

Nibaldo al respecto:
> "Me interesa que sepan qué hay. Qué cosas tiene este GitHub Copilot y qué cosas se pueden llegar a hacer."
> "El objetivo nunca fue que salieran expertos en MCP y agentes. Me interesa que sepan que existen."