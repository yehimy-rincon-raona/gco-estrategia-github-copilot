# Canal Anuncios y Tips — Pub 4 · Elige el modelo según la tarea
> Canal: Anuncios y Tips Ágiles · Tipo: Tip de uso
> Estado: ✅ Publicado · ajuste de facturación aplicado el 21 jun 2026
> Fuente: sesiones Nibaldo · prop_modelo-apropiado.md
>
> ⚠️ **Actualizado por cambio de facturación (21 jun 2026):** el modelo 0x/1x/3x quedó legacy; este post se reformuló a "ligeros/avanzados". Este archivo ya refleja la versión final publicada. El antes/después detallado y el orden del hilo están en `ajuste-facturacion-tokens_pub4.md` (misma carpeta).

---

## Objetivo de esta publicación

Que los developers entiendan que en GitHub Copilot no todos los modelos tienen el mismo coste, y que usar siempre el más potente gasta su bolsa mensual más rápido. El hábito que se quiere instalar: revisar qué modelo está seleccionado antes de preguntar y acotar el contexto.

---

## Post listo para copiar en Teams (tenant GCO)

> Texto idéntico a la publicación verificada en la captura (`Produccion/imagenes_teams/01_anuncios-y-tips-agiles/05-pub-02_anuncios-y-tips-agiles.png`): el asunto publicado no lleva emoji y el cuerpo abre con "Puede que estés gastando más de lo necesario."

**Asunto:** `¿Siempre usas el mismo modelo en GitHub Copilot?`

---

**Puede que estés gastando más de lo necesario.**

En GitHub Copilot no todos los modelos cuestan lo mismo. Tu licencia incluye una bolsa mensual de uso: los modelos ligeros consumen poco, los avanzados consumen bastante más. Y cuanto más contexto le pasas, más gastas.

La idea no es usar siempre el más potente — es usar el adecuado para lo que necesitas ahora.

| Tipo de tarea | Modelo |
|---------------|--------|
| Explicar un error · documentar · resumir código | Ligero |
| Refactor delicado · análisis de impacto · lógica COBOL/DB2 compleja | Avanzado |
| ¿No sabes cuál? | Empieza con el ligero. Si no alcanza, sube. |

Dos hábitos que ahorran: elige el modelo según la tarea y acota el contexto —no le pases el proyecto entero si la pregunta es sobre un método. Tu bolsa se renueva cada mes.

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
| Modelos ligeros vs avanzados (consumo relativo) | G4M Sesión 1 · G2M Sesión 2 · actualizado por cambio de facturación 1 jun 2026 |
| "En dos días te quedas sin tokens" | G3M Sesión 1 |
| Criterio tarea simple / compleja | G2M Sesión 1 · G5M Sesión 1 |
| Renovación mensual de la bolsa | G2M Sesión 2 |
| Modo auto (VS Code) | G5M Sesión 1 — no incluido en este post, queda para nota complementaria |
| Prop base | `prop_modelo-apropiado.md` |

---

## Posts de hilo — Una tarjeta por publicación

> **Orden publicado** (detalle en `ajuste-facturacion-tokens_pub4.md`): el post principal lleva la tarjeta `1-S2` "Menos/Más Consumo" *(así aparece en la pieza publicada: "Menos Consumo" / "Más Consumo")*. Cada respuesta lleva una tarjeta distinta — la `1-S2` no se repite. El texto antiguo de "cuánto consume" se retiró (su idea ya vive en el post principal + tarjeta `1-S2`).

---

### Respuesta 1 — acompaña `2-S2-card_pub4` (Diseñe la solución con un modelo avanzado)

🧠 **Diseña con el que razona, ejecuta con el ligero.**

Una táctica para ahorrar sin sacrificar calidad en GitHub Copilot: usa un **modelo avanzado** para *pensar* —analizar el problema, definir el enfoque, entender el impacto— y uno **ligero** para *escribir* —el código, el refactor, la documentación.

En COBOL o .NET: un hilo con modelo avanzado para entender qué cambiar en el módulo, otro con modelo ligero para generar los bloques de DB2 o el boilerplate. El que razona no tiene que ser el que produce volumen.

Y cuida el contexto: `#file` para apuntar solo a los archivos que importan, y `@workspace` solo cuando de verdad no sabes dónde está el problema.

👉 La próxima vez que abras una tarea compleja, separa el pensar del ejecutar.

→ Adjuntar: `2-S2-card_pub4`

---

### Respuesta 2 — acompaña `3-S2-card_pub4` (Carga progresiva de Skills)

🎯 **¿Cuánto contexto le das a GitHub Copilot cuando preguntas algo?**

