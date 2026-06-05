# Nombre del video: Configuración del entorno
## Primer paso para usar GitHub Copilot en Visual Studio

---

## Nota de producción — leer antes de grabar

Este documento cubre únicamente las secciones que deben grabarse: pantalla + voz. El resto del vídeo (apertura y cierre) se produce por separado.

**Cómo grabar:**
Se graba la pantalla mientras se habla de forma natural. No es necesario preocuparse por las pausas mientras carga el software o entre pasos — todo se ajusta en edición. La opción que mejor funciona es grabar en continuo, sin cortes, aunque haya silencios. La sincronización de audio y video se resuelve en postproducción.

**Datos sensibles:**
Los datos sensibles se ocultan en edición. Para no pasar nada por alto, se solicita indicar qué información aparece en pantalla durante la grabación que deba difuminarse: correo corporativo, nombre de usuario, nombre de proyecto u otros que se consideren relevantes.

---

### Sección 1 · Instalación desde el canal corporativo

**Voz en off:**
> "El ejecutable de Visual Studio está disponible en el canal corporativo `[CONFIRMAR: nombre o ruta del canal corporativo donde GCO tiene el ejecutable]`. Desde ahí lo abrimos y la pantalla del instalador se carga automáticamente.
>
> Seleccionamos `[CONFIRMAR con Nibaldo: qué edición de Visual Studio usan los equipos de GCO]` y dejamos que el proceso avance. No hay que hacer nada más: cuando la instalación termine, el entorno ya estará listo."

**Qué grabar:**
Se graba el recorrido completo en tres momentos:
1. Navegar hasta el lugar donde está el ejecutable `[CONFIRMAR]` — que quede claro de dónde se obtiene la versión correcta.
2. Abrir el ejecutable y mostrar la pantalla del instalador en marcha con la barra de progreso.
3. Pantalla de finalización de la instalación — el software instalado y listo.

---

### Sección 2 · Vinculación de la cuenta corporativa

**Voz en off:**
> "Con Visual Studio instalado, el siguiente paso es vincular la cuenta corporativa. Accedemos al perfil de usuario, iniciamos sesión con la cuenta corporativa de GitHub y confirmamos que la sesión queda activa.
>
> Una vez vinculada la cuenta, abrimos el panel de GitHub Copilot Chat desde la parte derecha. Si aparece el campo para escribirle, GitHub Copilot ya está disponible y listo para usar."

**Qué grabar:**
Se graba el proceso completo de vinculación desde el inicio: acceder al menú de cuenta o perfil de usuario, realizar el flujo de inicio de sesión con la cuenta corporativa de GitHub, y confirmar que la sesión queda activa. A continuación, mostrar que el panel GitHub Copilot Chat está visible con el campo para escribir disponible. Es importante que todo el recorrido sea visible en pantalla, no solo el estado final con la sesión ya iniciada.

---

### Sección 3 · Validación del proyecto de prueba

**Voz en off:**
> "Con la cuenta vinculada, abrimos o creamos un proyecto sencillo de prueba. No se busca programar todavía una funcionalidad real; solo confirmar que Visual Studio está operativo, que el proyecto carga correctamente y que GitHub Copilot puede trabajar dentro del contexto del IDE."

**Qué grabar:**
Crear o abrir un proyecto sencillo en Visual Studio. Se muestra el archivo `Program.cs` o cualquier archivo de código abierto dentro del proyecto. No hace falta hacer nada con él — basta con que se vea que el proyecto carga y que GitHub Copilot está activo en ese contexto.

---

### Sección 4 · Ajuste de la terminal

> **Nota:** Esta sección está planteada desde la estrategia de adopción. Si desde la experiencia técnica se considera que hay algo que debería mostrarse de otra manera, que falta algún paso importante, o que el enfoque no es el más útil para los equipos de GCO — los aportes son bienvenidos. Esta es una base, no una instrucción cerrada.
>
> **Referencia de sesión:** G6M Sesión 1 ~31:06–31:53 / G5M Sesión 1 ~34:08

**Voz en off:**
> "El siguiente punto es revisar la terminal. Si el flujo de trabajo requiere ejecutar comandos, scripts o validaciones desde consola, conviene confirmar que se está usando el perfil correcto — especialmente PowerShell 7 cuando esté disponible en el equipo.
>
> Esta validación ayuda a evitar errores por diferencias entre versiones de terminal."

**Qué grabar:**
Abrir la terminal integrada de Visual Studio y mostrar cómo verificar la versión activa con el comando `$PSVersionTable.PSVersion`. Si no se dispone de esa grabación, se indica — se puede resolver con una placa de texto en edición.

---

### Sección 5 · Preparar instrucciones para GitHub Copilot

> **Nota:** Igual que la sección anterior — si desde la experiencia técnica se considera que el enfoque debería ser distinto o más completo para los equipos de GCO, los aportes son bienvenidos. Esta es la propuesta base.
>
> **Referencia de sesión:** G5M Sesión 1 ~48:18–49:40 / G2M Sesión 1 ~54:00

**Voz en off:**
> "Una vez validado el entorno, el siguiente paso es darle contexto a GitHub Copilot. Esto se hace desde un archivo de instrucciones del proyecto, donde se definen reglas básicas: idioma de respuesta, estilo de documentación, convenciones de código o criterios técnicos del equipo.
>
> La idea es sencilla: cuanto mejor contexto tenga GitHub Copilot, más útil será su respuesta."

**Qué grabar:**
Mostrar la creación de la carpeta `.github` dentro de un proyecto y el archivo `copilot-instructions.md` dentro de ella — o una referencia a ese archivo si ya existe en algún proyecto de ejemplo. Si no se dispone de esa grabación, se indica — se puede resolver en edición.

---