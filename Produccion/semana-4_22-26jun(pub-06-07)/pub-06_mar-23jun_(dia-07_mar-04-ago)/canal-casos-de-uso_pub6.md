# Canal Casos de Uso Reales — Pub 6 · Entender código heredado en COBOL
> Canal: Casos de Uso Reales · Tipo: Caso de uso real
> ⏱️ **Producción: Semana 3 (trabajo del 21 jun)** · **Publicación: Semana 4 — martes 23 junio**
> _El equipo va una semana adelantado en producción: lo que se trabaja en Semana 3 se publica en Semana 4._
> Estado: ✅ **PUBLICADA** — post principal + tríptico (3 tarjetas) + respuesta "Prompts listos para el equipo". Respuesta 2 (análisis de impacto, opcional) pendiente. Info validada contra el brief y contra la captura de Teams (`Produccion/imagenes_teams/04_casos-de-uso-reales/`).
> Fuente: sesiones de formación · `Planeacion/Semana-0_planeacion-del-proyecto/ejemplos_practicos_Github-Copilot.md`

---

## Objetivo de esta publicación

Mostrar, con un caso real de las propias sesiones de GCO, que GitHub Copilot sirve para **entender un programa COBOL heredado antes de tocarlo** — no para reemplazar el criterio del developer, sino para acortar el tiempo de "¿qué hace este código que nadie ha mirado en años?". El hábito que se quiere instalar: **pedir una explicación y un análisis de impacto antes de modificar**.

**Por qué este tema arranca la fase de casos reales:** es el miedo más universal del equipo de mainframe — heredar un programa sin documentación. Si GitHub Copilot ayuda ahí, ayuda donde más duele.

---

## Post listo para copiar en Teams (tenant GCO)

**Asunto:** `Caso de uso #1: entender un COBOL heredado antes de tocarlo`

> Actualizado contra la captura: el título publicado lleva la numeración **"#1"** (el borrador decía "Caso de uso:" sin número, con 🟦). El emoji del post publicado no se distingue con certeza en la captura — `[confirmar con Yehimy si hace falta registrarlo]`.

---

**Caso de uso #1: entender un COBOL heredado antes de tocarlo**

**El escenario:** te llega una tarea de Jira sobre un programa COBOL que nadie ha mirado en años. No hay documentación, y cualquier cambio a ciegas puede romper algo en producción.

**El objetivo:** entender qué hace el programa —y qué se rompe si lo tocas— antes de escribir una sola línea.

**Cómo se resuelve con GitHub Copilot:**

1. Pídele que **explique el código existente** — qué hace cada párrafo, qué `PERFORM` llama a qué.
2. Con eso claro, **planifica la solución** y valídala contra la tarea de Jira antes de escribir nada.
3. Antes de modificar un copybook, pídele el **análisis de impacto**: en qué programas se usa ese campo y qué quedaría afectado — ese trabajo que a mano toma horas.

👉 Entender primero, cambiar después. Antes de tocar un programa heredado, pídele que te lo explique.

---

## Qué va en el post (texto) y qué va en la pieza gráfica

**En el texto del post (Teams):**
- El cuerpo de arriba: escenario → objetivo → los 3 pasos del "cómo se resuelve" → CTA.
- **Respuesta publicada:** "Prompts listos para el equipo" — los 3 prompts para copiar.
- **Respuesta 2 (opcional):** el análisis de impacto del copybook.

**En la pieza gráfica (tríptico · carrusel de 3 paneles):**
- **`pub-06_s-4_triptico_1-te-asignan-un-cobol-que-nadie-ha-mirado-en-anos`:** la pregunta-gancho del escenario.
- **`pub-06_s-4_triptico_2-el-miedo-no-es-entender-el-programa`:** el dolor real — tocar un campo y no saber qué rompes.
- **`pub-06_s-4_triptico_3-pidele-que-lo-explique-y-que-rastree-el-impacto`:** el método (explica → planifica → valida) con el **análisis de impacto del copybook** como remate.
- **No lleva prompts** — esos van en el texto, para que el equipo pueda copiarlos.

> Regla: el tríptico cuenta el caso de un vistazo (pregunta → problema → solución); el texto explica y aporta los prompts copiables. No se duplica el contenido entre ambos.

---

## Prompts listos para el equipo

> ✅ Publicados como respuesta del hilo con el título "Prompts listos para el equipo" (verificado contra la captura). Son la **técnica** demostrada en sesión, lista para copiar. El developer reemplaza lo que está entre corchetes.

**1 · Entender el programa**
```
Explícame qué hace este programa COBOL, párrafo por párrafo.
Dime qué PERFORM llama a qué y cuál es el flujo principal.
No cambies nada todavía — solo quiero entenderlo.
```

**2 · Analizar el impacto de un copybook**
```
En este copybook, si modifico el campo [NOMBRE-CAMPO],
¿en qué programas se usa y qué impacto tendría el cambio?
Lístame los programas afectados.
```

