# Ajuste de facturación · Post Pub 4 / cards de tokens · 21 junio 2026

> **Qué es este documento:** registra el cambio que hay que aplicar al post `canal-anuncios-tips_pub4.md` (y a sus cards de modelos/tokens) por el cambio de facturación de GitHub Copilot. Vive en esta carpeta porque aquí está el post que se modifica.
>
> **Por qué se cambia:** el modelo `0x`/`1x`/`3x` (multiplicadores · "bolsa de peticiones premium") quedó **legacy el 1 jun 2026**. GitHub Copilot pasó a facturación por uso (AI Credits consumidos por tokens). Ver `Conocimiento/facturacion-github-copilot-2026.md`. Es lo que levantó Jonathan en el canal colaborativo.
>
> **El dato más importante a corregir:** bajo el modelo nuevo **ya no hay un "0x gratis"** — todos los modelos consumen crédito, solo que unos mucho menos que otros. Por eso frases como "GPT-4.1 = gratuito" o "el estándar no consume" quedaron **incorrectas**.
>
> **Enfoque adoptado: versión plan-agnóstica.** No sabemos si las licencias de GCO ya migraron al modelo nuevo o siguen en un plan anual con multiplicadores (pendiente confirmar con Nibaldo). Por eso el texto se centra en el **principio durable** —verdadero en ambos modelos— y no en la mecánica concreta de cobro.

---

## ALCANCE — qué cambia y qué NO

> El cambio de facturación afecta **solo a la card `1-S2` (Optimización de Tokens y Modelos)** y a los textos del post que hablan de coste por modelo. **Las demás cards no se tocan.**

| Card | Tema | ¿La toca este ajuste? |
|------|------|------------------------|
| `1-S2` · Optimización de Tokens y Modelos | multiplicadores 0x/1x/3x | ✅ **SÍ** — única card afectada |
| `2-S2` · Diseñe la solución con un modelo Premium | planificador-ejecutor | ✅ Sí — cambiar 2 palabras en la card: "Premium" → "avanzado", "Estándar" → "ligero" (+ tiene su propio Reply 2, ver abajo) |
| `3-S2` · Carga progresiva de Skills | referencias de contexto | ❌ NO |
| `4-S2` · Higiene de la memoria | hilos / memoria | ❌ NO |
| `5-S2` · Memoria vs. Instrucciones | Memory vs. instructions.md | ❌ NO |

**En el texto del post:** cambian el cuerpo del post, el Reply 1 (texto, **sin card**) y la procedencia. El Reply 2 tiene texto nuevo + la card `2-S2` con 2 palabras cambiadas. Los Replies 3, 4 y 5 **no se tocan**. Ver **Orden del hilo** abajo.

---

## ORDEN DEL HILO EN TEAMS

> Aclaración de qué card lleva cada publicación, para no repetir ni descuadrar. **La card `1-S2` va en el post principal; cada reply lleva una card distinta.** Refleja lo realmente publicado.

| Publicación | Texto | Card adjunta | Estado |
|-------------|-------|--------------|--------|
| **Post principal** | Cuerpo del post (puntos 1–4) | ✅ Card `1-S2` "Menos/Mayor Consumo" | ✅ Publicado |
| **Reply 1** | "Diseña con el que razona…" (punto 6) | ✅ Card `2-S2` "Diseñe la solución con un modelo Avanzado" | ✅ Publicado |
| **Reply 2** | Texto Skills | Card `3-S2` "Carga progresiva de Skills" | 🔜 Pendiente |
| **Reply 3** | Texto memoria | Card `4-S2` "Higiene de la memoria" | 🔜 Pendiente |
| **Reply 4** | Texto memoria vs instrucciones | Card `5-S2` "Memoria vs. Instrucciones" | 🔜 Pendiente |

> **Nota:** el texto "cuánto consume" (punto 5) **no se publicó como reply separado** — el post principal + su card `1-S2` ya cubren esa idea. Se conserva en el punto 5 como registro, por si en el futuro se quiere usar como comentario aparte.

---

## CAMBIOS EXACTOS A APLICAR en `canal-anuncios-tips_pub4.md`

> Formato: **DÓNDE** · texto actual → texto nuevo. Puntos 1–5 y 7 = facturación (post principal + Reply 1 + card `1-S2`). Punto 6 = Reply 2 (texto propio + card `2-S2` con 2 palabras cambiadas).

