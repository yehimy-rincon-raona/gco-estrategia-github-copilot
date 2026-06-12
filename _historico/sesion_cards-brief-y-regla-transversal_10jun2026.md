# Resumen de sesión — Cards brief + regla transversal no inventar · 10 junio 2026
> Continúa desde: `sesion_correcciones-jonatan_10jun2026.md`

---

## Qué se completó en esta sesión

### Infografía — correcciones finales al brief
- Actualización de `Produccion/semana-1_01-05jun/pub-02_jue-04jun/infografia_instalacion-copilot-vs.md`
  - **Paso 1:** ampliado el texto ("Si no lo ves, búscalo en el menú de inicio...") para equilibrar con el paso 2
  - **Paso 3:** expandido con instrucción de verificación de cuenta ("En la esquina superior derecha verás tu avatar... comprueba que aparece tu correo corporativo. Si ves una cuenta personal, cierra sesión y vuelve a entrar con la cuenta de GCO")
  - **Paso 4:** restaurado al contenido real de la gráfica — terminal PowerShell + `$PSVersionTable.PSVersion` — título: "Valida tu entorno de terminal"
  - **Paso 5:** restaurado al contenido real de la gráfica — `copilot-instructions.md` dentro de `.github` — título: "Dale contexto a GitHub Copilot"
  - Estos dos últimos pasos habían sido reescritos incorrectamente en una sesión anterior. La corrección vino de screenshots del gráfico real

### Regla transversal "no inventar" — propagada a todos los agentes
- `CLAUDE.md` — Regla 1 reescrita como regla transversal para **todos los agentes de IA** (Claude, GitHub Copilot, Codex): preguntar si no hay fuente clara, o marcar `[No hay información — confirmar con Yehimy]`. Incluye piezas gráficas — pedir screenshot antes de transcribir.
- `.github/copilot-instructions.md` — Regla 1 actualizada con mismo lenguaje transversal
- `memory/feedback_no_inventar_presentaciones.md` — Expandido con dos incidentes concretos (Why) + criterios de verificación (How to apply)
- `memory/MEMORY.md` — Entrada actualizada para reflejar alcance transversal

### Cards brief — nuevo archivo en pub-02
- Creación de `Produccion/semana-1_01-05jun/pub-02_jue-04jun/S1-cards_paso-a-paso.md`
  - Brief completo de 6 cards (2 temas × 3 cards cada uno)
  - **Tema 1 — "¿Tengo que instalar Visual Studio?"**: portada / el problema / la solución (Portal de Empresa)
  - **Tema 2 — "GitHub Copilot no aparece en mi Visual Studio"**: portada / el problema / la solución (My Profile de Microsoft · 2 clics · ~40 min)
  - Origen del contenido: Jonatan (GCO) · reunión 9 junio 2026
  - Referencia visual: `S1-Card_paso1.png` · mismo estilo
  - Nomenclatura de salida: `S1-Card_vs-instalacion_01/02/03.jpg` + `S1-Card_licencia-copilot_01/02/03.jpg`
  - Especificaciones Figma completas incluidas

- **Post para Teams añadido dentro del mismo archivo** — sección "Post para Teams — Respuesta al hilo de Pub 2 · Acompaña Card T2"
  - Tipo: respuesta al hilo existente · no post nuevo
  - Adjuntar: `S1-Card_licencia-copilot_01.jpg`, `_02.jpg`, `_03.jpg`
  - Texto: "¿GitHub Copilot no aparece en tu Visual Studio? [...] La solución tiene 2 clics [...]"

---

## Limpieza pendiente

- `Produccion/semana-2_08-12jun/pub-06_sem-2-pendiente/canal-primeros-pasos_pub6.md` — **archivo duplicado con contenido idéntico al de pub-02** · creado por error en una sesión anterior antes de que se corrigiera la ubicación · debe eliminarse. La carpeta `pub-06_sem-2-pendiente/` puede quedar vacía o borrarse completa.

---

## Estado de dependencias externas

| Bloqueo | Responsable | Detalle |
|---------|-------------|---------|
| Acceso al Teams de GCO para publicar | Jonatan | Gestiona usuario/contraseña y licencia Teams para Guillermo Tato |
| Grabación nueva sección licencia Video 1 | Nibaldo | Flujo My Profile → 2 clics → ~40 min |
| Confirmar que sección Portal de Empresa ya está grabada | Nibaldo | — |

---

## Decisiones tomadas

- Las cards de los dos problemas frecuentes pertenecen a Pub 2 (no son una publicación nueva). El archivo vive en `pub-02_jue-04jun/` y se publica como respuesta al hilo ya publicado, no como un post nuevo.
- El prefijo de nomenclatura de las cards es `S1-` (Semana 1), no `A1-`. El archivo se llama `S1-cards_paso-a-paso.md`.
- El post de Teams para Card T2 es una **respuesta al hilo**, no un post a nivel raíz del canal.
- La regla "no inventar" se aplica a todos los agentes de IA que trabajan en el proyecto — no es exclusiva de Claude.

---

## Próximas tareas pendientes

- [ ] **Yehimy** — Editar `canal-primeros-pasos_pub2-video1.md` línea 23: "instalarlo" → "activarlo"
- [ ] **Yehimy** — Actualizar guión completo Video 1 `pildoras-agiles_configuracion-del-entorno.md`: reescribir sección 2 (VS ya instalado, no hay descarga) + añadir sección solicitud de licencia
- [ ] **Yehimy** — Actualizar script de grabación `v01-pill01-para-grabacion_instalacion.md`: eliminar instrucción de grabar ejecutable/instalador, reemplazar con flujo icono escritorio + Portal de Empresa + My Profile
- [ ] **Yehimy / Diseño** — Figma: rediseñar `S1-Infografia_paso-a-paso.jpg` — añadir bloque intro antes del paso 1, actualizar pasos 1 y 2 (brief listo en `infografia_instalacion-copilot-vs.md`)
- [ ] **Yehimy / Diseño** — Figma: crear 6 cards (brief listo en `S1-cards_paso-a-paso.md`)
- [ ] **Yehimy** — Eliminar `Produccion/semana-2_08-12jun/pub-06_sem-2-pendiente/canal-primeros-pasos_pub6.md` (duplicado por error)
- [ ] **Nibaldo** — Confirmar que sección Portal de Empresa ya está en grabación
- [ ] **Nibaldo** — Grabar flujo solicitud de licencia (My Profile → 2 clics → ~40 min)
- [ ] **Jonatan / Guillermo** — Acceso al Teams de GCO para Guillermo Tato

---

## Archivos clave del momento

| Archivo | Para qué |
|---------|----------|
| `Produccion/semana-1_01-05jun/pub-02_jue-04jun/S1-cards_paso-a-paso.md` | Brief de 6 cards + post de Teams para Card T2 — listo para Figma y publicación |
| `Produccion/semana-1_01-05jun/pub-02_jue-04jun/infografia_instalacion-copilot-vs.md` | Brief actualizado de infografía — listo para Figma |
| `Reuniones/seguimientos-semanales/seguimiento-correcciones_jonatan_09jun2026.md` | Checklist completo de correcciones de Jonatan — punto de entrada para continuar |
| `Produccion/Videos/v01_configuracion-entorno/pildoras-agiles_configuracion-del-entorno.md` | Guión completo Video 1 — pendiente de actualizar |