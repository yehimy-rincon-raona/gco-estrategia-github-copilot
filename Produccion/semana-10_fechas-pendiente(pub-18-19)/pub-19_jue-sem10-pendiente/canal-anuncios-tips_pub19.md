# Canal Anuncios y Tips — Pub 19 · Añadir un campo: los 3 agentes en acción
> Canal: Anuncios y Tips Ágiles · Tipo: Caso de uso (serie Agentes, 2/2) · Jueves de su semana de producción — profundiza el tema de Pub 18 · **Cierra la serie gco-dev-suite (Pub 12-19)**
> ⏱️ **Semana de producción: misma semana que Pub 18** (creada el 18 ago)
> 📍 **Teams GCO: sigue congelado, sin fecha real.** El día y fecha se confirman cuando el equipo de Nibaldo reactive publicaciones (ver `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_18-08-26.md` — retoma prevista 14 sep).
> 📍 **Próximo destino, una vez esté como borrador final: Teams Raona** (visibilidad/prueba, mismo tratamiento que Pub 16 y Pub 17) — no Teams GCO, que sigue congelado.
> Estado: ✅ **Lista para publicar en Teams Raona (28 ago 2026)** — post final e infografía producida, revisada y corregida. Este documento está alineado con la pieza exportada a las 16:01. Queda la validación con Nibaldo/Guillermo antes de la cola de republicación en Teams GCO.
> Fuente: `Conocimiento/temas_mes-agosto/información-equipo-raona-gco-devsuite.md` (primera respuesta del equipo de Nibaldo, 6 ago 2026)
> Plan: `Planeacion/Semana-7_plan-agosto-devsuite/plan-agosto_devsuite-skills-mcp-agentes.md` — sección 4 (contenido nuevo, no estaba en el plan original)

---

## Objetivo de esta publicación

Cierra la serie completa de la gco-dev-suite (Pub 12 a 19). Muestra a los 3 agentes trabajando juntos en un caso real y deja explícito el principio de diseño más importante de la suite: nada se implementa sin aprobación.

**Reparto con Pub 18** (las dos salen la misma semana): Pub 18 se queda con **quién es quién** — el mapa de los tres roles. Esta se queda con **el flujo en el tiempo y el freno de mano** — los seis pasos y el paso 3. Aquí no se vuelven a describir los tres agentes uno por uno: ya están presentados, y repetirlo el jueves cuenta lo mismo dos veces en la misma semana. Es el mismo criterio que se aplicó al par Pub 16-17.

---

## Post listo para Teams

**Asunto:** `✋ Añadir un campo: los 3 agentes en acción (y por qué siempre esperan tu aprobación)`

---

✋ **Añadir un campo: los 3 agentes en acción**

Petición: *"añade la fecha de baja a la consulta de pólizas"*. Parece un cambio pequeño — no lo es: toca cinco capas en cascada.

El coordinador lo reconoce como tal y llama al orquestador de cambios, que hace lo siguiente:

1. Analiza qué se va a ver afectado
2. Escribe un plan y te lo presenta
3. **ESPERA.** No toca nada hasta que el plan se aprueba
4. Ejecuta capa por capa, en el orden correcto
5. El validador pasa el control de calidad, campo a campo
6. Entrega un resumen de todo lo que hizo

El paso 3 es el que define el carácter de la suite: **no implementa nada por su cuenta.** Propone, enseña el plan, y espera — lo mismo antes de publicar algo en un ticket o de ejecutar cualquier acción sin marcha atrás. El control queda de tu lado en todo momento, y queda un rastro escrito de qué se hizo y por qué.

👉 Con esto cerramos la serie gco-dev-suite: agentes que deciden, skills que explican, MCP que va a buscar el dato real.

---

> **Dos frases del post quedaron por detrás de la pieza corregida — decisión abierta, no bloquea.**
> 1. El **paso 5** del post dice *"El validador pasa el control de calidad, campo a campo"*; la pieza ya dice *"revisa campo a campo la coherencia entre capas"*, que es más preciso y coincide con el panel 2 de Pub 18. No se contradicen, pero la pieza es mejor.
> 2. El **cierre** dice *"MCP que va a buscar el dato real"*; la pieza dice *"conectores que buscan el dato real"*. A favor de dejar el post como está: es el único sitio donde se nombra MCP, y eso amarra esta publicación con Pub 16 y 17.

---

## Piezas gráficas de esta publicación

| # | Pieza | Rol | Estado |
|---|-------|-----|--------|
| 1 | `pub-19_s-10_infografia_el-flujo-de-un-cambio-6-pasos.jpg` | Acompaña el post — el procedimiento paso a paso, con el paso 3 (ESPERA) destacado | ✅ **Producida y corregida (28 ago, 16:01)** — conforme al brief |

