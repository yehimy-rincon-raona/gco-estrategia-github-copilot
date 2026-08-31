# Planteamiento de grabación — Vídeos 07 y 08 · gco-dev-suite
> Creado el 28 agosto 2026 · Para la reunión de seguimiento del **martes 1 sep 2026**
> Origen: reunión del 25 ago — tarea 3, *"construir los vídeos: uno o dos de casos de uso + uno de qué es / cómo se instala"* (Yehimy + Nibaldo, esta semana). Acta: `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_25-08-26.md`
> Estado del material: **grabación del equipo de Nibaldo recibida y cotejada el 28 ago.** Este documento fija qué necesita cada vídeo para poder cotejarlo contra lo que llegó — y lo que no esté cubierto queda como petición de grabación al equipo de Nibaldo.

---

## Para qué sirve este documento

Tiene dos usos, en este orden:

1. **Cotejar.** Cuando la grabación que llegó esté revisada, se marca sección por sección qué quedó cubierto y qué no. La lista de comprobación del final es para eso.
2. **Pedir.** Lo que no esté cubierto es la petición concreta de grabación al equipo de Nibaldo — con el prompt exacto que hay que escribir y qué tiene que verse en pantalla, para que no haya que grabar dos veces.

No es un guion final. La voz en off se redacta cuando se sepa qué material hay de verdad, siguiendo el formato de las píldoras ya producidas (`v05-pill_para-grabacion_casos-de-uso-reales.md`).

---

## El reparto propuesto — a validar el martes

La reunión del 25 ago pidió *"uno o dos vídeos de casos de uso"* más *"un vídeo dedicado a qué es el componente, cómo se instala y qué significa dentro del flujo de trabajo"*. Traducido a dos piezas, y siguiendo el orden del proyecto — general antes que específico, igual que Pub 12 antes de Pub 13-19:

| Vídeo | Tema | Canal propuesto | Publicación que soporta | Duración objetivo |
|-------|------|-----------------|-------------------------|-------------------|
| **07** | Qué es la gco-dev-suite y qué cambia en tu día | Anuncios y Tips Ágiles | **Pub 12** — "gco-dev-suite: qué es y por qué existe" (hoy borrador sin enviar) | 2:30 – 3:00 |
| **08** | Los 3 agentes en acción: añadir un campo que toca cinco capas | Casos de Uso Reales | **Pub 18-19** — la serie de agentes | 2:30 – 3:00 |

**Por qué así:**
- El **07 no es un vídeo de instalación.** Eso ya es el Vídeo 04 ("Instala y configura tus MCP con la gco-dev-suite"). El 07 responde a *qué es esto y por qué me sirve*, y para el cómo remite al Vídeo 04 y al post de soporte con la URL de Confluence. Grabar otra instalación duplicaría trabajo ya hecho.
- El **08 es el caso de uso concreto que pidió Óscar** para el componente Agentes: *"vamos a utilizar este skill, este skill es para esto, y un ejemplo de uso concreto de para qué"*, más el vídeo ilustrativo. Es el material que hoy **no existe en ninguna parte del proyecto** — ni en el Vídeo 04 ni en la entrevista de los Vídeos 05-06.
- Los dos tienen que ser **autoformativos**: entendibles por alguien que no hizo la formación, incluido quien entre en septiembre (condición 2 y 3 de Óscar).

> ⚠️ **Consecuencia en la numeración.** El vídeo de Primeros Pasos aprobado por Jonatan el 15 jul (Opción A — primera conversación con GitHub Copilot Chat + completado inline, guion en `Videos/v02_primeros-pasos/`) sigue sin producir y sin número global asignado. Si la gco-dev-suite se lleva el 07 y el 08, **ese vídeo pasa a ser el 09.** Conviene decirlo en voz alta el martes, porque es contenido ya aprobado que lleva mes y medio en cola.

---

## Qué NO hay que volver a grabar

