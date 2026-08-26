# Canal Anuncios y Tips — Pub 17 · De cinco pestañas a una frase: MCP en acción
> Canal: Anuncios y Tips Ágiles · Tipo: Caso de uso (serie MCP, 2/2) · Jueves de su semana de producción — profundiza el tema de Pub 16
> ⏱️ **Semana de producción: misma semana que Pub 16** (creada el 18 ago)
> 📍 **Teams GCO: sigue congelado, sin fecha real.** El día y fecha se confirman cuando el equipo de Nibaldo reactive publicaciones (ver `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md` — retoma prevista 14 sep).
> 📍 **Publicada en Teams Raona (visibilidad/prueba, mismo tratamiento que Pub 10 y Pub 11) — no Teams GCO, que sigue congelado.**
> Estado: ✅ **Publicada el 24 ago 2026** — post + tarjeta comparativa en el canal Anuncios y Tips. Captura: `Produccion/imagenes_teams/01_anuncios-y-tips-agiles/pendiente-pub-17_de-cinco-pestanas-a-una-frase.png`. Pendiente: validar con Nibaldo/Guillermo antes de la cola de republicación en Teams GCO
> ✍️ **Brief actualizado el 24 ago** contra la pieza realmente producida — los textos y especificaciones de abajo reflejan lo publicado, no la propuesta previa. Los cambios respecto al brief del 21 ago quedan anotados bajo la tabla.
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
| 1 | `pub-17_s-9_tarjeta-comparativa_investigar-un-fallo-antes-y-ahora.png` — Tarjeta comparativa horizontal "Investigar un fallo: antes y ahora" | Acompaña el post — contraste directo del antes/ahora con los 3 conectores consultados a la vez | ✅ Producida y publicada (24 ago) |

> **Nombre de archivo (25 ago):** renombrado a la convención única del proyecto — `pub-N_s-N_componente_titulo-de-la-pieza.ext`, donde el título es el que aparece en el encabezado de la pieza. Ver `Configuraciones/convencion-nombres-piezas-graficas.md`.

---

## Brief — Tarjeta comparativa horizontal Pub 17 (`pub-17_s-9_tarjeta-comparativa_investigar-un-fallo-antes-y-ahora`)

**Tipo de pieza:** Tarjeta comparativa horizontal, panel único 1920×1080 px (ver `Configuraciones/matriz-componentes-graficos.csv`, fila "Tarjeta comparativa horizontal")
**Origen del contenido:** `información-equipo-raona-gco-devsuite.md`, sección "Cómo se ve en el día a día" — Ejemplo 1

| Elemento | Texto |
|----------|-------|
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT · MCP 2/2 |
| Título principal | Investigar un fallo: antes y ahora |
| Columna A — encabezado | Antes |
| Columna A — subtítulo | Fragmentación y pérdida de tiempo |
| Columna A · bloque 1 — titular | Caos de las 5 pestañas |
| Columna A · bloque 1 — cuerpo | El proceso tradicional requería tener muchas ventanas para buscar un error. |
| Columna A · bloque 2 — titular | 20 minutos de recopilación |
| Columna A · bloque 2 — cuerpo | Tiempo mínimo para reconstruir manualmente una historia fragmentada. |
| Columna A · bloque 3 — titular | Trabajo manual repetitivo |
| Columna A · bloque 3 — cuerpo | Copiar de un sistema a otro y redactar de manera artesanal. |
| Conector central | Flecha ascendente con el rótulo TRANSFORMACIÓN CON IA |
| Columna B — encabezado | Ahora |
| Columna B — subtítulo | La eficiencia del MCP |
| Columna B · bloque 1 — titular | Una sola frase |
| Columna B · bloque 1 — cuerpo | ¿Por qué falla este proceso? |
| Columna B · bloque 1 — visual | Los tres conectores en fila, **sin flechas entre ellos**: Elastic (Logs) · Jira (Tickets) · Confluence (Documentation) |
| Columna B · bloque 2 — titular | Búsqueda triple en paralelo |
| Columna B · bloque 3 — titular | Informe consolidado y ticket redactado |
| Columna B · bloque 3 — cuerpo | Entrega datos estructurados y un informe con lo relevante. Si hace falta un ticket, lo redacta con el error real dentro y pide confirmación antes de crearlo. |
| Logo | Occident — inferior derecha |

