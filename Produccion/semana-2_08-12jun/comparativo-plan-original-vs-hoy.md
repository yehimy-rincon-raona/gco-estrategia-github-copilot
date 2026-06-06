# Comparativo — Plan original Semana 2 vs contenido producido
> Actualizado: 5 junio 2026 · Para presentar a Nibaldo y Guillermo
> Semana en curso: Semana 2 (8–12 jun)

---

## Vista global — numeración definitiva

| # | Fecha | Canal | Tema | Origen | Estado |
|---|-------|-------|------|--------|--------|
| Pub 3 | Mar 9 jun · **Semana 2** | Primeros Pasos con GitHub Copilot | Memoria y ventana de contexto — el cajón | Material Nibaldo · producido | ✅ Listo · pendiente aprobación |
| Pub 4 | Mar 9 jun · **Semana 2** | Anuncios y Tips Ágiles | Elige el modelo según la tarea (estándar 0x vs premium 1x/3x) | Material Nibaldo · producido | ✅ Listo · pendiente aprobación |
| Pub 5 | Jue 11 jun · **Semana 2** | Primeros Pasos con GitHub Copilot | Referencias de contexto — deja de copiar y pegar | Material Nibaldo · producido | ✅ Listo · pendiente aprobación |
| Pub 6 | Por definir | Casos de Uso Reales | Entender código heredado en 30 segundos (COBOL + `#selection`) | Plan original | 🔄 Pendiente acceso Teams GCO |
| Pub 7 | Por definir · **Semana 3+** | Foro de Ayuda y AMA | Sesión AMA con Nibaldo | Plan original | ⚠️ Bloqueado — falta fecha confirmar con Nibaldo y Guillermo |
| Pub 8+ | Por definir | Varios | Ideas de la tabla "sobre la mesa" | Propuestas nuevas | 💡 Pendiente decisión equipo |

---

## Lo que hay — Posts producidos (material Nibaldo)

### Pub 3 — Martes 9 junio · Canal Primeros Pasos
> Archivo: `pub-03_mar-09jun/canal-primeros-pasos_pub3.md`

**Tema:** Memoria y ventana de contexto — el cajón
**Concepto:** GitHub Copilot no tiene memoria permanente — tiene un cajón que se llena. Cuando se satura, empieza a mezclar cosas o inventar. La solución está en controlar qué metes y abrir hilos nuevos.
**Gancho para developers de GCO:** "¿Les ha pasado que GitHub Copilot se pone tonto a mitad de una tarea? Esto explica por qué."
**Metáfora clave de Nibaldo:** el cajón

---

### Pub 4 — Martes 9 junio · Canal Anuncios y Tips Ágiles
> Archivo: `pub-04_mar-09jun/canal-anuncios-tips_pub4.md`

**Tema:** Elige el modelo según la tarea
**Concepto:** Los modelos premium (1x, 3x) consumen la bolsa de tokens. Los estándar (0x) no. Usar siempre el premium puede dejar sin tokens en días.
**Gancho:** "Si siempre usas el mismo modelo en GitHub Copilot, puede que estés gastando más de lo necesario."
**Dato clave:** la bolsa se renueva el 1 de cada mes

---

### Pub 5 — Jueves 11 junio · Canal Primeros Pasos
> Archivo: `pub-05_jue-11jun/canal-primeros-pasos_pub5.md`

**Tema:** Referencias de contexto — deja de copiar y pegar
**Concepto:** GitHub Copilot puede leer directamente desde donde está el código. No necesita que copies y pegues. Cuatro referencias de más a menos acotado: `#selection` → método/clase → `#file` → `@workspace`.
**Gancho:** "¿Copias y pegas código en el chat? Hay una forma más precisa."
**Ejemplo COBOL:** `#selection` + SQLCODE -803 vs "revisa toda la solución"

---

## Lo que sigue — desplazado del plan original o sin fecha

### Pub 6 — Por definir · Canal Casos de Uso Reales
> Archivo: pendiente de crear

**Tema:** Entender código heredado en 30 segundos
**Concepto:** Un developer selecciona un bloque de COBOL que nadie ha tocado en años y le pregunta a GitHub Copilot qué hace. Respuesta en segundos, en español, sin tecnicismos.
**Por qué es el primer caso de uso:** No requiere generar código nuevo — solo entender lo que ya existe. Es el caso de uso más universal y menos invasivo.

### Pub 7 — Por definir · Canal Foro de Ayuda y AMA
> Bloqueado hasta confirmar fecha con Nibaldo y Guillermo

**Tema:** Sesión AMA en vivo con Nibaldo

---

## Ideas sobre la mesa — candidatas a Pub 8 en adelante

> Archivo de referencia: `propuestas-nibaldo/ideas-sobre-la-mesa.md`

| Idea | Tipo | Por qué es interesante | Cuándo proponer |
|------|------|----------------------|-----------------|
| **Tabla directa en Teams** | Formato nuevo | Tables en Teams sin necesitar infografía — más rápido de publicar | Cuando haya baja en ritmo de producción |
| **"Síntoma → Causa → Solución"** | Formato nuevo | Entra por un problema que el developer ya vivió — más enganche que tips positivos | Semana 4 o 5 |
| **"Mito / Realidad"** | Formato nuevo | Ataca la resistencia activa sin confrontación. Tres mitos validados con material de Nibaldo | Semana 4 |
| **Chuleta pegable** | Formato nuevo | Post fijado en canal · referencia permanente · no necesita diseño | Semana 3 si hay tiempo |
| **Mini-saga (3 posts conectados)** | Formato nuevo | Genera retorno al canal — cada post referencia el anterior | Semana 4+ |
| **Indicador visual de contexto (% ocupado)** | Tema nuevo | Dato muy concreto de Nibaldo: "168k disponibles, 23k usados, 14%" | Semana 3 o 4 |
| **"No es que GitHub Copilot falle — tiene el documento equivocado"** | Tema nuevo | Ataca la resistencia directamente. Alta urgencia para adopción | Semana 3 |
| **Nivel de razonamiento: low/medium/high/extra high** | Tema nuevo | Complementa el post de modelos ya creado | Semana 4 |
| **No puedes saber el coste antes de ejecutar el prompt** | Tema nuevo | Manejo de expectativas — baja la fricción de "¿cuánto gasto?" | Semana 3 o 4 |
| **Prompt files reutilizables** | Tema nuevo · Fase 3 | Reutilizar instrucciones sin escribir lo mismo 10 veces | Semana 5+ |

---

## Preguntas para llevar a la reunión con Nibaldo y Guillermo

1. **¿El AMA sigue en pie para Semana 3?** Si no hay fecha confirmada, se queda como Pub 7 bloqueada y no toca el calendario de las semanas próximas.
2. **¿Pub 6 (COBOL) va en Semana 3 o posterior?** El acceso al Teams GCO es el bloqueante — depende de Catalana Occidente.
3. **Confirmación técnica antes de publicar Pub 5:** las referencias `#selection`, `#file` y `@workspace` — ¿están disponibles en Visual Studio con ese mismo nombre? Si no, el CTA no es accionable para la mayoría del equipo.
4. **¿Alguna idea "sobre la mesa" entra en Semana 3?** El formato "Síntoma → Causa → Solución" y la chuleta pegable son los más rápidos de producir.