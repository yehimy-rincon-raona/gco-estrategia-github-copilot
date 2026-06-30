# Canal Casos de Uso Reales — Pub 7 · Bug fixing con GitHub Copilot
> Canal: Casos de Uso Reales · Tipo: Caso de uso real
> ⏱️ **Producción: Semana 3 (trabajo del 21 jun)** · **Publicación: Semana 4 — jueves 25 junio**
> _El equipo va una semana adelantado en producción: lo que se trabaja en Semana 3 se publica en Semana 4._
> Estado: ✅ Brief desarrollado y publicable como "bug fixing con contexto de negocio" · confirmar con Nibaldo si se etiqueta como **.NET**
> Fuente: sesiones de formación · `Planeacion/Semana-0_planeacion-del-proyecto/ejemplos_practicos_Github-Copilot.md`

---

## Objetivo de esta publicación

Mostrar, con un caso real de las sesiones, cómo GitHub Copilot ayuda a **diagnosticar un bug** cuando el problema no está solo en el código, sino en la **regla de negocio** detrás. El hábito que se quiere instalar: **darle a GitHub Copilot el contexto completo** (ticket + regla de negocio + código) en lugar de solo el fragmento que falla.

**Por qué este caso:** es el complemento natural de Pub 6. Pub 6 enseña a *entender* código; Pub 7 enseña a *arreglarlo* cuando la causa está en el negocio — el tipo de bug más difícil de cazar en una aseguradora.

---

## Post listo para Teams

**Asunto:** `🟥 Caso de uso: un bug que no estaba donde parecía`

---

🟥 **Caso de uso: un bug que no estaba donde parecía**

**El escenario:** una prima queda en negativo al aplicar un descuento del 10%. El error se ve en el código, pero la causa real está en la **regla de negocio**.

**El objetivo:** diagnosticar la causa de fondo, no parchear el síntoma.

**Cómo se resuelve con GitHub Copilot — dándole el contexto completo, no solo el bloque que falla:**

1. **El ticket de Jira** — el síntoma y cómo reproducirlo.
2. **La regla de negocio** — cómo debía calcularse el descuento (Confluence).
3. **El código del repositorio** — para cruzar la regla con la implementación real.
4. **La corrección** — propuesta con el negocio ya entendido, no a ciegas.

👉 Cuando un bug no es solo de código, dale el negocio completo: ticket + documentación + repositorio.

---

## Qué va en el post (texto) y qué va en la pieza gráfica

**En el texto del post (Teams):**
- El cuerpo de arriba: escenario → objetivo → los 4 pasos del "cómo se resuelve" → CTA.
- **Reply 1:** la clave del caso (las tres capas de contexto) + 1 prompt para empezar.
- **Reply 2 (opcional):** el puente con MCP de Atlassian.

**En la pieza gráfica (tríptico · carrusel de 3 paneles):**
- **`S3-Card_pub7-portada`:** la pregunta-gancho — ¿dónde está el error?
- **`S3-Card_pub7-problema`:** buscar el bug solo en la línea que falla es buscar donde no está.
- **`S3-Card_pub7-solucion`:** el contexto completo en 4 capas — Ticket → Negocio → Código → Solución.
- **No lleva prompts** — esos van en el texto, para que el equipo pueda copiarlos.

> Regla: el tríptico cuenta el caso de un vistazo (pregunta → problema → solución); el texto explica y aporta los prompts copiables. No se duplica el contenido entre ambos.

---

## Prompts listos para el equipo

> La técnica demostrada en sesión, lista para copiar. El developer reemplaza lo que está entre corchetes.

**1 · Diagnóstico con contexto completo**
```
Aquí está el ticket [pega la descripción], la regla de negocio
documentada [pega o enlaza Confluence] y este código.
Dime por qué el resultado no coincide con lo esperado.
No cambies nada aún — primero el diagnóstico.
```

**2 · Arrancar desde el error del log** *(técnica de refuerzo)*
```
Este es el error que aparece en los logs [pega el error].
Con este código, ayúdame a localizar dónde se origina y por qué.
```

**3 · Proponer la corrección**
```
Ya entendiste la causa. Propón la corrección mínima que respete
la regla de negocio, y dime qué probar para confirmar que el
resultado ya no queda en negativo.
```

---

## Enfoque y tono del caso de uso

Estructura de caso de uso: **escenario reconocible → objetivo claro → cómo se resuelve**. El gancho es un bug con consecuencia clara (una prima en negativo — algo que en una aseguradora no puede pasar). El tono es "mira cómo se piensa el problema", no "la IA lo arregla sola".

