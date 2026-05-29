# Estrategia de Generación y Dinamización de Contenidos para la Adopción de GitHub Copilot
## Objetivo

Desarrollar una estrategia de comunicación, generación de contenidos y dinamización para facilitar la adopción de GitHub Copilot en el Grupo Catalana Occidente (GCO). 


## Plan de accion
### 1. Comunicación y generación de valor ágil
*   **Espacio central en Teams:** Activar un equipo exclusivo para la comunidad de adopción, difundiendo novedades y mensajes.
*   **Contenidos digeribles:** Crear tips, infografías y vídeos cortos sobre casos de uso reales de GCO, evitando artículos extensos.
*   **Design System propio:** Usar Claude (Cloud Design) para generar un sistema de diseño estructurado con la imagen corporativa de Occident.
*   **Entorno de simulación:** Montar un equipo de prueba en el entorno interno de Raona con ejemplos de contenidos y foros para que el cliente lo valide antes de su lanzamiento.

### 2. Soporte y acompañamiento continuo al usuario
*   **Sesiones 1:1 automatizadas:** Implementar una solución (tipo Bookings) para exponer los calendarios de los especialistas y permitir a los usuarios agendar tutorías de 15 a 30 minutos de forma autónoma.
*   **Sesiones "Ask Me Anything" (AMA):** Organizar encuentros periódicos abiertos donde cualquier usuario pueda entrar a plantear dudas en vivo.

### 3. Implicación de Product Owners / Managers
*   Involucrar a los responsables de área para que ayuden a detectar y visibilizar casos de éxito.
*   El enfoque con POs y managers es **más amplio que con developers**: no se limita a GitHub Copilot. Incluye otras herramientas de IA que pueden aplicar en su gestión diaria (análisis de tickets, documentación funcional, resumen de conversaciones, etc.).
*   Utilizar herramientas como **IAAudit** para entender su punto de partida y ayudarles a incorporar la inteligencia artificial en su propia gestión diaria.

### 4. Evolución del modelo de trabajo
*   Plantear como visión a futuro la exploración de la metodología **Spec-Driven Development** (desarrollo guiado por especificaciones), manejándolo como una evolución progresiva y no como un despliegue inmediato.


## Estrategia de contenidos

### Temas
* **Entorno técnico:** En GCO trabajan principalmente en Visual Studio. La idea es que aprendan a usar GitHub Copilot de forma nativa ahí, para luego ampliarlo a Visual Studio Code y la terminal (CLI). **⚠️ La ampliación a VS Code tiene implicaciones importantes para IT — requiere validación con Nibaldo antes de comunicarlo como paso confirmado.**
  
* **Estrategia de contenidos (De menos a más):** Hizo mucho énfasis en que debe empezar la comunicación por lo más básico.

  Sugirió recordarles a los usuarios que la herramienta corporativa es GitHub Copilot, mostrar métricas de productividad y enseñar casos de uso sencillos (como arreglar un bug).

* **Evitar tecnicismos prematuros:** Advirtió que si empiezan hablando de temas avanzados como configuraciones del archivo copilot-instructions.md, la carpeta .github, los Skills o el MCP, los usuarios "van a pasar completamente" del tema.

Aquí tienes la propuesta estructurada para la **Estrategia de Generación y Dinamización de Contenidos**, diseñada en formato de tabla Markdown para que puedas copiarla y pegarla directamente. 

# Estrategia de Contenidos para el Canal de MS Teams (Adopción GitHub Copilot)

Temas propuestos para el equipo de MS Teams, siguiendo un enfoque evolutivo ("de menos a más") y evitar la resistencia técnica de los usuarios.

Se deberá investigar y utilizar métricas generales (como las que proporciona el propio GitHub) o reportes de uso que demuestren *"qué tan productivo puedes llegar a ser si empiezas a incorporar la inteligencia artificial en tu flujo de trabajo"*, como parte de los mensajes clave.

### Fase 1: Concienciación y Actualidad
---
Esta primera línea de contenidos busca romper el hielo, vencer la resistencia inicial al cambio y mantener a los usuarios informados sobre el valor y la actualidad de la herramienta.

| Eje Temático | Objetivo del Contenido | Ejemplos de Publicaciones en Teams |
| :--- | :--- | :--- |
| **1. Recordatorio Oficial: La IA de GCO** | Posicionar a GitHub Copilot como la herramienta corporativa aprobada y combatir la resistencia inicial a su uso. | • Mensaje de impacto: *"Recuerda que tienes GitHub Copilot como tu inteligencia artificial para trabajar hoy"*. <br>• Guía rápida: Cómo confirmar si tienes la licencia activa o cómo contactar al equipo de arquitectura para solicitarla. |
| **2. Datos y Métricas de Productividad** | Demostrar con evidencia (investigada y armada para el proyecto) el valor real de incorporar la IA en el día a día. | • Infografía de impacto: Estadísticas de ahorro de tiempo en el desarrollo diario. <br>• Reportes de uso: Ejemplos visuales de cuánto aumenta la velocidad de resolución de tareas repetitivas al usar la herramienta en Visual Studio. |
| **3. Novedades, Actualizaciones y Tips de Uso** | Mantener a la comunidad al día con los cambios técnicos, administrativos y mejores prácticas operativas. | • **Noticias de la semana:** Impacto del reciente cambio de licencias en la organización. <br>• **Tips de eficiencia:** Buenas prácticas para redactar prompts que optimicen el consumo de *tokens* y reduzcan costos. <br>• **Radar de Actualizaciones:** Nuevas funcionalidades menores integradas en los IDEs (Visual Studio/VS Code). |


### Fase 2: Entorno Nativo y Primeros Pasos
---

