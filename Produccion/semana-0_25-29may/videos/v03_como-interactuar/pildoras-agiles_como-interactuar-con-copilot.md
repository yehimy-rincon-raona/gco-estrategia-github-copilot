# Video 3: Cómo interactuar con Copilot

## Storytelling y guion estructurado

El objetivo de este tercer vídeo es mostrar cómo comunicarse con Copilot de forma efectiva dentro de Visual Studio: cuándo usar el modo Pregunta para consultas rápidas y cuándo activar el modo Agente para que Copilot tome el control, planifique y ejecute. El cierre ancla el concepto con un caso real: resolver un bug pegando el log de error directamente en el chat.

### Título del vídeo

**Cómo interactuar con Copilot: Pregunta vs. Agente**

### Concepto narrativo

Copilot no es una sola herramienta: son dos modos de trabajo distintos. Saber cuándo usar cada uno es la diferencia entre una respuesta rápida y útil, y una solución completa que no requiere que tú toques cada línea. Este vídeo enseña esa distinción con un caso concreto que cualquier developer de GCO puede aplicar hoy.

---

## Estructura del guion y guía de producción

---

### 1. Conexión con el vídeo anterior · 0:00 – 0:10

> "Ya sabemos abrir el chat y hacer la primera pregunta.
>
> Ahora el siguiente nivel: Copilot tiene dos modos de trabajo, y elegir bien cuál usar cambia el resultado."

**Fuente:** Continuidad narrativa del Vídeo 2

**Visuales**
Pantalla de Visual Studio con Copilot Chat abierto. Texto en pantalla: **"Modo Pregunta vs. Modo Agente"**.

---

### 2. Los dos modos: Pregunta y Agente · 0:10 – 0:32

> "El modo Pregunta es para consultas directas: explícame este código, ¿qué hace este método?, ¿cómo escribo esta sentencia SQL?
>
> El modo Agente es diferente: en lugar de responder, Copilot actúa. Analiza los archivos del proyecto, propone un plan y ejecuta los cambios — tú revisas y apruebas."

**Fuente:** Sesión 1 G4M / Sesión 1 G5M · **Minuto ref:** ~30:38

**Visuales**
Mostrar el selector de modo en el chat (desplegable o botón de cambio de modo). Hacer zoom a **"Pregunta"** y luego a **"Agente"**. Texto en pantalla: **"Pregunta → respuesta · Agente → acción"**.

---

### 3. Modo Pregunta en práctica · 0:32 – 0:52

> "Un ejemplo concreto del modo Pregunta: abrimos un método, lo seleccionamos y escribimos en el chat: ¿qué hace este método? #selection
>
> Copilot devuelve una explicación en texto plano, sin tocar el código. Es ideal para entender código ajeno o revisar una función antes de modificarla."

**Fuente:** Sesión 1 G4M · Ejemplo: entender código COBOL o .NET

**Visuales**
Seleccionar un fragmento de código en el editor. Escribir en el chat: `¿Qué hace este método? #selection`. Zoom a la respuesta explicativa. Texto en pantalla: **"Copilot explica · tú decides qué hacer"**.

---

### 4. Modo Agente en práctica · 0:52 – 1:14

> "Ahora el modo Agente. Copilot tiene acceso al workspace: puede leer varios archivos, proponer cambios y ejecutarlos.
>
> El flujo es simple: describes la tarea, Copilot planifica los pasos, genera el código y te pide confirmación antes de aplicarlo. Tú validas — él trabaja."

**Fuente:** Sesión 1 G5M / Sesión 1 G2M · **Minuto ref:** ~48:18

**Visuales**
Mostrar el chat en modo **Agente** activo. Escribir una instrucción tipo: `Añade control de errores SQLCODE a este método`. Mostrar el plan de pasos que Copilot propone antes de ejecutar. Texto en pantalla: **"Agente: planifica → genera → tú apruebas"**.

---

### 5. Caso real: resolver un bug con el log de error · 1:14 – 1:38

> "Un caso que cualquier developer puede aplicar hoy: copias el error del log, lo pegas en el chat junto con el código que lo produce, y le preguntas a Copilot qué está fallando y cómo resolverlo.
>
> No hace falta buscar en Stack Overflow, no hace falta salir del IDE. La solución aparece en el contexto del código real."

**Fuente:** Sesión 1 Material Base · Caso COBOL Bug Fixing con logs de Elastic

**Visuales**
Mostrar un mensaje de error en la consola o log. Pegar el texto del error en el chat con el código relacionado. Zoom a la diagnosis y sugerencia de Copilot. Texto en pantalla: **"Error en el log → pégalo en el chat → solución en segundos"**.

---

### 6. Cierre y siguiente paso · 1:38 – 1:50

> "Modo Pregunta para consultas rápidas. Modo Agente cuando quieres que Copilot trabaje contigo en la tarea completa.
>
> Con estos tres vídeos ya tienes el entorno listo y los primeros pasos claros para empezar a usar Copilot en tu día a día."

**Fuente:** Estrategia evolutiva de adopción · Fase 2 cierre

**Visuales**
Resumen visual: los tres vídeos como pasos progresivos. Texto en pantalla: **"Entorno → Primeros pasos → Interacción"**. Cierre con logos de GCO / Raona si aplica.

---

## Recomendaciones para edición rápida

- Mantener el vídeo entre **100 y 110 segundos** — este es el más denso de los tres, se puede estirar ligeramente.
- El selector de modo (Pregunta/Agente) debe verse claramente — es el punto clave del vídeo, no lo cortes rápido.
- Para la sección 5 (bug + log), si tienes grabación real de una sesión con error de COBOL o .NET, úsala — el impacto visual es mayor que un ejemplo simulado.
- Difuminar cualquier código, error o log real de cliente.
- Este vídeo cierra la serie de tres — el texto final puede llevar a la siguiente acción: canal de Teams, sesión 1:1 o recurso adicional si ya están disponibles.