Antes de pedir grabación nueva: esto ya está registrado en el proyecto y se puede reutilizar en edición.

| Material existente | Dónde está | Para qué sirve en el 07/08 |
|---|---|---|
| Instalación desde el Portal de Empresa, carpeta de logs, confirmación | `v04_instalar-mcp/` — capturas `01`–`05` | Los 20 seg del 07 donde se dice que se instala en unos minutos, sin permisos de administrador |
| Guía de la suite (pasos 04 a 07) | `v04` — `06`, `07`, `32` | Apoyo visual de "hay una guía y una documentación" |
| Configuración de credenciales (PAT de Jira/Confluence, DB2) | `v04` — `08`–`23` | **No se usa en el 07.** Es el detalle del Vídeo 04; meterlo aquí volvería el 07 un tutorial |
| `mcp servers` / `mcp show` — los conectores instalados | `v04` — `24`, `25` | El bloque de los 5 conectores del 07 |
| Prueba real del MCP de Jira ("dime qué tareas tengo asignadas") | `v04` — `26`, `27` | Ejemplo de "va a buscar el dato real" en el 07 |
| Prueba real contra DB2 | `v04` — `42`, `43`, `44` | Refuerza "la base de datos manda" en el 07 |
| Pantalla del agente y del agente personalizado | `v04` — `34_mcp-agent`, `35_mcp-custom-agent` | Es lo único que existe hoy sobre agentes. **Sirve para mostrar dónde vive el agente, no para mostrarlo trabajando** |
| Sesiones reales de GitHub Copilot con código de GCO | `v05-06_casos-de-uso/` | No se reutiliza: son casos de GitHub Copilot sin la suite. Mezclarlos confundiría los dos relatos |

> **El hueco real es el 08.** No hay ni una grabación de un agente recibiendo una petición, devolviendo un plan y esperando aprobación. Es justo el comportamiento que define la suite, y es lo que hay que grabar sí o sí.

---

## Vídeo 07 — Qué es la gco-dev-suite y qué cambia

**Fuente del contenido:** `Conocimiento/temas_mes-agosto/información-equipo-raona-gco-devsuite.md` (equipo de Nibaldo, 6 ago). El vídeo no aporta información nueva: pone en imagen lo que ya está validado en Pub 12 a 19.

### Sección 1 · El problema, en 30 segundos

**Qué cuenta:** cuando algo falla no hay un sitio donde mirar, hay cinco — el error en Elastic, la explicación en Confluence, el código en TFS, el ticket en Jira, la estructura del dato en DB2. Y las reglas de equivalencia entre capas no están escritas: viven en la cabeza de quien lleva años.

**Qué tiene que verse en pantalla:**
- Varias ventanas abiertas a la vez, sin relación entre ellas (puede ser recreado, no hace falta que sea real).
- ✅ **Cubierto sin grabar:** se puede resolver con la pieza gráfica ya producida `pub-16_s-9_triptico_2-cuando-algo-falla-no-hay-un-solo-sitio-donde-mirar.png`, montada como plano fijo.

**Falta grabar:** nada, si se usa la pieza gráfica.

### Sección 2 · Qué es: tres tipos de piezas

**Qué cuenta:** un paquete que se instala sobre GitHub Copilot y le da lo que le falta para trabajar en GCO. Tres tipos de piezas: **3 agentes** que deciden, **32 skills** que explican cómo se hace aquí, **5 conectores MCP** que van a buscar el dato real. La regla: el agente decide, la skill explica, el conector busca.

**Qué tiene que verse en pantalla:**
- El resultado de `mcp servers` / `mcp show` con los conectores instalados → ✅ `v04` capturas `24`, `25`.
- El listado de skills disponibles. ❓ **Falta grabar:** no hay captura del catálogo de las 32 skills en el proyecto.
- La pantalla donde se eligen los agentes → ✅ `v04` capturas `34`, `35`.

