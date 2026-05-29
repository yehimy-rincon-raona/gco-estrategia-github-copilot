# Ejemplos Prácticos de GitHub Copilot por Módulo y Sesión

A continuación se detalla módulo por módulo cada ejemplo práctico y caso de uso abordado durante las sesiones de formación, indicando la sesión específica de la que provienen.

## Módulo 1: Conceptos Básicos (Entendiendo la máquina)
Este módulo se impartió en la **Sesión 1** de los diferentes grupos y se centró en el uso del chat, *inline completions* y el *Agent Loop* básico.

*   **Generación de código para parseo y maquetación de datos (Sesión 1 - G6M):** Un usuario pegó la respuesta de un comando por línea de comandos en un comentario, y Copilot generó automáticamente todo el código necesario para parsear esa respuesta y rellenar las entidades. También se utilizó para generar datos ficticios masivos (ej. 30 nombres aleatorios o cuentas bancarias) para rellenar *grids* en maquetas de UX.
*   **Conversión de JSON a Copybook y refactorización DB2 (Sesión 1 - G4M):** Se le proporcionó a Copilot un JSON de entrada para que creara la estructura completa de una *copy* de COBOL ajustada. En otro ejemplo, se utilizó para refactorizar una consulta enorme de DB2 con múltiples `CASE` anidados y pasarla a formato COBOL.
*   **Generación de Scripts SQL desde Excel (Sesión 1 - G5M):** Un usuario proporcionó a Copilot un Excel con los campos y claves foráneas (*foreign keys*) de un nuevo modelo de datos de "tramitación", y el asistente generó los scripts de creación de las tablas y métodos de inserción de datos.
*   **Ejercicios de la sesión (Material Base - Sesión 1):** 
    *   **COBOL Evolutivo:** Seleccionar una tarea real de Jira, pedir a Copilot que explique el código existente, planificar la solución y validarla.
    *   **COBOL Bug Fixing:** Copiar un error de los logs de Elastic y pasarlo al chat junto con el código para diagnosticar y arreglar el fallo.

---

## Módulo 2: Uso Práctico por Entorno (Aprendiendo a conducir)
Este módulo se impartió en la **Sesión 2** y se enfocó en guiar el comportamiento del asistente mediante los archivos `.github/copilot-instructions.md` y archivos de instrucciones específicos.

*   **Generación de Documentación y Diagramas Mermaid (Sesión 2 - G1M, G3M, G6M):** Se crearon archivos de instrucciones como `docs.instructions.md` para obligar a Copilot a documentar proyectos bajo un estándar estricto,. En los ejemplos, se logró que Copilot generara un archivo `README.md` con tablas de contenido, explicación de arquitectura, stack tecnológico y diagramas de flujo interactivos creados con código **Mermaid** (generados directamente por la IA).
  
*   **Creación del Prompt "Analyze Jira" (Sesión 2 - G6M):** Se mostró cómo crear un prompt customizado (`analyze-jira.prompt.md`). El usuario copiaba la descripción de un ticket de Jira, la pegaba en el chat invocando este prompt (`/analyze-jira`), y Copilot analizaba automáticamente los archivos base del proyecto, identificaba riesgos y proponía un plan de implementación paso a paso.
*   **Automatización de sentencias y control de errores en COBOL (Sesión 2 - G4M, G5M):** Se utilizó Copilot para que, tras realizar una sentencia SQL en un programa COBOL, generara automáticamente el control de errores (evaluando el `SQLCODE`), moviendo el código de error a variables específicas y asignando el nombre del párrafo correspondiente,.
*   **Creación de capa de datos en .NET (Sesión 2 - G5M):** Se solicitó a Copilot crear una clase parcial vacía y luego se le instruyó en modo agente para que generara un método que permitiera insertar nuevos usuarios en la tabla "tramitación".

---

## Módulo 3: Personaliza tu Copilot (Skills, Agentes y MCP)
Este módulo se impartió en la **Sesión 3** y abarcó la creación de Agentes Personalizados (*Custom Agents*), *Skills* y la conexión a herramientas externas mediante el *Model Context Protocol* (MCP).

*   **Optimización de PL/SQL para migraciones masivas (Sesión 3 - G1M):** Se utilizó Copilot para optimizar un procedimiento almacenado de base de datos que procesaba millones de registros de pólizas y tardaba más de 24 horas. Para ello, se creó un archivo `plsql.instructions.md` que obligaba a la IA a priorizar el rendimiento y evitar *full scans* de tablas.

*   **Análisis de impacto en Copybooks COBOL (Sesión 3 - G3M):** Se configuraron instrucciones y prompts para que Copilot elaborara informes de impacto. El usuario indicaba una *copy* de COBOL y ciertos campos específicos, y la IA buscaba en múltiples programas dónde se usaban, documentando el impacto de modificarlos,.
*   **Conexión a Jira y Confluence vía MCP para Bug Fixing (Sesión 3 - G4M):** Se configuró el MCP de Atlassian. En el ejemplo práctico, se analizó un ticket real de Jira sobre "una prima que quedaba en negativo al aplicar un descuento del 10%". Un agente personalizado llamado `@analyst` utilizó el MCP para leer el ticket, luego accedió a Confluence (leyendo los IDs de las páginas documentadas) para entender la regla de negocio, analizó el código del repositorio y propuso la solución,,.
*   **Creación de Agentes y Skills Especializados (Material Base - Sesión 3):**
    *   **Agente `@reviewer`:** Se creó un agente enfocado en validar *naming*, principios SOLID, seguridad y rendimiento, entregando un *checklist* con hallazgos y correcciones,.
    *   **Agente `@cobol-expert`:** Un agente instruido para respetar siempre las columnas 7-72 de Mainframe, incluir *copybooks* con COPY y analizar cadenas de `PERFORM`,.
    *   **Skill COBOL Analyzer:** Implementación de una "habilidad" que se invoca para generar casos de test estándar analizando las entradas y salidas de un programa.