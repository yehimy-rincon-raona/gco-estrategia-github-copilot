# Canal Anuncios y Tips — Pub 12 · gco-dev-suite: qué es y por qué existe
> Canal: Anuncios y Tips Ágiles · Tipo: Anuncio de herramienta (apertura de serie)
> ⏱️ **Semana de producción: 10-14 ago** (trabajo hecho el 14 ago — este es el material que correspondía producir esta semana)
> 📍 **Teams GCO: sigue congelado, sin fecha real.** "Mar 11 ago" es la fecha del plan original, no un compromiso de publicación — se confirma (o cambia) en la reunión del 18 ago.
> 📍 **Próximo destino: Teams Raona** (visibilidad/prueba, mismo tratamiento que Pub 10 y Pub 11) — mismo tratamiento que Pub 10 y Pub 11. No se publica en Teams GCO hasta que se levante el congelamiento.
> Estado: 🔄 **Las 4 piezas gráficas ya están producidas y cargadas en Teams Raona** (captura: `Produccion/imagenes_teams/01_anuncios-y-tips-agiles/borrador-pub-12_gco-dev-suite_composicion-teams-raona.png`) — el post queda como **borrador cargado, pendiente de que Yehimy presione "Publicar en el canal"** · falta validar con Nibaldo/Guillermo
> Fuente: `Conocimiento/temas_mes-agosto/información-equipo-raona-gco-devsuite.md` (primera respuesta real del equipo de Nibaldo, 6 ago 2026)
> Plan: `Planeacion/Semana-7_plan-agosto-devsuite/plan-agosto_devsuite-skills-mcp-agentes.md` — Pub 12, sección 4

---

## Objetivo de esta publicación

Abrir la serie de agosto presentando la **gco-dev-suite** como conjunto — antes de entrar en cada pieza por separado (Skills en Pub 13-14, MCP en Pub 15, Agentes en Pub 16). La idea a instalar: no es una IA nueva, es todo lo que había que ponerle a la que ya existe para que sepa trabajar como se trabaja en GCO.

**Por qué este orden:** fue decisión de Nibaldo en la reunión del 4 de agosto — explicar primero la suite como conjunto, y desde ahí abrir cada componente. Antes de esto, el equipo no había tenido ningún anuncio formal de esta herramienta.

---

## Post listo para Teams

**Asunto:** `🧰 gco-dev-suite: la caja de herramientas que le falta a tu GitHub Copilot en GCO`

---

🧰 **gco-dev-suite: la caja de herramientas que le falta a tu GitHub Copilot en GCO**

GitHub Copilot sabe programar. Lo que no sabía era cómo se hacen las cosas en GCO: no conocía las convenciones internas, no podía consultar los sistemas reales ni distinguía un cambio pequeño de uno que arrastra media plataforma.

La gco-dev-suite es lo que le da esas tres cosas: dónde está la información, cómo se hace aquí y cuándo debe parar a preguntar. Tres piezas, cada una con un trabajo distinto:

- **Agentes (3):** deciden qué hay que hacer y en qué orden.
- **Skills (32):** explican cómo se hace cada tarea, a la manera de GCO.
- **MCP (5):** conectan de verdad con Jira, Confluence, Elastic, DB2 y el navegador.

La regla que las une: el agente decide, la skill explica, el conector busca el dato real. Nada duplicado.

👉 Guarda estas 3 tarjetas — Agentes, Skills y MCP, cada una explicada por separado. En las próximas publicaciones abrimos cada pieza a fondo.

---

## Piezas gráficas de esta publicación

> **Cambio de diseño (14 ago, decisión de Yehimy):** la infografía original se reemplaza por un **tríptico / card-triptico** (ya en producción en Figma: `pub-12_s-7_triptico_1-la-caja-de-herramientas-que-le-falta-a-github-copilot/-problema/-solucion`) — mismo formato que Pub 6/7/10/11. Se mantienen las 3 tarjetas minimalistas descargables (Agentes, Skills, MCP). Total: **4 piezas**.
> ⚠️ Corrección de contenido (14 ago): el panel 3 ("solución") traía texto de `PERFORM`/copybook — contenido de "entender COBOL heredado" (Pub 6), no de la gco-dev-suite. Reemplazado por el contenido de abajo, confirmado por Yehimy.