### 1. Post — primera frase (debajo del título)

**Actual:**
> En GitHub Copilot no todos los modelos cuestan lo mismo. Los modelos premium consumen tu bolsa de tokens; los estándar, no.

**Nuevo:**
> En GitHub Copilot no todos los modelos cuestan lo mismo. Tu licencia incluye una bolsa mensual de uso: los modelos ligeros consumen poco, los avanzados consumen bastante más. Y cuanto más contexto le pasas, más gastas.

---

### 2. Post — tabla de 3 filas

**Actual:**
| Tipo de tarea | Modelo |
|---------------|--------|
| Explicar un error · documentar · resumir código | Estándar `0x` |
| Refactor delicado · análisis de impacto · lógica COBOL/DB2 compleja | Premium `1x` o `3x` |
| ¿No sabes cuál? | Empieza con el estándar. Si no alcanza, sube. |

**Nuevo:**
| Tipo de tarea | Modelo |
|---------------|--------|
| Explicar un error · documentar · resumir código | Ligero |
| Refactor delicado · análisis de impacto · lógica COBOL/DB2 compleja | Avanzado |
| ¿No sabes cuál? | Empieza con el ligero. Si no alcanza, sube. |

---

### 3. Post — frase de cierre (antes del CTA)

**Actual:**
> Si te quedas sin tokens premium, puedes seguir con el estándar. La bolsa se renueva el primer día de cada mes.

**Nuevo:**
> Dos hábitos que ahorran: elige el modelo según la tarea y acota el contexto —no le pases el proyecto entero si la pregunta es sobre un método. Tu bolsa se renueva cada mes.

---

### 4. Procedencia del contenido — primera fila de la tabla

**Actual:**
> | Estándar `0x` vs premium `1x/3x` | G4M Sesión 1 · G2M Sesión 2 |

**Nuevo:**
> | Modelos ligeros vs avanzados (consumo relativo) | G4M Sesión 1 · G2M Sesión 2 · actualizado por cambio de facturación 1 jun 2026 |

---

### 5. Reply 1 (acompaña `1-S2-card_pub4`)

**Actual:**
> 📊 **El desglose completo: qué modelo usar y cuánto consume.**
> GPT-4.1 / 5 mini = gratuito. Claude / Gemini = 1x o 3x de tu bolsa mensual.
> La regla: si la tarea no requiere razonar sobre código complejo, el Estándar resuelve igual de bien sin tocar la bolsa. Si vas a analizar impacto en COBOL o refactorizar lógica crítica, ahí sí vale el premium.
> ¿Cuál tienes seleccionado ahora mismo?

**Nuevo:**
> 📊 **El desglose completo: qué modelo usar y cuánto consume.**
> Los modelos ligeros consumen poco de tu bolsa mensual; los avanzados (los que razonan más) consumen bastante más. Ninguno es gratis, pero la diferencia entre uno y otro es grande.
> La regla: si la tarea no requiere razonar sobre código complejo, un modelo ligero resuelve igual de bien gastando mucho menos. Si vas a analizar impacto en COBOL o refactorizar lógica crítica, ahí sí vale el avanzado.
> ¿Cuál tienes seleccionado ahora mismo?

---

### 6. Reply 2 — post propio + card `2-S2`

> Este Reply va con la card `2-S2` ("Diseñe la solución…"). Texto definitivo:

**Actual (legacy):**
> 🧠 **Una táctica concreta para ahorrar tokens premium sin sacrificar calidad.**
> Usa el Premium para pensar — analizar el problema, definir el enfoque, entender el impacto. Usa el Estándar para escribir — el código, el refactor, la documentación.
> En COBOL o .NET: un hilo Premium para entender qué cambiar en el módulo, un hilo Estándar para generar los bloques de DB2 o el boilerplate. El modelo que razona no tiene que ser el que produce volumen.

**Nuevo (definitivo):**
> 🧠 **Diseña con el que razona, ejecuta con el ligero.**
> Una táctica para ahorrar sin sacrificar calidad en GitHub Copilot: usa un **modelo avanzado** para *pensar* —analizar el problema, definir el enfoque, entender el impacto— y uno **ligero** para *escribir* —el código, el refactor, la documentación.
> En COBOL o .NET: un hilo con modelo avanzado para entender qué cambiar en el módulo, otro con modelo ligero para generar los bloques de DB2 o el boilerplate. El que razona no tiene que ser el que produce volumen.
> Y cuida el contexto: `#file` para apuntar solo a los archivos que importan, y `@workspace` solo cuando de verdad no sabes dónde está el problema.
> 👉 La próxima vez que abras una tarea compleja, separa el pensar del ejecutar.

