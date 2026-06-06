# Pub — Referencias de contexto: deja de copiar y pegar
> Canal: Primeros Pasos con GitHub Copilot
> Tipo: Tip de uso · Fase 2 · Entorno Nativo
> Fuente validada: sesiones Nibaldo · prop_skills-optimizacion-tokens.md
> Fecha: pendiente asignación en tablero

---

## Post para Teams

---

🔍 **¿Copias y pegas código en el chat para que GitHub Copilot lo entienda? Hay una forma más precisa.**

Cuando copias código en el chat, le das a GitHub Copilot más información de la que necesita — y eso hace la respuesta más lenta y menos enfocada.

GitHub Copilot puede leer directamente desde donde ya está el código.

**Cuatro formas de referenciar, de más a menos acotado:**

1. **`#selection`** — el bloque que tienes seleccionado. Sin copiar, sin pegar.
2. **Método o clase** — lo más quirúrgico. Apunta justo donde está el problema.
3. **`#file`** — el archivo completo, cuando la pregunta afecta todo el fichero.
4. **`@workspace`** — solo cuando no sabes en qué parte del proyecto está el problema.

Ejemplo para COBOL:
> ✅ "Revisa este método `#selection` y dime por qué falla el SQLCODE -803."
> ❌ "Revisa toda la solución y dime qué está mal."

👉 Empieza siempre por lo más acotado.

---

## Brief de infografía (Figma)

**Tipo de pieza:** jerarquía de referencias — niveles de acotación del contexto

**Formato:** 1080×1350 px

| Elemento | Texto |
|----------|-------|
| Franja canal | 🔍 Primeros Pasos con GitHub Copilot |
| Pill fase | Fase 2 · Entorno Nativo |
| Título | Dale a GitHub Copilot solo lo que necesita |
| Subtítulo | Cuanto más acotada la referencia, mejor la respuesta |
| Nivel 1 — más acotado | `#selection` · Método · Líneas concretas → para un bloque específico |
| Nivel 2 — intermedio | `#file` · Clase → para un archivo o unidad completa |
| Nivel 3 — más amplio | `@workspace` → solo cuando no sabes dónde está el problema |
| Ejemplo visual | ✅ "Revisa este método `#selection`" vs ❌ "Revisa toda la solución" |
| CTA | 👉 Empieza siempre por lo más acotado |
| Footer | Estrategia de Adopción · 2026 |

**Specs de diseño:**
- Fondo: blanco
- Jerarquía visual de arriba (más acotado, `#DC0028`) hacia abajo (más amplio, gris)
- Los niveles se representan como filas apiladas con degradado de color: de rojo a gris
- Los comandos (`#selection`, `#file`, `@workspace`) en tipografía monospace dentro de chips
- El ejemplo ✅/❌ aparece como bloque comparativo al pie
- Tipografía: GCO Sans para texto running · monospace para comandos · CO para el título

---

## Notas de publicación

- **`#selection` y `#file`** son las referencias con más retorno inmediato para un developer de GCO. El CTA pide probar `#selection` porque es la más fácil de activar hoy mismo.
- **`@workspace`** necesita un mensaje claro: es potente pero es el último recurso, no el primero. Si no se enmarca bien puede que lo usen para todo.
- **Skills** no aparece en este post. Es contenido de Fase 4. Ver `prop_skills-optimizacion-tokens.md` para la nota completa.
- **Pendiente confirmar** con Nibaldo: disponibilidad de `#selection` y `#file` en Visual Studio vs VS Code. Si no están disponibles en Visual Studio con ese nombre, el CTA puede no ser accionable para buena parte del equipo.
- **Pendiente confirmar**: si `@workspace` funciona correctamente en proyectos COBOL con Visual Studio.