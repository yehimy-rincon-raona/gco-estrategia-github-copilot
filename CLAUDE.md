# CLAUDE.md — Proyecto: Adopción GitHub Copilot en GCO
> Este archivo es leído automáticamente por Claude Code al abrir este proyecto.
> Si usas otro asistente IA (GitHub Copilot, Codex, etc.), ve a `.github/copilot-instructions.md`.

---

## QUÉ ES ESTE PROYECTO

Diseño y ejecución de una **estrategia de adopción post-formación de GitHub Copilot** para **Grupo Catalana Occidente (GCO)**, un grupo asegurador español con equipos de desarrollo en Visual Studio, COBOL, .NET, DB2 y PL/SQL.

GCO ya tiene licencias activas y un proceso de formación técnica en curso, impartido por **Raona y Pasiona** (ambas consultoras). El número exacto de sesiones completadas no es fijo — no usar "18 sesiones" como dato absoluto. El problema: hay resistencia activa al uso. La solución: un ecosistema de contenidos, comunidad y soporte continuo.

---

## EQUIPO

| Persona | Rol |
|---------|-----|
| **Yehimy Rincón (Jamie)** | Estratega, creadora de contenidos, interlocutora principal. Perfil UX/UI — sé muy claro en temas técnicos para que el contenido hable el idioma de los developers. |
| **Nibaldo** | Experto técnico GitHub Copilot. Valida contenidos, define casos de uso. |
| **Guillermo** | Lead de cuenta GCO. Relación con cliente, presenta la propuesta. |

---

## ESTADO ACTUAL (Junio 2026 — Semana 1 de ejecución)

- ✅ Proceso de formación técnica en curso — impartido por Raona y Pasiona (el número exacto de sesiones no está centralizado; no usar "18" como cifra fija)
- ✅ Estrategia de adopción en 4 fases definida
- ✅ Estructura del canal Teams GCO definida (6 canales para los developers)
- ✅ Correo enviado a helpdesk@raona.com solicitando licencia Cloud Design
- ✅ Documento base para presentación directiva completado
- ✅ Canal interno de Teams creado en **tenant Raona**: equipo "Estrategia de Adopción GitHub Copilot GCO" — 2 canales: **General** y **Producción y materiales** — solo acceso Nibaldo, Guillermo y Yehimy (ver `Configuraciones/config_canal-interno.md`)
- ✅ Pub 1 (Bienvenida) — Publicada el 3 junio en los 6 canales del Teams GCO
- ✅ Pub 2 (Primeros Pasos) — Post + Infografía publicados el 5 junio · Vídeo 1 en producción (grabaciones pendientes de Nibaldo)
- ✅ Briefs Pub 3 y Pub 4 (Semana 2) — listos, pendiente aprobación Nibaldo/Guillermo el lunes 8 junio
- ✅ Canal interno de equipos actualizado con estado de Semana 1
- 🔄 Pendiente: Grabaciones de Nibaldo para completar Vídeo 1 (URL canal corporativo pendiente)
- 🔄 Pendiente: Aprobación Pub 3 y Pub 4 (lunes 8 junio)
- 🔄 Pendiente: Recibir manual de marca de Occident (responsable: Guillermo)
- 🔄 Pendiente: Crear design system en Figma
- 🔄 Pendiente: Configurar Microsoft Bookings para sesiones 1:1
- 🔄 Pendiente: Acceso al Teams GCO (bloqueante activo — lo gestiona Catalana Occidente)
- ⚠️ Bloqueado: Pub 5 (AMA) — falta fecha (Nibaldo + Guillermo)
- ⚠️ Bloqueado: Pub 8 (Sesiones 1:1) — falta Microsoft Bookings

---

## MAPA DE ARCHIVOS

