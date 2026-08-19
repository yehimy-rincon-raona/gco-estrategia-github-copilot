# Skills — Qué son, por qué se usan y cuándo tiene sentido usarlas
> Documento informativo · Material base para elaboración de contenidos
> Contexto: GitHub Copilot y asistentes de IA de código · Agosto 2026
> Fuente: material enviado por Esteban Serrano (Raona) — ver `Reuniones/seguimientos-semanales/resumen-de-reunion_03-08-26_raona-interno.md`

**Fuentes del documento original:**
- Formación GitHub Copilot — Capítulo 3 "Personaliza tu Copilot: Skills · Agentes · MCP · Memory" (marzo 2026).
- Plantilla de repositorio `copilot-template-gco`, con dos skills reales implementados: `dotnet-review` y `cobol-analyzer`.
- Documentación y repositorios públicos: `github/awesome-copilot` y `dotnet/skills`.

---

## 1. Qué es una skill

### 1.1 Definición
Una skill es un paquete de conocimiento que le enseña a un asistente de IA cómo realizar una tarea concreta siguiendo tu forma de trabajar. En la práctica es una carpeta dentro del repositorio que contiene un archivo obligatorio llamado `SKILL.md` y, opcionalmente, recursos de apoyo.

Tres formas de explicarlo, de menor a mayor detalle:
- **En una frase:** una carpeta con un archivo Markdown que le enseña al agente cómo hacer una tarea a tu manera, y que el agente encuentra y activa por su cuenta cuando esa tarea aparece.
- **En un párrafo:** conocimiento especializado, versionado en el repositorio, escrito en lenguaje natural, que se carga de forma progresiva (solo lo necesario, solo cuando hace falta) y que se comparte automáticamente con todo el equipo al estar dentro del control de versiones.
- **Mediante analogía:** si el agente tiene herramientas integradas (leer el código, editar archivos, ejecutar comandos en el terminal), esas herramientas son sus brazos y sus ojos. Las skills son los libros de recetas que le enseñan cómo usar esos brazos para una tarea concreta. Un agente sin skills sabe hacer cosas; con skills sabe hacerlas como las hace tu equipo.

### 1.2 Anatomía
Una skill es una carpeta. Dentro, un único archivo es obligatorio:

```
.github/skills/dotnet-review/
├── SKILL.md              ← obligatorio
└── references/
    └── checklist.md      ← recurso opcional, se carga solo bajo demanda
```

Elementos que puede contener:

| Elemento | Obligatorio | Para qué sirve |
|----------|-------------|-----------------|
| `SKILL.md` | Sí | Metadata (`name` y `description`) + las instrucciones del proceso. |
| `references/` | No | Documentación de apoyo: checklists largos, convenciones detalladas, tablas de referencia. |
| `sample_codes/` | No | Ejemplos de código que el agente puede tomar como patrón. |
| `scripts/` | No | Scripts que el agente puede ejecutar como parte del proceso. |

La metadata del `SKILL.md` tiene solo dos campos esenciales:
- **`name`:** el identificador de la skill. Es también el nombre con el que se invoca manualmente.
- **`description`:** la descripción de qué hace y, sobre todo, cuándo debe usarse. Es el campo más importante de toda la skill (ver apartado 9.1).

### 1.3 Ejemplo completo y real: una skill de code review
Este es el contenido íntegro de un skill funcional. No hay nada más: son unas pocas líneas de Markdown.

```markdown
---
name: dotnet-review
description: >
  Revisa código .NET contra las convenciones del equipo. Usa este skill cuando
  te pidan hacer code review, revisar un PR, validar calidad de código C#, o
  buscar problemas de seguridad, rendimiento o mantenibilidad en .NET.
---

# Code Review .NET

Revisa código C#/.NET siguiendo el checklist de calidad del equipo.

## Proceso
1. Lee el archivo o cambios a revisar.
2. Ejecuta `dotnet build` para verificar que compila.
3. Si hay tests, ejecuta `dotnet test`.
4. Aplica el checklist de references/checklist.md.
5. Genera un informe con hallazgos priorizados.

## Formato de salida
### Veredicto
Se puede mergear / Necesita cambios / Rechazado
### Hallazgos
Para cada problema: severidad, archivo y línea, descripción, fix propuesto.
### Tests sugeridos
Edge cases o escenarios sin cobertura.

## Prioridad de revisión
Seguridad > Correctness > Rendimiento > Mantenibilidad > Estilo
```

