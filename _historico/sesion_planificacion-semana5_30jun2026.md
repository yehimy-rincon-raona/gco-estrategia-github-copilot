# Resumen de sesión — Planificación Semana 5 + briefs fórmula del prompt + seguimiento de videos/acceso · 30 junio 2026
> Continúa desde: sesion_resolucion-propia-y-briefs-s3_21jun2026.md

---

## Contexto de la sesión

Preparación de la reunión del **martes 30 junio**. Se confirmó el estado de lo publicado, se planificó la Semana 5 (30 jun – 3 jul) y se crearon los briefs de las dos publicaciones de la semana, todo listo para presentar en la reunión como el trabajo del periodo.

**Eje de la Semana 5:** *cómo le hablas a GitHub Copilot* — la fórmula del prompt. Continúa la fase "Tendencias y primer caso".

---

## Qué se completó en esta sesión

### 1. Briefs de la Semana 5 — Pub 8 y Pub 9 (fórmula del prompt)
- **Pub 8** — `Produccion/semana-5_29jun-03jul/pub-08_mar-30jun/canal-anuncios-tips_pub8.md`
  "La fórmula del prompt que funciona (parte 1)": los 5 ingredientes **Rol + Contexto + Tarea + Restricciones + Formato**, anclados en un caso real de GCO — el control de errores de **SQLCODE en COBOL** (Sesión 2 · G4M/G5M). Incluye post, antes/después del prompt, plantilla copiable, 2 replies y brief de la card `S5-Card_pub8-formula`.
