# Cambios aplicados — Ajustes de Guillermo (08/05/26)

Basado en la reunión del 08/05/26 y el resumen validado, se aplicaron los siguientes cambios en el proyecto.

---

## 1. "Post-formación" → "Adopción continua"

**Motivo:** No todos los equipos han terminado ni iniciado la formación. El mensaje "post-formación" no encaja para todos los colectivos.

**Archivos modificados:**
- `index.html` — Hero eyebrow, texto del hero, callout sección 01, título y texto sección 04, decisión 1
- `Planeacion/estrategia-de-adopcion-posformacion.md` — Sección 2 (contexto), sección 5 (propuesta), mensaje directivo, decisión 1

**Qué cambió:** Todas las referencias a "adopción post-formación" fueron sustituidas por "adopción continua". El nuevo mensaje reconoce que algunos grupos ya terminaron y otros están en proceso, y que el ecosistema acompaña a cada equipo desde donde esté.

---

## 2. Product Owners y Managers — Enfoque amplio de IA

**Motivo:** Con este perfil no se debe hablar solo de GitHub Copilot. Guillermo espera que la conversación con líderes incluya otras herramientas de IA útiles para su gestión diaria.

**Archivos modificados:**
- `index.html` — Línea 3 (card de propuesta), tabla de soporte sección 07, hoja de ruta semanas 4–8
- `Planeacion/estrategia-de-adopcion-posformacion.md` — Tabla de líneas estratégicas, sección 16, próximos pasos mediano plazo
- `Planeacion/plan_de_accion-estrategia_de_comunicacion.md` — Sección 3 (implicación POs/Managers)

**Qué cambió:** Se añadió en todos los puntos que el enfoque con POs y Managers es más amplio que con developers: no se limita a Copilot, sino a IA aplicada a la gestión (redacción de criterios, análisis de tickets, documentación funcional, etc.).

---

## 3. Fase 3 / VS Code — Pendiente validación IT

**Motivo:** La ampliación a VS Code tiene implicaciones importantes para IT (instalación, permisos, entorno). No puede asumirse sin validación explícita de Nibaldo.

**Archivos modificados:**
- `index.html` — Card Fase 3 (nota en cursiva + tag "Pendiente validación IT")
- `Planeacion/estrategia-de-adopcion-posformacion.md` — Tabla de fases (Fase 3 marcada con aviso)
- `Planeacion/plan_de_accion-estrategia_de_comunicacion.md` — Bloque de advertencia al inicio de la Fase 3; aviso en la descripción de entorno técnico

**Qué cambió:** La Fase 3 ya no se presenta como un paso confirmado. Todos los documentos dejan claro que esta fase requiere doble check con Nibaldo antes de comunicarse.

---

## 4. Canales Teams — Sistema de hashtags en "Anuncios y Tips Ágiles"

**Motivo:** El contenido varía por tecnología (un tip de COBOL no sirve a alguien de .NET). La solución no es crear subcanales ni duplicar etiquetas por canal, sino que **"Anuncios y Tips Ágiles" es el canal editorial principal** donde vive todo el contenido — incluyendo anuncios de casos de uso reales — y la organización es por hashtags.

**Archivos modificados:**
- `index.html` — Tabla de canales sección 05
- `Planeacion/estrategia-de-adopcion-posformacion.md` — Tabla de canales sección 10, sección 11 (sistema de hashtags)
- `Configuraciones/config_canal-teams.md` — Columna de publicaciones

**Qué cambió:**
- "Anuncios y Tips Ágiles" se describe como canal editorial principal con sistema de hashtags en tres dimensiones:
  - **Por tipo de comunicado:** `#TipÁgil` `#CasoReal` `#DatoÚtil` `#MejorContexto` `#NovedadAplicable` `#PruebaHoy`
  - **Por tecnología:** `#COBOL` `#NET` `#DB2` `#PLSQL` `#Multi`
  - **Por temporalidad / fase:** `#Fase1` `#Fase2` `#Fase3` `#Fase4`
- "Casos de Uso Reales" queda como canal de **profundidad**: formato extendido donde se documenta el caso completo (problema → prompt → resultado → aprendizaje). Los anuncios breves de esos casos se publican también en "Anuncios y Tips Ágiles" con `#CasoReal`.

---

## 5. Hackathon — Iniciativa futura propuesta por Microsoft

**Motivo:** Microsoft (equipo en Catalana) propuso organizar un hackathon como dinamizador de la adopción. Dos ediciones posibles: Madrid y Barcelona.

**Archivos modificados:**
- `index.html` — Nueva fila en tabla de hoja de ruta (semanas 4–8)
- `Planeacion/estrategia-de-adopcion-posformacion.md` — Nueva fila en próximos pasos mediano plazo

**Qué cambió:** Se añadió el hackathon como acción de mediano plazo en la hoja de ruta, con nota de coordinación con Microsoft y posibilidad de gestionar inscripciones desde Teams.

---

## Pendiente (no aplicado en documentos — requiere acción externa)

| Acción | Responsable | Estado |
|--------|-------------|--------|
| Validar Fase 3 (VS Code) con Nibaldo | Yehimy | Pendiente reunión |
| Alinear materiales visuales con branding Occident (logo, tipografía) | Yehimy | Pendiente design system |
| Confirmar formato y fechas del hackathon con Microsoft | Guillermo / Microsoft | A medio plazo |
