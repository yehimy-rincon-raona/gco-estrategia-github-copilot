# Tipos de card — Definición de patrones visuales
> Referencia para producción gráfica. Cada tipo tiene estructura, elementos y especificaciones distintas.
> Usar estos nombres en los briefs de Figma y en la nomenclatura de archivos.

---

## card-triptico

**Qué es:** secuencia de 3 panels independientes que cuentan una historia en progresión: portada → problema → solución. Cada panel es una imagen autónoma; juntos forman un carrusel.

**Cuándo usarla:** cuando el contenido necesita contexto narrativo — primero enganchar, luego mostrar el problema, luego dar la solución con criterio claro.

### Estructura por panel

| Panel | Rol | Elementos clave |
|-------|-----|----------------|
| 1 — Portada | Gancho / hook | Franja canal · Pill fase · Headline pregunta · Subtext · Numeración |
| 2 — El problema | Describe el dolor concreto | Headline afirmación · Copy breve · Visual del problema · Dato secundario · Numeración |
| 3 — La solución | Da el criterio o el método | Headline solución · Contenido estructurado (tabla, filas, jerarquía) · CTA · Numeración |

### Especificaciones Figma base

- **Formato:** 1080×1080 px (cuadrado — carrusel Teams)
- **Fondo:** blanco
- **Numeración:** chip pequeño esquina inferior derecha (`1/3`, `2/3`, `3/3`)
- **Tipografía:** CO para headlines · GCO Sans para texto running · monospace para comandos y badges
- **Color acento:** `#DC0028`

---

## card-minimalista

**Qué es:** panel único con jerarquía tipográfica clara. No tiene columnas ni elementos gráficos complejos — su fuerza está en el texto bien estructurado. Ideal para tips, consejos o conceptos que necesitan explicación más rica.

**Cuándo usarla:** cuando el contenido es un consejo o concepto que Nibaldo explicó en sesiones y que necesita párrafo para comunicarse bien — no se puede reducir a una tabla o comparativa.

### Estructura

| Elemento | Posición / Rol | Notas |
|----------|---------------|-------|
| Título corto | Superior derecha · pequeño · uppercase · rojo | Suele ser la serie: "GUÍA DE MAESTRÍA EN COPILOT" |
| Título principal | Zona superior · CO bold · display | La idea principal en una línea |
| Subtítulo | Debajo del título · GCO Sans regular · medio | Explica brevemente la idea principal |
| Párrafo | Cuerpo central · GCO Sans regular | Amplía la idea, da consejos, cita lo importante de las sesiones de Nibaldo |
| Logo Occident | Inferior derecha | Siempre presente |

### Especificaciones Figma base

- **Formato:** 1080×1350 px
- **Fondo:** blanco
- **Título corto:** rojo `#DC0028` · uppercase · alineado a la derecha · 12–14 px equivalente
- **Título principal:** negro · CO bold · tamaño display (40–56 px equivalente)
- **Subtítulo:** negro · GCO Sans regular · tamaño medio (20–24 px)
- **Párrafo:** GCO Sans regular · cuerpo (16–18 px) · interlineado 1.5
- **Comandos inline:** tipografía monospace · fondo gris muy claro `#F5F5F5` · borde sutil
- **Logo:** inferior derecha

---

## card-comparativa

**Qué es:** panel único con encabezado de contexto (eyebrow + título + subtítulo) y dos columnas de comparación. Comunica diferencias entre dos opciones de forma visual y directa.

**Cuándo usarla:** cuando hay exactamente dos opciones, modos o categorías que comparar — con nombre, badge o dato cuantitativo por columna y descripción de uso.

### Estructura

| Elemento | Posición / Rol | Notas |
|----------|---------------|-------|
| Eyebrow (overline) | Superior · rojo · uppercase · pequeño | Contexto de la serie o guía |
| Título principal | Zona superior · CO bold · display | La idea comparativa en una línea |
| Subtítulo | Debajo del título · GCO Sans regular | Explica brevemente el criterio de comparación |
| Columna A | Izquierda · fondo gris claro | Opción 1: nombre · modelo/versión · precio/coste · badge · descripción de uso |
| Columna B | Derecha · fondo gris claro | Opción 2: mismo esquema que columna A |
| Logo Occident | Inferior derecha | Siempre presente |

### Especificaciones Figma base

- **Formato:** 1920×1080 px (landscape) — adaptable a 1080×1350 px si se publica en Teams como imagen vertical
- **Fondo:** blanco
- **Eyebrow:** rojo `#DC0028` · uppercase · GCO Sans · pequeño
- **Título principal:** negro · CO bold · display grande
- **Subtítulo:** negro · GCO Sans regular · cuerpo
- **Columnas:** fondo `#F5F5F5` · sin borde agresivo · esquinas suavemente redondeadas
- **Badge cuantitativo** (`0x`, `1x | 3x`): tipografía display muy grande · rojo `#DC0028`
- **Modelo/versión** (ej: "GPT-4.1 / 5 mini"): rojo `#DC0028` · pequeño
- **Logo:** inferior derecha
- **Tipografía:** CO para título · GCO Sans para texto running

---

## Resumen rápido

| Tipo | Panels | Formato base | Ideal para |
|------|--------|-------------|-----------|
| `card-triptico` | 3 (carrusel) | 1080×1080 px | Narrativa problema → solución |
| `card-minimalista` | 1 | 1080×1350 px | Consejos, conceptos, tips con párrafo |
| `card-comparativa` | 1 | 1920×1080 px | Comparar dos opciones con badges |