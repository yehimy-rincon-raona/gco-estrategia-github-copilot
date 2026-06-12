# Canal Primeros Pasos — Pub 5 · Referencias de contexto
> Canal: Primeros Pasos con GitHub Copilot · Fecha: Jueves 11 junio · Tipo: Tip de uso
> Estado: publicado · Jueves 11 junio
> Fuente: sesiones Nibaldo · prop_skills-optimizacion-tokens.md

---

## Objetivo de esta publicación

Que los developers dejen de copiar y pegar código en el chat y empiecen a usar las referencias de contexto de GitHub Copilot. El hábito que se quiere instalar: empezar siempre por la referencia más acotada (`#selection`) y escalar solo si hace falta.

---

## Post listo para Teams

**Asunto:** `🔍 ¿Copias y pegas código en el chat?`

---

**Hay una forma más precisa.**
Cuando copias código en el chat, le das a **GitHub Copilot más información de la que necesita** — y eso hace la respuesta más lenta y menos enfocada.

GitHub Copilot puede leer directamente desde donde ya está el código.

**Cuatro referencias, de más a menos acotado 👇 :**

1. `#selection` — el bloque que tienes seleccionado. Sin copiar, sin pegar.
2. **Método o clase** — lo más quirúrgico. Apunta justo donde está el problema.
3. `#file` — el archivo completo, cuando la pregunta afecta todo el fichero.
4. `@workspace` — solo cuando no sabes en qué parte del proyecto está el problema.

Ejemplo para COBOL:
✅ "Revisa este método `#selection` y dime por qué falla el SQLCODE -803."
❌ "Revisa toda la solución y dime qué está mal."

👉 **Empieza siempre por lo más acotado.**

---

## Tono de comunicación

El gancho es el comportamiento actual que tienen (copiar y pegar), no un error que cometieron. El tono es "hay una forma mejor que ya existe".

Claves:
- El ejemplo COBOL + SQLCODE -803 es concreto y familiar para el equipo de GCO.
- La jerarquía de 4 niveles da un criterio claro — no un listado de opciones.
- `@workspace` se enmarca como último recurso, no como primer recurso.

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Referencias `#selection`, `#file`, clase, método | G4M Sesión 2 · G5M Sesión 2 |
| `@workspace` como último recurso | G5M Sesión 2 |
| "Limitar tokens con referencias" | `resumen_nibaldo-optimizacion-tokens.md` §8 |
| Ejemplo de líneas concretas ("1007 y 1024") | `resumen_nibaldo-uso-de-la-memoria.md` §11 |
| Prop base | `prop_skills-optimizacion-tokens.md` |

---

## Posts de hilo — Una respuesta por pieza

> El post principal va con `1-S2-Infografia_pub5` (infografía de jerarquía). Cada reply a continuación acompaña una pieza y le da contexto al equipo antes o después de compartirla.

---

### Reply 1 — acompaña `1-S2-Infografia_pub5` (infografía)

🔍 **La jerarquía completa: cuatro niveles para darle a GitHub Copilot exactamente lo que necesita.**

De arriba abajo: `#selection` y método/clase son lo más quirúrgico — apuntas directamente al problema. `#file` cuando la pregunta afecta todo el fichero. `@workspace` solo cuando no sabes en qué parte del proyecto está el fallo.

Cada nivel consume más tokens que el anterior. Empezar por arriba no es solo más preciso — es más eficiente.

→ Adjuntar: `1-S2-Infografia_pub5`

---

### Reply 2 — acompaña `2-S2-card_pub5` (card-minimalista)

🎯 **Una regla para recordar: si el primero alcanza, no subas al siguiente.**

`#selection` resuelve la mayoría de las preguntas del día a día. Si no es suficiente, sube a método o clase. Si necesitas el fichero completo, `#file`. Si no sabes dónde buscar, `@workspace` — pero eso es la excepción, no el punto de partida.

Para COBOL con SQLCODE: `#selection` sobre el bloque que falla es suficiente para la mayoría de diagnósticos. No hace falta cargar el programa entero.

→ Adjuntar: `2-S2-card_pub5`

---

## Archivos de salida