| Archivo / Carpeta | Qué contiene |
|---|---|
| `index.html` | **DOCUMENTO PRINCIPAL** — Presentación completa para stakeholders de GCO |
| `Produccion/TABLERO.md` | **PUNTO DE ENTRADA DE PRODUCCIÓN** — Estado de cada publicación y vídeo, con links directos a los archivos |
| `Produccion/semana-N_fechas/pub-0X_dia-DDmes/` | Archivos de cada publicación (post Teams + brief infografía). Organizados por semana de publicación. Ver convención de nombres más abajo. |
| `Produccion/Videos/` | Scripts de guión y grabación para los 3 vídeos de adopción |
| `Produccion/semana-0_25-29may/graficas/screenshots/` | Screenshots de todo lo publicado — evidencia visual del estado real |
| `Configuraciones/configuracion-ia-asistente.md` | Configuración detallada del asistente IA (rol, restricciones, casos reales, formato de salida) |
| `Configuraciones/config_canal-teams.md` | Estructura y propósito de los 6 canales del equipo de Teams de GCO (los developers) |
| `Configuraciones/config_canal-interno.md` | Estructura y metodología del canal interno de Teams del equipo Raona |
| `Configuraciones/estructura_prompt.md` | Fórmula de prompting: Rol + Contexto + Tarea + Restricciones + Formato |
| `Planeacion/Semana-1_primer-plan-de-contenidos/timeline-y-checklist.md` | Calendario de publicaciones semana a semana (Semanas 1–8) |
| `Planeacion/Semana-0_planeacion-del-proyecto/plan_de_capacitacion.md` | Contenido de cada módulo de formación y cronograma de grupos |
| `Planeacion/Semana-0_planeacion-del-proyecto/ejemplos_practicos_Github-Copilot.md` | Casos de uso reales demostrados en sesiones — fuente para briefs de Pub 3 en adelante |
| `Conocimiento/` | Base de conocimiento e investigación que alimenta el proyecto |
| `Sesiones/` | Materiales de formación por grupo (G1M a G6M, sesiones 1–3) |
| `Teams-Interno/` | Organiza el contenido del canal interno de Teams (avances semanales + aportes de Nibaldo) |
| `Teams-Interno/General/actualizaciones-semanales/` | Posts de avance semanal listos para publicar en el canal General |
| `Teams-Interno/Produccion-y-materiales/nibaldo/registro-nibaldo.md` | Log de todo lo que Nibaldo sube al canal |
| `Teams-Interno/Produccion-y-materiales/integraciones/registro-integraciones.md` | Qué se integró al plan y dónde quedó |
| `_historico/` | **Trazabilidad de sesiones** — un archivo por sesión, punto de entrada para nuevos chats |

---

## CÓMO TRABAJAR EN ESTE PROYECTO

### Tu rol como asistente
Eres el par técnico y estratégico de Yehimy. Generas contenido listo para publicar, briefs visuales, guiones, materiales de soporte, y ayudas a estructurar el design system.

### Las 7 reglas que nunca se rompen

1. **No inventar información**: Si un dato (fecha, nombre, sistema, cifra, decisión, responsable) no está explícitamente en los documentos del proyecto o en la conversación, **preguntar antes de asumir**. Nunca rellenar con suposición. Marcar como `[PENDIENTE — confirmar con Yehimy]` si falta y no se puede preguntar en ese momento. Esta regla aplica a cualquier agente de IA (Claude, Copilot, etc.) que trabaje en este proyecto.
2. **Filtro de la resistencia**: Antes de generar cualquier contenido, pregunta: *"¿Un developer de COBOL con 20 años en mainframe lo verá y pensará: 'esto me sirve hoy'?"* Si no, reformula.
3. **De menos a más**: El orden de fases es sagrado (Concienciación → Visual Studio → Multi-entorno → Customización). Nunca saltes fases.
4. **Formatos cortos**: Tips de 3 puntos, infografías, micro-vídeos (60-90 seg), mensajes de 1 párrafo. Nunca artículos largos.
5. **Ancla en casos reales de GCO**: COBOL, DB2, PL/SQL, .NET, Copybooks, SQLCODE, Jira. Los ejemplos reales tienen más poder que estadísticas genéricas.
6. **Tono de colega**: "Esto te ahorra tiempo hoy", no "la IA transformará tu trabajo". Sin condescendencia.
7. **Nombre completo del producto**: Siempre **"GitHub Copilot"**, nunca solo "Copilot". En posts, briefs, guiones, títulos, CTAs y cualquier documento del proyecto — sin excepción. La única excepción es cuando "Copilot" aparece como parte de un nombre de archivo técnico (ej: `copilot-instructions.md`).

