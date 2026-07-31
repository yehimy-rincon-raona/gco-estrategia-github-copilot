# Optimización de tokens
Cómo evitar gastar de más, cómo elegir modelo, cómo manejar contexto y qué hacer cuando Copilot se queda sin tokens o responde mal**.

---

# 1. La idea base: los tokens son el “recurso” que se consume

Nibaldo explica que todos los modelos trabajan con tokens y lo simplifica así: un token puede ser una palabra corta o una palabra larga dividida en trozos. Lo importante no es aprender la definición técnica, sino entender que **las entradas, el contexto y las respuestas consumen tokens**. En una sesión dice que los modelos generan la salida en tokens, la devuelven troceada y luego se muestra en pantalla. 

También aclara que cuando se habla de modelos premium, no significa que al developer le cobren en nómina o le pidan tarjeta de crédito, sino que cada usuario tiene una **bolsa o límite de tokens asignado** para usar ciertos modelos. 

**Idea textual de Nibaldo:**

> “No es que les cobren a ustedes (…) ustedes tienen asignado un conjunto de tokens.”

---

# 2. Modelos estándar vs modelos premium

Este es uno de los puntos más repetidos.

Nibaldo explica que hay modelos estándar y modelos premium. Los estándar aparecen con indicadores como **0x**, y los premium pueden aparecer con multiplicadores como **1x o 3x**. La lógica que transmite es:

| Tipo de modelo        | Qué dice Nibaldo                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------- |
| **Estándar / 0x**     | No consume tokens adicionales de la bolsa premium. Sirve para tareas genéricas o menos profundas. |
| **Premium / 1x / 3x** | Consume la bolsa de tokens. Cuanto mayor el multiplicador, mayor consumo.                         |
| **Modelos grandes**   | Pueden dar respuestas más robustas, pero consumen más recursos y tokens.                          |

En G4M Sesión 1 lo explica con mucha claridad: los modelos estándar como GPT 4.1 aparecen con **0x**, mientras que modelos como Claude Opus 4.6 aparecen como premium, con mayor consumo porque usan más recursos y más tokens. 

En G2M Sesión 2 lo resume así: los modelos estándar sirven para tareas más genéricas o que no requieren análisis profundo; si te quedas sin tokens, puedes cambiar de modelo, y la bolsa se renueva el primer día de cada mes. 

**Idea textual de Nibaldo:**

> “Si te quedas sin tokens, pues básicamente puedes cambiar de modelo.”

---

# 3. No usar modelos premium para todo

Esta es probablemente la recomendación más accionable.

Nibaldo advierte que usar un modelo premium para todas las tareas hace que el límite se consuma rápido. En G3M Sesión 1 dice que los modelos que “razonan” dan más vueltas, generan salidas más extensas y consumen más tokens. Luego remata con una advertencia fuerte: si se usa un modelo premium para todas las tareas, en pocos días se puede agotar la bolsa de tokens. 

**Idea textual de Nibaldo:**

> “Si tú ocupas un modelo Premium para todas tus tareas siempre, yo te aseguro que en dos días te vas a quedar sin tokens.”

La recomendación implícita es:
**modelo premium solo cuando la tarea lo justifica.**

---

# 4. Elegir el modelo según la tarea

Nibaldo no plantea que haya “un modelo mejor para todo”. Lo que dice es que **las respuestas cambian según el modelo** y que conviene probarlos.

En G2M Sesión 1 explica que, para una tarea robusta, importante o delicada, probablemente usaría un modelo que razone más, que dé más vueltas a la idea y sea más preciso. Pero para generar documentación, por ejemplo, quizá usaría una tarea/modelo más sencillo. 

En G5M Sesión 1 lo baja aún más: los modelos con mayor razonamiento son para tareas más complejas, mientras que los modelos estándar son para tareas cotidianas y recurrentes. 

**Traducción práctica para GCO:**

| Tarea                                   | Modelo sugerido según la lógica de Nibaldo |
| --------------------------------------- | ------------------------------------------ |
| Explicar un error simple                | Estándar                                   |
| Generar documentación simple            | Estándar                                   |
| Pedir un resumen o explicación puntual  | Estándar                                   |
| Analizar un bug complejo                | Premium, si el estándar no basta           |
| Refactor delicado en COBOL / DB2 / .NET | Premium                                    |
| Análisis de impacto con varios archivos | Premium o modelo con más contexto          |
| Tarea larga con muchos programas        | Dividir antes de subir modelo              |

---

# 5. El “modo auto” como ayuda para escoger modelo

Nibaldo menciona que en Visual Studio Code existe un **modo auto** que puede escoger el modelo según la dificultad de la tarea. Lo presenta como algo interesante porque evita que el usuario tenga que decidir siempre manualmente. 

