# Canal Anuncios y Tips — Pub 4 · Elige el modelo según la tarea
> Canal: Anuncios y Tips Ágiles · Fecha: Jueves 11 junio · Tipo: Tip de uso
> Estado: listo para revisión Nibaldo / Guillermo
> Fuente: sesiones Nibaldo · prop_modelo-apropiado.md

---

## Objetivo de esta publicación

Que los developers entiendan que en GitHub Copilot no todos los modelos tienen el mismo coste en tokens, y que usar siempre el premium los deja sin bolsa en días. El hábito que se quiere instalar: revisar qué modelo está seleccionado antes de preguntar.

---

## Post listo para Teams

**Asunto:** `📣 ¿Siempre usas el mismo modelo en GitHub Copilot? Puede que estés gastando más de lo necesario.`

---

📣 **¿Siempre usas el mismo modelo en GitHub Copilot? Puede que estés gastando más de lo necesario.**

En GitHub Copilot no todos los modelos cuestan lo mismo. Los modelos premium consumen tu bolsa de tokens; los estándar, no.

La idea no es usar siempre el más potente — es usar el adecuado para lo que necesitas ahora.

| Tipo de tarea | Modelo |
|---------------|--------|
| Explicar un error · documentar · resumir código | Estándar `0x` |
| Refactor delicado · análisis de impacto · lógica COBOL/DB2 compleja | Premium `1x` o `3x` |
| ¿No sabes cuál? | Empieza con el estándar. Si no alcanza, sube. |

Si te quedas sin tokens premium, puedes seguir con el estándar. La bolsa se renueva el primer día de cada mes.

👉 Antes de tu próxima consulta, mira qué modelo tienes seleccionado.

---

## Tono de comunicación

El gancho es la pérdida de tokens — algo concreto y que ya les puede haber pasado. El tono no es alarmista: es "te doy el criterio para decidir bien".

Claves:
- La tabla de 3 filas es el mensaje central. No necesitan leer el texto para entender el post.
- "Si no alcanza, sube de modelo" normaliza el proceso — no es un fallo, es un método.
- La renovación mensual baja la ansiedad sobre quedarse sin tokens.

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Estándar `0x` vs premium `1x/3x` | G4M Sesión 1 · G2M Sesión 2 |
| "En dos días te quedas sin tokens" | G3M Sesión 1 |
| Criterio tarea simple / compleja | G2M Sesión 1 · G5M Sesión 1 |
| Renovación mensual de la bolsa | G2M Sesión 2 |
| Modo auto (VS Code) | G5M Sesión 1 — no incluido en este post, queda para nota complementaria |
| Prop base | `prop_modelo-apropiado.md` |

---

## Posts de hilo — Una respuesta por card

> El post principal va con `1-S2-card_pub4` (Optimización de Tokens y Modelos). Cada reply a continuación acompaña una card y le da contexto al equipo antes o después de compartirla.

---

### Reply 1 — acompaña `1-S2-card_pub4` (card-comparativa)

📊 **El desglose completo: qué modelo usar y cuánto consume.**

GPT-4.1 / 5 mini = gratuito. Claude / Gemini = 1x o 3x de tu bolsa mensual.

La regla: si la tarea no requiere razonar sobre código complejo, el Estándar resuelve igual de bien sin tocar la bolsa. Si vas a analizar impacto en COBOL o refactorizar lógica crítica, ahí sí vale el premium.

¿Cuál tienes seleccionado ahora mismo?

---

### Reply 2 — acompaña `2-S2-card_pub4` (card-minimalista)

🧠 **Una táctica concreta para ahorrar tokens premium sin sacrificar calidad.**

Usa el Premium para pensar — analizar el problema, definir el enfoque, entender el impacto. Usa el Estándar para escribir — el código, el refactor, la documentación.

En COBOL o .NET: un hilo Premium para entender qué cambiar en el módulo, un hilo Estándar para generar los bloques de DB2 o el boilerplate. El modelo que razona no tiene que ser el que produce volumen.

---