Obsérvense tres cosas: el proceso está numerado (el agente lo sigue en orden), el formato de salida está definido (todo el equipo recibe informes con la misma estructura) y hay un criterio de priorización explícito. Eso es exactamente lo que normalmente vive en la cabeza de la persona más veterana del equipo.

### 1.4 Segundo ejemplo: conocimiento legacy
El caso de uso más ilustrativo no es .NET, sino el código antiguo. Esta skill analiza programas COBOL de mainframe:

```markdown
---
name: cobol-analyzer
description: >
  Analiza programas COBOL para entender su estructura, flujo de datos y
  dependencias. Usa este skill cuando te pidan explicar un programa COBOL,
  analizar impacto de cambios, listar PERFORMs, identificar copybooks, o
  diagnosticar errores en COBOL Enterprise para mainframe z/OS.
---

## Proceso de análisis
1. Lee el programa COBOL completo.
2. Identifica las DIVISION principales y su contenido.
3. Mapea los PERFORMs con sus dependencias.
4. Lista los copybooks usados (COPY statements).
5. Analiza el flujo de datos (WORKING-STORAGE → PROCEDURE).

## Reglas
- SIEMPRE respetar columnas 7-72 en cualquier código generado.
- NO inventar DD names — preguntar si no están claros.
- Si un copybook se comparte con otros programas, AVISAR del impacto.
```

Las tres reglas del final son conocimiento que normalmente solo tienen dos o tres personas en una organización, que se transmite oralmente y que se pierde cuando esas personas se van. Escrito en un archivo de texto, lo aplica cualquiera desde el primer día.

### 1.5 Qué NO es una skill
- **No es un prompt guardado.** Un prompt hay que recordarlo, copiarlo y pegarlo. Una skill se activa sola cuando el agente detecta que la tarea corresponde.
- **No es documentación pasiva.** Un documento en la intranet hay que leerlo; una skill se aplica.
- **No es una configuración global.** Una regla que aplica siempre no es una skill (ver apartado 3).
- **No es una integración con sistemas externos.** Una skill contiene conocimiento estático; no lee tus tickets ni consulta tu base de datos (para eso está MCP, apartado 3.6).
- **No es un modelo ni un ajuste del modelo.** No cambia la inteligencia del asistente, cambia el contexto con el que trabaja.

---

## 2. Cómo funciona por dentro

### 2.1 Carga progresiva (progressive loading)
Es el mecanismo que explica casi todas las ventajas de las skills. El contenido no se carga entero: se carga por capas, y solo se avanza a la siguiente si hace falta.

| Capa | Qué se carga | Cuándo |
|------|---------------|--------|
| 1. Metadata | `name` + `description` (aproximadamente 100 palabras) | Siempre visible para el agente |
| 2. Cuerpo | Las instrucciones completas del `SKILL.md` | Solo si el agente determina que la skill es relevante |
| 3. Recursos | `references/`, `sample_codes/`, `scripts/` | Solo si el proceso los necesita en ese momento |

Consecuencia práctica: se pueden tener muchas skills en un repositorio sin penalizar el rendimiento ni consumir la ventana de contexto. En reposo, cada skill pesa poco más que su descripción. Solo se paga el coste de la que efectivamente se usa.

### 2.2 Auto-descubrimiento e invocación manual
Una skill se puede activar de dos maneras:
- **Automáticamente:** el agente lee la `description` de todas las skills disponibles y activa la que corresponde a lo que se le está pidiendo. El usuario no tiene que saber que la skill existe.
- **Manualmente:** escribiendo `/nombre-de-la-skill` en el chat, se fuerza su uso.

El auto-descubrimiento es la diferencia funcional más importante frente a otros mecanismos de personalización, y depende por completo de cómo esté escrita la `description`.

### 2.3 Dónde se guardan

| Ámbito | Ubicación | Alcance |
|--------|-----------|---------|
| Proyecto | `.github/skills/` | Se commitea al repositorio: todo el equipo la tiene al hacer pull. |
| Personal | `~/.copilot/skills/` | Solo del usuario, en su máquina. No se comparte. |

