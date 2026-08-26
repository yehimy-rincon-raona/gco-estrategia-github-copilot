# Solicitudes al equipo de Nibaldo · Reunión miércoles 26 agosto 2026
> Reunión de trabajo sobre vídeos, con Salvador Ivars Suárez y el equipo de Nibaldo (Raona interno).
> Fuentes: `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_25-08-26.md` · `Produccion/TABLERO.md` · `Seguimiento/base-reunion-seguimiento.md`
> Continúa desde: `solicitudes-nibaldo_23jun2026.md`

---

## Por qué esta reunión importa

El 25 de agosto Óscar puso una condición sobre todo el material ya producido: **la parte conceptual está dada, falta el ejemplo de uso concreto y el vídeo**. Nibaldo estuvo de acuerdo. Eso convierte los vídeos en el trabajo de las próximas semanas, no en un extra.

Además hay cinco dudas arrastradas que nunca se han resuelto y que afectan a contenido ya producido. Esta reunión es la primera oportunidad real de cerrarlas con el equipo técnico presente.

---

## Resumen de lo que necesito

| # | Tema | Tipo | Bloquea |
|---|------|------|---------|
| 1 | Alcance y reparto de los vídeos nuevos | Decisión conjunta | Sí — define el trabajo de la semana |
| 2 | Quién graba y cuándo | Compromiso de agenda | Sí |
| 3 | `dotnet-review` y `cobol-analyzer`: ¿son parte real de las 32 skills? | Confirmación técnica | Sí — Pub 15 |
| 4 | URL de Confluence con la documentación de instalación | Dato | Sí — el post de soporte de cada vídeo |
| 5 | ¿"gco-dev-suite" y "Copilot Dev Suite" son lo mismo? | Confirmación | Sí — nomenclatura de toda la serie |
| 6 | Cabos sueltos de los 6 vídeos ya publicados | Confirmación | Parcial — ver bloque 2 |
| 7 | Validar la reescritura ya publicada de Pub 4 ("Una vez o siempre") | Validación técnica | No bloquea — el post ya está en Raona |
| 8 | Casos de uso concretos por componente | Aporte de contenido | No bloquea, pero es lo que pidió Óscar |
| 9 | Tres pendientes de facturación abiertos desde el 21 jun | Confirmación | Afectan a piezas ya publicadas |

---

## Bloque 1 · Vídeos nuevos — el encargo del 25 de agosto

**Lo que se acordó con GCO:** dos o tres piezas.
- Uno o dos vídeos de **casos de uso** (la cantidad depende de cuántos casos entren).
- Un vídeo dedicado a **qué es el componente, cómo se instala y qué significa** dentro del flujo de trabajo.

**Lo que necesito decidir en la reunión:**

1. **¿Sobre qué componente arrancamos?** La serie publicada va Dev Suite → Skills → MCP → Agentes. ¿Empezamos por Skills, que es lo primero que la gente va a querer usar, o por la instalación de la gco-dev-suite, que es la puerta de entrada a todo?
2. **¿Un vídeo por componente o uno que los recorra?** Óscar pidió "un ejemplo de uso por cada componente" (una Skill, un MCP, un agente). Eso puede ser un vídeo con tres casos o tres vídeos cortos. Mi propuesta: **tres piezas cortas**, que es el formato que ya funciona en este proyecto y permite publicarlas escalonadas.
3. **¿Qué caso de uso concreto usamos para cada uno?** Este es el aporte que necesito del equipo — el caso tiene que ser real, del trabajo diario, no inventado.
4. **¿Quién graba?** En los vídeos 04, 05 y 06 la grabación vino de Víctor Gisbert y de la entrevista con Luis De la Fuente. ¿Se repite ese esquema?
5. **¿Para cuándo?** Yehimy se comprometió con GCO a construirlos "esta semana". Necesito una fecha real de grabación para no prometer lo que no depende de mí.

---

## Bloque 2 · De dónde partimos — los 6 vídeos ya terminados

**Hay 6 vídeos producidos y publicados.** No partimos de cero: la tanda nueva se suma a una serie que ya existe y tiene que encajar con ella.

| Vídeo | Título | Dónde está |
|---|---|---|
| **01** | Verifica tu acceso e instala las herramientas | Publicado en Teams GCO, 16 jul |
| **02** | Autenticación en Visual Studio y VS Code | Publicado en Teams GCO, 16 jul |
| **03** | Autenticación desde la terminal (`gh auth login`) | Publicado en Teams GCO, 16 jul |
| **04** | Instala y configura tus MCP con la gco-dev-suite | Publicado de prueba en Teams Raona, 14 ago — hilo de Pub 2 |
| **05** (Pub 10) | Tres casos, un mismo copiloto | Publicado de prueba en Teams Raona, 3 ago |
| **06** (Pub 11) | Dos errores de pantalla | Publicado de prueba en Teams Raona, 3 ago |

