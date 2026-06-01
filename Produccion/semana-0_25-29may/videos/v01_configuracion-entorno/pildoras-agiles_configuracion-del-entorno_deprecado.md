# Video 1: Configuración del entorno
## **storytelling y guion estructurado**

El tono del storytelling busca romper el hielo y empatizar con el desarrollador, demostrando que configurar la IA es un proceso rápido que no lo sacará de su entorno habitual.

### Título del Vídeo: "Prepara tu copiloto: Tu primer vuelo en Visual Studio"
**Concepto (Storytelling):** El desarrollador es el piloto. Un copiloto no puede ayudar si no se sube a la cabina correcta y no conoce las reglas del vuelo. En menos de 2 minutos, el piloto aprenderá a sentar a su copiloto (verificar login), revisar los controles (PowerShell 7) y entregarle el manual de vuelo (archivo de instrucciones).

---

### Estructura del Guion y Guía de Producción

| Parte del Vídeo | Storytelling / Guion Sugerido (Voz en Off o Textos) | Fuente y Minuto de Revisión (Transcipciones) | Información para Producción (Visuales / Edición) |
| :--- | :--- | :--- | :--- |
| **1. Gancho e Introducción (0:00 - 0:15)** | *"GitHub Copilot ya está aquí. Es tu nuevo compañero de equipo, pero para que te ayude a codificar más rápido, primero debemos asegurarnos de que esté bien sentado en tu entorno. Puedes usarlo en Visual Studio, VS Code o tu Terminal. Hoy, lo configuraremos en tu casa: Visual Studio."* | **Fuente:** Sesión 1 G4M / Sesión 1 G5M.<br>**Minuto ref:** ~30:38 (G4M) / ~27:30 (G5M). | **Visual:** Animación rápida del logo de GitHub Copilot entrando al IDE de Visual Studio. Mostrar iconos de los 3 entornos, destacando Visual Studio. Tono dinámico y cercano. |
| **2. Verificación y Login (0:15 - 0:35)** | *"Paso 1: ¿Está encendido? Abre tu Visual Studio. Mira en la esquina superior. ¿Ves el icono de GitHub Copilot en verde? ¡Perfecto! Si no lo ves, haz clic, agrega tu cuenta corporativa (tu usuario `_GCO`) y autoriza el inicio de sesión. Tu copiloto ya está a bordo."* | **Fuente:** Sesión 1 G5M, / Sesión 1 G2M,.<br>**Minuto ref:** ~31:48 a 33:00 (G5M). | **Visual:** Hacer un "Zoom In" a la esquina superior derecha de Visual Studio. Resaltar con un círculo verde el icono de Copilot. Mostrar un pantallazo rápido del login con el sufijo `_GCO`. |
| **3. Ajuste de la Terminal (0:35 - 0:55)** | *"Paso 2: Afinando los controles. Si vas a usar la terminal, olvida el icono azul clásico. Ve a la configuración de la terminal y elige el perfil de PowerShell 7 (el del icono *****). Guárdalo como predeterminado. Copilot necesita los mejores motores para volar."* | **Fuente:** Sesión 1 G6M, / Sesión 1 G5M,.<br>**Minuto ref:** ~31:06 a 31:53 (G6M) / ~34:08 (G5M). | **Visual:** Captura de pantalla de la terminal. Flecha roja tachando el PowerShell azul y flecha verde apuntando al **PowerShell ***** (versión 7)**. Mostrar menú de configuración desplegable. |
| **4. El Manual de Vuelo (0:55 - 1:20)** | *"Paso 3: Las reglas del juego. Copilot es inteligente, pero tú eres el jefe. En la raíz de tu proyecto, crea una carpeta oculta llamada `.github`. Dentro, crea el archivo `copilot-instructions.md`. Aquí le dirás si debe documentar en español, qué arquitectura usar o cómo nombrar variables."* | **Fuente:** Sesión 1 G5M, / Sesión 1 G2M.<br>**Minuto ref:** ~48:18 a 49:40 (G5M) / ~54:00 (G2M). | **Visual:** Grabación de pantalla (screencast) creando la carpeta `.github` y el archivo `copilot-instructions.md`. Mostrar un ejemplo rápido de texto: *"Responde siempre en español. Usa Clean Code"*. |
| **5. Cierre y Llamado a la Acción (1:20 - 1:30)** | *"Y listo. Tu entorno está configurado y tu copiloto sabe cómo te gusta trabajar. En el próximo tip, te enseñaremos a pedirle tu primera tarea real. ¡A codificar!"* | **Fuente:** Estrategia evolutiva ("de menos a más"). | **Visual:** Logo de GCO / Raona. Mostrar un mensaje en pantalla que invite al usuario a buscar los archivos `.md` de ejemplo en el foro de Teams. |

### 🎬 Recomendaciones extra para la Etapa de Producción:
*   **Design System:** Utiliza los colores corporativos de Occident/GCO para las transiciones y los textos superpuestos.
*   **Evita tecnicismos profundos:** Tal como pidió Nibaldo, el guion menciona `.github` de forma natural como un "manual de vuelo", sin entrar a explicar conceptos como "Model Context Protocol (MCP)" o "Skills" en esta etapa inicial.
*   **Formatos Ágiles:** Asegúrate de que la edición sea rápida. Si un paso (como el de PowerShell 7) se puede mostrar en 3 segundos con una buena captura de pantalla, no lo alargues.