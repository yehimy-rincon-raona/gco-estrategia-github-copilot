# Evitar que los usuarios frustren su experiencia o agoten sus recursos
En las sesiones de formación, Nibaldo aborda estos cuatro temas con un enfoque muy práctico, entregando reglas claras para evitar que los usuarios frustren su experiencia o agoten sus recursos. Aquí tienes exactamente lo que explica sobre cada punto:

### 1. Optimizaciones de uso de tokens
Nibaldo insiste en que los usuarios tienen una "bolsa" limitada de tokens mensuales que no se acumulan para el mes siguiente, por lo que deben usarse inteligentemente. Para optimizar su uso, enseña lo siguiente:
*   **Limpiar el entorno de trabajo:** La "ventana de contexto" es como un cajón que se llena con todo lo que hay en el IDE. Si los usuarios dejan cientos de pestañas abiertas o cargan soluciones enteras innecesarias, colapsan la ventana de contexto, gastan tokens inútilmente y el modelo arroja errores por exceso de información.
*   **Referencias cruzadas precisas:** En lugar de usar ciegamente `@workspace` (que lee todo el proyecto y gasta muchos tokens), Nibaldo recomienda usar `#file` para referenciar única y exclusivamente los archivos que el modelo necesita para resolver la tarea.
*   **Estrategia "Planificador vs. Ejecutor":** Un truco avanzado para ahorrar tokens es utilizar un modelo "premium" (que razona más) en el modo *Plan* para estructurar la solución, y luego cambiar a un modelo estándar (más barato) para que simplemente ejecute o pique el código sugerido en el plan.

### 2. Modelo apropiado para una tarea
La regla de oro de Nibaldo es que **"no todos los modelos sirven para todo"**. Los usuarios deben elegir el modelo según la complejidad de la tarea para no derrochar su cuota mensual:
*   **Modelos Estándar (ej. GPT-5 mini, GPT-4.1):** Tienen multiplicador `0x`, por lo que no consumen la cuota de tokens premium. Deben usarse para el trabajo diario, tareas repetitivas, consultas rápidas, escribir *boilerplate* o generar documentación básica.
*   **Modelos Premium (ej. Claude Sonnet 4, Claude Opus 4.6, Gemini 3 Pro):** Tienen multiplicadores `1x` o `3x` porque "razonan" profundamente, tienen ventanas de contexto enormes y procesan más información. Se deben reservar exclusivamente para refactorizaciones complejas, análisis de proyectos masivos, o entender código legacy enredado como COBOL. Nibaldo destaca especialmente a los modelos *Claude* como los mejores para tareas de programación pura.
*   **Evolución del modelo:** Si no tienes idea de qué hacer, Nibaldo sugiere iniciar siempre con un modelo estándar. Si la respuesta es insuficiente, debes cambiar a un modelo premium en el mismo hilo, en lugar de borrar y reescribir el *prompt* desde cero.

### 3. Skills para optimización de uso de tokens
Nibaldo explica que un *Skill* es un paquete de conocimiento especializado (como un libro de recetas) que reemplaza a los antiguos *prompt files*. Su principal ventaja para optimizar tokens es el **"Progressive Loading"** (carga progresiva):
*   A diferencia de las instrucciones globales (`copilot-instructions.md`) que se inyectan e invierten tokens en absolutamente *todas* las interacciones, los Skills funcionan bajo demanda.
*   Copilot solo lee la Metadata del Skill (apenas unas ~100 palabras con el nombre y la descripción) de forma constante. Solo si el modelo determina que el Skill es relevante para la tarea del usuario, inyectará el resto del cuerpo y los recursos adjuntos (scripts, archivos de referencia, checklists) en la ventana de contexto. Esto evita saturar el contexto con instrucciones que no se necesitan.