### Entorno técnico de la audiencia
Visual Studio (principal), VS Code, terminal CLI. Lenguajes: COBOL, .NET, DB2, PL/SQL, SQL. Jira y Confluence vía Atlassian.

### Formato de salida por tipo de contenido
| Tipo | Cómo formatearlo |
|------|-----------------|
| Post para Teams | Markdown para Teams. Máximo 150 palabras. Emoji si aplica. CTA al final. |
| Brief infografía | Título + mensaje principal + 3-4 puntos + descripción visual detallada |
| Script micro-vídeo | Duración, narración, descripción de pantalla, CTA final |
| Brief Claude Design | Descripción de componente, colores/tipografía/espaciado, referencia marca Occident |
| Guía técnica | Pasos numerados, capturas descritas, máximo 7 pasos por sección |

---

## TRAZABILIDAD DE SESIONES — `_historico/`

### Qué es
La carpeta `_historico/` contiene el registro consecutivo de cada sesión de trabajo. Cada archivo es un punto de entrada completo para que cualquier LLM, Copilot o agente pueda retomar el proyecto sin necesidad de releer toda la conversación anterior.

### Cuándo crear un archivo histórico
Cuando Yehimy diga **"haz un resumen"**, **"cierra la sesión"** o cualquier variante — es una instrucción para crear el archivo histórico de esa sesión. No es un resumen narrativo para leer: es un documento operativo para continuar.

### Convención de nombre
```
sesion_[semana-o-contexto]_[DDmesAAAA].md
```
Ejemplos:
- `sesion_semana-0_29may2026.md`
- `sesion_reunion-gco_01jun2026.md`
- `sesion_produccion-graficas_10jun2026.md`

Los archivos son **consecutivos** — cada uno referencia el anterior en la cabecera.

### Estructura obligatoria del archivo

```markdown
# Resumen de sesión — [contexto] · [fecha]
> Continúa desde: [nombre del archivo anterior o "inicio del proyecto"]

## Qué se completó en esta sesión
[Lista de entregables terminados con rutas de archivo]

## Estado de dependencias externas
[Qué está bloqueado, quién lo desbloquea, fecha límite]

## Decisiones tomadas
[Decisiones clave que no están en el código pero afectan el trabajo futuro]

## Próximas tareas pendientes
[Lista de tareas concretas con responsable si aplica]

## Archivos clave del momento
[Solo los archivos relevantes para el próximo paso — no lista exhaustiva]
```

### Cómo usar este archivo al iniciar una nueva sesión
Al abrir un chat nuevo, lee primero el archivo histórico más reciente de `_historico/` — no el CLAUDE.md completo. El histórico tiene el estado actual; el CLAUDE.md tiene las reglas permanentes. Ambos se complementan.

---

## CANAL INTERNO DE TEAMS — Metodología

Existe un equipo de Microsoft Teams llamado **"Estrategia de Adopción GitHub Copilot GCO"** (creado el 4 junio 2026) en el **tenant de Raona**. Es exclusivamente interno — solo tienen acceso Nibaldo, Guillermo y Yehimy. Es distinto e independiente del Teams de contenidos que usarán los developers de GCO (ese irá en el tenant de Occidente).

**Canales:**
- **General** → visibilizar el avance semanal respecto al cronograma entre los tres
- **Producción y materiales** → Nibaldo sube grabaciones y notas; Yehimy las integra al plan

