# Resumen de reunión · 18 de agosto de 2026
> Revisión semanal de estrategia de comunicación GitHub Copilot en Teams
> Con: Jonatan Hospital Adriao, Óscar Segura Herrera
> Duración: 15 min 27 s · Fuente: `transcripcion_reunion-seguimiento-semanal_18-08-26.pdf` (transcripción literal de Teams)

---

## Temas

### 1. Publicaciones adelantadas por error — corrección
Yehimy detectó que varios posts programados se publicaron solos (programación automática), sin que fuera la intención — el plan era dejarlos listos en el canal interno de Raona y activarlos manualmente cuando el equipo lo indicara.

- **Acción inmediata:** Yehimy despublica o borra lo que se adelantó, y los vuelve a colocar cuando corresponda, bloque a bloque.
- **Calendario acordado:** la primera semana tras el regreso de vacaciones del equipo de Nibaldo es de **introducción únicamente**. Las publicaciones definitivas se retoman a partir del **14 de septiembre** (segunda quincena).
- Para el contenido de Skills específicamente, Yehimy mencionó activar desde el **15 o 16 de septiembre**.
- Todo el equipo (developers de GCO) ya está agregado al canal desde hace un par de semanas — no es un bloqueante.
- **Principio confirmado:** todo se publica primero en el canal **interno** de Raona para revisión — nunca directo al canal externo — para controlar el orden y evitar fugas.

### 2. Estructura y secuencia de la serie Dev Suite — validada
Yehimy presentó el orden de contenidos ya trabajado con Nibaldo. Jonatan y Óscar lo validaron.

- **Orden confirmado (de lo general a lo específico):**
  1. Visión general de la gco-dev-suite (qué es, la caja de herramientas que le falta a GitHub Copilot)
  2. Skills — qué es y qué no es un skill
  3. Skills — anatomía y cuándo usarlo
  4. MCP — los 5 conectores
  5. Agentes — los que deciden, ejecutan y validan
- **Cifras reafirmadas en la reunión:** 32 skills, **5 MCPs conectados**, 3 agentes. → Esto reconfirma la lista de **5 conectores** como la vigente (Jira, Confluence, Elastic, DB2, navegador), resolviendo la discrepancia que teníamos abierta con el guion del Video 04.
- **Novedad — reparto de posts por tema:** Óscar y Yehimy acordaron que, además del ejemplo práctico por componente, **tanto MCP como Agentes saldrían en 2 publicaciones cada uno** (martes y jueves), no en una sola — igual que ya se hizo con Skills (2 publicaciones: qué es / anatomía).
- Todo esto se está validando primero en el canal interno de Raona, post por post, antes de pasar a la cola de publicación real en Teams GCO.

### 3. Aclaración pendiente — Copilot Memory vs. Copilot Instructions
Óscar señaló que el post ya publicado sobre "Memoria vs. Instrucciones" no queda claro: no se entiende qué es Copilot Memory, cómo se modifica, ni por qué el post mezcla ese concepto (individual) con Copilot Instructions (de equipo).

- **Diagnóstico de Óscar:** el post trata ambos conceptos como si fueran lo mismo o estuvieran al mismo nivel, y no explica cómo interactuar con Copilot Memory en la práctica.
- **Acción acordada:** Yehimy revisa y profundiza el contenido — posiblemente como un **repost anidado dentro del mismo post** (para no duplicar el post original, sino ampliarlo).
- **No se resuelve esta semana** — Yehimy lo habla con Nibaldo cuando regrese de vacaciones, para aclarar el tema antes de escribir la ampliación.
- Óscar se ofreció a dejar el comentario directamente en el canal interno para que quede registrado ahí.

### 4. Material audiovisual — propuesta para validar con el equipo de Nibaldo
Óscar y Jonatan propusieron qué videos priorizar para la serie Dev Suite.

- **Propuesta de Óscar:** un video de **instalación práctica de la gco-dev-suite** + **un ejemplo de uso por cada componente** (una skill, un MCP, un agente) — un caso de uso por cada uno.
- **Matiz de Jonatan:** lo importante no es el paso de instalar (es simple — portal de empresa, clic en instalar), sino que **la gente igual se pierde** — reforzando que el video de instalación sigue teniendo valor aunque el paso técnico sea sencillo.
- **Sugerencia de formato de post (Óscar + Jonatan):** en vez de explicar el proceso de instalación dentro del post, **enlazar a la documentación de instalación en Confluence** — así, si el proceso cambia, el post no necesita editarse nunca.
- Pendiente: confirmar con el equipo de Nibaldo qué material de video pueden grabar cuando regresen de vacaciones.

---

## Tareas de seguimiento

| Tarea | Responsable |
|-------|-------------|
| Despublicar/borrar los posts adelantados por error y reactivarlos manualmente cuando corresponda | Yehimy |
| Revisar y profundizar la diferencia entre Copilot Memory y Copilot Instructions (repost anidado) — hablarlo con Nibaldo primero | Yehimy |
| Validar y corregir el material en el canal interno según los comentarios recibidos, antes de pasar a publicación definitiva | Yehimy |
| Evaluar y coordinar con el equipo de Nibaldo los videos de instalación + un ejemplo de uso por componente (skill, MCP, agente) | Yehimy |
| Incluir enlace a Confluence para la instalación de la gco-dev-suite, en vez de explicar el paso a paso dentro del post | Yehimy |

---

## Relevante para la reorganización de la serie Dev Suite (Pub 12 en adelante)

- ✅ **Blocker de conteo de MCP resuelto**: la reunión reafirma 5 conectores (Jira, Confluence, Elastic, DB2, navegador) como la cifra vigente — ya no depende de una confirmación adicional de Nibaldo.
- ⚠️ **Cambio de alcance no reflejado todavía en el plan**: MCP y Agentes pasan de "1 post cada uno" a **"2 posts cada uno"** — el plan vigente (`plan-agosto_devsuite-skills-mcp-agentes.md`) solo tiene Pub 15 (MCP, 1 post) y Pub 16 (Agentes, 1 post). Falta decidir cómo se acomoda esto en la numeración.
- El orden temático sigue siendo: DevSuite → Skills (qué es / anatomía) → MCP → Agentes. No se mencionó ningún cambio de orden.
