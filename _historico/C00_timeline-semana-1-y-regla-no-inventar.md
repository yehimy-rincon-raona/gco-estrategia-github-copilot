# C00 — Timeline Semana 1 y Regla "No Inventar Información"

> **Sesión:** 2026-05-29  
> **Propósito de este archivo:** Que en cualquier conversación futura puedas decir "ten en cuenta `_historico/C00_...`" y Claude tenga contexto completo sin que vuelvas a explicar la historia.

---

## ¿Qué se hizo en esta sesión?

### 1. Archivo creado: `timeline-y-checklist.md`

**Ubicación:** `Planeacion/Semana-1_primer-plan-de-contenidos/timeline-y-checklist.md`

**Estructura final (la que Yehimy aprobó):**
1. **Fuentes válidas** declaradas al inicio: solo `resumen-y-acciones.md` + `presentacion-gco.html` (el HTML grande de la presentación a GCO).
2. **Mapa general** — tabla con todas las semanas de un vistazo (Semana 0 a 6+), fechas, fase y cadencia Lunes/Martes/Jueves.
3. **Detalle semana a semana** — cada semana tiene su tabla de días con acciones concretas y los `FALTA INFORMACIÓN` donde falta dato real.
4. **Checklist operativo** — solo para Semana 0 (25–29 mayo), dividido en: Bloqueantes, Contenidos, Gráficas y Vídeos.

**Regla de fuentes aplicada:** cualquier dato no confirmado en las dos fuentes aparece como `FALTA INFORMACIÓN`. No se inventó nada.

---

### 2. Distribución de semanas confirmada

| Semana | Fechas | Fase |
|--------|--------|------|
| Semana 0 | 25–29 mayo | Producción interna (sin acceso a Teams GCO) |
| Semana 1 | 1–5 junio | Activación y prompt básico |
| Semana 2 | 8–12 junio | Activación y prompt básico (cont.) |
| Semana 3 | 15–19 junio | Activación y prompt básico (cierre) |
| Semana 4 | 22–26 junio | Tendencias y primer caso |
| Semana 5 | 29 jun–3 jul | Tendencias y primer caso (cont.) |
| Semana 6+ | Julio en adelante | Madurez y casos avanzados |

**Cadencia confirmada:** 2 publicaciones/semana · Lunes check-in 15–30 min · Martes publicación · Jueves publicación.

---

### 3. `FALTA INFORMACIÓN` pendientes en el timeline

Estos huecos existen a 29 mayo y necesitan completarse antes de ejecutar:

- **Pub 1** (martes 3 jun, canal Anuncios y Tips Ágiles): título y texto no definidos
- **Pub 2** (jueves 5 jun, canal Primeros Pasos): título y texto no definidos
- **Propuesta gráfica** para Pub 1 y Pub 2: formato, cantidad, herramienta
- **Vídeos 1, 2, 3**: duración, formato y guión (los temas sí están en `resumen-y-acciones.md` sección 2.1)
- **Microsoft Bookings**: responsable de configuración no identificado en documentos
- **Semanas 5 y 6+**: calendario de publicaciones no detallado en la presentación
- **Títulos Pub 3–8** (Semanas 2–4): no definidos

---

### 4. Regla "No Inventar Información" — añadida como Regla #1

**Por qué se añadió:** En esta misma sesión, al construir el timeline, Claude intentó asignar contenidos a días concretos sin base documental. Yehimy lo identificó y lo paró explícitamente ("¿Te inventaste los contenidos?"). A partir de ahí quedó como regla hard en todos los archivos de configuración.

**Archivos modificados:**

| Archivo | Cambio |
|---------|--------|
| `CLAUDE.md` (raíz del proyecto) | "Las 5 reglas" → "Las 6 reglas". Regla #1 añadida. |
| `.github/copilot-instructions.md` | Idem. Aplica a GitHub Copilot Chat también. |
| Memoria persistente de Claude (`feedback_no_inventar.md`) | Regla actualizada como transversal a todos los proyectos de Yehimy (GCO, AXO y futuros). |

**Texto de la regla (idéntico en ambos archivos del proyecto):**
> No inventar información: Si un dato (fecha, nombre, sistema, cifra, decisión, responsable) no está explícitamente en los documentos del proyecto o en la conversación, **preguntar antes de asumir**. Nunca rellenar con suposición. Marcar como `[PENDIENTE — confirmar con Yehimy]` si falta y no se puede preguntar en ese momento. Esta regla aplica a cualquier agente de IA (Claude, Copilot, etc.) que trabaje en este proyecto.

**Marcadores válidos para datos desconocidos:**
- `FALTA INFORMACIÓN` — en tablas y checklists
- `[PENDIENTE — confirmar con Yehimy]` — en texto narrativo
- `[Hipótesis — pendiente confirmar]` — cuando es una hipótesis de trabajo, no un hecho

---

### 5. Contexto operativo a 29 mayo

- **Acceso a Teams GCO:** bloqueante activo — Catalana Occidente debe crear el equipo y dar acceso a Raona.
- **Manual de marca:** pendiente que Guillermo lo entregue.
- **Microsoft Bookings:** pendiente configurar (responsable sin confirmar).
- **Semana 0 = producción interna:** llegar el lunes 1 de junio con contenidos, propuestas gráficas y propuesta de los 3 vídeos listos.

---

## Archivos clave del proyecto que debes conocer

| Archivo | Para qué sirve |
|---------|----------------|
| `Planeacion/Semana-1_primer-plan-de-contenidos/timeline-y-checklist.md` | Plan de trabajo semana a semana + checklist operativo |
| `Planeacion/Semana-1_primer-plan-de-contenidos/resumen-y-acciones.md` | Fuente de verdad: objetivos y acciones confirmados con el cliente |
| `Presentaciones/` → `presentacion-gco.html` (archivo grande ~2.7 MB) | Presentación completa a GCO: fases, canales Teams, cadencia publicaciones |
| `CLAUDE.md` | Reglas del proyecto para Claude Code |
| `.github/copilot-instructions.md` | Reglas del proyecto para GitHub Copilot |
| `Configuraciones/configuracion-ia-asistente.md` | Configuración detallada del asistente IA |

> **Nota sobre `presentacion-gco.html`:** es muy grande para leer directamente. En esta sesión se leyó con un subagente Explore en chunks. Si necesitas datos de ella, usa ese enfoque o pide a Claude que la lea por partes.
