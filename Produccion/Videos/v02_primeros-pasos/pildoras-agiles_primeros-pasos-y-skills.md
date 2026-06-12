# Video 2: Primeros pasos con GitHub Copilot en Visual Studio

> **Propuesta V1 · Fusión · Junio 2026**
> Base: guion "Primera conversación" (ya redactado) + introducción a Skills.
> Estado: primer borrador para validación del equipo — pendiente input técnico.

---

## Concepto narrativo

Con el entorno configurado, el siguiente paso es la primera interacción real. Este vídeo cubre los dos puntos de entrada básicos — el chat y el completado inline — y abre la puerta a las Skills: extensiones que amplían las capacidades de GitHub Copilot para el entorno de equipo.

El objetivo no es explicar Skills en profundidad (eso va en Pub 6), sino que el developer sepa que existen, cómo se activan y por qué cambian el juego para su flujo de trabajo específico.

### Título propuesto

**"Tus primeros pasos con GitHub Copilot: del chat a tu primera Skill"**

*Alternativas para validar:*
- "Primera conversación e instalación de Skills en GitHub Copilot"
- "GitHub Copilot en acción: habla con él y amplía sus capacidades"

---

## Estructura del guion

---

### 1. Conexión con el vídeo anterior · 0:00 – 0:10

> "El entorno ya está listo: Visual Studio instalado, cuenta corporativa validada, GitHub Copilot activo.
>
> Ahora el siguiente paso: abrir el chat y hablar con él por primera vez."

**Fuente:** Continuidad narrativa del Vídeo 1

**Visuales**
Pantalla de Visual Studio con el proyecto de prueba abierto. Texto en pantalla: **"Entorno listo → Primer uso"**

---

### 2. Abrir GitHub Copilot Chat · 0:10 – 0:30

> "GitHub Copilot Chat está integrado directamente en Visual Studio. Para abrirlo, vamos al menú Ver, luego a Otros Windows, y seleccionamos GitHub Copilot Chat.
>
> El panel aparece en la parte derecha del IDE, sin abrir ninguna herramienta externa."

**Fuente:** Sesión 1 G5M · Minuto ref: ~31:48

**Visuales**
Mostrar el recorrido: menú **Ver → Otros Windows → GitHub Copilot Chat**. Hacer zoom a cada paso. Panel abierto a la derecha. Texto en pantalla: **"Ver → Otros Windows → GitHub Copilot Chat"**

---

### 3. Lo que ves al abrirlo · 0:30 – 0:48

> "El panel muestra un campo de texto donde escribir y, arriba, el contexto activo: qué archivo tiene GitHub Copilot en cuenta en este momento.
>
> Esto es clave: Copilot no trabaja de forma genérica. Responde en función del código que tienes abierto en el editor."

**Fuente:** Sesión 1 G4M / G5M · Minuto ref: ~30:38

**Visuales**
Zoom al campo de texto del chat. Zoom al indicador de contexto activo. Texto en pantalla: **"GitHub Copilot ve lo que tienes abierto"**

---

### 4. La primera pregunta real · 0:48 – 1:08

> "Para la primera interacción, usamos algo concreto: seleccionamos un fragmento de código, escribimos #selection en el chat y le pedimos a GitHub Copilot que lo explique.
>
> Con eso ya tenemos la primera respuesta útil dentro del IDE, sin salir de Visual Studio."

**Fuente:** Sesión 1 G4M

**Visuales**
Mostrar selección de código en el editor. Escribir en el chat: `Explica este código #selection`. Zoom a la respuesta generada. Texto en pantalla: **"#selection → referencia lo que tienes seleccionado"**

> ⚠️ **Pendiente técnico:** ¿Usamos COBOL o .NET para este ejemplo? ¿Hay un fragmento de referencia disponible?

---

### 5. Sugerencias inline mientras escribes · 1:08 – 1:23

> "Además del chat, GitHub Copilot trabaja directamente en el editor mientras escribes. Cuando aparece texto en gris, esa es su sugerencia.
>
> Tab para aceptarla. Si no te sirve, sigue escribiendo y desaparece."

**Fuente:** Sesión 1 G6M / G5M

**Visuales**
Mostrar sugerencia inline en gris en el editor. Mostrar Tab para aceptar. Texto en pantalla: **"Tab para aceptar · Sigue escribiendo para ignorar"**

---

### 6. Introducción a Skills · 1:23 – 1:45

> "Hasta aquí, los dos modos básicos. Pero hay un paso más: las Skills.
>
> Las Skills son extensiones que amplían lo que GitHub Copilot puede hacer: conectarlo a sistemas externos, añadir contexto específico del equipo o trabajar con herramientas del flujo de trabajo.
>
> Instalar una Skill es sencillo: [RUTA DE INSTALACIÓN — pendiente validación]. Una vez añadida, aparece directamente en el chat."

**Fuente:** [PENDIENTE — input técnico]

**Visuales**
[PENDIENTE — depende de la Skill que se decida demostrar]
Texto en pantalla: **"Skills: GitHub Copilot se adapta a tu entorno"**

> ⚠️ **Preguntas abiertas para Nibaldo:**
> - ¿Qué Skill concreta demostramos? ¿Extensión de marketplace, MCP tool, o algo del entorno GCO?
> - ¿El equipo de GCO tiene acceso al GitHub Marketplace para instalar extensiones?
> - ¿La ruta de instalación es desde VS, desde VS Code, o desde configuración de GitHub?

---

### 7. Cierre y CTA · 1:45 – 1:55

> "Ya tienes los dos puntos de entrada básicos de GitHub Copilot: el chat para preguntas y el completado inline para sugerencias mientras escribes. Y con Skills, GitHub Copilot crece con tu flujo de trabajo.
>
> En el canal Primeros Pasos tienes más contexto sobre cómo configurar el entorno para tu equipo."

**Visuales**
Resumen visual: Chat + Inline + Skills. Texto final: **"Siguiente: GitHub Copilot con casos reales"**

---

## Preguntas abiertas para el equipo

| # | Pregunta | Para quién |
|---|----------|------------|
| 1 | ¿Qué Skill demostramos? (marketplace, MCP, extensión del entorno GCO) | Equipo técnico |
| 2 | ¿El equipo GCO tiene acceso al GitHub Marketplace para instalar extensiones? | Equipo técnico |
| 3 | ¿COBOL o .NET para el ejemplo del paso 4? | Equipo técnico |
| 4 | ¿Mantenemos primeros pasos como base o hacemos un vídeo 100% enfocado en Skills? | Equipo técnico |
| 5 | Duración: ¿90 seg está bien o podemos ir a 2 min con el contenido de Skills añadido? | Equipo técnico |

---

## Recomendaciones para edición

- Duración objetivo: **90 a 110 segundos** — la sección de Skills es intro, no demo completa.
- Si la Skill elegida requiere más de 20 segundos de pantalla, moverla a un Vídeo 2b o al Vídeo 3.
- `#selection` debe verse escrito en el chat, no solo mencionado en el audio.
- Las sugerencias inline en gris son muy sutiles — usar zoom o highlight de cursor.
- Difuminar cualquier texto de código real si pertenece a un proyecto de cliente.
- No entrar todavía en modo agente ni en diferencias avanzadas entre modos.
