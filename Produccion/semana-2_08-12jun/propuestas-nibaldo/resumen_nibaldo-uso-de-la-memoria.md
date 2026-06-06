Sí. En las sesiones, cuando Nibaldo habla de **“memoria”**, casi siempre se refiere a la **ventana de contexto** de Copilot: ese “cajón” donde el modelo guarda temporalmente todo lo que necesita para responder en una conversación.

La idea central es esta:

> **Copilot no recuerda todo de forma mágica. Trabaja con lo que tiene dentro de su ventana de contexto. Si ese contexto está mal cargado, demasiado lleno o contaminado, la respuesta empeora.**

---

# 1. La memoria como “cajón” de contexto

Nibaldo usa una metáfora muy clara: la ventana de contexto es como un **cajón** donde se van metiendo cosas. Si el cajón está ordenado, encuentras lo que necesitas. Si está lleno de cables, piezas y objetos mezclados, cuesta encontrar la información correcta.

Dice:

> “La ventana de contexto es como un cajón.”
> “Todo lo que se añade a la ventana del contexto es lo que el modelo sabe.”
>

Y en otra sesión lo repite de forma muy parecida:

> “A mí me gusta que entiendan que la ventana de contexto existe y que es básicamente como este cajoncito de memoria que tiene cada uno de estos modelos.”
> “Todo lo que va pasando con respecto a interacción con el modelo se va añadiendo a su ventana de contexto, se va guardando en este cajoncito de memoria.”
>

**Lectura correcta:** cuando Nibaldo dice “memoria”, no está hablando de una memoria permanente tipo “Copilot se acuerda para siempre”. Está hablando del **contexto disponible dentro de esa conversación / hilo / sesión**.

---

# 2. Qué cosas entran en esa memoria

Nibaldo enumera varias cosas que se añaden a la ventana de contexto. Según él, entran:

* el **system prompt** de GitHub Copilot;
* el **prompt del usuario**;
* el historial de conversación;
* las instrucciones custom, como `copilot-instructions.md`;
* los archivos abiertos;
* las pestañas abiertas;
* el código seleccionado;
* el código adyacente;
* los archivos referenciados;
* herramientas o referencias añadidas al agente.

Lo explica así:

> “Entra el prompt de sistema, el system prompt (…) entran los archivos abiertos en el entorno de desarrollo (…) si yo tengo un proyecto con 100 pestañas abiertas pasan también al cajón. Si yo tengo una solución con 10 proyectos abiertos, pasan al cajón. El historial de conversación pasa al cajón (…) y los archivos de instrucciones personales, los custom instructions también se meten en este cajón.”
>

En G5M Sesión 1 lo resume de forma más ordenada:

> “Todo lo que yo vaya interactuando con el chat se guarda en este cajón.”
> “Todo lo que yo le añada como referencia (…) todas las pestañas que yo tenga abiertas, se guardan dentro de este cajoncito.”
> “Todo lo que yo vaya añadiendo como consultas (…) el prompt del usuario, se guarda en este cajoncito.”
> “Todo lo que yo vaya añadiendo como instrucciones custom (…) también se añade al cajoncito.”
>

---

# 3. La memoria no siempre está vacía: Copilot ya trae contexto base

Nibaldo insiste en que la ventana de contexto **nunca parte totalmente vacía**, porque Copilot ya tiene un prompt de sistema propio:

> “La ventana nunca está vacía, tiene algo que ocupa poco porcentaje, pero tiene algo que es el system prompt de GitHub.”
>

Esto es importante porque, aunque el usuario no haya añadido nada, Copilot ya está funcionando bajo unas reglas internas. Luego, sobre esa base, se van sumando instrucciones, archivos, selección de código y conversación.

---

# 4. El historial de conversación también ocupa memoria

Este punto lo repite mucho. Cada vez que se pregunta y Copilot responde, el hilo va acumulando historial. Ese historial también entra en la ventana de contexto.

En G3M Sesión 1 dice:

> “Dentro de cada sesión, el histórico de la conversación se acumula.”
> “Si el histórico de la conversación se acumula, la ventana de contexto se va llenando.”
>