> **Nombre según la convención vigente** (`Configuraciones/convencion-nombres-piezas-graficas.md`, 25 ago). Sustituye a la nomenclatura anterior del brief del 18 ago (`19-S10-infografia_flujo-6-pasos`), que ya no se usa.

### Cambios respecto al brief — tal como se produjo

1. **Formato:** salió vertical largo (2160×5178 px), no el 1080×1350 que define la matriz para `Infografia`. Es el mismo caso de Pub 17, que también creció respecto a su fila de la matriz para que cupieran los bloques. **Con dos piezas seguidas fuera de medida, la fila de la matriz ya no describe lo que se produce** — o se admite el vertical largo como variante para procedimientos de más de 4 pasos, o se registra como componente aparte.
2. **Dos bloques de cierre que no estaban en el brief:** `Control total, en todo momento` y `Componentes en acción`. El primero refuerza el argumento del paso 3. El segundo recuerda la regla de la suite, que es también el panel 3 del tríptico de Pub 18 — se conservó de forma consciente y con la terminología alineada (ver corrección (d) más abajo): en la publicación que cierra la serie, recordar la regla funciona como cierre.
3. **Cada paso ganó un cuerpo de texto explicativo** que el brief no pedía (el brief daba solo el enunciado). Gana en autoformativo — condición 2 de Óscar — y no contradice la fuente.
4. **El paso 5 pasó de "El validador revisa campo a campo" a "Control de calidad", con "El agente validador revisa el trabajo realizado campo a campo" en el cuerpo.** Mantiene la atribución al validador. Correcto.
5. **La primera exportación traía "el desarrollador" cinco veces y tres errores de redacción** — todo corregido el mismo día. El detalle está en la sección siguiente.

### Correcciones aplicadas (28 ago, 16:01) — verificadas contra la pieza final

Las diez correcciones que salieron de la revisión están aplicadas. Quedan aquí registradas porque explican por qué la pieza dice lo que dice, y varias dejaron criterio para las siguientes.

#### a) Tres errores de redacción y de dato

| Paso | Decía | Dice ahora | Por qué |
|---|---|---|---|
| Paso 1 | ...se verán afectados por el cambio solicitado **en cascada** | ...se verán afectados **en cascada** por el cambio solicitado | "En cascada" modificaba a "solicitado" — parecía que el cambio se había pedido en cascada. Lo que va en cascada es la afectación de las capas (fuente: *"toca cinco capas en cascada"*) |
| Paso 5 | ...revisa el trabajo realizado campo a campo **para asegurar que cumple con los requisitos** | ...revisa campo a campo **la coherencia entre capas** | No era lo que hace el validador. La fuente dice que comprueba campo a campo que las capas se entienden entre sí, aplicando 12 reglas de coherencia — y así lo dice el panel 2 del tríptico de Pub 18, que sale el martes de esa misma semana |
| Paso 1 | **El sistema** identifica... | **El orquestador** identifica... | "El sistema" era un actor genérico e introducía un cuarto nombre para algo que en la serie ya tiene tres |

#### b) "El desarrollador" salió de la pieza

Aparecía cinco veces. Es la regla del protagonista anónimo: la audiencia **es** el equipo de desarrollo de GCO, así que hablarle de "el desarrollador" en tercera persona lo pone a mirar el trabajo de otro. Misma corrección que se aplicó en Pub 17 (*"El desarrollador escribe"* → *"La consulta es"*) y en los guiones de los Vídeos 05-06.

| Dónde | Decía | Dice ahora |
|---|---|---|
| Paso 2 | Se redacta un plan de acción detallado y se presenta al desarrollador para su revisión | El orquestador redacta un plan de acción detallado y te lo presenta para que lo revises |
| Paso 3 | ...hasta que el desarrollador aprueba explícitamente el plan presentado | ...hasta que apruebas explícitamente el plan presentado |
| Paso 4 | Una vez aprobado, se ejecutan los cambios capa por capa... | Una vez aprobado, el orquestador ejecuta los cambios capa por capa... |
| Paso 6 | Se entrega un informe final detallando todas las acciones... | El orquestador entrega un informe final con todas las acciones... |
| Bloque de cierre — título | Control total del desarrollador | Control total, en todo momento |
| Bloque de cierre — cuerpo | ...pero el desarrollador decide cuándo actuar | ...pero tú decides cuándo actuar |
| Remate | Nada se implementa sin aprobación; el desarrollador mantiene el control en todo momento | Nada se implementa sin aprobación — el control queda de tu lado en todo momento |

#### c) La pieza recuperó a los agentes

