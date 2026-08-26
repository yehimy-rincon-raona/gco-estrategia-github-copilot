> # ⛔ DEPRECADO — no usar
>
> **Fecha de deprecación:** 25 de agosto de 2026
> **Archivo original:** estaban dentro de `canal-anuncios-tips_pub4.md` (carpeta de Pub 4)
>
> ## Por qué se deprecaron
>
> Se sacaron del md de Pub 4 para dejarlo limpio: describían piezas que **ya se volvieron a producir**, y convivían con los briefs vigentes en el mismo archivo. Quien abría el documento veía dos versiones del mismo brief y tenía que adivinar cuál valía.
>
> - **Briefs 1 y 2** — terminología de facturación anterior al 21 jun 2026: multiplicadores `0x` / `1x | 3x`, "(Gratis)", "Modelos Estándar / Premium" y nombres de modelo nunca confirmados para GCO. El modelo de multiplicadores quedó legacy el 1 jun 2026. Las versiones finales están en `ajuste-facturacion-tokens_pub4.md` (puntos 7 y 7.1) y en el md limpio de Pub 4.
> - **Brief 3** — describe la tarjeta de "Memoria vs. Instrucciones", desmentida en la reunión del 25 ago. Sustituido por el brief de `post-una-vez-o-siempre_pub4.md`.
>
> ## Imágenes asociadas, en esta misma carpeta
>
> | Imagen | Brief que la describe |
> |---|---|
> | `05-1-S2-Infografia_pub4.png` | Brief 1 |
> | `05-2-S2-card_pub4.png` | Brief 2 |
> | `deprecado_pub-04_s-2_tarjeta-comparativa_memoria-vs-instrucciones.png` | Brief 3 |
>
> ---

# Briefs históricos — Pub 4

## Brief 1 · `1-S2-card_pub4` · card-comparativa — versión 0x/1x/3x

**Tipo de pieza:** card-comparativa — panel único con dos columnas
**Origen:** transcripción de gráfica de referencia

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

## Brief 2 · `2-S2-card_pub4` · card-minimalista · Planificador-Ejecutor — versión Premium/Estándar

**Tipo de pieza:** card-minimalista — panel único
**Origen del contenido:** imagen de referencia · sesión 10 junio 2026

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
- **Fondo:** gris muy claro `#F5F5F5`
- **Ícono superior izquierda:** checklist/kanban · rojo `#DC0028` · aprox. 80×80 px
- **Título corto:** rojo `#DC0028` · uppercase · alineado a la derecha · tipografía pequeña
- **Título principal:** gris oscuro · CO bold · display (40–56 px equiv.)
- **Subtítulo:** gris oscuro · GCO Sans regular · tamaño medio
- **Bullet:** GCO Sans regular · cuerpo · `#file` en monospace con chip `#F5F5F5`/borde
- **Aviso "Reserva...":** rojo `#DC0028` · bold · `@workspace` en monospace con chip
- **Logo Occident:** inferior derecha

---

## Brief 3 · `5-S2-card_pub4` · card-comparativa · Memoria vs. Instrucciones

**Tipo de pieza:** card-comparativa — panel único con dos columnas
**Origen del contenido:** imagen de referencia · sesión 10 junio 2026

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