Y en G2M Sesión 1 lo refuerza:

> “El historial de conversación también funciona como parte de la ventana de contexto y se va llenando.”
>

**Implicación práctica:** no conviene usar el mismo hilo para todo. Un hilo largo puede terminar mezclando tareas, errores, decisiones anteriores y archivos que ya no son relevantes.

---

# 5. Cuando la memoria se llena, Copilot se “marea” o “se pone tonto”

Nibaldo usa expresiones muy coloquiales para explicarlo: cuando la ventana de contexto se llena, el modelo puede “marearse”, “ponerse tonto”, contestar mal o inventarse cosas.

En G2M Sesión 1 dice:

> “Esta ventana de contexto se llena y cuando la ventana de contexto se llena, el modelo se marea y cuando el modelo se marea se empieza a inventar las historias.”
>

En G3M Sesión 1 pregunta si les ha pasado que el modelo “se pone tonto” y explica que eso ocurre porque la ventana de contexto se llena:

> “¿Alguien les ha pasado alguna vez que el modelo se pone tonto? (…) se equivoca.”
> “Eso es porque la ventana de contexto se llena.”
>

Y en G6M Sesión 1 lo vuelve a aterrizar:

> “Ojo, si el modelo empieza a contestar mal, es porque la ventana de contexto probablemente ya está llena.”
>

---

# 6. Solución cuando se llena: abrir un nuevo hilo

La recomendación más clara de Nibaldo es: **si el contexto se llena o Copilot empieza a responder raro, abre un nuevo hilo**.

Lo dice directamente:

> “Solución: abre una nueva conversación.”
> “En GitHub Copilot, solución: abre un nuevo hilo y ya está.”
>

Y explica por qué eso ayuda:

> “No vas a tener el histórico de conversación, vas a tener una ventana limpia, un nuevo espacio para añadir nueva información.”
>

En G6M Sesión 1 también lo presenta como algo normal, no como un error grave:

> “¿Qué pasa si la ventana de contexto se llena? Pues no pasa nada, abro un hilo nuevo y continúo.”
>

**Traducción práctica para Teams:**
Si Copilot empieza a mezclar cosas, no pelees con el mismo hilo. Abre uno nuevo y vuelve a darle solo el contexto necesario.

---

# 7. La autocompactación ayuda, pero puede hacer perder memoria

Nibaldo explica que algunos modelos hacen **autocompactación** cuando la ventana de contexto se va llenando. Es decir, comprimen lo que hay en el contexto para hacer espacio.

Pero advierte que eso tiene un coste: se puede perder memoria útil.

> “Cuando ves que se va llenando hace un proceso que se llama autocompactación (…) la aprieta para que tenga más espacio.”
> “Sirve, sí, sirve mucho (…) Lo negativo (…) es que pierdes memoria de lo que estás utilizando.”
>

Pone un ejemplo: si antes el modelo había incorporado autenticación y después se autocompactó, al pedir una modificación puede hacerlo mal porque perdió parte del contexto anterior.

> “Si ya me había incorporado autenticación antes (…) y se autocompactó (…) probablemente lo empieza a hacer mal. Pasa, es normal. Solución: abre una nueva ventana y ya está. Tienes que actualizar el contexto.”
>

**Lectura:** la autocompactación no es mala, pero no hay que confiar en que mantenga perfectamente todo lo anterior.

---

# 8. El tamaño de la memoria depende del modelo

Nibaldo explica que no todos los modelos tienen la misma ventana de contexto. Algunos tienen más capacidad, otros menos.

> “La ventana de contexto depende del modelo, que la ventana de contexto puede ser más grande o más pequeña.”
>

En G6M Sesión 1 lo baja a una regla simple:

> “Los modelos más baratos tienen ventanas de contexto más pequeñas.”
> “Los modelos más caros tienen una ventana de contexto enorme.”
>

También menciona que modelos con ventanas enormes pueden aceptar mucha información, pero advierte que eso no significa que sean infinitos ni que convenga abusar:

> “En 1.000.000 te caben muchas cosas, pero se ocupa rápido, que no te engañe (…) se llena rápido.”
>