### 2.4 Soporte por entorno
Según el material de formación (marzo de 2026):
- **Compatible:** Visual Studio Code, línea de comandos (CLI) y agente de codificación.
- **No compatible en ese momento:** Visual Studio 2022. La recomendación de la formación era crear la skill igualmente (es un simple archivo Markdown) y usarla desde VS Code o CLI, dejándola lista para cuando el soporte llegue.

> Dato volátil: verificar el estado actual antes de afirmarlo públicamente.

### 2.5 Estándar abierto
El formato de skills no es exclusivo de una herramienta: es un estándar abierto que funciona en varios asistentes (Copilot, Claude Code, Cursor y otros). La implicación de fondo es relevante: el conocimiento del equipo no queda atrapado en el producto de un proveedor concreto. Si mañana el equipo cambia de herramienta, las skills se llevan consigo.

---

## 3. Dónde encaja una skill: el mapa completo
Una skill es uno de los cinco niveles de personalización disponibles. Entender los cinco es lo que permite decidir correctamente cuándo una skill es la herramienta adecuada y cuándo no.

### 3.1 Los cinco niveles

| Nivel | Dónde vive | Invocación | Cuándo se carga | Ideal para |
|-------|-----------|------------|-------------------|------------|
| Instructions | `copilot-instructions.md`, `*.instructions.md` | Automática, siempre | En cada petición | Convenciones, stack, reglas globales |
| Prompt files | `.github/prompts/*.prompt.md` | Manual con `/nombre` | Solo al invocarlo | Tareas simples repetitivas |
| Skills | `.github/skills/<nombre>/SKILL.md` | `/nombre` o automática | Progresiva: metadata → cuerpo → recursos | Tareas complejas con recursos |
| Agents | `.github/agents/*.md` | Manual con `@nombre` | Mientras se use, durante la sesión | Roles persistentes, orquestación |
| MCP | `mcp.json` | Automática, la decide el agente | Cuando necesita la herramienta externa | Conectar con servicios externos |

### 3.2 Skills frente a tools (herramientas)
Es la confusión más habitual y conviene resolverla primero, porque son cosas distintas.

| | Tools (herramientas integradas) | Skills (paquetes de conocimiento) |
|---|---|---|
| Qué son | Capacidades que el agente ya tiene: buscar en el código, crear y modificar archivos, ejecutar comandos, leer URLs, consultar issues y PRs. | Conocimiento especializado que define cómo hacer una tarea concreta. |
| Quién las crea | Nadie: vienen incorporadas en el producto. | Tú, o tu equipo. |
| Analogía | Los brazos y los ojos. | Los libros de recetas. |

En resumen: las tools definen qué puede hacer el agente; las skills definen cómo lo hace el equipo.

### 3.3 Skill frente a prompt file

| | Prompt file | Skill |
|---|---|---|
| Invocación | Solo manual, con `/nombre` | Manual o automática por descripción |
| Recursos adjuntos | No | Sí: documentos, ejemplos, scripts |
| Carga | Completa al invocarlo | Progresiva |
| Ideal para | Tareas simples y concretas | Procesos de varios pasos con material de apoyo |

Los prompt files no están obsoletos. Para una tarea simple que no necesita recursos, siguen siendo la opción correcta y más ligera.

### 3.4 Skill frente a agente
Una skill es una tarea; un agente es un rol. La diferencia clave es la persistencia: un agente mantiene su papel durante toda la conversación. Si se le pide a un agente revisor que revise un cambio y después se le pregunta por los tests, sigue razonando como revisor. Una skill se aplica a la tarea que la ha activado y no arrastra ese rol.

Ambos se combinan: un agente puede apoyarse en skills para ejecutar partes concretas de su trabajo.

### 3.5 Skill frente a instructions
Las instructions se inyectan en absolutamente todas las peticiones: son las reglas que siempre aplican (el stack, el idioma de respuesta, la arquitectura). Existen en dos variantes: globales para todo el repositorio, o asociadas a un tipo de archivo mediante un patrón (por ejemplo, reglas que solo se activan al editar archivos `.cs` o `.cbl`).