### Lo que sí queda abierto de esta serie

1. **Un séptimo vídeo aprobado y nunca producido.** El 15 de julio Jonatan eligió la **Opción A** para el vídeo de Primeros Pasos: *"Primera conversación con GitHub Copilot Chat + completado inline"*. El guion está en `Videos/v02_primeros-pasos/`. En `matriz-correcciones-videos_15jul2026.md` sigue como casilla sin marcar: *"Producción del vídeo con el guion de la Opción A → recibe número global al entrar"*.
   **Pregunta:** ¿entra en la tanda nueva, o lo damos por superado ahora que el foco son casos de uso por componente?

2. **La revisión de coherencia técnica de los vídeos 05 y 06** figura pendiente de Nibaldo desde julio. Se publicaron en Raona sin que quede registro de que se hiciera.
   **Pregunta:** ¿la puede hacer alguien del equipo esta semana?

3. **Correcciones de julio que no puedo verificar.** Antes de publicar en Raona quedaron anotadas: condensar el 04 de ~16 min a 2:30-3:00, difuminados del 05 (cámara, URL de producción, JSON con datos de personas), audio de la sección 01 del 06, y el audio del 05 donde la voz lee "prop" en vez de "prompt".
   **No puedo comprobar desde los archivos si se aplicaron** — los vídeos finales no están en el repositorio. **Pregunta:** ¿salieron ya corregidos, o se publicaron tal cual para revisión interna?

4. **Falta la infografía de acompañamiento del Vídeo 04** (`V04-S1-infografia_activa-tus-mcp`). Esa sí está sin producir.

> **Nota:** la tabla de vídeos de `Produccion/TABLERO.md` mostraba los estados de julio como si los vídeos estuvieran parados. Corregida el 25 ago.

---

## Bloque 3 · Las dudas arrastradas

Estas no son de vídeo, pero el equipo está en la sala y son las que bloquean contenido ya producido. Vale la pena aprovechar.

### 3.1 · `dotnet-review` y `cobol-analyzer` — bloquea Pub 15

`dotnet-review` es el ejemplo trabajado en las **tres tarjetas de Pub 15**, y la ruta `.github/skills/dotnet-review/` aparece impresa dentro de las piezas. En el material de origen esa skill aparece dentro de la plantilla `copilot-template-gco`, pero nunca se confirmó que sea una de las **32 skills** de la suite.

**Por qué bloquea:** Pub 12 anuncia 32 skills. Si un desarrollador va a buscar `dotnet-review` y no la encuentra, el material pierde credibilidad justo en el bloque donde estamos pidiendo confianza.

**Qué pasa según la respuesta:**
- Si **sí** es una de las 32 → Pub 15 se cierra tal como está.
- Si **no** lo es → hay que **volver a producir las tres tarjetas**, porque el nombre está dentro de la imagen. No es un cambio de texto.
- Si es de la plantilla pero no de la suite → se puede resolver con una línea en el post que lo aclare, sin tocar las piezas. Esta es la salida más barata si aplica.

Misma pregunta para `cobol-analyzer`.

### 3.2 · URL de Confluence

Óscar la pidió el 18 de agosto y volvió a pedirla el 25. El mecanismo acordado es que **cada vídeo va soportado por un post, y en ese post va el enlace a Confluence** — así, si el proceso de instalación cambia, el post no hay que editarlo nunca.

**Necesito:** la URL del documento de instalación de la gco-dev-suite. Y saber si hay más de un documento (uno por componente) o uno solo.

### 3.3 · ¿"gco-dev-suite" es la misma "Copilot Dev Suite"?

El guion del Vídeo 04 la llama **"Copilot Dev Suite"**; toda la serie publicada la llama **"gco-dev-suite"**. Si son la misma cosa, hay que unificar el nombre antes de que salgan más contenidos. Si son cosas distintas, hay que saberlo ya.

### 3.4 · La Memoria de GitHub Copilot — la pregunta de fondo

**Esta es la más importante de todas, y no se detectó en la reunión.**

En la reunión del 25 quedó establecido que la Memoria de GitHub Copilot **es el contexto de la conversación actual** — Jonatan: *"no es algo que tú puedas editar"*; Nibaldo: *"es este espacio de ventana donde tú escribes"*.

