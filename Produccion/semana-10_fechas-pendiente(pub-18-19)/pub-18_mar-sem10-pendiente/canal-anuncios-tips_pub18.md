# Canal Anuncios y Tips — Pub 18 · Los 3 agentes que deciden, ejecutan y validan contigo
> Canal: Anuncios y Tips Ágiles · Tipo: Anuncio de componente (serie Agentes, 1/2) · Martes de su semana de producción
> ⏱️ **Semana de producción: siguiente disponible tras Pub 16-17** (creada el 18 ago — este número reemplaza al antiguo "Pub 16" de Agentes, que ahora se reparte en 2 publicaciones propias)
> 📍 **Teams GCO: sigue congelado, sin fecha real.** El día y fecha se confirman cuando el equipo de Nibaldo reactive publicaciones (ver `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md` — retoma prevista 14 sep).
> 📍 **Próximo destino, una vez esté como borrador final: Teams Raona** (visibilidad/prueba, mismo tratamiento que Pub 16 y Pub 17) — no Teams GCO, que sigue congelado.
> Estado: ✅ **Lista para publicar en Teams Raona (28 ago 2026)** — post final y los 3 paneles del tríptico producidos, revisados y corregidos. Este documento está alineado con las piezas exportadas a las 16:01. Queda la validación con Nibaldo/Guillermo antes de la cola de republicación en Teams GCO.
> Fuente: `Conocimiento/temas_mes-agosto/información-equipo-raona-gco-devsuite.md` (primera respuesta del equipo de Nibaldo, 6 ago 2026)
> Plan: `Planeacion/Semana-7_plan-agosto-devsuite/plan-agosto_devsuite-skills-mcp-agentes.md` — Pub 16 original, sección 4 (renumerado a Pub 18 el 18 ago)

---

## Objetivo de esta publicación

Primera de dos publicaciones sobre agentes. Presenta a los 3 agentes — el criterio de la suite — y qué hace cada uno. La segunda (Pub 19) profundiza con el ejemplo real de un cambio que toca varias capas y cierra la serie gco-dev-suite (Pub 12-19).

**Reparto con Pub 19** (las dos salen la misma semana, martes y jueves — mismo cuidado que se aplicó al par Pub 16-17): esta publicación se queda con **quién es quién**, el mapa de los tres roles y la regla que los separa. Pub 19 se queda con **el flujo en el tiempo y el freno de mano**, los seis pasos y el paso 3, donde el agente para y espera aprobación. Aquí no se detalla el flujo de seis pasos: ese es el gancho de Pub 19.

---

## Post listo para Teams

**Asunto:** `🧭 Los 3 agentes que deciden, ejecutan y validan contigo`

---

De las 3 piezas de la gco-dev-suite, los agentes son el criterio: escuchan lo que pides, deciden qué hay que hacer y en qué orden, y saben cuándo parar a preguntar. Solo uno habla contigo — los otros dos son especialistas a los que llama cuando hacen falta.

- **El coordinador** — la puerta de entrada única. Escucha en lenguaje natural, decide qué tarea corresponde y, si se puede repartir, lanza varias líneas de investigación en paralelo.
- **El orquestador de cambios** — entra cuando un cambio afecta a más de una capa. Reconoce el tipo de cambio (18 situaciones catalogadas) y pone las tareas en el orden correcto.
- **El validador** — el control de calidad final. Aplica 12 reglas de coherencia entre capas. Es deliberadamente conservador: detecta los problemas, pero no los corrige por su cuenta.

No hay comandos que aprenderse. Se pide en lenguaje natural, y el coordinador decide el resto.

👉 En la próxima publicación vemos a los tres trabajando juntos, en un caso real: añadir un campo que toca cinco capas.

---

## Piezas gráficas de esta publicación

