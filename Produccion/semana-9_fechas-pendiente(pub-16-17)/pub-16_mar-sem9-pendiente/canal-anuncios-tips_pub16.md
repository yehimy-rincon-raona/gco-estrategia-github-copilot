# Canal Anuncios y Tips — Pub 16 · Las llaves de los sistemas: los 5 conectores MCP
> Canal: Anuncios y Tips Ágiles · Tipo: Anuncio de componente (serie MCP, 1/2) · Martes de su semana de producción
> ⏱️ **Semana de producción: siguiente disponible tras Pub 14-15** (creada el 18 ago — este número reemplaza al antiguo "Pub 15" de MCP, que ahora se reparte en 2 publicaciones propias)
> 📍 **Teams GCO: sigue congelado, sin fecha real.** El día y fecha se confirman cuando el equipo de Nibaldo reactive publicaciones (ver `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md` — retoma prevista 14 sep).
> 📍 **Próximo destino, una vez esté como borrador final: Teams Raona** (visibilidad/prueba, mismo tratamiento que Pub 10 y Pub 11) — no Teams GCO, que sigue congelado.
> Estado: 🟠 **Post cerrado y brief listo para producir (21 ago)** — texto final, especificaciones Figma completas. El conteo de **5 conectores** quedó validado en la reunión del 18 ago (Jonatan + Óscar), resolviendo el bloqueante que arrastraba el guion del Video 04. Falta únicamente producir el **tríptico** en Figma (formato cambiado el 21 ago — antes era infografía vertical) y validar con Nibaldo/Guillermo
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
| 1 | Tríptico "Las llaves de los sistemas" (`16-S9-Card_pub16-portada` / `-problema` / `-solucion`) | Carrusel de 3 paneles — narra la dispersión de la información y la resuelve con los 5 conectores | 🔄 Brief listo, falta producir en Figma |

> **Cambio de enfoque (21 ago, decisión de Yehimy):** esta pieza era una **infografía vertical** (`16-S9-infografia_5-conectores-mcp`) y pasa a **tríptico portada-problema-solución** (`card-triptico`). Encaja mejor con el contenido: el post ya narra un problema — la información repartida en cinco sistemas — antes de dar el inventario de conectores, y la infografía desperdiciaba esa narrativa presentando los 5 conectores como una lista plana. El tríptico deja que el problema respire en su propio panel. Precedentes del formato: Pub 6, Pub 7, Pub 10 y Pub 11.

---

## Brief — Tríptico Pub 16 (`16-S9-Card_pub16-portada` / `-problema` / `-solucion`)

**Tipo de pieza:** Tríptico / `card-triptico` — 3 paneles cuadrados 1080×1080 px, carrusel de Teams (ver `Configuraciones/matriz-componentes-graficos.csv`, fila "Triptico / card-triptico")
**Origen del contenido:** `información-equipo-raona-gco-devsuite.md`, secciones "El problema que había detrás" (primer problema) y "Qué es, por dentro" (tabla de piezas)

### Panel 1 — Portada · `16-S9-Card_pub16-portada` · `1/3`

| Elemento | Texto |
|----------|-------|
| Cápsula superior derecha (píldora de fase) | Fase 3 \| Multi-entorno |
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT · MCP 1/2 |
| Título | Las llaves de los sistemas |
| Subtítulo | Los 5 conectores de la gco-dev-suite |
| Visual | Un manojo de cinco llaves — el objeto que da nombre a la pieza, dibujado en trazo lineal |
| Numeración | `1/3` |

### Panel 2 — El problema · `16-S9-Card_pub16-problema` · `2/3`

| Elemento | Texto |
|----------|-------|
| Eyebrow | EL PROBLEMA |
| Headline (afirmación) | Cuando algo falla, no hay un solo sitio donde mirar. Hay cinco. |
| Copy — entrada | Cada sistema guarda solo un pedazo: |
| Copy — enumeración | El error está en Elastic. La explicación, en Confluence. El ticket, en Jira. La estructura real de los datos, en DB2. |

> **Nota de copy (21 ago):** la frase de entrada del panel 2 **no debe repetir el headline** ("no hay un solo sitio donde mirar. Hay cinco") — lo que añade es que cada sistema tiene solo una parte, que es justo lo que enumera la lista de abajo. Los dos puntos hacen de conjunción.
> Se descartaron por tono estas formulaciones: **"silos de información desconectados"** (jerga de consultoría), **"El diagnóstico actual requiere navegar por..."** (voz institucional, no de colega) y **"Reconstrucción manual de datos"** (frase nominal sin verbo, suena a informe). Tampoco se usa "troceada" aquí: ya está en el dato secundario del mismo panel y repetirla en 1080px la gasta.
> Alternativa aprobada si se quiere menos coloquial: **"Ningún sistema tiene la historia completa:"**

