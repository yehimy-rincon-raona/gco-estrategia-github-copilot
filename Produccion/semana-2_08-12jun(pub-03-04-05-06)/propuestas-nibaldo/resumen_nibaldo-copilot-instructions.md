Sí, **Nibaldo sí clarificó este punto durante las sesiones de formación**, confirmando explícitamente que el archivo `copilot-instructions.md` dentro de la carpeta `.github/` **funciona exactamente igual tanto en Visual Studio como en Visual Studio Code**.

Aunque la duda es comprensible porque Nibaldo suele hacer las demostraciones prácticas usando Visual Studio Code (ya que es el entorno que él prefiere y tiene más customizado), él hace pausas específicas para aclarar que la configuración aplica a ambos IDEs de la misma manera:

*   Al explicar cómo estructurar la carpeta, Nibaldo indica literalmente: *"Voy a estar en el Visual Studio Code para mostrar el contenido, **pero se hace igual en el Visual Studio, no es diferente**, ¿vale? Es decir, dentro de tu proyecto... vas a añadir siempre la carpeta punto GitHub"*.
*   En otro momento de la sesión, al hablar sobre cómo el entorno lee estas instrucciones, tiene un lapsus y se corrige a sí mismo reafirmando la paridad de ambas herramientas: *"En este contexto, dentro de Visual Studio, perdón, Visual Studio Code, **que dentro de Visual Studio funciona igual**"*.
*   Además, el material de apoyo de la presentación respalda esta afirmación. La diapositiva sobre "El sistema de personalización" señala que el archivo `.github/copilot-instructions.md` contiene las reglas permanentes del repositorio y que **"Se aplican SIEMPRE a cada prompt, en cada entorno"**.

**En conclusión:** Puedes dar por confirmada esa tarea pendiente. La creación de la carpeta oculta `.github` en la raíz de la solución y la inclusión del archivo `copilot-instructions.md` para guiar el comportamiento de la IA es un procedimiento estándar que funciona de manera idéntica en Visual Studio 2022. Las únicas limitaciones que Nibaldo señala exclusivas para Visual Studio 2022 respecto a VS Code son sobre el uso de *Skills* y servidores *MCP*, pero no sobre los archivos de instrucciones.

---
Sí, durante las formaciones se discuten y definen varias restricciones específicas que GCO debe incluir en sus archivos de instrucciones (como `copilot-instructions.md` o en instrucciones específicas por lenguaje) para limitar y guiar el comportamiento de la IA. 

Aquí te detallo las principales restricciones estructuradas por área:

**1. Restricciones en Bases de Datos (SQL)**
*   Durante las sesiones, los propios desarrolladores de GCO señalan que su sistema **no les permite utilizar la sentencia `LIKE`**. 
*   Nibaldo indica que esto se debe plasmar en un archivo `sql.instructions.md` para prohibir explícitamente a Copilot el uso de `LIKE`, así como también restringir sentencias destructivas como `DELETE` o `TRUNCATE`.

**2. Restricciones para COBOL**
*   **Formato estricto:** Copilot tiene prohibido generar código fuera del rango de las **columnas 7 a 72**.
*   **Comentarios:** Todo comentario debe llevar obligatoriamente un asterisco (`*`) exactamente en la columna 7.
*   **Modificación de archivos:** La IA tiene la restricción de **no modificar *copybooks*** sin antes listar qué otros programas los utilizan o sin avisar del impacto que tendrá dicho cambio.
*   **Invenciones:** Copilot no debe inventar *DD names* ni asumir entornos de compilación, debiendo preguntar primero al usuario.

**3. Restricciones para .NET**
*   Se le prohíbe a Copilot sugerir el uso de APIs del antiguo .NET Framework, obligándolo a centrarse únicamente en **C# 12 y .NET 8**.
*   Se exige el uso obligatorio de **inyección de dependencias** y la aplicación del patrón `async/await` en absolutamente toda operación de I/O (entrada/salida).

**4. Restricciones de Seguridad (Globales)**
*   Se prohíbe tajantemente a la IA el *hardcodeo* (escritura directa en el código) de *secrets*, contraseñas, tokens o cadenas de conexión.
*   Copilot siempre debe aplicar la regla de **validar los *inputs*** (entradas) del usuario en sus sugerencias de código.