**Regla de decisión:** si es una norma que debe cumplirse siempre, es una instruction. Si es un procedimiento que se ejecuta cuando toca, es una skill.

### 3.6 Skill frente a MCP
MCP (Model Context Protocol) es el protocolo que conecta al asistente con servicios externos: el gestor de incidencias, el repositorio remoto, un navegador, un sistema de ficheros. Es, en la analogía habitual, el conector universal.

Diferencia esencial: una skill aporta conocimiento estático (lo que está escrito en ella); MCP aporta acceso a datos vivos. Si lo que se necesita es leer el ticket número 1234 de verdad, eso es MCP, no una skill. Con frecuencia se usan juntos: MCP trae el dato, la skill dice qué hacer con él.

### 3.7 Skill frente a memoria
La memoria del asistente guarda preferencias y contexto personales entre sesiones ("prefiero respuestas concisas", "esta semana trabajo en el módulo de facturación"). Es individual y temporal. Una skill es del repositorio, compartida y estable.

**Regla de decisión resumida:** lo que es del equipo o del repositorio va a instructions o skills; lo personal o temporal va a memoria.

---

## 4. Por qué existen: los problemas que resuelven
Las skills no aparecen por una moda de producto. Resuelven cuatro problemas concretos y bastante reconocibles en cualquier equipo que use asistentes de IA a diario.

### 4.1 La repetición
Sin skills, cada persona repite la misma explicación en cada conversación: cómo se revisan aquí los pull requests, qué convenciones de nombres se usan, qué se comprueba antes de dar por buena una función. Es un coste pequeño multiplicado por muchas veces al día, todos los días.

### 4.2 La inconsistencia
Cada persona formula sus peticiones de forma distinta, y por tanto obtiene resultados distintos. El resultado depende de quién esté delante del teclado y de lo bien que sepa pedir las cosas. Una skill fija el procedimiento y el formato de salida: la misma tarea produce el mismo tipo de resultado, la pida quien la pida.

### 4.3 El conocimiento que no está escrito
En todos los equipos hay conocimiento crítico que solo tienen una o dos personas: qué copybooks están compartidos y no se pueden tocar a la ligera, por qué ese servicio tiene un reintento raro, qué hay que mirar siempre antes de desplegar. Ese conocimiento no está en ningún sitio legible, ni para las personas nuevas ni para la IA. Una skill es un formato razonable para escribirlo, porque obliga a expresarlo como procedimiento y porque, a diferencia de la documentación tradicional, se usa sola.

### 4.4 El coste del contexto
La ventana de contexto es un recurso limitado y caro. No se puede meter el manual completo del equipo en cada petición, y hacerlo además degrada la calidad de la respuesta al diluir lo relevante. La carga progresiva resuelve exactamente eso: el conocimiento está disponible pero solo entra en juego cuando la tarea lo requiere.

> Idea que resume el conjunto, y que cierra la formación: el mejor asistente no es el que tiene el modelo más potente, sino el que tiene el contexto más preciso.

---

## 5. Beneficios concretos

| Beneficio | En qué consiste | Por qué importa |
|-----------|------------------|------------------|
| Auto-descubrimiento | El agente activa la skill al detectar la tarea, sin que nadie la invoque. | No hay que recordar comandos ni saber que la skill existe. Se usa incluso quien no la escribió. |
| Carga progresiva | Coste de contexto casi nulo mientras no se usa. | Permite tener muchas skills sin degradar el rendimiento ni gastar contexto. |
| Recursos adjuntos | Puede llevar checklists largos, ejemplos de código y scripts. | Un prompt no puede arrastrar un checklist de 200 líneas; una skill sí, y solo lo carga cuando hace falta. |
| Versionado y compartido | Vive en el control de versiones, se revisa en pull request y se propaga con un pull. | El conocimiento evoluciona con el proyecto y llega a todo el equipo sin esfuerzo de difusión. |
| Consistencia | Mismo procedimiento y mismo formato de salida para todos. | Reduce la varianza entre perfiles junior y senior; los resultados dejan de depender de quién pregunta. |
| Estándar abierto | El mismo archivo funciona en varias herramientas de IA. | El conocimiento del equipo no queda ligado a un proveedor concreto. |
| Onboarding | Una persona nueva hereda el criterio del equipo desde el primer día. | Acorta el tiempo hasta que alguien es productivo sin necesitar tutela continua. |