**Implicación:** un modelo con más memoria no sustituye una buena gestión del contexto.

---

# 9. Hay indicadores visuales de cuánto contexto se está usando

Nibaldo menciona que algunas interfaces muestran un indicador de cómo se va llenando la ventana de contexto.

> “Tienes esto que es el context limit (…) el tamaño de la ventana de contexto.”
> “Tienes indicadores visuales que les va diciendo (…) cómo se va llenando.”
> “Aquí te dice, por ejemplo, que yo tengo 168.000 tokens disponibles (…) estoy ocupando 23.000, tengo un 14% ocupado.”
>

No está completamente seguro de si Visual Studio lo muestra igual, pero sí dice que puede aparecer algún icono:

> “En el Visual Studio no recuerdo que aparezca eso, creo que aparece por aquí un iconito también.”
>

**Uso práctico:** si el entorno muestra ese indicador, conviene mirarlo en tareas largas.

---

# 10. Hay que saber qué se está cargando: documento activo

Nibaldo hace mucho énfasis en que el usuario debe saber **qué documento está cargado como referencia**, porque Copilot puede estar contestando mal simplemente porque tiene el documento equivocado en contexto.

En G4M Sesión 2 explica:

> “Por defecto viene cargado el documento activo, es decir, el documento activo es la ventana que tengo abierta.”
> “Yo tengo que saber que se está cargando.”
> “Si yo le pregunto por un modelo de datos y aquí no está, pues probablemente me va a decir cualquier cosa.”
>

Y añade una advertencia clave:

> “No es que está contestando mal, es que está referenciando documento activo.”
>

En varias sesiones incluso pide quitar el documento activo cuando no corresponde:

> “Justo arriba de donde está escribiendo, dice documento activo y lo tiene añadido ahí, quítalo.”
>

Y en G5M Sesión 3 lo vuelve a decir:

> “Quita el documento activo (…) le vamos a decir textual en el archivo (…) lo vas a referenciar directamente con la almohadilla.”
>

**Regla práctica:** no dejar contexto por defecto si no aporta. Si el documento activo no es relevante, quitarlo.

---

# 11. Referenciar de forma explícita: archivo, selección, líneas, clase o método

Para usar bien la memoria, Nibaldo recomienda **referenciar exactamente lo que Copilot necesita**.

En G2M Sesión 1 dice que hay que ser inteligente con la ventana de contexto:

> “Hay que ser inteligente a la hora de usar la ventana de contexto.”
> “Primero, saber qué referenciar, es decir, saber qué añadir a la ventana de contexto.”
>

Da ejemplos concretos:

> “Corrige el bug que se encuentra en el archivo # selecciona el archivo.”
> “Revisa específicamente dentro de las líneas 1007 y 1024.”
> “Cuando yo selecciono código, también se añade a la ventana de contexto.”
>

En G4M Sesión 2 también muestra que se puede referenciar:

* documento activo;
* código seleccionado;
* archivo;
* clase;
* método.

> “Yo puedo seleccionar un código (…) puedo contextualizar, referenciar clase, puedo referenciar métodos (…) con la almohadilla yo puedo referenciar archivos.”
>

**Lectura para GCO:** si el developer sabe que el problema está en una rutina COBOL, un método .NET o una consulta DB2 concreta, no debería cargar todo el proyecto.

---

# 12. No cargar 10 proyectos si solo trabajas en uno

Nibaldo da una recomendación muy directa: **acotar**.

> “Dale diez proyectos. ¿Te va a responder? Probablemente sí. ¿Te va a responder bien? Bueno, la probabilidad cambia porque el contexto es muy grande. Acótalo.”
> “¿Por qué le das 10 proyectos? Si estás trabajando en uno, acótalo.”
>

Esta es una de las frases más útiles para contenido de adopción. El mensaje sería:

> Copilot funciona mejor cuando le damos el contexto justo, no cuando le volcamos todo.

---

# 13. Dividir tareas grandes para no llenar la memoria

En G6M Sesión 2 aparece un caso muy aplicable al mundo COBOL/mainframe: una participante comenta que separar la tarea le sirvió para no llenar el contexto, porque si no Copilot intentaba tener 20 programas en memoria.