**Principio clave:** Todo lo que se publica en el canal de Teams tiene un archivo fuente en `Teams-Interno/`. Nunca publicar sin registrar primero en el proyecto.

**Flujo Nibaldo → Plan:**
1. Nibaldo sube algo en "Producción y materiales"
2. Yehimy lo registra en `Teams-Interno/Produccion-y-materiales/nibaldo/registro-nibaldo.md`
3. Yehimy evalúa → integra o descarta
4. Si se integra: va a `Planeacion/` o `Produccion/` + se registra en `registro-integraciones.md`

**Ver:** `Configuraciones/config_canal-interno.md` para detalle completo y `Teams-Interno/README.md` para la estructura de carpetas.

---

## BASE DE CONOCIMIENTO

La carpeta `Conocimiento/` contiene investigación y referencias externas que alimentan el proyecto pero que **no son el proyecto en sí**. Úsala como fuente para enriquecer contenidos, fundamentar argumentos ante stakeholders, o explorar temas nuevos antes de crear materiales.

Lee `Conocimiento/README.md` para ver qué hay disponible.

---

## CONVENCIÓN DE NOMBRES — CARPETAS Y ARCHIVOS DE PRODUCCIÓN

### Carpetas de semana
```
Produccion/semana-N_DDmes-DDmes/
```
Ejemplo: `semana-2_08-12jun/`

### Carpetas de publicación
```
pub-NN_dia-DDmes/
```
- `NN` = número correlativo de la publicación a lo largo de todo el proyecto (01, 02, 03…). **Nunca se reinicia por semana.**
- `dia` = `mar` (martes) o `jue` (jueves). Si la fecha no está confirmada, usar `sem-N-pendiente`.
- `DDmes` = día y mes en minúsculas. Ejemplo: `09jun`, `11jun`.

Ejemplos válidos:
- `pub-03_mar-09jun/` — Pub 3, Martes 9 junio
- `pub-04_mar-09jun/` — Pub 4, mismo día, canal distinto (es posible)
- `pub-05_jue-11jun/` — Pub 5, Jueves 11 junio

### Archivos dentro de cada carpeta
```
canal-[nombre-del-canal]_pubNN.md
```
- `nombre-del-canal`: versión corta del canal de Teams de destino. Opciones: `primeros-pasos`, `anuncios-tips`, `casos-de-uso`, `foro-ama`, `retos`, `reflexiones`.
- `NN` = mismo número que la carpeta padre.

Ejemplo: `canal-primeros-pasos_pub3.md` dentro de `pub-03_mar-09jun/`.

### Regla de numeración
- La numeración es **global y correlativa** — no se salta números, no se reinicia por semana.
- Pub 1 y 2 son de Semana 1. Pub 3, 4 y 5 son de Semana 2. Pub 6 en adelante = semanas siguientes.
- Si dos publicaciones van el mismo día (canales distintos), llevan números consecutivos (ej: Pub 3 y Pub 4 ambos el martes 9 junio en canales diferentes).
- Si una publicación se bloquea o desplaza, **su número no se reasigna** — queda reservado con estado "bloqueado" en el tablero.

---

## CARPETA `_avoid/` — EXCLUIDA DE GIT

La carpeta `_avoid/` contiene archivos que **no deben subirse a GitHub**: archivos pesados (imágenes, vídeos, exportaciones, binarios) y cualquier material que no aporte valor en el repositorio. Reglas:

- **Nunca crear, mover ni referenciar archivos dentro de `_avoid/`** como si fueran parte del flujo de trabajo del proyecto.
- **Nunca sugerir** añadir contenido de `_avoid/` a un commit ni a staging.
- Si un archivo generado (imagen, PDF, ZIP, exportación) no tiene lugar en el repositorio, su destino es `_avoid/` o fuera del proyecto — nunca la raíz ni carpetas de producción.
- Esta carpeta está listada en `.gitignore`. Si no existe el `.gitignore`, recordar crearlo con la entrada `_avoid/`.
