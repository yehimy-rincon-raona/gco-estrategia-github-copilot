# Canal Anuncios y Tips — Pub 16 · Las llaves de los sistemas: los 5 conectores MCP
> Canal: Anuncios y Tips Ágiles · Tipo: Anuncio de componente (serie MCP, 1/2) · Martes de su semana de producción
> ⏱️ **Semana de producción: siguiente disponible tras Pub 14-15** (creada el 18 ago — este número reemplaza al antiguo "Pub 15" de MCP, que ahora se reparte en 2 publicaciones propias)
> 📍 **Teams GCO: sigue congelado, sin fecha real.** El día y fecha se confirman cuando el equipo de Nibaldo reactive publicaciones (ver `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md` — retoma prevista 14 sep).
> 📍 **Próximo destino, una vez esté como borrador final: Teams Raona** (visibilidad/prueba, mismo tratamiento que Pub 10 y Pub 11) — no Teams GCO, que sigue congelado.
> Estado: 🟡 **Propuesta de contenido (18 ago)** — validado en la reunión del 18 ago (Jonatan + Óscar) el conteo de **5 conectores** como vigente, resolviendo el bloqueante que teníamos abierto con el guion del Video 04. Falta producir la pieza gráfica y validar con Nibaldo/Guillermo
> Fuente: `Conocimiento/temas_mes-agosto/información-equipo-raona-gco-devsuite.md` (primera respuesta del equipo de Nibaldo, 6 ago 2026)
> Plan: `Planeacion/Semana-7_plan-agosto-devsuite/plan-agosto_devsuite-skills-mcp-agentes.md` — Pub 15 original, sección 4 (renumerado a Pub 16 el 18 ago)

---

## Objetivo de esta publicación

Primera de dos publicaciones sobre MCP. Presenta los 5 conectores como el "acceso" de la gco-dev-suite — el problema que resuelven (la información repartida en 5 sistemas distintos) y qué son cada uno. La segunda (Pub 17) profundiza con un ejemplo real de uso.

---

## Post listo para Teams

**Asunto:** `🔑 Las llaves de los sistemas: los 5 conectores de la gco-dev-suite`

---

🔑 **Las llaves de los sistemas: los 5 conectores de la gco-dev-suite**

Cuando algo falla, normalmente no hay un solo sitio donde mirar: hay cinco. El error está en Elastic, la explicación en Confluence, el ticket en Jira, la estructura real de los datos en DB2. Cada diagnóstico empezaba con el mismo ritual — abrir pestañas, copiar identificadores de una a otra, reconstruir a mano una historia troceada en cinco sistemas.

Los **MCP** son las llaves que abren cada uno de esos sistemas de verdad, en vivo:

- **Jira** — tickets y trazabilidad de incidencias.
- **Confluence** — documentación interna.
- **Elastic** — logs y errores en tiempo real.
- **DB2** — estructura real de los datos.
- **Navegador** — acceso a interfaces web internas.

La regla que los gobierna: **la base de datos manda.** Nunca se supone un dato — siempre se consulta en vivo, en el sistema real.

👉 En la próxima publicación vemos cómo se ve esto en un caso real: investigar un fallo en segundos, no en 20 minutos.

---

## Piezas gráficas de esta publicación

| # | Pieza | Rol | Estado |
|---|-------|-----|--------|
| 1 | Infografía "Las llaves de cada sistema" (`16-S9-infografia_5-conectores-mcp`) | Acompaña el post principal — los 5 conectores con la analogía de la llave | 🔄 Brief listo, falta producir en Figma |

---

## Brief — Infografía Pub 16 (`16-S9-infografia_5-conectores-mcp`)

**Tipo de pieza:** Infografía, vertical (ver `Configuraciones/matriz-componentes-graficos.csv`, fila "Infografia")
**Origen del contenido:** `información-equipo-raona-gco-devsuite.md`, secciones "Qué es, por dentro" (tabla de piezas) y "El problema que había detrás" (primer problema)

| Elemento | Texto |
|----------|-------|
| Cápsula superior derecha (pill de fase) | Fase 3 \| Multi-entorno |
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT · MCP 1/2 |
| Título | Las llaves de cada sistema |
| Punto 1 | **Jira** — tickets y trazabilidad de incidencias |
| Punto 2 | **Confluence** — documentación interna |
| Punto 3 | **Elastic** — logs y errores en tiempo real |
| Punto 4 | **DB2** — estructura real de los datos |
| Punto 5 | **Navegador** — acceso a interfaces web internas |
| Remate | La base de datos manda: nunca se supone un dato, siempre se consulta en vivo |
| Logo | Occident — inferior derecha |

> Diseño: fondo blanco, rojo `#DC0028` como acento, icono de llave por cada conector — sin fondos negros. Título CO Bold, texto corriente GCO Sans.

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Los 5 conectores MCP (Jira, Confluence, Elastic, DB2, navegador) y la analogía de "las llaves" | `información-equipo-raona-gco-devsuite.md` — "Qué es, por dentro" |
| El problema de la información repartida en 5 sistemas | `información-equipo-raona-gco-devsuite.md` — "El problema que había detrás", primer problema |
| "La base de datos manda" | `información-equipo-raona-gco-devsuite.md` — "Las decisiones de diseño que la definen", decisión 1 |
| Conteo de 5 conectores confirmado como vigente | Validado en `Reuniones/seguimientos-semanales/transcripcion_reunion-seguimiento-semanal_18-08-26.pdf` (min. ~10:00, Yehimy) — sin objeción de Jonatan/Óscar |