> “Esto me sirvió para que no me llenase el contexto.”
> “Si no intentaba tener todos los 20 programas en memoria y luego ya escribía y claro, se me quedaba sin memoria.”
>

Nibaldo, en ese mismo fragmento, insiste en que las tareas deben darse de forma gradual:

> “Pero cada tiene que ser gradual.”
>

**Regla práctica para GCO:** si hay que revisar 20 programas COBOL, no pedirlo todo en un único hilo. Mejor uno por uno, cerrando conclusiones y reiniciando contexto si hace falta.

---

# 14. La memoria afecta la calidad de la respuesta, no solo el consumo

Nibaldo no lo plantea solo como un tema de tokens. Para él, el mal uso del contexto afecta directamente a la calidad:

* puede inventar tablas;
* puede responder con base en un archivo que no corresponde;
* puede mezclar conversaciones anteriores;
* puede perder instrucciones después de autocompactar;
* puede no responder porque el contexto es demasiado grande.

En G4M Sesión 1 aparece un caso donde un participante dice que Copilot inventó una tabla al preguntarle por columnas con números de convenio. La lectura conectada con la explicación de Nibaldo es que, si no tiene el contexto correcto, puede inventar o responder mal. 

---

# 15. No todo error es “Copilot falla”: puede ser mala memoria/contexto

Este punto es clave para adopción. Nibaldo intenta que los developers no interpreten cada fallo como “Copilot no sirve”, sino que revisen primero qué contexto le dieron.

En G4M Sesión 2 lo dice muy claramente:

> “Para que no saltemos a la primera: ‘ay, me está contestando mal’. No, es que está referenciando documento activo.”
>

**Mensaje para Teams:** antes de culpar a Copilot, mira qué tiene cargado: documento activo, archivos abiertos, selección, referencias e historial.

---

# 16. Qué significa “correcto uso de la memoria” según Nibaldo

Sintetizando todo lo que dice, el correcto uso de la memoria sería:

| Regla                                     | Qué implica                                                           |
| ----------------------------------------- | --------------------------------------------------------------------- |
| **Saber qué está en contexto**            | Revisar documento activo, archivos abiertos, selección y referencias. |
| **Acotar el contexto**                    | No cargar 10 proyectos si trabajas en uno.                            |
| **Referenciar explícitamente**            | Usar `#file`, selección, líneas, clase o método.                      |
| **Limpiar cuando se satura**              | Abrir nuevo hilo si Copilot empieza a responder raro.                 |
| **Dividir tareas grandes**                | No meter 20 programas en memoria de golpe.                            |
| **No confiar ciegamente en el historial** | El historial ayuda, pero también llena y contamina.                   |
| **Actualizar el contexto**                | Si abres nuevo hilo, volver a pasarle lo importante.                  |
| **Entender el modelo usado**              | Algunos modelos tienen más ventana de contexto que otros.             |

---

# Frase resumen para explicar a Jonathan / Nibaldo

Puedes decirlo así:

> Nibaldo plantea el correcto uso de la memoria como una gestión consciente de la ventana de contexto: saber qué información se está cargando, acotarla a lo necesario, referenciar archivos o selecciones concretas, evitar conversaciones infinitas, abrir hilos nuevos cuando Copilot empieza a responder mal y dividir tareas grandes para no saturar el contexto. Para él, muchos errores no vienen de que Copilot “no sirva”, sino de que está trabajando con memoria equivocada, excesiva o contaminada.

---

# Cómo lo bajaría a contenido para Teams

```markdown
🧠 Tip Copilot: revisa qué tiene en “memoria”

Copilot responde con lo que tiene en su ventana de contexto: documento activo, archivos abiertos, selección de código, referencias e historial del chat.

Si le das demasiado contexto, puede mezclarse.
Si le das el contexto equivocado, puede responder mal.

Antes de preguntar:
1. Quita el documento activo si no aporta.
2. Referencia solo el archivo, método o líneas necesarias.
3. Si el hilo ya está largo, abre uno nuevo.

👉 Menos contexto, pero mejor elegido, suele dar mejores respuestas.
```
