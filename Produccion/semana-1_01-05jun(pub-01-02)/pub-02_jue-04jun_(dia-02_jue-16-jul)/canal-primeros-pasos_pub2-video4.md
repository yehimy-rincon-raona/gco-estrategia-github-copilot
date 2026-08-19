# Canal Primeros Pasos — Pub 2 · Video 04: Instala y configura tus MCP con Copilot Dev Suite
> Canal: Primeros Pasos con GitHub Copilot · Tipo: Soporte de vídeo — **respuesta/hilo dentro de Pub 2, NO es una publicación nueva**
> Decisión (14 ago, Yehimy): el Video 04 no lleva número de Pub propio ni entra en la numeración consecutiva de agosto (Pub 12-16, serie gco-dev-suite). Se publica como respuesta dentro del hilo de Pub 2 — junto a los Videos 01, 02 y 03 — porque continúa la misma narrativa de "configurar tu entorno", solo que en el siguiente nivel (MCP, Fase 3).
> Estado: ✅ **Publicado de prueba en Teams Raona el 14 ago 2026** (captura: `Produccion/imagenes_teams/02_primeros-pasos/pendiente-pub-08_copilot-dev-suite-activa-tus-mcp_video04.png`) — sirve de visibilidad/preview, para presentar en la reunión del 18 ago. **No publicado en Teams GCO todavía.**
> Fuente: `Produccion/Videos/v04_instalar-mcp/pill_para-grabacion_instalar-y-configurar-mcp.md` (guion verificado contra 44 capturas, sin datos inventados)

---

## Objetivo de esta publicación

Acompañar el **Video 04** con una respuesta dentro del hilo de Pub 2, después de los Videos 01-03. Los Videos 01-03 dejaron el entorno básico configurado (acceso, Visual Studio, VS Code, terminal); este video da el siguiente paso — conectar GitHub Copilot a los sistemas reales de GCO (Jira, Confluence, DB2, SQL) vía MCP — para quien ya esté trabajando en VS Code o terminal (Fase 3; los MCP no funcionan en Visual Studio 2022 nativo).

**Por qué como respuesta y no como Pub nueva:** el contenido es un tutorial de instalación, no un tema editorial propio — encaja como cierre natural del bloque "Configuración del entorno" que ya abrieron los Videos 01-03, igual que Pub 8 usa respuestas del hilo para profundizar sin fragmentar el tema en más publicaciones.

---

## Post listo para Teams (respuesta en el hilo de Pub 2)

**Asunto:** `⚙️ Copilot Dev Suite: activa tus MCP (Jira, Confluence, DB2, SQL)`

---

⚙️ **Copilot Dev Suite: activa tus MCP (Jira, Confluence, DB2, SQL)**

¿Ya diste tus primeros pasos con GitHub Copilot? Este es el siguiente nivel: conectar GitHub Copilot a tus sistemas reales — Jira, Confluence, DB2 y SQL — desde VS Code o terminal. *(Los MCP no funcionan en Visual Studio 2022 nativo — esta configuración es para quien trabaje en VS Code o terminal.)*

**3 pasos, una sola vez:**
- **Instala Copilot Dev Suite** desde el Portal de Empresa.
- **Configura tus credenciales** — usuario y token de Jira/Confluence, usuario y contraseña de DB2. Se guardan cifradas en el Gestor de credenciales de Windows: no hay ningún fichero que editar, y solo se hace una vez.
- **Arranca GitHub Copilot y verifica** que los MCP cargan con el check verde.

Desde ahí, pídele en lenguaje natural: *"dime qué tareas tengo asignadas"* — y GitHub Copilot consulta Jira de verdad.

👉 Mira el vídeo y actívalo en tu equipo.

---

## Tono de comunicación

Funcional, un paso más dentro del mismo bloque de configuración — no un anuncio de producto nuevo. El mensaje: ya tienes lo básico (Videos 01-03); esto es lo que se activa cuando trabajas con los sistemas reales de GCO.

---

## Conexión con el video

El post resume las secciones 1-7 del guion (`pill_para-grabacion_instalar-y-configurar-mcp.md`): instalación desde Portal de Empresa, configuración de credenciales de Atlassian y DB2, arranque y verificación de los MCP, y prueba con consultas reales. No incluye la parte de Custom Agents/Chrome (fuera de la píldora por decisión de guion — ver ese archivo, sección "Fuera de esta píldora").

---

## Recursos adjuntos

- **Video 04** — `[Pendiente: edición/postproducción — condensar a 2:30-3:00 min y difuminar datos sensibles (tokens, correo, usuario PE2782, nombres reales de BBDD) — confirmar con Yehimy el archivo/enlace final]`

---

## Procedencia del contenido

| Punto del post | Fuente |
|----------------|--------|
| Instalación desde el Portal de Empresa | Guion `pill_para-grabacion_instalar-y-configurar-mcp.md` — Sección 2 |
| Configuración de credenciales (Atlassian + DB2), guardadas cifradas, una sola vez | Guion — Secciones 4 y 5 |
| Arranque de GitHub Copilot y verificación de MCP con check verde | Guion — Sección 6 |
| Prompt real "dime qué tareas tengo asignadas" contra Jira | Guion — Sección 7 |
| Orientado a Fase 3 (VS Code / Terminal, no Visual Studio 2022) | Guion — nota de producción |

> No se menciona en este post (fuera de la píldora por decisión de guion): custom agents (`gco-coordinador`) ni la integración experimental con Chrome — ver `pill_para-grabacion_instalar-y-configurar-mcp.md`, sección "Fuera de esta píldora".