> **Cambios respecto al brief del 21 ago (aplicados en producción, 24 ago):**
> 1. **Las dos columnas se reestructuraron en tres bloques con titular**, en vez del párrafo corrido que proponía el brief. Se pierde algo del ritmo entrecortado de la columna "Antes", pero se gana escaneabilidad y las dos columnas quedan parejas. La sustancia se conserva íntegra: cinco pestañas, veinte minutos, copiar a mano.
> 2. **La columna B se titula "Ahora" con subtítulo "La eficiencia del MCP"**, no "Ahora, con MCP" en una sola línea.
> 3. **Los tres conectores van en fila sin flechas entre ellos.** En la primera versión iban encadenados con flechas (Elastic → Jira → Confluence), lo que se leía como una cosa después de otra y contradecía de frente el bloque "Búsqueda triple en paralelo" y el "a la vez" del post. Corregido. **Regla para las piezas siguientes: nada que ocurra en paralelo se dibuja con flechas en cadena.**
> 4. **El bloque de cierre pasó de "Informe consolidado y acción instantánea" con "realiza un ticket automático" a "Informe consolidado y ticket redactado" con "pide confirmación antes de crearlo".** La formulación anterior contradecía una de las cinco decisiones de diseño de la gco-dev-suite — *nada se implementa sin aprobación* (`información-equipo-raona-gco-devsuite.md`, decisión 2). **Regla para las piezas siguientes: la suite propone y pide confirmación; nunca se describe como que actúa sola.**
> 5. Se corrigieron dos errores de texto: *"Tamaño manual repetitivo"* → **"Trabajo manual repetitivo"**, y *"¿Porqué"* → **"¿Por qué"**.
> 6. Se añadió la **flecha central "TRANSFORMACIÓN CON IA"** y una ilustración por bloque (ventanas, tijeras, logs, ticket, documentos, checklist), elementos que no estaban en el brief.

> **Reparto con Pub 16 (21 ago, confirmado por Yehimy) — se mantiene en las piezas producidas:** las dos publicaciones de MCP salen la misma semana y arrancaban del mismo problema. Esta tarjeta se queda con **el flujo y el tiempo** — las pestañas, los veinte minutos, el copiar-pegar — y el tríptico de Pub 16 se queda con **la dispersión** (la información vive en cinco sistemas distintos). Verificado el 24 ago contra las cuatro piezas finales: ninguna de las dos invade el terreno de la otra.

---

### Especificaciones Figma — tal como se produjo

- **Formato:** landscape ~16:9,5 (3830×2272 px de exportación). La matriz define el grupo `Tarjeta comparativa horizontal` como 1920×1080 px; la pieza real es algo más alta para acomodar los tres bloques por columna
- **Referencia directa:** las tarjetas comparativas ya producidas de Pub 8 ("El mismo encargo, dos resultados") y Pub 4 ("Memoria vs. Instrucciones") — misma familia visual
- **Fondo:** blanco · acento rojo `#DC0028` · sin fondos negros
- **Columnas:** A (Antes) izquierda y B (Ahora) derecha — tres bloques apilados por columna, cada bloque con fondo `#F5F5F5` y esquinas redondeadas. **No es una columna-caja continua**, son bloques independientes
- **Encabezados de columna:** en rojo `#DC0028`, con su subtítulo en gris debajo
- **Ilustraciones:** trazo rojo lineal, colocadas fuera de los bloques (a los lados), no dentro — no compiten con el texto
- **Conector central:** flecha ascendente en trazo rojo, de la columna A a la B, con el rótulo TRANSFORMACIÓN CON IA
- **Eyebrow:** rojo en mayúsculas, arriba, con el `MCP 2/2` que encadena con Pub 16 · **título:** CO Bold · texto corriente GCO Sans
- **Logo:** Occident, inferior derecha

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Ejemplo 1 completo (tres búsquedas en paralelo, informe consolidado, redacción de ticket) | `información-equipo-raona-gco-devsuite.md` — "Cómo se ve en el día a día", Ejemplo 1 |
| Frase "cinco pestañas y veinte minutos... una sola frase" | `información-equipo-raona-gco-devsuite.md` — Ejemplo 1 (cita literal) |
| Cadena de pasos manuales de la columna "Antes" | `información-equipo-raona-gco-devsuite.md` — "El problema que había detrás", primer problema (mismo párrafo del que Pub 16 toma la dispersión; aquí se toma la secuencia de acciones) |

> Este mismo ejemplo sustenta el guion del Video 04 (`Produccion/Videos/v04_instalar-mcp/`) — no se duplica contenido nuevo, se reutiliza el ya validado.
