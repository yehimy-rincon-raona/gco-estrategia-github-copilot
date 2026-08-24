# Canal Anuncios y Tips — Pub 14 · ¿Skill, instruction, prompt file, agente o MCP?
> Canal: Anuncios y Tips Ágiles · Tipo: Tip conceptual (serie Skills, 2/3) · Martes de su semana de producción — Pub 15 (jueves, misma semana) cierra el zoom con la anatomía
> ⏱️ **Semana de producción: siguiente disponible tras Pub 12-13** (reorganizada el 18 ago — antes tenía fecha de plan jue 20 ago, ahora pasa a martes, sin fecha real todavía)
> 📍 **Teams GCO: sigue congelado, sin fecha real.** El día y fecha se confirman cuando el equipo de Nibaldo reactive publicaciones (ver `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md` — retoma prevista 14 sep).
> 📍 **Próximo destino, una vez esté como borrador final: Teams Raona** (visibilidad/prueba, mismo tratamiento que Pub 10 y Pub 11) — no Teams GCO, que sigue congelado.
> Estado: 🟠 **Post cerrado y brief listo para producir (21 ago)** — texto final, especificaciones Figma completas. Falta únicamente producir la infografía en Figma y validar con Nibaldo/Guillermo
> Fuente: `Conocimiento/temas_mes-agosto/material-base_skills-que-son-y-cuando-usarlas.md` (material enviado por Esteban Serrano, Raona/Pasiona) — secciones 3 y 7
> Plan: `Planeacion/Semana-7_plan-agosto-devsuite/plan-agosto_devsuite-skills-mcp-agentes.md` — sección 4
>
> ⚠️ **Intercambio de contenido con Pub 15 (18 ago, decisión de Yehimy):** este tema ("el mapa completo") ocupaba el número Pub 15; la anatomía de una Skill ocupaba Pub 14. Se intercambian por sentido narrativo — igual que Pub 12 presenta la visión general antes de que cada pieza haga su zoom, dentro del bloque de Skills conviene mostrar primero dónde encaja la Skill frente a los demás niveles (panorámico) y solo después la anatomía por dentro (lo más específico), en vez de volver a lo panorámico después de la anatomía.

---

## Objetivo de esta publicación

Segunda de tres publicaciones sobre Skills (Pub 13 explicó el concepto, esta muestra dónde encaja frente a los demás niveles de personalización, Pub 15 cierra con la anatomía real — el zoom más profundo). Responde a la confusión más habitual que ya nos señalaron: qué es cada nivel, cuándo se usa cada uno, y cómo se diferencian entre sí — incluyendo la duda concreta de Óscar en la reunión del 18 ago sobre Copilot Memory vs. Copilot Instructions, que este post ayuda a despejar (junto con el repost pendiente de profundizar ese tema específico, ver `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md`, tema 3).

---

## Post listo para Teams

**Asunto:** `🗺️ ¿Skill, instruction, prompt file, agente o MCP? El mapa completo`

---

🗺️ **¿Skill, instruction, prompt file, agente o MCP? El mapa completo**

Ya vimos qué es una Skill. Pero GitHub Copilot tiene 5 formas distintas de personalizarse, y cada una responde a una pregunta diferente:

- **Instructions** — ¿es una norma que debe cumplirse siempre? (las tecnologías, el idioma, la arquitectura)
- **Prompt files** — ¿es una tarea simple que invoco a mano, sin recursos de apoyo?
- **Skills** — ¿es un proceso de varios pasos, con material de apoyo, que quiero que se active solo?
- **Agentes** — ¿es un rol que debe persistir durante toda la conversación?
- **MCP** — ¿necesito datos reales de un sistema externo, en vivo?

Y una sexta pregunta que no es un nivel de personalización pero se confunde seguido: si es algo personal y temporal ("prefiero respuestas concisas"), eso es memoria — y no entra en ninguno de los cinco niveles.

👉 ¿Memoria o Instructions? Por qué esa diferencia importa: síguenos en el siguiente hilo.

---

## Piezas gráficas de esta publicación

| # | Pieza | Rol | Estado |
|---|-------|-----|--------|
| 1 | Infografía "El mapa de los 5 niveles de personalización" (`14-S8-infografia_mapa-5-niveles`) | Acompaña el post — tabla comparativa de los 5 niveles + la regla rápida de decisión | 🔄 Brief listo, falta producir en Figma |

---

## Brief — Infografía Pub 14 (`14-S8-infografia_mapa-5-niveles`)

**Tipo de pieza:** Infografía, vertical (ver `Configuraciones/matriz-componentes-graficos.csv`, fila "Infografia")
**Origen del contenido:** `material-base_skills-que-son-y-cuando-usarlas.md`, secciones 3.1 (los cinco niveles) y 7 (regla rápida de decisión)

| Elemento | Texto |
|----------|-------|
| Cápsula superior derecha (pill de fase) | Fase 3 \| Multi-entorno |
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT · SKILLS 2/3 |
| Título | ¿Skill, instruction, prompt file, agente o MCP? |
| Fila 1 | **Instructions** — ¿es una norma que aplica siempre? |
| Fila 2 | **Prompt files** — ¿es una tarea simple, sin recursos, que invoco a mano? |
| Fila 3 | **Skills** — ¿es un proceso de varios pasos, con recursos, que se activa solo? |
| Fila 4 | **Agentes** — ¿es un rol que debe persistir durante la conversación? |
| Fila 5 | **MCP** — ¿necesito datos reales de un sistema externo? |
| Nota aparte — titular (no es un nivel de personalización) | **Memoria no es el sexto nivel.** |
| Nota aparte — contraste | Los 5 niveles le enseñan a GitHub Copilot algo sobre **el proyecto**. Memoria le enseña algo sobre **ti**. |
| Nota aparte — entrada a la respuesta | → Por qué esa diferencia importa: síguenos en el siguiente hilo. |
| Remate | Una pregunta por nivel. Si dudas dónde va algo, esta es la lista que lo resuelve. |
| Logo | Occident — inferior derecha |

