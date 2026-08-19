# Base para reunión de seguimiento
> Documento vivo — se actualiza antes de cada reunión de seguimiento, no se crea uno nuevo por fecha.
> Fuentes: `Produccion/TABLERO.md` (producción) · `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md` (última reunión) · `_historico/ESTADO.md` (estado general).

**Última actualización:** 18 agosto 2026

---

## 🗑️ Auto-publicación y retiro de posts en Teams GCO (18 ago)

Varios posts programados se publicaron solos pese al congelamiento (programación automática que siguió corriendo). En la reunión de seguimiento del 18 ago se decidió **retirarlos todos de Teams GCO** — evidencia guardada en `Produccion/elimina-post-teams-gco/`. Afecta a Pub 3, 4 (al menos una tarjeta), 5, 6, 7, 8 y su hilo "Memoria vs. Instrucciones". **La cadencia semanal (martes/jueves) se retoma la semana del 14-18 de septiembre**, republicando en el mismo orden de la cola — sin saltar ni repetir nada.

## ✅ Orden temático de la serie gco-dev-suite — validado (18 ago)

Jonatan y Óscar validaron el orden general→específico: Dev Suite (Pub 12) → Skills (Pub 13-15) → MCP (Pub 16-17) → Agentes (Pub 18-19). Novedad de esta reunión: **MCP y Agentes pasan de 1 a 2 publicaciones cada uno** (antes 1 sola). También se reconfirmaron los **5 conectores MCP** (Jira, Confluence, Elastic, DB2, navegador), resolviendo la discrepancia que arrastrábamos con el guion del Video 04.

## 📌 "Memoria vs. Instrucciones" no es una Pub numerada (18 ago, corrección)

Es un ajuste/aclaración que siempre vivió como respuesta 4 del hilo de Pub 4 (`post-memoria-vs-instrucciones_mar-28jul.md`) — no una publicación propia. Se le había asignado por error un número (Pub 17, luego Pub 20) — queda revertido, igual que el Video 04 se publica como hilo de Pub 2 sin número propio. **La serie Dev Suite cierra en Pub 19.**

## 🔀 Intercambio Pub 14 ↔ Pub 15 (18 ago, decisión de Yehimy)

Por sentido narrativo: primero el mapa de los 5 niveles de personalización (Pub 14, panorámico), después la anatomía real de una Skill (Pub 15, el zoom más profundo — 3 tarjetas ya producidas y corregidas). Antes era al revés.

## ⚠️ Pendiente de aclarar — Copilot Memory vs. Instructions

Óscar señaló que el post ya publicado ("Memoria vs. Instrucciones") no deja claro qué es Copilot Memory ni cómo se modifica, y mezcla ese concepto (individual) con Copilot Instructions (de equipo). Yehimy lo habla con Nibaldo a su regreso de vacaciones — posible repost anidado para profundizar, sin tocar el post original.

## Cronograma — cola de republicación (ver detalle completo en `Produccion/TABLERO.md`)

| Orden | Pub | Fecha *(estimada)* | Tema | Estado |
|---|-----|------|------|--------|
| — | 1-2 | Ya publicadas | Bienvenida · Activa Copilot en VS (+Videos 01-03) | ✅ Se quedan, sin cambios |
| 1 | 3 | Mar 15 sep | No tiene memoria permanente | 🗑️ Retirada, en cola |
| 2 | 4 | Jue 17 sep | ¿Siempre usas el mismo modelo? + 4 respuestas (incluye el hilo "Memoria vs. Instrucciones") | 🗑️ Retirada, en cola — confirmar alcance con Yehimy |
| 3 | 5 | Mar 22 sep | ¿Copias y pegas código en el chat? | 🗑️ Retirada, en cola |
| 4 | 6 | Jue 24 sep | Caso de uso #1 — COBOL heredado | 🗑️ Retirada, en cola |
| 5 | 7 | Mar 29 sep | Caso de uso #2 — Bug fixing | 🗑️ Retirada, en cola |
| 6 | 8 | Jue 1 oct | Fórmula del prompt — parte 1 | 🗑️ Retirada, en cola |
| 7 | 9 | Mar 6 oct | Fórmula del prompt — parte 2 | 🔵 Solo Teams Raona, nunca auto-publicada |
| 8 | 10 | Jue 8 oct | Video 05 — Tres casos, un mismo copiloto | 🔵 Solo Teams Raona (prueba) |
| 9 | 11 | Mar 13 oct | Video 06 — Dos errores de pantalla | 🔵 Solo Teams Raona (prueba) |
| 10 | 12 | Jue 15 oct | gco-dev-suite: qué es y por qué existe | 🟡 Borrador cargado en Raona, sin publicar |
| 11 | 13 | Mar 20 oct | ¿Qué es una Skill (y qué no es)? | 🔵 Producida, falta publicar de prueba |

**En producción, sin fecha:** Pub 14 (mapa de los 5 niveles — en producción ahora mismo), Pub 15 (anatomía, ✅ ya producida y corregida, espera a Pub 14), Pub 16-17 (MCP), Pub 18-19 (Agentes).

## Bloqueantes activos

| Ítem | Responsable | Notas |
|---|---|---|
| Confirmar alcance real de lo auto-publicado en Pub 4 | Yehimy | ¿Post completo o solo la tarjeta "Optimización de tokens"? |
| Fecha sesión AMA | Nibaldo + Guillermo | Sin fecha |
| Microsoft Bookings | Yehimy | Sin configurar — bloquea Reservas 1:1 |
| Confirmar si `dotnet-review`/`cobol-analyzer` son parte de las 32 skills reales | Nibaldo | Bloquea el cierre final de Pub 15 |
| Confirmar si "gco-dev-suite" es la misma "Copilot Dev Suite" del Video 04 | Nibaldo | Sin respuesta todavía |
| Material de video (instalación + 1 ejemplo por componente) | Equipo de Nibaldo | Evaluar al regreso de vacaciones |

---

## Cómo mantener este documento

Antes de cada reunión de seguimiento: releer `Produccion/TABLERO.md` (cronograma maestro) y el resumen de la última reunión en `Reuniones/seguimientos-semanales/`, actualizar las secciones de arriba con lo que haya cambiado, y refrescar la fecha de "Última actualización". No crear un archivo nuevo por reunión — este es el único punto de entrada para preparar la reunión.