| # | Pieza | Rol | Estado |
|---|-------|-----|--------|
| 1 | Tríptico "GCO Dev Suite" (`pub-12_s-7_triptico_1-la-caja-de-herramientas-que-le-falta-a-github-copilot` · `-problema` · `-solucion`) | Acompaña el post principal — qué es, el vacío de contexto, y la solución con la regla de oro | 🔄 En producción en Figma — corregir el panel 3 y agregar el bloque complementario del panel 2 (ver brief) |
| 2 | Tarjeta minimalista "Agentes" (`12-S7-card_devsuite-agentes`, 1/3) | Pieza descargable — el criterio | 🔄 Brief listo, falta producir en Figma |
| 3 | Tarjeta minimalista "Skills" (`12-S7-card_devsuite-skills`, 2/3) | Pieza descargable — el procedimiento | 🔄 Brief listo, falta producir en Figma |
| 4 | Tarjeta minimalista "MCP" (`12-S7-card_devsuite-mcp`, 3/3) | Pieza descargable — el acceso | 🔄 Brief listo, falta producir en Figma |

---

## Brief — Tríptico "GCO Dev Suite" (`S7-Card_pub12-*`)

**Tipo de pieza:** Tríptico / card-triptico, 3 paneles 1080×1080 px, carrusel (ver `Configuraciones/matriz-componentes-graficos.csv` y `Configuraciones/catalogo-de-formatos.md`, Ficha F1)
**Origen del contenido:** `Conocimiento/temas_mes-agosto/información-equipo-raona-gco-devsuite.md`, secciones "La idea en una frase", "El problema que había detrás" y "Las decisiones de diseño que la definen"

### Panel 1 — Portada (`pub-12_s-7_triptico_1-la-caja-de-herramientas-que-le-falta-a-github-copilot`) — ✅ contenido correcto, ya en Figma

| Elemento | Texto |
|----------|-------|
| Ilustración | Maletín/caja de herramientas — degradado naranja→rojo |
| Etiqueta (pill) | GCO DEVSUITE |
| Título | La caja de herramientas que le falta a GitHub Copilot |
| Logo | Occident — inferior |

### Panel 2 — El problema (`pub-12_s-7_triptico_2-el-vacio-de-contexto`) — contenido del vacío correcto, se agrega complemento (14 ago)

| Elemento | Texto |
|----------|-------|
| Pill de fase | Fase 3 \| Multi-entorno |
| Título | El vacío de contexto |
| Copy (rojo) | Aunque sabe programar, desconoce las convenciones internas de GCO y no puede interactuar con nuestros sistemas reales de forma nativa. |
| **Bloque complementario (nuevo) — qué es gco-dev-suite** | **gco-dev-suite es el paquete que le da esas tres cosas que le faltaban: las llaves de los sistemas de GCO, los manuales de cómo se hacen aquí las cosas, y las normas de cuándo debe parar y preguntar.** |
| Visual | Icono de robot con signos de pregunta |

### Panel 3 — La solución (`pub-12_s-7_triptico_3-el-agente-decide-la-skill-explica-el-conector-busca-el-dato-real`) — ⚠️ CORREGIR, contenido nuevo

| Elemento | Texto |
|----------|-------|
| Tag | SOLUCIÓN |
| Pill de fase | Fase 3 \| Multi-entorno |
| Título (protagonista de la pieza) | El agente decide. La skill explica. El conector busca el dato real. |
| Paso 1 | **Agentes** — deciden qué hacer y en qué orden, y cuándo parar a preguntar. |
| Paso 2 | **Skills** — explican cómo se hace cada tarea, a la manera de GCO. |
| Paso 3 | **MCP** — van a buscar el dato real, en el sistema real. Nunca lo suponen. |
| Remate (con ícono de reloj de arena) | Antes: cinco pestañas y veinte minutos de búsqueda. Ahora: una sola frase. |
| Numeración | `3/3` — chip esquina inferior derecha |

> Diseño (los 3 paneles): fondo blanco (panel 2), degradado naranja `#FA961E`→rojo `#DC0028` (panel 1), rojo sólido `#DC0028` (panel 3). Títulos en CO Bold, texto corriente en GCO Sans. Chip de numeración `1/3` · `2/3` · `3/3` en cada panel, esquina inferior derecha.
> Esta pieza **no desarrolla en detalle** cada componente — eso vive en las 3 tarjetas siguientes, para no repetir contenido.

---

## Brief — 3 tarjetas minimalistas "GCO Dev Suite" (`12-S7-card_devsuite-*`)