### Reply 3 — acompaña `3-S2-card_pub4` (card-minimalista)

🎯 **¿Cuánto contexto le das a GitHub Copilot cuando preguntas algo?**

Cuanto más acotada la referencia, más enfocada la respuesta — y menos tokens consumes.

El orden: `#selection` primero, luego método o clase, luego `#file`, y `@workspace` solo cuando no sabes dónde está el problema.

Para COBOL: no cargues 20 programas para preguntarle por un SQLCODE que falla en un módulo específico. Referencia ese método directamente.

---

### Reply 4 — acompaña `4-S2-card_pub4` (card-minimalista)

🧹 **GitHub Copilot no recuerda lo que hablaste ayer. Pero sí se "llena" dentro del mismo hilo.**

Cada mensaje, cada archivo abierto, el historial del chat — todo entra en lo que llamamos "el cajón". Cuando se llena, el modelo empieza a mezclar contextos.

Tres reglas que hacen diferencia: abre un hilo nuevo cuando llevas muchas preguntas acumuladas, quita el archivo activo si no es relevante, y en COBOL trabaja un programa por hilo.

---

### Reply 5 — acompaña `5-S2-card_pub4` (card-comparativa)

⚙️ **Dos formas de darle contexto permanente a GitHub Copilot. Una es tuya. La otra es de todo el equipo.**

**Copilot Memory** guarda tus preferencias personales: tu estilo de respuesta, lo que te funciona, cómo prefieres recibir el código. Solo lo ves tú — no afecta a nadie más.

**`.github/copilot-instructions.md`** es diferente. Ese archivo entra al cajón en cada conversación, para todos, sin que nadie tenga que escribirlo en el prompt. Es donde el equipo define las reglas permanentes del proyecto. En GCO, por ejemplo:

- SQL: sin `LIKE`, sin `DELETE` ni `TRUNCATE`
- COBOL: código solo entre columnas 7–72 · no modificar copybooks sin listar primero el impacto
- .NET: C# 12 · `async/await` en toda operación I/O
- Todos: sin credenciales, tokens ni passwords escritos directamente en el código

Lo que defines ahí, GitHub Copilot lo aplica siempre. Sin repetirlo en cada prompt.

→ Adjuntar: `5-S2-card_pub4`

---

## Archivos de salida

| # | Nombre de archivo | Tipo | Tema |
|---|-------------------|------|------|
| 1 | `1-S2-card_pub4` | card-comparativa | Optimización de Tokens y Modelos |
| 2 | `2-S2-card_pub4` | card-minimalista | Diseñe la solución con un modelo Premium. |
| 3 | `3-S2-card_pub4` | card-minimalista | Carga progresiva de Skills |
| 4 | `4-S2-card_pub4` | card-minimalista | Higiene de la memoria a corto plazo |
| 5 | `5-S2-card_pub4` | card-comparativa | Memoria vs. Instrucciones |

---

## Brief — `1-S2-card_pub4` · card-comparativa

**Tipo de pieza:** card-comparativa — panel único con dos columnas
**Origen:** transcripción de gráfica de referencia · ver imagen adjunta en carpeta

### Contenido — transcripción exacta de la gráfica

| Elemento | Texto |
|----------|-------|
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT: EFICIENCIA Y CONTEXTO |
| Título principal | Optimización de Tokens y Modelos |
| Subtítulo | Evita el agotamiento de recursos en GitHub Copilot. Da un uso inteligente de la "bolsa" de tokens mensuales y en mantener un entorno de trabajo limpio para evitar errores de alucinación o saturación del modelo. |
| Columna A — encabezado | Modelos Estándar |
| Columna A — modelo | GPT-4.1 / 5 mini |
| Columna A — precio | (Gratis) |
| Columna A — badge | 0x |
| Columna A — descripción | Use modelos Estándar para tareas diarias, documentación, boilerplate y tareas repetitivas. |
| Columna B — encabezado | Modelos Premium |
| Columna B — modelo | Claude / Gemini |
| Columna B — precio | 1x - 3x |
| Columna B — badge | 1x \| 3x |
| Columna B — descripción | Reserve los Premium para refactorizaciones complejas, código legacy, análisis masivo y razonamiento profundo. |
| Logo | Occident — inferior derecha |