| Visual del problema | Cinco ventanas o pestañas dispersas, **sin ninguna línea que las conecte** — el punto visual es la desconexión, no la cantidad |
| Dato secundario | Reconstruir a mano una historia troceada en cinco sistemas. |
| Numeración | `2/3` |

### Panel 3 — La solución · `16-S9-Card_pub16-solucion` · `3/3`

| Elemento | Texto |
|----------|-------|
| Eyebrow | LA SOLUCIÓN |
| Headline | Cinco llaves que abren cada sistema de verdad, en vivo. |
| Fila 1 — Jira | Tickets y trazabilidad de incidencias |
| Fila 2 — Confluence | Documentación interna |
| Fila 3 — Elastic | Logs y errores en tiempo real |
| Fila 4 — DB2 | Estructura real de los datos |
| Fila 5 — Navegador | Acceso a interfaces web internas |
| Highlight (remate) | La base de datos manda: nunca se supone un dato, siempre se consulta en vivo. |
| CTA | 👆 En la próxima publicación: los MCP en acción |
| Numeración | `3/3` |

### Especificaciones Figma (`card-triptico`)

- **Formato:** 1080×1080 px por panel (3 paneles · carrusel de Teams)
- **Fondos (según la matriz de componentes):** portada con degradado naranja `#FA961E` → rojo `#DC0028` · panel 2 blanco · panel 3 rojo sólido `#DC0028`. Sin fondos negros
- **Numeración:** chip pequeño en esquina inferior derecha (`1/3`, `2/3`, `3/3`)
- **Eyebrow:** mayúsculas, GCO Sans pequeño — rojo `#DC0028` sobre el panel blanco, blanco sobre los paneles con fondo de color
- **Headline:** CO Bold, display — negro en el panel 2, blanco en portada y panel 3
- **Texto corriente:** GCO Sans regular
- **Las 5 filas del panel 3:** un icono de llave por conector, **mismo tamaño y mismo tratamiento para los cinco** — ninguno destaca sobre otro. Nombre del sistema en CO Bold, su función al lado en GCO Sans. Sobre el fondo rojo, todo en blanco con los iconos en trazo blanco
- **Aprieta el panel 3:** son 5 filas más headline, remate y CTA — la función de cada conector va en 3-5 palabras, no en frase completa. Si no cabe, se recorta la función antes que el nombre del sistema
- **Highlight ("La base de datos manda"):** la frase con más peso después del headline — tratarla como cierre destacado, no como pie de página
- **Visual del panel 2:** cinco ventanas en gris, dispersas y sin conectar. El contraste con el panel 3 (cinco llaves ordenadas) es lo que cuenta la historia
- **Logo Occident:** isótipo superior izquierda en la portada, inferior derecha en los paneles 2 y 3
- **Tipografía:** CO para títulos y headlines · GCO Sans para texto corriente · monospace para nombres de sistema si se tratan como etiqueta técnica

> ⚠️ **Ojo con el solapamiento con Pub 17.** La tarjeta comparativa de Pub 17 usa como columna "Antes" casi el mismo material: *"cinco pestañas abiertas, copiar identificadores de un sistema a otro, veinte minutos"*. Si el panel 2 de este tríptico repite ese ritual completo, las dos publicaciones de MCP (martes y jueves de la misma semana) cuentan el mismo problema dos veces. **Reparto propuesto:** este tríptico se queda con **la dispersión** — la información vive en cinco sistemas distintos, es un problema de mapa — y Pub 17 se queda con **el flujo y el tiempo** — las cinco pestañas, los veinte minutos, el diagnóstico paso a paso. Por eso el panel 2 de aquí **no menciona los veinte minutos ni el copiar-pegar de identificadores**: ese dato es el gancho de Pub 17. ✅ **Reparto confirmado por Yehimy el 21 ago** — el brief de Pub 17 y el post de esta Pub 16 quedaron ajustados en consecuencia.

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Los 5 conectores MCP (Jira, Confluence, Elastic, DB2, navegador) y la analogía de "las llaves" | `información-equipo-raona-gco-devsuite.md` — "Qué es, por dentro" |
| El problema de la información repartida en 5 sistemas (panel 2 del tríptico) | `información-equipo-raona-gco-devsuite.md` — "El problema que había detrás", primer problema |
| "La base de datos manda" | `información-equipo-raona-gco-devsuite.md` — "Las decisiones de diseño que la definen", decisión 1 |
| Conteo de 5 conectores confirmado como vigente | Validado en `Reuniones/seguimientos-semanales/transcripcion_reunion-seguimiento-semanal_18-08-26.pdf` (min. ~10:00, Yehimy) — sin objeción de Jonatan/Óscar |