**Falta grabar:**
1. **El catálogo de skills a la vista** — la pantalla donde se ve que hay 32 y cómo se llaman. Es lo que hace tangible el número.

### Sección 3 · Qué significa en tu día: una petición, no un comando

**Qué cuenta:** no hay comandos que aprenderse. Se pide en lenguaje natural y el coordinador decide qué hacer. Ejemplo real: *"¿por qué falla este proceso?"* — lanza tres búsquedas a la vez y devuelve un informe consolidado, no tres volcados.

**Qué tiene que verse en pantalla:**
- Alguien escribiendo la petición en lenguaje natural y la respuesta consolidada.
- ✅ **Parcialmente cubierto:** `v04` capturas `26`, `27` (pregunta a Jira y su respuesta) y `30`, `31`, `33` (prompt completo y respuestas).

**Falta grabar:**
2. **Una petición del tipo "¿por qué falla este proceso?"** con el coordinador consultando más de un sistema en la misma respuesta. Las capturas del Vídeo 04 muestran un conector a la vez; lo que sostiene el relato del vídeo es **una sola petición que toca varios**.

### Sección 4 · Qué cambia — el cierre

**Qué cuenta:** lo que antes eran cinco pestañas y veinte minutos de recopilación, ahora es una frase. Las reglas que vivían en la cabeza de los veteranos están escritas y se verifican solas. Y la suite propone: no implementa nada sin aprobación.

**Qué tiene que verse en pantalla:**
- ✅ **Cubierto sin grabar:** `pub-17_s-9_tarjeta-comparativa_investigar-un-fallo-antes-y-ahora.png` como plano fijo de cierre.
- Cierre con la URL de Confluence en pantalla. ⛔ **Bloqueado:** la URL sigue sin entregarse (pendiente de Nibaldo desde el 18 ago). Mientras no llegue, el cierre remite al post de soporte, no a una dirección concreta.

**Falta grabar:** nada.

---

## Vídeo 08 — Los 3 agentes en acción

**Fuente del contenido:** `información-equipo-raona-gco-devsuite.md`, "Cómo se ve en el día a día", Ejemplo 2. Es el mismo caso que sostiene Pub 19, así que el vídeo y la publicación se refuerzan sin duplicar.

**Este vídeo es una grabación nueva completa.** No hay material previo reutilizable.

### Lo que hay que grabar, de una sola tirada

Una sesión real (o de demostración con datos de ejemplo) donde se vea el ciclo completo. En orden:

| # | Momento | Qué tiene que quedar registrado en pantalla |
|---|---------|---------------------------------------------|
| 1 | La petición | Alguien escribe, en lenguaje natural, una petición de cambio que toque varias capas. La del material de origen es *"añade la fecha de baja a la consulta de pólizas"* — **si en GCO hay un cambio equivalente más reconocible, mejor: lo decide el equipo de Nibaldo** |
| 2 | El reconocimiento | El coordinador identifica que el cambio afecta a más de una capa y llama al orquestador de cambios |
| 3 | El análisis | La respuesta donde dice **qué se va a ver afectado** — las capas implicadas, antes de tocar nada |
| 4 | **El plan y la espera** | El plan escrito en pantalla **y el momento en que se detiene a pedir aprobación.** Es el plano más importante de los dos vídeos: es la prueba visual de que la suite no actúa sola. Debe quedar tiempo de pantalla suficiente para leerlo |
| 5 | La aprobación | La persona aprobando el plan |
| 6 | La ejecución | El agente ejecutando capa por capa, en orden |
| 7 | La validación | El validador señalando qué revisó campo a campo. **Si detecta un problema, es oro: se ve que lo señala y no lo corrige por su cuenta** |
| 8 | El resumen | El resumen final de lo que se hizo |

### Cómo grabarlo