### 4. Correcto uso de la memoria
Nibaldo diferencia entre la memoria a corto plazo (de la sesión) y a largo plazo (Copilot Memory):
*   **El peligro del historial (Corto plazo):** El historial de la conversación se acumula continuamente en la ventana de contexto. Nibaldo advierte que mantener conversaciones interminables (más de 20 turnos) ensucia el contexto y hace que el modelo se "maree", responda tonterías o se vuelva impreciso. La mejor práctica es abrir constantemente un **nuevo hilo de chat** para limpiar la memoria a corto plazo y empezar de cero.
*   **Copilot Memory (Largo plazo):** Es una funcionalidad que permite que el contexto y las preferencias personales persistan entre diferentes sesiones (por ejemplo, recordar que siempre programas en C# 12 con EF Core sin tener que repetirlo cada vez). Sin embargo, Nibaldo aclara que esta memoria sirve para *preferencias individuales*; si se trata de reglas y estándares de todo el equipo corporativo, siempre deben plasmarse por escrito en el archivo `copilot-instructions.md`.

---
Sí. Revisé las transcripciones de las sesiones y esto es lo que Nibaldo dice **exactamente / de forma explícita** sobre esos temas. Hay una idea común: **no se trata de usar siempre el modelo más potente ni meterle todo el contexto posible; se trata de elegir bien modelo, contexto y forma de trabajo para no gastar tokens innecesariamente y obtener respuestas más enfocadas.**

---

## 1. Optimización del uso de tokens

Nibaldo explica que los modelos más potentes consumen más tokens, especialmente cuando “razonan” más o generan respuestas más largas. Lo dice de forma muy directa:

> “El que razona y cuando le da vuelta y le da vuelta (…) la salida suele ser más extensa, te consume más tokens. Por lo tanto es más caro.”
> “Si tú ocupas un modelo Premium para todas tus tareas siempre, yo te aseguro que en dos días te vas a quedar sin tokens.”
>

También aterriza que no es un coste directo para el usuario en nómina, sino un **límite asignado de tokens**:

> “No es que ustedes tienen asignado un conjunto de tokens. (…) Ese límite de tokens lo van a alcanzar rápidamente y no es lo que quieren.”
>

En otra sesión, lo conecta con la forma de referenciar archivos: si se referencia bien el contexto, se limita el consumo:

> “Con esto yo puedo limitar la cantidad de tokens a consumir. Puedo hacer una búsqueda más inteligente y más rápida. Puedo hacer que la solución se enfoque.”
>

**Lectura para Teams:** este tema puede convertirse en una píldora muy útil tipo:
**“No le pases todo el proyecto a Copilot: dile exactamente qué archivo, método o error mirar.”**

---

## 2. Modelo apropiado para cada tarea

Nibaldo insiste en que **todos los modelos pueden servir**, pero no todos convienen para lo mismo. La clave es elegir el modelo según la dificultad o criticidad de la tarea.

En Sesión 1 de G2M dice:

> “Las respuestas cambian. Cambian absolutamente. Segundo, la calidad de la respuesta, aunque sea la misma, es totalmente diferente.”
> “Si tengo una tarea robusta, importante o muy delicada (…) probablemente voy a ocupar un modelo que razone, que le dé más vueltas a la idea, que sea más preciso.”
> “Que quiero generar una documentación, pues a lo mejor me voy a ir a una tarea más sencilla.”
>

En G4M Sesión 3 menciona además el **modo auto** en Visual Studio Code:

> “Tienes la posibilidad de trabajar con el modo auto para el modelo, es decir, que él escoja el modelo apropiado para la dificultad de la tarea, que también es interesante porque apunta a ahorrar tokens.”
>

Y en G3M Sesión 2 advierte a un participante que sea consciente del modelo que está usando:

> “Ojo, cuidado con el modelo que estás ocupando. (…) Tienes que ser consciente del modelo que estás usando.”
>

**Lectura para Teams:** este tema es muy bueno para Fase 1 o Fase 2 con un mensaje práctico:
**“Modelo potente ≠ mejor siempre. Para explicar un error o documentar, usa uno estándar. Para refactor complejo o impacto crítico, sube de modelo.”**

---

## 3. Skills para optimización de uso de tokens

Aquí hay que ser precisa: **Nibaldo sí habla bastante de Skills, pero no encontré una frase donde diga literalmente “los Skills optimizan tokens”.** Lo que sí dice es que los Skills son capacidades/herramientas específicas que se añaden al agente para hacer tareas concretas.

En G1M Sesión 3:

> “Aparece el concepto skills, que skills son básicamente herramientas y cosas que se pueden hacer.”
> “Me interesa que sepan: oye, puedo crear mis propios prompts, puedo crear mis propios agentes, puedo crear mis propios skills.”
>

En G4M Sesión 3 se ve un ejemplo más avanzado: agentes especializados —COBOL, .NET— que disponen de Skills, y Skills que consultan documentación concreta de Confluence:

> “Esta gente, por detrás, tiene otros agentes un poco más especializados en COBOL, en .NET (…) Y estos agentes disponen de skills.”
>

Más adelante explica la estructura:

> “Los skills también son habilidades en particular que tienen los agentes.”
> “La estructura de un skill se parece mucho a un prompt, se parece mucho a un agente (…) pero hace ciertas cosas en particular.”
> “Este skill está enfocado en desarrollo backend para .NET, que va a buscar una documentación de Confluence…”
>

**Conclusión importante:** para el canal de Teams, yo no lo comunicaría como “Skills ahorran tokens” porque eso no aparece dicho así. Lo comunicaría como:

> **“Los Skills ayudan a que el agente trabaje con una capacidad concreta y vaya a buscar la información correcta, en vez de pedirle todo de forma genérica.”**

Eso sí conecta indirectamente con eficiencia de contexto y consumo, pero no conviene prometerlo como ahorro directo si no está dicho así en la sesión.

---

## 4. Correcto uso de la memoria / ventana de contexto

Nibaldo usa “memoria” en la práctica como **ventana de contexto**: todo lo que Copilot tiene disponible en la conversación, archivos abiertos, selección, instrucciones, etc.

Lo explica con una metáfora muy clara:

> “La ventana de contexto es como un cajón.”
> “Todo lo que se añade a la ventana del contexto es lo que el modelo sabe.”
>

También enumera qué entra en ese contexto:

> “Las conversaciones…”
> “Las ventanas que yo tenga abiertas en el entorno de desarrollo.”
> “Los archivos de configuración o de customización, este copilot-instructions.md…”
> “El código seleccionado.”
> “Todo lo que yo haga referencia se añade a la ventana del contexto.”
>

Y da una recomendación muy accionable cuando la conversación se llena:

> “Dentro de cada sesión, el histórico de la conversación se acumula. Si el histórico de la conversación se acumula, la ventana de contexto se va llenando.”
> “Eso es porque la ventana de contexto se llena. Solución: abre una nueva conversación.”
> “En GitHub Copilot, solución: abre un nuevo hilo y ya está.”
>

También hay un caso práctico en G6M donde una participante comenta que, si no separaba la tarea, Copilot intentaba meter “20 programas en memoria” y se quedaba sin memoria/contexto:

> “Esto me sirvió para que no me llenase el contexto.”
> “Si no intentaba tener todos los 20 programas en memoria y luego ya escribía y claro, se me quedaba sin memoria.”
>

**Lectura para Teams:** este es probablemente el tema más potente para contenido inmediato. Se puede convertir en un tip de 3 puntos:

**“Cuando Copilot empieza a responder raro:**

1. Abre un hilo nuevo.
2. Referencia solo el archivo o método necesario.
3. No metas 20 programas si solo quieres revisar uno.”

---

## Recomendación para publicar estos temas en Teams

Yo los ordenaría así, para no sonar avanzado demasiado pronto:

1. **Tip Fase 1:** “No gastes el modelo premium para todo.”
   Mensaje: usa modelos potentes solo para tareas complejas.

2. **Tip Fase 2:** “Copilot no necesita todo el proyecto: necesita el contexto correcto.”
   Mensaje: referencia archivo, selección o error concreto.

3. **Tip Fase 2:** “Si Copilot se vuelve confuso, abre un hilo nuevo.”
   Mensaje: la conversación también llena contexto.

4. **Más adelante, Fase 4:** “Skills: capacidades específicas para tareas repetidas.”
   Mensaje: no venderlo todavía como ahorro de tokens, sino como personalización avanzada.

Mi lectura: **Nibaldo está proponiendo contenido muy útil para adopción**, pero hay que bajarlo a lenguaje de developer GCO: “elige bien el modelo, no le pases todo, abre hilo nuevo cuando se ensucie el contexto y usa referencias concretas”. Ahí está el valor real para el canal de Teams.
