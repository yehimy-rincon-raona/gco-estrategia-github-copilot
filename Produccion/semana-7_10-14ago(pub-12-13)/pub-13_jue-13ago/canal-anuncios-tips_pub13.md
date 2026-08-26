# Canal Anuncios y Tips — Pub 13 · ¿Qué es una Skill (y qué no es)?
> Canal: Anuncios y Tips Ágiles · Tipo: Tip conceptual (serie Skills, 1/2)
> ⏱️ **Semana de producción: 10-14 ago** (trabajo hecho el 14 ago — este es el material que correspondía producir esta semana)
> 📍 **Teams GCO: sigue congelado, sin fecha real.** "Jue 13 ago" es la fecha del plan original, no un compromiso de publicación — se confirma (o cambia) en la reunión del 18 ago.
> 📍 **Próximo destino: Teams Raona** (visibilidad/prueba, mismo tratamiento que Pub 10 y Pub 11) — pendiente de que Yehimy lo publique ahí. No se publica en Teams GCO hasta que se levante el congelamiento.
> Estado: ✅ **Las 2 piezas gráficas ya están producidas** (`pub-13_s-7_infografia_1-que-es-una-skill-en-github-copilot.png`, `pub-13_s-7_infografia_2-que-no-es-una-skill.png`) — falta validar con Nibaldo/Guillermo y publicar de prueba en Teams Raona
> Fuente: `Conocimiento/temas_mes-agosto/material-base_skills-que-son-y-cuando-usarlas.md` (material enviado por Esteban Serrano, Raona/Pasiona) — sección 1
> Plan: `Planeacion/Semana-7_plan-agosto-devsuite/plan-agosto_devsuite-skills-mcp-agentes.md` — Pub 13, sección 4
>
> [Carpeta](https://raonacloud.sharepoint.com/:f:/r/sites/ComunidadGitHubCopilotDemoGCO/Documentos%20compartidos/Anuncios%20y%20Tips%20%C3%81giles/pub13-que-es-una-skill?d=we3cd44e43b224e1d84f126d76b4ef20f&csf=1&web=1&e=psVgaU)

---

## Objetivo de esta publicación

Primera de tres publicaciones sobre Skills (Pub 14 = el mapa de los 5 niveles de personalización, Pub 15 = la anatomía real, ya producida — ver `Produccion/TABLERO.md` para el orden vigente tras la reorganización del 18 ago). Esta define qué es una Skill con la analogía más simple posible, y despeja la confusión más común: que sea "un prompt guardado" o "otro documento más".

---

## Post listo para Teams

**Asunto:** `🧩 ¿Qué es una Skill (y qué no es)?`

---

🧩 **¿Qué es una Skill (y qué no es)?**

Una Skill es una carpeta con un archivo `SKILL.md` que le enseña a GitHub Copilot cómo hacer una tarea concreta, a la manera de tu equipo — y que el agente activa solo, sin que se lo tengas que recordar.

Si las herramientas del agente (leer código, editar archivos, ejecutar comandos) son sus brazos, las Skills son los libros de recetas que le enseñan a usarlos para una tarea concreta.

Lo que NO es:
- No es un prompt guardado — ese hay que copiarlo y pegarlo cada vez.
- No es documentación pasiva — un documento hay que leerlo; una Skill se aplica.
- No es una integración externa — no consulta tus sistemas en vivo (para eso está MCP).

👉 En la próxima publicación vemos cómo se ve una Skill real de GCO por dentro.

---

## Piezas gráficas de esta publicación

> **Cambio de formato (14 ago, confirmado con las piezas ya producidas):** son **2 infografías compañeras** (`Skills 1/2` y `Skills 2/2`), no una tarjeta comparativa de una sola pieza. Ambas viven en Pub 13 — la anatomía de una Skill real de GCO (ya producida) es ahora **Pub 15**, tras el intercambio de contenido del 18 ago.

| # | Pieza | Rol | Estado |
|---|-------|-----|--------|
| 1 | Infografía "¿Qué es una skill en GitHub Copilot?" — Skills 1/2 (`pub-13_s-7_infografia_1-que-es-una-skill-en-github-copilot`) | Acompaña el post principal — explica qué es una Skill con 3 puntos: carpeta con propósito, analogía del libro de recetas, activación automática | ✅ Producida |
| 2 | Infografía "¿Qué NO es una Skill?" — Skills 2/2 (`pub-13_s-7_infografia_2-que-no-es-una-skill`) | Pieza compañera — despeja las 3 confusiones más comunes: prompt guardado, documentación pasiva, integración externa | ✅ Producida |

---

## Brief — Infografías Pub 13 (`pub-13_s-7_infografia_1-que-es-una-skill-en-github-copilot` / `pub-13_s-7_infografia_2-que-no-es-una-skill`)

**Tipo de pieza:** Infografía, vertical (ver `Configuraciones/matriz-componentes-graficos.csv`, fila "Infografia")
**Origen del contenido:** `material-base_skills-que-son-y-cuando-usarlas.md`, secciones 1.1 (Definición) y 1.5 (Qué NO es)

### Pieza 1/2 — "¿Qué es una skill en GitHub Copilot?"

| Elemento | Texto |
|----------|-------|
| Cápsula superior derecha (pill de fase) | Fase 3 \| Multi-entorno |
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT · SKILLS 1/2 |
| Título | ¿Qué es una skill en GitHub Copilot? |
| Punto 1 | Una carpeta con propósito — `skill.md` es una estructura técnica donde un archivo Markdown le enseña a GitHub Copilot a realizar una tarea concreta siguiendo las reglas de tu equipo |
| Punto 2 | La analogía del libro de recetas — si las habilidades básicas (leer/editar) son los brazos del agente, las Skills son las recetas que le enseñan a cocinar platos específicos a tu manera |
| Punto 3 | Activación automática — el agente activa la Skill por sí solo cuando detecta que la tarea actual corresponde a las instrucciones del archivo |
| Remate (cita) | "Un agente sin Skills sabe hacer cosas; con Skills, sabe hacerlas como las hace tu equipo." — El valor diferencial es la personalización del conocimiento del agente según los estándares internos. |
| Logo | Occident — inferior derecha |

### Pieza 2/2 — "¿Qué NO es una Skill?"

| Elemento | Texto |
|----------|-------|
| Cápsula superior derecha (pill de fase) | Fase 3 \| Multi-entorno |
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT · SKILLS 2/2 |
| Título | ¿Qué NO es una Skill? |
| Punto 1 | No es un "Prompt" guardado — un prompt requiere que el desarrollador lo copie y pegue manualmente cada vez; la Skill es orgánica y proactiva |
| Punto 2 | No es documentación pasiva — los documentos tradicionales solo se leen; las Skills se ejecutan y se aplican directamente sobre el código |
| Punto 3 | No es una integración externa — no consulta sistemas en vivo (como bases de datos externas); para esa función de conexión en tiempo real existe el protocolo MCP |
| Remate (cita) | "Un agente sin Skills sabe hacer cosas; con Skills, sabe hacerlas como las hace tu equipo." — El valor diferencial es la personalización del conocimiento del agente según los estándares internos. |
| Logo | Occident — inferior derecha |

> Diseño (las 2 piezas): fondo blanco, rojo `#DC0028` como acento, íconos lineales rojos — sin fondos negros. Título CO Bold, texto corriente GCO Sans. Misma cita de remate en ambas piezas, para reforzar que son un par.

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Definición de Skill (carpeta + `SKILL.md`, activación automática) | `material-base_skills-que-son-y-cuando-usarlas.md` — sección 1.1 |
| Analogía de los "libros de recetas" (usada en el texto del post, no en la tarjeta) | `material-base_skills-que-son-y-cuando-usarlas.md` — sección 1.1 |
| Qué NO es una Skill (5 puntos en la fuente; se usan 3 en este post y en la tarjeta) | `material-base_skills-que-son-y-cuando-usarlas.md` — sección 1.5 |