- **Sin prisa y sin condensar.** Grabar el flujo completo aunque dure 15 o 20 minutos: la condensación a 2:30-3:00 se hace en edición. El Vídeo 04 se grabó de ~16 min y se condensa después — mismo criterio.
- **Sin cortar durante la espera del paso 4.** Es tentador saltarse el tiempo muerto mientras se lee el plan; ese tiempo muerto *es* el contenido.
- **No hace falta que salga perfecto.** Si el agente se equivoca o hay que reintentar, sirve igual — se limpia en edición. Vale más una sesión real con tropiezos que una demostración ensayada.
- **Sin audio útil necesario.** Estas píldoras se montan al 100 % con voz en off nueva generada en Clipchamp (voz Alessio Dragon HD Latest), igual que los Vídeos 05 y 06. Se puede narrar mientras se graba para nuestra referencia, pero no se usará ese audio.

---

## Requisitos técnicos de captura

- **Resolución de grabación: 1920×1080.** Es la resolución de exportación estándar del proyecto (`Configuraciones/config_exportacion-videos.md`) — grabar por debajo obliga a escalar y el texto de pantalla se vuelve ilegible.
- **Ventana maximizada y zoom del editor subido.** El texto que en un monitor grande se lee bien, en Teams y en un móvil no. Si al ver la grabación al 50 % no se lee el prompt, hay que volver a grabar.
- **Un solo monitor.** Grabaciones de escritorio extendido salen ilegibles al recortar.
- **Datos sensibles a evitar en el encuadre** (misma lista que se aplicó en los Vídeos 04, 05 y 06 — si aparecen, hay que difuminar en edición, y eso cuesta tiempo):
  - Usuario, correo corporativo y rutas con el nombre de perfil (`C:\Users\...`).
  - Cualquier PAT o token, en la terminal o en el navegador.
  - Nombres reales de bases de datos, proyectos, COBOLs y módulos en las respuestas.
  - URLs de producción, números de siniestro, de operativa y de póliza reales.
  - Tickets reales de Jira con sus datos.
  - Cámara y nombre de perfil si se graba dentro de una reunión de Teams.

---

## Lista de comprobación — cotejar contra la grabación que llegó

Se marca al revisar el material del 28 ago. Lo que quede en ⬜ es la petición de grabación al equipo de Nibaldo.

> ✅ **Cotejado el 28 ago** contra la grabación que llegó del equipo de Nibaldo. Transcripción en `transcripciones/`; la lectura completa de qué aporta, qué contradice y qué falta está en `resumenes/que-aporta-esta-grabacion.md`.
>
> **La grabación cubre casi todo el Vídeo 07** — qué es GitHub Copilot, qué es la suite, cómo comprobar que no está instalada, la instalación desde el portal de empresa, la configuración de credenciales y una prueba real contra Jira. **Del Vídeo 08 no trae nada.**

**Vídeo 07**
- ✅ Qué es la suite, qué añade y por qué es una capa y no otra aplicación
- ✅ Comprobación de que NO está instalada (`mcp show`: uno frente a cinco o seis)
- ✅ Instalación desde el portal de empresa y comprobación en la terminal
- ✅ Configuración de credenciales: PAT de Jira, PAT de Confluence, DB2
- ✅ Prueba real en lenguaje natural contra un conector
- ✅ **Extra no previsto:** la ventana de contexto en porcentaje, y el momento en que el asistente se detiene a pedir confirmación antes de lanzar la consulta
- ⬜ Catálogo de las skills a la vista — solo se ve el número al cargar, no cuáles son
- ⬜ Una petición en lenguaje natural que toque más de un sistema en la misma respuesta — la prueba consulta solo Jira
- ✅ Instalación desde el Portal de Empresa (`v04` `01`–`05`)
- ✅ Conectores instalados: `mcp servers` / `mcp show` (`v04` `24`, `25`)
- ✅ Prueba real contra Jira y contra DB2 (`v04` `26`, `27`, `42`–`44`)
- ✅ Pantalla de agentes (`v04` `34`, `35`)
- ⛔ URL de Confluence para el cierre — pendiente de Nibaldo desde el 18 ago

