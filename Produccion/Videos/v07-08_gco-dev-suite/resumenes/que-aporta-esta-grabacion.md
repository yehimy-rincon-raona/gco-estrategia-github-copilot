# Qué aporta esta grabación

> Lectura de proyecto sobre la grabación de la Copilot Dev Suite. Creado el 28 agosto 2026.
> **No es un resumen del contenido** — para eso están `notebooklm.md` y el bloque final de la transcripción. Esto responde a otra pregunta: *qué nos sirve, qué confirma, qué contradice y qué sigue faltando*.
> Fuente: `../transcripciones/transcripcion_video_gco-dev-suite.md` · Original crudo: `../transcripciones/transcripcion_video_gco-dev-suite.bak.md`

---

## En una frase

La grabación es prácticamente el **Vídeo 07 entero** — qué es GitHub Copilot, qué es la suite, cómo comprobar que no está, cómo instalarla, cómo configurar credenciales y una prueba real contra Jira — pero **la mitad de su metraje es instalación y credenciales, que es justo lo que ya hace el Vídeo 04**, y **no contiene nada del Vídeo 08**.

---

## Lo que aporta y no teníamos en ninguna fuente del proyecto

### La ventana de contexto en porcentaje

Es un añadido propio de la suite y él lo presenta como una decisión pensada para quien la usa: *"así no tienes que usar comandos ni nada por el estilo, siempre podrás ver qué contexto llevas"*. No aparece en el material del equipo de Nibaldo del 6 de agosto ni en ninguna publicación de la serie.

**Por qué importa:** es un gancho de contenido corto y conecta de frente con Pub 4, que trata de gestionar lo que dura una conversación. Es también de lo poco que se ve sin instalar nada más.

### El antes y el después, verificable en pantalla

`mcp show` lista los conectores configurados: **sin la suite hay uno, con ella cinco o seis**. Y las skills disponibles pasan de dos genéricas a decenas.

**Por qué importa:** es exactamente lo que pidió Óscar el 25 de agosto — algo concreto que la persona pueda replicar por su cuenta, no una explicación conceptual.

### Dónde vive la guía, y qué pasos saltarse

La guía está en la unidad común `O`, en la carpeta de la Copilot Dev Suite, con el nombre "Guía GCO Dev Suite". Y un detalle práctico que ahorra confusión: **los pasos 1 al 4 son solo para instalar desde el ZIP** — quien instale desde el portal de empresa se los salta y va directo al paso 5.

### Un obstáculo real de adopción: los permisos de Confluence

Él no tiene permisos para crear el PAT de Confluence, y dice explícitamente que *"a mucha gente también le pasa"*. La suite funciona igual: se deja el campo vacío y se continúa.

**Por qué importa:** es una fricción concreta que el material puede anticipar en una línea, en vez de dejar que cada persona se estrelle contra ella y concluya que la instalación le falló.

### El principio de "nada sin aprobación", ocurriendo en pantalla

En la prueba con Jira, el asistente construye la consulta y **se detiene a pedir confirmación antes de enviarla**. Es el argumento entero de Pub 19 sucediendo en un caso trivial, sin que nadie lo haya escenificado.

### Cómo se comporta cuando no encuentra lo que pides

Baja de nivel y busca lo relacionado. Él lo resume como *"siempre va a encontrar algo"*.

**Por qué importa:** es a la vez una expectativa útil y una advertencia. Sirve para calibrar por qué conviene revisar lo que devuelve.

---

## Lo que confirma de lo que ya teníamos

| Lo que dice la grabación | Dónde ya estaba |
|---|---|
| El producto se llama **Copilot Dev Suite**, de principio a fin | Guion del Vídeo 04, línea 24 — resuelve el bloqueante de los dos nombres |
| Es **una capa encima de GitHub Copilot, no otra aplicación**: *"no tienes que entrar a una cosa al Copilot y a la otra"* | Encuadre de Pub 12 |
| **Autodescubrimiento**: se pide en lenguaje natural y Copilot decide si toca usar una skill. *"A veces es una pena no acordarnos de que las tenemos"* | Sostiene el "sin comandos que aprenderse" del panel 2 de Pub 18 |
| Autoría conjunta **Pasiona + Raona** | Material del 6 ago |
| Requisitos: GitHub Copilot instalado con Node, y el login hecho | No estaba explícito en el material — aquí queda claro |

---

## Lo que contradice al material de origen

| Dato | Grabación | Material del 6 ago *(base de Pub 12-19)* |
|---|---|---|
| Agentes | **4** | 3 |
| Skills | **39** | 32 |
| Conectores | *"cinco o seis"*: Jira, Elastic, Confluence, **Kibana**, DB2, **SQL** | 5: Jira, Confluence, Elastic, DB2, **navegador** |