En la primera exportación el único agente nombrado era el validador (paso 5); los pasos 1, 2, 4 y 6 iban en impersonal. Al nombrar al orquestador en esos cuatro pasos, **la infografía vuelve a ser lo que anuncia su publicación par** — los tres agentes trabajando juntos, después de que Pub 18 los presentara el martes. Las correcciones de (a) y (b) lo resolvieron a la vez.

#### d) Terminología alineada con Pub 18

El bloque `Componentes en acción` decía *"Agentes que deciden, Skills que explican y MCP que recupera los datos reales"*, con mayúsculas iniciales y con "MCP" donde el panel 3 de Pub 18 dice "el conector busca el dato real". **Ahora dice** *"Una combinación de agentes que deciden, skills que explican y conectores que buscan el dato real"* — misma regla, misma formulación, en minúsculas como el resto de la serie.

> **El bloque se conservó.** Se planteó quitarlo por repetir el panel 3 del tríptico de Pub 18, tres días antes. Se decidió mantenerlo con la terminología alineada: en la publicación que cierra la serie, recordar la regla funciona como cierre, no como repetición.

#### Detalle menor sin resolver

El cuerpo del **paso 6 quedó sin punto final** (*"...durante el proceso"*), mientras que los otros cinco pasos sí lo llevan. Cosmético — se corrige en el próximo reexport si hay uno; no bloquea la publicación.

---

## Brief — Infografía Pub 19 (`pub-19_s-10_infografia_el-flujo-de-un-cambio-6-pasos`)

**Tipo de pieza:** Infografía, vertical 1080×1350 px — procedimiento paso a paso (ver `Configuraciones/matriz-componentes-graficos.csv`, fila "Infografia")
**Origen del contenido:** `información-equipo-raona-gco-devsuite.md`, sección "Cómo se ve en el día a día" (Ejemplo 2) y "Las decisiones de diseño que la definen" (decisión 2)

| Elemento | Texto |
|----------|-------|
| Píldora de fase (cápsula superior derecha) | Fase 3 \| Multi-entorno |
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT · AGENTES 2/2 |
| Título | El flujo de un cambio: 6 pasos |
| Subtítulo | Petición: "añade la fecha de baja a la consulta de pólizas". Parece pequeño: toca cinco capas |
| Paso 1 — titular | 1. Analiza qué se va a ver afectado |
| Paso 1 — cuerpo | El orquestador identifica qué componentes y capas se verán afectados en cascada por el cambio solicitado. |
| Paso 2 — titular | 2. Escribe un plan y lo presenta |
| Paso 2 — cuerpo | El orquestador redacta un plan de acción detallado y te lo presenta para que lo revises. |
| Paso 3 — titular (destacado, ícono de pausa) | 3. ESPERA — no toca nada hasta que el plan se aprueba |
| Paso 3 — cuerpo | El agente detiene su actividad y no toca ningún código hasta que apruebas explícitamente el plan presentado. |
| Paso 4 — titular | 4. Ejecuta capa por capa, en el orden correcto |
| Paso 4 — cuerpo | Una vez aprobado, el orquestador ejecuta los cambios capa por capa siguiendo el orden técnico correcto. |
| Paso 5 — titular | 5. Control de calidad |
| Paso 5 — cuerpo | El agente validador revisa campo a campo la coherencia entre capas. |
| Paso 6 — titular | 6. Resumen de entrega |
| Paso 6 — cuerpo | El orquestador entrega un informe final con todas las acciones realizadas durante el proceso |
| Bloque de cierre A — titular | Control total, en todo momento |
| Bloque de cierre A — cuerpo | La suite propone y enseña el plan, pero tú decides cuándo actuar. |
| Bloque de cierre B — titular | Componentes en acción |
| Bloque de cierre B — cuerpo | Una combinación de agentes que deciden, skills que explican y conectores que buscan el dato real. |
| Remate | Nada se implementa sin aprobación — el control queda de tu lado en todo momento |
| Logo | Occident — completo, superior izquierda · isótipo en el pie, junto a "Estrategia de Adopción · 2026" |

> **Tabla alineada con la pieza final del 28 ago (16:01).** Los seis pasos llevan titular numerado y cuerpo explicativo — el brief original solo daba el titular; el cuerpo se añadió en producción y suma en autoformativo (condición 2 de Óscar). Los dos bloques de cierre y el pie tampoco estaban en el brief.

---

### Especificaciones Figma (`infografia`) — tal como se produjo