**Vídeo 08** — ⛔ **nada cubierto: hay que pedir esta grabación entera**
- ⬜ La petición de cambio en lenguaje natural
- ⬜ El coordinador reconociendo el cambio multicapa
- ⬜ El análisis de impacto (qué capas se ven afectadas)
- ⬜ **El plan en pantalla y la espera de aprobación** — el plano imprescindible
- ⬜ La aprobación
- ⬜ La ejecución capa por capa
- ⬜ El validador señalando qué revisó
- ⬜ El resumen final

---

## Preguntas para la mesa del martes 1 sep

1. **No.** La grabación del 28 ago cubre el Vídeo 07 casi entero, pero **del flujo de agentes no trae nada**. Hay que pedir esa grabación con la lista de ocho momentos de arriba: es lo único que no se puede sustituir con material existente.
1b. **Las cifras no cuadran.** La grabación dice **4 agentes y 39 skills**, y enumera **Kibana y SQL** entre los conectores; el material del 6 de agosto dice 3 agentes, 32 skills y cinco conectores con el navegador. Esas cifras están impresas en las piezas de Pub 14, 16, 18 y 19. **Hasta aclararlo, ninguna pieza nueva debería llevarlas.**
1c. **Solapamiento con el Vídeo 04.** La mitad de la grabación es instalación y credenciales, que es lo que ya hace el 04. Decidir el reparto antes de montar.
2. **Los dos nombres del producto.** Sigue sin resolverse desde el 11 ago, pero el guion del Vídeo 04 ya trae una explicación que funciona: *"el paquete se llama **Copilot Dev Suite** en el Portal de Empresa; una vez instalado, se referencia como `gco-dev-suite`. Ambos nombres son correctos y aparecen en pantalla"* (`v04/pill_para-grabacion_instalar-y-configurar-mcp.md`, línea 24). **Basta con que Nibaldo confirme esa frase** y el bloqueante se cierra para toda la serie.
3. **¿En qué entorno se graba?** El resumen del Vídeo 04 (`v04/resumen_video.md`) afirma que la configuración de MCP y skills **solo funciona en VS Code o en la terminal, no en el Visual Studio 2022 que usa GCO de forma nativa**. Si eso sigue siendo cierto, un vídeo autoformativo sobre la suite tiene que decirlo en los primeros 30 segundos — porque el entorno principal de la audiencia es Visual Studio. **Confirmar con Nibaldo antes de grabar:** ese dato viene de una nota de trabajo del proyecto, no de una fuente del equipo técnico.
4. **La URL de Confluence.** Tercera vez que se pide (18 ago, 25 ago). Es lo que cierra los dos vídeos y el mecanismo que se acordó: el vídeo va soportado por un post, y en el post va la URL — así, si la instalación cambia, el post no hay que editarlo.
5. **La numeración.** Confirmar que la gco-dev-suite se lleva el 07 y el 08, y que el vídeo de Primeros Pasos aprobado el 15 jul pasa a 09.
6. **¿Un tercer vídeo de casos de uso?** El acta habla de *"uno o dos vídeos de casos de uso"*. Si la grabación del 28 ago trae más de un caso, se evalúa un 09/10 con el mismo criterio de reparto que se usó con los Vídeos 05 y 06.

---

## Archivos relacionados

- Post que soporta el Vídeo 07: `Produccion/semana-7_10-14ago(pub-12-13)/pub-12_mar-11ago/canal-anuncios-tips_pub12.md`
- Posts que soportan el Vídeo 08: `Produccion/semana-10_fechas-pendiente(pub-18-19)/`
- Fuente de contenido: `Conocimiento/temas_mes-agosto/información-equipo-raona-gco-devsuite.md`
- Formato de guion a seguir cuando haya material: `Produccion/Videos/v05-06_casos-de-uso/v05-pill_para-grabacion_casos-de-uso-reales.md`
- Estándar de exportación: `Configuraciones/config_exportacion-videos.md`
