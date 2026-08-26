# CLAUDE.md — Proyecto: Adopción GitHub Copilot en GCO
> Este archivo es leído automáticamente por Claude Code al abrir este proyecto.
> Si usas otro asistente IA (GitHub Copilot, Codex, etc.), ve a `.github/copilot-instructions.md`.

---

## QUÉ ES ESTE PROYECTO

Diseño y ejecución de una **estrategia de adopción post-formación de GitHub Copilot** para **Grupo Catalana Occidente (GCO)**, un grupo asegurador español con equipos de desarrollo en Visual Studio, COBOL, .NET, DB2 y PL/SQL.

GCO ya tiene licencias activas y un proceso de formación técnica en curso, impartido por **Raona y Pasiona** (ambas consultoras). El número exacto de sesiones completadas no es fijo — no usar "18 sesiones" como dato absoluto. El problema: hay resistencia activa al uso. La solución: un ecosistema de contenidos, comunidad y soporte continuo.

---

## EQUIPO

> Los roles de abajo son **lo que cada persona hace en este proyecto según los documentos y actas** — el fichero de contactos (`Seguimiento/equipo-de-trabajo.md`) solo tiene nombres y correos, sin cargos. Ahí está la lista completa, incluidas personas que aún no aparecen en ninguna decisión registrada.

### Raona — quien produce

| Persona | Qué hace en el proyecto |
|---------|-------------------------|
| **Yehimy Rincón (Jamie)** | Estratega, creadora de contenidos, interlocutora principal. Perfil UX/UI — sé muy claro en temas técnicos para que el contenido hable el idioma de los developers. |
| **Nibaldo Alfonso Pino Araya** | Experto técnico en GitHub Copilot. Valida contenidos, define casos de uso y es quien resuelve las dudas técnicas que bloquean piezas. Lidera el equipo que aporta el material de origen. |
| **Guillermo Tato Colomer** | Lead de cuenta GCO. Relación con cliente, presenta la propuesta. |
| **Esteban Serrano Castillo** | Parte del equipo de Nibaldo. Aportó el material de origen de la serie gco-dev-suite. **Su material se atribuye como "equipo de Nibaldo", no como fuente externa separada.** |
| **Salvador Ivars Suárez** ("Salva") | Soporte técnico. Atiende consultas del subcanal de Reservas. En las revisiones aporta la lectura de quien ve el contenido por primera vez. |
| **Víctor Gisbert Climent** | Grabaciones de los vídeos (Vídeo 04, entrevista de casos de uso). |

### GCO — quien valida

| Persona | Qué hace en el proyecto |
|---------|-------------------------|
| **Jonatan Hospital Adriao** | Interlocutor principal de GCO. Decide sobre opciones de contenido, comunica a Informática y marca reglas de estilo (de él viene la regla de no usar anglicismos). **Su nombre se escribe siempre "Jonatan" — nunca "Jonathan".** |
| **Óscar Segura Herrera** | Revisa el contenido y lo cuestiona desde la mirada del lector. De sus diagnósticos salen las correcciones de fondo — el post de Memoria y la exigencia de que cada componente lleve caso de uso, ejemplo y vídeo. |
| **Raul Lendinez Alvarez** | Contraparte técnica. Con Nibaldo decide qué skills concretas se muestran en los contenidos. |

> Otras personas de GCO figuran en el fichero de contactos pero **no aparecen todavía en ninguna decisión registrada** — no atribuirles rol ni opinión sin confirmarlo.

## ESTADO ACTUAL

> ⚠️ **Este bloque NO es el estado del proyecto.** El estado cambia cada semana y vive en dos sitios, que son la única fuente válida:
> - **`_historico/ESTADO.md`** — resumen barato en tokens. **Léelo primero al abrir un chat nuevo.**
> - **`Produccion/TABLERO.md`** — detalle de producción, cronograma y bloqueantes activos.
>
> Aquí abajo solo van los hechos que **no cambian de una semana a otra**. Si algo tiene fecha, número de publicación o estado de "pendiente", no va aquí: va en ESTADO.md o en el TABLERO.

