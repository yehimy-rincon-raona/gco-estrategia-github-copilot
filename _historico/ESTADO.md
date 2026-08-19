# ESTADO — Estrategia de Adopción GitHub Copilot GCO

> **Punto de entrada de contexto. Léeme PRIMERO.** Resumen barato en tokens del estado actual.
> Detalle de producción: `Produccion/TABLERO.md` · Reglas permanentes: `CLAUDE.md` · Detalle de sesiones: esta carpeta.

**Actualizado:** Serie Dev Suite ampliada de Pub 12-16 a Pub 12-19 (MCP y Agentes pasan a 2 publicaciones cada uno) · Intercambio de contenido Pub 14↔15 · Posts auto-publicados retirados de Teams GCO, cadencia se retoma la semana 14-18 sep · 18 agosto 2026

## En una frase

🧭 **18 ago — Reunión de seguimiento con Jonatan y Óscar:** se valida el orden Dev Suite → Skills → MCP → Agentes, y **MCP y Agentes pasan de 1 a 2 publicaciones cada uno** — la serie crece de Pub 12-16 a **Pub 12-19** (cierre de la serie, sin Pub 20).

📌 **18 ago — Corrección: "Memoria vs. Instrucciones" no es una Pub numerada.** Es un ajuste/aclaración que siempre vivió como hilo de Pub 4, no una publicación propia. Se le había asignado por error un número (Pub 17, luego Pub 20) — queda revertido, igual que el Video 04 se publica como hilo de Pub 2 sin número propio.

🔀 **18 ago — Intercambio Pub 14 ↔ Pub 15** (decisión de Yehimy, por sentido narrativo): Pub 14 pasa a ser "el mapa de los 5 niveles de personalización" (panorámico, va primero) y Pub 15 pasa a ser "la anatomía real de una Skill" (zoom, va después) — sigue el patrón general-antes-que-específico ya usado en Pub 12. Las 3 tarjetas de anatomía, ya producidas y corregidas, se movieron y renombraron de Pub 14 a Pub 15.

🗑️ **18 ago — Retiro de posts auto-publicados en Teams GCO:** varios posts se publicaron solos pese al congelamiento (Pub 3, 4, 5, 6, 7, 8, 20). Se retiraron todos (evidencia en `Produccion/elimina-post-teams-gco/`). **La cadencia semanal se retoma la semana del 14-18 de septiembre**, republicando en el mismo orden de la cola.

📋 **18 ago — `Produccion/TABLERO.md` reestructurado** por quedar "muy denso y confuso": ahora tiene un resumen de 4 líneas y un cronograma maestro simple arriba, con todo el historial denso relegado a una sección de archivo más abajo.

## Decisiones vigentes

- **Serie Dev Suite = Pub 12-19** (antes 12-16): Dev Suite (12) → Skills (13-15) → MCP (16-17) → Agentes (18-19). Cierra en Pub 19, sin Pub 20.
- **"Memoria vs. Instrucciones" no es una Pub** — es un ajuste que vive como hilo de Pub 4 (republica junto con ella), igual que Video 04 es hilo de Pub 2.
- **5 conectores MCP confirmados**: Jira, Confluence, Elastic, DB2, navegador — resuelve la discrepancia que arrastraba el guion del Video 04.
- **Pub 14 = el mapa (panorámico), Pub 15 = la anatomía (zoom)** — no al revés.
- **Cadencia semanal de Teams GCO se retoma la semana del 14-18 sep 2026**, republicando en el mismo orden de la cola de `Produccion/TABLERO.md`, sin saltar ni repetir nada.
- Sigue vigente todo lo de sesiones anteriores no mencionado aquí: numeración global de Pub (nunca se reutiliza, excepción de renumeración documentada), sin anglicismos, español latinoamericano, "GitHub Copilot" completo siempre, no inventar información.

## En qué punto estamos

- ✅ Pub 12 y 13 completos (post + brief). Pub 15 (anatomía) tiene sus 3 piezas gráficas ya producidas y corregidas — espera a que Pub 14 esté producida para publicarse (numeración secuencial).
- 🔄 Pub 14 (el mapa de los 5 niveles) en producción ahora mismo por Yehimy.
- 🔄 Pub 16-19 (MCP y Agentes): briefs listos, piezas gráficas sin producir.
- 🗑️ Pub 3, 4 (con su hilo "Memoria vs. Instrucciones"), 5, 6, 7 y 8 retirados de Teams GCO (se habían auto-publicado); vuelven a la cola para la semana del 14-18 sep.
- ⏳ Pendiente: confirmar con Nibaldo si `dotnet-review`/`cobol-analyzer` son parte real de las 32 skills (bloquea cierre de Pub 15); aclarar con Nibaldo la confusión Copilot Memory vs. Instructions (hilo de Pub 4).

## Ojo / no repetir

- Pub 15 no puede publicarse antes que Pub 14 aunque esté lista antes — la numeración es secuencial estricta.
- No usar "18 sesiones" · siempre "GitHub Copilot" completo · español latinoamericano sin "vosotros" · sin emojis salvo petición · no inventar: marcar `[No hay información — confirmar con Yehimy]`.
- TABLERO.md ahora tiene un resumen simple arriba y el historial denso abajo — mantener este patrón, no revertir a una estructura monolítica.

## Para profundizar

- Última sesión: `_historico/sesion_reunion-18ago-reorganizacion-pub14-19-y-retiro-posts_18ago2026.md`
- Tablero de producción: `Produccion/TABLERO.md`
- Plan vigente: `Planeacion/Semana-7_plan-agosto-devsuite/plan-agosto_devsuite-skills-mcp-agentes.md`
- Documento vivo para reuniones: `Seguimiento/base-reunion-seguimiento.md`
- Contenidos: `Produccion/semana-8_fechas-pendiente(pub-14-15)/` (Pub 14-15) · `Produccion/semana-9_fechas-pendiente(pub-16-17)/` (Pub 16-17) · `Produccion/semana-10_fechas-pendiente(pub-18-19)/` (Pub 18-19)
- Evidencia de posts retirados: `Produccion/elimina-post-teams-gco/`
- Acta de la reunión: `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md`
