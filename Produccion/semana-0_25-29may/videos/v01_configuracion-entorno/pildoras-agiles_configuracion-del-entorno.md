# Video 1: Configuración del entorno

## Storytelling y guion estructurado — versión ajustada

El objetivo de este primer vídeo es mostrar que GitHub Copilot no empieza cuando se le pide código, sino cuando el entorno está correctamente preparado. La pieza debe transmitir seguridad, control y utilidad práctica, sin entrar todavía en configuraciones avanzadas.

### Título del vídeo

**Configura tu entorno: primer paso para usar Copilot en Visual Studio**

### Concepto narrativo

Copilot funciona mejor cuando trabaja dentro del entorno correcto: la herramienta instalada desde el canal corporativo, la cuenta adecuada, el IDE validado y una terminal preparada. Este vídeo acompaña al usuario en esa primera comprobación, para evitar bloqueos iniciales y asegurar que Copilot esté listo antes de usarlo en una tarea real.

---

## Estructura del guion y guía de producción

---

### 1. Gancho e introducción · 0:00 – 0:15

> "GitHub Copilot puede acompañarte en distintos entornos de trabajo: Visual Studio, Visual Studio Code y también desde la terminal. (11:03 seg)
>
> En este primer vídeo vamos a empezar por Visual Studio, porque es uno de los entornos principales para los equipos de desarrollo. (07:12 seg)
>
> ~~ Una vez instalado desde el canal corporativo correspondiente, el primer paso es comprobar que todo está listo para usar Copilot correctamente." (09:18 seg)~~

**Fuente:** Sesión 1 G4M / Sesión 1 G5M · **Minuto ref:** ~30:38 / ~27:30

**Visuales**
Mostrar logos o pantallas breves de Visual Studio, VS Code y terminal. Destacar Visual Studio como foco del vídeo. Texto en pantalla: **"Empezamos por Visual Studio"**. Evitar mostrar descarga si no hay acceso al Portal de Empresa.

#### Textos en pantalla
> Visual Studio · Primero: vamos a instalarlo desde el canal corporativo.
---

### 2. Instalación desde el ejecutable descargado · 0:15 – 0:40

> "Una vez descargado el ejecutable, lo abrimos. La pantalla del instalador se carga automáticamente y empieza a preparar los componentes.
>
> Seleccionamos Visual Studio Community y dejamos que el proceso avance. No hay que hacer nada más: cuando la instalación termine, el entorno ya estará listo."

**Fuente:** Grabación propia · instalación Visual Studio Community

**Visuales**
Mostrar la pantalla del installer en marcha, la barra de progreso y la pantalla de finalización. Texto en pantalla: **"Visual Studio instalado"**. Corte directo al siguiente paso sin pausas.

---

### 3. Verificación de Copilot y cuenta corporativa · 0:40 – 1:05

> "Antes de pedirle cualquier tarea a Githab Copilot, validamos dos cosas básicas: que esté disponible dentro de Visual Studio y que la sesión corresponda a la cuenta corporativa.
> 
>En la parte derecha podemos abrir Githab Copilot Chat. Si vemos el campo para preguntarle, el asistente ya está disponible en el IDE. Después revisamos la cuenta activa desde el perfil de usuario y confirmamos que corresponde a la cuenta corporativa.

**Fuente:** Sesión 1 G5M / Sesión 1 G2M · **Minuto ref:** ~31:48 a 33:00

**Visuales**
Usar tu grabación de Visual Studio con el panel **GitHub Copilot Chat** abierto. Hacer zoom al campo **"Preguntar a Copilot"**. Luego zoom al avatar o menú de cuenta. Si aparece correo o usuario, difuminarlo. Texto en pantalla: **"Cuenta corporativa + Copilot activo"**.

---

### 4. Validación del proyecto de prueba · 1:05 – 1:23

> "Con la cuenta validada, abrimos o creamos un proyecto sencillo de prueba. No buscamos programar todavía una funcionalidad real; solo confirmar que Visual Studio está operativo, que el proyecto carga correctamente y que Copilot puede trabajar dentro del contexto del IDE."

**Fuente:** Estrategia de adopción progresiva: de menos a más

**Visuales**
Usar tu clip `visual-studio-2026_config-proyecto`. Mostrar el archivo `Program.cs` o el proyecto de prueba abierto. Texto en pantalla: **"Proyecto de prueba cargado"**.

---

### 5. Ajuste de la terminal · 1:23 – 1:43

> "El siguiente punto es revisar la terminal. Si el flujo de trabajo requiere ejecutar comandos, scripts o validaciones desde consola, conviene confirmar que se está usando el perfil correcto, especialmente PowerShell 7 cuando esté disponible en el equipo.
>
> Esta validación ayuda a evitar errores por diferencias entre versiones de terminal."

**Fuente:** Sesión 1 G6M / Sesión 1 G5M · **Minuto ref:** ~31:06 a 31:53 / ~34:08

**Visuales**
Mostrar la terminal integrada o menú de perfiles si lo tienes grabado. Si no lo tienes, usar una placa visual simple: **"Terminal preparada = menos bloqueos al ejecutar comandos"**. Si puedes mostrar el comando: `$PSVersionTable.PSVersion`. Texto en pantalla: **"Comprobar PowerShell 7 si aplica"**.

---

### 6. Preparar instrucciones para Copilot · 1:43 – 2:07

> "Una vez validado el entorno, el siguiente paso es darle contexto a Copilot. Esto se puede hacer desde un archivo de instrucciones del proyecto, donde se definen reglas básicas: idioma de respuesta, estilo de documentación, convenciones de código o criterios técnicos del equipo.
>
> La idea es sencilla: cuanto mejor contexto tenga Copilot, más útil será su respuesta."

**Fuente:** Sesión 1 G5M / Sesión 1 G2M · **Minuto ref:** ~48:18 a 49:40 / ~54:00

**Visuales**
Mostrar creación o referencia a carpeta `.github` y archivo `copilot-instructions.md` solo si ya lo tienes grabado. Si no, dejarlo como "siguiente paso" para no alargar. Texto en pantalla: **"Contexto claro = mejores respuestas"**.

---

### 7. Cierre y llamada a la acción · 2:07 – 2:20

> "Con estas comprobaciones, el entorno queda preparado para empezar a trabajar con Copilot de forma controlada: Visual Studio listo, cuenta corporativa validada, Copilot disponible y terminal revisada.
>
> En el siguiente vídeo veremos cómo hacer la primera interacción útil con Copilot dentro del flujo diario de desarrollo."

**Fuente:** Estrategia evolutiva de adopción

**Visuales**
Cierre con logos de GCO / Raona si aplica. Texto final: **"Siguiente: primera interacción con Copilot"**.

---

## Recomendaciones para edición rápida

- Mantener el vídeo entre **90 segundos y 2 minutos**.
- No explicar instalación en detalle si no hay acceso al Portal de Empresa.
- Usar la frase **"canal corporativo correspondiente"** en lugar de mostrar pasos que no puedes grabar.
- Difuminar cualquier dato de cuenta, correo o usuario.
- No decir "Visual Studio 2026" en voz en off. Decir **"Visual Studio"** o **"versión corporativa disponible"**.
- Mostrar valor desde el inicio: esto no es instalación por instalación; es evitar bloqueos antes de usar Copilot.