**Idea textual de Nibaldo:**

> “El modo auto lo que hace es escoger el modelo de acuerdo al nivel de dificultad de la tarea que tú le estás dando.”

Esto es muy útil como contenido para Teams, pero con cuidado: no venderlo como magia, sino como una ayuda para no tirar siempre de modelos caros.

---

# 6. Controlar el nivel de razonamiento

En la terminal, Nibaldo muestra que no solo se puede cambiar el modelo, sino también el **nivel de razonamiento**: low, medium, high, extra high. Explica que, cuanto más alto el razonamiento, más vueltas le da el modelo, más valida y más tokens consume. 

También dice que si la tarea no requiere tanto razonamiento, conviene bajar ese nivel. En G5M Sesión 1 pone un ejemplo: si le está preguntando algo pequeño o “tonterías”, deja el razonamiento en low porque no necesita una respuesta hiper elaborada. 

**Idea clave:**
No solo importa **qué modelo usas**, también importa **cuánto razonamiento le pides**.

---

# 7. La ventana de contexto también consume y se llena

Nibaldo explica la ventana de contexto con la metáfora del “cajón”: todo lo que se mete ahí es lo que el modelo puede usar para responder. En ese cajón entran:

* el prompt del usuario;
* el historial de conversación;
* archivos abiertos;
* código seleccionado;
* archivos referenciados;
* instrucciones custom;
* pestañas abiertas;
* solución o workspace, si se referencia.

En G4M Sesión 1 dice que si tienes un proyecto con 100 pestañas abiertas, esas pestañas pasan al “cajón”; si tienes una solución con 10 proyectos abiertos, también pasan; el historial de conversación también entra. 

**Esto es central para optimización de tokens:**
cuanto más contexto innecesario le das, más llena la ventana y más costosa/confusa se vuelve la interacción.

---

# 8. Referenciar solo lo necesario para reducir tokens

Este es el punto más útil para contenido inmediato.

En G5M Sesión 2, Nibaldo explica que se pueden referenciar archivos, clases, métodos, selección de código o incluso la solución completa. Pero la recomendación no es “mete todo”, sino **define mejor el contexto**. Dice que con referencias cruzadas se puede limitar la cantidad de tokens a consumir, hacer una búsqueda más inteligente y más rápida, y enfocar la solución en temas específicos. 

**Idea textual de Nibaldo:**

> “Con esto yo puedo limitar la cantidad de tokens a consumir. Puedo hacer una búsqueda más inteligente y más rápida. Puedo hacer que la solución se enfoque.”

Esta frase es oro para Teams.

**Mensaje práctico:**
No preguntes:

> “Revísame toda la solución.”

Mejor pregunta:

> “Revisa este método `#selection` y compáralo con este archivo `#file` para detectar por qué falla el SQLCODE.”

---

# 9. Usar `#file`, selección, clase o método antes que workspace completo

Nibaldo muestra varias formas de dar contexto:

* seleccionar código;
* añadir documento;
* añadir archivo;
* añadir clase;
* añadir método;
* añadir solución completa;
* usar `#` para referenciar archivos;
* usar `@workspace` cuando no sabes dónde está el problema.

La lógica es: **empieza acotado; usa workspace cuando realmente no sabes dónde está el problema**. En G5M Sesión 2 explica que `@workspace` sirve cuando sabes que tienes un problema, pero no sabes dónde está. 

**Lectura práctica:**
Para optimizar tokens, `@workspace` no debería ser el primer recurso para todo. Es potente, pero más amplio.

---

# 10. Abrir un hilo nuevo cuando el contexto se llena

Nibaldo lo repite varias veces. Cuando el historial se acumula, la ventana de contexto se llena. Si el modelo empieza a responder mal o “se pone tonto”, la solución es abrir un nuevo hilo/conversación.

En G3M Sesión 1 dice: si el histórico se acumula, la ventana de contexto se llena; cuando eso pasa y el modelo se equivoca, la solución es abrir una nueva conversación o un nuevo hilo en GitHub Copilot. 

En G6M Sesión 1 lo vuelve a decir: si se llena la ventana de contexto, abres un hilo nuevo y continúas. Si te quedas sin tokens, probablemente estás trabajando con un modelo premium y la solución es pasar a un modelo estándar. 

**Idea textual de Nibaldo:**

> “Solución: abre una nueva conversación.”
> “En GitHub Copilot, solución: abre un nuevo hilo y ya está.”

---

# 11. La autocompactación ayuda, pero puede hacer que el modelo pierda memoria

