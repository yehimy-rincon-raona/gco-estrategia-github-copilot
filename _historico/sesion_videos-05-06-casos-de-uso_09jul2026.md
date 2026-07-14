# Resumen de sesión — Guiones Videos 05 y 06 (casos de uso reales) · 9 julio 2026
> Continúa desde: sesion_vpn-acceso-portal-gco_08jul2026.md

## Qué se completó en esta sesión

- **Análisis del material del Video 05.** La carpeta `Produccion/Videos/v05_casos-de-uso/` contiene la grabación fuente real: entrevista de **Víctor Gisbert Climent a Luis De la Fuente Velado (GCO)**, 22 jun 2026, ~29+ min, con **5 casos de uso** de GitHub Copilot en .NET/GAN/COBOL, 85 capturas y 2 transcripciones. (El TABLERO apuntaba a material viejo de Nibaldo en `v03_como-interactuar` — corregido.)
- **Decisión de alcance (Yehimy):** la grabación se reparte en **dos videos** — Video 05 con los 3 casos fuertes y Video 06 con los 2 casos de debugging. Numeración global y correlativa: el segundo toma el 06.
- **Guiones creados** (patrón del Video 04: pill + mapa):
  - `Produccion/Videos/v05_casos-de-uso/pill_para-grabacion_casos-de-uso-reales.md` — Video 05 (2:30–3:00): incidencia desde PDF (.NET + COBOL de una tirada) · operativa GAN generada con contexto · backend Equifax en producción.
  - `Produccion/Videos/v05_casos-de-uso/pill_para-grabacion_casos-de-uso-debugging.md` — Video 06 (1:45–2:15): radio button que se reseteaba · combo que se recalculaba al grabar.
  - `Produccion/Videos/v05_casos-de-uso/mapa-de-edicion.md` — único para ambos (misma grabación fuente), con frases ancla, 3 anclas de tiempo verificables (19:22, 21:18, 28:41) y lista de difuminados.
- **Transcripción literal corregida** (`transcripcion_grabacion-casos-de-uso-copilot.md`): reescrita completa (no resumida) con los términos mal transcritos corregidos y verificados contra las capturas (Kifax→Equifax, Cobble→COBOL, Gun→GAN, gris→grid, SMS→SME Score…), secciones por tema, pasajes indescifrables [entre corchetes].
- **TABLERO actualizado:** fila Video 05 corregida + fila Video 06 nueva (ambos "Guion listo 9 jul", pendiente edición y revisión de Nibaldo).
- **Nuevo documento de conocimiento:** `Conocimiento/gan-framework-interno-gco.md` — qué es GAN (framework interno GCO, .NET/WCF), anatomía, relación con COBOL, el mito "GAN no se toca con IA" y cómo lo desmonta el caso de Luis. Registrado en el README de Conocimiento.

## Estado de dependencias externas

- **Nombre del archivo de video fuente:** no está en la carpeta — marcado `[No hay información — confirmar con Yehimy]` en pill y mapa.
- **Revisión de coherencia de los guiones:** Nibaldo (pendiente).
- Resto de bloqueantes sin cambios (Teams oficial GCO, fecha AMA, Bookings, manual de marca) — ver `Produccion/TABLERO.md`. La confirmación del primer login al portal GCO con la VPN sigue pendiente (sesión 8 jul).

## Decisiones tomadas

- **Dos videos, no uno:** la grabación trae 5 casos; una sola píldora de 2:30–3:00 solo aguanta 3 bien contados. Video 05 = 3 casos con mensajes distintos (incidencia completa · GAN sí se puede · llega a producción); Video 06 = 2 bugs con narrativa común (del front al COBOL). Nada se descarta.
- **El visor "Gestor Sesiones Copilot"** (herramienta del hackathon de Óscar, no oficial) **se muestra sin nombrarlo**; difuminar su rótulo si queda protagónico.
- **Anonimato por defecto:** la voz en off dice "un desarrollador del equipo"; dar crédito a Luis requiere confirmación con él y Nibaldo.
- **Equifax no se nombra en la voz en off** ("un servicio externo de validación"); difuminar también su nombre en pantalla.
- **Fuera de ambos videos:** charla de modelos/créditos, MCPs modificados en local, la herramienta del hackathon como tema, comentario UTF-8, capturas 77–84 (caso AUT85S01 sin narración suficiente — no inventar).
- **Dato sensible nuevo detectado en las capturas:** el PDF de la incidencia es el ticket Jira real `SOLDES-22195` — añadido al difuminado obligatorio.

## Próximas tareas pendientes

- [ ] Yehimy: revisar las voces en off de ambas pills y confirmar el nombre del archivo de video fuente.
- [ ] Nibaldo: revisión de coherencia técnica de los guiones 05 y 06.
- [ ] Generar audios en Clipchamp (voz Alessio Dragon HD Latest) y editar ambas píldoras con el mapa de edición.
- [ ] Decidir: limpiar el duplicado de la transcripción vieja dentro de `transcripcion_audio.md` (propuesto, sin respuesta).
- [ ] Decidir: el README de `Conocimiento/` lista 3 archivos que no existen (`resistencia-adopcion-ia.md`, `casos-exito-sector-financiero.md`, `glosario-tecnico-gco.md`) — ¿limpiar o marcar como pendientes?
- [ ] Pendientes previos sin cambios: confirmar login al portal GCO (VPN), publicación Videos 01–03 en Teams GCO, edición Video 04, decisión guion "Primeros pasos" (A o B).

## Archivos clave del momento

- `Produccion/Videos/v05_casos-de-uso/pill_para-grabacion_casos-de-uso-reales.md` — guion Video 05
- `Produccion/Videos/v05_casos-de-uso/pill_para-grabacion_casos-de-uso-debugging.md` — guion Video 06
- `Produccion/Videos/v05_casos-de-uso/mapa-de-edicion.md` — mapa de edición de ambos
- `Produccion/Videos/v05_casos-de-uso/transcripcion_grabacion-casos-de-uso-copilot.md` — transcripción corregida (fuente de verdad textual)
- `Conocimiento/gan-framework-interno-gco.md` — qué es GAN
- `Produccion/TABLERO.md` — estado de producción actualizado
