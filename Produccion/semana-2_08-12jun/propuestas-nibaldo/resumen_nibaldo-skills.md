Sí. En las sesiones, **Skills aparece como un tema avanzado de la Sesión 3**, muy conectado con **agentes, MCP, prompts custom y flujos de trabajo automatizados**. No lo presenta como algo para usar ya por todos, sino como una capacidad que existe y que más adelante puede formar parte de flujos más potentes.

## Resumen ejecutivo

Nibaldo no define Skills como “prompts”, sino como **habilidades / herramientas específicas que pueden tener los agentes**. La idea central es:

> Un agente puede tener o invocar capacidades específicas para hacer tareas concretas: consultar documentación, aplicar una lógica técnica, resolver un tipo de caso, trabajar con COBOL, .NET, backend, Jira, Confluence, etc.

---

## 1. Qué son los Skills según Nibaldo

La definición más directa aparece en G1M Sesión 3:

> “Aparece el concepto skills, que skills son básicamente herramientas y cosas que se pueden hacer.”
> “Me interesa que sepan: oye, puedo crear mis propios prompts, puedo crear mis propios agentes, puedo crear mis propios skills.”
>

Es decir, para él lo importante en ese punto no es que memoricen la estructura técnica, sino que entiendan que **Copilot permite crear piezas reutilizables**:

* prompts propios;
* agentes propios;
* skills propios.

La frase clave es esta: **“puedo crear mis propios skills”**. No lo baja todavía a una guía paso a paso para todos.

---

## 2. Skills como habilidades particulares de los agentes

En G4M Sesión 3, Nibaldo lo explica con más claridad dentro de una demo avanzada con Arnau:

> “Los skills también son habilidades en particular que tienen los agentes.”
> “La estructura de un skill se parece mucho a un prompt, se parece mucho a un agente (…) pero hace ciertas cosas en particular.”
>

Aquí hay una distinción importante:

| Elemento          | Cómo lo explica Nibaldo                                                          |
| ----------------- | -------------------------------------------------------------------------------- |
| **Prompt custom** | Instrucción reutilizable para no escribir lo mismo muchas veces.                 |
| **Agente**        | Una entidad que puede ejecutar o coordinar tareas.                               |
| **Skill**         | Una habilidad concreta que puede tener un agente para hacer una cosa específica. |

La forma más simple de decirlo para Teams sería:

> **Un Skill es una capacidad específica que le das a un agente para que sepa hacer mejor una tarea concreta.**

---

## 3. Skills dentro de agentes especializados

En la demo de G4M Sesión 3 se muestra un flujo donde hay un **agente orquestador** y otros agentes especializados. Arnau explica que el agente principal puede llamar a otros agentes más especializados en COBOL o .NET, y que esos agentes tienen Skills:

> “Por detrás tiene otros agentes un poco más especializados en COGOL, en Net, que son llamados en caso de que el agente orquestador (…) sea necesario. Y estos agentes disponen de skills.”
>

Esto es muy relevante para GCO porque conecta directamente con la realidad de los equipos:

* un agente general recibe la tarea;
* si detecta que necesita COBOL, llama a un agente COBOL;
* si detecta que necesita .NET, llama a un agente .NET;
* esos agentes pueden tener Skills concretos para ejecutar pasos específicos.

No lo plantea como “un bot mágico”, sino como una forma de **organizar capacidades por especialidad técnica**.

---

## 4. Ejemplo concreto: Skill para backend .NET que consulta Confluence

En esa misma sesión, Nibaldo pide abrir un Skill para enseñar su estructura. El ejemplo que aparece está orientado a backend .NET:

> “Este skill está enfocado en lo que es desarrollo backend para .NET (…) que va a buscar una documentación de Confluence…”
>

Arnau complementa diciendo que dentro del Skill tiene asociados los IDs de páginas de Confluence, porque hay mucha documentación y así se acota dónde buscar:

> “Aquí tengo asociado el ID de las páginas que hay dentro de Confluence porque hay tanta documentación…”
>

Esto es importante: el Skill no es solo “una instrucción bonita”. En el ejemplo, sirve para **llevar al agente a consultar documentación concreta**, no a buscar de forma genérica.

Para GCO, esto se podría traducir así:

> Un Skill podría ayudar a que un agente COBOL consulte solo la documentación corporativa correcta antes de proponer cambios.

---

## 5. Skills dentro de un flujo con Jira, Confluence y MCP

La explicación de Skills aparece dentro de una demo más amplia donde el agente:

* analiza un ticket;
* aplica cambios;
* ejecuta tests;
* añade comentarios al ticket;
* cambia el estado del ticket;
* usa MCP para conectarse con Jira;
* puede apoyarse en agentes especializados y Skills.

