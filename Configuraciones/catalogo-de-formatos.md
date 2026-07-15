# Catálogo de formatos — Piezas gráficas GitHub Copilot GCO
> Documento maestro para Claude Design (Design system files).
> Define cada formato gráfico estandarizado del proyecto: código, cuándo usarlo, cómo se reconoce y qué imagen de referencia consultar.
> Ningún dato de este catálogo es inventado — todo proviene de piezas reales del proyecto.

---

## Cómo usar este catálogo

Cuando el usuario pase información y diga **qué formato usar** (por su código `F1`–`F4`, o por su nombre exacto: `card-triptico`, `infografía`, `card-minimalista`, `card-comparativa` o `banner de canal`), Claude Design debe:

1. Ubicar la ficha del formato en este documento (por código o por nombre). Si el formato tiene variantes (F2, F4) y el usuario no dijo cuál, pregúntale antes de diseñar.
2. Abrir la **imagen de referencia** indicada en esa ficha (están cargadas en la carpeta `uploads` del proyecto) y clonarla como base — misma estructura, mismos colores, misma tipografía, misma posición de elementos.
3. Sustituir únicamente el contenido por el que se entregue en el brief.
4. Respetar sin excepción el **Sistema base común** de más abajo.

Regla transversal del proyecto: **no inventar**. Si un texto, dato o elemento no está en el brief, se marca `[No hay información — confirmar con el usuario]`, no se rellena con una versión "lógica".

Cómo consultar las referencias: cada ficha nombra su imagen de referencia (ej. `card-triptico_portada.png`). Esas imágenes están subidas al proyecto en `uploads`. Claude Design debe **abrir y mirar la imagen** para replicar el diseño, no deducirlo del texto de la ficha. El texto de la ficha describe; la imagen manda.

El diseño de las piezas ya está determinado por el usuario. El rol de Claude Design es producir dentro de ese sistema, no reinterpretarlo.

---

## Sistema base común — aplica a TODOS los formatos

### Colores

| Uso | Color |
|-----|-------|
| Fondo general | Blanco `#FFFFFF` |
| Acento de marca (eyebrow, numeración, highlight, CTA, signos, badges) | Rojo `#DC0028` |
| Naranja de marca (solo en el degradado de la portada del `card-triptico`) | Naranja `#FA961E` |
| Bloque de problema / fondo diferenciador | Gris claro `#F5F5F5` o `#F2F2F2` |
| Título / headline | Negro `#1A1A1A` |
| Texto corriente | Gris oscuro `#333333` |
| Subtexto / texto secundario | Gris medio `#555555` / `#666666` |

### Tipografía

- **Títulos y headlines:** CO Bold
- **Texto corriente:** GCO Sans Regular
- **Términos técnicos y comandos** (`#selection`, `SQLCODE`, `copybook`, `PERFORM`, `copilot-instructions.md`): monospace, en chip con borde, sin relleno de color
- Referencia del sistema tipográfico: `Manual de marca/CatalanaFonts/GCO_TTF/GCO_TTF/`

### Reglas de marca invariantes

- **Sin fondos negros nunca.** El rojo `#DC0028` se usa como acento en todos los formatos, y además como **fondo sólido solo en estos dos casos concretos**, no en ningún otro: (1) el panel de solución del `card-triptico` (F1); (2) la variante roja del `banner de canal` del canal General (F4). Claude Design: fuera de estos dos casos, el fondo es siempre blanco o gris `#F5F5F5`. Si un brief pide fondo rojo en cualquier otro formato, NO lo apliques y marca `[Fondo rojo no permitido en este formato — confirmar con el usuario]`.
- **Logo Occident** (isótipo) presente en toda pieza: superior izquierda en portadas, inferior derecha en el resto.
- **Sin emojis ni iconos decorativos**, salvo cuando el brief los pida explícitamente para esa pieza. Los CTA de algunas piezas usan un único ícono de mano (👆 / 👉) como está documentado en su brief — no agregar más.
- **Producto:** siempre "GitHub Copilot", nunca solo "Copilot", en cualquier texto de la pieza.
- **Tipografía:** usa **únicamente** las fuentes configuradas en el design system del proyecto (CO Bold para títulos, GCO Sans para texto; cargadas en la carpeta `fonts` y definidas en `colors_and_type.css`). No sustituir por fuentes del sistema ni genéricas (Arial, Helvetica, etc.) aunque se parezcan.
- **Iconos:** usa **únicamente** los iconos del proyecto, ubicados en `assets/icons`. No generar iconos nuevos ni tomarlos de librerías externas. Si un icono necesario no existe en `assets/icons`, marca `[Icono no disponible en assets/icons — confirmar con el usuario]` en lugar de improvisar uno.