| # | Pieza | Rol | Estado |
|---|-------|-----|--------|
| 1 | `pub-18_s-10_triptico_1-los-3-agentes-que-deciden-ejecutan-y-validan.png` | Portada del tríptico | ✅ **Producida (28 ago)** — conforme al brief |
| 2 | `pub-18_s-10_triptico_2-uno-habla-contigo-los-otros-dos-cuando-hace-falta.png` | Panel de roles — quién es quién | ✅ **Producida y corregida (28 ago, 16:01)** — conforme al brief |
| 3 | `pub-18_s-10_triptico_3-el-agente-decide-la-skill-explica-el-conector-busca.png` | Panel de la regla que une las 3 piezas | ✅ **Producida (28 ago)** — conforme al brief |

> **Nombres según la convención vigente** (`Configuraciones/convencion-nombres-piezas-graficas.md`, 25 ago): `pub-N_s-N_componente_titulo-de-la-pieza`. Sustituyen a la nomenclatura anterior del brief del 18 ago (`18-S10-card-triptico_3-agentes-portada`), que ya no se usa. Los títulos van recortados respecto al encabezado completo de cada panel para no pasarse del límite de ruta de Windows — el criterio es conservar la cabeza de la frase.

> ✅ **Decisión cerrada (28 ago) — el segmento de componente es `triptico`, no `Card`.** Figma exporta estas piezas como `pub-18_s-10_Card_N-...`; la convención (`convencion-nombres-piezas-graficas.md`, 25 ago) toma ese segmento del vocabulario de `matriz-componentes-graficos.csv`, **en minúsculas y sin tildes**, donde el componente se llama `triptico` y `Card` no existe. **Yehimy confirmó que manda la convención:** los archivos se renombran a `triptico` después de exportar. Aplicado a los tres paneles. **Vale para toda pieza futura de este tipo — el nombre del grupo de Figma no viaja al nombre del archivo.**

### Decisión de producción — las etiquetas `Rol N` se quedan (28 ago)

Se planteó quitarlas por venir de los rótulos de la columna izquierda de la tabla de este brief, aplicando el criterio del 21 ago (ninguna nomenclatura interna sale en pieza de cara al lector). **Yehimy decidió conservarlas y el criterio no aplica aquí:** el precedente del 21 ago era el código `HILO 14-a`, que no significaba nada para quien lee; `Rol 1`, `Rol 2` y `Rol 3` sí hacen un trabajo — enumeran, y dejan claro de un vistazo que los agentes son tres.

> Matiz abierto, de estilo y no de contenido: la palabra **"Función"** sí es el nombre de un campo de la tabla, y el texto que va debajo se lee como función sin anunciarlo — en Pub 16 el panel de los cinco conectores va con nombre + función directa, sin rótulo de campo. `Rol 1` a secas conservaría la enumeración sin el rótulo. Queda a criterio de Yehimy, que es quien define el estilo de las tarjetas.

### Corrección aplicada en el panel 2 (28 ago, 16:01)

**Se añadió el highlight de cierre `Sin comandos que aprenderse: se pide en lenguaje natural`**, que faltaba en la primera exportación. Va bajo una línea divisoria, con icono a la izquierda y el texto en dos líneas — tal como pedía el brief. Es la frase que baja el listón de entrada para quien no hizo la formación (condición 2 de Óscar).

### Decisión cerrada — el título dice "contigo", no "por ti" (28 ago)

El brief del 18 ago traía *"Los 3 agentes que deciden, ejecutan y validan **por ti**"*. Se planteó que "por ti" se lee como "en tu lugar" y choca de frente con el argumento central del bloque — y con la pieza entera de Pub 19, tres días después — que es el contrario: nada se ejecuta sin tu aprobación, la suite propone y espera.

**Yehimy lo cambió a "contigo"**, en la portada y en el asunto del post. Encaja además con el titular del panel 2 (*"Uno habla contigo"*). El nombre del archivo no cambia: se recorta antes de esa palabra (`...deciden-ejecutan-y-validan`), así que sigue siendo válido.

