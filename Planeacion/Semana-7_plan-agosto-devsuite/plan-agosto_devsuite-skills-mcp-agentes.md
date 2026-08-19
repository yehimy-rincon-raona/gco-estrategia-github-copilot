# Propuesta — Plan de agosto: gco-dev-suite (DevSuit → Skills → MCP → Agentes)
> Para presentar en la reunión con GCO del martes 11 de agosto de 2026
> Reemplaza el enfoque de `plan-agosto_propuesta-contenidos-skills-y-booking.md` (serie "solo Skills", 3-4 ago) — el flujo de booking de ese documento sigue vigente y no se toca aquí.
> Fuentes: `Reuniones/seguimientos-semanales/transcripcion_reunion-semanal-GCO-y-raona-04-08-26.md` · `Planeacion/pregunta-equipo-nibaldo_contenido-suite-skills-mcp-agentes.md` · `información-equipo-raona-gco-devsuite.md` (primera respuesta del equipo de Nibaldo) · `material-base_skills-que-son-y-cuando-usarlas.md` · `Planeacion/calendario-republicacion_teams-de-gco.md`
> Estado: **propuesta, pendiente de validar con Nibaldo/Guillermo en la reunión del 11 ago** antes de fijarla en el calendario oficial.

---

## 1. Qué cambió desde el 3-4 de agosto

El 4 de agosto, en la reunión de seguimiento, Nibaldo replanteó el orden de los contenidos de agosto (minuto 4:23 de la transcripción): en vez de arrancar directo con Skills, primero explicar **qué es la suite** como conjunto de herramientas, y desde ahí abrir cada componente — Skills, MCP y Agentes.

El 6 de agosto llegó la primera respuesta real del equipo de Nibaldo: `información-equipo-raona-gco-devsuite.md`. Confirma:
- **Nombre oficial: `gco-dev-suite`** (así, en minúsculas y con guiones — el nombre que usa el propio equipo, distinto de "Copilot Dev Suite", el nombre usado en el guion del Video 04. `[Confirmar con Nibaldo si son la misma herramienta o hay que unificar el nombre en los materiales]`).
- Arquitectura completa: **3 agentes** (coordinador, orquestador de cambios, validador) · **32 skills** agrupadas en 9 áreas · **5 MCPs** (Jira, Confluence, Elastic, DB2, navegador).
- El porqué (los tres problemas que resuelve), los ejemplos de uso diario, y 5 decisiones de diseño (control humano, credenciales locales, telemetría local, etc.).

Este documento responde directamente **6 de las 12 preguntas** que se enviaron el 4 de agosto. Las que siguen sin respuesta están listadas en la sección 5 — no se inventa nada sobre ellas.

---

## 2. El hueco real en el calendario (a fecha de hoy, 10 de agosto)

El plan del 3-4 de agosto proponía 4 slots 100% libres: martes 4, jueves 6, martes 11 y jueves 13 de agosto. **Los dos primeros ya pasaron sin publicarse** — Pub 12 seguía bloqueada esperando la respuesta de Nibaldo, que llegó apenas el 6 de agosto. Quedan disponibles, sin tocar nada del calendario ya congelado (`calendario-republicacion_teams-de-gco.md`):

| Fecha | Canal libre | Qué hay ya fijado ese día |
|-------|-------------|------------------------------|
| **Martes 11 ago** *(mañana — día de esta reunión)* | Anuncios y Tips Ágiles | *(libre)* |
| **Jueves 13 ago** | Anuncios y Tips Ágiles | *(libre)* |
| Martes 18 ago | — | Pub 4 + "Memoria vs. Instrucciones" ya ocupan Anuncios y Tips ese día (2 posts) |
| **Jueves 20 ago** | Anuncios y Tips Ágiles | Pub 5 en Primeros Pasos — canal distinto, sin conflicto |
| **Martes 25 ago** | Anuncios y Tips Ágiles | Pub 6 en Casos de Uso Reales — canal distinto, sin conflicto |
| **Jueves 27 ago** | Anuncios y Tips Ágiles | Pub 7 en Casos de Uso Reales — canal distinto, sin conflicto |
| Mar 1 sep / Jue 3 sep | — | Anuncios y Tips ya ocupado por Pub 8/9 |