### Filtro editorial (antes de diseñar)

Toda pieza pasa el filtro de la resistencia: *"¿Un developer de COBOL con 20 años en mainframe la ve y piensa 'esto me sirve hoy'?"*. Ejemplos anclados en el entorno real de GCO: COBOL, DB2, PL/SQL, .NET, copybooks, SQLCODE, Jira.

### Estilos de ilustración (proponibles según el contenido)

El proyecto tiene dos lenguajes de ilustración de marca Occident. Claude Design puede **proponer** cualquiera de los dos según lo que pida el contenido; no están asignados de forma fija a un formato. Las imágenes de referencia de ambos estilos están en la carpeta `types_of_illustrations` — Claude Design debe abrirlas y replicar el acabado, no aproximarlo de memoria.

- **Estilo 1 — Icono a línea (marcador / tiza).** Pictograma o icono de trazo suelto hecho a mano, mono-color en un color de marca, sin relleno. Funciona sobre fondo blanco, gris claro, fondo de color al 10% o degradado (en degradado el trazo va en blanco). Es el estilo de la portada del `card-triptico` (F1). Úsalo para conceptos abstractos, temas de canal, o cuando se necesita un solo símbolo claro.
- **Estilo 2 — Collage: foto B/N + trazo a mano.** Un objeto fotográfico real en blanco y negro combinado con un dibujo a mano suelto en un color de marca (ej: margarita fotográfica + casa dibujada en rosa; llave inglesa fotográfica + coche dibujado en azul; nido + bombilla). Los dos elementos conviven en la misma ilustración. Es el estilo más distintivo y elaborado; úsalo cuando la pieza permita una imagen más rica y narrativa.

**Reglas comunes a ambos estilos:**
- El color del trazo sale de la paleta de marca; un color por ilustración, no mezclar varios en el mismo trazo.
- El acabado a mano (línea suelta, no vectorial perfecta) es la seña de identidad — mantenerlo siempre.
- Al proponer una ilustración, Claude Design indica cuál de los dos estilos usa y por qué encaja con el contenido, para que el usuario apruebe antes de producir.
- Partir siempre de los recursos del proyecto (iconos de `assets/icons`, referencias de `types_of_illustrations`); no generar ilustraciones de librerías externas.

---

## Tabla maestra de formatos

Esta es la **única** tabla de referencia de formatos. Total: **4 formatos base · 7 variantes visuales**. Para pedir una pieza a Claude Design basta con el código (+ variante si aplica) + el contenido. Ejemplo: "diseña una F2-C con este contenido: ...".

| Código | Nombre exacto | Formato / dimensiones | Para qué contenido | Variantes | Imagen(es) de referencia en `uploads` |
|--------|---------------|-----------------------|--------------------|-----------|----------------------------------------|
| `F1` | `card-triptico` | 3 paneles 1080×1080 px (carrusel) | Caso de uso o tema narrado en 3 pasos: Portada → Problema → Solución | única (3 paneles: degradado / blanco / rojo) | `card-triptico_portada.png` · `card-triptico_problema.png` · `card-triptico_solucion.png` |
| `F2` | `infografía` | Vertical 1080×1350 px | Jerarquía/pirámide, procedimiento largo, o fórmula desglosada en componentes | B (jerarquía/pirámide) · C (paso a paso largo) · D (fórmula/componentes) | `infografia_jerarquia-piramide.jpg` · `infografia_paso-a-paso-largo.jpg` · `09-S5-infografia_prompts.jpg` (Pub 8 — referencia F2-D) |
| `F3` | `card-minimalista` | Panel único 1080×1350 px | Un tip corto, una sola idea o regla | única | `card-minimalista.png` |
| `F4` | `banner de canal` | Portada de canal ~1200×627 px | Portada/encabezado de un canal de Teams | Roja (canal General) · Gris (resto de canales) | `banner-canal_general-rojo.jpg` · `banner-canal_gris.jpg` |

