# Canal Primeros Pasos — Pub 5 · Referencias de contexto
> Canal: Primeros Pasos con GitHub Copilot · Fecha: Jueves 11 junio · Tipo: Tip de uso
> Estado: listo para revisión Nibaldo / Guillermo
> Fuente: sesiones Nibaldo · prop_skills-optimizacion-tokens.md

---

## Objetivo de esta publicación

Que los developers dejen de copiar y pegar código en el chat y empiecen a usar las referencias de contexto de GitHub Copilot. El hábito que se quiere instalar: empezar siempre por la referencia más acotada (`#selection`) y escalar solo si hace falta.

---

## Post listo para Teams

**Asunto:** `🔍 ¿Copias y pegas código en el chat? Hay una forma más precisa.`

---

🔍 **¿Copias y pegas código en el chat para que GitHub Copilot lo entienda? Hay una forma más precisa.**

Cuando copias código en el chat, le das a GitHub Copilot más información de la que necesita — y eso hace la respuesta más lenta y menos enfocada.

GitHub Copilot puede leer directamente desde donde ya está el código.

**Cuatro referencias, de más a menos acotado:**

1. **`#selection`** — el bloque que tienes seleccionado. Sin copiar, sin pegar.
2. **Método o clase** — lo más quirúrgico. Apunta justo donde está el problema.
3. **`#file`** — el archivo completo, cuando la pregunta afecta todo el fichero.
4. **`@workspace`** — solo cuando no sabes en qué parte del proyecto está el problema.

Ejemplo para COBOL:
> ✅ "Revisa este método `#selection` y dime por qué falla el SQLCODE -803."
> ❌ "Revisa toda la solución y dime qué está mal."

👉 Empieza siempre por lo más acotado.

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

## Infografía / pieza gráfica

**Tipo de pieza:** jerarquía de referencias — pirámide de acotación del contexto

### Estructura visual

| Elemento | Texto |
|----------|-------|
| Franja canal | 🔍 Primeros Pasos con GitHub Copilot |
| Pill fase | Fase 2 · Entorno Nativo |
| Título | Dale a GitHub Copilot solo lo que necesita |
| Subtítulo | Cuanto más acotada la referencia, mejor la respuesta |
| Nivel 1 — parte superior, más acotado | `#selection` · Método · Líneas → para un bloque específico |
| Nivel 2 — intermedio | `#file` · Clase → para un archivo o unidad completa |
| Nivel 3 — parte inferior, más amplio | `@workspace` → solo cuando no sabes dónde está el problema |
| Etiqueta nivel 1 | Más rápido · más enfocado |
| Etiqueta nivel 3 | Más amplio · usar como último recurso |
| Bloque comparativo al pie | ✅ "Revisa este método `#selection`" — ❌ "Revisa toda la solución" |
| CTA | 👉 Empieza siempre por lo más acotado |
| Footer | Estrategia de Adopción · 2026 |

### Especificaciones Figma

- **Formato:** 1080×1350 px
- **Fondo:** blanco
- **Jerarquía visual:** degradado de color de arriba (más acotado, `#DC0028`) hacia abajo (más amplio, gris `#999999`)
- **Forma:** puede ser pirámide invertida o filas apiladas con ancho creciente hacia abajo
- **Comandos** (`#selection`, `#file`, `@workspace`): chips en tipografía monospace con borde del color del nivel
- **Bloque comparativo ✅/❌:** dos filas con fondo gris claro, texto monospace, tick rojo y X gris
- **Tipografía:** CO para el título · GCO Sans para texto running · monospace para comandos