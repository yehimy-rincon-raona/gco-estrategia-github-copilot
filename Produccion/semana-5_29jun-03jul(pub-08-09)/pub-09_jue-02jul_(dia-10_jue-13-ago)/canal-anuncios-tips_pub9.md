# Canal Anuncios y Tips — Pub 9 · La fórmula del prompt (parte 2): Contexto y Restricciones
> Canal: Anuncios y Tips Ágiles · Tipo: Tip de uso
> ⏱️ **Producción: Semana 5 (trabajo del 30 jun)** · **Publicación: Semana 5 — jueves 2 jul (fecha a confirmar en la reunión)**
> Estado: ✅ Díptico producido — 2 tarjetas horizontales (`pub-09_s-5_diptico_1-contexto-muestrale-solo-lo-que-importa.jpg` · `pub-09_s-5_diptico_2-restricciones-dile-las-reglas-de-gco.jpg`)
> Fuente: `Configuraciones/estructura_prompt.md` · sesiones de formación · tarjeta `5-S2` · `copilot-instructions.md` del proyecto
> Continúa: `pub-08_mar-30jun_(dia-09_mar-11-ago)/canal-anuncios-tips_pub8.md`

---

## Objetivo de esta publicación

Profundizar en las **dos piezas de la fórmula que más fallan** y que más impacto tienen en GCO: **Contexto** (qué le muestras) y **Restricciones** (qué reglas le impones). La parte 1 dio la fórmula completa; esta aterriza cómo se hacen bien esas dos piezas en el día a día de Mainframe y .NET. El hábito que se quiere instalar: **referenciar con precisión y poner las reglas de GCO en el prompt** (o, mejor, en las instrucciones del equipo).

**Por qué estas dos piezas:** Rol, Tarea y Formato son intuitivas. Contexto y Restricciones son las que separan una respuesta genérica de una que respeta cómo se programa en GCO.

---

## Post listo para Teams

**Asunto:** `📣 Las dos piezas del prompt que más cambian el resultado: Contexto y Restricciones`

---

📣 **Las dos piezas del prompt que más cambian el resultado**

La semana pasada vimos la fórmula completa. Hoy, las dos piezas que marcan la diferencia:

**1. Contexto — muéstrale solo lo que importa.**
Cuanto más acotada la referencia, más enfocada la respuesta (y menos tokens gastas). El orden: `#selection` para lo que tienes seleccionado → el método o la clase → `#file` para un archivo → `@workspace` solo cuando de verdad no sabes dónde está el problema. En COBOL: no le pases 20 programas para un SQLCODE que falla en un módulo.

**2. Restricciones — dile las reglas de GCO.**
Lo que no debe tocar y cómo debe escribir: COBOL entre columnas 7–72, SQL sin `LIKE` ni `DELETE`/`TRUNCATE`, .NET en C# 12 con `async/await`. Si no se lo dices, lo adivina.

👉 Acota el contexto, declara las restricciones. Ahí está la mitad del resultado.

---

## Qué va en el post (texto) y qué va en las piezas gráficas

Esta pub se produjo como un **díptico de dos tarjetas horizontales** (no una sola tarjeta comparativa), con un título común: *Contexto y Restricciones: la mitad del resultado*.

**En el texto del post (Teams):**
- El cuerpo de arriba: Contexto (orden de referencias) + Restricciones (reglas GCO) + CTA.
- **Respuesta:** el atajo de poner las reglas una vez en `.github/copilot-instructions.md` para todo el equipo, con un ejemplo copiable de las reglas reales de GCO.

**En la tarjeta 1 — Contexto:**
- El orden de referencias (`#selection` → método/clase → `#file` → `@workspace`).
- "Menos tokens, mayor enfoque" + el caso COBOL de un error de SQLCODE (referencia el módulo, no 20 programas).

**En la tarjeta 2 — Restricciones:**
- Las reglas de código de GCO: COBOL columnas 7–72, SQL sin `LIKE`/`DELETE`/`TRUNCATE`, .NET C# 12 con `async/await`.
- Cierre de seguridad: nunca credenciales en el código.