Cuanto más acotada la referencia, más enfocada la respuesta — y menos tokens consumes.

El orden: `#selection` primero, luego método o clase, luego `#file`, y `@workspace` solo cuando no sabes dónde está el problema.

Para COBOL: no cargues 20 programas para preguntarle por un SQLCODE que falla en un módulo específico. Referencia ese método directamente.

→ Adjuntar: `3-S2-card_pub4`

---

### Respuesta 3 — acompaña `4-S2-card_pub4` (Higiene de la memoria a corto plazo)

🧹 **GitHub Copilot no recuerda lo que hablaste ayer. Pero sí se "llena" dentro del mismo hilo.**

Cada mensaje, cada archivo abierto, el historial del chat — todo entra en lo que llamamos "el cajón". Cuando se llena, el modelo empieza a mezclar contextos.

Tres reglas que hacen diferencia: abre un hilo nuevo cuando llevas muchas preguntas acumuladas, quita el archivo activo si no es relevante, y en COBOL trabaja un programa por hilo.

---

### Respuesta 4 → POST PROPIO (Memoria vs. Instrucciones) — movido a su propio archivo

> ✅ **Decisión 15 jul (republicación tenant GCO):** este contenido ya NO va como respuesta del hilo — se publica como **publicación independiente** el **martes 28 de julio, programada una hora después del post principal**. Su archivo operativo (texto + asunto `Escríbelo una vez, aplícalo siempre` + tarjeta `5-S2`) está en esta misma carpeta:
> **`post-memoria-vs-instrucciones_mar-28jul.md`**
> Así el día 28 solo hay que replicar manualmente el hilo (post principal + respuestas 1–3) y este post sale solo.
>
> **Ampliación (18 ago, feedback de Óscar en la reunión de seguimiento):** este post no dejaba claro qué es Copilot Memory ni cómo se distingue de Instructions en la práctica. Se profundiza con el hilo **`4-a`** (`canal-anuncios-tips_pub4-a.md`, misma carpeta) — que trabaja en pareja con el hilo `14-a` (respuesta de Pub 14, el mapa de personalización): dos ángulos distintos del mismo tema, para reforzar la aclaración desde dos publicaciones.

---

> **Texto retirado:** la antigua respuesta "📊 El desglose completo: qué modelo usar y cuánto consume" (con "GPT-4.1 = gratuito / 1x o 3x") no se publicó — contenía términos de facturación anteriores y su idea ya vive en el post principal + tarjeta `1-S2`. Se conserva el registro en `ajuste-facturacion-tokens_pub4.md` (punto 5).

---

## Archivos de salida

| # | Nombre de archivo | Tipo | Tema |
|---|-------------------|------|------|
| 1 | `1-S2-card_pub4` | card-comparativa | Optimización de Tokens y Modelos (reformulada: ligeros/avanzados) |
| 2 | `2-S2-card_pub4` | card-minimalista | Diseñe la solución con un modelo avanzado. |
| 3 | `3-S2-card_pub4` | card-minimalista | Carga progresiva de Skills |
| 4 | `4-S2-card_pub4` | card-minimalista | Higiene de la memoria a corto plazo |
| 5 | `5-S2-card_pub4` | card-comparativa | Memoria vs. Instrucciones |

---

## Brief — `1-S2-card_pub4` · card-comparativa

> ⚠️ **Brief anterior (0x/1x/3x).** La versión final reformulada y corregida de esta tarjeta está en `ajuste-facturacion-tokens_pub4.md` (puntos 7 y 7.1) — tarjeta publicada como "Menos/Más Consumo" (columnas "Menos Consumo" / "Más Consumo", verificado contra la captura de Teams). El contenido de abajo se conserva solo como referencia histórica.

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

> ⚠️ **Cambio aplicado:** en el título, "modelo Premium" → "modelo Avanzado" y "uno Estándar" → "uno ligero". Tarjeta publicada como "Diseñe la solución con un modelo Avanzado." · subtítulo "Y ejecuta el código con uno ligero". Detalle en `ajuste-facturacion-tokens_pub4.md`.
>
> **Transcripción de la tarjeta publicada (captura de Teams — difiere del brief de abajo):**
> - Punto 1: "Referencias precisas con `#File`, así solo se eligen los archivos esenciales para no saturar la ventana de contexto."
> - Punto 2 (aviso, en rojo): "Reserva `@workspace`: solo cuando genuinamente no sepas dónde está el problema."
> - El punto de "En COBOL: un módulo por hilo Premium" **no aparece** en la pieza publicada.

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
- **Fondo:** gris muy claro `#F5F5F5` — diferenciador visual respecto a las otras tarjetas minimalistas (blancas)
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