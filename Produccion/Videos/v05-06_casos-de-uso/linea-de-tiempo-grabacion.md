# Línea de tiempo de la grabación — guía cronológica para editar

> **Cómo usar este documento:** avanza por la grabación en orden. Cada bloque de abajo sigue ese mismo orden.
> Para cada tramo: identifica en pantalla lo que describe la columna "Qué se ve", y córtalo como clip para el destino indicado.
> Complementa a `mapa-de-edicion.md` (ese está organizado por guion; este está organizado por la grabación).
>
> **La grabación intercala los dos videos.** El orden cronológico es:
> `V05-S1 → V05-S2 → V06-S2 → V05-S3 → V06-S3 → (descartar) → V05-S4 → (descartar)`
> Por eso NO se puede editar de corrido: hay que cortar clips y repartirlos.

## Referencias de tiempo verificables

La única referencia confiable es el **contador del recuadro de la reunión de Teams** (visible en casi toda la grabación):

| Contador de reunión | Qué está pasando | Captura donde se verificó |
|---|---|---|
| **19:22** | Caso GAN (vista de Gantt) | `44_…vista-de-gannt` |
| **21:18** | Caso combo/situación (portal Catalana) | `49_portal-catalana…` |
| **28:41** | Caso Equifax (ejemplo encontrado) | `61_…equifax-encontrado-el-ejemplo` |

Los demás minutos son estimados. Ante la duda, usa la **frase de inicio** de cada bloque (lo que se oye decir a Luis).

---

## Bloques en orden cronológico de la grabación

### Bloque 1 · Intro de la llamada y demo del visor como herramienta
- **Minuto estimado:** 0 – 2
- **Qué se ve:** comienzo de la llamada; Luis presenta el visor de sesiones explicándolo como herramienta.
- **Destino: DESCARTAR** (el visor se explica con la voz en off de las intros, no con este fragmento).

### Bloque 2 · Forma de trabajar y plano general del visor
- **Minuto estimado:** ~2 – 4
- **Empieza cuando Luis dice:** "Yo la forma de trabajar normalmente es que tengo una carpeta que es la carpeta proyectos"
- **Termina en:** "…buscando en rutas que ya le he pedido antes buscar y cosas de esas"
- **Qué se ve:** el explorador de carpetas y el visor con la lista de sesiones ("331 sesiones cargadas").
- **Capturas:** `01`–`06`
- **Destino:** **Video 05 · Sección 1** → audio `v05-seccion01-casos-reales-no-demos.m4a`
- **Reutilizar también en:** **Video 06 · Sección 1** (apertura) → audio `v06-seccion01` (pendiente de grabar). Corta el clip una sola vez y úsalo en ambos.

### Bloque 3 · Caso de la incidencia en PDF
- **Minuto estimado:** ~4 – 12
- **Empieza:** "Vale, pues a mí me pasaron un documento donde yo tenía esto"
- **Termina:** "…Con lo cual ya quedan sin puntos alineados y demás"
- **Qué se ve:** el PDF de la incidencia en el navegador, el documento generado, las imágenes extraídas, la sesión en el visor con el desglose, causa, solución y resultados.
- **Capturas:** `07`–`28`
- **Destino:** **Video 05 · Sección 2 (Caso 1)** → audio `v05-seccion02-caso01-la-incidencia-que-llego-en-pdf.m4a`
- **Nota:** es el corazón del Video 05 — el tramo con más tiempo en pantalla.
- **Reutilizar:** las capturas `27`/`28` (resultados) sirven también para el **cierre del Video 05 (Sección 5)** → audio `v05-seccion05-cierre.m4a`.

### Bloque 4 · Comentario del hackathon
- **Qué se ve:** captura `29` (hackathon).
- **Destino: DESCARTAR.**

### Bloque 5 · Bug del radio button
- **Minuto estimado:** ~12 – 15
- **Empieza:** "Este, por ejemplo, problema de un radio button"
- **Termina:** "…hizo el cambio y funcionó perfectamente"
- **Qué se ve:** la sesión "fix radiobutton state reset" en el visor (incidencia02): el análisis de GitHub Copilot y su respuesta.
- **Capturas:** `30`–`34` (las de `incidencia02`)
- **Destino:** **Video 06 · Sección 2 (Bug 1)** → audio `v06-seccion02-bug01-el-radio-button-que-se-reseteaba.m4a`

### Bloque 6 · Caso GAN: del Analizador de Logs BE a la operativa generada
- **Minuto estimado:** ~15 – 20 · **ancla verificada: contador 19:22 en la vista de Gantt**
- **Empieza:** "Es decir, mira, yo hace tiempo hice una aplicación que es esta"
- **Termina:** "se puede si le das el contexto suficiente para que sepa cómo hacerlo"
- **Qué se ve, en este orden:**
  1. La app de Windows "Analizador de Logs BE — Parseador COBOL" (la original, con el diálogo de abrir logs `.BE.log`).
  2. La carpeta y la sesión "genera un backend", incluido el momento donde le puso el contexto (los 30–40 ejemplos).
  3. La vista de Gantt.
  4. El resultado abierto en Visual Studio: solución `SF.Tool.Gestion.FE.AnalizarLogsBE`, pestaña `Operativa.xp` con el diagrama de flujo de la operativa GAN.
