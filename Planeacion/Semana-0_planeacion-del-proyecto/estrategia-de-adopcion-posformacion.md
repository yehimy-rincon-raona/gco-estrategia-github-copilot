# Documento base para presentación directiva

## Estrategia de adopción de GitHub Copilot en GCO

---

## 1. Objetivo del proyecto

El objetivo del proyecto es **reforzar la adopción real de GitHub Copilot en GCO**, pasando de una etapa de formación técnica a un modelo sostenido de uso, acompañamiento y generación de valor.

La meta no es únicamente que los equipos conozcan Copilot, sino que lo incorporen progresivamente en su trabajo diario para resolver tareas concretas: entender código heredado, revisar errores, analizar logs, trabajar con consultas DB2/PL-SQL, documentar código, acelerar tareas repetitivas y explorar nuevas formas de colaboración con IA.

> **Idea estratégica:**
> La formación ya ocurrió. Ahora el reto es convertir GitHub Copilot en hábito real dentro del día a día de GCO.

---

## 2. Contexto y punto de partida

GCO ya cuenta con licencias activas de GitHub Copilot y está completando un proceso de formación técnica con los equipos de desarrollo. Algunos grupos ya han terminado las sesiones; otros están en proceso o aún no han iniciado. Estas sesiones abordaron conceptos básicos de IA, prompting estructurado, ventana de contexto, uso práctico en entornos de desarrollo, modo agente, instrucciones personalizadas, prompt files, Skills, multi-agentes y MCP .

Sin embargo, el reto actual no es solo técnico. Existe una resistencia natural a la adopción porque parte de la audiencia puede percibir la IA como una herramienta lejana a su stack, poco aplicable a entornos legacy o incluso como una amenaza al control sobre el código.

Los equipos trabajan principalmente con **Visual Studio, COBOL, .NET, DB2 y PL/SQL**, por lo que cualquier acción de adopción debe conectar con ese contexto. Para esta audiencia, Copilot solo generará confianza si demuestra utilidad en tareas reales.

> **Lectura estratégica:**
> GCO no parte de cero. Ya existe una base técnica. El siguiente paso es evitar que ese conocimiento se diluya después de la formación.

---

## 3. Problema que resolvemos

El riesgo principal no es que los usuarios no conozcan GitHub Copilot. El riesgo es que, después de la formación, Copilot quede como “algo que vimos en una sesión” y no como una herramienta habitual de trabajo.

Ese riesgo aparece cuando el developer vuelve a su día a día y:

* No recuerda cuándo usar Copilot.
* No sabe cómo aplicarlo a su caso concreto.
* Lo percibe como algo pensado para otros lenguajes o entornos.
* No encuentra ejemplos cercanos a COBOL, DB2, PL/SQL o .NET.
* No tiene un canal donde resolver dudas rápidas.
* No ve casos reales de compañeros o equipos similares.

> **Idea clave para directivos:**
> La adopción no se consigue solo explicando funcionalidades. Se consigue haciendo visible el valor en el momento exacto en que el usuario lo necesita.

---

## 4. Oportunidad estratégica

La oportunidad está en pasar de una adopción basada en formación a una adopción basada en hábito.

Copilot puede generar valor si se conecta con tareas reales del contexto de GCO:

* Interpretar logs de error.
* Revisar SQLCODE en COBOL.
* Analizar impacto en Copybooks.
* Entender consultas DB2 complejas.
* Crear scripts SQL desde información estructurada.
* Generar documentación técnica.
* Proponer una primera versión de código .NET.
* Ayudar a revisar tickets o preparar planes de acción.
* Reducir fricción en tareas repetitivas o de análisis.

> **Idea estratégica:**
> No queremos que Copilot sea “la herramienta de IA”. Queremos que sea la ayuda que un developer abre cuando tiene un bug, una duda de código, una consulta compleja o una tarea repetitiva que resolver.

---

## 5. Propuesta estratégica

La propuesta es activar un **ecosistema de adopción continua** que combine comunicación, soporte, contenidos prácticos y detección de casos reales — acompañando a los equipos independientemente de su punto en la formación.

