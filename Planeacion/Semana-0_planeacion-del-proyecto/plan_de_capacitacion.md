# Plan de Capacitación y Cronograma: Adopción de GitHub Copilot en GCO

El objetivo de la formación es que los asistentes entiendan qué es la IA, dejen de verla como una caja negra y aprendan a personalizar su comportamiento (modo agente) para integrarla en sus flujos de trabajo diarios.

## Plan de Capacitación (Contenidos y Módulos)

### Capítulo 1 – Conceptos Básicos (Entendiendo la máquina)
* **Introducción a los LLMs:** Qué son los Modelos de Lenguaje Grande (LLMs), cómo predicen tokens y el concepto de que la IA "no piensa, sino que predice" en base a un entrenamiento.
* **Prompting Técnico Estructurado:** Cómo pedir correctamente las cosas usando la fórmula: *Rol + Contexto + Tarea + Restricciones + Formato*.
* **Ventana de Contexto:** Qué información "ve" el modelo (archivos abiertos, historial, *System prompt*) y cómo gestionarla para evitar alucinaciones.
* **Ecosistema Copilot 2026:** Entornos de trabajo (IDE como Visual Studio/VS Code, la CLI y GitHub.com).
* **Atajos y Referencias:** Uso de comandos esenciales como `@workspace`, `@terminal`, `#file`, y `#selection` para acotar el contexto en el chat.

### Capítulo 2 – Uso Práctico por Entorno (Aprendiendo a conducir)
* **El sistema de personalización (Jerarquía de Instructions):** Cómo guiar el comportamiento de Copilot mediante archivos específicos en la carpeta reservada `.github`.
* **Archivo `copilot-instructions.md`:** Creación de instrucciones globales para el proyecto/repositorio (ej. obligar a comentar en español, usar Clean Architecture, reglas de COBOL o .NET).
* **Archivos de exclusión:** Uso de `.copilotignore` por motivos de seguridad y contexto limpio (para que la IA no lea contraseñas ni archivos innecesarios).
* **Resolución de Casos Reales (Agent Loop):** Ciclo de trabajo usando el modo Agente (Preguntar -> Planificar -> Generar -> Validar) para resolver tickets reales o generar documentación técnica.

### Capítulo 3 – Personaliza tu Copilot (Skills, Agentes y MCP)
* **Prompt Files:** Plantillas reutilizables (`.prompt.md`) para tareas diarias (ej. generar tests, analizar código, revisar tickets de JIRA).
* **Skills:** Creación de habilidades especializadas. Diferencia entre "Tools" (capacidades built-in de Copilot) y "Skills" (paquetes de conocimiento que crea el usuario).
* **Multi-Agents (Roles especializados):** Asignación de roles persistentes (ej. experto COBOL, analista funcional, revisor) a través de archivos `.md` en la carpeta `agents/`.
* **Model Context Protocol (MCP):** Configuración para conectar Copilot a herramientas externas y fuentes de la verdad (bases de datos, Atlassian/Jira, Confluence, Elastic).
* **Copilot Memory:** Preferencias personales que el agente guarda entre sesiones.


## Cronograma

| Grupo | Sesión | Fecha | Hora |
| :--- | :--- | :--- | :--- |
| **Grupo 1 (G1M)** | Sesión 2 | 17 de marzo de 2026 | 09:59 a.m. |
| | Sesión 3 | 24 de marzo de 2026 | 02:00 p.m. |
| **Grupo 2 (G2M)** | Sesión 1 | 9 de marzo de 2026 | 10:00 a.m. |
| | Sesión 2 | 18 de marzo de 2026 | 10:00 a.m. |
| | Sesión 3 | 25 de marzo de 2026 | 10:00 a.m. |
| **Grupo 3 (G3M)** | Sesión 1 | 12 de marzo de 2026 | 10:00 a.m. |
| | Sesión 2 | 20 de marzo de 2026 | 10:00 a.m. |
| | Sesión 3 | 26 de marzo de 2026 | 10:00 a.m. |
| **Grupo 4 (G4M)** | Sesión 1 | 31 de marzo de 2026 | 08:59 a.m. |
| | Sesión 2 | 8 de abril de 2026 | 01:00 p.m. |
| | Sesión 3 | 14 de abril de 2026 | 09:00 a.m. |
| **Grupo 5 (G5M)** | Sesión 1 | 30 de marzo de 2026 | 09:00 a.m. |
| | Sesión 2 | 9 de abril de 2026 | 10:00 a.m. |
| | Sesión 3 | 15 de abril de 2026 | 09:01 a.m. |
| **Grupo 6 (G6M)** | Sesión 1 | 31 de marzo de 2026 | 01:00 p.m. |
| | Sesión 2 | 10 de abril de 2026 | 09:00 a.m. |

*Nota: No se dispone de la información correspondiente a la Sesión 1 del Grupo 1, ni a la Sesión 3 del Grupo 6 en los documentos analizados.*