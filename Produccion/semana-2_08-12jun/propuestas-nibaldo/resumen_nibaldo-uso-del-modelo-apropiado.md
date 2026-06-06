Sí, en las capacitaciones se confirman los nombres exactos de los modelos que los desarrolladores de GCO tienen disponibles en su licencia. Durante las sesiones, Nibaldo pide a los asistentes que revisen la lista desplegable en sus editores (Visual Studio) o en la consola (CLI), y entre todos mencionan los modelos específicos con los que cuentan.

Nibaldo clasifica los modelos disponibles de GCO en dos grandes categorías según su coste de "tokens":

**1. Modelos Estándar (No consumen la cuota de tokens premium / multiplicador 0x):**
Son los modelos recomendados para tareas generales, rutinarias y consultas rápidas.
*   **GPT-4.1:** Es el modelo que viene configurado por defecto para muchos usuarios.
*   **GPT-4o**.
*   **GPT-5 mini**.

**2. Modelos Premium (Consumen la cuota mensual de tokens asignada al usuario):**
Razonan más profundo, tienen ventanas de contexto más grandes y se recomiendan para refactorizaciones, proyectos masivos o tareas complejas. Óscar, uno de los usuarios, confirma que tienen "como 8 o 9" modelos premium en su lista. 
*   **Familia OpenAI:** Cuentan con los modelos **GPT-5.1**, **GPT-5.2**, **GPT-5.3 (Codex)** (especializado en código) y el recientemente añadido **GPT-5.4**.
*   **Familia Anthropic (Claude):** Tienen disponibles **Claude Sonnet 4**, **Claude Haiku 4.5** y el **Claude Opus 4.6**, que es destacado como el más pesado, costoso y con mayor ventana de contexto (1 millón de tokens).
*   **Familia Google (Gemini):** Tienen **Gemini 3 Pro** (destacado por ser multimodal), **Gemini 3.3 Pro** y, durante las últimas sesiones, Nibaldo nota que les añadieron la versión **Gemini 3.5 Flash**.

**Un apunte importante sobre las licencias en GCO:**
Nibaldo les aclara que esta lista es completamente dinámica. Los modelos se actualizan constantemente; por ejemplo, se eliminaron versiones antiguas para dar paso a las nuevas. De hecho, en una sesión, un usuario (Diego) reporta que él solo ve en su lista los modelos GPT-4.0 y GPT-4.1. Ante esto, Nibaldo le indica que tiene una versión antigua en su cuenta y que debe contactar al administrador del proyecto (Jonathan) para que le actualice la licencia y le habilite el resto de modelos.

----

Basado en las formaciones de Nibaldo, el procedimiento en **Visual Studio** es el siguiente:

*   **Para cambiar el modelo:** Se realiza de manera muy sencilla. En el panel de chat de GitHub Copilot dentro de Visual Studio, existe un **menú desplegable (selector)**. Basta con hacer clic en él y elegir el modelo que deseas utilizar de la lista disponible (como GPT-4.1, Claude Opus, etc.).
*   **Para cambiar el nivel de razonamiento:** Nibaldo confirma explícitamente que **en Visual Studio no es posible cambiar el nivel de razonamiento**. Aunque los modelos más avanzados permiten configurar cuánto "esfuerzo" dedican a procesar una respuesta (Low, Medium, High, Extra High), esta característica no está soportada en la versión específica que utiliza GCO (Visual Studio 2022). 

Nibaldo aclara que si un desarrollador necesita forzar al modelo a utilizar un nivel de razonamiento mayor o menor para optimizar el consumo de *tokens*, tendrá que **recurrir a la terminal (CLI)** usando el comando `/models` o utilizar **Visual Studio Code**, ya que esos entornos sí tienen la opción habilitada.