> Regla: las tarjetas fijan las dos piezas de un vistazo; el texto aterriza el cómo (el atajo de `copilot-instructions.md` va en el respuesta). No se duplica el contenido.

---

## Ejemplos para el equipo

> El developer reemplaza lo que está entre corchetes.

**Contexto — el orden de menos a más:**
```
#selection                → solo lo que tienes seleccionado
#file <archivo.cbl>        → un archivo concreto
@workspace                 → solo cuando no sabes dónde está el problema
```

**Restricciones — declararlas en el prompt:**
```
Restricciones:
- COBOL: respeta las columnas 7–72, no modifiques copybooks sin listar antes el impacto.
- SQL: sin LIKE, sin DELETE ni TRUNCATE.
- .NET: C# 12, async/await en toda operación de I/O.
- Nunca escribas credenciales, tokens ni passwords directamente en el código.
```

---

## Tono de comunicación

El gancho es de eficiencia y control: "menos reintentos, código que ya respeta tus reglas". Conecta con la parte 1 sin repetirla.

Claves:
- Dos piezas, dos bloques claros — no saturar.
- El orden de referencias es accionable hoy mismo.
- Las restricciones de GCO son las reales del proyecto (no inventadas) — eso da credibilidad.
- Puente natural hacia el tema de `copilot-instructions.md` (Respuesta 1), que es la evolución del hábito.

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Orden de referencias `#selection` → método → `#file` → `@workspace` | Pub 4 · Respuesta 2 (tarjeta `3-S2`) · sesiones G4M/G5M S2 |
| Reglas de código de GCO (SQL, COBOL, .NET, credenciales) | Tarjeta `5-S2` · `copilot-instructions.md` del proyecto |
| `copilot-instructions.md` como contexto permanente de equipo | Tarjeta `5-S2` · Módulo 2 sesiones (`docs.instructions.md`, `plsql.instructions.md`) |
| No modificar copybooks sin listar impacto | Agente `@cobol-expert` · Sesión 3 |

---

## Post de hilo (respuesta)

> El post principal va con el díptico (tarjeta 1 Contexto + tarjeta 2 Restricciones). El respuesta es el remate de valor: convierte las restricciones que se escriben prompt a prompt en una regla permanente para todo el equipo.

---

### Respuesta — Escribe las reglas una vez, no en cada prompt

⚙️ **El atajo: pon las reglas de tu equipo una sola vez.**

¿Cansado de repetir las mismas restricciones cada vez que le pides algo a GitHub Copilot? Esas reglas —las mismas de la tarjeta— pueden vivir en un único archivo del repo: `.github/copilot-instructions.md`.

Un ejemplo con las reglas reales de GCO, listo para adaptar:

```
# Reglas de código — GCO
- COBOL: respeta las columnas 7–72. No modifiques copybooks sin listar antes el impacto.
- SQL: sin LIKE, sin DELETE ni TRUNCATE si no está autorizado.
- .NET: C# 12, async/await en toda operación de I/O.
- Nunca escribas credenciales, tokens ni passwords en el código.
```

Ese archivo entra al contexto en **cada conversación y para todo el equipo**, sin que nadie tenga que reescribirlo. Lo que defines ahí, GitHub Copilot lo aplica siempre.

Es el salto natural de las Restricciones: de declararlas prompt a prompt → a tenerlas puestas para todo el proyecto.

👉 Arranca con 4–5 reglas de tu equipo. En cinco minutos ya está trabajando por ti.

_(Solo texto — el díptico va con el post principal.)_

---

## Archivos de salida