> **Esto no es un detalle.** Las cifras 3, 32 y 5 están impresas en las piezas gráficas de Pub 14, 16, 18 y 19, y la lista de cinco conectores es el contenido entero del tríptico de Pub 16. O la suite creció entre agosto y ahora, o una de las dos fuentes está desactualizada. **Hasta que Nibaldo lo aclare, ninguna pieza nueva debería llevar estas cifras.**

Los dos resúmenes de la grabación — el de NotebookLM y la transcripción — coinciden en las tres discrepancias, así que no es un error de transcripción.

---

## Contraste con el resumen de NotebookLM

`notebooklm.md` resume la misma grabación. Comparados, uno resuelve huecos del otro — y aparece una diferencia que conviene conocer antes de usarlo como fuente.

### Resuelve dos marcas `[?]` de la transcripción

| Marca en la transcripción | Lo que dice NotebookLM | Lectura |
|---|---|---|
| `un squirrer` | *"el usuario y contraseña de conexión habituales de **Squirrel**"* | Squirrel SQL es un cliente habitual de DB2 — encaja con el contexto y con la mención de SQL |
| `el girasch` | *"el MCP de Jira (**`jira_search`**)"* | Coherente con lo que dice el hablante justo después: es la forma interna de Jira para buscar |

> **Las marcas `[?]` de la transcripción se dejan como están.** Ese documento registra lo que se oye, y su registro de correcciones solo admite lo que se sostiene con el propio texto. La resolución queda anotada aquí, que es donde corresponde.

### Afirma cosas que la grabación no muestra

- **"Recupera con éxito las incidencias pendientes asignadas al usuario."** En la grabación **eso no llega a pasar**: él mismo dice que posiblemente no tiene issues asignadas, que la herramienta *"tirará por otras partes"*, y el audio **se corta a mitad de frase** — *"Imagínate que Salvador, pues ahora va a buscar por [...] y me lo va a traer. Vale, pues"*. La consulta se lanza; el resultado no se ve.
- **La ruta exacta `O:\copilot-dev-suite\Guia GCO Dev Suite.html`.** El hablante dice la unidad, la carpeta y el nombre de la guía, pero **no dicta la ruta**. Es una reconstrucción plausible, no un dato oído.
- **"Controle los tokens".** Él habla de la ventana de contexto en porcentaje; no menciona tokens.
- Escribe **"Passiona"**; es **Pasiona**.

> **Consecuencia práctica:** `notebooklm.md` es un buen mapa del procedimiento, pero **no sirve como fuente literal para un guion**. Si una de esas frases pasa a un vídeo, estaríamos afirmando un resultado que la grabación no enseña — y es el tipo de detalle que Óscar detecta. Para citar, la transcripción; para orientarse, el resumen.

---

## Lo que sigue faltando

### Vídeo 07

- **El catálogo de skills a la vista.** Aquí solo se ve el número al cargar; no se ve qué son ni cómo se llaman. Es lo que haría tangible la cifra.
- **Una petición que toque varios sistemas a la vez.** La prueba consulta solo Jira. El relato de la suite — *"una frase en vez de cinco pestañas"* — necesita ver dos o tres conectores respondiendo a una misma pregunta.

### Vídeo 08

**No hay nada.** Ni un agente recibiendo una petición de cambio, devolviendo un plan y deteniéndose a esperar aprobación. Sigue siendo la grabación que hay que pedir, y es la única que no se puede sustituir con material existente.

### Una decisión de reparto

La mitad de esta grabación es instalación y credenciales, que es lo que ya hace el Vídeo 04. Hay que elegir: **o el 07 se queda con el "qué es" y remite al 04**, o se asume que el 04 queda absorbido por el 07.

---

## Para la reunión del martes 1 sep

1. **Las cifras.** ¿4 agentes y 39 skills, o 3 y 32? ¿Kibana y SQL son conectores, o el quinto es el navegador? De la respuesta depende si hay que reexportar piezas ya producidas.
2. **El nombre.** Con esta grabación y el guion del Vídeo 04, basta una confirmación para cerrar el bloqueante abierto desde el 11 de agosto.
3. **El Vídeo 08.** Pedir la grabación del flujo de agentes, con la lista de ocho momentos de `../planteamiento-grabacion_videos-07-08.md`.
4. **El solapamiento con el Vídeo 04.** Decidir el reparto antes de montar nada.
5. **Los permisos de Confluence.** Si le pasa a mucha gente, merece una línea en el material de soporte.
