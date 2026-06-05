# AGENTS.md — Proyecto: Adopción GitHub Copilot en GCO
> Este archivo es leído por agentes de IA (Codex, modelos OpenAI, agentes autónomos, etc.) al entrar en este proyecto.
> - Si eres **Claude Code**: lee `CLAUDE.md`
> - Si eres **GitHub Copilot Chat**: lee `.github/copilot-instructions.md`
> - Si eres **cualquier otro agente IA**: este es tu archivo de referencia.

---

## QUÉ ES ESTE PROYECTO

Diseño y ejecución de una **estrategia de adopción post-formación de GitHub Copilot** para **Grupo Catalana Occidente (GCO)**, grupo asegurador español. El equipo de desarrollo usa Visual Studio, COBOL, .NET, DB2 y PL/SQL.

GCO tiene licencias activas. La formación técnica está en curso (impartida por Raona y Pasiona). El problema: resistencia activa al uso. La solución: ecosistema de contenidos, comunidad en MS Teams y soporte continuo.

---

## EQUIPO

| Persona | Rol |
|---------|-----|
| **Yehimy Rincón (Jamie)** | Estratega, creadora de contenidos, interlocutora principal. Perfil UX/UI. |
| **Nibaldo** | Experto técnico GitHub Copilot. Valida contenidos, sube grabaciones al canal interno. |
| **Guillermo** | Lead de cuenta GCO. Relación con cliente. |

---

## ESTADO ACTUAL (4 junio 2026 — Semana 1 de ejecución)

- ✅ Posts de bienvenida publicados en los 6 canales del Teams de Raona (entorno de prueba)
- ✅ Banners creados para todos los canales — pendiente corregir 2 issues antes del Teams de GCO
- ✅ Canal interno de coordinación creado (tenant Raona) — solo Nibaldo, Guillermo y Yehimy
- 🔄 Pendiente: acceso al Teams oficial de GCO (bloqueante activo)
- 🔄 Pendiente: corregir banner General (fondo rojo) y banner Reservas (etiqueta errónea)
- 🔄 Pendiente: Pub 2 (Primeros Pasos — verificación de acceso) sin brief

---

## REGLAS CRÍTICAS — NUNCA SE ROMPEN

1. **NO INVENTAR INFORMACIÓN.** Si un dato (fecha, nombre, sistema, cifra, decisión, responsable) no está en los documentos del proyecto ni en la conversación → **preguntar antes de asumir**. Marcar como `[PENDIENTE — confirmar con Yehimy]` si no se puede preguntar. Si estás en una tabla o checklist, usar `FALTA INFORMACIÓN`.
2. **Filtro de la resistencia:** antes de generar contenido, pregunta: *"¿Un developer de COBOL con 20 años en mainframe lo verá y pensará: esto me sirve hoy?"* Si no, reformula.
3. **Orden de fases sagrado:** Concienciación → Visual Studio → Multi-entorno → Customización. No saltar fases.
4. **Formatos cortos:** tips de 3 puntos, infografías, micro-vídeos 60-90 seg, mensajes de 1 párrafo. Nunca artículos largos.
5. **Ancla en casos reales de GCO:** COBOL, DB2, PL/SQL, .NET, Copybooks, SQLCODE, Jira.
6. **Tono de colega:** "esto te ahorra tiempo hoy", nunca "la IA transformará tu trabajo".
7. **Regla de marca Occident:** ningún fondo negro ni rojo sólido. Fondo blanco/gris. Rojo (`#DC0028`) solo en acentos y franjas de canal.
8. **Sincronización Teams ↔ proyecto:** todo lo publicado en Teams tiene un archivo fuente en el proyecto. Si algo cambia en Teams → actualizar el archivo fuente → evaluar si afecta `CLAUDE.md`.

---

## DOS CANALES DE TEAMS — SON DISTINTOS

### Canal GCO (para los developers) — tenant de Occidente
Aún no activo — bloqueante: sin acceso. Estructura de 6 canales documentada en `Configuraciones/config_canal-teams.md`.

| Canal | Propósito |
|-------|-----------|
| General | Entrada e índice de la comunidad |
| Anuncios y Tips Ágiles | Tips cortos, casos reales, novedades (2x/semana) |
| Primeros Pasos con Copilot | Guía paso a paso para activar Copilot |
| Casos de Uso Reales | Ejemplos documentados del propio equipo |
| Foro de Ayuda / AMA | Preguntas abiertas + sesiones en vivo |
| Reservas 1:1 con Expertos | Sesiones personalizadas 30 min vía Bookings |

### Canal Interno Raona — tenant de Raona
Solo acceso: Nibaldo, Guillermo y Yehimy. Detalle en `Configuraciones/config_canal-interno.md`.

| Canal | Propósito |
|-------|-----------|
| General | Avance semanal respecto al cronograma |
| Producción y materiales | Nibaldo sube grabaciones y notas; Yehimy integra al plan |

---

## MAPA DE ARCHIVOS CLAVE

| Archivo / Carpeta | Qué contiene |
|---|---|
| `_historico/` | **LEER PRIMERO** — archivo más reciente = estado actual del proyecto |
| `CLAUDE.md` | Reglas completas para Claude Code |
| `.github/copilot-instructions.md` | Reglas para GitHub Copilot Chat |
| `Configuraciones/config_canal-teams.md` | 6 canales del Teams de GCO |
| `Configuraciones/config_canal-interno.md` | Canal interno de Teams (Raona) |
| `Planeacion/Semana-1_primer-plan-de-contenidos/timeline-y-checklist.md` | Plan semana a semana + checklist |
| `Produccion/semana-0_25-29may/graficas/` | Textos y banners de todos los canales (estado publicado) |
| `Teams-Interno/` | Contenido y registros del canal interno de Teams |
| `Teams-Interno/Produccion-y-materiales/nibaldo/registro-nibaldo.md` | Log de aportes de Nibaldo |
| `Manual de marca/` | Brand book de Occident + tipografías |
| `Conocimiento/` | Investigación y referencias externas |

---

## TRAZABILIDAD DE SESIONES

Cuando Yehimy diga **"haz un resumen"** o **"cierra la sesión"** → crear un archivo en `_historico/` con nombre:
```
sesion_[contexto]_[DDmesAAAA].md
```
Incluir: entregables completados (con rutas), dependencias bloqueantes, decisiones tomadas, próximas tareas, referencia al archivo anterior.

Al iniciar sesión nueva: leer primero el histórico más reciente de `_historico/`.

---

## FORMATO DE SALIDA POR TIPO DE CONTENIDO

| Tipo | Cómo formatearlo |
|------|-----------------|
| Post para Teams | Markdown. Máximo 150 palabras. CTA al final. |
| Brief infografía | Título + mensaje principal + 3-4 puntos + descripción visual |
| Script micro-vídeo | Duración, narración, descripción de pantalla, CTA final |
| Brief imagen (Claude Design) | Componente, colores, tipografía, referencia marca Occident |
| Guía técnica | Pasos numerados, máximo 7 pasos por sección |