> **Criterio que sale de aquí:** en esta serie la suite nunca se describe como que hace cosas *en lugar* de la persona. Trabaja *contigo*, propone y espera. Aplica a los títulos y CTA de Pub 19 y a los guiones de los Vídeos 07 y 08.

---

## Brief — Tríptico Pub 18 (`pub-18_s-10_triptico_*`)

**Tipo de pieza:** Tríptico / card-triptico, **3 paneles verticales 4:5 (~2416×3128 px)**, carrusel de Teams — el formato vigente desde Pub 16, no el cuadrado 1080×1080 de las series anteriores (ver `Configuraciones/matriz-componentes-graficos.csv`, fila "Triptico / card-triptico")
**Origen del contenido:** `información-equipo-raona-gco-devsuite.md`, secciones "Los tres agentes" y "Qué es, por dentro"

### Panel 1 — Portada (`...triptico_1-los-3-agentes-que-deciden-ejecutan-y-validan`)

| Elemento | Texto |
|----------|-------|
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT · AGENTES 1/2 |
| Título | Los 3 agentes que deciden, ejecutan y validan contigo |
| Ilustración | Brújula rodeada de engranajes y un gráfico de barras, en trazo blanco sobre el degradado — la idea es criterio y dirección, no automatismo |
| Logo | Occident — completo, banda blanca inferior |

> **Sin píldora de fase en la portada.** El brief la pedía; la producción replicó el criterio de Pub 16 y la portada se queda solo con eyebrow y título. Los paneles 2 y 3 sí la llevan. Ver la nota de criterio de familia al final del documento.

### Panel 2 — Los roles (`...triptico_2-uno-habla-contigo-los-otros-dos-cuando-hace-falta`)

| Elemento | Texto |
|----------|-------|
| Isótipo + píldora de fase | Occident superior izquierda · Fase 3 \| Multi-entorno superior derecha |
| Título | Uno habla contigo. Los otros dos, solo cuando hace falta |
| Rol 1 — nombre (rojo) | Coordinador |
| Rol 1 — rótulo | Rol 1 - Función |
| Rol 1 — función | La puerta de entrada única. Decide qué tarea corresponde y reparte el trabajo |
| Rol 2 — nombre (rojo) | Orquestador de cambios |
| Rol 2 — rótulo | Rol 2 - Función |
| Rol 2 — función | Reconoce el tipo de cambio — 18 situaciones catalogadas — y ordena las tareas |
| Rol 3 — nombre (rojo) | Validador |
| Rol 3 — rótulo | Rol 3 - Función |
| Rol 3 — función | 12 reglas de coherencia entre capas. Detecta los problemas; no los corrige por su cuenta |
| Highlight de cierre | Sin comandos que aprenderse: se pide en lenguaje natural |

> Los tres bloques van con icono en trazo rojo a la izquierda, separados por línea divisoria. El highlight de cierre va también bajo divisoria, con su propio icono. **Las filas "rótulo" son texto visible en la pieza** — se añadieron en producción y se conservan por decisión de Yehimy (ver más abajo); antes eran solo los nombres de fila de esta tabla.

### Panel 3 — La regla (`...triptico_3-el-agente-decide-la-skill-explica-el-conector-busca`)

| Elemento | Texto |
|----------|-------|
| Isótipo + eyebrow | Occident + LA REGLA — superior izquierda, en blanco |
| Píldora de fase | Fase 3 \| Multi-entorno |
| Título (protagonista) | El agente decide. La skill explica. El conector busca el dato real. |
| Remate | Nada duplicado: el agente no genera código, la skill no habla con la base de datos, el conector no decide qué se busca |
| Logo | Occident — isótipo superior izquierda (el logo completo solo va en la portada) |

---

### Especificaciones Figma (`card-triptico`) — tal como se produjo