| # | Nombre de archivo | Tipo | Tema | Estado |
|---|-------------------|------|------|--------|
| 1 | `pub-09_s-5_diptico_1-contexto-muestrale-solo-lo-que-importa` | tarjeta horizontal · ~1920×1080 px | Contexto: orden de referencias + menos tokens / mayor enfoque (caso SQLCODE en COBOL) | ✅ Producida |
| 2 | `pub-09_s-5_diptico_2-restricciones-dile-las-reglas-de-gco` | tarjeta horizontal · ~1920×1080 px | Restricciones: estándares de código GCO (COBOL 7–72, SQL, .NET C# 12) + seguridad | ✅ Producida |

> El detalle de `copilot-instructions.md` (el respuesta) no va en las tarjetas: vive en el texto del post.

---

## Brief — Díptico `pub-09_s-5_diptico_1-contexto-muestrale-solo-lo-que-importa` + `pub-09_s-5_diptico_2-restricciones-dile-las-reglas-de-gco` ✅ Producido

**Tipo de pieza:** díptico de dos tarjetas horizontales (~1920×1080 px), mismo título común; cada una destaca en rojo una de las dos piezas.
**Origen del contenido:** orden de referencias (Pub 4) + reglas de código de GCO (tarjeta `5-S2`, `copilot-instructions.md`) + caso SQLCODE en COBOL de las sesiones.

### Elemento común a las dos tarjetas

| Elemento | Texto |
|----------|-------|
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT · PROMPTING |
| Título principal | Contexto y Restricciones: la mitad del resultado |
| Logo | Occident — inferior derecha |

> En la tarjeta 1 se resalta **Contexto** en rojo dentro del título; en la tarjeta 2 se resalta **Restricciones**.

### Tarjeta 1 — Contexto (`pub-09_s-5_diptico_1-contexto-muestrale-solo-lo-que-importa`)

| Elemento | Texto |
|----------|-------|
| Encabezado izquierda | Contexto — muéstrale solo lo que importa |
| Subtítulo | Orden de referencias: |
| Diagrama de flujo | `#selection` → método/clase → `#file` → `@workspace` (solo si no sabes dónde está) |
| Encabezado derecha | Menos tokens, mayor enfoque |
| Texto derecha | Acotar la referencia evita respuestas irrelevantes y reduce el gasto de tokens. En COBOL: un módulo, no 20 programas. |
| Terminal (mainframe) | EXEC SQL / SELECT CUSTOMER_NAME / INTO :WS-CUSTOMER-NAME / FROM CUSTOMER_TABLE / WHERE CUSTOMER_ID = :WS-CUSTOMER-ID / END-EXEC. · SQLCODE: -911 · SQLSTATE: 40001 · ERROR: DEADLOCK OR TIMEOUT OCCURRED · ACTION: ROLLBACK TRANSACTION AND RETRY |
| Cierre | Para un error de SQLCODE, referencia el módulo específico. |

### Tarjeta 2 — Restricciones (`pub-09_s-5_diptico_2-restricciones-dile-las-reglas-de-gco`)

| Elemento | Texto |
|----------|-------|
| Encabezado | Restricciones — dile las reglas de GCO |
| Subtítulo | Estándares de código obligatorios |
| Bloque COBOL | Regla visual de columnas 7–72 sobre un EXEC SQL (SELECT CUSTOMER_NAME … END-EXEC.), con las columnas 7 y 72 marcadas. Rótulo: Columnas 7–72. |
| Regla SQL | No propongas consultas destructivas `DELETE` / `TRUNCATE` ni búsquedas amplias con `LIKE` si no están autorizadas. |
| Bloque .NET | .NET · C# 12 · `async/await` — `public static async Task Main(string[] args) { await ProcessDataAsync(); }` |
| Regla .NET | Usar `async/await` cuando haya operaciones asíncronas reales: API, base de datos, archivos o servicios. |
| Cierre (footer) | Seguridad y limpieza: nunca credenciales en el código. |

### Especificaciones (referencia — el diseño ya está producido)

- **Formato:** dos tarjetas horizontales ~1920×1080 px
- **Fondo:** blanco · paneles `#F5F5F5` con esquinas redondeadas
- **Eyebrow:** rojo `#DC0028` · uppercase
- **Título:** CO Bold · la palabra destacada (Contexto / Restricciones) en rojo `#DC0028`
- **Comandos y código** (`#selection`, `#file`, `@workspace`, `DELETE`, `TRUNCATE`, `LIKE`, `async/await`): monospace con recuadro sutil
- **Logo Occident:** inferior derecha
- **Tipografía:** CO para títulos · GCO Sans para texto corriente · monospace para términos técnicos