> Recomendación: no acompañar estos beneficios de porcentajes de productividad si no se han medido internamente. Ante un público técnico, una cifra sin respaldo resta más credibilidad de la que suma.

---

## 6. Para qué se usan: casos de uso
Ejemplos concretos de skills que tienen sentido en prácticamente cualquier equipo de desarrollo.

### 6.1 Revisión de código
El caso canónico. Codifica el checklist de calidad del equipo, el orden de prioridades (seguridad por encima de correctness, y ambos por encima del estilo) y el formato del informe. Puede incluir la ejecución de la compilación y de los tests como parte del proceso.

### 6.2 Análisis de código heredado
Explicar un programa antiguo, mapear sus llamadas internas, listar dependencias y avisar de efectos colaterales. Es donde el retorno es más alto, porque el conocimiento es escaso, está concentrado en pocas personas y es difícil de transmitir.

### 6.3 Análisis de impacto previo a un cambio
Antes de tocar una entidad, una tabla o un contrato: dónde se usa hoy, qué depende de ello, qué hay que revisar. Convierte en procedimiento algo que normalmente es intuición.

### 6.4 Incorporación de personas al proyecto
Cómo se levanta el entorno en local, qué servicios hacen falta, qué falla siempre la primera vez y cómo se resuelve. Es documentación de onboarding que se aplica en lugar de leerse.

### 6.5 Convenciones de API o de dominio
Formato de errores, versionado, paginación, objetos de transferencia, validaciones. Se apoya bien en ejemplos de código dentro de la propia skill.

### 6.6 Generación de pruebas
Qué framework se usa, cómo se nombran los tests, qué estructura siguen, qué casos límite hay que cubrir siempre en este dominio.

### 6.7 Procedimientos operativos
Publicación de versiones, despliegues, diagnóstico a partir de registros de log. Aquí es donde tiene sentido incluir scripts dentro de la skill.

### 6.8 Documentación
Generar documentación de un módulo con la estructura y el nivel de detalle que el equipo espera, en lugar de la estructura genérica que produciría el asistente por defecto.

---

## 7. Cuándo usar una skill
Una skill es la respuesta correcta cuando se cumplen varias de estas condiciones:

1. La tarea se repite. No necesariamente a diario, pero sí de forma recurrente. Una skill es infraestructura: solo sale rentable si se va a usar más de una vez.
2. El procedimiento tiene varios pasos y un orden que importa.
3. Existe material de apoyo: un checklist, unas convenciones, ejemplos de referencia. Ese material es demasiado extenso para meterlo en cada petición.
4. Interesa que se active sola, sin que quien la use tenga que saber que existe.
5. El resultado debe tener siempre el mismo formato, para que sea comparable y revisable.
6. El conocimiento es del equipo, no de una persona, y conviene que esté escrito y versionado.
7. Hay diferencia de criterio entre personas del equipo al hacer esa tarea, y esa diferencia genera problemas.

**Regla rápida de decisión:**
- ¿Es una norma que aplica siempre? → instruction.
- ¿Es una tarea simple, sin material de apoyo, que se invoca a mano? → prompt file.
- ¿Es un proceso de varios pasos, con recursos, que quiero que se active solo? → skill.
- ¿Es un rol que debe persistir durante la conversación? → agente.
- ¿Necesito datos reales de un sistema externo? → MCP.
- ¿Es una preferencia personal mía? → memoria o ajustes del entorno.

---

## 8. Cuándo NO usar una skill
Igual de importante que lo anterior. Estos son los casos en los que una skill es la herramienta equivocada y solo genera trabajo y confusión.

### 8.1 Cuando la regla aplica siempre
"Respondemos en español", "usamos Clean Architecture", "la solución es .NET 8". Eso no es una tarea, es un marco permanente: va en las instructions globales, que se inyectan en cada petición. Meterlo en una skill significa que solo se aplicará cuando el agente decida activarla, es decir, casi nunca.