**Tipo de pieza:** Tarjeta minimalista, panel único 1080×1350 px cada una — 3 piezas independientes, descargables por separado (ver `Configuraciones/matriz-componentes-graficos.csv`)
**Origen del contenido:** `Conocimiento/temas_mes-agosto/información-equipo-raona-gco-devsuite.md`, secciones "Qué es, por dentro", "Los tres agentes", "Las capacidades: qué sabe hacer"

### Tarjeta 1/3 — Agentes (`12-S7-card_devsuite-agentes`)

| Elemento | Texto |
|----------|-------|
| Título corto (eyebrow) | GUÍA DE MAESTRÍA EN GITHUB COPILOT · GCO DEV SUITE 1/3 |
| Título principal | Agentes |
| Subtítulo | El criterio — deciden qué hacer y en qué orden |
| Cuerpo | **Coordinador:** la puerta de entrada única, escucha en lenguaje natural. **Orquestador de cambios:** reconoce 18 tipos de cambio catalogados y pone las tareas en orden. **Validador:** aplica 12 reglas de coherencia — detecta los problemas, no los corrige por su cuenta. |
| Logo | Occident — inferior derecha |

### Tarjeta 2/3 — Skills (`12-S7-card_devsuite-skills`)

| Elemento | Texto |
|----------|-------|
| Título corto (eyebrow) | GUÍA DE MAESTRÍA EN GITHUB COPILOT · GCO DEV SUITE 2/3 |
| Título principal | Skills |
| Subtítulo | El procedimiento — 32 capacidades que explican cómo se hace cada tarea |
| Cuerpo | Agrupadas en 9 áreas: incidencias y logs, tickets, COBOL, base de datos, .NET, coherencia entre capas, documentación, trazabilidad y gestión ágil. Cada una escrita con las convenciones reales de GCO dentro. |
| Logo | Occident — inferior derecha |

### Tarjeta 3/3 — MCP (`12-S7-card_devsuite-mcp`)

| Elemento | Texto |
|----------|-------|
| Título corto (eyebrow) | GUÍA DE MAESTRÍA EN GITHUB COPILOT · GCO DEV SUITE 3/3 |
| Título principal | MCP |
| Subtítulo | El acceso — conectan de verdad con los sistemas de GCO |
| Cuerpo | **Jira** — tickets y trazabilidad de incidencias. **Confluence** — documentación interna. **Elastic** — logs y errores en tiempo real. **DB2** — estructura real de los datos. **Navegador** — acceso a interfaces web internas. La base de datos manda: nunca se supone un dato, siempre se consulta en vivo. |
| Logo | Occident — inferior derecha |

> ⚠️ Mismo bloqueante que Pub 15: hay 3 listas de MCP distintas circulando (5 según esta fuente, 4 según el resumen de la presentación, 7 nombres reales en el guion del Video 04) — no producir esta tarjeta en Figma sin que Nibaldo confirme cuál es la vigente.

> Diseño (las 3 tarjetas): fondo blanco, rojo `#DC0028` como acento — sin fondos negros. Título corto rojo uppercase alineado a la derecha, título principal en CO Bold, cuerpo en GCO Sans. Mismo tratamiento visual que las tarjetas minimalistas de Pub 4 (`05-2/3/4-S2-card_pub4...`), para que se sientan de la misma familia.

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Idea en una frase + los tres problemas que resolvía | `información-equipo-raona-gco-devsuite.md` — "La idea en una frase" · "El problema que había detrás" |
| Las 3 piezas (agentes / skills / MCP) y la regla que las une | `información-equipo-raona-gco-devsuite.md` — "Qué es, por dentro" |
| Los números (3 · 32 · 5 · 6 · ~5 min) | `información-equipo-raona-gco-devsuite.md` — "Los números" |
| Los 3 agentes (Coordinador, Orquestador de cambios, Validador) | `información-equipo-raona-gco-devsuite.md` — "Los tres agentes" |
| Las 32 skills agrupadas en 9 áreas | `información-equipo-raona-gco-devsuite.md` — "Las capacidades: qué sabe hacer" |
| Orden de la serie (DevSuit → Skills → MCP → Agentes) | Decisión de Nibaldo, reunión 4 ago — `Reuniones/seguimientos-semanales/transcripcion_reunion-semanal-GCO-y-raona-04-08-26.md`, minuto 4:23 |

> ⚠️ Pendiente sin resolver, no se menciona en este post: si "gco-dev-suite" es la misma "Copilot Dev Suite" del guion del Video 04 — ver `Planeacion/Semana-7_plan-agosto-devsuite/plan-agosto_devsuite-skills-mcp-agentes.md`, sección 5.