Este ecosistema se estructura en cuatro líneas de trabajo, coherentes con la propuesta inicial de reforzar la adopción mediante comunicación de valor, acompañamiento, implicación de Product Owners/Managers y evolución futura del modelo de trabajo .

| Línea estratégica             | Qué resuelve                                                        | Qué activa                                                                |
| ----------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **1. Comunidad y contenidos** | Mantener visible el valor de Copilot después de la formación        | Teams, tips, infografías, micro-vídeos, mensajes breves y casos aplicados |
| **2. Soporte continuo**       | Resolver bloqueos reales cuando el usuario intenta usar Copilot     | Foro, sesiones AMA y reservas 1:1                                         |
| **3. Casos reales y líderes** | Generar credibilidad interna desde ejemplos del propio contexto GCO. Involucrar a POs y Managers con enfoque amplio de IA — no solo GitHub Copilot | Embajadores, Product Owners, Managers y casos de éxito                    |
| **4. Evolución futura**       | Mostrar una ruta de madurez sin forzar temas avanzados al inicio    | Spec-Driven Development y personalización avanzada más adelante           |

> **Mensaje directivo:**
> No proponemos más formación. Proponemos un sistema de adopción continua que acompañe a cada equipo desde donde esté y convierta la formación en uso real.

---

## 6. Principios de la estrategia de contenidos

Para que la comunicación funcione con una audiencia técnica y resistente, la estrategia debe seguir cuatro principios:

### 6.1. De menos a más

No se debe iniciar con temas avanzados como MCP, Skills, multi-agentes o configuraciones complejas. Primero se debe consolidar el uso básico: abrir Copilot, preguntar bien, dar contexto, resolver un error, entender código y aplicar el resultado con criterio.

### 6.2. Contenidos breves o nada

El contenido debe ser fácil de consumir: tips de 3 puntos, mensajes de impacto, infografías, micro-vídeos y casos de uso breves. El plan de trabajo ya identifica estos formatos como los más adecuados para mantener la adopción sin saturar a los usuarios .

### 6.3. Casos reales antes que mensajes genéricos

El contenido debe conectar con casos ya trabajados o demostrados: COBOL, DB2, PL/SQL, .NET, Copybooks, SQLCODE, Jira y logs. Para un developer de GCO, un ejemplo real tiene más poder que una estadística genérica.

### 6.4. Tono de colega, no de experto

La comunicación debe sentirse cercana: “esto te puede ahorrar tiempo hoy”, no “la IA transformará tu forma de trabajar”. El objetivo es generar confianza, no presión.

---

## 7. Enfoque de contenidos por fases

La estrategia de contenidos debe avanzar de forma progresiva para reducir resistencia y aumentar confianza.

| Fase                               | Objetivo                                                                              | Tipo de contenido                                                                          |
| ---------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Fase 1 — Concienciación**        | Recordar que Copilot es la herramienta corporativa disponible y mostrar valor inicial | Mensajes de activación, métricas aplicables, tips de productividad, noticias útiles        |
| **Fase 2 — Visual Studio primero** | Llevar Copilot al entorno real de trabajo                                             | Dónde está Copilot, cómo invocarlo, modo pregunta vs. modo agente, resolución de bugs      |
| **Fase 3 — Multi-entorno** *(sujeto a validación IT)* | Ampliar el uso hacia VS Code y terminal sin forzar el cambio — **requiere confirmación con Nibaldo e IT antes de comunicarlo** | Comparativas, tips de transición, Copilot CLI, flujo multi-entorno |
| **Fase 4 — Customización**         | Introducir personalización cuando ya exista uso básico                                | `copilot-instructions.md`, `.github`, documentación automática, instrucciones corporativas |

> **Idea estratégica:**
> La adopción se construye con confianza progresiva. Primero utilidad inmediata, después profundidad técnica.

---

## 8. Actualidad y oportunidad de comunicación