- **Capturas:** `35`–`48`
- **Destino:** **Video 05 · Sección 3 (Caso 2)** → audio `v05-seccion03-caso02-una-operativa-gan-completa-generada-con-contexto.m4a`
- **Textos en pantalla:** "30–40 ejemplos como contexto → operativa GAN completa" (sobre el momento del contexto) y "Solo 2 ajustes manuales" (sobre el resultado en Visual Studio).

### Bloque 7 · Bug del combo/situación (debug)
- **Minuto estimado:** ~20 – 24 · **ancla verificada: contador 21:18 en el portal**
- **Empieza:** "Vale, mira aquí el tema del debug, que esto fue el del otro día"
- **Termina:** "…si la situación ya viene de dos, se mantenga y no se recalcule…"
- **Qué se ve, en este orden:**
  1. La sesión "Debug Situacion Value Change" en el visor (tarjeta y detalle, prompt de "cbsituacion con valor 2… se transforma la situacion en Iniciada").
  2. El portal de Catalana (`catalanaaplicaciones.gco.global`), siniestro 41718802, campo "Situación: INICIADA" — el síntoma en vivo.
  3. De vuelta al visor: identifica el problema, revisión y solución.
- **Capturas:** `34` (la de `incidencia03`) y `49`–`57`
- **Destino:** **Video 06 · Sección 3 (Bug 2)** → audio `v06-seccion03-bug02-el-combo-que-se-recalculaba-al-grabar.m4a`
- **Reutilizar:** las capturas `56`/`57` (solución) sirven también para el **cierre del Video 06 (Sección 4)** → audio `v06-seccion04-cierre.m4a`.

### Bloque 8 · Charla de modelos y créditos
- **Minuto estimado:** ~24 – 27
- **Empieza:** "¿Con qué modelo hiciste?…"
- **Termina:** "…no está mal una buena sesión"
- **Destino: DESCARTAR.**

### Bloque 9 · Caso Equifax (servicio externo)
- **Minuto estimado:** ~26 – 32 · **ancla verificada: contador 28:41**
- **Empieza:** "Bueno, esta fue muy buena la de Equifax"
- **Termina:** "Este cambio está en producción y funciona todo perfectamente"
- **Qué se ve:** la sesión del backend Equifax en el visor: los backends, el filtrado, el ejemplo encontrado y el desarrollo completo del caso.
- **Capturas:** `58`–`76`
- **Destino:** **Video 05 · Sección 4 (Caso 3)** → audio `v05-seccion04-caso03-un-backend-con-servicio-externo.m4a`

### Bloque 10 · Cierre de la reunión + caso AUT85S01
- **Qué se ve:** el final de la llamada y la sesión "review paso datos error aut85s01".
- **Capturas:** `77`–`84`
- **Destino: DESCARTAR** (el caso AUT85S01 no tiene narración suficiente).

### Bloque 11 · MCP modificados y herramienta del hackathon de Óscar
- **Qué se ve:** bloque final de la grabación, tras "por ponerte un ejemplo, yo ya he modificado…".
- **Destino: DESCARTAR.**
- **Descartar también** el comentario del cambio de codificación/acentos ("me has cambiado la codifica…"), esté donde esté.

---

## Método de trabajo sugerido

1. **Primera pasada — cortar sin editar:** recorre la grabación de inicio a fin y corta un clip por bloque (son 6 clips útiles: bloques 2, 3, 5, 6, 7 y 9). No apliques aún difuminados ni textos.
2. **Nombra cada clip con su destino**, así nunca se pierde a dónde va:
   ```
   clip_v05-s01_visor-general.mp4
   clip_v05-s02_incidencia-pdf.mp4
   clip_v06-s02_radio-button.mp4
   clip_v05-s03_gan.mp4
   clip_v06-s03_combo-situacion.mp4
   clip_v05-s04_equifax.mp4
   ```
3. **Arma cada video por separado** colocando los clips bajo su audio:
   - **Video 05:** s01 → s02 → s03 → s04 → s05 (cierre reutiliza plano de resultados `27`/`28`).
   - **Video 06:** s01 (reutiliza el clip del visor general) → s02 → s03 → s04 (cierre reutiliza `56`/`57`).
4. **Al final, difuminados** con la lista del `mapa-de-edicion.md` (sección "Recordatorio de difuminado").

## Si te pierdes en un fragmento

Mándame una imagen del momento y dime **qué dice Luis en ese instante** (aunque sea aproximado). Con la frase ubico el bloque exacto en la transcripción (`transcripcion_grabacion-casos-de-uso-copilot.md`) — las imágenes solas a veces se repiten entre casos (el visor se ve parecido en todos), pero las frases no.