> **Card que acompaña este Reply:** `2-S2` con 2 palabras cambiadas en el título → "Diseñe la solución con un modelo **avanzado**. Y ejecute el código con uno **ligero**." Los bullets `#file` y `@workspace` no se tocan.

---

### 7. Brief `1-S2-card_pub4` · card-comparativa — contenido

Esta card es la que más cambia.

**Lo que la card tiene HOY (transcripción de la pieza producida):**

| Zona | Texto actual | ¿Problema? |
|------|--------------|------------|
| Eyebrow | GUÍA DE MAESTRÍA EN GITHUB COPILOT: EFICIENCIA Y CONTEXTO | Largo, no es error |
| Título | Optimización de Tokens y Modelos | OK |
| Subtítulo | "Evita el agotamiento de recursos… uso inteligente de la 'bolsa' de tokens mensuales y en mantener un entorno de trabajo limpio…" | Redacción confusa + concepto "bolsa de tokens" desactualizado |
| Col. izq · encabezado | Modelos Estándar | Término legacy |
| Col. izq · modelo | GPT-4.1 / 5 mini | No confirmado para GCO |
| Col. izq · precio | (Gratis) | ❌ **Falso** — ya nada es gratis |
| Col. izq · badge | **0x** (número gigante) | ❌ **Multiplicador legacy** |
| Col. izq · descripción | "Use modelos Estándar para tareas diarias, documentación, boilerplate y tareas repetitivas." | OK el fondo, ajustar redacción |
| Col. der · encabezado | Modelos Premium | Término legacy |
| Col. der · modelo | Claude / Gemini | No confirmado para GCO |
| Col. der · precio | 1x - 3x | ❌ **Multiplicador legacy** |
| Col. der · badge | **1x \| 3x** (número gigante) | ❌ **Multiplicador legacy** |
| Col. der · descripción | "Reserve los Premium para refactorizaciones complejas, código legacy, análisis masivo y razonamiento profundo." | OK el fondo, ajustar redacción |
| Centro | Ícono velocímetro (gris) | Se queda |
| Logo | Occident | Se queda |

**Contenido NUEVO (cómo debe quedar) — reemplaza lo anterior:**

| Elemento | Texto nuevo |
|----------|-------------|
| Eyebrow (overline) | GUÍA DE EFICIENCIA EN GITHUB COPILOT |
| Título principal | No todos los modelos cuestan lo mismo |
| Subtítulo | Tu licencia incluye una bolsa mensual de uso. El gasto depende del modelo que elijas y del contexto que le pases. |
| Columna A — encabezado | Modelos ligeros |
| Columna A — etiqueta | Menor consumo |
| Columna A — descripción | Para tareas diarias: explicar un error, documentar, resumir código, boilerplate. |
| Columna B — encabezado | Modelos avanzados |
| Columna B — etiqueta | Mayor consumo |
| Columna B — descripción | Para razonar de verdad: refactor delicado, análisis de impacto, lógica COBOL/DB2 compleja. |
| Franja inferior — hábito 1 | Elige el modelo según la tarea. |
| Franja inferior — hábito 2 | Acota el contexto: no le pases el proyecto entero si la pregunta es sobre un método. |
| Nota | La bolsa se renueva cada mes. |
| Logo | Occident — inferior derecha |

**Quitar de la card:** los badges `0x` y `1x | 3x`, los precios "(Gratis)" y "1x - 3x", y los nombres de modelo "GPT-4.1 / 5 mini" y "Claude / Gemini" (no listar modelos sin confirmar cuáles tiene GCO).

---

### 7.1 — Correcciones sobre la card YA PRODUCIDA (imagen del 21 jun)

> Mapeo directo de lo que se ve en la card actual → cómo debe quedar. Pensado para corregir en Figma sin rediseñar.

**🔴 Obligatorias (lo que está factualmente mal):**


