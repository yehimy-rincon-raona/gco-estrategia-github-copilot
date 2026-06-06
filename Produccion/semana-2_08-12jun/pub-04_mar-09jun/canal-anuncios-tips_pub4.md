# Canal Anuncios y Tips — Pub 4 · Elige el modelo según la tarea
> Canal: Anuncios y Tips Ágiles · Fecha: Martes 9 junio · Tipo: Tip de uso
> Estado: listo para revisión Nibaldo / Guillermo
> Fuente: sesiones Nibaldo · prop_modelo-apropiado.md

---

## Objetivo de esta publicación

Que los developers entiendan que en GitHub Copilot no todos los modelos tienen el mismo coste en tokens, y que usar siempre el premium los deja sin bolsa en días. El hábito que se quiere instalar: revisar qué modelo está seleccionado antes de preguntar.

---

## Post listo para Teams

**Asunto:** `📣 ¿Siempre usas el mismo modelo en GitHub Copilot? Puede que estés gastando más de lo necesario.`

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
| Estándar `0x` vs premium `1x/3x` | G4M Sesión 1 · G2M Sesión 2 |
| "En dos días te quedas sin tokens" | G3M Sesión 1 |
| Criterio tarea simple / compleja | G2M Sesión 1 · G5M Sesión 1 |
| Renovación mensual de la bolsa | G2M Sesión 2 |
| Modo auto (VS Code) | G5M Sesión 1 — no incluido en este post, queda para nota complementaria |
| Prop base | `prop_modelo-apropiado.md` |

---

## Infografía / pieza gráfica

**Tipo de pieza:** tarjeta comparativa — dos columnas + dato de renovación

### Estructura visual

| Elemento | Texto |
|----------|-------|
| Franja canal | 📣 Anuncios y Tips Ágiles |
| Pill fase | Fase 2 · Entorno Nativo |
| Título | Elige el modelo según la tarea |
| Subtítulo | No todas las preguntas necesitan el mismo motor |
| Columna A — etiqueta | Tarea simple · no consume bolsa |
| Columna A — badge | Estándar `0x` |
| Columna A — ítems | Explicar error · Documentar método · Renombrar variable · Resumir código |
| Columna B — etiqueta | Tarea compleja · consume bolsa |
| Columna B — badge | Premium `1x / 3x` |
| Columna B — ítems | Refactor COBOL · Análisis de impacto · SQLCODE difícil · Cambio delicado en .NET |
| Dato destacado | La bolsa se renueva cada 1 de mes |
| CTA | 👉 Mira qué modelo tienes antes de preguntar |
| Footer | Estrategia de Adopción · 2026 |

### Especificaciones Figma

- **Formato:** 1080×1350 px
- **Fondo:** blanco
- **Columna Premium:** encabezado `#DC0028`, texto blanco
- **Columna Estándar:** encabezado gris oscuro `#333333`, texto blanco
- **Badges `0x`, `1x`, `3x`:** chips de tipografía monospace con borde, sobre fondo de columna
- **Dato "renovación mensual":** caja con borde rojo, fondo blanco, texto negro bold
- **Separador entre columnas:** línea vertical gris claro
- **Tipografía:** CO para el título · GCO Sans para texto running · monospace para badges