**Nota:** "Píldora Ágil" no es un formato aparte — es un **tema** que se produce con el `card-triptico` (F1). Queda absorbido ahí.

---

## Ficha F1 · `card-triptico`

**Formato:** 3 paneles cuadrados de 1080×1080 px, publicados como carrusel en Teams.

**Cuándo usarlo:** para un **caso de uso o tema** que se cuenta de un vistazo en tres pasos: Portada → Problema → Solución. El tríptico narra el caso; el texto del post aporta los prompts copiables. No se duplica contenido entre gráfica y texto — los prompts nunca van en la pieza.

**Estructura (los 3 paneles) — cada panel tiene su propio fondo:**
- **Panel 1 — Portada:** parte superior con **degradado naranja `#FA961E` → rojo `#DC0028`** (aquí va la ilustración / el tema de la tarjeta, ej. "Píldora Ágil"); parte inferior blanca con eyebrow en rojo uppercase (ej. `CASO DE USO REAL · <LENGUAJE>` o `PRIMEROS PASOS CON GITHUB COPILOT`), el **título** en CO Bold, y subtítulo/descripción cuando aplique. Isótipo Occident arriba izquierda.
  - **Tratamiento de la ilustración de portada:** el icono/ilustración sobre el degradado usa el **Estilo 1 — Icono a línea (marcador / tiza)** descrito en "Estilos de ilustración" del sistema base (sobre degradado, el trazo va en blanco). Parte de un icono de `assets/icons` y aplícale ese acabado a mano; no lo reemplaces por un icono plano estándar. Referencias en `types_of_illustrations`.
- **Panel 2 — El problema / la pregunta (fondo blanco):** eyebrow o tag superior (ej. `EL PROBLEMA`, o el tag `Píldora Ágil | Video N` en esquina superior derecha), la afirmación del dolor real o la duda que se plantea, con el copy que la desarrolla, un fragmento clave resaltado en rojo, y un visual/icono de apoyo si aplica.
- **Panel 3 — La solución (fondo rojo `#DC0028`):** tag `SOLUCIÓN` + pill de fase (ej. `Fase 1 | Concienciación`) arriba, el método en **filas de pasos numerados** (número grande + texto, todo en blanco), y la frase de cierre / remate en bold al final (CTA).

**Numeración de paneles:** los tres paneles llevan **siempre** el chip de numeración `1/3` · `2/3` · `3/3` en la esquina inferior derecha (aplica a todos los temas del `card-triptico`, incluido Píldora Ágil). Chip pequeño, en rojo `#DC0028` sobre fondo blanco; en el panel de solución (fondo rojo) el chip va en blanco.

**Palabras clave / señales que disparan este formato:** "caso de uso real", "tríptico", "portada → problema → solución", "de un vistazo", "carrusel", "COBOL heredado", "bug fixing", "píldora ágil", "problema frecuente", tres paneles.

**Especificaciones propias:**
- Los tres paneles tienen fondos distintos por diseño: portada (degradado naranja→rojo + base blanca) · medio (blanco) · solución (rojo sólido `#DC0028`). Este tratamiento de color es propio del `card-triptico` — no aplica a los demás formatos.
- Eyebrow / tags en rojo `#DC0028` uppercase sobre fondo blanco; en el panel de solución (fondo rojo) el texto va en blanco.
- Chips de términos técnicos en monospace con borde, sin relleno.
- Título en CO Bold; texto corriente en GCO Sans.
- Los estilos de ilustración del proyecto (Estilo 1 icono a línea, Estilo 2 collage foto B/N + trazo a mano) pueden **proponerse también en otras tarjetas** cuando aporten, no quedan limitados a la portada del tríptico. Ver "Estilos de ilustración" en el sistema base.

**Imágenes de referencia (en `uploads`):** `card-triptico_portada.png` · `card-triptico_problema.png` · `card-triptico_solucion.png`.