**3 · Planificar la solución (antes de escribir)**
```
Con base en esta tarea de Jira [pega la descripción] y el código
que ya entendiste, propón un plan de cambios paso a paso.
No escribas código aún.
```

---

## Enfoque y tono del caso de uso

Estructura de caso de uso: **escenario reconocible → objetivo claro → cómo se resuelve**. El developer debe verse en la situación, no escuchar un relato de lo que pasó en una sesión. El tono no es "la IA lo hace por ti", sino "te ayuda a entender más rápido para que tú decidas".

Lo que cada pieza debe resaltar:
- **Post (texto):** el escenario (heredar un COBOL sin documentación) y el cambio de orden — entender primero, cambiar después.
- **Tríptico:** el caso de un vistazo — Portada (pregunta) → Problema → Solución (método + análisis de impacto).
- **Respuestas del hilo:** la técnica copiable (prompts) y el dolor real (tocar un campo y no saber qué rompes).

Claves de credibilidad:
- Es un caso real de las sesiones de GCO, no un ejemplo genérico — la trazabilidad va en Procedencia, no en el post.
- No se promete que GitHub Copilot "arregle" el código: el control lo mantiene quien programa.
- "No cambies nada todavía" en los prompts separa entender de generar.

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Flujo "explicar código existente → planificar → validar" | Material Base · Sesión 1 — ejercicio "COBOL Evolutivo" |
| Análisis de impacto de copybook en múltiples programas | Sesión 3 · G3M — "Análisis de impacto en Copybooks COBOL" |
| Refactor de consulta DB2 con `CASE` anidados a COBOL | Sesión 1 · G4M (material de refuerzo, no incluido en el post) |
| Prompts de ejemplo | Técnica demostrada en las sesiones anteriores — redactados como plantilla, sin inventar datos de GCO |

---

## Estado: qué quedó resuelto y qué falta

**✅ Resuelto sin Nibaldo (todo desde las sesiones):**
- Post completo, flujo de 3 pasos, prompts de ejemplo, tríptico y respuesta. La publicación es **autosuficiente** — se puede producir y publicar tal cual.

**🔄 Refuerzo opcional de Nibaldo (suma, no bloquea):**
- Un **caso concreto real**: nombre de un programa/copybook (puede anonimizarse), qué pedía el ticket, qué ganó el developer.
- Una **cifra de tiempo** ("de X horas a Y minutos") si la hubo.
- Confirmar que el ejemplo de impacto de copybook se puede mostrar sin datos sensibles.

> Regla de no inventar: mientras no llegue el dato concreto, el post se mantiene en el flujo genérico documentado — **sin nombres de programa, ticket ni cifras inventadas**.

---

## Posts de hilo

> **Cómo quedó publicado (verificado contra la captura):** el tríptico `pub-06_s-4_triptico_1-te-asignan-un-cobol-que-nadie-ha-mirado-en-anos` / `-problema` / `-solucion` va adjunto al **post principal**. La respuesta publicada en el hilo se titula **"Prompts listos para el equipo"** y contiene los 3 prompts completos de la sección "Prompts listos para el equipo" de este documento (Entender el programa · Analizar el impacto de un copybook · Planificar la solución).
> El texto de la "Respuesta 1" de abajo ("La clave del caso...") **no se publicó** — se conserva como material disponible. La Respuesta 2 (opcional) sigue pendiente.

---

### Respuesta 1 (borrador no publicado) — texto alternativo para acompañar el tríptico

🔍 **La clave del caso: el primer paso no es arreglar, es entender.**

Antes de tocar nada, el movimiento es pedirle a GitHub Copilot que **explique** el programa. Ese cambio de orden —entender primero, cambiar después— es lo que evita romper algo en producción.

Dos preguntas que funcionan en COBOL heredado:
```
Explícame qué hace este programa, párrafo por párrafo,
y qué PERFORM llama a qué.
```
```
Si modifico este campo del copybook,
¿en qué programas impacta?
```

→ Adjuntar: tríptico completo — `pub-06_s-4_triptico_1-te-asignan-un-cobol-que-nadie-ha-mirado-en-anos`, `pub-06_s-4_triptico_2-el-miedo-no-es-entender-el-programa`, `pub-06_s-4_triptico_3-pidele-que-lo-explique-y-que-rastree-el-impacto`

---

### Respuesta 2 — (opcional) profundiza el análisis de impacto

🧩 **El miedo real no es entender el programa. Es tocar un campo y no saber qué rompes.**

Indícale a GitHub Copilot un copybook y unos campos concretos: rastrea en qué programas se usan y documenta el impacto de cambiarlos. Lo que a mano significa abrir decenas de fuentes, aquí es una sola consulta.

No reemplaza tu criterio: te da el mapa para que decidas con seguridad.

---

## Archivos de salida