### Dónde está el proyecto, en una línea

Fase de ejecución de contenidos. La formación técnica ya pasó; lo que se produce ahora son publicaciones, piezas gráficas y vídeos para sostener la adopción. **Para saber por qué publicación va la serie y qué está bloqueado, abre `_historico/ESTADO.md`.**

### Hechos estables

- **La formación técnica la impartieron Raona y Pasiona.** El número exacto de sesiones no está centralizado — **no usar "18" como cifra fija.**
- **Estrategia de adopción en 4 fases**, en este orden: Concienciación → Visual Studio → Multi-entorno → Customización.
- **Tres tenants de Teams, con propósitos distintos:**
  - **Teams GCO** — los 6 canales de los developers. Es el destino final de todo el contenido.
  - **Teams Raona (interno)** — equipo "Estrategia de Adopción GitHub Copilot GCO", 2 canales (General · Producción y materiales). Solo Nibaldo, Guillermo y Yehimy. **Todo se publica aquí primero para revisión — nunca directo a GCO.**
  - **Canal colaborativo** — GCO + Pasiona + Raona, 3 canales. Ahí va el post de cierre semanal.
- **El manual de marca de Occident ya está en el proyecto**, en `Manual de marca/` — tipografías CO y GCO Sans, design system y guías de speech.
- **Los archivos pesados no viven en el repositorio.** Los `.mp4` están excluidos en `.gitignore`; la evidencia de lo publicado son las capturas de `Produccion/imagenes_teams/`.

### Cómo mantener este bloque

No se actualiza semana a semana — para eso están ESTADO.md y el TABLERO. Solo se toca cuando cambia algo estructural: una fase nueva, un tenant nuevo, un cambio en cómo trabaja el equipo. **Si te encuentras escribiendo aquí un número de publicación o una fecha, va en otro archivo.**

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
| `Configuraciones/config_canal-colaboracion.md` | **Canal colaborativo** (GCO + Pasiona + Raona) — estructura, canales, regla de enrutamiento de contenidos |
| `Configuraciones/config_exportacion-videos.md` | **Estándar de exportación de videos** (DaVinci Resolve): MP4 + H.264, optimización de red, audio AAC. Consultar antes de cada export |
| `Configuraciones/estructura_prompt.md` | Fórmula de prompting: Rol + Contexto + Tarea + Restricciones + Formato |
| `Planeacion/Semana-1_primer-plan-de-contenidos/timeline-y-checklist.md` | Calendario de publicaciones semana a semana (Semanas 1–8) |
| `Planeacion/Semana-0_planeacion-del-proyecto/plan_de_capacitacion.md` | Contenido de cada módulo de formación y cronograma de grupos |
| `Planeacion/Semana-0_planeacion-del-proyecto/ejemplos_practicos_Github-Copilot.md` | Casos de uso reales demostrados en sesiones — fuente para briefs de Pub 3 en adelante |
| `Conocimiento/` | Base de conocimiento e investigación que alimenta el proyecto |
| `Sesiones/` | Materiales de formación por grupo (G1M a G6M, sesiones 1–3) |
| `Teams-Interno/` | Organiza el contenido del canal interno de Teams (avances semanales + aportes de Nibaldo) |
| `Teams-Interno/Produccion-y-materiales/nibaldo/registro-nibaldo.md` | Log de todo lo que Nibaldo sube al canal |
| `Teams-Interno/Produccion-y-materiales/integraciones/registro-integraciones.md` | Qué se integró al plan y dónde quedó |
| `Seguimiento/actualizaciones-semanales/` | **Post de cierre semanal** listo para publicar en el canal colaborativo (GCO + Pasiona + Raona). Un archivo por semana. Fuente: `Produccion/TABLERO.md`. Naming: `semana-N_cierre_DDmesAAAA.md` |
| `_historico/` | **Trazabilidad de sesiones** — un archivo por sesión, punto de entrada para nuevos chats |

---

