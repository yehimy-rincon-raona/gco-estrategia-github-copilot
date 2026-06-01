# Resumen de sesión — Semana 0 · 29 mayo 2026

> **Continúa desde:** inicio del proyecto — este es el primer archivo histórico.
> **Propósito:** punto de entrada para cualquier LLM, Copilot o agente que retome el proyecto. Lee este archivo + `CLAUDE.md` antes de empezar.

---

## Qué se completó en esta sesión

### 🎬 3 guiones de vídeo — TERMINADOS

Todos en `Produccion/semana-0_25-29may/videos/`

| Vídeo | Archivo | Duración | Estado |
|-------|---------|----------|--------|
| V1 — Configuración del entorno | `v01_configuracion-entorno/pildoras-agiles_configuracion-del-entorno.md` | ~2:20 | ✅ Guion completo |
| V2 — Primeros pasos | `v02_primeros-pasos/pildoras-agiles_primeros-pasos.md` | ~1:42 | ✅ Guion completo |
| V3 — Cómo interactuar con Copilot | `v03_como-interactuar/pildoras-agiles_como-interactuar-con-copilot.md` | ~1:50 | ✅ Guion completo |

**Arco narrativo de la serie:**
- V1: Cómo configurar el entorno (instalar VS, verificar cuenta, activar Copilot)
- V2: Dos puntos de entrada — Copilot Chat + sugerencias inline (Tab)
- V3: Dos modos — Pregunta (consulta) vs. Agente (acción) + caso real de bug fixing con log de Elastic

**Formato de los guiones:** secciones con `### N. Título · 0:00–0:00`, audio en bloque `>`, `**Fuente:**` y `**Visuales**` en cada sección, `---` separador.

---

### 🎨 Plan de contenidos gráficos — TERMINADO

Archivo: `Produccion/semana-0_25-29may/graficas/plan-contenidos-graficos.md`

8 publicaciones con texto Teams-ready (≤150 palabras) + brief gráfico (tipo, mensaje, estructura visual, formato en px).

**Estructura fija (no modificar — viene de `timeline-y-checklist.md`):**

| Pub | Fecha | Canal | Tema | Estado |
|-----|-------|-------|------|--------|
| 1 | Mar 3 jun | Anuncios y Tips | Bienvenida oficial | ✅ Listo |
| 2 | Jue 5 jun | Primeros Pasos | Verificación acceso + ref. Vídeo 1 | ✅ Listo |
| 3 | Mar 10 jun | Casos de Uso | Explicar código con `#selection` | ✅ Listo |
| 4 | Jue 12 jun | Anuncios y Tips | Tip: contexto en el prompt (❌ vs ✅) | ✅ Listo |
| 5 | Mar 17 jun | Foro AMA | Invitación AMA | ⚠️ Bloqueado |
| 6 | Jue 19 jun | Primeros Pasos | Pregunta vs. Agente + ref. Vídeo 3 | ✅ Listo |
| 7 | Mar 24 jun | Casos de Uso | Bug fixing COBOL con log de Elastic | ✅ Listo |
| 8 | Jue 26 jun | Reservas 1:1 | CTA sesiones personalizadas | ⚠️ Bloqueado |

**Lógica de los vídeos dentro del plan:** son recursos referenciados en Pub 2 y Pub 6 — no son publicaciones independientes.

---

## Dependencias externas bloqueantes

| Qué | Bloqueado por | Fecha límite |
|-----|--------------|--------------|
| Pub 5 (AMA) | Canal Foro AMA operativo + sesión agendada | Antes del 13 jun |
| Pub 8 (Reservas 1:1) | Microsoft Bookings activo con enlace público | Antes del 20 jun |
| Manual de marca Occident | Guillermo debe entregarlo | [PENDIENTE — confirmar fecha] |
| Acceso a Teams GCO | Catalana Occidente crea el equipo y da permisos a Raona | [PENDIENTE] |

---

## Contexto para la reunión del 1 de junio

- **Reunión:** check-in con GCO, Lunes 1 junio (Semana 1, inicio de activación)
- **Qué se lleva a la mesa:**
  - 3 guiones de vídeo terminados (estructurados y listos para grabar)
  - Plan de 8 publicaciones con texto y brief de diseño listo para producir
  - 2 dependencias identificadas que necesitan gestión del equipo (AMA + Bookings)
  - Boceto/muestra del Vídeo 1 si se logra producir antes del lunes

---

## Archivos clave del proyecto

| Archivo | Para qué sirve |
|---------|---------------|
| `CLAUDE.md` | Reglas del proyecto, equipo, estado, mapa de archivos |
| `Planeacion/Semana-1.../timeline-y-checklist.md` | Estructura fija de publicaciones (fuente de verdad del calendario) |
| `Planeacion/.../plan_de_accion-estrategia_de_comunicacion.md` | Fases de contenido y propósito de cada canal |
| `Configuraciones/configuracion-ia-asistente.md` | Configuración completa del asistente IA |
| `Configuraciones/config_canal-teams.md` | Estructura y propósito de los 6 canales de Teams |
| `index.html` | Presentación principal para stakeholders de GCO |

---

## Reglas que no se rompen (resumen operativo)

1. No inventar datos — si falta info, marcar como `[PENDIENTE — confirmar con Yehimy]`
2. Filtro de resistencia: ¿un developer de COBOL con 20 años lo ve útil hoy? Si no, reformular
3. Fases en orden: Concienciación → Primeros Pasos → Multi-entorno → Customización
4. Formatos cortos: posts ≤150 palabras, vídeos 60–90 seg, tips de 3 puntos
5. Anclar en casos reales: COBOL, DB2, PL/SQL, .NET, Elastic logs, Jira
6. Tono de colega: "esto te ahorra tiempo hoy", sin tecnicismos condescendientes

---

## Próximas tareas pendientes

- [ ] Producir boceto/muestra del Vídeo 1 para llevar a la reunión del 1 de junio
- [ ] Recibir manual de marca de Occident (Guillermo) → crear design system
- [ ] Montar entorno de simulación en Teams de Raona
- [ ] Confirmar fecha sesión AMA con Nibaldo y Guillermo (desbloquea Pub 5)
- [ ] Activar Microsoft Bookings (desbloquea Pub 8)
- [ ] Producir las 8 piezas gráficas una vez confirmada la marca