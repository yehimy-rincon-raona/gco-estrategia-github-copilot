# Canal Anuncios y Tips — Pub 16 · Las llaves de los sistemas: los 5 conectores MCP
> Canal: Anuncios y Tips Ágiles · Tipo: Anuncio de componente (serie MCP, 1/2) · Martes de su semana de producción
> ⏱️ **Semana de producción: siguiente disponible tras Pub 14-15** (creada el 18 ago — este número reemplaza al antiguo "Pub 15" de MCP, que ahora se reparte en 2 publicaciones propias)
> 📍 **Teams GCO: sigue congelado, sin fecha real.** El día y fecha se confirman cuando el equipo de Nibaldo reactive publicaciones (ver `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md` — retoma prevista 14 sep).
> 📍 **Publicada en Teams Raona (visibilidad/prueba, mismo tratamiento que Pub 10 y Pub 11) — no Teams GCO, que sigue congelado.**
> Estado: ✅ **Publicada el 24 ago 2026** — post + tríptico de 3 tarjetas en el canal Anuncios y Tips. Captura: `Produccion/imagenes_teams/01_anuncios-y-tips-agiles/pendiente-pub-16_las-llaves-de-los-sitemas.png`. El conteo de **5 conectores** quedó validado en la reunión del 18 ago (Jonatan + Óscar), resolviendo el bloqueante que arrastraba el guion del Video 04. Pendiente: validar con Nibaldo/Guillermo antes de la cola de republicación en Teams GCO
> ✍️ **Brief actualizado el 24 ago** contra las piezas realmente producidas — los textos y especificaciones de abajo reflejan lo publicado, no la propuesta previa. Los cambios respecto al brief del 21 ago quedan anotados en cada panel.
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

Cuando algo falla, normalmente no hay un solo sitio donde mirar: hay cinco. El error está en Elastic, la explicación en Confluence, el ticket en Jira, la estructura real de los datos en DB2. Cada diagnóstico empezaba igual: reconstruir a mano una historia que vive troceada en cinco sistemas distintos.

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
| 1 | `pub-16_s-9_triptico_1-las-llaves-de-los-sistemas.png` — Portada | Abre el carrusel con el objeto que da nombre a la pieza | ✅ Producida y publicada (24 ago) |
| 2 | `pub-16_s-9_triptico_2-cuando-algo-falla-no-hay-un-solo-sitio-donde-mirar.png` — El problema | La dispersión: cinco sistemas, cada uno con un pedazo | ✅ Producida y publicada (24 ago) |
| 3 | `pub-16_s-9_triptico_3-cinco-llaves-que-abren-cada-sistema-de-verdad-en-vivo.png` — La solución | Los 5 conectores como cinco llaves, con el remate de la regla | ✅ Producida y publicada (24 ago) |

> **Nombres de archivo (25 ago):** renombrados a la convención única del proyecto — `pub-N_s-N_componente_titulo-de-la-pieza.ext`, donde el título es el que aparece en el encabezado de la pieza. Ver `Configuraciones/convencion-nombres-piezas-graficas.md`.

> **Cambio de enfoque (21 ago, decisión de Yehimy):** esta pieza era una **infografía vertical** y pasa a **tríptico portada-problema-solución** (`card-triptico`). Encaja mejor con el contenido: el post ya narra un problema — la información repartida en cinco sistemas — antes de dar el inventario de conectores, y la infografía desperdiciaba esa narrativa presentando los 5 conectores como una lista plana. El tríptico deja que el problema respire en su propio panel. Precedentes del formato: Pub 6, Pub 7, Pub 10 y Pub 11.

---

## Brief — Tríptico Pub 16 (`pub-16_s-9_triptico_1` / `_2` / `_3`)

**Tipo de pieza:** Tríptico / `card-triptico` — 3 paneles cuadrados 1080×1080 px, carrusel de Teams (ver `Configuraciones/matriz-componentes-graficos.csv`, fila "Triptico / card-triptico")
**Origen del contenido:** `información-equipo-raona-gco-devsuite.md`, secciones "El problema que había detrás" (primer problema) y "Qué es, por dentro" (tabla de piezas)

### Panel 1 — Portada · `pub-16_s-9_triptico_1-las-llaves-de-los-sistemas.png`

| Elemento | Texto |
|----------|-------|
| Visual (mitad superior) | Un manojo de cinco llaves en trazo lineal, sobre degradado naranja → rojo — el objeto que da nombre a la pieza |
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT · MCP 1/2 |
| Título | Las llaves de los sistemas |
| Logo | Occident completo — banda blanca inferior, alineado a la izquierda |