**El problema:** eso es exactamente lo que Pub 3 ya llamó **"el cajón"**, y Pub 3 se publicó cinco días antes que Pub 4, ante los mismos lectores:

> *"GitHub Copilot no tiene memoria permanente. Tiene un cajón. Cada vez que abres el chat, ese cajón empieza con las instrucciones base y se va llenando: el documento activo, los archivos abiertos, el historial de la conversación, el código seleccionado."*

Si la Memoria es el contexto de la conversación actual, **la Memoria y el cajón son la misma cosa**. Y entonces los "tres focos" que se presentaron en la reunión — ventana de contexto · Memoria · Instructions — **no son tres, son dos**, con el primero repetido bajo dos nombres.

**Qué necesito que resuelvan:**

- **Si son lo mismo** → el post se simplifica a dos contenedores: lo que dura la conversación (lo que Pub 3 llamó "el cajón", que es lo que GitHub Copilot llama Memory) y lo que dura siempre (`copilot-instructions.md`). Es más claro y además reconcilia Pub 3 con Pub 4.
- **Si son distintos** → hace falta que expliquen en qué, porque desde fuera suenan idénticos. Y esa diferencia es justo lo que hay que escribir.

**Y las preguntas prácticas que un desarrollador hará en cuanto lo lea:**

- ¿Se puede **ver** de alguna forma lo que hay en ese contexto, o es completamente opaco?
- ¿Se **borra** al cerrar la conversación, al cerrar Visual Studio, o tiene alguna caducidad?
- ¿Funciona **igual en Visual Studio que en VS Code**? La audiencia usa Visual Studio como entorno principal.
- ¿Está **activa por defecto** o hay que hacer algo?

**Por qué importa:** sin esto no se puede escribir el texto nuevo. Si lo escribo sin confirmarlo, repito el error que Óscar señaló.

---

### 3.5 · Tres pendientes de facturación, abiertos desde el 21 de junio

Estaban registrados solo dentro de un documento de Pub 4 y no habían llegado nunca a la lista de bloqueantes. Los tres afectan a piezas ya publicadas:

1. **¿Las licencias de GCO están en el modelo por uso (AI Credits) o siguen en plan anual con multiplicadores?** Define si la tarjeta de tokens puede llevar cifras o se queda conceptual.
2. **¿Qué modelos concretos incluye la licencia de GCO?** Es la razón por la que las piezas dicen "ligeros/avanzados" y no nombres. Sin esta respuesta no se listan nombres de modelo en ninguna pieza.
3. **¿Modo auto y nivel de razonamiento funcionan igual en Visual Studio que en VS Code?** La audiencia usa Visual Studio como entorno principal.

---

## Bloque 4 · Lo que le pido al equipo como aporte

No son preguntas, son material que necesito de su lado:

1. **Un caso de uso real por componente** — una Skill, un MCP, un agente. Del trabajo diario, con el problema concreto que resuelve. Es literalmente lo que pidió Óscar.
2. **Pasos guiados de instalación**, aunque el paso técnico sea simple. Jonatan lo defendió el 18 de agosto: *"la gente igual se pierde"*.
3. **Confirmación de si el material sirve para alguien que no hizo la formación.** Óscar fue explícito: si en septiembre entra un desarrollador nuevo, tiene que poder entrar solo y entender. Nibaldo tiene una lectura distinta — cree que quien no ha hecho la formación difícilmente va a indagar por estos conceptos. **Esa diferencia no se resolvió en la reunión** y conviene saber desde qué supuesto producimos.

---

## Decisiones que quiero salir teniendo

- [ ] Cuántos vídeos, sobre qué componentes y en qué orden
- [ ] Un caso de uso concreto asignado a cada vídeo
- [ ] Fecha de grabación
- [ ] Si el séptimo vídeo (Opción A, Primeros Pasos) entra en la tanda o se descarta
- [ ] Quién hace la revisión de coherencia de los vídeos 05 y 06
- [ ] Respuesta sobre `dotnet-review` / `cobol-analyzer`
- [ ] La URL de Confluence, o quién la consigue y cuándo
- [ ] Nombre unificado de la suite

---

## Después de la reunión

Registrar lo que responda el equipo en `Teams-Interno/Produccion-y-materiales/nibaldo/registro-nibaldo.md`, y lo que se integre al plan en `registro-integraciones.md`. Actualizar `Produccion/TABLERO.md` y `Seguimiento/base-reunion-seguimiento.md` con lo que se desbloquee.