- **Formato:** **vertical largo, 2160×5178 px**, panel único. ⚠️ No es el 1080×1350 que define la fila `Infografia` de `Configuraciones/matriz-componentes-graficos.csv` — ver la nota de matriz al final. Referencia de familia: las infografías de procedimiento de Pub 5 (jerarquía de referencias) y Pub 2 (Configura tu entorno)
- **Fondo:** blanco · acento rojo `#DC0028` en números, titulares e ilustraciones · sin fondos negros
- **Los 6 pasos, en bandas horizontales alternas:** número y titular en rojo `#DC0028`, cuerpo en gris. La ilustración alterna de lado banda a banda (izquierda en 1, 3 y 5; derecha en 2, 4 y 6), lo que marca el ritmo de lectura
- **Conector entre bandas:** pestaña triangular apuntando hacia abajo, centrada entre una banda y la siguiente
- **El paso 3 es la excepción y el corazón de la pieza:** banda con fondo rosa claro que la separa del resto, ilustración de pausa y barrera, y la palabra **ESPERA** abriendo el titular. Salta a la vista en menos de tres segundos, que era el criterio
- **Bloques de cierre:** dos, en una franja gris antes del remate — `Control total, en todo momento` (fondo gris más marcado) y `Componentes en acción` (fondo blanco), cada uno con su ilustración
- **Remate:** a ancho completo, en CO Bold sobre fondo blanco, cerrando la pieza
- **Pie:** `Estrategia de Adopción · 2026` con el isótipo Occident, alineado a la derecha
- **⚠️ El flujo sí es secuencial, y aquí las flechas en cadena están bien.** La regla del 25 ago prohíbe encadenar con flechas lo que ocurre *en paralelo* — no aplica a este caso: estos seis pasos ocurren uno después de otro, y el orden es justamente el contenido. **Ojo con no reutilizar el visual de esta pieza para el panel 2 de Pub 18**, donde el reparto sí es en paralelo
- **⚠️ La suite propone y pide confirmación, nunca actúa sola** (misma regla). Ni el remate ni el título pueden sugerir ejecución autónoma: el paso 3 y el remate son el argumento entero de la pieza
- **Eyebrow:** rojo `#DC0028` en mayúsculas, arriba, con el `AGENTES 2/2` que encadena con Pub 18
- **Título:** CO Bold · **texto corriente:** GCO Sans regular
- **Píldora de fase:** `Fase 3 | Multi-entorno`, cápsula superior derecha
- **Logo Occident:** completo en la esquina superior izquierda, e isótipo en el pie

> ⚠️ **La fila `Infografia` de la matriz ya no describe lo que se produce.** Define el componente como vertical 1080×1350; esta pieza salió a 2160×5178, y Pub 17 también creció respecto a su fila. Con dos casos seguidos, hay que decidir: o se admite el vertical largo como variante para procedimientos de más de cuatro pasos, o se registra como componente aparte en `matriz-componentes-graficos.csv`.

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Ejemplo 2 completo (los 6 pasos del flujo de "añadir un campo") | `información-equipo-raona-gco-devsuite.md` — "Cómo se ve en el día a día", Ejemplo 2 |
| "Nada se implementa sin aprobación", el rastro escrito y el control del lado de la persona | `información-equipo-raona-gco-devsuite.md` — "Las decisiones de diseño que la definen", decisión 2 |
| Que el paso 5 lo ejecuta **el validador** | Unión de dos secciones de la misma fuente: el Ejemplo 2 dice "pasa el control de calidad campo a campo" sin nombrar agente, y "Los tres agentes" define al validador como el control de calidad final que comprueba campo a campo. La atribución es del proyecto, no está literal en la fuente — **si Nibaldo prefiere no atribuirlo, el paso 5 vuelve a "Pasa el control de calidad, campo a campo"** |
| "Cinco capas en cascada" | `información-equipo-raona-gco-devsuite.md` — Ejemplo 2 (literal). El sistema completo tiene seis capas; este cambio concreto toca cinco |

> **Condición de Óscar (25 ago):** esta publicación **es** el caso de uso concreto con ejemplo que Óscar pidió para el componente Agentes. Lo que falta para completar el trío del componente es el vídeo — ver `Produccion/Videos/v07_gco-dev-suite/`. Acta: `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_25-08-26.md`.

> **Decisión pendiente — el cierre de la serie.** Esta es la última publicación de la gco-dev-suite. El post cierra con el resumen de las 3 piezas, pero **no hay decidido qué viene después**: si se enlaza al Vídeo 07, si se invita a escribir en el subcanal de Reservas, o si simplemente cierra. El subcanal de Reservas todavía no se ha comunicado formalmente a Informática — Jonatan envía ese correo al regreso de vacaciones — así que apuntar ahí depende de que ese correo ya haya salido cuando esta publicación se publique. **Confirmar con Yehimy antes de producir.**
