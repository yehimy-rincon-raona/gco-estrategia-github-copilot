# Resumen de sesión — Canal interno + sincronización de canales · 4 junio 2026
> Continúa desde: `sesion_produccion-graficas_01jun2026.md`

---

## Qué se completó en esta sesión

### Infraestructura de coordinación interna
- **`Teams-Interno/README.md`** — creado: explica propósito, metodología de trabajo Nibaldo → Yehimy, estructura de carpetas y reglas
- **`Teams-Interno/General/actualizaciones-semanales/semana-0_bienvenida-canales.md`** — post listo para pegar en el canal General interno con tabla de los 6 canales publicados + estado del plan editorial Semana 1
- **`Teams-Interno/Produccion-y-materiales/nibaldo/registro-nibaldo.md`** — tabla de log para registrar todo lo que Nibaldo suba al canal
- **`Teams-Interno/Produccion-y-materiales/integraciones/registro-integraciones.md`** — log de qué se integró al plan y dónde quedó
- **`Configuraciones/config_canal-interno.md`** — configuración completa del canal interno (tipo, tenant, accesos, canales, cadencia FALTA INFORMACIÓN)

### Configuración de agentes IA
- **`AGENTS.md`** (raíz) — creado para Codex y cualquier otro agente IA; incluye: contexto del proyecto, equipo, estado actual, 8 reglas críticas, ambos Teams documentados, mapa de archivos, trazabilidad de sesiones, formatos de salida
- **`CLAUDE.md`** — actualizado: estado "Junio 2026 — Semana 1", nuevas líneas de estado (canal interno ✅, Pub 1 pendiente, bloqueante de acceso GCO), nuevas entradas en mapa de archivos, sección "CANAL INTERNO DE TEAMS — Metodología" añadida
- **`.github/copilot-instructions.md`** — actualizado: eliminado "18 sesiones" como cifra fija, reordenados documentos (historico primero), añadidas referencias a `config_canal-interno.md` y `Teams-Interno/`

### Sincronización screenshots ↔ archivos de producción
Revisados y actualizados los 6 archivos de `Produccion/semana-0_25-29may/graficas/` comparando contra las imágenes publicadas (screenshots que terminan en "2"):

| Archivo | Cambios aplicados |
|---------|-------------------|
| `canal-anuncios_pub1-bienvenida.md` | Asunto corregido · "dos veces por semana:" → "como:" · CTA en negrita |
| `canal-primeros-pasos_pub1-bienvenida.md` | Asunto emoji 🚀→🪡 · Primera línea del cuerpo corregida · Banner: Título actualizado |
| `canal-foro-ama_pub1-bienvenida.md` | Asunto corregido · "una hora en vivo" → "un tiempo en vivo" · Banner: Título actualizado · CTA en negrita |
| `canal-casos-de-uso_pub1-bienvenida.md` | Emoji 📂→📁 · "en GCO" eliminado · Cursivas en "ejemplos reales" · Banner: Título actualizado · CTA en negrita |
| `canal-reservas-1a1_pub1-bienvenida.md` | "del equipo de Raona" eliminado · Pregunta convertida a blockquote · Banner: Título actualizado |
| `canal-general_post-bienvenida.md` | Sección "Banner publicado" añadida con decisión de diseño confirmada |

### Regla de marca actualizada
- **`memory/feedback_direction_arte.md`** — regla de rojo refinada: evitar en piezas editoriales recurrentes; fondo rojo sólido `#DC0028` válido en portadas (cover de canal), coherente con manual de marca Occident

---

## Estado de dependencias externas

| Ítem | Estado | Responsable | Notas |
|------|--------|-------------|-------|
| Acceso al Teams oficial de GCO | 🔴 Bloqueado | Catalana Occidente | Sin ETA — es el bloqueante principal para publicar en cliente |
| Manual de marca de Occident | 🔄 Pendiente | Guillermo | Sin fecha de entrega |
| Fecha sesión AMA (Pub 5) | ⚠️ Bloqueado | Nibaldo + Guillermo | Sin fecha confirmada |
| Microsoft Bookings (Pub 8) | ⚠️ Bloqueado | Yehimy | Falta configurar la herramienta |
| Corrección banner Reservas 1:1 | 🔄 En proceso | Yehimy | Etiqueta dice "Primeros Pasos" en lugar de "Reservas 1:1 con Expertos" — Yehimy lo corrige en Claude Design |

---

## Decisiones tomadas

1. **Canal interno de Teams en tenant Raona** — es un equipo separado e independiente del Teams de GCO. No es un canal dentro del equipo de Occidente. Solo acceden Nibaldo, Guillermo y Yehimy. Los archivos fuente viven en `Teams-Interno/`.

2. **Regla del rojo refinada** — el fondo rojo sólido está prohibido en piezas editoriales recurrentes (tips, casos, anuncios). Está permitido y es coherente con la marca en elementos de portada (cover de canal, introducción del espacio). El banner del canal General con fondo rojo se mantiene como portada intencional.

3. **Banner Reservas 1:1 con error de etiqueta** — Yehimy lo corrige en Claude Design. Cuando llegue el screenshot corregido, actualizar `canal-reservas-1a1_pub1-bienvenida.md` eliminando la nota de error y documentando el título correcto del banner.

4. **Todo lo publicado en Teams debe tener archivo fuente en el proyecto** — regla transversal incorporada en `CLAUDE.md`, `AGENTS.md` y `copilot-instructions.md`.

---

## Próximas tareas pendientes

- [ ] Recibir screenshot corregido del banner Reservas 1:1 → actualizar `canal-reservas-1a1_pub1-bienvenida.md`
- [ ] Probar Pub 1 en Claude Design y aprobar banner (brief listo en `Produccion/semana-0_25-29may/graficas/prompt_claude_design_pub1-bienvenida.md`)
- [ ] Crear brief de Pub 2 — `canal-primeros-pasos_pub1-bienvenida.md` · "Verificación de acceso + Vídeo 1" · Jueves 5 junio
- [ ] Publicar `semana-0_bienvenida-canales.md` en el canal General del Teams interno (cuando el equipo confirme acceso activo)
- [ ] Confirmar cadencia de publicación en canal General interno → actualizar `Configuraciones/config_canal-interno.md` (campo FALTA INFORMACIÓN)
- [ ] Recibir acceso al Teams oficial de GCO (bloqueante externo)

---

## Archivos clave para la próxima sesión

| Archivo | Por qué importa |
|---------|-----------------|
| `Produccion/semana-0_25-29may/graficas/` | Estado publicado de todos los canales — base para Pub 2 y siguientes |
| `Teams-Interno/General/actualizaciones-semanales/semana-0_bienvenida-canales.md` | Listo para pegar en el canal General interno |
| `Planeacion/Semana-1_primer-plan-de-contenidos/timeline-y-checklist.md` | Plan de contenidos semana 1 — guía las próximas publicaciones |
| `Configuraciones/config_canal-interno.md` | Tiene campos FALTA INFORMACIÓN pendientes de confirmar |