- **Pub 9** — `Produccion/semana-5_29jun-03jul/pub-09_jue-02jul/canal-anuncios-tips_pub9.md`
  "La fórmula del prompt (parte 2): Contexto y Restricciones": el orden de referencias (`#selection` → método → `#file` → `@workspace`) y las reglas de código reales de GCO (COBOL col. 7–72, SQL sin LIKE/DELETE/TRUNCATE, .NET C# 12). Puentea hacia `copilot-instructions.md`. Post, 2 replies y brief de la card `S5-Card_pub9-contexto-restricciones`.
- Ambos para el canal **Anuncios y Tips Ágiles**. Formato idéntico al de los briefs previos (Pub 4 / Pub 6).

### 2. Resumen para la reunión del 30 jun
- Creado `Seguimiento/resumen-reunion_30jun2026.md`: avance hasta hoy (Pubs 1, 2, 5, 4, 6 publicadas · Pub 7 lista) + plan de Semana 5 (Pub 8/9) + estado de videos + lista de lo que se necesita del equipo.

### 3. TABLERO actualizado
- Pub 8 y 9 movidas de S4 → **S5** con su nueva ubicación (`semana-5_29jun-03jul/`), contenido y estado (brief listo · card pendiente en Figma · fecha a confirmar).
- Añadida columna **Semana 5** al resumen de avance.
- V3 actualizado: "caso de uso 1 (COBOL heredado) entregado · en diseño del video".
- Cabecera de última actualización al 30 jun.

### 4. Aclaración del mapa de publicaciones (confirmada con Yehimy)
- **Pub 6** = Caso de uso 1 (COBOL heredado) — publicada 23 jun.
- **Pub 7** = Caso de uso 2 (bug que no estaba donde parecía / bug fixing) — el "segundo caso". Vive en `Produccion/semana-4_22-26jun/pub-07_jue-25jun/` con brief + 3 cards del tríptico producidas.
- **Pub 8 y 9** = las nuevas propuestas de esta semana (fórmula del prompt).

### 5. Seguimiento de videos y acceso — intercambio con Nibaldo (25–30 jun)
- Creado `Seguimiento/seguimiento-videos-y-acceso_30jun2026.md`: registro literal del intercambio + tareas concretas por video + acceso/VPN + puntos a aclarar. Tono "seguimiento de tareas", sin interpretar.
- Estado tras la respuesta de Nibaldo del 30 jun:
  - **VPN de Raona** (no de GCO): aclarado que es para que Yehimy ingrese al usuario de GCO desde Colombia (acceso bloqueado) y publique en el Teams de GCO lo del Teams local. Nibaldo confirmó hoy que está **en tránsito**.
  - **Video caso de uso 1 (COBOL):** descargado el jueves → en producción esta semana. Pendiente: revisión de coherencia por Nibaldo.
  - **Video MCP** (pedido por Jonathan): Nibaldo lo acaba de entregar → en producción esta semana.
  - **Casos de uso "enviados":** son los de la carpeta `semana-4_22-26jun/` (caso 1 COBOL · caso 2 bug fixing).
  - **Videos propios de Nibaldo:** en curso (dijo entrega hoy).
- TABLERO actualizado: sección de videos (V1, V2, V3, V-MCP, V-Nibaldo) + bloqueantes (VPN), apuntando al doc de seguimiento.

### 6. Referencias de acceso/licencia de Jonathan (reu 25 jun) — como disclaimer
- Jonathan entregó la URL de soporte de GCO (`soporte.gco.global/...#tab-Visual+Studio+2022`) y el flujo real de acceso: SSO `github.com/enterprises/gco-emu/sso` → si falla, `myprofile.microsoft.com` → Mi acceso → Paquetes de acceso → Solicitar acceso a GitHub Copilot (máx. 40 min tras aprobación).
- A petición de Yehimy: se dejó **como DISCLAIMER DE CORRECCIÓN** en la sección 5 del doc de seguimiento — **no aplicado, sin borrar ni mover nada existente**. La fila del Video 1 en el TABLERO se **revirtió** a su texto original (myaccess) y solo lleva un puntero al disclaimer.
- Esto corrige (cuando se decida) el ítem 9 de `resolucion-propia_reunion-23jun2026.md` — ese documento no se tocó.

---

## Estado de dependencias externas

| Ítem | Responsable | Estado |
|------|-------------|--------|
| VPN de Raona para que Yehimy ingrese al usuario de GCO desde Colombia | Nibaldo | 🔄 En tránsito (confirmado 30 jun) |
| Revisión de coherencia del video caso 1 con la grabación de Nibaldo | Nibaldo | Pendiente |
| Videos propios de Nibaldo | Nibaldo | En curso — dijo entrega hoy |
| Confirmar lenguaje del caso bug fixing (Pub 7 — ¿.NET?) | Nibaldo | Pendiente — define solo el título |
| Confirmar si Pub 7 ya se publicó el jue 25 jun | Yehimy / equipo | Sin registro de cierre |
| Elegir enfoque del Video 2 (opción A/B) | Nibaldo + equipo | Pendiente |
| Ajustes Video 1 (regrabar licencia + reflejar acceso) y Video 2 (ocultar login + autenticación VS Code) | Nibaldo | Pendiente |
| URL del canal corporativo para enlazar Video 1 | Nibaldo | Pendiente |
| Plan de facturación real de GCO (legacy vs. tokens) | Nibaldo | Pendiente — la card 1-S2 ya es plan-agnóstica, no bloquea |
| Acceso al Teams oficial de GCO (tenant Occident) | Catalana Occidente | ⛔ Bloqueante principal persistente |
| Fecha sesión AMA · Manual de marca Occident | Guillermo | Pendiente |

---

## Decisiones tomadas

- Las Pub 8/9 que el TABLERO listaba bajo `semana-4` nunca se produjeron (esas carpetas no existían); como se publican esta semana, sus briefs viven en **`semana-5_29jun-03jul/`** por convención del proyecto.
- Se separó conceptualmente la **fórmula del prompt** (Rol + Contexto + Tarea + Restricciones + Formato, de `estructura_prompt.md`) de las **5 cards de optimización de tokens** (1-S2 a 5-S2, que pertenecen a Pub 4 ya publicada). Pub 8/9 tratan la fórmula, no las cards de tokens.
- Split de la fórmula en dos pubs: parte 1 = la fórmula completa con caso COBOL; parte 2 = las dos piezas que más fallan (Contexto y Restricciones) con las reglas de GCO.
- Fechas de Semana 5: Pub 8 = martes 30 jun · Pub 9 = jueves 2 jul (cadencia martes/jueves), marcadas "a confirmar en la reunión".
- Se siguió la convención `_historico/` de CLAUDE.md para la trazabilidad, no el skill `historial-sesiones` (que usa otra carpeta), para no fragmentar el histórico.
- El seguimiento de videos/acceso se registra como **tareas** (no narrativa "él dijo / él se compromete"), a petición de Yehimy.
- La corrección de URLs de acceso/licencia (Jonathan) se deja como **disclaimer no aplicado**, sin borrar ni mover lo existente — se implementa cuando se decida.
- La VPN necesaria es la de **Raona** (no la de GCO); el bloqueo es geográfico (Colombia).

---

## Próximas tareas pendientes

- **Reunión 30 jun:** presentar `Seguimiento/resumen-reunion_30jun2026.md` + los dos briefs como plan de la semana. Confirmar fechas de Pub 8/9 y si Pub 7 ya salió.
- **Producción gráfica en Figma:** 2 cards de Semana 5 — `S5-Card_pub8-formula` y `S5-Card_pub9-contexto-restricciones`.
- **Pub 7:** confirmar publicación (jue 25 jun) y lenguaje del caso con Nibaldo.
- **Video caso de uso 1 (COBOL heredado):** producir el video esta semana (ya descargado).
- **Video MCP:** producir esta semana (entregado por Nibaldo).
- **Guion del flujo de acceso/licencia:** Yehimy puede ir armándolo desde acá con la doc de Jonathan (insumo Video 1 + Primeros Pasos) — tarea sin bloqueo.
- **Video 1:** destrabar publicación (URL canal corporativo, Nibaldo). **Video 2:** cerrar decisión de enfoque A/B.
- **VPN de Raona:** seguir su gestión con Nibaldo (en tránsito).

---

## Archivos clave del momento

| Archivo | Para qué |
|---------|----------|
| `Seguimiento/resumen-reunion_30jun2026.md` | **Documento principal para la reunión del 30 jun** — avance + plan Semana 5 + videos + pendientes del equipo |
| `Seguimiento/seguimiento-videos-y-acceso_30jun2026.md` | Tareas de videos + acceso/VPN + **disclaimer de corrección** con las URLs de acceso/licencia de Jonathan |
| `Produccion/semana-5_29jun-03jul/pub-08_mar-30jun/canal-anuncios-tips_pub8.md` | Brief Pub 8 — fórmula del prompt parte 1 (caso SQLCODE COBOL) |
| `Produccion/semana-5_29jun-03jul/pub-09_jue-02jul/canal-anuncios-tips_pub9.md` | Brief Pub 9 — fórmula del prompt parte 2 (Contexto y Restricciones) |
| `Produccion/TABLERO.md` | Estado actualizado al 30 jun — Semana 5 planificada, Pub 8/9 reubicadas |
| `Produccion/semana-4_22-26jun/pub-07_jue-25jun/canal-casos-de-uso_pub7.md` | Pub 7 (caso de uso 2 — bug fixing) · brief + 3 cards listos · pendiente confirmar publicación y lenguaje |
| `Configuraciones/estructura_prompt.md` | Fuente de la fórmula del prompt |