### 8.2 Cuando la regla depende del tipo de archivo
"En COBOL, columnas 7 a 72"; "en .NET, async en toda operación de entrada/salida". Para eso existen las instructions con ámbito por patrón de archivo, que se activan automáticamente al editar ese tipo de fichero. Es más fiable y más barato que una skill.

### 8.3 Cuando es una preferencia personal
"Prefiero respuestas cortas", "dame siempre un ejemplo". Eso es memoria o configuración individual del entorno. No debe entrar en el repositorio del equipo: no es criterio compartido, es gusto propio.

### 8.4 Cuando la tarea se hace una sola vez
Para algo puntual, basta con escribir bien la petición. Crear, revisar, commitear y mantener una skill para un uso único es puro coste.

### 8.5 Cuando la tarea es trivial y no necesita recursos
Si cabe en tres líneas y no lleva checklists ni ejemplos, un prompt file cumple igual con menos ceremonia. Las skills no sustituyen a los prompt files en todos los casos.

### 8.6 Cuando lo que se necesita son datos en vivo
Leer una incidencia real, consultar el estado de un repositorio, navegar por una web. Una skill contiene texto estático; no puede consultar sistemas. Eso es MCP.

### 8.7 Cuando se necesita un rol que persista
Si la conversación va a ser larga y se quiere mantener un punto de vista estable (analista, revisor, experto en un área), eso es un agente. Una skill no arrastra rol de una interacción a otra.

### 8.8 Cuando el procedimiento no está claro ni entre las personas
Este es el caso más importante y el que más se pasa por alto. Si el equipo no tiene consenso sobre cómo se hace una cosa, escribir una skill no crea el consenso: industrializa el desacuerdo y lo convierte en norma sin que nadie lo haya decidido. Primero se acuerda el procedimiento, después se escribe.

### 8.9 Cuando el conocimiento cambia constantemente
Si el procedimiento cambia cada dos semanas, la skill quedará desactualizada y, lo que es peor, seguirá aplicándose con confianza. Una skill obsoleta es más peligrosa que no tener skill, porque nadie la cuestiona.

---

## 9. Cómo se escribe una buena skill

### 9.1 La descripción es el 80 % del trabajo
La `description` es lo único que el agente tiene siempre a la vista. Es el criterio con el que decide si activa la skill o no. Una skill excelente con una descripción vaga no se usará jamás.

Descripción insuficiente:
```yaml
description: Skill de review
```
El agente no sabe de qué tecnología, ni para qué situaciones, ni con qué palabras la pedirá la gente.

Descripción correcta (la real del ejemplo del apartado 1.3):
```yaml
description: >
  Revisa código .NET contra las convenciones del equipo. Usa este skill cuando
  te pidan hacer code review, revisar un PR, validar calidad de código C#, o
  buscar problemas de seguridad, rendimiento o mantenibilidad en .NET.
```

La fórmula que funciona:
- Qué hace la skill, en una frase.
- La expresión "usa esta skill cuando…" seguida de las situaciones concretas.
- Los términos que la gente escribe de verdad, incluidos sinónimos y abreviaturas: "PR", "pull request", "revisar", "code review", "calidad de código".

Si una skill no se activa nunca por sí sola, el problema casi siempre está aquí.

### 9.2 Una skill, una tarea
Una skill que hace revisión, genera tests y además documenta no se activará bien en ninguno de los tres casos, porque su descripción tendrá que ser vaga para cubrirlos todos. La granularidad correcta es una tarea por skill. Si dos skills se solapan y compiten, es señal de que hay que redefinir sus ámbitos.

### 9.3 Estructura del cuerpo
Las secciones que aparecen en las skills bien escritas:
- **Proceso:** los pasos numerados, en orden. El agente los sigue.
- **Formato de salida:** qué debe devolver y con qué estructura. Es lo que garantiza que el resultado sea comparable entre personas.
- **Reglas o restricciones:** lo que nunca debe hacer, y lo que debe avisar. Suele ser la parte con más valor real, porque recoge el conocimiento aprendido a base de errores.
- **Enlaces a los recursos**, para que el agente los cargue solo cuando llegue a ese paso.

### 9.4 Recursos: qué va dentro del SKILL.md y qué fuera
El `SKILL.md` debe ser el índice y el procedimiento; el detalle largo va a `references/`. Si el `SKILL.md` tiene cuatrocientas líneas, se ha anulado la carga progresiva y se está pagando el coste completo cada vez.

