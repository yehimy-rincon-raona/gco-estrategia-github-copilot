# Canal Anuncios y Tips — Pub 17 · De cinco pestañas a una frase: MCP en acción
> Canal: Anuncios y Tips Ágiles · Tipo: Caso de uso (serie MCP, 2/2) · Jueves de su semana de producción — profundiza el tema de Pub 16
> ⏱️ **Semana de producción: misma semana que Pub 16** (creada el 18 ago)
> 📍 **Teams GCO: sigue congelado, sin fecha real.** El día y fecha se confirman cuando el equipo de Nibaldo reactive publicaciones (ver `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md` — retoma prevista 14 sep).
> 📍 **Próximo destino, una vez esté como borrador final: Teams Raona** (visibilidad/prueba, mismo tratamiento que Pub 10 y Pub 11) — no Teams GCO, que sigue congelado.
> Estado: 🟠 **Post cerrado y brief listo para producir (21 ago)** — texto final, especificaciones Figma completas. Falta únicamente producir la tarjeta comparativa en Figma y validar con Nibaldo/Guillermo
> Fuente: `Conocimiento/temas_mes-agosto/información-equipo-raona-gco-devsuite.md` (primera respuesta del equipo de Nibaldo, 6 ago 2026)
> Plan: `Planeacion/Semana-7_plan-agosto-devsuite/plan-agosto_devsuite-skills-mcp-agentes.md` — sección 4 (contenido nuevo, no estaba en el plan original)

---

## Objetivo de esta publicación

Segunda de dos publicaciones sobre MCP. Si Pub 16 presentó los 5 conectores, esta muestra cómo se ven en acción con el ejemplo real de investigar un fallo — el mismo que sustenta el Video 04.

---

## Post listo para Teams

**Asunto:** `⏱️ De cinco pestañas a una frase: MCP en acción`

---

⏱️ **De cinco pestañas a una frase: MCP en acción**

La consulta es, tal cual: *"¿por qué falla este proceso?"*

El coordinador lanza tres búsquedas **a la vez**, usando los conectores MCP: los errores en Elastic, si ya hay un ticket abierto en Jira, y qué dice la documentación en Confluence. Cuando las tres vuelven, no entrega tres volcados por separado — entrega un informe consolidado con lo relevante. Y si de ahí sale que hay que abrir un ticket, lo redacta con el error real ya estructurado dentro, y pide confirmación antes de crearlo.

Antes: cinco pestañas y veinte minutos de recopilación. Ahora: una sola frase.

👉 Esto es lo que hace real la regla de la gco-dev-suite: el agente decide, la skill explica, el conector va a buscar el dato real.

---

## Piezas gráficas de esta publicación

| # | Pieza | Rol | Estado |
|---|-------|-----|--------|
| 1 | Tarjeta comparativa horizontal "Investigar un fallo: antes / ahora" (`17-S9-card-comparativa_investigar-fallo`) | Acompaña el post — contraste directo del antes/después con el flujo de los 3 conectores en paralelo | 🔄 Brief listo, falta producir en Figma |

---

## Brief — Tarjeta comparativa horizontal Pub 17 (`17-S9-card-comparativa_investigar-fallo`)

**Tipo de pieza:** Tarjeta comparativa horizontal, panel único 1920×1080 px (ver `Configuraciones/matriz-componentes-graficos.csv`, fila "Tarjeta comparativa horizontal")
**Origen del contenido:** `información-equipo-raona-gco-devsuite.md`, sección "Cómo se ve en el día a día" — Ejemplo 1

| Elemento | Texto |
|----------|-------|
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT · MCP 2/2 |
| Título principal | Investigar un fallo: antes y ahora |
| Columna A — encabezado | Antes |
| Columna A — texto | Abrir la pestaña. Buscar el error. Copiar el identificador. Pegarlo en el siguiente sistema. Volver a buscar. Y al final, redactar el ticket a mano. Veinte minutos, como mínimo. |
| Columna B — encabezado | Ahora, con MCP |
| Columna B — texto | Una frase: "¿por qué falla este proceso?". El coordinador consulta Elastic, Jira y Confluence a la vez, y entrega un informe consolidado. Si hace falta, redacta el ticket y pide confirmación antes de crearlo. |
| Logo | Occident — inferior derecha |

> **Reparto con Pub 16 (21 ago, confirmado por Yehimy):** las dos publicaciones de MCP salen la misma semana y arrancaban del mismo problema. Esta tarjeta se queda con **el flujo y el tiempo** — la secuencia de pasos manuales y los veinte minutos — y el tríptico de Pub 16 se queda con **la dispersión** (la información vive en cinco sistemas distintos). Por eso la columna "Antes" se reescribió como una **cadena de pasos** en vez de describir los cinco sistemas: el ritmo entrecortado de las frases cortas ES el argumento, y no repite lo que ya dijo el martes.
> **Consecuencia de diseño:** la columna A debe **verse** como una secuencia — pasos apilados, uno por línea — frente a la columna B, que es un solo bloque continuo. El contraste visual es fragmentación contra fluidez.
> Diseño: fondo blanco, columnas con fondo `#F5F5F5` y esquinas redondeadas, rojo `#DC0028` como acento — sin fondos negros. Mismo tratamiento visual que las tarjetas comparativas ya producidas (Pub 8, Pub 4).

---

### Especificaciones Figma

- **Formato:** 1920×1080 px (landscape), grupo `Tarjeta comparativa horizontal` de `Configuraciones/matriz-componentes-graficos.csv`
- **Referencia directa:** las tarjetas comparativas ya producidas de Pub 8 ("El mismo encargo, dos resultados") y Pub 4 ("Memoria vs. Instrucciones") — mismo tratamiento visual
- **Fondo:** blanco · acento rojo `#DC0028` · sin fondos negros
- **Columnas:** A (Antes) izquierda y B (Ahora, con MCP) derecha — fondo `#F5F5F5`, esquinas redondeadas, mismo ancho las dos
- **Contraste a la vista:** la columna A debe sentirse densa y troceada (cinco fragmentos sueltos); la B, una sola línea limpia. El contraste lo hace la composición, no un color distinto por columna
- **Eyebrow:** rojo en mayúsculas, arriba · **título:** CO Bold · texto corriente GCO Sans
- **Logo:** Occident, inferior derecha

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Ejemplo 1 completo (tres búsquedas en paralelo, informe consolidado, redacción de ticket) | `información-equipo-raona-gco-devsuite.md` — "Cómo se ve en el día a día", Ejemplo 1 |
| Frase "cinco pestañas y veinte minutos... una sola frase" | `información-equipo-raona-gco-devsuite.md` — Ejemplo 1 (cita literal) |
| Cadena de pasos manuales de la columna "Antes" | `información-equipo-raona-gco-devsuite.md` — "El problema que había detrás", primer problema (mismo párrafo del que Pub 16 toma la dispersión; aquí se toma la secuencia de acciones) |

> Este mismo ejemplo sustenta el guion del Video 04 (`Produccion/Videos/v04_instalar-mcp/`) — no se duplica contenido nuevo, se reutiliza el ya validado.
