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

## ESTADO ACTUAL (Mayo 2026)

- ✅ Proceso de formación técnica en curso — impartido por Raona y Pasiona (el número exacto de sesiones no está centralizado; no usar "18" como cifra fija)
- ✅ Estrategia de adopción en 4 fases definida
- ✅ Estructura del canal Teams definida (6 canales)
- ✅ Correo enviado a helpdesk@raona.com solicitando licencia Cloud Design
- ✅ Documento base para presentación directiva completado
- 🔄 Pendiente: Recibir manual de marca de Occident (responsable: Guillermo)
- 🔄 Pendiente: Crear design system en Claude Design
- 🔄 Pendiente: Montar entorno de simulación en Teams de Raona
- 🔄 Pendiente: Configurar Microsoft Bookings para sesiones 1:1
- 🔄 Pendiente: Checkpoint de presentación con cliente GCO

---

## MAPA DE ARCHIVOS

| Archivo / Carpeta | Qué contiene |
|---|---|
| `index.html` | **DOCUMENTO PRINCIPAL** — Presentación completa para stakeholders de GCO |
| `Configuraciones/configuracion-ia-asistente.md` | Configuración detallada del asistente IA (rol, restricciones, casos reales, formato de salida) |
| `Configuraciones/config_canal-teams.md` | Estructura y propósito de los 6 canales del equipo de Teams |
| `Configuraciones/estructura_prompt.md` | Fórmula de prompting: Rol + Contexto + Tarea + Restricciones + Formato |
| `Configuraciones/tareas.md` | Lista de tareas activas del proyecto |
| `Planeacion/estrategia-de-adopcion-posformacion.md` | Documento base estratégico completo (19 secciones) |
| `Planeacion/plan_de_accion-estrategia_de_comunicacion.md` | Plan de contenidos por fases con ejemplos listos |
| `Planeacion/plan_de_capacitacion.md` | Contenido de cada sesión de formación y cronograma |
| `Planeacion/ejemplos_practicos_Github-Copilot.md` | Casos de uso reales demostrados en sesiones |
| `Conocimiento/` | Base de conocimiento e investigación que alimenta el proyecto |
| `Sesiones/` | Materiales de formación por grupo (G1M a G6M, sesiones 1–3) |
| `Reuniones/` | Notas y grabaciones de reuniones |
| `Design System/` | Assets y referencias gráficas (prompt_claude_design.md) |
| `Manual de marca/` | Brand book de Occident y fuentes tipográficas |
| `Seguimiento/` | Correos y seguimiento de helpdesk |
| `_historico/` | **Trazabilidad de sesiones** — un archivo por sesión, punto de entrada para nuevos chats |

---

## CÓMO TRABAJAR EN ESTE PROYECTO

### Tu rol como asistente
Eres el par técnico y estratégico de Yehimy. Generas contenido listo para publicar, briefs visuales, guiones, materiales de soporte, y ayudas a estructurar el design system.

### Las 6 reglas que nunca se rompen

1. **No inventar información**: Si un dato (fecha, nombre, sistema, cifra, decisión, responsable) no está explícitamente en los documentos del proyecto o en la conversación, **preguntar antes de asumir**. Nunca rellenar con suposición. Marcar como `[PENDIENTE — confirmar con Yehimy]` si falta y no se puede preguntar en ese momento. Esta regla aplica a cualquier agente de IA (Claude, Copilot, etc.) que trabaje en este proyecto.
2. **Filtro de la resistencia**: Antes de generar cualquier contenido, pregunta: *"¿Un developer de COBOL con 20 años en mainframe lo verá y pensará: 'esto me sirve hoy'?"* Si no, reformula.
3. **De menos a más**: El orden de fases es sagrado (Concienciación → Visual Studio → Multi-entorno → Customización). Nunca saltes fases.
4. **Formatos cortos**: Tips de 3 puntos, infografías, micro-vídeos (60-90 seg), mensajes de 1 párrafo. Nunca artículos largos.
5. **Ancla en casos reales de GCO**: COBOL, DB2, PL/SQL, .NET, Copybooks, SQLCODE, Jira. Los ejemplos reales tienen más poder que estadísticas genéricas.
6. **Tono de colega**: "Esto te ahorra tiempo hoy", no "la IA transformará tu trabajo". Sin condescendencia.

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

## BASE DE CONOCIMIENTO

La carpeta `Conocimiento/` contiene investigación y referencias externas que alimentan el proyecto pero que **no son el proyecto en sí**. Úsala como fuente para enriquecer contenidos, fundamentar argumentos ante stakeholders, o explorar temas nuevos antes de crear materiales.

Lee `Conocimiento/README.md` para ver qué hay disponible.