| En la card ves... | Corrige a... |
|-------------------|--------------|
| Columna izq · encabezado **"Modelos Estándar"** | **"Modelos ligeros"** |
| Columna izq · **"GPT-4.1 / 5 mini"** (rojo) | **Eliminar** — no listar modelos sin confirmar cuáles tiene GCO |
| Columna izq · **"(Gratis)"** | **Eliminar** — bajo el modelo nuevo ningún modelo es gratis |
| Columna izq · número gigante **"0x"** | Reemplazar por etiqueta **"Menor consumo"** |
| Columna izq · descripción "Use modelos Estándar para tareas diarias…" | **"Para tareas diarias: explicar un error, documentar, resumir código, boilerplate."** |
| Columna der · encabezado **"Modelos Premium"** | **"Modelos avanzados"** |
| Columna der · **"Claude / Gemini"** (rojo) | **Eliminar** |
| Columna der · texto pequeño **"1x - 3x"** | **Eliminar** |
| Columna der · número gigante **"1x \| 3x"** | Reemplazar por etiqueta **"Mayor consumo"** |
| Columna der · descripción "Reserve los Premium para refactorizaciones complejas…" | **"Para razonar de verdad: refactor delicado, análisis de impacto, lógica COBOL/DB2 compleja."** |
| Subtítulo "Evita el agotamiento… 'bolsa' de tokens mensuales y en mantener…" | **"Tu licencia incluye una bolsa mensual de uso. El gasto depende del modelo que elijas y del contexto que le pases."** |

**🟡 Opcionales (mejoran, no son errores):**

| En la card ves... | Sugerencia |
|-------------------|------------|
| Eyebrow "GUÍA DE MAESTRÍA EN GITHUB COPILOT: EFICIENCIA Y CONTEXTO" | Recortar a **"GUÍA DE EFICIENCIA EN GITHUB COPILOT"** |
| Título "Optimización de Tokens y Modelos" | Puede quedarse. Alternativa más directa: **"No todos los modelos cuestan lo mismo"** |
| Ícono velocímetro central (gris) y logo Occident | Se quedan igual |

**🟢 Añadir si se quiere la versión completa (franja inferior nueva):**

- Hábito 1: **"Elige el modelo según la tarea."**
- Hábito 2: **"Acota el contexto: no le pases el proyecto entero si la pregunta es sobre un método."**
- Nota al pie: **"La bolsa se renueva cada mes."**

> **Nota de diseño:** los números gigantes `0x` y `1x | 3x` eran el foco visual de la card. Al reemplazarlos por etiquetas de texto ("Menor/Mayor consumo"), el peso visual baja — el diseñador puede agrandar esas etiquetas o usar un indicador gráfico (ej. una barra de "consumo") para mantener el impacto.

> **Card `2-S2-card_pub4` ("Diseñe la solución con un modelo Premium") — cambio confirmado:** en el título cambiar "Premium" → "avanzado" y "Estándar" → "ligero" → queda "Diseñe la solución con un modelo **avanzado**. Y ejecute el código con uno **ligero**." Los bullets `#file` y `@workspace` no se tocan. Esta card acompaña al Reply 2 (ver punto 6).

---

## Qué cambia respecto a la versión anterior (resumen conceptual)

| Antes (legacy) | Ahora (plan-agnóstico) |
|----------------|------------------------|
| "Estándar `0x` = no consume / Premium `1x`-`3x` = consume bolsa" | "Modelos ligeros consumen poco · avanzados consumen bastante más" (sin multiplicadores) |
| "GPT-4.1 = gratuito" | "Ninguno es gratis; la diferencia de consumo entre uno y otro es grande" |
| "Bolsa de **peticiones premium**" | "Bolsa **mensual de uso**" |
| El coste = multiplicador del modelo | El coste = **qué modelo** + **cuánto contexto** (tokens) |
| 1 hábito (elegir modelo) | 2 hábitos (elegir modelo **+ acotar contexto**) |

---

## Pendiente de confirmar con Nibaldo (no inventar)

1. **Plan de las licencias de GCO** (Business / Enterprise) y si ya están en usage-based (AI Credits) o en plan anual legacy. Define si la card puede incluir cifras concretas o se queda conceptual (recomendado: conceptual).
2. **Nombres exactos de modelos** disponibles en la licencia de GCO — por eso aquí se usan categorías ("ligeros" / "avanzados") y no nombres.
3. **Modo auto y nivel de razonamiento en Visual Studio** (no solo VS Code) — pendiente desde `prop_modelo-apropiado.md`.