GitHub Copilot está evolucionando rápidamente. Esto representa una oportunidad para mantener el canal vivo con novedades útiles, siempre traducidas al impacto real para los developers de GCO.

Algunos cambios recientes relevantes incluyen mejoras en GitHub Copilot CLI, plugins gestionados por empresa en public preview, actualizaciones de Copilot en Visual Studio Code, mejoras en métricas de uso y disponibilidad de nuevos modelos en Copilot ([The GitHub Blog][1]).

También hay aprendizajes importantes sobre confianza y transparencia. Recientemente se reportó una controversia en VS Code por la inclusión automática de Copilot como coautor en commits, posteriormente corregida para que la atribución de IA sea explícita y controlada por el usuario ([TechRadar][2]).

> **Oportunidad para GCO:**
> Hablar de novedades no debe ser marketing. Debe ser una forma de ayudar a los equipos a entender qué cambia, qué deben probar y cómo mantener el control sobre el uso de IA.

---

## 9. Zoom en el equipo de Teams

El equipo de Teams ya está creado y sus canales no se modifican. La propuesta es definir el rol de cada canal para que la comunidad funcione como un sistema de adopción, no como un repositorio de materiales.

> **Idea estratégica:**
> Teams será el espacio donde la adopción se mantiene viva: con tips breves, dudas reales, soporte cercano y ejemplos conectados con el trabajo diario de GCO.

---

## 10. Canales creados y objetivo de cada uno

