# Mapa de edición — Videos 05 y 06: Casos de uso reales

> Guía para el editor: qué fragmento de la grabación de la entrevista (Víctor Gisbert → Luis De la Fuente, 22 jun 2026, ~29+ min)
> va debajo de cada sección de voz en off de las dos píldoras:
> - **Video 05** → `pill_para-grabacion_casos-de-uso-reales.md` (2:30 – 3:00 min)
> - **Video 06** → `pill_para-grabacion_casos-de-uso-debugging.md` (1:45 – 2:15 min)
>
> Archivo de video fuente: `[No hay información — confirmar con Yehimy]`

## Nota sobre los tiempos

La transcripción NO trae timecodes. Las únicas referencias verificables son el **contador del recuadro de la reunión** visible en algunas capturas:
- `44_…vista-de-gannt` (caso GAN) → contador **19:22**
- `49_portal-catalana…` (caso combos) → contador **21:18**
- `61_…equifax-encontrado-el-ejemplo` (caso servicio externo) → contador **28:41**

Los demás minutos de la tabla son **estimados** a partir de esas anclas. La forma segura de ubicar cada fragmento es por la **frase de inicio y de fin** de Luis (transcripción literal en `transcripcion_grabacion-casos-de-uso-copilot.md`).

> **Ojo con la transcripción literal:** el transcriptor automático escribió mal varios términos técnicos — "Kifax"/"Xifas" = **Equifax** (verificado en las capturas: carpeta `EQUIFAX` y ruta `SGE.Servicios.EQUIFAX`), "Cobble" = **COBOL**, "Gun" = **GAN**, "debus" = **debug**. En este mapa las frases ancla usan la escritura correcta, que es lo que se oye en el audio.

**Importante:** el audio original NO se usa en ninguna de las dos píldoras — es una conversación. Los fragmentos son solo soporte visual de la voz en off.

## Tabla de correspondencia — Video 05

| Voz en off (píldora) | Frase donde EMPIEZA | Frase donde TERMINA | Imágenes ancla | Minuto estimado |
|---|---|---|---|---|
| Sec 1 · Casos reales, no demos | "Yo la forma de trabajar normalmente es que tengo una carpeta que es la carpeta proyectos" | "…buscando en rutas que ya le he pedido antes buscar y cosas de esas" | `01`–`06` | ~2–4 |
| Sec 2 · Caso incidencia PDF | "Vale, pues a mí me pasaron un documento donde yo tenía esto" | "…Con lo cual ya quedan sin puntos alineados y demás" | `07`–`28` | ~4–12 |
| Sec 3 · Caso GAN generado | "Es decir, mira, yo hace tiempo hice una aplicación que es esta" | "se puede si le das el contexto suficiente para que sepa cómo hacerlo" | `35`–`48` | ~15–20 (ancla 19:22) |
| Sec 4 · Caso servicio externo | "Bueno, esta fue muy buena la de Equifax" | "Este cambio está en producción y funciona todo perfectamente" | `58`–`76` | ~26–32 (ancla 28:41) |
| Sec 5 · Cierre | (sin fragmento propio — reutilizar plano de resultados o cierre de marca) | — | `27`/`28` | — |

> Referencia de contenido para la Sec 5 (no se usa el audio): la frase de Luis "No, tiempo, tiempo, tiempo y sobre todo más de contexto… aunque la aplicación no la conozcas, te da un contexto".

## Tabla de correspondencia — Video 06

| Voz en off (píldora) | Frase donde EMPIEZA | Frase donde TERMINA | Imágenes ancla | Minuto estimado |
|---|---|---|---|---|
| Sec 1 · Apertura | (plano general del visor, reutilizar de Sec 1 del Video 05) | — | `02`–`06` | — |
| Sec 2 · Bug radio button | "Este, por ejemplo, problema de un radio button" | "…hizo el cambio y funcionó perfectamente" | `30`–`34` (incidencia02) | ~12–15 |
| Sec 3 · Bug combo/situación | "Vale, mira aquí el tema del debug, que esto fue el del otro día" | "…si la situación ya viene de dos, se mantenga y no se recalcule…" | `34` (incidencia03) · `49`–`57` | ~20–24 (ancla 21:18) |
| Sec 4 · Cierre | (sin fragmento propio) | — | `56`/`57` | — |

## Fragmentos que se descartan por completo (ambos videos)

- Intro de la llamada y demostración del visor de sesiones como herramienta (comienzo de la grabación).
- Charla de **modelos y créditos** — desde "¿Con qué modelo hiciste?…" hasta "…no está mal una buena sesión" (~min 24–27 estimado).
- **MCP modificados en local** por Luis y la **herramienta del hackathon** de Óscar — bloque final de la grabación (tras "por ponerte un ejemplo, yo ya he modificado…").
- Comentario del **cambio de codificación / acentos rotos** ("me has cambiado la codifica…").
- Capturas `29` (hackathon) y `77`–`84` (cierre de la reunión + "incidencia05 AUT85S01", caso sin narración suficiente).

## Recordatorio de difuminado (de las pills)

Difuminar SIEMPRE, en ambos videos:
- Recuadro de la reunión de Teams (cámara de Luis y miniaturas) — presente en casi toda la grabación.
- Nombre de perfil "Luis Marco, GCO" en el explorador.
- IDs de sesión del visor y rutas `C:\Proyectos\…`, `C:\VSNET\…` con proyectos reales.
- URL de producción `catalanadaplicaciones.gco.global` y números reales de siniestro/operativa.
- Identificador y datos del ticket Jira real de la incidencia (`SOLDES-22195`, "Incidencia en gestión operativa reapertura") visibles en el PDF abierto en el navegador.
- Contenido de los JSON del servicio externo (datos de personas) y el nombre del servicio en rutas.
- Nombres reales de COBOLs/módulos (`STAR…`) en las tool calls.
- Rótulo "Gestor Sesiones Copilot" cuando quede protagónico en el encuadre.