| # | Nombre de archivo | Tipo | Tema |
|---|-------------------|------|------|
| 1 | `pub-06_s-4_triptico_1-te-asignan-un-cobol-que-nadie-ha-mirado-en-anos` | card-triptico · panel 1/3 · 1080×1080 px | Portada — pregunta-gancho del escenario |
| 2 | `pub-06_s-4_triptico_2-el-miedo-no-es-entender-el-programa` | card-triptico · panel 2/3 · 1080×1080 px | Problema — tocar un campo y no saber qué rompes |
| 3 | `pub-06_s-4_triptico_3-pidele-que-lo-explique-y-que-rastree-el-impacto` | card-triptico · panel 3/3 · 1080×1080 px | Solución — método + análisis de impacto del copybook |

> Los **prompts** no van en la pieza gráfica: viven en el texto del post (sección "Prompts listos para el equipo" y Respuesta 1) para que el equipo pueda copiarlos.

---

## Brief — tríptico Pub 6 (`07-S3-Card_pub6-*`) · card-triptico · 3 paneles (carrusel)

**Tipo de pieza:** `card-triptico` — 3 paneles cuadrados (1080×1080) en carrusel: **Portada → Problema → Solución**
**Origen del contenido:** ejercicio "COBOL Evolutivo" (Sesión 1) + "Análisis de impacto en Copybooks" (Sesión 3 · G3M)

### Panel 1 — Portada · `pub-06_s-4_triptico_1-te-asignan-un-cobol-que-nadie-ha-mirado-en-anos` · `1/3`

| Elemento | Texto |
|----------|-------|
| Logo | Occident — isótipo superior izquierda |
| Pill fase | Fase 3 \| Multi-entorno — superior derecha · contorno gris · texto negro |
| Eyebrow / overline | CASO DE USO REAL · COBOL |
| Headline (pregunta) | Te asignan un COBOL que nadie ha mirado en años. ¿Por dónde empiezas? |
| Subtext | Sin documentación, cualquier cambio a ciegas puede romper algo en producción. |
| Numeración | `1/3` — chip esquina inferior derecha |

### Panel 2 — El problema · `pub-06_s-4_triptico_2-el-miedo-no-es-entender-el-programa` · `2/3`

| Elemento | Texto |
|----------|-------|
| Eyebrow | EL PROBLEMA |
| Headline (afirmación) | El miedo no es entender el programa. Es tocar un campo y no saber qué rompes. |
| Copy | Un mismo copybook puede estar usado en decenas de programas. Cambiar un campo sin saber dónde impacta es jugar a la ruleta con producción. |
| Visual del problema | Un `copybook` en el centro conectado a muchos nodos "programa" dispersos — la maraña de dependencias |
| Dato secundario | Rastrearlo a mano: horas abriendo fuentes una por una. |
| Numeración | `2/3` |

### Panel 3 — La solución · `pub-06_s-4_triptico_3-pidele-que-lo-explique-y-que-rastree-el-impacto` · `3/3`

| Elemento | Texto |
|----------|-------|
| Eyebrow | LA SOLUCIÓN |
| Headline | Pídele que lo explique y que rastree el impacto — antes de tocar nada. |
| Fila 1 — Explica | Qué hace cada párrafo, qué `PERFORM` llama a qué. |
| Fila 2 — Analiza el impacto | Indica el `copybook` y un campo → GitHub Copilot lista en qué programas se usa. |
| Fila 3 — Planifica y valida | Define la solución contra la tarea de Jira antes de escribir. |
| Highlight (remate) | De horas de búsqueda a una sola consulta. |
| CTA | 👆 Entender primero, cambiar después |
| Numeración | `3/3` |

### Especificaciones Figma (`card-triptico`)

- **Formato:** 1080×1080 px por panel (3 paneles · carrusel Teams)
- **Fondo:** blanco — sin fondos negros ni rojos
- **Numeración:** chip pequeño esquina inferior derecha (`1/3`, `2/3`, `3/3`)
- **Eyebrow:** rojo `#DC0028` · uppercase · GCO Sans pequeño
- **Headline:** negro · CO Bold · display
- **Copy / texto running:** gris oscuro · GCO Sans regular
- **Filas de solución (panel 3):** título de paso en CO Bold negro + texto GCO Sans gris; numeración/viñeta en rojo `#DC0028`
- **Highlight ("de horas a una consulta"):** destacado con rojo `#DC0028` como acento
- **Chips** (`PERFORM`, `copybook`, "programa"): monospace · caja con borde gris · sin relleno de color
- **Visual panel 2:** diagrama copybook → múltiples programas, nodos en gris con el `copybook` acentuado en rojo
- **CTA (panel 3):** GCO Sans bold · negro · con el 👆 como único ícono
- **Logo Occident:** isótipo presente — superior izquierda en portada, inferior derecha en paneles 2 y 3
- **Tipografía:** CO para headlines · GCO Sans para texto running · monospace para términos técnicos
- **Marca:** rojo `#DC0028` solo como acento (eyebrow, numeración, highlight, CTA)
- **Tipografía:** CO para títulos · GCO Sans para texto corriente · monospace para términos técnicos
- **Marca:** sin fondos negros ni rojos — rojo `#DC0028` solo como acento en eyebrow, numeración, etiqueta bonus y CTA