En la demo se muestra que el agente puede añadir un comentario al ticket y moverlo a revisión usando herramientas MCP de Jira. Después se explica que por detrás hay agentes especializados con Skills. 

La lectura correcta es:

> Skills no aparece aislado. Aparece como una pieza dentro de un ecosistema más avanzado: agente principal + subagentes + MCP + documentación + validación humana.

---

## 6. Skills como parte de una estructura más amplia en `.github`

En G5M Sesión 3, Nibaldo explica que el mundo es más amplio que solo `copilot-instructions.md`. Dice que se puede construir un repositorio con distintos componentes:

> “Podríamos construir un repositorio en donde se manejen diferentes tipos de componentes como son los prompts customs, agentes y skills.”
> “Me interesa que sepan qué hay. Qué cosas tiene este GitHub Copilot y qué cosas se pueden llegar a hacer.”
>

Esto confirma que, para él, Skills forma parte de la **customización avanzada** de Copilot, junto con:

* custom instructions;
* prompt files;
* agentes;
* MCP;
* skills.

No lo posiciona como un contenido inicial para adopción, sino como una evolución.

---

## 7. Skills no es prioridad inmediata para todos

Nibaldo insiste varias veces en que no busca que salgan expertos en MCP, agentes o Skills. Lo importante es que sepan que existen y qué se puede llegar a hacer:

> “El objetivo de aquí de esta formación en general nunca fue que ustedes salieran de aquí expertos en (…) MCP y agentes y cosas por el estilo.”
> “Me interesa que sepan qué hay.”
>

Y en G1M Sesión 3 dice algo parecido:

> “No voy a entrar en detalle con esto porque no quiero que solo aprendan de memoria.”
>

Esto nos da una guía clara para Teams: **Skills no debería salir todavía como contenido principal de Fase 1 o Fase 2**. Primero conviene consolidar:

1. uso de Copilot en Visual Studio;
2. contexto correcto;
3. modo chat vs modo agente;
4. prompts reutilizables;
5. luego, recién, Skills.

---

## 8. Skills también aparece como algo disponible en terminal / VS Code

En G5M Sesión 3, Nibaldo explica que Visual Studio 2022 está más limitado, pero que VS Code y la terminal permiten trabajar con más capacidades:

> “Puedes trabajar con skills, con MCP, con agentes, con cosas.”
> “Visual Studio Code lo tienen (…) a una versión válida (…) y la terminal está actualizada a casi la última versión. Por lo tanto es mejor, es más dinámico.”
>

También se ve que, al confiar en una carpeta de proyecto, Copilot detecta un entorno cargado con varios componentes:

> “Este entorno tiene cargado ciertas cosas. Por ejemplo, te está diciendo que tiene un custom instruction, un MCP server, un skill y un agent.”
>

Esto refuerza que Skills vive dentro de una configuración de proyecto o entorno, no como una funcionalidad suelta.

---

## 9. Qué NO dice Nibaldo sobre Skills

Esto es importante para no venderlo mal en los canales:

* **No dice explícitamente que Skills sea una herramienta de ahorro de tokens.**
* **No dice que todos los developers deban crear Skills ya.**
* **No da una guía paso a paso completa para construir Skills desde cero.**
* **No lo presenta como contenido básico de adopción.**

Lo que sí dice es que Skills permite **crear capacidades específicas**, especialmente dentro de agentes, y que puede conectarse con documentación o procesos concretos.

---

## Conclusión para el canal de Teams

Yo lo bajaría así:

> **Skills no es el primer paso. Es una capa avanzada para cuando ya tenemos claro cómo usar Copilot, cómo darle contexto y cómo trabajar con prompts o agentes. Sirve para empaquetar una habilidad concreta dentro de un agente: por ejemplo, consultar documentación de Confluence, aplicar reglas backend .NET o apoyar un flujo COBOL específico.**

Para contenido inmediato, no publicaría todavía “cómo crear Skills”. Lo dejaría para Fase 4 como una pieza tipo:

**Título:**
`Skills: cuando Copilot deja de ser genérico y empieza a trabajar con tus reglas`

**Mensaje:**
Un Skill es una habilidad específica que puede usar un agente. No hace magia: le da una capacidad concreta, por ejemplo consultar documentación corporativa o aplicar reglas técnicas de un entorno. En GCO esto podría servir más adelante para flujos COBOL, .NET o Jira, pero primero consolidemos lo básico: usar bien Copilot en Visual Studio, darle buen contexto y validar siempre el resultado.

----