> **Cambios respecto al brief del 21 ago:** (1) el **subtítulo "Los 5 conectores de la gco-dev-suite" no se usó** — la portada se queda solo con el título y el eyebrow; el subtítulo vive en el asunto del post. (2) **Sin píldora de fase** en la portada (los paneles 2 y 3 sí la llevan — ver la nota de consistencia al final). (3) **Sin numeración `1/3`.** (4) El logo va **completo abajo a la izquierda**, no como isótipo arriba a la izquierda.

### Panel 2 — El problema · `pub-16_s-9_triptico_2-cuando-algo-falla-no-hay-un-solo-sitio-donde-mirar.png`

| Elemento | Texto |
|----------|-------|
| Isótipo | Occident — superior izquierda |
| Cápsula superior derecha (píldora de fase) | Fase 3 \| Multi-entorno |
| Headline (afirmación) | Cuando algo falla, no hay un solo sitio donde mirar. |
| Remate del headline (en rojo, línea aparte) | Hay cinco. |
| Los 5 sistemas — etiquetas bajo cada ventana | Tickets y trazabilidad (Desconectado) · Logs y errores (Sin contexto) · Documentación (Aislada) · Datos reales (Inaccesible) · Interfaces web (Fragmentadas) |
| Copy — entrada (con icono de aspa) | Cada sistema guarda solo un pedazo: |
| Copy — enumeración | El error está en Elastic, la explicación, en Confluence. El ticket, en Jira. La estructura real de los datos, en DB2. |

> **Nota de copy (21 ago):** la frase de entrada del panel 2 **no debe repetir el headline** ("no hay un solo sitio donde mirar. Hay cinco") — lo que añade es que cada sistema tiene solo una parte, que es justo lo que enumera la lista de abajo. Los dos puntos hacen de conjunción.
> Se descartaron por tono estas formulaciones: **"silos de información desconectados"** (jerga de consultoría), **"El diagnóstico actual requiere navegar por..."** (voz institucional, no de colega) y **"Reconstrucción manual de datos"** (frase nominal sin verbo, suena a informe). Tampoco se usa "troceada" aquí: ya está en el dato secundario del mismo panel y repetirla en 1080px la gasta.
> Alternativa aprobada si se quiere menos coloquial: **"Ningún sistema tiene la historia completa:"**

| Visual del problema | Cinco ventanas dispersas, **sin ninguna línea que las conecte** — el punto visual es la desconexión, no la cantidad. Tres arriba, dos abajo |

> **Cambios respecto al brief del 21 ago:** (1) el **eyebrow "EL PROBLEMA" no se usó** — su lugar lo ocupan el isótipo y la píldora de fase. (2) El headline se **partió en dos**: la afirmación en negro y "Hay cinco." en rojo, línea aparte — funciona mejor que la frase corrida que proponía el brief. (3) **Cada ventana lleva ahora su propia etiqueta** con el síntoma entre paréntesis (Desconectado, Sin contexto, Aislada, Inaccesible, Fragmentadas): texto nuevo, no estaba en el brief, y es lo que convierte el visual en argumento. (4) El **dato secundario "Reconstruir a mano una historia troceada en cinco sistemas" no está en la tarjeta** — vive en el cuerpo del post. (5) **Sin numeración `2/3`.**

### Panel 3 — La solución · `pub-16_s-9_triptico_3-cinco-llaves-que-abren-cada-sistema-de-verdad-en-vivo.png`

| Elemento | Texto |
|----------|-------|
| Isótipo + eyebrow | Occident + SOLUCIÓN — superior izquierda, en blanco |
| Cápsula superior derecha (píldora de fase) | Fase 3 \| Multi-entorno |
| Headline | Cinco llaves que abren cada sistema de verdad, en vivo. |
| Fila 1 — Jira | Tickets y trazabilidad de incidencias |
| Fila 2 — Confluence | Documentación interna |
| Fila 3 — Elastic | Logs y errores en tiempo real |
| Fila 4 — DB2 | Estructura real de los datos |
| Fila 5 — Navegador | Acceso a interfaces web internas |
| Highlight (remate, con icono) | La base de datos manda: no adivina el dato, lo consulta. |

> **Cambios respecto al brief del 21 ago:** (1) el eyebrow es **"SOLUCIÓN"**, no "LA SOLUCIÓN", y va junto al isótipo. (2) **El remate se reescribió** (24 ago): de *"nunca se supone un dato, siempre se consulta en vivo"* a **"no adivina el dato, lo consulta"** — la versión anterior repetía el "en vivo" que ya dice el headline dos líneas arriba, y las dos negaciones no aportaban. ⚠️ **Verificar que el cuerpo del post publicado use esta misma formulación** — el texto del post en este documento todavía trae la versión larga. (3) El **CTA "En la próxima publicación: los MCP en acción" no está en la tarjeta** — el puente a Pub 17 vive en el cierre del post. (4) **Sin numeración `3/3`.**

### Especificaciones Figma (`card-triptico`) — tal como se produjo

