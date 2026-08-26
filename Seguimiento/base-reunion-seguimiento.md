# Base para reunión de seguimiento
> Documento vivo — se actualiza antes de cada reunión de seguimiento, no se crea uno nuevo por fecha.
> Fuentes: `Produccion/TABLERO.md` (producción) · `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md` (última reunión) · `_historico/ESTADO.md` (estado general).

**Última actualización:** 25 agosto 2026 — preparada para la reunión de hoy, con el cierre de lo acordado el 18 ago

---

## Lo que se decidió en la reunión anterior · martes 18 de agosto

Con Jonatan Hospital Adriao y Óscar Segura Herrera.

1. **Posts adelantados por error.** Varios posts programados se publicaron solos en Teams GCO pese al congelamiento (la programación automática siguió corriendo). Se acordó retirarlos todos y reactivarlos manualmente, bloque a bloque.
2. **Calendario.** La primera semana tras el regreso del equipo de Nibaldo es de introducción únicamente. Las publicaciones definitivas se retoman **a partir del 14 de septiembre**, y la cola avanza **en orden de creación** — Pub 3, luego Pub 4, y así hasta el final. El orden no es administrativo: cada post se apoya en el anterior (Pub 3 prepara a Pub 4, la fórmula del prompt va en dos partes seguidas, Skills es 13→14→15). Por eso ningún bloque se adelanta ni se salta.

   > **Aclaración (25 ago):** el acta recoge una mención a "activar Skills desde el 15 o 16 de septiembre". Esas fechas corresponden a **Pub 3 y Pub 4** en la cola; el bloque de Skills (Pub 13-15) cae a finales de octubre. Confirmado por Yehimy: manda el orden de creación.
3. **Principio confirmado.** Todo se publica primero en el canal interno de Raona para revisión — nunca directo al canal de GCO.
4. **Orden de la serie validado:** Dev Suite → Skills (qué es / anatomía) → MCP → Agentes.
5. **Cifras reafirmadas:** 32 skills, **5 conectores MCP**, 3 agentes. Cerró el bloqueante que arrastraba el guion del Video 04.
6. **Cambio de alcance:** MCP y Agentes pasan de 1 a **2 publicaciones cada uno**. La serie crece de Pub 12-16 a **Pub 12-19**, y cierra ahí.
7. **Óscar sobre el post de Memoria vs. Instrucciones:** no se entiende qué es la Memoria, cómo se modifica, ni por qué el post mezcla un concepto individual con uno de equipo. Se acordó ampliarlo con un repost anidado, hablándolo antes con Nibaldo.
8. **Videos.** Óscar propuso uno de instalación de la gco-dev-suite más un ejemplo de uso por componente. Jonatan matizó que el video de instalación sigue teniendo valor aunque el paso técnico sea simple, porque la gente igual se pierde. Los dos sugirieron que el post enlace a la documentación de instalación en Confluence, para no tener que editarlo si el proceso cambia.

---

## Acciones que salieron de esa reunión · estado a hoy

| # | Acción | Responsable | Estado |
|---|--------|-------------|--------|
| 1 | Retirar los posts auto-publicados de Teams GCO | Yehimy | ✅ Hecho — evidencia en `Produccion/elimina-post-teams-gco/` |
| 2 | Reorganizar la serie a Pub 12-19 | Yehimy | ✅ Hecho — tablero, plan y calendario actualizados |
| 3 | Producir y validar el bloque de Skills en el canal interno | Yehimy | ✅ Pub 13, 14, hilo 14a y 15 publicadas en Teams Raona el 21 ago |
| 4 | Producir y validar el bloque de MCP en el canal interno | Yehimy | ✅ Pub 16 y 17 publicadas en Teams Raona el 24 ago |
| 5 | Ampliar el post de Memoria (repost anidado) | Yehimy + Nibaldo | ✅ **Resuelto de otra forma el 25 ago.** No se amplió con un hilo: se **reescribió el post en origen** (ya no estaba publicado en GCO, así que no hacía falta parchearlo). Sale como **"Una vez o siempre"**, publicado en Teams Raona el 25 ago. Los hilos `4-a` y `4-b` quedan deprecados |
| 6 | Producir el bloque de Agentes (Pub 18-19) | Yehimy | 🔄 Briefs listos, sin especificaciones Figma ni piezas |
| 7 | Publicar Pub 12 en el canal interno | Yehimy | 🟡 Sigue como borrador cargado en Raona, sin enviar |
| 8 | Coordinar los videos con el equipo de Nibaldo | Equipo de Nibaldo | ⏳ Pendiente — esperando su regreso de vacaciones |
| 9 | Enlazar la instalación a Confluence en vez de explicarla en el post | Nibaldo | ⏳ Pendiente — hace falta la URL del documento |

---

## Lo que hace falta resolver hoy

**Preguntas para Nibaldo:**
- ¿`dotnet-review` y `cobol-analyzer` son parte real de las 32 skills? — bloquea cerrar Pub 15 para GCO.
- ¿Dónde se ve la Memoria de GitHub Copilot, cómo se edita y cómo se borra? ¿Está activa por defecto? ¿Funciona igual en Visual Studio que en VS Code? — bloquea cerrar el tema que levantó Óscar.
- ¿La URL de Confluence con la documentación de instalación de la gco-dev-suite?
- ¿"gco-dev-suite" es la misma "Copilot Dev Suite" del guion del Video 04?