> Nota: el **tratamiento de fondos** (degradado / blanco / rojo) es el que define el usuario y prevalece sobre cualquier indicación de "fondo blanco" en el texto de un brief.

---

## Ficha F2 · `infografía`

**Formato:** vertical, 1080×1350 px (Teams/Instagram compatible). La variante C (paso a paso largo) puede extenderse más verticalmente por su mayor cantidad de contenido.

**Cuándo usarlo:** para explicar una **jerarquía/pirámide** de un concepto, un **procedimiento extenso** con varios pasos detallados, o una **fórmula/estructura repetible** desglosada en sus componentes. Es la pieza que funciona de forma autónoma, sin necesidad de leer el post.

### Variante F2-B — Jerarquía / pirámide
Logo + pill de fase · eyebrow · título · subtítulo · forma de pirámide (ápice = más acotado, base = más amplio) con chips de comando y etiquetas laterales · CTA.
- **Señales:** "jerarquía", "pirámide", "niveles", "de más a menos acotado".
- **Imagen de referencia:** `infografia_jerarquia-piramide.jpg`

### Variante F2-C — Paso a paso largo / detallado
- Header centrado: logo + pill de fase, título grande + subtítulo rojo + descripción de apoyo.
- Dos cajas de contexto previo lado a lado (fondo `#F5F5F5`, icono lineal rojo + título + texto).
- Pasos numerados en layout alternado/zigzag (icono a un lado, texto al otro, alternando por paso).
- Número + título en rojo grande `#DC0028`, sin círculo de fondo.
- Chips de comando en monospace con flecha `>` roja antes del comando, fondo blanco con borde.
- Checklist final en dos columnas con checkmark rojo + texto negro.
- Marca de agua sutil del isótipo Occident de fondo.
- Footer con nombre de campaña + año (ej: "Estrategia de Adopción · 2026").
- **Señales:** "configura tu entorno", "lo que necesitas antes de", procedimiento con prerrequisitos + pasos + checklist final, contenido más extenso por paso (código, validaciones, contexto).
- **Imagen de referencia:** `infografia_paso-a-paso-largo.jpg` — "Configura tu entorno — Activa GitHub Copilot en Visual Studio".

### Variante F2-D — Fórmula / componentes
Para cuando el mensaje central es **una fórmula o estructura repetible** que se desglosa en sus componentes (no es un proceso cronológico, sino las partes de una misma fórmula).
- Eyebrow rojo uppercase + título principal en CO Bold.
- **La fórmula como elemento central y protagonista:** las palabras clave unidas por signos `+`, con los `+` en rojo `#DC0028` como acento y las palabras en negro CO Bold.
- Debajo, **una línea/bloque por cada componente** de la fórmula: nombre del componente en CO Bold + explicación breve en GCO Sans gris.
- Remate que destaca el componente clave (el más olvidado), con rojo `#DC0028` como acento.
- Logo Occident inferior derecha.
- El ejemplo completo NO va en la pieza: vive en el texto del post. La gráfica solo fija la fórmula.
- **Señales:** "la fórmula", "5 piezas", "Rol + Contexto + Tarea + Restricciones + Formato", "estructura repetible", "no más largo, más completo", palabras unidas por `+`, componentes de algo.
- **Imagen de referencia:** `Produccion/semana-5_29jun-03jul/pub-08_mar-30jun_(repub-09_mar-11-ago)/09-S5-infografia_prompts.jpg` — "La fórmula del prompt que funciona" (Pub 8). Primera pieza aprobada de esta variante; es la referencia oficial de F2-D.

**Especificaciones comunes:**
- Bloque introductorio / nota al pie: fondo gris (`#F2F2F2` / `#F7F7F7`) con borde izquierdo rojo de 4 px.
- Chips de comando en monospace con borde, sin color de fondo.

---

## Ficha F3 · `card-minimalista`

**Formato:** panel único, 1080×1350 px.

**Cuándo usarlo:** para **un solo tip, una regla o una idea corta** que se entiende en segundos. Es el formato más frecuente para "Anuncios y Tips Ágiles" y para reforzar un hábito concreto.