### Especificaciones Figma

- **Formato:** 1920×1080 px (landscape) — adaptable a 1080×1350 px para Teams
- **Fondo:** blanco
- **Eyebrow:** rojo `#DC0028` · uppercase · GCO Sans pequeño
- **Título principal:** negro · CO bold · display grande
- **Subtítulo:** negro · GCO Sans regular · cuerpo
- **Columnas:** fondo `#F5F5F5` · esquinas suavemente redondeadas
- **Modelo** (GPT-4.1 / Claude): rojo `#DC0028` · pequeño
- **Badge** (`0x`, `1x | 3x`): tipografía display muy grande · rojo `#DC0028` · bold
- **Logo Occident:** inferior derecha
- **Tipografía:** CO para título · GCO Sans para texto running

---

## Brief — `2-S2-card_pub4` · card-minimalista · Planificador-Ejecutor

**Tipo de pieza:** card-minimalista — panel único
**Origen del contenido:** imagen de referencia · sesión 10 junio 2026

### Contenido — transcripción de la gráfica

| Elemento | Texto |
|----------|-------|
| Ícono (izquierda superior) | Ícono checklist/kanban · rojo `#DC0028` |
| Título corto (derecha) | ESTRATEGIA PLANIFICADOR-EJECUTOR |
| Título principal | Diseñe la solución con un modelo Premium. |
| Subtítulo | Y ejecute el código con uno Estándar. |
| Bullet 1 | Referencias precisas con `#file` — solo los archivos esenciales, no el proyecto entero. |
| Bullet 2 | En COBOL: un módulo por hilo Premium, no toda la solución de una vez. |
| Aviso | Reserva `@workspace` solo cuando genuinamente no sepas dónde está el problema. |
| Logo | Occident — inferior derecha |

### Párrafo

Usa Premium para diseñar la solución: cuéntale el problema, muéstrale el contexto con `#file`. Cuando sepas qué cambiar, cambia al Estándar y ejecuta. En COBOL: un hilo Premium para el análisis de impacto, un hilo Estándar para generar los bloques de DB2. El modelo que razona no tiene que ser el que produce volumen.

### Especificaciones Figma

- **Formato:** 1080×1350 px
- **Fondo:** gris muy claro `#F5F5F5` — diferenciador visual respecto a las otras cards minimalistas (blancas)
- **Ícono superior izquierda:** checklist/kanban · rojo `#DC0028` · aprox. 80×80 px
- **Título corto:** rojo `#DC0028` · uppercase · alineado a la derecha · tipografía pequeña
- **Título principal:** gris oscuro · CO bold · display (40–56 px equiv.)
- **Subtítulo:** gris oscuro · GCO Sans regular · tamaño medio
- **Bullet:** GCO Sans regular · cuerpo · `#file` en monospace con chip `#F5F5F5`/borde
- **Aviso "Reserva...":** rojo `#DC0028` · bold · `@workspace` en monospace con chip
- **Logo Occident:** inferior derecha

---

## Brief — `3-S2-card_pub4` · card-minimalista

**Tipo de pieza:** card-minimalista — panel único
**Origen del contenido:** `prop_skills-optimizacion-tokens.md` · sesiones G4M S2, G5M S2

### Contenido

| Elemento | Texto |
|----------|-------|
| Título corto (derecha) | GUÍA DE MAESTRÍA EN COPILOT |
| Título principal | Carga progresiva de Skills |
| Subtítulo | Ahorra tokens al inyectar contenido solo cuando el modelo detecta relevancia |
| Párrafo | No cargues Skills de entrada. Empieza por `#selection` o el método específico y escala solo si el modelo necesita más contexto. La precisión de la referencia define la precisión de la respuesta. |

### Especificaciones Figma