**Decisiones de equipo:**
- **Fecha de la sesión AMA** — bloqueada desde junio, la desbloquean Nibaldo y Guillermo.
- **Confirmar el alcance de lo auto-publicado en Pub 4** — ¿fue el post completo o solo la tarjeta "Optimización de tokens"?

**En manos de Yehimy:**
- Microsoft Bookings sin configurar — bloquea la publicación de sesiones 1:1.
- Dos arreglos antes de republicar en GCO: en el hilo 14a, "le enseña a **Copilot**" va sin "GitHub"; y el post de Pub 14 se quedó sin el puente final a Pub 15.

---

## Cronograma — cola de republicación (ver detalle completo en `Produccion/TABLERO.md`)

| Orden | Pub | Fecha *(estimada)* | Tema | Estado |
|---|-----|------|------|--------|
| — | 1-2 | Ya publicadas | Bienvenida · Activa GitHub Copilot en VS (+Videos 01-03) | ✅ Se quedan, sin cambios |
| 1 | 3 | Mar 15 sep | No tiene memoria permanente | 🗑️ Retirada, en cola |
| 2 | 4 | Jue 17 sep | ¿Siempre usas el mismo modelo? + 4 respuestas (incluye el hilo "Memoria vs. Instrucciones") | 🗑️ Retirada, en cola — confirmar alcance |
| 3 | 5 | Mar 22 sep | ¿Copias y pegas código en el chat? | 🗑️ Retirada, en cola |
| 4 | 6 | Jue 24 sep | Caso de uso #1 — COBOL heredado | 🗑️ Retirada, en cola |
| 5 | 7 | Mar 29 sep | Caso de uso #2 — Bug fixing | 🗑️ Retirada, en cola |
| 6 | 8 | Jue 1 oct | Fórmula del prompt — parte 1 | 🗑️ Retirada, en cola |
| 7 | 9 | Mar 6 oct | Fórmula del prompt — parte 2 | 🔵 Solo Teams Raona, nunca auto-publicada |
| 8 | 10 | Jue 8 oct | Video 05 — Tres casos, un mismo copiloto | 🔵 Solo Teams Raona (prueba) |
| 9 | 11 | Mar 13 oct | Video 06 — Dos errores de pantalla | 🔵 Solo Teams Raona (prueba) |
| 10 | 12 | Jue 15 oct | gco-dev-suite: qué es y por qué existe | 🟡 Borrador cargado en Raona, sin publicar |
| 11 | 13 | Mar 20 oct | ¿Qué es una Skill (y qué no es)? | 🔵 Publicada en Teams Raona (21 ago) |

**Producidas y validándose en Raona, sin fecha en GCO:** Pub 14 (mapa de los 5 niveles + hilo 14a) y Pub 15 (anatomía de una Skill) — publicadas el 21 ago · Pub 16 (los 5 conectores) y Pub 17 (MCP en acción) — publicadas el 24 ago.
**Sin producir:** Pub 18-19 (Agentes) · el hilo de ampliación del post de Memoria.

---

## Bloqueantes activos

| Ítem | Responsable | Notas |
|---|---|---|
| Cómo se ve, se edita y se borra la Memoria de GitHub Copilot | Nibaldo | Bloquea cerrar el diagnóstico de Óscar del 18 ago |
| Confirmar si `dotnet-review`/`cobol-analyzer` son parte de las 32 skills reales | Nibaldo | Bloquea el cierre final de Pub 15 |
| URL de Confluence con la instalación de la gco-dev-suite | Nibaldo | Acordado el 18 ago — el post enlaza en vez de explicar el paso a paso |
| Confirmar si "gco-dev-suite" es la misma "Copilot Dev Suite" del Video 04 | Nibaldo | Sin respuesta todavía |
| Material de video (instalación + 1 ejemplo por componente) | Equipo de Nibaldo | Evaluar al regreso de vacaciones |
| Fecha sesión AMA | Nibaldo + Guillermo | Sin fecha |
| Confirmar alcance real de lo auto-publicado en Pub 4 | Yehimy | ¿Post completo o solo la tarjeta "Optimización de tokens"? |
| Microsoft Bookings | Yehimy | Sin configurar — bloquea Reservas 1:1 |

---

## Contexto de fondo que sigue vigente

- **"Memoria vs. Instrucciones" no es una Pub numerada.** Es un ajuste que vive como respuesta 4 del hilo de Pub 4 (`post-memoria-vs-instrucciones_mar-28jul.md`), igual que el Video 04 es hilo de Pub 2. El número que se le había asignado por error (Pub 17, luego Pub 20) quedó revertido. La serie Dev Suite cierra en Pub 19.
- **Pub 14 = el mapa (panorámico), Pub 15 = la anatomía (zoom)** — se intercambiaron el 18 ago por sentido narrativo, general antes que específico.
- **La cadencia semanal de Teams GCO se retoma la semana del 14-18 de septiembre**, republicando en el mismo orden de la cola, sin saltar ni repetir nada.

---

## Cómo mantener este documento

Antes de cada reunión de seguimiento: releer `Produccion/TABLERO.md` (cronograma maestro) y el resumen de la última reunión en `Reuniones/seguimientos-semanales/`, actualizar las secciones de arriba con lo que haya cambiado, y refrescar la fecha de "Última actualización". No crear un archivo nuevo por reunión — este es el único punto de entrada para preparar la reunión.