**Estructura:** título corto (eyebrow en rojo, uppercase, alineado a la derecha), título principal (afirmación breve en CO Bold), subtítulo, cuerpo (badges de nivel apilados, bullets o párrafo corto), aviso destacado en rojo cuando aplica, logo inferior derecha.

**Palabras clave / señales que disparan este formato:** "un tip", "una regla para recordar", "empieza por", "hábito", "higiene de la memoria", "carga progresiva", tip único sin comparación ni pasos secuenciales.

**Especificaciones propias:**
- Título corto rojo `#DC0028`, uppercase, alineado a la derecha, tamaño pequeño.
- Título principal negro, CO Bold, display (40–56 px equiv.).
- Comandos inline en monospace con fondo `#F5F5F5` y borde sutil.
- Variante de fondo gris `#F5F5F5` permitida para diferenciar una tarjeta dentro de una serie, manteniendo el resto blancas.

**Imagen de referencia (en `uploads`):** `card-minimalista.png`.

---

## Ficha F4 · `banner de canal`

**Formato:** portada/encabezado de canal, horizontal (~1200×627 px).

**Cuándo usarlo:** como portada de un canal de Teams. Tiene dos variantes según el canal:

| Variante | Cuándo | Fondo | Ilustración |
|----------|--------|-------|-------------|
| **F4-Roja** | Canal **General** únicamente — portada principal del espacio de adopción | Rojo sólido `#DC0028` | Blanca |
| **F4-Gris** | Resto de canales (Casos de uso, Foros de ayuda, Primeros pasos, Reservas 1:1, Anuncios y Tips, etc.) | Gris claro `#F5F5F5` | Roja |

**Estructura común a ambas variantes:**
- Isótipo Occident arriba izquierda.
- Pill de fase (ej: `Fase 1 | Concienciación`) arriba derecha.
- Ilustración lineal a mano a la izquierda.
- Eyebrow uppercase + título grande (CO Bold) a la derecha.
- Logo Occident completo abajo derecha.

**Palabras clave / señales que disparan este formato:** "banner", "portada de canal", "encabezado del canal", o el nombre de un canal específico (Casos de uso, Foros, Primeros pasos, Reservas, Tips).

**Regla crítica:** la variante roja usa fondo rojo sólido `#DC0028` (decisión de diseño confirmada el 4 junio 2026) y aplica **solo** al canal General. Todas las demás portadas de canal usan la variante gris. Nota para Claude Design: el fondo rojo sólido está permitido en dos formatos del proyecto (ver "Reglas de marca invariantes": F1 solución y esta F4 canal General); no lo extiendas a ningún otro formato.

**Imágenes de referencia (en `uploads`):**
- F4-Roja: `banner-canal_general-rojo.jpg` ("Tu espacio de adopción para GitHub Copilot").
- F4-Gris: `banner-canal_gris.jpg` (ejemplo de portada de canal individual).

---

## Datos que Claude Design NO debe inventar (pendientes de confirmar)

Estos valores todavía no están definidos en el catálogo. Claude Design: mientras no estén, **no los rellenes con un valor propio ni los aproximes a ojo**. Usa un placeholder visible y avisa al usuario. Que un dato falte aquí es la señal de que hay que preguntar, no de que hay que improvisar.

- **Retícula y márgenes:** no está definida la retícula (márgenes exteriores, safe-area, posición exacta del eyebrow respecto al título, separación entre bloques). No centres ni espacies "por criterio propio": replica la posición de la imagen de referencia de cada ficha. Si no es deducible de la imagen, marca `[Retícula por confirmar]`.
- **Tamaños de fuente:** solo la F3 da un rango (título principal 40–56 px). Para los demás formatos no hay tamaños definidos. No elijas el tamaño tú: toma el de la imagen de referencia y, si no es claro, marca `[Tamaño de fuente por confirmar]`.
- **Marca de agua del isótipo (F2-C):** no está definida su opacidad ni su tamaño. Marca `[Marca de agua F2-C: opacidad y tamaño por confirmar]`.

---

## Notas de evidencia visual

La referencia canónica de cada formato es su **imagen** cargada en `uploads` (nombrada en cada ficha). No reinterpretar el diseño: abrir la imagen de referencia, clonarla y cambiar solo el contenido.