- **Formato:** 1080×1350 px
- **Fondo:** blanco
- **Título corto:** rojo `#DC0028` · uppercase · alineado a la derecha · tipografía pequeña
- **Título principal:** negro · CO bold · display (40–56 px equiv.)
- **Subtítulo:** negro · GCO Sans regular · tamaño medio
- **Párrafo:** GCO Sans regular · cuerpo · interlineado 1.5
- **Comandos inline** (`#selection`, `#file`, `@workspace`): monospace · fondo `#F5F5F5` · borde sutil
- **Logo Occident:** inferior derecha

---

## Brief — `4-S2-card_pub4` · card-minimalista · Higiene de la memoria

**Tipo de pieza:** card-minimalista — panel único
**Origen del contenido:** `prop_memoria-copilot.md` · sesiones múltiples grupos

### Contenido

| Elemento | Texto |
|----------|-------|
| Título corto (derecha) | OPTIMIZADOR DE CONTEXTO Y TOKENS |
| Título principal | Higiene de la memoria a corto plazo |
| Subtítulo | Abre un nuevo hilo cada 20 turnos para evitar respuestas imprecisas o errores. |
| Párrafo | Cada 20 turnos, el historial pesa más que el código actual. Un hilo nuevo devuelve el foco al modelo. En COBOL: un programa por hilo, sin mezclar contextos entre módulos. |

### Especificaciones Figma

- **Formato:** 1080×1350 px
- **Fondo:** blanco
- **Título corto:** rojo `#DC0028` · uppercase · alineado a la derecha · tipografía pequeña
- **Título principal:** negro · CO bold · display (40–56 px equiv.)
- **Subtítulo:** negro · GCO Sans regular · tamaño medio
- **Párrafo:** GCO Sans regular · cuerpo · interlineado 1.5
- **Logo Occident:** inferior derecha

---

## Brief — `5-S2-card_pub4` · card-comparativa

**Tipo de pieza:** card-comparativa — panel único con dos columnas
**Origen del contenido:** imagen de referencia · sesión 10 junio 2026

### Contenido — transcripción y desarrollo

| Elemento | Texto |
|----------|-------|
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT |
| Título principal | Memoria vs. Instrucciones |
| Subtítulo | Dos formas de darle contexto permanente a GitHub Copilot — una personal, una de equipo |
| Columna A — encabezado | Copilot Memory |
| Columna A — ícono | Chip/procesador · rojo `#DC0028` |
| Columna A — badge | Individual |
| Columna A — descripción | Guarda tus preferencias de respuesta, estilo de código personal y atajos propios. Solo tú lo ves — no afecta al resto del equipo. |
| Columna B — encabezado | copilot-instructions.md |
| Columna B — ícono | Documento · neutro |
| Columna B — badge | Equipo |
| Columna B — descripción | Define convenciones de código, arquitectura y reglas del proyecto que aplican a todos. Se versiona en Git junto al código. |
| Columna B — ejemplo GCO | SQL: sin `LIKE` · COBOL: col. 7–72 · .NET: C# 12 · sin credenciales hardcodeadas |
| Logo | Occident — inferior derecha |

### Especificaciones Figma

- **Formato:** 1920×1080 px (landscape) — adaptable a 1080×1350 px para Teams
- **Fondo:** blanco
- **Eyebrow:** rojo `#DC0028` · uppercase · GCO Sans · pequeño
- **Título principal:** negro · CO bold · display grande
- **Subtítulo:** negro · GCO Sans regular · cuerpo
- **Columnas:** fondo `#F5F5F5` · esquinas suavemente redondeadas
- **Ícono Columna A (Memory):** chip/procesador · rojo `#DC0028`
- **Ícono Columna B (instructions.md):** documento · gris neutro `#666666`
- **Badge "Individual":** chip pequeño · rojo `#DC0028` · texto blanco
- **Badge "Equipo":** chip pequeño · gris oscuro `#333333` · texto blanco
- **`copilot-instructions.md`:** monospace · fondo `#F5F5F5` · borde sutil
- **Logo:** inferior derecha
- **Tipografía:** CO para título · GCO Sans para texto running