# Brief de tarjetas — Pub 2 · Los dos problemas más frecuentes al configurar el entorno
> Tipo: Tarjetas secuenciales · 3 imágenes por tema · 2 temas = 6 tarjetas
> Canal: Primeros Pasos con GitHub Copilot
> Origen: Reunión de revisión semanal con Jonatan (GCO) · 9 junio 2026
> Referencia visual: `S1-Card_paso1.png` · mismo estilo, mismos colores y tipografía
> Herramienta de diseño: Figma
> Nota de lenguaje (pedido de Jonatan): sin anglicismos en los documentos — se usa "tarjeta" en lugar de "tarjeta". Los nombres de archivo (`S1-Card_...`) no cambian.

---

## Comentarios de Jonatan en Teams (16 jun 2026) — acciones

> Comentario en el hilo "¿GitHub Copilot no aparece en tu Visual Studio?" (captura: `Produccion/imagenes_teams/02_primeros-pasos/`):
> _"Este apartado lo publicaría antes del 'No tiene memoria permanente'. Lo dejaría como segunda publicación. Piensa que esto no debe dar lugar a pensar. Cuando se menciona el myprofile, que sea clicable y te lleve a él."_

1. **Orden de publicación (aplica al despliegue en el Teams oficial de GCO):** el post "¿GitHub Copilot no aparece en tu Visual Studio?" va como **segunda publicación del canal Primeros Pasos**, antes de "GitHub Copilot no tiene memoria permanente. Tiene un cajón." (Pub 3).
2. **Enlace clicable:** la mención a "My Profile de Microsoft" debe ser un hipervínculo que lleve directamente al portal. ✅ Aplicado (15 jul): `https://myprofile.microsoft.com` — URL de Jonatan (reunión 25 jun); si cambia, Nibaldo la edita en el post de Teams programado.

---

## Contexto

Jonatan identificó en la reunión del 9 de junio que estos dos problemas son los que **más confusión generan** en el equipo de GCO al intentar usar GitHub Copilot por primera vez. Cada tema se desarrolla en 3 tarjetas:

- **Tarjeta 1 — Portada:** pregunta gancho (el problema como lo vive el developer)
- **Tarjeta 2 — El problema:** qué está pasando y por qué genera confusión
- **Tarjeta 3 — La solución:** qué hacer exactamente, paso a paso

---

## TEMA 1 — "¿Tengo que instalar Visual Studio?"

> Jonatan (transcripción 0:31): *"El 60% de la gente lo entenderá, pero el 40% no. Y quiero evitarme gente que nos pregunte a nosotros."*

---

### Tarjeta T1-1 — Portada

| Elemento | Texto |
|----------|-------|
| Tag canal | 🪡 Primeros Pasos con GitHub Copilot |
| Pill fase | Fase 1 · Concienciación |
| Número de tarjeta | 1 / 3 |
| Pregunta gancho (título grande) | **¿Tienes que instalar Visual Studio?** |
| Respuesta directa (subtítulo) | No. Ya está en tu máquina. |
| Texto de apoyo | Esta es la confusión más frecuente en el primer día. |
| Visual sugerido | Icono de escritorio con el logo de Visual Studio · fondo limpio · sin instaladores ni barras de progreso |

---

### Tarjeta T1-2 — El problema

| Elemento | Texto |
|----------|-------|
| Número de tarjeta | 2 / 3 |
| Título de sección | La confusión más frecuente |
| Párrafo principal | Las guías genéricas de GitHub Copilot en internet piden que instales Visual Studio. En GCO eso no aplica. Visual Studio ya está instalado en todas las máquinas corporativas. Ir a buscar el ejecutable o el instalador es tiempo perdido. |
| Elemento visual de problema | Icono de instalador o ejecutable con X roja encima · o flecha hacia descarga con tachado |
| Fondo del bloque | `#F5F5F5` gris claro · borde izquierdo `#DC0028` |

---

### Tarjeta T1-3 — La solución

| Elemento | Texto |
|----------|-------|
| Número de tarjeta | 3 / 3 |
| Título de sección | Lo que sí tienes que hacer |
| Punto 1 | 💻 **Visual Studio ya está listo** → icono en el escritorio → doble clic y se abre |
| Punto 2 | 🏢 **¿Necesitas Git, actualizaciones o instalar GitHub Copilot?** → Portal de Empresa · el aplicativo corporativo en tu ordenador |
| Cierre (frase bold) | Sin descarga de instaladores. *(actualizado según la tarjeta publicada — captura Teams)* |
| Fondo del bloque solución | `#DC0028` con texto blanco, o blanco con acento rojo |

---

## Post que acompaña la Tarjeta T2 — movido a su carpeta de republicación

> El post "¿GitHub Copilot no aparece en tu Visual Studio?" es **publicación propia del martes 21 jul** (pedido de Jonatan) y su archivo operativo vive junto al tríptico T2:
> **`Produccion/semana-2_08-12jun(pub-03-04-05)/triptico-licencia_(dia-03_mar-21-jul)/post-licencia_mar-21jul.md`**
> Ahí están el texto listo para copiar (con el enlace clicable a My Profile ya aplicado), las piezas a adjuntar y las verificaciones. Este documento conserva solo los briefs de diseño de las 6 tarjetas.

---

## TEMA 2 — "GitHub Copilot no aparece en mi Visual Studio"