- **Formato:** **vertical 4:5** (2416×3128 px de exportación), 3 paneles · carrusel de Teams. ⚠️ **No es el 1080×1080 cuadrado** que define la fila "Triptico / card-triptico" de `Configuraciones/matriz-componentes-graficos.csv` — ver la nota de matriz al final
- **Fondos:** portada con degradado naranja `#FA961E` → rojo `#DC0028` · panel 2 blanco · panel 3 rojo sólido `#DC0028`. Sin fondos negros
- **Sin numeración de panel:** no se usaron los chips `1/3`, `2/3`, `3/3`. La secuencia la da el orden del carrusel
- **Píldora de fase:** `Fase 3 | Multi-entorno`, cápsula superior derecha — blanca sobre el panel rojo, gris clara sobre el panel blanco
- **Eyebrow:** mayúsculas, GCO Sans pequeño — rojo `#DC0028` en la portada, blanco en el panel 3. El panel 2 no lleva eyebrow
- **Headline:** CO Bold, display — negro en el panel 2, blanco en portada y panel 3
- **Texto corriente:** GCO Sans regular
- **Las 5 filas del panel 3:** un icono de llave por conector, **mismo tamaño y mismo tratamiento para los cinco** — ninguno destaca sobre otro. Nombre del sistema en CO Bold, su función al lado en GCO Sans. Todo en blanco sobre el fondo rojo, iconos en trazo blanco
- **Función de cada conector en 3-5 palabras**, no en frase completa. Si no cabe, se recorta la función antes que el nombre del sistema
- **Highlight ("La base de datos manda"):** cierre destacado bajo una línea divisoria, acompañado de icono — la frase con más peso después del headline, nunca un pie de página
- **Visual del panel 2:** cinco ventanas en trazo rojo, dispersas y sin conectar, con su etiqueta debajo. El contraste con el panel 3 (cinco llaves ordenadas en lista) es lo que cuenta la historia
- **Logo Occident:** completo en la banda blanca inferior de la portada · isótipo superior izquierda en los paneles 2 y 3
- **Tipografía:** CO para títulos y headlines · GCO Sans para texto corriente

> **⚠️ Consistencia interna a revisar:** la píldora `Fase 3 | Multi-entorno` está en los paneles 2 y 3 pero **no en la portada**, y el eyebrow `GUÍA DE MAESTRÍA…` está solo en la portada. No es un error de contenido, pero conviene decidir el criterio y aplicarlo igual en los trípticos siguientes (Pub 18-19), para que la familia se lea pareja.

> **⚠️ La matriz de componentes quedó desactualizada.** `Configuraciones/matriz-componentes-graficos.csv` define el tríptico como *"3 paneles cuadrados 1080×1080"* con *"numeración 1/3-2/3-3/3 esquina inferior derecha"*. Este tríptico es **vertical 4:5 y sin numeración de panel**. O se actualiza la fila de la matriz, o se registra esta variante como un formato aparte — pero la matriz no puede seguir describiendo algo que ya no se produce así.

> ⚠️ **Ojo con el solapamiento con Pub 17.** La tarjeta comparativa de Pub 17 usa como columna "Antes" casi el mismo material: *"cinco pestañas abiertas, copiar identificadores de un sistema a otro, veinte minutos"*. Si el panel 2 de este tríptico repite ese ritual completo, las dos publicaciones de MCP (martes y jueves de la misma semana) cuentan el mismo problema dos veces. **Reparto propuesto:** este tríptico se queda con **la dispersión** — la información vive en cinco sistemas distintos, es un problema de mapa — y Pub 17 se queda con **el flujo y el tiempo** — las cinco pestañas, los veinte minutos, el diagnóstico paso a paso. Por eso el panel 2 de aquí **no menciona los veinte minutos ni el copiar-pegar de identificadores**: ese dato es el gancho de Pub 17. ✅ **Reparto confirmado por Yehimy el 21 ago** — el brief de Pub 17 y el post de esta Pub 16 quedaron ajustados en consecuencia.

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Los 5 conectores MCP (Jira, Confluence, Elastic, DB2, navegador) y la analogía de "las llaves" | `información-equipo-raona-gco-devsuite.md` — "Qué es, por dentro" |
| El problema de la información repartida en 5 sistemas (panel 2 del tríptico) | `información-equipo-raona-gco-devsuite.md` — "El problema que había detrás", primer problema |
| "La base de datos manda" | `información-equipo-raona-gco-devsuite.md` — "Las decisiones de diseño que la definen", decisión 1 |
| Conteo de 5 conectores confirmado como vigente | Validado en `Reuniones/seguimientos-semanales/transcripcion_reunion-seguimiento-semanal_18-08-26.pdf` (min. ~10:00, Yehimy) — sin objeción de Jonatan/Óscar |