### 9.5 Cómo se prueba
- Invocarla manualmente con `/nombre` y comprobar que el resultado es el esperado.
- Comprobar que aparece en el listado de skills cargadas (en CLI, con `/skills list`).
- Probar el auto-descubrimiento: pedir la tarea con palabras naturales, sin nombrar la skill, y verificar que se activa sola. Si no se activa, revisar la descripción.
- Pedir a otra persona del equipo que la use. Si necesita explicación previa, la skill no está terminada.

---

## 10. Errores frecuentes

| Error | Consecuencia | Corrección |
|-------|---------------|------------|
| Descripción genérica o ambigua | La skill nunca se auto-descubre; queda muerta en el repositorio. | Reescribir con la fórmula del apartado 9.1, incluyendo las palabras reales que usa la gente. |
| Skill monolítica que hace de todo | No se activa correctamente en ningún caso. | Dividir: una tarea, una skill. |
| Todo el contenido dentro del `SKILL.md` | Se pierde la ventaja de la carga progresiva. | Mover el detalle largo a `references/` y enlazarlo desde el proceso. |
| Secretos, credenciales o rutas internas dentro de la skill | Se commitean al repositorio y viajan al proveedor del modelo. | Nunca incluirlos. Complementar con un archivo de exclusiones que impida enviar ficheros sensibles al contexto. |
| Escrita por una persona sin acuerdo del equipo | O no la usa nadie, o la usan sin saber qué criterio les está imponiendo. | Revisar las skills en pull request, igual que el código. |
| Instrucciones vagas ("revisa bien el código") | El agente improvisa y el resultado no es reproducible. | Pasos concretos, criterios explícitos, formato de salida definido. |
| No se actualiza cuando cambia el procedimiento | Se aplica un criterio obsoleto con total confianza. | Asignar propietario y revisarla cuando cambie lo que describe. |

---

## 11. Riesgos y límites
- **Contenido sensible:** todo lo que está en una skill se envía al proveedor del modelo como parte del contexto. No deben incluirse credenciales, cadenas de conexión, datos de producción ni información de cliente. Conviene acompañarlo de un archivo de exclusiones que evite que ficheros sensibles (configuraciones de producción, certificados, claves) entren en el contexto.
- **Skills generadas automáticamente:** existen herramientas que generan skills a partir de documentación oficial. Son útiles como punto de partida, pero una skill sin revisar se propaga a todo el equipo y adquiere autoridad sin que nadie la haya validado. Siempre revisar antes de commitear.
- **Ejecución de scripts:** una skill puede incluir scripts que el agente ejecuta. Eso amplía mucho lo que puede hacer y también la superficie de riesgo. Deben revisarse con el mismo criterio que cualquier código que se ejecuta en el entorno de desarrollo.
- **Exceso de configuración:** es posible pasarse. Veinte skills mal delimitadas producen solapamientos, activaciones incorrectas y desconfianza. Es preferible empezar con dos que funcionen bien.
- **Falsa sensación de rigor:** que exista una skill de revisión no significa que el código esté revisado. La skill aplica un criterio, no sustituye el juicio de una persona.
- **Dependencia de versión del producto:** qué entornos soportan skills, cómo se invocan y dónde se ubican son detalles que cambian entre versiones.

---

## 12. La dimensión de equipo
Este es el ángulo menos técnico y probablemente el más relevante para responsables de equipo.

En el momento en que una skill se commitea al repositorio, el conocimiento deja de pertenecer a una persona y pasa a pertenecer al proyecto. Eso tiene tres implicaciones:

1. Las skills forman parte del criterio de calidad del equipo, y por tanto deben revisarse en pull request como cualquier otro cambio. No son un truco individual de productividad.
2. Reducen la varianza entre perfiles. El criterio deja de depender de quién esté delante del teclado, lo que es especialmente valioso en equipos con mucha rotación o con personas nuevas.
3. Cambian la naturaleza de la documentación. La documentación tradicional necesita que alguien la busque y la lea; una skill se aplica sola. Es la diferencia entre conocimiento disponible y conocimiento efectivo.

