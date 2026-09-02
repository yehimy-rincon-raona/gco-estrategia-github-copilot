# Vídeo 08 — Temas sobre la mesa
> Para: **Nibaldo, Esteban y Salva** · De: Yehimy Rincón · 1 septiembre 2026
> Serie: gco-dev-suite · Canal de destino: Casos de Uso Reales · Publicaciones que soporta: Pub 18 y Pub 19

---

## Qué es este documento

Un resumen de lo que se ha pedido en las reuniones y de los temas que han salido para el Vídeo 08, ordenados en un solo sitio.

**No dice cómo grabarlo ni qué mostrar.** El conocimiento técnico lo tienen ustedes: qué se enseña, con qué caso y cómo se ve mejor en pantalla lo deciden Nibaldo y su equipo. Esto es solo el contexto para que esa decisión se tome con todo a la vista.

Tampoco está decidido cuántos vídeos son. Si de los temas de abajo salen dos, mejor.

---

## De dónde viene la petición

**Reunión del 18 de agosto.** Óscar propuso un vídeo de instalación de la gco-dev-suite más un ejemplo de uso por componente. Jonatan matizó que el vídeo de instalación mantiene su valor aunque el paso técnico sea simple, porque la gente igual se pierde. Los dos pidieron que el post enlace a la documentación de Confluence, para no tener que editarlo si el proceso cambia.

**Reunión del 25 de agosto.** Óscar puso una condición sobre todo el material: la parte conceptual ya está dada, ahora cada componente necesita **caso de uso concreto, ejemplo y vídeo**. Y el material tiene que ser autoformativo — entendible por quien no hizo la formación, incluidos los que entren en septiembre. Nibaldo estuvo de acuerdo.

**Dónde estamos hoy.** De los tres componentes de la suite, los agentes son el único sin vídeo. La instalación y los conectores están cubiertos en el Vídeo 04, y la grabación que llegó el 28 de agosto cubre casi todo el Vídeo 07. De los agentes no hay material.

---

## Los temas que se han pensado

### 1. Un cambio que toca varias capas, con aprobación de por medio

Del material que compartió el equipo (6 de agosto), Ejemplo 2: *"añade la fecha de baja a la consulta de pólizas"*. Parece un cambio pequeño y toca cinco capas en cascada.

Es el caso que ya está en la infografía de Pub 19, así que el vídeo y la publicación se refuerzan sin duplicarse. Y dentro de este tema hay algo que en las publicaciones se afirma pero nadie ha visto: **el momento en que el agente presenta un plan y espera aprobación antes de tocar nada.**

### 2. Investigar un fallo con varias búsquedas a la vez

Del mismo material, Ejemplo 1: *"¿por qué falla este proceso?"*, y el coordinador reparte la investigación y devuelve una sola respuesta consolidada en vez de tres volcados.

Es el otro comportamiento que define la suite y tampoco está grabado. Si sale, puede ser un vídeo propio.

### 3. El validador señalando algo sin corregirlo

Es el rasgo más difícil de mostrar y el más convincente: la herramienta detectando un problema y diciendo quién debe arreglarlo, en vez de arreglarlo por su cuenta. No creo que se pueda planificar, pero si aparece, vale la pena guardarlo.

### 4. Un caso propio que ustedes elijan

Si en el trabajo del equipo hay un caso más reconocible que los dos del material, ese gana. Ustedes conocen el terreno.

---

## Dos cosas que salieron de la formación, por si sirven

De las transcripciones de las sesiones, dos apuntes que pueden aportar al caso que se elija:

- **Un caso equivalente, dicho por un desarrollador de GCO** (grupo G5M, sesión 3): había movido un campo en un COBOL y pidió extender el cambio *"a todos los que integran la estructura EXEC SQL"*. Es casi el Ejemplo 2, pero en lenguaje de mainframe.
- **El argumento de por qué la suite existe, dicho por un escéptico** (grupo G4M, sesión 1): preguntó qué tablas tenían cierta columna, GitHub Copilot se inventó el nombre de una tabla que no existía, y él lo comprobó. Sin conectores, inventa; con conectores, va a buscar el dato real.

---

## Quién decide qué

| Decisión | Quién |
|---|---|
| Qué tema o temas se graban, y con qué caso | **Nibaldo y su equipo** |
| Cómo se muestra en pantalla | **Nibaldo y su equipo** |
| Cuántos vídeos salen al final | **Nibaldo y su equipo**, según lo que dé el material |
| Guion, voz en off, montaje y piezas gráficas | Yehimy |

Cuando llegue la grabación escribo el guion sobre lo que haya de verdad en pantalla, igual que con el Vídeo 07, y lo paso a revisión antes de montar.

**Una sola petición sobre la grabación:** que quien grabe vaya explicando en voz alta lo que hace y por qué. La voz en off final se genera aparte, así que el audio no tiene que quedar bien — pero de esa explicación sale el guion, y sin ella solo puedo describir lo que se ve, no contarlo.

---

## Cuatro cosas pendientes de respuesta

1. **¿En qué entorno conviene grabar?** En una nota del proyecto aparece que la configuración de MCP y skills funciona en VS Code o en la terminal, pero no de forma nativa en el Visual Studio 2022 que usa GCO. En las dieciséis transcripciones de la formación, Visual Studio se menciona en las dieciséis sesiones. Si el vídeo se graba en otro entorno, conviene decirlo al principio.
2. **¿Cuántos agentes son?** La grabación del 28 de agosto habla de cuatro; el material del 6 de agosto dice tres. Las piezas de Pub 18 y 19 ya están producidas con tres.
3. **La URL de Confluence** con la documentación de la suite. Se pidió el 18 y el 25 de agosto. Va en el post, no en el vídeo.
4. **La numeración.** Confirmar que la gco-dev-suite se lleva el 07 y el 08, y que el vídeo de Primeros Pasos aprobado el 15 de julio pasa a ser el 09.

---

## Referencias

- El caso, ya escrito como publicación: `Produccion/semana-10_fechas-pendiente(pub-18-19)/pub-19_jue-sem10-pendiente/canal-anuncios-tips_pub19.md`
- Quién es cada agente: `.../pub-18_mar-sem10-pendiente/canal-anuncios-tips_pub18.md`
- Material de origen del equipo: `Conocimiento/temas_mes-agosto/información-equipo-raona-gco-devsuite.md`
- Documento previo, más extenso: `../planteamiento-grabacion_videos-07-08.md`