Nibaldo explica que cuando la ventana de contexto se llena, algunos modelos hacen **autocompactación**: comprimen el contexto para liberar espacio. Dice que esto sirve, pero tiene un coste: el modelo puede perder memoria de lo anterior y empezar a responder peor.

En G6M Sesión 1 dice que la autocompactación “aprieta” la ventana de contexto para hacer espacio, pero lo negativo es que se pierde memoria de lo que se estaba usando. Si el modelo empieza a contestar mal, toca abrir una nueva ventana o actualizar el contexto. 

En G5M Sesión 1 lo explica parecido: cuando el contexto se compacta, se tiende a perder información y el modelo recupera solo una parte de lo que conoció; por eso recomienda abrir un hilo nuevo. 

**Implicación para Teams:**
Cuando Copilot empieza a mezclar cosas, no siempre es “que Copilot sea malo”; puede ser que el hilo ya esté saturado.

---

# 12. Dividir tareas grandes para no llenar contexto ni agotar tokens

Hay un caso muy claro en G6M Sesión 2. Se habla de una tarea con muchos programas, donde la estrategia fue analizar uno por uno, limpiar el contexto al terminar y no dejarlo en el historial. Con eso la tarea progresó sin quedarse sin tokens. 

También se menciona que si le pides mirar 200 archivos, el modelo intenta trabajar hasta terminar, pero en ese proceso la ventana de contexto se llena y se comprime repetidamente. 

**Mensaje práctico:**
Para COBOL/mainframe esto es muy aplicable:

> No le pidas analizar 20 programas de golpe. Pídele analizar uno, cerrar conclusión, limpiar contexto y seguir con el siguiente.

---

# 13. Ver indicadores de contexto disponible

Nibaldo muestra que algunas interfaces tienen indicadores visuales del contexto. En G6M Sesión 1 habla de un icono que muestra cómo se va llenando la ventana de contexto y pone un ejemplo: 168.000 tokens disponibles, 23.000 usados, 14% ocupado. Dice que en Visual Studio no recuerda si aparece igual, pero que puede haber un icono similar. 

**Idea útil:**
El developer debería acostumbrarse a mirar si el contexto se está llenando, sobre todo en tareas largas.

---

# 14. El tamaño de la ventana de contexto depende del modelo

Nibaldo insiste en que no todos los modelos tienen la misma ventana de contexto. Algunos tienen ventanas muy grandes, incluso de millones de tokens, pero eso no significa que debamos abusar. En G4M Sesión 1 muestra `models.dev` para comparar modelos, coste por millón de tokens y límite de contexto. Explica que modelos como Opus tienen una ventana de contexto grande, pero también un coste mayor. 

En G6M Sesión 1 también dice que modelos más baratos tienen ventanas de contexto más pequeñas, mientras que modelos más caros tienen ventanas de contexto enormes. 

**Traducción práctica:**
Si el archivo es muy extenso o el caso requiere mucho contexto, quizá necesitas un modelo más grande. Pero si la tarea es simple, no tiene sentido pagar ese coste.

---

# 15. Saber si se puede consultar consumo antes o después

En G2M Sesión 1, Jorge pregunta si se puede saber cuántos tokens lleva consumidos o cuánto cuesta una consulta. Nibaldo responde con cautela:

* sobre saber cuánto costó una consulta: dice que “te diría que sí”, pero no está del todo seguro;
* sobre saberlo antes de ejecutar el prompt: no hay una forma directa;
* sobre saber cuántos tokens quedan: dice que se puede desde administración, pero no necesariamente desde Visual Studio para el usuario final. 

Luego aclara que antes de lanzar una consulta no puedes saber exactamente “vas a consultar 10.000 tokens”; puedes inferirlo por extensión, volumen y complejidad, pero no verlo como cálculo previo exacto. 

**Idea importante:**
No hay que depender de “ver el coste exacto antes”; hay que aprender a estimarlo con buenas prácticas: contexto acotado, modelo adecuado, hilo limpio.

---

# 16. La bolsa de tokens se renueva mensualmente

En G2M Sesión 2, Nibaldo menciona que la bolsa de tokens se renueva el primer día de cada mes. Esto aparece como parte de la explicación de qué hacer si se agotan tokens: cambiar a modelo estándar y esperar la renovación mensual para volver a usar premium. 

**Idea textual:**

> “Cada primer día de cada mes se te renueva esta bolsa de tokens.”

---

# 17. Si el modelo no puede responder, puede ser por contexto insuficiente o demasiado acotado

Hay una precisión importante: no siempre optimizar tokens significa usar el modelo más pequeño. En G5M Sesión 3, Nibaldo dice que GPT 4.1 puede estar bien para una tarea no compleja, pero si el archivo es muy extenso, ese modelo quizá no puede responder porque tiene una ventana de contexto acotada; en ese caso se necesita un modelo más grande. 

