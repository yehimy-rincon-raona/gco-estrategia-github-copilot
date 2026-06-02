# Resumen de sesión — Producción gráficas semana 1 · 1 junio 2026
> Continúa desde: `sesion_presentacion-gco_31may2026.md`

---

## Qué se completó en esta sesión

### Decisiones de sistema visual
- **Flujo de producción definido:** Claude Design genera propuesta → se prueba → se refina en Figma
- **Sistema visual elegido: Opción A** — Card con identidad de canal (franja de color por canal arriba de cada pieza)
- **Colores de canal asignados:**
  - Anuncios y Tips Ágiles → `#DC0028`
  - Primeros Pasos → `#FA9600`
  - Casos de Uso Reales → `#444444`
  - Foro AMA → degradado corporativo
  - Reservas 1:1 → `#DC0028` + icono calendario

### Aprendizajes de Teams (probado en sesión)
- Las imágenes en Teams aparecen como **adjunto separado**, no inline con el texto
- El patrón correcto es: **texto enriquecido arriba + imagen como apoyo visual abajo**
- Cada pieza debe ser autosuficiente: funciona sola aunque no se lea el texto del post
- Para insertar imagen: arrastrar al cuadro vacío o Ctrl+V con el cursor antes del texto
- Los "adhesivos" (stickers) sí quedan inline — las imágenes estándar no

### Archivos creados en esta sesión

| Archivo | Qué es |
|---------|--------|
| `Produccion/semana-0_25-29may/graficas/prompt_claude_design_pub1-bienvenida.md` | Prompt listo para Claude Design — Pub 1 (Bienvenida) |
| `Produccion/semana-0_25-29may/graficas/proceso-produccion-graficas.md` | Proceso paso a paso Opción A y B + reglas de Teams |
| `Produccion/semana-0_25-29may/graficas/canal-general_post-bienvenida.md` | Texto del post de bienvenida canal General — sincronizado con texto publicado en Teams |
| `Produccion/semana-0_25-29may/graficas/canal-anuncios_pub1-bienvenida.md` | Texto del post Pub 1 canal Anuncios y Tips Ágiles |

### Estado del brief de Pub 1
- ✅ Franja de canal arriba (`#DC0028`, "📣 Anuncios y Tips Ágiles")
- ✅ Pill "Fase 1 · Concienciación"
- ✅ Título definitivo: **"Tips que puedes probar hoy"**
- ✅ Subtítulo: "Tu canal de novedades y casos de uso reales de GitHub Copilot en GCO"
- ✅ Imagen autosuficiente (título + subtítulo + cuerpo + CTA dentro de la imagen)
- ✅ Fuentes referenciadas como "corporativas del design system" (sin Georgia/Arial explícito)
- ✅ Reglas de marca respetadas (fondo blanco, rojo solo en acentos)
- ✅ Icono: `icon-generico_inteligencia_artificial`
- ✅ Footer: logo Occident + "Estrategia de Adopción · 2026"
- 🔄 Pendiente: probar en Claude Design y aprobar

### Textos publicados en Teams (ya activos)
El canal General ya tiene publicado el post de bienvenida con este texto exacto:
- Asunto: `🎉 GitHub Copilot ya está en GCO`
- `⚡ Bienvenido/a`
- Cuerpo: punto de encuentro para el día a día con GitHub Copilot
- CTA: "👉 Empieza por el canal que mejor encaje con lo que necesitas."

### Pendiente de resolver antes de continuar
- Imagen de fondo roja compartida por Yehimy para el canal General — **tiene fondo rojo sólido, viola regla de marca**. Pendiente confirmar: ¿usar con overlay blanco o buscar otra imagen?

---

## Estado de las 8 publicaciones

| Pub | Fecha | Contenido | Estado |
|-----|-------|-----------|--------|
| 1 | Mar 3 jun | Bienvenida oficial | 🔄 Brief listo — pendiente probar en Claude Design |
| 2 | Jue 5 jun | Verificación de acceso + Vídeo 1 | ⏳ Pendiente |
| 3 | Mar 10 jun | Explicar código con #selection | ⏳ Pendiente |
| 4 | Jue 12 jun | Tip: contexto en el prompt | ⏳ Pendiente |
| 5 | Mar 17 jun | Invitación AMA | ⚠️ Bloqueada — falta fecha (Nibaldo + Guillermo) |
| 6 | Jue 19 jun | Pregunta vs. Agente + Vídeo 3 | ⏳ Pendiente |
| 7 | Mar 24 jun | Bug fixing con log de error | ⏳ Pendiente |
| 8 | Jue 26 jun | Sesiones personalizadas 1:1 | ⚠️ Bloqueada — falta Microsoft Bookings |

---

## Recursos disponibles para producción

| Recurso | Dónde |
|---------|-------|
| Design System base | `Manual de marca/Design System/prompt_claude_design.md` |
| Galería de iconos corporativos | `Manual de marca/iconografía/galeria-iconos.html` |
| Logo Occident SVG | `Manual de marca/logotipo_GCO/RGB/Occident_C_Pos.svg` |
| Plan editorial completo | `Produccion/semana-0_25-29may/graficas/plan-contenidos-graficos.md` |
| Proceso de producción | `Produccion/semana-0_25-29may/graficas/proceso-produccion-graficas.md` |

**Iconos clave identificados:**
- `icon-generico_inteligencia_artificial` → Pub 1
- `icon-check` / `icon-visto` → Pub 2
- `icon-generico_ordenador` → Pub 2

---

## Dependencias externas bloqueantes

| Qué | Quién | Estado |
|-----|-------|--------|
| Acceso a Teams GCO | Catalana Occidente | ⚠️ Pendiente |
| Fecha sesión AMA | Nibaldo + Guillermo | ⚠️ Pendiente |
| Microsoft Bookings | [PENDIENTE confirmar] | ⚠️ Pendiente |

---

## Decisiones tomadas

- El patrón de publicación es **texto enriquecido + imagen de apoyo** (no solo imagen)
- Las fuentes en los briefs de Claude Design se referencian como "corporativas del design system", sin nombrar Georgia ni Arial
- La imagen de fondo roja para el canal General está **en suspenso** hasta resolver conflicto con regla de marca

---

## Próximas tareas

- [ ] Aprobar Pub 1 en Claude Design (próximo paso inmediato)
- [ ] Resolver imagen de fondo roja para canal General (decisión pendiente)
- [ ] Crear brief de imagen para canal General (`prompt_claude_design_canal-general.md`)
- [ ] Crear `prompt_claude_design_pub2-verificacion-acceso.md` (solo tras aprobar Pub 1)
- [ ] Producir las 6 piezas no bloqueadas (Pubs 3, 4, 6, 7 + Canal General)

---

## Archivos clave del momento

| Archivo | Para qué |
|---------|---------|
| `Produccion/semana-0_25-29may/graficas/prompt_claude_design_pub1-bienvenida.md` | **Próximo paso** — probar en Claude Design |
| `Produccion/semana-0_25-29may/graficas/canal-anuncios_pub1-bienvenida.md` | Texto listo para publicar con la imagen |
| `Produccion/semana-0_25-29may/graficas/canal-general_post-bienvenida.md` | Texto sincronizado con lo publicado en Teams |
| `Produccion/semana-0_25-29may/graficas/proceso-produccion-graficas.md` | Referencia del sistema de producción |
| `Manual de marca/Design System/prompt_claude_design.md` | Base del design system — cargar en Claude Design |