**Resultado: 5 fechas reales disponibles** para la nueva serie, usando el mismo patrón que el proyecto ya valida (dos canales distintos, mismo día, sin conflicto) — sin desplazar ni una sola fecha del congelamiento vigente.

---

## 3. Propuesta de secuencia — 5 publicaciones, orden de Nibaldo

Canal: **Anuncios y Tips Ágiles** (mismo canal que ya alojó el primer contenido de Skills del proyecto — tarjeta de Pub 4). Hashtags sugeridos: `#DevSuit #Skills #MCP #Agentes #Fase4`.

| # | Fecha | Tema (orden de Nibaldo) | Título propuesto | Basado en |
|---|-------|---------|-------------------|-----------|
| **Pub 12** | **Mar 11 ago** | 1. DevSuit | "gco-dev-suite: la caja de herramientas que le falta a tu Copilot en GCO" | `información-equipo-raona-gco-devsuite.md` — completo |
| **Pub 13** | **Jue 13 ago** | 2. Skills (1/2) | "¿Qué es una Skill (y qué no es)?" | `material-base_skills-que-son-y-cuando-usarlas.md` — sección 1 |
| **Pub 14** | **Jue 20 ago** *(paralelo Pub 5)* | 2. Skills (2/2) | "La carpeta que le enseña a GitHub Copilot cómo lo hacen aquí" | `material-base_skills...md` — secciones 1.2–1.4, 2.1, 7-8 |
| **Pub 15** | **Mar 25 ago** *(paralelo Pub 6)* | 3. MCP | "Las llaves de los sistemas: los 5 conectores de la gco-dev-suite" | `información-equipo-raona-gco-devsuite.md` — tabla de piezas + Ejemplo 1 |
| **Pub 16** | **Jue 27 ago** *(paralelo Pub 7)* | 4. Agentes | "Los 3 agentes que deciden, ejecutan y validan por ti" | `información-equipo-raona-gco-devsuite.md` — "Los tres agentes" + Ejemplo 2 |

**Renumeración:** esta serie toma **Pub 12–16** — el mismo slot que ya estaba reservado para "Skills + instructions" (Pub 12, sin producir). Sigue el mismo criterio que la excepción documentada en `CLAUDE.md` el 30 jul: se prioriza el contenido que ya tiene material real. **Sujeto a validación con Nibaldo/Guillermo mañana.**

**Lo que queda para una segunda tanda (sin fecha todavía):** el resto del material de Skills (los 5 niveles de personalización, cómo escribir una skill, 8 casos de uso, errores y riesgos — secciones 3, 6, 9-11 del material base) más el proceso de gobernanza de MCP y de propuesta de agentes, en cuanto lleguen esas respuestas. No hay slots libres para ellas hasta que se liberen Anuncios y Tips el 1 o 3 de sep, o se abra un nuevo hueco — no se fijan fechas todavía.

---

## 4. Contenido de cada publicación

### Pub 12 — gco-dev-suite (11 ago)
La idea en una frase: es un paquete que se instala sobre GitHub Copilot y le da las llaves de los sistemas de GCO, los manuales de cómo se hacen aquí las cosas, y las normas de cuándo debe parar y preguntar. Estructura en 3 piezas — agentes (el criterio), skills (el procedimiento), MCPs (el acceso) — con la regla que las une: el agente decide, la skill explica, el conector va a buscar el dato real.
**Pieza gráfica:** infografía de las 3 piezas + los números (3 agentes · 32 skills · 5 MCPs · 6 capas · ~5 min de instalación).

### Pub 13 — ¿Qué es una Skill? (13 ago)
Definición como paquete de conocimiento que enseña a GitHub Copilot a hacer una tarea a la manera del equipo. Qué NO es: ni un prompt guardado, ni documentación pasiva, ni una integración externa.
**Pieza gráfica:** infografía comparativa (skill vs. prompt guardado vs. documentación pasiva).