**Visual Studio 2022 (la versión que utiliza GCO) NO soporta actualmente el uso de Skills ni la integración con servidores MCP**. Estas características avanzadas solo están disponibles si se utiliza **Visual Studio Code** o la **terminal (Copilot CLI)**.

Nibaldo lo detalla de la siguiente manera durante las sesiones:

**Sobre las Skills:**
*   Nibaldo aclara repetidamente que las Skills (paquetes de conocimiento especializado que permiten encadenar herramientas o llamar recursos adjuntos) no pueden ser utilizadas ni ejecutadas desde Visual Studio.
*   A pesar de esta limitación, **su recomendación es crear los archivos de las Skills de todos modos** (estructurando la carpeta `.github/skills/nombre-del-skill/` y su respectivo archivo `SKILL.md`). Al crearlos y dejarlos en el repositorio, los desarrolladores pueden usarlos e iterarlos hoy mismo desde VS Code o la CLI, y el trabajo ya estará adelantado y listo para cuando Visual Studio 2022 reciba la actualización que los soporte de forma nativa.

**Sobre los servidores MCP (Model Context Protocol):**
*   Durante una demostración donde un usuario (Óscar) intenta conectar la IA a Microsoft SQL Server, Nibaldo le confirma explícitamente que **la versión actual de Visual Studio 2022 que tienen "no acepta MCP"**. 
*   Aunque a nivel teórico la documentación muestra que Visual Studio 2022 soporta MCP a partir de la versión 17.14 (añadiendo el archivo `.vs/mcp.json`), en el entorno restringido de GCO esta capacidad no está disponible. Para lograr conectar Copilot a herramientas externas como Jira, Confluence o bases de datos, los usuarios están obligados a migrar temporalmente a Visual Studio Code o usar la CLI.

**El motivo de esta brecha:**
Nibaldo enfatiza que esto es estrictamente un **problema de desfase de versiones**. Mientras que la CLI y VS Code están actualizados a versiones muy recientes (2026) que permiten habilitar ecosistemas agénticos completos, herramientas extra y Skills, los usuarios de GCO están anclados a Visual Studio 2022, el cual está limitado y no soporta estas características modernas de Inteligencia Artificial.

---

Sí, **`@workspace`** (que en la versión en español de Visual Studio aparece como **`@área de trabajo`**) funciona en Visual Studio, pero Nibaldo advierte de manera muy enfática que **es "peligroso" usarlo con soluciones grandes o proyectos pesados de COBOL**.

Aunque es el comando más potente porque busca en todo tu proyecto, usarlo en soluciones gigantescas genera varios problemas críticos que Nibaldo detalla en las sesiones:

*   **Saturación de la Ventana de Contexto:** Nibaldo explica que la IA tiene un espacio de memoria limitado (como un "cajón") llamado ventana de contexto. Al usar `@workspace`, el sistema intenta meter *todos* los proyectos y archivos cargados en el explorador dentro de ese cajón. 
*   **Colapso y Errores:** Si tienes una solución masiva (por ejemplo, con 10 o 20 subproyectos o miles de líneas de código COBOL), la ventana de contexto se llenará de inmediato. Esto provocará que el modelo procese muy lento, se "maree" dando respuestas incoherentes, o directamente arroje un error en la consola indicando que se ha superado el límite máximo de *tokens* y no puede contestar.

Para manejar proyectos grandes o código legacy complejo (como COBOL) en Visual Studio, Nibaldo da **cuatro recomendaciones clave**:

1.  **Evitar `@workspace` ciegamente:** Si la solución tiene muchos proyectos integrados, Nibaldo aconseja **no usar** `@workspace`, o usarlo con extrema precaución.
2.  **Trabajar "más fino" usando `#file` (Almohadilla):** En lugar de cargar todo el espacio de trabajo, recomienda usar la almohadilla (`#`) para referenciar única y exclusivamente los archivos COBOL (`.cbl`, `.cpy`) que el modelo realmente necesita para entender y resolver la tarea, ahorrando *tokens* y dándole un contexto preciso.
3.  **Cargar solo lo necesario:** En lugar de abrir la solución gigante con todos sus proyectos, recomienda abrir en el "Explorador de soluciones" únicamente el proyecto específico en el que se va a trabajar.
4.  **Cambiar a un Modelo Premium (Opus 4.6):** Si es estrictamente necesario hacer un análisis masivo cruzado de todo un proyecto grande de COBOL, Nibaldo indica que se debe cambiar a un modelo con una ventana de contexto enorme, específicamente el **Claude Opus 4.6** (que soporta hasta 1 millón de *tokens*). Sin embargo, advierte que esto consumirá la cuota mensual de *tokens* premium muy rápidamente.