Lo que cada pieza debe resaltar:
- **Post (texto):** el escenario (el error se ve en el código, pero la causa está en el negocio) y el objetivo (diagnosticar la causa de fondo, no parchear el síntoma).
- **Tríptico:** el caso de un vistazo — Portada (pregunta) → Problema → Solución (contexto completo en 4 capas: Ticket → Negocio → Código → Solución).
- **Replies:** las tres capas de contexto y el puente con MCP.

Claves de credibilidad:
- Conecta con el negocio asegurador de GCO (primas, descuentos) — no es un ejemplo de juguete.
- El mensaje transferible es el **contexto completo**: ticket + Confluence + código.
- "No cambies nada aún — primero el diagnóstico" separa entender de arreglar.

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Caso "prima en negativo al aplicar descuento del 10%" | Sesión 3 · G4M — "Conexión a Jira y Confluence vía MCP para Bug Fixing" |
| Flujo: leer ticket (MCP Jira) → regla de negocio (Confluence) → código → solución | Sesión 3 · G4M — agente `@analyst` |
| Técnica de pegar el error de los logs de Elastic al chat | Sesión 1 — ejercicio "COBOL Bug Fixing" |
| Presencia de .NET en las sesiones | Sesión 2 · G5M — "Creación de capa de datos en .NET" |
| Prompts de ejemplo | Técnica demostrada en las sesiones — redactados como plantilla, sin inventar datos de GCO |

---

## Estado: qué quedó resuelto y qué falta

**✅ Resuelto sin Nibaldo (todo desde las sesiones):**
- Post, flujo de 4 pasos, prompts, tríptico y reply. **La publicación es autosuficiente** si se titula como "bug fixing con contexto de negocio" (sin atar a un lenguaje). El post no menciona ".NET" en el cuerpo, así que ya es publicable tal cual.

**🔄 Una sola confirmación de Nibaldo (define el encuadre, no bloquea el contenido):**
- ¿El caso de la "prima negativa" fue en **.NET**?
  - **Sí** → se añade ".NET" al eyebrow y al tema en el TABLERO.
  - **No** → se publica como "bug fixing con contexto de negocio" (como está), o Nibaldo aporta un caso .NET real y se adapta.

> Regla de no inventar: **no se afirma el lenguaje** del caso hasta que Nibaldo lo confirme. Nada de nombres de repo, ticket o página de Confluence inventados. Pregunta puntual registrada en `Seguimiento/resolucion-propia_reunion-23jun2026.md`.

---

## Posts de hilo

> El post principal va con el tríptico `S3-Card_pub7-portada` / `-problema` / `-solucion` (carrusel de 3 paneles: pregunta → problema → solución). Reply 1 aterriza la técnica transferible.

---

### Reply 1 — acompaña el tríptico `S3-Card_pub7` (portada · problema · solución)

🧩 **La clave del caso: contexto antes que código.**

La mayoría de los bugs de negocio no se entienden mirando solo la línea que falla. La diferencia está en darle a GitHub Copilot las **tres capas**: qué se reportó (Jira), cómo debía comportarse (Confluence) y cómo está implementado (repositorio).

Una pregunta para empezar:
```
Aquí están el ticket y la regla de negocio documentada.
Revisa este código y dime por qué el resultado no coincide
con lo esperado.
```

→ Adjuntar: tríptico completo — `S3-Card_pub7-portada`, `S3-Card_pub7-problema`, `S3-Card_pub7-solucion`

---

### Reply 2 — (opcional) el puente con MCP

🔌 **¿Cómo accede GitHub Copilot al ticket y a Confluence sin que copies y pegues todo?**

Con el **MCP de Atlassian**: un puente que deja a GitHub Copilot leer el ticket de Jira y la página de Confluence directamente. Así el contexto entra completo, sin perder detalle en el copia-pega.

Es un paso más avanzado — pero muestra hacia dónde va el flujo: del prompt manual a la herramienta conectada.

---

## Archivos de salida

| # | Nombre de archivo | Tipo | Tema |
|---|-------------------|------|------|
| 1 | `S3-Card_pub7-portada` | card-triptico · panel 1/3 · 1080×1080 px | Portada — ¿dónde está el error? |
| 2 | `S3-Card_pub7-problema` | card-triptico · panel 2/3 · 1080×1080 px | Problema — buscar donde no está |
| 3 | `S3-Card_pub7-solucion` | card-triptico · panel 3/3 · 1080×1080 px | Solución — contexto completo en 4 capas |