### Pub 14 — Anatomía y cuándo usar una Skill (20 ago)
La carpeta, el `SKILL.md`, la carga progresiva — con los dos ejemplos reales de la plantilla `copilot-template-gco` (`dotnet-review`, `cobol-analyzer`). Cuándo sí y cuándo no usar una skill.
**Pieza gráfica:** tarjeta con la estructura de carpeta + fragmento real del `SKILL.md`.
⚠️ `[Confirmar con Nibaldo]`: si estas dos skills de ejemplo son parte de las 32 que ya trae la `gco-dev-suite`, o son un ejemplo distinto de la plantilla base.

### Pub 15 — Los 5 conectores MCP (25 ago)
Qué son los MCP en la suite: Jira, Confluence, Elastic, DB2 y navegador. Apoyo en el Ejemplo 1 del documento (investigar un fallo: tres búsquedas en paralelo, un informe consolidado). Principio de diseño: "la base de datos manda" — nunca se supone un dato, siempre se consulta en vivo.
**Pieza gráfica:** infografía de los 5 conectores con la analogía de "las llaves de cada sistema".
⚠️ No se menciona en este post el proceso de aprobación de un MCP nuevo ni qué pasa si alguien instala uno sin autorización — sigue sin respuesta (ver sección 5).

### Pub 16 — Los 3 agentes (27 ago)
Coordinador (puerta de entrada única), orquestador de cambios (reconoce 18 tipos de cambio catalogados, pone las tareas en orden), validador (12 reglas de coherencia, detecta pero no corrige). Apoyo en el Ejemplo 2 (añadir un campo: analiza, propone el plan, espera aprobación, ejecuta, resume).
**Pieza gráfica:** tríptico de los 3 agentes (mismo formato que Casos de Uso Reales).

---

## 5. Lo que sigue sin respuesta — no se inventa

De las 12 preguntas enviadas el 30 de julio / 4 de agosto (`pregunta-equipo-nibaldo_contenido-suite-skills-mcp-agentes.md`), estas siguen abiertas después de la respuesta del 6 de agosto:

| Pregunta original | Estado |
|---|---|
| 1. ¿"gco-dev-suite" es la misma "Copilot Dev Suite" del Video 04? | Sin confirmar — nombres distintos en los dos materiales |
| 5. Proceso real para proponer una Skill nueva | Sin respuesta |
| 6. ¿Alguien desarrolló una Skill propia mostrable? | Sin respuesta |
| 7. Proceso formal para proponer un MCP nuevo (checklist técnico/seguridad) | Sin respuesta |
| 8. ¿Los MCP aprobados son los 4 del Video 04 o hay más? | Discrepancia sin resolver: la respuesta trae 5 (Jira, Confluence, **Elastic**, DB2, **navegador**), el Video 04 menciona 4 (Jira, Confluence, DB2, **SQL**) |
| 9. ¿Qué pasa si alguien instala un MCP sin aprobación? | Sin respuesta |
| 12. ¿Cómo se propone un agente nuevo? | Sin respuesta |

**Propuesta para la reunión:** presentar esto como preguntas de seguimiento directo — la serie Pub 12-16 no depende de tener estas respuestas (usa solo lo que ya está confirmado), pero sí bloquea cualquier post futuro sobre gobernanza de MCP o el proceso de contribución de Skills/Agentes.

---

## 6. Próximos pasos

1. Validar en la reunión del 11 ago: la secuencia Pub 12–16, sus fechas y el cambio de canal (todo el material ya en Anuncios y Tips Ágiles).
2. Enviar seguimiento al equipo de Nibaldo con las 6 preguntas que siguen abiertas (sección 5).
3. Producir las piezas gráficas de la sección 4 — empezando por Pub 12, que se publicaría el mismo día de la reunión.
4. Confirmar si las skills `dotnet-review`/`cobol-analyzer` forman parte de las 32 de la suite, antes de publicar Pub 14.
5. El flujo de booking (`plan-agosto_propuesta-contenidos-skills-y-booking.md`, sección 7) sigue vigente sin cambios — es un eje independiente de esta serie.