Esto equilibra el mensaje:
**ahorrar tokens no es usar siempre lo mínimo; es usar lo adecuado.**

---

# 18. Prompt files también ayudan indirectamente a controlar el uso

Aunque no lo presenta como “ahorro de tokens” directo, Nibaldo explica que los prompts custom permiten reutilizar instrucciones en vez de escribir lo mismo 10, 20 o 30 veces. En G5M Sesión 2 dice que si todos los días haces análisis funcional y siempre pides lo mismo, puedes tenerlo contenido en un prompt. 

Esto no reduce necesariamente tokens por sí solo, pero sí reduce ruido, inconsistencias y prompts mal escritos. Además, permite definir mejor:

* descripción;
* modo;
* modelo;
* tools.

En G3M Sesión 3 muestra que un prompt file puede definir el modelo y las herramientas que va a usar. 

**Lectura:**
Los prompt files pueden ayudar a que la consulta sea más controlada y repetible, pero no conviene venderlos como ahorro directo de tokens sin matizar.

---

# 19. Skills no aparecen como optimización directa de tokens

En lo encontrado, **no aparece una frase clara donde Nibaldo diga “los Skills optimizan tokens”**.

Lo que sí aparece es que Skills forma parte de una capa avanzada junto con agentes, MCP y prompts. Pero para “optimización de tokens”, lo explícito está más relacionado con:

* elegir modelo;
* controlar razonamiento;
* acotar contexto;
* abrir hilos nuevos;
* limpiar historial;
* dividir tareas grandes;
* no usar premium para todo.

Por tanto, si se va a publicar en Teams, yo no diría:

> “Usa Skills para ahorrar tokens.”

Diría algo más correcto:

> “Más adelante, Skills puede ayudar a encapsular capacidades específicas para que el agente trabaje con instrucciones y fuentes más acotadas. Pero la optimización inmediata está en elegir bien el modelo y pasarle solo el contexto necesario.”

---

# Conclusión: qué está proponiendo realmente Nibaldo

La recomendación de Nibaldo no es “gastar menos por gastar menos”. Es:

> **Planificar cómo se usa Copilot: modelo adecuado, contexto justo, hilos limpios y tareas divididas.**

En lenguaje para developers de GCO:

1. **No uses premium para todo.**
   Para explicar un error o documentar algo simple, empieza con estándar.

2. **No metas toda la solución si solo necesitas un archivo.**
   Usa `#file`, selección, clase o método.

3. **Si Copilot empieza a responder raro, abre un hilo nuevo.**
   El contexto se llena y se compacta.

4. **Divide tareas grandes.**
   Para 20 programas COBOL, uno por uno. No todos al mismo hilo.

5. **Sube de modelo solo cuando la tarea lo necesite.**
   Refactor delicado, análisis de impacto, lógica compleja o contexto muy grande.

---

# Cómo lo convertiría en contenido para Teams

## Post 1 — Fase 1

```markdown
💡 Tip Copilot: no gastes el modelo premium para todo

En Copilot no todos los modelos cuestan lo mismo en tokens.

Para tareas simples —explicar un error, documentar un método, resumir una consulta— empieza con un modelo estándar.

Reserva los modelos premium para tareas más delicadas: análisis de impacto, refactor complejo, lógica COBOL/DB2 difícil o cambios que necesitan más razonamiento.

La idea no es usar “el modelo más potente”, sino el modelo adecuado para la tarea.

👉 La próxima vez que abras Copilot, mira qué modelo tienes seleccionado antes de lanzar la consulta.
```

## Post 2 — Fase 2

```markdown
🎯 Tip Copilot: menos contexto, mejor respuesta

Copilot no necesita ver todo el proyecto para ayudarte.

Si sabes dónde está el problema, referencia solo lo necesario:
- el archivo concreto;
- el método;
- la selección de código;
- el error o log.

Así reduces tokens, haces la búsqueda más rápida y ayudas a que la respuesta vaya al punto.

Ejemplo:
“No revises toda la solución. Revisa este método y este SQLCODE.”

👉 Antes de preguntar: ¿Copilot necesita todo el contexto o solo esta parte?
```

## Post 3 — Fase 2

```markdown
🧹 Tip Copilot: cuando se vuelve confuso, abre un hilo nuevo

Si después de muchas preguntas Copilot empieza a mezclar cosas o responder raro, puede que el contexto esté lleno.

No pasa nada.

Abre un nuevo hilo y vuelve a pasarle solo lo necesario: archivo, método, log o selección.

Es como limpiar la mesa antes de seguir trabajando.

👉 Para tareas largas, mejor varios hilos pequeños que uno gigante.
```