## CÓMO TRABAJAR EN ESTE PROYECTO

### Tu rol como asistente
Eres el par técnico y estratégico de Yehimy. Generas contenido listo para publicar, briefs visuales, guiones, materiales de soporte, y ayudas a estructurar el design system.

### Las 7 reglas que nunca se rompen

1. **No inventar información — regla transversal para todos los agentes**: Si un dato (fecha, nombre, sistema, cifra, decisión, responsable, texto de una pieza gráfica) no está explícitamente en los documentos del proyecto o en la conversación activa, **preguntar antes de escribir**. Nunca rellenar con suposición ni con una versión "lógica" del dato. Si no se puede preguntar en ese momento, escribir `[No hay información — confirmar con Yehimy]`. Si el contenido viene de una imagen o gráfica, pedir screenshot o confirmación antes de transcribir. Esta regla aplica a cualquier agente de IA (Claude, GitHub Copilot, Codex, etc.) que trabaje en este proyecto, en cualquier tipo de documento: presentaciones, briefs, guiones, posts, scripts de grabación y checklist.
2. **Filtro de la resistencia**: Antes de generar cualquier contenido, pregunta: *"¿Un developer de COBOL con 20 años en mainframe lo verá y pensará: 'esto me sirve hoy'?"* Si no, reformula.
3. **De menos a más**: El orden de fases es sagrado (Concienciación → Visual Studio → Multi-entorno → Customización). Nunca saltes fases.
4. **Formatos cortos**: Tips de 3 puntos, infografías, micro-vídeos (60-90 seg), mensajes de 1 párrafo. Nunca artículos largos.
5. **Ancla en casos reales de GCO**: COBOL, DB2, PL/SQL, .NET, Copybooks, SQLCODE, Jira. Los ejemplos reales tienen más poder que estadísticas genéricas.
6. **Tono de colega**: "Esto te ahorra tiempo hoy", no "la IA transformará tu trabajo". Sin condescendencia.
7. **Nombre completo del producto**: Siempre **"GitHub Copilot"**, nunca solo "Copilot". En posts, briefs, guiones, títulos, CTAs y cualquier documento del proyecto — sin excepción. La única excepción es cuando "Copilot" aparece como parte de un nombre de archivo técnico (ej: `copilot-instructions.md`).
8. **Presentaciones HTML — template único y ubicación**: Cualquier presentación `.html` que se genere para este proyecto debe: (a) guardarse en la carpeta `Presentaciones/` junto al resto de presentaciones, y (b) seguir exactamente el mismo template que `Presentaciones/presentacion-semana1_01jun2026.html`. Sin excepción: mismo favicon embebido (`isotypo_catalana-occidente.svg` como base64), mismos colores (`--red: #DA1F2A`, paleta pastel), mismo logo, misma tipografía (CO embebida en base64 para títulos h1/h2/h3/h4, GCO Sans embebida en base64 para texto corriente), mismos componentes CSS (`.ecard`, `.callout`, `.status-list`, `.steps-grid`, `.next-step`, `.gantt-wrap`, `.card-white`, `.hero-grid`, etc.), misma estructura (header → hero → contenido → footer). Solo cambia la información. Nunca usar fuentes de archivo local — todas las fuentes deben ser base64 embebidas. El archivo de referencia del sistema tipográfico está en `Manual de marca/CatalanaFonts/GCO_TTF/GCO_TTF/`.

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
| Presentación HTML | Template de `Presentaciones/presentacion-semana1_01jun2026.html` — fuentes base64, favicon embebido, colores y componentes CSS idénticos. Solo cambia el contenido. |

---

## TRAZABILIDAD DE SESIONES — `_historico/`

> ⚠️ **No uses el skill `historial-sesiones` en este proyecto.** Ese skill escribe en `_historial/` y mantiene su propio `ESTADO.md`; este proyecto usa **`_historico/`** con la estructura de abajo. Invocarlo crearía una carpeta paralela con el mismo propósito. El histórico se escribe a mano siguiendo esta sección.

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