Esta fase se centra en enseñar a los usuarios a utilizar la herramienta directamente en el entorno donde trabajan habitualmente, sin abrumarlos con configuraciones externas o herramientas adicionales.

| Eje Temático | Objetivo del Contenido | Ejemplos de Publicaciones en Teams |
| :--- | :--- | :--- |
| **1. El entorno nativo: Visual Studio** | Fomentar que los usuarios den el primer paso abriendo su entorno de desarrollo habitual y ubiquen la herramienta, entendiendo que no necesitan salir de su ecosistema para usar la IA. | • **Mini-guía visual:** Dónde encontrar e invocar a GitHub Copilot directamente dentro de la interfaz de Visual Studio. <br>• **Mensaje de activación:** *"Abre tu Visual Studio y empieza a interactuar: tu asistente ya está ahí"*. |
| **2. Modos de interacción: Agente vs. Pregunta** | Explicar de forma sencilla las diferentes maneras en que pueden comunicarse con Copilot dentro de Visual Studio para que entiendan cómo hacer consultas efectivas. | • **Tip rápido (Infografía):** Diferencias clave entre usar el "modo agente" y el "modo pregunta" desde el IDE. <br>• **Micro-vídeo:** Cómo hacerle una pregunta rápida al chat sin perder el contexto del código en el que están trabajando. |
| **3. Caso de uso real: Cómo resolver un *bug*** | Demostrar el valor práctico de la herramienta con un problema cotidiano, enseñando cómo la IA les ayuda a desbloquearse y solucionar errores rápidamente. | • **Short/Vídeo corto:** Paso a paso de cómo pedirle a Copilot (usando el modo agente) que identifique y resuelva un *bug* (o "*back*") específico en el código. <br>• **Píldora de 1 minuto:** *"¿Atascado con un error? Pega tu log en el chat de Copilot en Visual Studio y mira cómo te sugiere la solución"*. |

### Fase 3: Ampliando Horizontes (VS Code y Terminal)
---

> **⚠️ Importante:** La incorporación de VS Code tiene implicaciones para IT (instalación, permisos, configuración de entorno). Esta fase **no debe comunicarse ni ejecutarse** hasta confirmar con Nibaldo que el cambio ya está programado y la infraestructura lo soporta.

Esta fase tiene como objetivo sacar a los usuarios de su zona de confort inicial (Visual Studio) y mostrarles que la inteligencia artificial puede acompañarlos en todo el ecosistema de herramientas de la compañía.

| Eje Temático | Objetivo del Contenido | Ejemplos de Publicaciones en Teams |
| :--- | :--- | :--- |
| **1. Transición a Visual Studio Code** | Ampliar el uso de Copilot hacia Visual Studio Code, enseñando a los usuarios a interactuar con el asistente en este editor. | • **Guía rápida:** Cómo activar e iniciar sesión con GitHub Copilot en VS Code.<br>• **Tip visual:** Similitudes y diferencias del chat de Copilot entre Visual Studio y VS Code para una transición sin fricciones. |
| **2. GitHub Copilot en la Terminal (CLI)** | Introducir el uso de la IA directamente en la línea de comandos (Terminal) para agilizar la creación de comandos complejos o scripts. | • **Píldora de 1 minuto:** Qué es GitHub Copilot CLI y cómo te salva cuando olvidas un comando de consola. <br>• **Micro-vídeo:** Un ejemplo práctico pidiendo a la terminal que explique o genere un comando de *Git* enrevesado. |
| **3. Flujo de trabajo Multi-entorno** | Consolidar la idea de que pueden mantener su productividad en las tres herramientas propuestas (Visual Studio, VS Code y CLI) de forma fluida. | • **Infografía:** "Tu asistente en todos lados: Visual Studio vs. VS Code vs. Terminal". <br>• **Mensaje de valor:** *"No importa en qué herramienta estés escribiendo hoy, GitHub Copilot está ahí para ayudarte a codificar más rápido"*. |

### Fase 4: Customización y Configuración (Guiando al Agente)
---
Una vez que los usuarios dominan el entorno básico y multientorno, esta fase introduce la personalización avanzada. El objetivo es enseñarles a guiar el comportamiento de la IA mediante archivos específicos, sin abrumarlos, mostrando casos de uso muy concretos.

| Eje Temático | Objetivo del Contenido | Ejemplos de Publicaciones en Teams |
| :--- | :--- | :--- |
| **1. Guiar el comportamiento de la IA (`copilot-instructions.md`)** | Explicar la utilidad del archivo de customización `copilot-instructions.md` para establecer reglas claras de cómo debe responder o programar el agente. | • **Tip visual:** ¿Qué es `copilot-instructions.md` y por qué es tu mejor amigo para no repetirle siempre lo mismo a la IA? <br>• **Snippet / Píldora:** Ejemplo básico de cómo redactar instrucciones para un lenguaje de programación específico. |
| **2. Estructura de carpetas: `.github` y `.copilot`** | Enseñar dónde se deben ubicar estos archivos de configuración para que la herramienta los lea, ya sea a nivel de un proyecto general o a nivel individual del usuario. | • **Mini-guía (Infografía):** Diferencia entre configurar las instrucciones en la carpeta `.github` (para todo el proyecto) o en tu carpeta de usuario local (`C:\Users\tu_usuario\.copilot`). |
| **3. Casos de uso de customización: Documentación** | Demostrar con un ejemplo real cómo esta customización ahorra tiempo en tareas tediosas, como la documentación obligatoria bajo estándares corporativos. | • **Micro-vídeo:** Cómo configurar las instrucciones para obligar a GitHub Copilot a generar la documentación de tu código automáticamente con un formato específico. |