> Diseño: fondo blanco, rojo `#DC0028` como acento — sin fondos negros. Título CO Bold, texto corriente GCO Sans. Misma estructura de infografía vertical usada en Pub 13, para mantener la identidad visual de la serie.
> **Corrección 21 ago (Yehimy) — anglicismo en el post:** "eso es memoria — no skill ni instruction" pasa a **"eso es memoria — y no entra en ninguno de los cinco niveles"**. En minúscula y en uso genérico, "skill" e "instruction" son anglicismos sueltos (regla de Jonatan) — distinto de **Instructions** o **Skills** en mayúscula, que sí son el nombre propio del componente y se mantienen. La nueva redacción además evita repetir la negación ("no es un nivel de personalización" → "no skill ni instruction") y da entrada directa al cierre.
> **Decisión 21 ago (Yehimy) — el cierre lleva llamada a la acción:** queda **"→ Por qué esa diferencia importa: síguenos en el siguiente hilo."** El gancho "por qué esa diferencia importa" promete el *porqué*, que es literalmente lo que responde el hilo `14-a` ("¿Por qué Memoria no es un sexto nivel?").
> Se planteó la objeción de que "síguenos" suena a red social y se descartó: **el canal de Teams es un espacio de interacción social, no un manual**, y una llamada a la acción explícita rinde más que señalar un lugar. **Criterio vigente para las próximas piezas con entrada a hilo** — usar acción, no localización.
> **Corrección 21 ago (segunda, feedback de Yehimy):** se retira la fórmula **"le seguimos en el hilo"** de todo texto de cara al lector. "El hilo" es nomenclatura interna: en Teams el lector ve *respuestas* debajo del post, no un "hilo". Se reemplaza por **"La diferencia completa, en la primera respuesta"** — dice qué va a encontrar y en qué lugar concreto. Verificado que "en el hilo" no era fórmula establecida en publicaciones anteriores (solo aparecía en metadata interna), así que el cambio no rompe consistencia con lo ya publicado. Aplicado también al cierre del post y a la referencia interna `4-a` del hilo `14-a`.
> **Corrección 21 ago (feedback de Yehimy — el cierre era confuso):** la nota aparte **afirma, no pregunta**. La versión anterior (`¿es una preferencia personal mía, no del equipo?`) usaba el mismo formato de pregunta que los 5 niveles, justo cuando el punto es que Memoria **no** es uno de ellos — se leía como el nivel 6, que es exactamente la confusión que la pieza debería cerrar. El titular afirmativo responde de una la pregunta que trae el lector tras leer los 5 niveles, y el contraste paralelo (*el proyecto* / *tú*) se entiende sin releer. Es la misma tesis del hilo `14-a`, así que pieza y hilo quedan alineados.
> **En la pieza no debe aparecer "hilo `14-a`"** — es nomenclatura interna. Va como "el hilo".
> **Importante (corrección 18 ago, feedback de Yehimy):** la nota aparte se queda corta a propósito — una sola línea, sin tabla comparativa dentro de esta pieza. Meter la comparación completa aquí competía con el propósito del mapa (ser panorámico) y no terminaba de aclararse por más que se resumiera. La comparación completa vive en su propio hilo: `14-a` (ver más abajo).

---

### Especificaciones Figma

- **Formato:** 1080×1350 px (vertical), grupo `Infografia` de `Configuraciones/matriz-componentes-graficos.csv`
- **Referencia directa:** las 2 infografías de Pub 13 (`13-S7-infografia_que-es-skill.png` / `13-S7-infografia_que-no-es-skill.png`) — esta pieza es la tercera del mismo bloque de Skills, debe leerse como parte del mismo juego
- **Fondo:** blanco · acento rojo `#DC0028` en chips, números y resaltados · sin fondos negros
- **Jerarquía de arriba a abajo:** logo + píldora de fase (`Fase 3 | Multi-entorno`) → eyebrow rojo en mayúsculas → título CO Bold → las 5 filas → nota aparte de Memoria → remate
- **Las 5 filas:** cada una con el nombre del nivel en negrita y su pregunta al lado. El nombre puede ir como chip rojo pequeño para que las 5 se escaneen de un golpe
- **Nota aparte de Memoria:** visualmente separada de las 5 filas — no es una sexta fila. Un separador o un fondo `#F5F5F5` la distingue sin darle el mismo peso
- **Tipografía:** títulos CO Bold · texto corriente GCO Sans
- **Logo:** Occident, inferior derecha

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Los 5 niveles de personalización (tabla completa) | `material-base_skills-que-son-y-cuando-usarlas.md` — sección 3.1 |
| Regla rápida de decisión (una pregunta por nivel) | `material-base_skills-que-son-y-cuando-usarlas.md` — sección 7 |
| Skill frente a memoria (lo personal/temporal no es skill) | `material-base_skills-que-son-y-cuando-usarlas.md` — sección 3.7 |

> Este post conecta con la aclaración pendiente de Copilot Memory vs. Instructions que pidió Óscar en la reunión del 18 ago (`Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md`, tema 3). La nota aparte de esta pieza solo señala la confusión — **la profundización completa es el hilo `14-a`**, ver `canal-anuncios-tips_pub14-a.md` en esta misma carpeta. Ese hilo trabaja en pareja con `4-a` (hilo de Pub 4, `post-memoria-vs-instrucciones_mar-28jul.md`, misma carpeta): dos perspectivas distintas que se refuerzan entre sí, por si la confusión persiste desde un solo ángulo.
