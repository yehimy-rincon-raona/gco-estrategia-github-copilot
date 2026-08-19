# Canal Anuncios y Tips — Pub 18 · Los 3 agentes que deciden, ejecutan y validan por ti
> Canal: Anuncios y Tips Ágiles · Tipo: Anuncio de componente (serie Agentes, 1/2) · Martes de su semana de producción
> ⏱️ **Semana de producción: siguiente disponible tras Pub 16-17** (creada el 18 ago — este número reemplaza al antiguo "Pub 16" de Agentes, que ahora se reparte en 2 publicaciones propias)
> 📍 **Teams GCO: sigue congelado, sin fecha real.** El día y fecha se confirman cuando el equipo de Nibaldo reactive publicaciones (ver `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md` — retoma prevista 14 sep).
> 📍 **Próximo destino, una vez esté como borrador final: Teams Raona** (visibilidad/prueba, mismo tratamiento que Pub 10 y Pub 11) — no Teams GCO, que sigue congelado.
> Estado: 🟡 **Propuesta de contenido (18 ago)** — falta producir la pieza gráfica y validar con Nibaldo/Guillermo
> Fuente: `Conocimiento/temas_mes-agosto/información-equipo-raona-gco-devsuite.md` (primera respuesta del equipo de Nibaldo, 6 ago 2026)
> Plan: `Planeacion/Semana-7_plan-agosto-devsuite/plan-agosto_devsuite-skills-mcp-agentes.md` — Pub 16 original, sección 4 (renumerado a Pub 18 el 18 ago)

---

## Objetivo de esta publicación

Cierra la serie gco-dev-suite (Pub 12-19). Presenta a los 3 agentes — el "criterio" de la suite — y qué hace cada uno. La segunda (Pub 19) profundiza con el ejemplo real de un cambio que toca varias capas.

---

## Post listo para Teams

**Asunto:** `🧭 Los 3 agentes que deciden, ejecutan y validan por ti`

---

🧭 **Los 3 agentes que deciden, ejecutan y validan por ti**

De las 3 piezas de la gco-dev-suite, los agentes son el criterio: escuchan lo que pides, deciden qué hay que hacer y en qué orden, y saben cuándo parar a preguntar. Solo uno habla contigo — los otros dos son especialistas a los que llama cuando hacen falta.

- **El coordinador** — la puerta de entrada única. Escucha en lenguaje natural, decide qué tarea corresponde y, si se puede repartir, lanza varias líneas de investigación en paralelo.
- **El orquestador de cambios** — entra cuando un cambio afecta a más de una capa. Reconoce el tipo de cambio (18 situaciones catalogadas) y pone las tareas en el orden correcto.
- **El validador** — el control de calidad final. Aplica 12 reglas de coherencia entre capas. Es deliberadamente conservador: detecta los problemas, pero no los corrige por su cuenta.

👉 En la próxima publicación vemos a los tres trabajando juntos, en un caso real: añadir un campo que toca cinco capas.

---

## Piezas gráficas de esta publicación

| # | Pieza | Rol | Estado |
|---|-------|-----|--------|
| 1 | Tríptico "Los 3 agentes" (`18-S10-card-triptico_3-agentes-portada` · `-roles` · `-regla`) | Acompaña el post — presenta a los 3 agentes y la regla que los une, mismo formato que las series de Casos de Uso Reales | 🔄 Brief listo, falta producir en Figma |

---

## Brief — Tríptico Pub 18 (`18-S10-card-triptico_3-agentes-*`)

**Tipo de pieza:** Tríptico / card-triptico, 3 paneles 1080×1080 px, carrusel (ver `Configuraciones/matriz-componentes-graficos.csv`, fila "Triptico / card-triptico")
**Origen del contenido:** `información-equipo-raona-gco-devsuite.md`, sección "Los tres agentes"

### Panel 1 — Portada (`18-S10-card-triptico_3-agentes-portada`)

| Elemento | Texto |
|----------|-------|
| Ilustración | Brújula o mapa — degradado naranja→rojo, mismo tratamiento que la portada de Pub 12 |
| Etiqueta (pill) | GCO DEV SUITE · AGENTES |
| Título | Los 3 agentes que deciden, ejecutan y validan por ti |
| Logo | Occident — inferior |

### Panel 2 — Los roles (`18-S10-card-triptico_3-agentes-roles`)

| Elemento | Texto |
|----------|-------|
| Pill de fase | Fase 3 \| Multi-entorno |
| Título | Uno habla contigo. Los otros dos, solo cuando hace falta |
| Rol 1 | **Coordinador** — puerta de entrada única, decide qué tarea corresponde y reparte el trabajo |
| Rol 2 | **Orquestador de cambios** — reconoce 18 tipos de cambio catalogados, ordena las tareas |
| Rol 3 | **Validador** — 12 reglas de coherencia; detecta los problemas, no los corrige por su cuenta |

### Panel 3 — La regla (`18-S10-card-triptico_3-agentes-regla`)

| Elemento | Texto |
|----------|-------|
| Tag | REGLA DE ORO |
| Título (protagonista) | El agente decide. La skill explica. El conector busca el dato real. |
| Remate | Nada duplicado: el agente no genera código, la skill no habla con la base de datos, el conector no decide qué se busca |
| Numeración | `3/3` — chip esquina inferior derecha |

> Diseño (los 3 paneles): fondo blanco (panel 2), degradado naranja `#FA961E`→rojo `#DC0028` (panel 1), rojo sólido `#DC0028` (panel 3) — mismo sistema que el tríptico de Pub 12. Títulos CO Bold, texto corriente GCO Sans.

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Los 3 agentes (coordinador, orquestador de cambios, validador) y sus roles | `información-equipo-raona-gco-devsuite.md` — "Los tres agentes" |
| La regla que une agentes, skills y MCP | `información-equipo-raona-gco-devsuite.md` — "Qué es, por dentro" |
