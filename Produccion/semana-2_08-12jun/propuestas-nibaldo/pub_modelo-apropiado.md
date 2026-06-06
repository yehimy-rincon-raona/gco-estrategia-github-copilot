# Pub — Elige el modelo según la tarea
> Canal: Anuncios y Tips Ágiles
> Tipo: Tip de uso · Fase 2 · Entorno Nativo
> Fuente validada: sesiones Nibaldo · prop_modelo-apropiado.md
> Fecha: pendiente asignación en tablero

---

## Post para Teams

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

## Brief de infografía (Figma)

**Tipo de pieza:** tarjeta comparativa — dos columnas (tarea simple / tarea compleja) + dato de renovación

**Formato:** 1080×1350 px

| Elemento | Texto |
|----------|-------|
| Franja canal | 📣 Anuncios y Tips Ágiles |
| Pill fase | Fase 2 · Entorno Nativo |
| Título | Elige el modelo según la tarea |
| Subtítulo | No todas las preguntas necesitan el mismo motor |
| Columna A — Estándar `0x` | Explicar error · Documentar un método · Renombrar variable · Resumir código |
| Columna B — Premium `1x / 3x` | Refactor COBOL · Análisis de impacto · SQLCODE difícil · Cambio delicado en .NET |
| Etiqueta columna A | Tarea simple — no consume bolsa |
| Etiqueta columna B | Tarea compleja — consume bolsa |
| Dato adicional destacado | La bolsa se renueva cada 1 de mes |
| CTA | 👉 Mira qué modelo tienes antes de preguntar |
| Footer | Estrategia de Adopción · 2026 |

**Specs de diseño:**
- Fondo: blanco
- Columna Premium: encabezado `#DC0028` + texto blanco
- Columna Estándar: encabezado gris oscuro + texto blanco
- Dato "renovación mensual": caja con borde rojo, fondo blanco, texto negro
- Los indicadores `0x`, `1x`, `3x` deben aparecer como badges/chips de código
- Tipografía: GCO Sans para el contenido · CO para el título

---

## Notas de publicación

- **La tabla en Teams** es el formato diferenciador de este post. Si el canal la renderiza bien, no necesita infografía para comunicar el mensaje central.
- **No mencionar nombres de modelos concretos** (GPT 4.1, Claude Opus) hasta confirmar la lista exacta disponible en la licencia de GCO — pendiente con Nibaldo.
- **"Modo auto"** (VS Code selecciona el modelo automáticamente según dificultad): se puede agregar como nota al pie del post o como párrafo adicional si se quiere ampliar. Por ahora se omite para mantener el post en 150 palabras.
- **Nivel de razonamiento** (low/medium/high/extra high): dato complementario. Va mejor en un post propio o en una ampliación de este — no cabe en este sin superar el límite de palabras.
- **Pendiente confirmar** con Nibaldo: cómo se cambia el modelo en Visual Studio (no en VS Code). Antes de publicar verificar si el CTA es accionable para los developers de GCO.