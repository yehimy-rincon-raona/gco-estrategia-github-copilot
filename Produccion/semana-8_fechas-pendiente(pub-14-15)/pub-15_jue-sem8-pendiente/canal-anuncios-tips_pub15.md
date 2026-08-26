# Canal Anuncios y Tips — Pub 15 · La carpeta que le enseña a GitHub Copilot cómo lo hacen aquí
> Canal: Anuncios y Tips Ágiles · Tipo: Tip técnico (serie Skills, 3/3) · Jueves de su semana de producción — cierra el zoom de Skills abierto en Pub 13-14
> ⏱️ **Semana de producción: misma semana que Pub 14** (reorganizada el 18 ago)
> 📍 **Teams GCO: sigue congelado, sin fecha real.** El día y fecha se confirman cuando el equipo de Nibaldo reactive publicaciones (ver `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md` — retoma prevista 14 sep).
> 📍 **Próximo destino, una vez esté como borrador final: Teams Raona** (visibilidad/prueba, mismo tratamiento que Pub 10 y Pub 11) — no Teams GCO, que sigue congelado.
> Estado: ✅ **3 piezas gráficas producidas y corregidas (18 ago)** — cápsula (`Fase 3 | Multi-entorno`) y numeración (`1/3`, `2/3`, `3/3`) ya arregladas, listas para publicar de prueba en Teams Raona. Sigue pendiente: confirmar con Nibaldo si `dotnet-review`/`cobol-analyzer` son parte real de las 32 skills
> Fuente: `Conocimiento/temas_mes-agosto/material-base_skills-que-son-y-cuando-usarlas.md` (material enviado por Esteban Serrano, Raona/Pasiona) — secciones 1.2–1.4, 2.1
> Plan: `Planeacion/Semana-7_plan-agosto-devsuite/plan-agosto_devsuite-skills-mcp-agentes.md` — sección 4
>
> ⚠️ **Intercambio de contenido con Pub 14 (18 ago, decisión de Yehimy):** la anatomía de una Skill ocupaba Pub 14; "el mapa completo" ocupaba Pub 15. Se intercambian por sentido narrativo — primero se muestra dónde encaja la Skill frente a los demás niveles (Pub 14, panorámico), y solo después la anatomía por dentro (esta pieza, lo más específico) — así el zoom cierra en el punto más profundo, en vez de volver a lo panorámico al final. Las 3 piezas gráficas (ya producidas y corregidas) se renombraron de `14-S8-card-*` a `15-S8-card-*`.

---

## Objetivo de esta publicación

Tercera y última de tres publicaciones sobre Skills (Pub 13 explicó el concepto, Pub 14 mostró dónde encaja frente a los demás niveles, esta cierra con la anatomía real — el zoom más profundo). Esta pieza muestra la carpeta, el archivo obligatorio, y por qué tener muchas Skills no penaliza el rendimiento (carga progresiva).

⚠️ **Pendiente de confirmar con Nibaldo antes de publicar:** si `dotnet-review` y `cobol-analyzer` (los dos ejemplos de este post) son parte de las 32 Skills reales de la gco-dev-suite, o son solo ejemplos de la plantilla base `copilot-template-gco` — ver `Planeacion/Semana-7_plan-agosto-devsuite/plan-agosto_devsuite-skills-mcp-agentes.md`, sección 4.

---

## Post listo para Teams

**Asunto:** `🗂️ La carpeta que le enseña a GitHub Copilot cómo lo hacen aquí`

---

🗂️ **La carpeta que le enseña a GitHub Copilot cómo lo hacen aquí**

Una Skill no es magia — es una carpeta con un archivo obligatorio: `SKILL.md`. Dentro, solo dos campos importan: `name` (el identificador) y `description` (qué hace y, sobre todo, cuándo debe usarse — es lo que hace que el agente la active solo).

Ejemplo real, de la plantilla `copilot-template-gco`:

```
.github/skills/dotnet-review/
├── SKILL.md
└── references/
    └── checklist.md
```