| Canal                               | Objetivo                                                                                                        | Tipo de contenido preliminar                                                                |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **General**                         | Dar contexto oficial, explicar el propósito de la comunidad y orientar a los usuarios sobre cómo usar el equipo | Bienvenida, mapa de canales, reglas de uso, mensajes institucionales                        |
| **Anuncios y Tips Ágiles**          | Canal editorial principal — tips, casos reales, novedades y retos. Todo el contenido se organiza por hashtags: **por tipo** (#TipÁgil, #CasoReal, #Novedad, #PruebaHoy), **por tecnología** (#COBOL, #NET, #DB2, #PLSQL) y **por temporalidad** (#Fase1, #Fase2…) | Tips, infografías, vídeos breves, anuncios de casos reales, mini retos |
| **Casos de Uso Reales**             | Casos prácticos en profundidad — formato extendido para documentar el problema, el prompt y el aprendizaje      | Problema → prompt → resultado esperado → aprendizaje                   |
| **Foro de Ayuda - Ask Me Anything** | Recoger dudas, preparar sesiones abiertas y resolver bloqueos reales                                            | Preguntas abiertas, FAQs, convocatorias AMA, respuestas de expertos                         |
| **Primeros Pasos**                  | Guiar a usuarios que necesitan activar o empezar a usar Copilot sin fricción                                    | Cómo confirmar licencia, cómo abrir Copilot, cómo hacer una primera pregunta útil           |
| **Reservas 1-1 con Expertos**       | Facilitar acompañamiento personalizado para casos concretos                                                     | Enlace a Bookings, instrucciones para reservar, tipos de dudas que se pueden llevar         |

---

## 11. Zoom en el canal “Anuncios y Tips Ágiles”

Este canal será clave para despertar interés, mantener recurrencia y conectar Copilot con ventajas competitivas reales.

No debe sonar a revista de marketing ni a boletín genérico de IA. Debe responder a una pregunta muy concreta:

> **¿Qué puedo aprender en 1 minuto que me ayude a usar mejor Copilot hoy en mi trabajo?**

### Línea editorial propuesta

> **Pequeños hábitos para usar mejor Copilot, ahorrar tiempo y ganar control sobre el código.**

### Sistema de hashtags

Cada publicación lleva al menos un hashtag de cada criterio. Eso permite filtrar por lo que le interesa a cada developer sin necesidad de crear subcanales.

#### Por tipo de comunicado

| Etiqueta              | Objetivo                                                   | Ejemplo                                                        |
| --------------------- | ---------------------------------------------------------- | -------------------------------------------------------------- |
| **#TipÁgil**          | Consejo práctico de 1 minuto                               | “Pega el log, no empieces de cero.”                            |
| **#CasoReal**         | Anuncio de un caso de uso concreto resuelto con Copilot    | “Cómo analizamos impacto en Copybooks en 3 prompts.”           |
| **#DatoÚtil**         | Métrica o insight de productividad aplicable               | “Dónde se nota primero Copilot: entender código heredado.”     |
| **#MejorContexto**    | Buenas prácticas sobre prompts, contexto y tokens          | “Menos ruido, mejor respuesta.”                                |
| **#NovedadAplicable** | Actualidad de Copilot traducida al día a día del developer | “Qué probar esta semana en Copilot Chat.”                      |
| **#PruebaHoy**        | Mini reto para usar Copilot ese mismo día                  | “Selecciona una consulta DB2 y pide riesgos antes de tocarla.” |

#### Por tecnología

| Etiqueta    | Cuándo usarlo                                      |
| ----------- | -------------------------------------------------- |
| **#COBOL**  | Contenido aplicable a COBOL / mainframe            |
| **#NET**    | Contenido aplicable a .NET                         |
| **#DB2**    | Contenido aplicable a consultas o errores DB2      |
| **#PLSQL**  | Contenido aplicable a PL/SQL                       |
| **#Multi**  | Contenido transversal aplicable a varios entornos  |

#### Por temporalidad / fase

| Etiqueta    | Cuándo usarlo                                      |
| ----------- | -------------------------------------------------- |
| **#Fase1**  | Contenido de concienciación y primeros pasos       |
| **#Fase2**  | Contenido de uso en Visual Studio                  |
| **#Fase3**  | Contenido de multi-entorno *(activar solo si hay validación IT)* |
| **#Fase4**  | Contenido de customización avanzada                |

### Filtro editorial

Antes de publicar cualquier contenido, validar:

> **¿Un developer de GCO puede probar esto hoy en Visual Studio, COBOL, DB2, PL/SQL o .NET?**

Si la respuesta es no, el contenido debe reformularse.

---

## 12. Ideas preliminares de contenidos por canal

Estas ideas no son todavía un cronograma cerrado. Son una base para construir el calendario editorial.

| Canal                               | Ideas preliminares                                                                                                                        |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **General**                         | Mensaje de bienvenida, propósito de la comunidad, cómo usar cada canal, invitación a participar                                           |
| **Anuncios y Tips Ágiles**          | Ventaja competitiva de adoptar IA, métricas de productividad, uso inteligente de tokens, novedades recientes de Copilot, tips de contexto |
| **Casos de Uso Reales**             | Resolver un bug pegando el log, analizar SQLCODE, entender una consulta DB2, documentar un bloque COBOL, generar README técnico           |
| **Foro de Ayuda - Ask Me Anything** | Pregunta de apertura: “¿Qué te gustaría probar con Copilot pero todavía no has probado?”, recopilación de dudas para primer AMA           |
| **Primeros Pasos**                  | Cómo confirmar licencia activa, dónde está Copilot en Visual Studio, primera pregunta recomendada                                         |
| **Reservas 1-1 con Expertos**       | Publicación del enlace a Bookings, instrucciones para reservar, ejemplos de casos ideales para una tutoría                                |

---

## 13. Zoom en la primera semana

La primera semana debe enfocarse en activar interés, reducir fricción y posicionar Copilot como una herramienta corporativa útil, no como una obligación.

No todos los canales necesitan contenido desde el primer día. Es mejor activar pocos mensajes con claridad que llenar todos los espacios sin intención.

| Canal                               | Contenido sugerido para Semana 1                                              | Objetivo                                                                  |
| ----------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **General**                         | Mensaje de bienvenida: “De la formación al uso real de Copilot”               | Explicar el propósito de la comunidad y orientar a los usuarios           |
| **Anuncios y Tips Ágiles**          | Post 1: “GitHub Copilot ya está en tu entorno de trabajo”                     | Recordar que la herramienta está disponible y conectarla con el día a día |
| **Anuncios y Tips Ágiles**          | Post 2: “La ventaja no está solo en tener IA, sino en aprender a usarla bien” | Persuadir desde la idea de vanguardia y ventaja competitiva               |
| **Anuncios y Tips Ágiles**          | Post 3: “Menos ruido, mejor respuesta: cómo dar contexto justo”               | Introducir el paradigma de tokens/contexto sin tecnicismos                |
| **Primeros Pasos**                  | Publicación breve: “Cómo confirmar si tienes la licencia activa”              | Reducir fricción inicial                                                  |
| **Foro de Ayuda - Ask Me Anything** | Pregunta inicial: “¿Qué tarea te gustaría probar primero con Copilot?”        | Empezar conversación y detectar intereses                                 |
| **Casos de Uso Reales**             | Preparar, no necesariamente publicar: primer caso sobre bug/log o SQLCODE     | Dejar listo el contenido para Semana 2                                    |
| **Reservas 1-1 con Expertos**       | Preparar enlace y texto de publicación                                        | Activar cuando esté confirmado Bookings                                   |

---

## 14. Primeros contenidos sugeridos para “Anuncios y Tips Ágiles”

### Contenido 1 — Mensaje de activación

**Título:**
GitHub Copilot ya está en tu entorno de trabajo

**Mensaje:**
Copilot no es una herramienta externa ni algo reservado para otros perfiles. Está pensado para ayudarte dentro del flujo diario: entender código, revisar errores, generar primeras versiones y desbloquear tareas repetitivas.

La clave no es usarlo para todo. La clave es empezar por una tarea pequeña.

**CTA:**
Hoy prueba con una pregunta sencilla sobre un bloque de código que te tome tiempo entender.

---

### Contenido 2 — Ventaja competitiva

**Título:**
La ventaja no está solo en tener IA, sino en aprender a usarla bien

**Mensaje:**
Las herramientas de IA están cambiando la forma de trabajar en desarrollo. La diferencia no estará únicamente en quién tiene acceso a ellas, sino en quién aprende antes a integrarlas con criterio en su día a día.

En GCO, eso significa usar Copilot para tareas concretas: revisar un error, entender una consulta, analizar impacto o preparar documentación.

**CTA:**
Empieza por una tarea real, pequeña y repetitiva. Ahí suele aparecer el primer valor.

---

### Contenido 3 — Contexto y tokens

**Título:**
Menos ruido, mejor respuesta

**Mensaje:**
Copilot responde mejor cuando recibe el contexto adecuado. Más información no siempre significa mejor respuesta.

En vez de pedir:

`Revísame todo este programa`

Prueba:

`Analiza solo este bloque. Quiero entender por qué puede devolver SQLCODE negativo y qué validaciones faltan antes de modificarlo.`

**CTA:**
Hoy prueba a seleccionar solo el bloque que quieres revisar antes de preguntar.

---

### Contenido 4 — Novedad aplicable

**Título:**
Copilot cambia rápido: lo importante es saber qué probar

**Mensaje:**
GitHub está incorporando mejoras frecuentes en Copilot, incluyendo avances en CLI, modelos, métricas de uso y experiencia en Visual Studio Code. Pero no todas las novedades requieren acción inmediata.

En este canal filtraremos solo lo que pueda tener impacto real en el trabajo diario.

**CTA:**
Esta semana revisa una tarea que normalmente te tome tiempo y pregúntate: ¿podría Copilot ayudarme a preparar una primera versión?

---

## 15. Modelo de soporte continuo

La formación no resuelve todos los bloqueos. El bloqueo real suele aparecer cuando el usuario está delante de su código, intenta usar Copilot y no sabe cómo pedir ayuda.

Por eso, el modelo de soporte continuo incluye:

| Mecanismo                           | Objetivo                                                                |
| ----------------------------------- | ----------------------------------------------------------------------- |
| **Foro de Ayuda - Ask Me Anything** | Resolver dudas abiertas y detectar temas recurrentes                    |
| **Sesiones AMA**                    | Crear espacios periódicos de pregunta abierta con expertos              |
| **Reservas 1-1 con Expertos**       | Acompañar casos concretos de 15-30 minutos                              |
| **Casos de Uso Reales**             | Convertir dudas repetidas en contenido reutilizable                     |
| **Product Owners / Managers**       | Detectar casos de éxito y amplificar aprendizajes dentro de los equipos |

---

## 16. Product Owners y Managers como palanca de adopción

La participación de Product Owners y Managers no debe limitarse a pedirles que “detecten casos de éxito” ni circunscribirse solo a GitHub Copilot. El siguiente paso con este perfil es una conversación más amplia sobre **IA aplicada a la gestión diaria**: cómo otras herramientas de IA pueden ayudarles también en su día a día.

Una acción concreta puede ser una sesión express de 30 minutos para mostrar cómo la IA puede ayudarles a:

* Redactar criterios de aceptación.
* Preparar documentación funcional.
* Analizar tickets.
* Resumir conversaciones.
* Identificar patrones de dudas en sus equipos.
* Detectar casos de uso que puedan convertirse en contenido.

> **Idea estratégica:**
> Los POs y Managers pueden ser una palanca de adopción si primero ven cómo la IA (más allá de Copilot) también mejora su propio trabajo. El enfoque con este perfil es más amplio que con los developers.

---

## 17. Métricas iniciales de seguimiento

En el corto plazo no se recomienda medir demasiadas cosas. La prioridad es observar si la comunidad empieza a moverse.

| Métrica                       | Fuente                   | Qué nos ayuda a decidir                           |
| ----------------------------- | ------------------------ | ------------------------------------------------- |
| Reacciones por publicación    | Teams                    | Qué temas generan más interés                     |
| Comentarios y preguntas       | Teams                    | Qué dudas reales aparecen                         |
| Participación en el foro      | Teams                    | Si el canal está funcionando como espacio vivo    |
| Reservas 1:1 solicitadas      | Bookings                 | Qué nivel de acompañamiento necesita la comunidad |
| Asistencia a AMAs             | Teams / calendario       | Si existe demanda de soporte abierto              |
| Casos de uso detectados       | Foro, 1:1, POs, Managers | Qué contenidos deben priorizarse                  |
| Uso de Copilot, si hay acceso | GitHub Copilot Dashboard | Tendencia de adopción y uso real                  |

> **Idea estratégica:**
> La primera medición no busca demostrar ROI definitivo. Busca aprender qué mueve a la comunidad y qué acciones conviene reforzar.

---

## 18. Conclusiones

1. **GCO ya tiene una base técnica construida.**
   La formación permitió introducir conceptos, prácticas y capacidades avanzadas de Copilot. Ahora el reto es sostener esa base en el día a día.

2. **La adopción necesita continuidad.**
   Sin contenidos breves, soporte y casos reales, Copilot puede quedar como una herramienta conocida pero poco utilizada.

3. **Teams debe funcionar como comunidad, no como repositorio.**
   Cada canal tiene un rol dentro del proceso de adopción: activar, guiar, resolver, demostrar y acompañar.

4. **El contenido debe ser práctico, breve y conectado con GCO.**
   La audiencia necesita ejemplos aplicables a Visual Studio, COBOL, DB2, PL/SQL y .NET.

5. **Las novedades son útiles solo si se traducen al trabajo diario.**
   El canal debe filtrar la actualidad de Copilot para convertirla en acciones concretas, no en comunicación de marketing.

6. **La adopción debe medirse de forma ligera al inicio.**
   Las primeras señales permitirán decidir qué contenidos reforzar, qué dudas atender y qué casos escalar.

---

## 19. Próximos pasos

### Corto plazo — Primeras 2 semanas

| Acción                                         | Objetivo                                       | Indicador inicial            |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------- |
| Publicar mensaje de bienvenida en General      | Activar oficialmente la comunidad              | Visualizaciones y reacciones |
| Lanzar primeros tips en Anuncios y Tips Ágiles | Despertar interés y mostrar utilidad inmediata | Reacciones y comentarios     |
| Publicar guía de licencia en Primeros Pasos    | Reducir fricción inicial                       | Preguntas resueltas          |
| Abrir pregunta inicial en Foro de Ayuda        | Detectar dudas e intereses                     | Comentarios recibidos        |
| Preparar primer caso real                      | Demostrar valor con ejemplo cercano            | Caso listo para publicar     |
| Configurar reservas 1:1                        | Activar soporte personalizado                  | Primeras reservas            |

### Mediano plazo — 4 a 8 semanas

| Acción                           | Objetivo                        | Indicador                         |
| -------------------------------- | ------------------------------- | --------------------------------- |
| Consolidar calendario editorial  | Generar hábito de consumo       | Publicaciones sostenidas          |
| Publicar casos de uso reales     | Aumentar credibilidad interna   | Comentarios, guardados, preguntas |
| Realizar primeras sesiones AMA   | Resolver bloqueos comunes       | Asistencia y preguntas            |
| Identificar embajadores internos | Amplificar adopción desde GCO   | Primer testimonio o caso interno  |
| Activar sesión con POs/Managers  | Detectar casos y extender valor — enfoque amplio de IA, no solo Copilot | Participación y casos sugeridos   |
| Planificar hackathon con Microsoft | Dinamizar la adopción con un reto práctico colaborativo (Madrid y Barcelona) | Formato, fechas y lista de asistentes definidos |

### Largo plazo — A partir de 8 semanas

| Acción                                 | Objetivo                                     | Indicador                             |
| -------------------------------------- | -------------------------------------------- | ------------------------------------- |
| Evaluar madurez de la comunidad        | Decidir continuidad o ajustes                | Actividad sostenida en Teams          |
| Evolucionar hacia contenidos avanzados | Introducir customización y mejores prácticas | Interés en temas avanzados            |
| Explorar Spec-Driven Development       | Abrir línea de evolución metodológica        | Validación directiva                  |
| Formalizar repositorio de aprendizajes | Convertir dudas en conocimiento reutilizable | FAQs, casos y materiales consolidados |
| Medir adopción con datos de uso        | Evaluar impacto real                         | Tendencia de uso en dashboard         |

---

## 20. Decisiones solicitadas a los directores del proyecto

Para avanzar de forma ordenada, se recomienda solicitar validación sobre cinco puntos:

1. **Validar el enfoque de adopción continua.**
   Confirmar que el objetivo es activar uso real y sostenido de Copilot, acompañando a los equipos independientemente de si han completado o no la formación técnica.

2. **Aprobar el uso del Teams como comunidad central de adopción.**
   Mantener los canales ya creados y definirlos como estructura oficial de comunicación y soporte.

3. **Confirmar la cadencia inicial de contenidos.**
   Propuesta: 2 publicaciones semanales en Anuncios y Tips Ágiles durante el arranque.

4. **Designar un referente de GCO para validación editorial.**
   Esta persona ayudaría a revisar contexto, priorizar temas y evitar contenidos poco aterrizados.

5. **Validar el modelo de soporte.**
   Foro, sesiones AMA y reservas 1:1 como mecanismos para resolver bloqueos reales.

---

## 21. Mensaje final para cierre de presentación

> La formación fue el punto de partida.
> La adopción empieza ahora.
>
> Para que GitHub Copilot genere valor en GCO, necesitamos convertirlo en una práctica visible, útil y acompañada.
>
> La propuesta activa una comunidad en Teams, contenidos breves, soporte continuo y casos reales para que Copilot deje de ser una herramienta conocida y empiece a ser una herramienta utilizada.

[1]: https://github.blog/changelog/label/copilot/?utm_source=chatgpt.com "Use Case: copilot - GitHub Changelog"
[2]: https://www.techradar.com/pro/that-is-unacceptable-in-a-professional-development-workflow-microsoft-acts-after-vs-code-gives-copilot-credit-for-work-a-human-developer-did?utm_source=chatgpt.com "'That is unacceptable in a professional development workflow': Microsoft acts after VS Code gives Copilot credit for work a human developer did"