> Complemento habitual: un archivo `AGENTS.md` en la raíz del repositorio, que recoge el contexto y las convenciones del proyecto en un formato reconocido por varias herramientas de IA (Copilot, Claude Code, Cursor, Gemini CLI, Windsurf). Sirve para mantener la consistencia cuando no todo el equipo usa el mismo asistente.

---

## 13. Ecosistema: no hace falta empezar de cero

| Recurso | Qué es | Dónde |
|---------|--------|-------|
| `dotnet/skills` | Skills oficiales de .NET publicadas por Microsoft, del propio equipo de la plataforma. Instalables como plugins. | github.com/dotnet/skills |
| `awesome-copilot` | Colección comunitaria curada por GitHub: skills, agentes, instructions y prompts. | github.com/github/awesome-copilot |
| Microsoft Skill Creator | Una skill que genera otras skills: investiga en la documentación oficial mediante MCP y produce un `SKILL.md` con sus recursos y ejemplos. Incluye plantillas para SDK/librería, servicio de Azure, framework y API/protocolo. | Disponible dentro de `awesome-copilot` |

La instalación consiste simplemente en copiar la carpeta de la skill al directorio de skills del repositorio propio y adaptarla a las convenciones del equipo.

---

## 14. Preguntas frecuentes

| Pregunta | Respuesta |
|----------|-----------|
| ¿No es lo mismo que las instructions? | No. Las instructions se inyectan en cada petición; una skill se carga solo cuando aplica. Por eso se pueden tener muchas skills y conviene tener pocas instructions. |
| ¿Cuántas skills puedo tener? | Muchas, precisamente por la carga progresiva: en reposo cada una pesa poco más que su descripción. El límite práctico es el solapamiento entre descripciones. |
| ¿Qué pasa si dos skills compiten por la misma tarea? | Es síntoma de descripciones mal delimitadas. Hay que fusionarlas o separar claramente sus ámbitos. |
| ¿Sustituyen a los prompt files? | Los cubren en los casos complejos. Para tareas simples sin recursos, el prompt file sigue siendo la opción adecuada. |
| ¿Funcionan fuera de una herramienta concreta? | El formato es un estándar abierto adoptado por varios asistentes. Conviene verificar el alcance exacto en cada momento. |
| ¿Puede una skill ejecutar código? | Sí, puede incluir scripts como parte del paquete. Requiere el mismo nivel de revisión que cualquier código ejecutable. |
| ¿No es documentación con otro nombre? | Es documentación que se ejecuta. La diferencia práctica es que la documentación hay que leerla y la skill se aplica sola. |
| ¿Sirve para código antiguo o poco habitual? | Es precisamente donde más aporta, porque el conocimiento es escaso y está poco documentado. |
| ¿Quién debería escribirlas? | Quien tenga el criterio, normalmente los perfiles más veteranos. Pero deben revisarse en equipo: al commitearse se convierten en norma. |

---

## 15. Glosario

| Término | Definición |
|---------|------------|
| Skill | Paquete de conocimiento (`SKILL.md` más recursos opcionales) que enseña al agente cómo hacer una tarea. Lo crea el equipo. |
| Tool (herramienta) | Capacidad integrada del agente: buscar en el código, editar archivos, ejecutar comandos, leer URLs. No la crea el usuario. |
| Instructions | Reglas que se inyectan en cada petición. Globales o asociadas a un tipo de archivo. |
| Prompt file | Tarea concreta invocable manualmente. Ejecución única, sin recursos adjuntos. |
| Agente | Rol especializado que persiste durante la sesión de conversación. |
| MCP (Model Context Protocol) | Protocolo para conectar el asistente con servicios externos y datos en vivo. |
| Memoria | Preferencias y contexto personales que persisten entre sesiones. |
| Carga progresiva | Mecanismo por capas: metadata, después cuerpo, después recursos. Es lo que hace que las skills sean baratas en contexto. |
| Auto-descubrimiento | Capacidad del agente de activar una skill por sí mismo a partir de su descripción. |
| Ventana de contexto | Cantidad limitada de información que el modelo puede tener presente en una petición. |
| `AGENTS.md` | Archivo en la raíz del repositorio con contexto y convenciones, reconocido por varias herramientas de IA. |