> Los **prompts** no van en la pieza gráfica: viven en el texto del post (sección "Prompts listos para el equipo" y Reply 1) para que el equipo pueda copiarlos.

---

## Brief — tríptico Pub 7 (`S3-Card_pub7-*`) · card-triptico · 3 paneles (carrusel)

**Tipo de pieza:** `card-triptico` — 3 paneles cuadrados (1080×1080) en carrusel: **Portada → Problema → Solución**
**Origen del contenido:** "Conexión a Jira y Confluence vía MCP para Bug Fixing" (Sesión 3 · G4M)

### Panel 1 — Portada · `S3-Card_pub7-portada` · `1/3`

| Elemento | Texto |
|----------|-------|
| Logo | Occident — isótipo superior izquierda |
| Pill fase | Fase 3 \| Multi-entorno — superior derecha · contorno gris · texto negro |
| Eyebrow / overline | CASO DE USO REAL · BUG FIXING |
| Headline (pregunta) | Una prima queda en negativo al aplicar un descuento. ¿Dónde está el error? |
| Subtext | Se ve en el código, pero la causa real está en la regla de negocio. |
| Numeración | `1/3` — chip esquina inferior derecha |

### Panel 2 — El problema · `S3-Card_pub7-problema` · `2/3`

| Elemento | Texto |
|----------|-------|
| Eyebrow | EL PROBLEMA |
| Headline (afirmación) | Buscar el bug solo en la línea que falla es buscar donde no está. |
| Copy | El síntoma está en el código, pero el cálculo correcto del descuento vive en la documentación de negocio. Sin ese contexto, cualquier arreglo es una suposición. |
| Visual del problema | El bloque de `código` aislado frente a las tres capas que faltan: Jira + Confluence + repositorio |
| Dato secundario | Parchear el síntoma deja el problema vivo. |
| Numeración | `2/3` |

### Panel 3 — La solución · `S3-Card_pub7-solucion` · `3/3`

| Elemento | Texto |
|----------|-------|
| Eyebrow | LA SOLUCIÓN |
| Headline | Dale el contexto completo: ticket + regla de negocio + código. |
| Fila 1 — Ticket | El síntoma y cómo reproducirlo (Jira). |
| Fila 2 — Negocio | Cómo debía calcularse el descuento (Confluence). |
| Fila 3 — Código | Cruza la regla con la implementación real del repositorio. |
| Fila 4 — Solución | Corrección con el negocio ya entendido, no a ciegas. |
| Highlight (remate) | Diagnóstico sobre contexto real, no sobre una suposición. |
| CTA | 👆 Cuando un bug no es solo de código, dale el negocio completo |
| Numeración | `3/3` |

### Especificaciones Figma (`card-triptico`)

- **Formato:** 1080×1080 px por panel (3 paneles · carrusel Teams)
- **Fondo:** blanco — sin fondos negros ni rojos
- **Numeración:** chip pequeño esquina inferior derecha (`1/3`, `2/3`, `3/3`)
- **Eyebrow:** rojo `#DC0028` · uppercase · GCO Sans pequeño
- **Headline:** negro · CO Bold · display
- **Copy / texto running:** gris oscuro · GCO Sans regular
- **Filas de solución (panel 3):** título de capa (Ticket/Negocio/Código/Solución) en CO Bold negro + texto GCO Sans gris; numeración/viñeta en rojo `#DC0028`
- **Highlight ("diagnóstico sobre contexto real"):** destacado con rojo `#DC0028` como acento
- **Chips** (`código`, Jira, Confluence, repositorio): etiqueta en caja con borde gris · sin relleno de color
- **Visual panel 2:** bloque de código aislado contrastado con las tres capas de contexto que faltan
- **CTA (panel 3):** GCO Sans bold · negro · con el 👆 como único ícono
- **Logo Occident:** isótipo presente — superior izquierda en portada, inferior derecha en paneles 2 y 3
- **Tipografía:** CO para headlines · GCO Sans para texto running · monospace para términos técnicos
- **Marca:** rojo `#DC0028` solo como acento (eyebrow, numeración, highlight, CTA)
- **Nota de producción:** el eyebrow dice "BUG FIXING" (sin lenguaje). Si Nibaldo confirma que el caso fue en .NET, cambiar a "BUG FIXING · .NET" antes de producir.
- **Nota de producción:** el eyebrow dice "BUG FIXING" (sin lenguaje). Si Nibaldo confirma que el caso fue en .NET, cambiar a "BUG FIXING · .NET" antes de producir.