Y no se carga todo de golpe: primero solo el `name` y la `description` (siempre visibles para el agente); el cuerpo completo se carga solo si la Skill aplica; los recursos de `references/` solo si el proceso los necesita. Así se pueden tener muchas Skills sin penalizar el rendimiento.

👉 Guarda estas 3 tarjetas — la anatomía, el "cerebro" (metadata) y la carga progresiva, cada una explicada por separado. Con esto cerramos la serie de Skills.

---

## Piezas gráficas de esta publicación

| # | Pieza | Rol | Estado |
|---|-------|-----|--------|
| 1 | Tarjeta "Anatomía de una Skill" (`pub-15_s-8_tarjeta-minimalista_1-anatomia-de-una-skill`) | Estructura de carpeta: `.github/skills/dotnet-review/` → `SKILL.md` → `references/checklist.md` | ✅ Producida y corregida |
| 2 | Tarjeta "El cerebro de la skill — Metadata" (`pub-15_s-8_tarjeta-minimalista_2-el-cerebro-de-la-skill-metadata`) | Los 2 campos que importan: `name` y `description`, y por qué la descripción es el disparador de activación | ✅ Producida y corregida |
| 3 | Tarjeta "Rendimiento y carga progresiva" (`pub-15_s-8_tarjeta-minimalista_3-rendimiento-y-carga-progresiva`) | Las 3 fases de carga: identificación rápida → cuerpo → recursos bajo demanda | ✅ Producida y corregida |

---

## Brief — Tarjetas Pub 15 (`pub-15_s-8_tarjeta-minimalista_1-anatomia-de-una-skill` / `-cerebro-skill` / `-rendimiento-y-carga-skill`)

**Tipo de pieza:** 3 tarjetas independientes, cada una 1080×1350 px aprox.
**Origen del contenido:** `material-base_skills-que-son-y-cuando-usarlas.md`, secciones 1.2 (Anatomía), 1.3 (ejemplo `dotnet-review`), 2.1 (carga progresiva), 9.1 (la descripción como disparador)

### Pieza 1 — Anatomía de una Skill ✅ contenido correcto

Estructura de carpeta (`dotnet-review/` → `SKILL.md` obligatorio → `references/checklist.md` opcional) + explicación de que sin `SKILL.md` la Skill no existe para el sistema. Coincide con la fuente.

### Pieza 2 — El cerebro de la skill (Metadata) ✅ contenido correcto

Explica `name` y `description` como los 2 campos que el agente lee, y que la descripción es lo que dispara la activación automática (fuente: sección 9.1). Usa `dotnet-review` como ejemplo, igual que la pieza 1 — las 3 piezas se sienten del mismo caso.

### Pieza 3 — Rendimiento y carga progresiva ✅ contenido correcto

Las 3 fases de carga progresiva (identificación rápida del nombre/descripción → carga del cuerpo si aplica → recursos de `references/` bajo demanda). Coincide exactamente con la sección 2.1 de la fuente.

> Diseño (las 3 piezas): fondo blanco, rojo `#DC0028` como acento, ilustraciones lineales — sin fondos negros. Título CO Bold, texto corriente GCO Sans. Cápsula `Fase 3 | Multi-entorno` y numeración `1/3`-`2/3`-`3/3` ya aplicadas.

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Anatomía de una Skill (carpeta + `SKILL.md` obligatorio) | `material-base_skills-que-son-y-cuando-usarlas.md` — sección 1.2 |
| Ejemplo real `dotnet-review` | `material-base_skills-que-son-y-cuando-usarlas.md` — sección 1.3 |
| Metadata (`name` + `description`) y la descripción como disparador | `material-base_skills-que-son-y-cuando-usarlas.md` — secciones 1.2 y 9.1 |
| Carga progresiva (3 fases: identificación, cuerpo, recursos) | `material-base_skills-que-son-y-cuando-usarlas.md` — sección 2.1 |

> El post usa `dotnet-review` como ejemplo (no `cobol-analyzer`) — `cobol-analyzer` queda disponible para una publicación futura si hace falta un segundo ejemplo.
