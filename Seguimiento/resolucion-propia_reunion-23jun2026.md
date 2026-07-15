# Resolución por cuenta propia · Preparación reunión martes 23 junio 2026

> **Encuadre de semanas:** estamos trabajando en **Semana 3 (15–19 jun)** — el equipo va una semana adelantado en producción. Lo que se produce esta semana (Pub 6 y Pub 7) **se publica en Semana 4** (martes 23 y jueves 25 jun). Por convención del proyecto, los briefs se archivan en la carpeta de su semana de publicación (`semana-4_22-26jun/`), con una nota de producción en el encabezado.
>
> Contexto: Nibaldo no entregó ninguno de los inputs solicitados el 16 jun (ver `solicitudes-nibaldo_16jun2026.md`).
> Objetivo: identificar qué de esa lista podemos resolver desde nuestro propio alcance —consultando las sesiones de formación ya dictadas o investigando en la web— para no llegar bloqueados a la reunión del 23.
> Fuente de los temas: reunión 16 jun + feedback Jonatan.
> Fuente de las sesiones: `Planeacion/Semana-0_planeacion-del-proyecto/ejemplos_practicos_Github-Copilot.md` y carpeta `Sesiones/`.

---

## Tabla de temas pendientes y vía de resolución

> La columna **Seguimiento** recoge la decisión tomada por Yehimy el 21 jun sobre cada ítem.

| # | Tipo | Tema / Acción | ¿Resoluble por cuenta propia? | Vía sugerida y opinión | Seguimiento (decisión 21 jun) |
|---|------|---------------|-------------------------------|------------------------|-------------------------------|
| 1 | Ajuste vídeo | **Vídeo 1 — flujo completo de licencia en myaccess** (Sugerencias → "Ver todo" → buscar "GitHub Enterprise - Arquitectura" → botón Solicitud → mención de la asignación al grupo Azure) | Parcial | Tenemos los pasos documentados y los screenshots de la reunión del 16 jun. Podemos **maquetar/guionizar la secuencia** e incluso recrearla con las capturas, pero la **grabación real en el tenant de GCO depende de Nibaldo/GCO** —no es replicable desde fuera. La web no aplica: es un flujo interno del tenant. | **Bloqueo — Nibaldo.** Yehimy no tiene acceso al entorno de GCO, no puede ajustar el vídeo. La grabación le corresponde a Nibaldo. |
| 2 | Ajuste vídeo | **Vídeo 2 — ocultar el usuario real del login y reemplazarlo por `_gco`** | Sí | Es una **tarea de edición/postproducción**, no de regrabación. Se resuelve desde nuestro alcance (blur o sustitución del campo). No requiere ni sesiones ni web. | **Preguntar a Nibaldo.** No está claro qué dato exacto debe ocultarse. Hoy: redactar la pregunta puntual a Nibaldo (ver "Preguntas para Nibaldo" abajo). |
| 3 | Ajuste vídeo | **Vídeo 2 — añadir flujo de autenticación completo de VS Code ("Sign in with GitHub")** al nivel de Visual Studio | Sí (web) | Es un **flujo público y estándar** de GitHub Copilot, no específico de GCO. Se puede documentar/recrear con la **documentación oficial de GitHub** y grabarlo nosotros en un VS Code propio. | **Bloqueo — Nibaldo.** Yehimy necesita que Nibaldo regrabe la sección de VS Code. |
| 4 | Input contenido | **Pub 6 (mar 23) — caso real COBOL: entender código heredado** | Sí (sesiones) | **Cubierto por las sesiones.** En `ejemplos_practicos` hay material directo: "COBOL Evolutivo" (Sesión 1 — explicar código existente de una tarea de Jira y planificar la solución) y "Análisis de impacto en Copybooks COBOL" (Sesión 3 - G3M). Es la fuente más sólida que tenemos: podemos armar el brief sin Nibaldo. | **✅ HECHO (21 jun).** Brief en `Produccion/semana-4_22-26jun/pub-06_mar-23jun_(repub-07_mar-04-ago)/canal-casos-de-uso_pub6.md`. Pendiente solo validación de Nibaldo. |
| 5 | Input contenido | **Pub 7 (jue 25) — caso real .NET: bug fixing** | Parcial (sesiones) | Tenemos casos de bug fixing y de .NET, pero **no un caso de bug fixing específicamente en .NET** documentado con todo el detalle. Material aprovechable: "Bug Fixing vía MCP Jira/Confluence" (Sesión 3 - G4M, caso de la prima en negativo) y "Creación de capa de datos en .NET" (Sesión 2 - G5M). | **✅ HECHO (21 jun).** Brief en `Produccion/semana-4_22-26jun/pub-07_jue-25jun_(repub-08_jue-06-ago)/canal-casos-de-uso_pub7.md`. Queda confirmar con Nibaldo el lenguaje del caso "prima negativa" (ver pregunta 3 abajo). |
| 6 | Confirmación | **Vídeo 2 — enfoque A/B/C** (Chat+inline / modo agente / planificación) | Sí (decisión propia) | Es una **decisión editorial**, no un dato externo. Desde la estrategia podemos definirla. Recomendación inicial: opción **A (Chat + completado inline)** como continuación natural del Vídeo 1. | **Preguntar a Nibaldo.** A Yehimy no le queda claro el ajuste. Pregunta puntual redactada abajo. |
| 7 | Confirmación | **Facturación: ¿0x/1x/3x o nuevo modelo de peticiones premium mensuales?** | Parcial (web) | El **cambio general del modelo de facturación de GitHub Copilot es público** y se puede investigar en la web/documentación oficial. Lo que sigue siendo interno es **si las licencias de GCO ya migraron**. | **✅ HECHO (21 jun).** Investigado y documentado en `Conocimiento/facturacion-github-copilot-2026.md`. **Hallazgo:** el modelo 0x/1x/3x quedó legacy el 1 jun 2026 — ahora es AI Credits por tokens. La tarjeta de Pub 8/9 hay que reformularla. Estado específico de GCO sigue pendiente con Nibaldo. |
| 8 | Confirmación | **URL del canal corporativo para enlazar en Vídeo 1** | No | Dato **interno de GCO**. No se obtiene ni de sesiones ni de web. Queda como dependencia directa de Nibaldo/GCO. | **Dependencia — Nibaldo.** |
| 9 | Confirmación | **URL de acceso a la licencia: ¿`myaccess.microsoft.com` o una específica del tenant de GCO?** | Parcial (web) | `myaccess.microsoft.com` es la **URL estándar de Microsoft** y se puede confirmar por web como genérica válida. Si GCO usa una URL específica de su tenant, eso es interno. | **Dependencia — Nibaldo.** |