> ✅ **Verificado contra las tres piezas exportadas (28 ago, 16:01).** La regla de las flechas se respetó: el panel 2 presenta a los tres agentes como tres bloques independientes separados por línea divisoria, **sin flechas que los encadenen** — nada de `Coordinador → Orquestador → Validador`. El reparto en paralelo se lee correctamente.

- **Formato:** vertical 4:5 (~2416×3128 px de exportación), 3 paneles · carrusel de Teams. **Referencia directa: el tríptico de Pub 16** (`pub-16_s-9_triptico_*`) — misma familia visual, es el precedente más cercano
- **Fondos:** portada con degradado naranja `#FA961E` → rojo `#DC0028` · panel 2 blanco · panel 3 rojo sólido `#DC0028`. Sin fondos negros
- **Sin numeración de panel:** no llevan chips `1/3`, `2/3`, `3/3`. La secuencia la da el orden del carrusel y el número al inicio del nombre de archivo
- **Los 3 roles del panel 2:** mismo tamaño y mismo tratamiento para los tres — ninguno destaca sobre otro, aunque solo uno hable con el usuario. Nombre del agente en CO Bold, su función al lado en GCO Sans
- **⚠️ Nada en paralelo se dibuja con flechas en cadena** (regla del 25 ago, salida de la producción de Pub 17). El coordinador *reparte* trabajo y *lanza líneas en paralelo*: si el panel 2 los encadena `Coordinador → Orquestador → Validador`, la pieza dice lo contrario del texto. Si hace falta una relación visual, es **radial** — el coordinador al centro y los dos especialistas a los lados, a los que llama cuando hacen falta — no una secuencia
- **⚠️ La suite propone y pide confirmación, nunca actúa sola** (misma regla). El panel 3 y el remate no pueden formularse como que los agentes ejecutan por su cuenta
- **Highlight del panel 2 ("Sin comandos que aprenderse"):** cierre destacado bajo una línea divisoria, no un pie de página
- **Eyebrow:** mayúsculas, GCO Sans pequeño — rojo `#DC0028` en la portada, blanco en el panel 3. El panel 2 no lleva eyebrow
- **Headline:** CO Bold, display — negro en el panel 2, blanco en portada y panel 3
- **Texto corriente:** GCO Sans regular
- **Logo Occident:** completo en la banda inferior de la portada · isótipo superior izquierda en los paneles 2 y 3

> **✅ Criterio de familia — resuelto en producción (28 ago).** El brief proponía llevar la píldora de fase también a la portada. **La producción replicó el criterio de Pub 16:** portada con eyebrow y sin píldora, paneles 2 y 3 con isótipo y píldora. Queda así de forma consciente y es lo que se aplica de aquí en adelante — los trípticos de la serie se leen parejos entre sí, que era el objetivo. La portada se distingue del resto por diseño, no por metadatos.

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Los 3 agentes (coordinador, orquestador de cambios, validador) y sus roles | `información-equipo-raona-gco-devsuite.md` — "Los tres agentes" |
| Las cifras 18 tipos de cambio y 12 reglas de coherencia | `información-equipo-raona-gco-devsuite.md` — "Los tres agentes" y "Los números" |
| La regla que une agentes, skills y MCP | `información-equipo-raona-gco-devsuite.md` — "Qué es, por dentro" |
| Sin comandos que aprenderse, lenguaje natural, una sola puerta de entrada | `información-equipo-raona-gco-devsuite.md` — "Las decisiones de diseño que la definen", decisión 3 |

> **Condición de Óscar (25 ago) — cómo la cumple este bloque:** cada componente necesita caso de uso concreto, ejemplo y vídeo. Para Agentes, el **caso de uso y el ejemplo** son Pub 19 (añadir un campo, los 6 pasos) y el **vídeo** es el Vídeo 07 de la gco-dev-suite (`Produccion/Videos/v07_gco-dev-suite/`). Acta: `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_25-08-26.md`.