> Jonatan (transcripción 1:36): *"No tengo la licencia, no se me ha activado. Eso pasará a todos los que no lo hayan usado... los pasos es tan simple como..."*

---

### Tarjeta T2-1 — Portada

| Elemento | Texto |
|----------|-------|
| Tag canal | 🪡 Primeros Pasos con GitHub Copilot |
| Pill fase | Fase 1 · Concienciación |
| Número de tarjeta | 1 / 3 |
| Pregunta gancho (título grande) | **¿GitHub Copilot no aparece en tu Visual Studio?** |
| Respuesta directa (subtítulo) | No es un error del IDE. Es la licencia. |
| Texto de apoyo | Si no fuiste a las primeras sesiones de formación, es probable que no esté activa todavía. |
| Visual sugerido | Panel de GitHub Copilot Chat vacío o con candado · sin mensaje de error técnico |

---

### Tarjeta T2-2 — El problema

| Elemento | Texto |
|----------|-------|
| Número de tarjeta | 2 / 3 |
| Título de sección | Qué está pasando |
| Párrafo principal | GitHub Copilot no se activa solo. Necesita que alguien apruebe tu acceso. Si no asististe a las primeras sesiones de formación, es probable que nadie lo haya solicitado todavía. El asistente aparece en el menú pero no responde — no porque esté roto, sino porque la licencia aún no llegó a tu máquina. |
| Elemento visual de problema | Panel de GitHub Copilot sin respuesta · o icono de llave con candado |
| Fondo del bloque | `#F5F5F5` gris claro · borde izquierdo `#DC0028` |

---

### Tarjeta T2-3 — La solución

| Elemento | Texto |
|----------|-------|
| Número de tarjeta | 3 / 3 |
| Título de sección | 2 clics y ~40 minutos |
| Paso 1 | 🌐 Entra en **My Profile de Microsoft** |
| Paso 2 | 📋 Menú lateral → busca GitHub Copilot → **Solicitar acceso** |
| Paso 3 | ⏱ Espera ~40 minutos → la licencia llega sola a tu Visual Studio |
| Nota de apoyo | No necesitas llamar a IT. Es autoservicio. |
| Cierre (franja inferior) | Se aprueba internamente desde GCO. *(así aparece en la tarjeta publicada — el dato "lo aprueban Óscar y Jonatan" quedó como referencia interna, no va en la pieza)* |
| Fondo del bloque solución | `#DC0028` con texto blanco, o blanco con acento rojo |

---

## Especificaciones visuales para Figma — aplica a las 6 tarjetas

### Formato
- **Tamaño:** 1080 × 1080 px (cuadrado) o 1080 × 1350 px (vertical Teams/Instagram)
- **Referencia de estilo:** `S1-Card_paso1.png` · mismo tratamiento visual, mismos colores y tipografía
- **Las 6 tarjetas forman dos secuencias** — deben leerse como mini-historias de 3 pasos

### Sistema de color
| Uso | Color |
|-----|-------|
| Fondo general | Blanco `#FFFFFF` |
| Título / pregunta gancho | Negro `#1A1A1A` o rojo `#DC0028` |
| Acento / pill / etiquetas | Rojo `#DC0028` |
| Bloque de problema | Gris claro `#F5F5F5` con borde izquierdo rojo |
| Bloque de solución | Rojo `#DC0028` fondo + texto blanco, o blanco con texto negro + bordes rojos |
| Texto corriente | Gris oscuro `#333333` |

### Tipografía
- Títulos grandes (pregunta gancho): **CO Bold** (o fallback: Inter Bold)
- Texto corriente y pasos: GCO Sans Regular (o fallback: Inter Regular)
- Pill de fase: GCO Sans Semibold · tamaño pequeño

### Elementos fijos en todas las tarjetas
- Tag canal: franja superior · fondo `#DC0028` · texto blanco · icono 🪡
- Pill de fase: debajo del tag · fondo `#F2F2F2` · texto `#DC0028`
- Indicador de posición: "1 / 3", "2 / 3", "3 / 3" · esquina superior derecha o inferior

### Nomenclatura de archivos de salida (Figma export)
| Tarjeta | Nombre de archivo |
|---------|------------------|
| Tema 1 · Tarjeta 1 Portada | `S1-Card_vs-instalacion_01.jpg` |
| Tema 1 · Tarjeta 2 Problema | `S1-Card_vs-instalacion_02.jpg` |
| Tema 1 · Tarjeta 3 Solución | `S1-Card_vs-instalacion_03.jpg` |
| Tema 2 · Tarjeta 1 Portada | `03-1B-S1-Card_T2-Portada.png` (en `triptico-licencia_(dia-03_mar-21-jul)/`) |
| Tema 2 · Tarjeta 2 Problema | `03-2B-S1-Card_T2-el_problema.png` |
| Tema 2 · Tarjeta 3 Solución | `03-3B-S1-Card_T2-la_solucion.png` |

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| VS ya instalado / icono escritorio | Jonatan · transcripción 0:56 |
| Portal de Empresa · qué contiene | Jonatan · transcripción 1:20 |
| "El 40% no lo entenderá" | Jonatan · transcripción 0:31 |
| Licencia no activa · pasos My Profile | Jonatan · transcripción 1:36 |
| ~40 minutos de espera | Jonatan · transcripción 1:36 |
| Quién aprueba: Óscar y Jonatan | Jonatan · transcripción 1:36 |