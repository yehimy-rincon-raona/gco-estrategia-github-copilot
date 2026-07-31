# Ideas sobre la mesa — Nuevos formatos y temas pendientes
> Para discutir con Nibaldo y Guillermo
> Fuente: sesiones de formación · análisis de resúmenes Nibaldo
> Estado: propuestas sin desarrollar · sin fecha asignada

---

## Por qué este documento existe

Los tres posts de Semana 2 cubren lo esencial del material de Nibaldo. Pero en los resúmenes de sesión hay contenido que no cabe en los formatos actuales (tip de 3 puntos + infografía) y que podría funcionar en formatos distintos. Este documento los pone sobre la mesa para decidir qué vale la pena publicar, cuándo y en qué forma.

---

## A. Nuevos formatos que no hemos usado

### A1. Tabla directa en Teams
Teams renderiza markdown. Algunas tablas del material de Nibaldo pueden publicarse directamente como mensaje sin necesitar infografía. Publicación más rápida, formato diferente visualmente.

**Ejemplo candidato — "Tarea → Modelo sugerido":**

| Tarea | Modelo |
|-------|--------|
| Explicar un error simple | Estándar |
| Documentar un método | Estándar |
| Resumir código | Estándar |
| Refactor delicado en COBOL | Premium |
| Analizar bug con varios archivos | Premium |
| SQLCODE difícil en DB2 | Premium |

**Otros candidatos:**
- Tabla de referencias de contexto (selección / archivo / clase / método / workspace)
- Tabla de reglas del cajón (qué entra / qué hacer)
- Tabla de síntomas y soluciones

**Pregunta para Nibaldo/Guillermo:** ¿Los developers de GCO leen mensajes con tabla en Teams o prefieren imagen?

---

### A2. Formato "Síntoma → Causa → Solución"
En vez de tips positivos, entrar por un problema que el developer ya vivió. Tiene más gancho que "haz esto" — el developer lo reconoce como algo que le pasó.

**Tres variaciones con material validado:**

| Síntoma | Causa real | Solución |
|---------|-----------|----------|
| "GitHub Copilot inventó una tabla que no existe" | Contexto equivocado — archivo activo no correspondía | Quita el documento activo; referencia el correcto |
| "GitHub Copilot se pone a responder cosas raras a mitad de la tarea" | Ventana de contexto saturada | Abre un hilo nuevo |
| "Me quedé sin tokens a mitad de semana" | Modelo premium para todas las tareas | Reserva premium para tareas complejas |

**Formato del post:**
> ❓ "GitHub Copilot inventó una tabla que no existe"
> No es un fallo del modelo. Es que tenía el documento equivocado cargado como contexto.
> Lo que puedes hacer: [solución en 1 línea]

---

### A3. Formato "Mito / Realidad"
Ataca directamente la resistencia activa. No es confrontación — es corrección sin condescendencia.

**Tres mitos con material validado de Nibaldo:**

| Mito | Realidad |
|------|---------|
| "GitHub Copilot no sirve, me da respuestas malas" | GitHub Copilot estaba referenciando el documento activo equivocado. Antes de culpar la herramienta: revisa qué tiene cargado |
| "GitHub Copilot se pone tonto con tareas largas" | La ventana de contexto se saturó. No es fallo del modelo — es gestión del cajón |
| "El modelo premium siempre es mejor" | Depende de la tarea. Para documentar o explicar un error simple, el estándar es suficiente |

---

### A4. Chuleta pegable (post fijado en Teams)
Un post diseñado para quedar fijado en el canal, no para leerse una vez y olvidarse. Sirve de referencia permanente.

**Propuesta de contenido:**
> 📌 Antes de preguntarle a GitHub Copilot — 3 cosas que revisar
> 1. ¿Qué documento activo tiene cargado? ¿Corresponde a tu pregunta?
> 2. ¿El hilo ya está largo? Si empieza a responder raro → abre uno nuevo.
> 3. ¿Qué modelo tienes seleccionado? Tarea simple = estándar. Tarea compleja = premium.

**Pregunta para Guillermo:** ¿Tienen permiso o costumbre de fijar mensajes en los canales del Teams de GCO?

---

### A5. Mini-saga (serie de 3 posts conectados)
En vez de publicaciones independientes, una cadena publicada en días seguidos sobre el mismo tema. Cada post hace referencia al anterior — genera retorno al canal.

**Ejemplo: la semana del cajón**
- Martes: *¿Sabías que GitHub Copilot no tiene memoria permanente? Tiene un cajón.*
- Miércoles: *Ayer hablamos del cajón. Hoy: qué pasa cuando se llena y cómo evitarlo.*
- Jueves: *¿Ya probaste las referencias? Aquí la jerarquía que te ahorra más contexto.*

**Pregunta para el equipo:** ¿El canal de Teams de GCO tiene suficiente actividad para sostener una saga de 3 días?

---

## B. Temas con material sólido que no han salido aún

Todos están en los resúmenes de Nibaldo pero no están planificados en el calendario actual.

| Tema | Dónde está el material | Fase recomendada | Nota |
|------|----------------------|-----------------|------|
| El indicador visual de contexto (% ocupado en la interfaz) | `resumen_memoria` §9 | Fase 2 | Dato muy concreto — 168k disponibles, 23k usados, 14%. Nibaldo no confirma si Visual Studio lo muestra igual |
| "No es que GitHub Copilot falle — es que tiene el documento equivocado" | `resumen_memoria` §15 | Fase 2 · alta urgencia | Ataca la resistencia directamente. Muy aplicable a GCO |
| El nivel de razonamiento: low, medium, high, extra high | `resumen_tokens` §6 | Fase 2 | Complementa el post de modelos. Se muestra en terminal; confirmar si aplica en Visual Studio |
| No puedes saber el coste de un prompt antes de ejecutarlo | `resumen_tokens` §15 | Fase 2 · manejo de expectativas | Útil para bajar la fricción de "no sé cuánto voy a gastar" |
| Prompt files como instrucciones reutilizables | `resumen_tokens` §18 | Fase 3 | No lo presenta como ahorro directo de tokens — matizar antes de publicar |
| Estructura de agente + subagente + Skill para COBOL/.NET | `resumen_skills` §3-4 | Fase 4 | Se puede mencionar como "lo que viene" — no desarrollar aún |
| models.dev para comparar modelos y coste por millón de tokens | `resumen_tokens` §14 | Fase 2-3 | Nibaldo lo usa en clase — puede ser un recurso recomendado |

---

## C. Preguntas abiertas antes de decidir

1. **¿Nibaldo quiere revisar contenido nuevo antes de publicar?** Las propuestas A2 (síntoma→solución) y A3 (mito/realidad) tocan temas delicados — conviene que él valide el encuadre.
2. **¿Guillermo tiene señal de cuánto están leyendo los developers?** Si hay baja lectura, puede que convenga subir la provocación (mito/realidad) para generar reacción.
3. **¿Hay canal específico donde funcione mejor la chuleta pegable?** Primeros Pasos parece el candidato.