| # | Nombre de archivo | Tipo | Tema |
|---|-------------------|------|------|
| 1 | `1-S2-Infografia_pub5` | infografía · 1080×1350 px | Dale a GitHub Copilot solo lo que necesita |
| 2 | `2-S2-card_pub5` | card-minimalista · 1080×1350 px | Empieza por lo más acotado. |

---

## Brief — `1-S2-Infografia_pub5` · infografía · jerarquía de referencias

> ✅ Pieza producida y publicada el jueves 11 junio.

**Tipo de pieza:** infografía — pirámide de acotación del contexto
**Origen del contenido:** `prop_skills-optimizacion-tokens.md` · sesiones G4M S2, G5M S2

### Estructura visual — transcripción de la pieza producida

| Elemento | Texto |
|----------|-------|
| Logo | Occident — isótipo superior izquierda |
| Pill fase | Fase 2 \| Entorno Nativo — superior derecha · contorno gris · texto negro |
| Eyebrow / overline | REFERENCIAS DE CONTEXTO — rojo `#DC0028` · uppercase · bold |
| Título principal | Dale a GitHub Copilot solo lo que necesita |
| Subtítulo | Cuanto más acotada la referencia, mejor la respuesta |
| Nivel 1 — ápice / más acotado | chip `#selection` · etiqueta derecha: "Método · Líneas → para un bloque específico" · etiqueta inferior: "Más rápido · más enfocado" |
| Nivel 2 — cuerpo intermedio | chip `#file` · etiqueta derecha: "Clase → para un archivo o unidad completa" |
| Nivel 3 — base / más amplio | chip `@workspace` · etiqueta derecha: "→ solo cuando no sabes dónde está el problema" · etiqueta inferior: "Más amplio · usar como último recurso" |
| CTA | 👆 Empieza siempre por lo más acotado |

### Notas de la pieza producida

- **Forma:** pirámide estándar (ápice arriba = más acotado · base abajo = más amplio) — sin franja de canal en cabecera
- **Pirámide:** contorno simple sin relleno · tres niveles con ancho creciente hacia abajo
- **Chips de comando:** monospace en caja con borde · sin color de fondo
- **Etiquetas laterales:** GCO Sans regular · alineadas a la derecha de cada nivel
- **Fondo:** blanco
- **Tipografía:** CO Bold para título · GCO Sans para texto corriente · monospace para comandos

---

## Brief — `2-S2-card_pub5` · card-minimalista

**Tipo de pieza:** card-minimalista — panel único
**Origen del contenido:** `prop_skills-optimizacion-tokens.md` · sesiones G4M S2, G5M S2

### Contenido

| Elemento | Texto |
|----------|-------|
| Título corto (derecha) | REFERENCIAS DE CONTEXTO |
| Título principal | Empieza por lo más acotado. |
| Subtítulo | Cuatro niveles. Usa el primero que alcance. |
| Nivel 1 — badge superior | `#selection` · Método / Clase |
| Nivel 2 — badge inferior | `#file` · `@workspace` (último recurso) |
| Aviso | `@workspace` consume más tokens. Solo si no sabes dónde está el problema. |
| Logo | Occident — inferior derecha |

### Párrafo

Copiar y pegar código en el chat le da a GitHub Copilot más de lo que necesita. Las referencias leen directo desde donde está el código. Empieza por `#selection` — el bloque seleccionado, sin copiar, sin pegar. Sube solo si no es suficiente. `@workspace` es el último recurso: útil, pero costoso en tokens.

### Especificaciones Figma

- **Formato:** 1080×1350 px
- **Fondo:** blanco
- **Título corto:** rojo `#DC0028` · uppercase · alineado a la derecha · tipografía pequeña
- **Título principal:** negro · CO bold · display (40–56 px equiv.)
- **Subtítulo:** negro · GCO Sans regular · tamaño medio
- **Badges de nivel:** monospace · apilados verticalmente con separación creciente
  - Nivel 1 (`#selection`, Método/Clase): chip con borde `#DC0028`
  - Nivel 2 (`#file`, `@workspace`): chip con borde gris `#999999`
- **Aviso `@workspace`:** rojo `#DC0028` · bold · `@workspace` en monospace con chip
- **Logo Occident:** inferior derecha
- **Tipografía:** CO para título · GCO Sans para texto running · monospace para comandos