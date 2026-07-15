# Resumen de sesión — Producción del Vídeo 4: instalar y configurar MCP con Copilot Dev Suite · 3 julio 2026
> Continúa desde: sesion_produccion-graficas-s5_03jul2026.md

---

## Contexto de la sesión

Jonatan había pedido un vídeo sobre la instalación de los MCP. **Víctor Gisbert** grabó una demo de pantalla completa (~16 min, archivo `gco_mcp-victor-gisbert`) mostrando cómo instalar el paquete **Copilot Dev Suite** y configurar los servidores MCP. Yehimy recolectó la grabación en **44 capturas numeradas en orden** + tres documentos de apoyo (transcripción literal, paso-a-paso reconstruido y resumen) en `Produccion/Videos/v04_instalar-mcp/`. El encargo: crear una **píldora ágil de guion** con el mismo formato que los tres vídeos anteriores, **sin inventar** nada — verificando cada dato contra las capturas.

---

## Qué se completó en esta sesión

### 1. Píldora de guion del Vídeo 4 — creada y completa
Archivo: `Produccion/Videos/v04_instalar-mcp/pill_para-grabacion_instalar-y-configurar-mcp.md`
- Formato **píldora para grabación** (mismo patrón que `v01`): Nota de producción + secciones con **Voz en off** + **Qué mostrar en pantalla** + recomendaciones de edición.
- **1 píldora consolidada** (decisión de Yehimy), 8 secciones: qué es → instalar desde Portal → abrir guía → credenciales Atlassian (Jira+Confluence) → credenciales DB2 → arrancar GitHub Copilot y verificar MCP → pruebas reales → cierre.
- Cada sección referencia las capturas por número para que el editor sincronice.
- Voz Clipchamp confirmada: **Alessio Dragon HD Latest** (la misma de V1–V3).
- Duración objetivo: 2:30–3:00 min (condensando el vídeo fuente de ~16 min).
- Lista completa de datos a **difuminar** en edición (correo `victor.gisbert@colaborador.gco.com`, usuario `PE2782`, PATs/tokens, nombres reales de BBDD y proyectos).

### 2. Verificación de datos contra las capturas (regla "no inventar")
Se corrigieron errores de la transcripción/paso-a-paso confirmando cada dato en las imágenes:
- Paquete: "Swiit" → **Copilot Dev Suite** (Portal; instala como `gco-dev-suite` en `%USERPROFILE%\gco-dev-suite`).
- Guía: **`O:/PE2782/guia-gco-dev-suite.html`** (no "PE278.32" ni ".zip"), pestañas Instalación + Skills, pasos 1→7.
- Agente: "GTO coordinador" → **`gco-coordinador`** (quedó fuera de la píldora, ver decisiones).
- MCP servers: `mcp-jira`, `mcp-gco`, `mcp-elastic`, `mcp-atlassian`, `mcp-db2`, `mcp-sql`, `mcp-playwright` + built-in `github-mcp-server`.
- Comandos exactos: `.\setup-atlassian-credentials.bat` y `.\setup-db2-credentials.bat` (credencial `mcp-db2`). El de DB2 se confirmó con capturas nuevas **42–44** (minuto ~10:15 del vídeo).
- Presentador: **Víctor Gisbert Clement**.

### 3. Registro en el tablero
Archivo: `Produccion/TABLERO.md`
- La fila `V-MCP` ("material en bruto de Nibaldo") se convirtió en **V4** con título real, estado "Guion listo", grabación fuente de Víctor, orientación Fase 3, link a la carpeta y 🔄 pendiente edición.
- Resumen de avance (S5) y fecha de última actualización al día.

---

## Estado de dependencias externas

| Ítem | Responsable | Estado |
|------|-------------|--------|
| Edición/postproducción del Vídeo 4 | Editor | 🔄 Pendiente — condensar a 2:30–3:00 + difuminar datos sensibles |
| Acceso al Teams oficial de GCO (tenant Occident) | Catalana Occidente | ⛔ Bloqueante principal — se sigue publicando en Teams de Raona |
| VPN de Raona para que Yehimy entre al usuario de GCO | Nibaldo + sistemas | 🔄 En gestión · contingencia: pasar copy a Nibaldo/Víctor |
| Video caso de uso 1 (COBOL) | Nibaldo | 🔄 En producción |
| Ajustes Video 1 y Video 2 + URL canal corporativo | Nibaldo | Pendiente |
| Fecha sesión AMA · Manual de marca Occident | Guillermo | Pendiente |
| Microsoft Bookings (sesiones 1:1) | Yehimy | Sin configurar |

---

## Decisiones tomadas

- **1 píldora consolidada** para el Vídeo 4 (no 2–3 píldoras separadas): un solo vídeo de 2:30–3:00 min bien condensado.
- **Parte experimental dejada fuera** del guion: Chrome/Playwright y el cambio de custom agent (`gco-coordinador`). Víctor mismo dice en el audio que es "versión preliminar y desaparecerá"; se documentará por separado cuando se estabilice.
- **Voz del audio:** Alessio Dragon HD Latest (confirmada por Yehimy), para mantener consistencia con V1–V3.
- **No se inventó el comando de DB2:** se dejó marcado como pendiente hasta que Yehimy aportó las capturas 42–44, que confirmaron `.\setup-db2-credentials.bat`.
- **Reconciliación V-MCP → V4:** la grabación la aportó **Víctor**, no Nibaldo (confirmado por el nombre del archivo y las pestañas del navegador). Se anotó en el tablero por si hay material aparte de Nibaldo que reconciliar.
- Se mantiene la convención `_historico/` (no el skill `historial-sesiones`) para no fragmentar la trazabilidad.

---

## Próximas tareas pendientes

- **Editar el Vídeo 4** con la píldora: sincronizar voz en off (Clipchamp · Alessio Dragon HD Latest) con los fragmentos de la grabación, condensar tiempos de espera y difuminar todos los datos sensibles.
- **Definir** si más adelante se hace una píldora avanzada con custom agents + Playwright (cuando esa parte esté estable).
- **Confirmar** con qué canal del Teams de GCO se publica el Vídeo 4 (Fase 3 / entorno multientorno).
- Continúan pendientes: Video caso 1 (COBOL), ajustes V1/V2, bloqueantes de VPN y acceso al Teams de GCO.

---

## Archivos clave del momento

| Archivo | Para qué |
|---------|----------|
| `Produccion/Videos/v04_instalar-mcp/pill_para-grabacion_instalar-y-configurar-mcp.md` | **Guion listo del Vídeo 4** — voz en off + qué mostrar en pantalla, verificado contra las 44 capturas |
| `Produccion/Videos/v04_instalar-mcp/transcripcion_video.md` · `paso-a-paso.md` · `resumen_video.md` | Documentos fuente de apoyo (la transcripción tiene errores ya corregidos en la píldora) |
| `Produccion/Videos/v04_instalar-mcp/` (capturas 01–44) | Evidencia visual — la píldora las referencia por número |
| `Produccion/TABLERO.md` | Estado al 3 jul — fila V4 con guion listo |
| `Produccion/Videos/v01_configuracion-entorno/pill-01…` | Plantilla de formato de píldora que se replicó |