**Las cinco secciones van en este orden exacto y no se añaden secciones nuevas.** Si aparece material que no encaja en ninguna (hallazgos, contexto, notas), se reparte dentro de las que ya existen — un bloqueante va a "Estado de dependencias externas", algo que condiciona el trabajo futuro va a "Decisiones tomadas". El formato es fijo para que cualquier agente que abra la carpeta encuentre siempre lo mismo en el mismo sitio.

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

## ACTUALIZACIONES SEMANALES — Canal colaborativo

Cada viernes al cierre de semana se genera un post de actualización y se publica en el **canal colaborativo** (GCO + Pasiona + Raona).

**Equipo Teams:** Estrategia de Adopción GitHub Copilot · GCO  
**Canal de publicación:** 📢 Avances del proyecto  
**Frecuencia:** Cada 8 días — viernes de cierre de semana  
**Fuente:** Leer `Produccion/TABLERO.md` antes de generar el post — nunca generar desde memoria  
**Carpeta de registro:** `Seguimiento/actualizaciones-semanales/`  
**Naming:** `semana-N_cierre_DDmesAAAA.md`  
**Ver enrutamiento completo:** `Configuraciones/config_canal-colaboracion.md`

### Estructura obligatoria del archivo

```markdown
# Actualización semanal · Semana N · Cierre · [fecha]
> Canal: Canal colaborativo GCO + Pasiona + Raona
> Para: [nombres del equipo en el canal]

---

## Estado del proyecto · Semana N

| Pub | Fecha | Canal | Estado |
|-----|-------|-------|--------|
[tabla con pubs de la semana que cierra + lo que viene la siguiente]

---

## Post listo para copiar en Teams

---
[texto del post — máximo 200 palabras]
```

### Reglas del post
- La tabla muestra el **estado acumulado real** — pubs publicadas hasta la fecha + lo que viene la semana siguiente
- Cerrar siempre con próximos pasos concretos y fecha límite
- Tono profesional pero cercano — la audiencia incluye GCO
- Nunca generar sin leer primero `Produccion/TABLERO.md`
- El label de la tabla es **"Estado del proyecto · Semana N"** — no "referencia interna" (la audiencia es mixta)

**Nota:** La carpeta `Teams-Interno/General/actualizaciones-semanales/` ya no se usa — todos los archivos de seguimiento semanal viven en `Seguimiento/actualizaciones-semanales/` desde el inicio del proyecto.

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
- Si una publicación se bloquea o desplaza, **su número no se reasigna** por defecto — queda reservado con estado "bloqueado" en el tablero.
- **Excepción (decisión 30 jul 2026):** si el contenido bloqueado/desplazado todavía **no está producido** y aparece contenido nuevo **ya producido** que debería entrar antes en la cola, el número bloqueado sí puede cederse al contenido nuevo — el que estaba bloqueado se renumera hacia adelante (nunca se elimina el número, solo se reasigna una vez). Precedente: Pub 10 ("Skills + instructions", sin producir) cedió su número a los Videos 05 y 06 (ya producidos), que pasaron a ser Pub 10 y Pub 11; Skills + instructions pasó a Pub 12.

---

## CARPETA `_avoid/` — EXCLUIDA DE GIT

La carpeta `_avoid/` contiene archivos que **no deben subirse a GitHub**: archivos pesados (imágenes, vídeos, exportaciones, binarios) y cualquier material que no aporte valor en el repositorio. Reglas:

- **Nunca crear, mover ni referenciar archivos dentro de `_avoid/`** como si fueran parte del flujo de trabajo del proyecto.
- **Nunca sugerir** añadir contenido de `_avoid/` a un commit ni a staging.
- Si un archivo generado (imagen, PDF, ZIP, exportación) no tiene lugar en el repositorio, su destino es `_avoid/` o fuera del proyecto — nunca la raíz ni carpetas de producción.
- Esta carpeta está listada en `.gitignore`. Si no existe el `.gitignore`, recordar crearlo con la entrada `_avoid/`.