---

## Qué hacemos HOY (21 jun) — por cuenta propia

1. **Pub 6 — brief del caso COBOL** (ítem 4): armarlo desde las sesiones.
2. **Pub 7 — brief del caso .NET** (ítem 5): armarlo combinando los casos de bug fixing y .NET de las sesiones.
3. **Facturación** (ítem 7): investigar en la web el modelo de facturación público actual de GitHub Copilot y documentarlo para la tarjeta de tokens.
4. **Redactar las preguntas puntuales a Nibaldo** (ítems 2 y 6) para enviárselas y desbloquear.

## Qué queda en manos de Nibaldo

- **Bloqueos de grabación:** Vídeo 1 (ítem 1) y regrabación de VS Code en Vídeo 2 (ítem 3).
- **Dependencias de dato interno:** URL canal corporativo (ítem 8), URL de licencia del tenant (ítem 9).
- **Respuestas a las preguntas puntuales:** ocultar usuario en Vídeo 2 (ítem 2), enfoque del Vídeo 2 (ítem 6).

---

## Preguntas para Nibaldo

### Pregunta sobre el ítem 2 — qué ocultar en el login del Vídeo 2

> Nibaldo, sobre el ajuste del Vídeo 2 en la pantalla de login de GCO: necesito que me precises **qué dato exacto no debe verse** para hacer bien el ajuste. ¿Es solo el nombre de usuario, también el correo, el dominio, o algún otro dato visible en esa pantalla? ¿En qué momento(s) del vídeo aparece? Y para reemplazarlo, ¿usamos `_gco` o prefieres otro texto genérico? Con eso lo dejo claro.

### Pregunta sobre el ítem 6 — enfoque del Vídeo 2

> Nibaldo, para cerrar el contenido del Vídeo 2 necesito que definamos el enfoque. ¿Cuál de estas tres líneas seguimos como segundo paso para los developers de GCO?
> - **A)** Chat + completado inline — continuación directa del Vídeo 1
> - **B)** Modo agente
> - **C)** Planificación / modo especial
>
> Mi propuesta es la **A**, para mantener el orden de menos a más, pero quiero tu visión técnica antes de producir el guion.

### Pregunta sobre el ítem 5 — lenguaje del caso de bug fixing (Pub 7)

> Nibaldo, armé el brief de Pub 7 (bug fixing) con el caso de la **prima que quedaba en negativo al aplicar el descuento del 10%** que vimos en sesión (el del agente `@analyst` con MCP de Jira y Confluence). Para titularlo bien necesito confirmar: **¿ese caso fue en .NET?** Si fue, lo dejo como "bug fixing en .NET". Si no, dime si tienes un caso de bug fixing real en .NET, o lo publicamos como "bug fixing con contexto de negocio" sin atarlo a un lenguaje.

---

> Nota: ningún dato interno de GCO se da por supuesto en este documento. Donde la vía es "web" o "sesiones", se trata de material público o ya dictado; las variantes específicas del tenant de GCO quedan marcadas como confirmación pendiente con Nibaldo.
