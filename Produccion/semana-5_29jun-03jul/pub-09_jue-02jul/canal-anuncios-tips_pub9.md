# Canal Anuncios y Tips — Pub 9 · La fórmula del prompt (parte 2): Contexto y Restricciones
> Canal: Anuncios y Tips Ágiles · Tipo: Tip de uso
> ⏱️ **Producción: Semana 5 (trabajo del 30 jun)** · **Publicación: Semana 5 — jueves 2 jul (fecha a confirmar en la reunión)**
> Estado: 📝 Brief listo — presentado en la reunión del 30 jun como plan de la semana
> Fuente: `Configuraciones/estructura_prompt.md` · sesiones de formación · card `5-S2` · `copilot-instructions.md` del proyecto
> Continúa: `pub-08_mar-30jun/canal-anuncios-tips_pub8.md`

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

## Qué va en el post (texto) y qué va en la pieza gráfica

**En el texto del post (Teams):**
- El cuerpo de arriba: Contexto (orden de referencias) + Restricciones (reglas GCO) + CTA.
- **Reply 1:** el truco de pasar las restricciones a `copilot-instructions.md` para no repetirlas en cada prompt.
- **Reply 2 (opcional):** ejemplo de restricciones bien puestas en un prompt .NET.

**En la pieza gráfica (card comparativa o de dos columnas):**
- Columna A: **Contexto** → el orden de referencias (`#selection` → método → `#file` → `@workspace`).
- Columna B: **Restricciones** → las reglas de código de GCO.
- **No lleva el detalle de instructions.md** — eso va en el texto.

> Regla: la gráfica fija las dos piezas de un vistazo; el texto aterriza el cómo. No se duplica el contenido.

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
- Puente natural hacia el tema de `copilot-instructions.md` (Reply 1), que es la evolución del hábito.

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Orden de referencias `#selection` → método → `#file` → `@workspace` | Pub 4 · Reply 2 (card `3-S2`) · sesiones G4M/G5M S2 |
| Reglas de código de GCO (SQL, COBOL, .NET, credenciales) | Card `5-S2` · `copilot-instructions.md` del proyecto |
| `copilot-instructions.md` como contexto permanente de equipo | Card `5-S2` · Módulo 2 sesiones (`docs.instructions.md`, `plsql.instructions.md`) |
| No modificar copybooks sin listar impacto | Agente `@cobol-expert` · Sesión 3 |

---

## Posts de hilo

> El post principal va con la card comparativa Contexto / Restricciones. Reply 1 abre el tema de instructions.md. Reply 2 (opcional) da el ejemplo .NET.

---

### Reply 1 — el atajo: no repitas las reglas en cada prompt

⚙️ **¿Cansado de escribir las mismas restricciones una y otra vez?**

Las reglas que tu equipo repite en cada prompt — columnas 7–72, SQL sin `LIKE`, .NET en C# 12 — pueden vivir en un solo archivo: `.github/copilot-instructions.md`.

Ese archivo entra al contexto en cada conversación, para todo el equipo, sin que nadie tenga que escribirlo. Lo que defines ahí, GitHub Copilot lo aplica siempre.

Es el siguiente paso natural de las Restricciones: de escribirlas en cada prompt → a tenerlas puestas para todo el proyecto.

→ Adjuntar: card comparativa Contexto / Restricciones

---

### Reply 2 — (opcional) restricciones bien puestas en .NET

🧩 **Mismo encargo, con y sin restricciones.**

Sin restricciones → "créame el método para insertar un usuario en la tabla tramitación" te devuelve algo que compila, pero quizá sin `async/await` y con SQL que no pasa tus reglas.

Con restricciones → le dices "C# 12, `async/await` en toda I/O, sin `DELETE` ni `TRUNCATE`, sin credenciales en el código". El resultado ya respeta cómo programa GCO.

La restricción no limita a GitHub Copilot: lo alinea con tu proyecto.

---

## Archivos de salida

| # | Nombre de archivo | Tipo | Tema |
|---|-------------------|------|------|
| 1 | `S5-Card_pub9-contexto-restricciones` | card-comparativa · 1080×1350 px (formato a confirmar con Yehimy) | Dos columnas: Contexto (orden de referencias) vs. Restricciones (reglas GCO) |

> El detalle de `copilot-instructions.md` y el ejemplo .NET no van en la pieza gráfica: viven en el texto del post (Reply 1 y Reply 2).

---

## Brief — `S5-Card_pub9-contexto-restricciones` · card-comparativa

**Tipo de pieza:** card-comparativa — panel único con dos columnas
**Origen del contenido:** orden de referencias (Pub 4) + reglas de código de GCO (card `5-S2`, `copilot-instructions.md`)

### Contenido

| Elemento | Texto |
|----------|-------|
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT · PROMPTING (2/2) |
| Título principal | Contexto y Restricciones: la mitad del resultado |
| Columna A — encabezado | Contexto — muéstrale solo lo que importa |
| Columna A — contenido | Orden de referencias: `#selection` → método/clase → `#file` → `@workspace` (solo si no sabes dónde está). En COBOL: un módulo, no 20 programas. |
| Columna B — encabezado | Restricciones — dile las reglas de GCO |
| Columna B — contenido | COBOL: columnas 7–72. SQL: sin `LIKE`, sin `DELETE`/`TRUNCATE`. .NET: C# 12, `async/await`. Nunca credenciales en el código. |
| Remate | Lo que no le dices, lo adivina. |
| Logo | Occident — inferior derecha |

### Especificaciones Figma (referencia — el diseño final lo define Yehimy)

- **Formato:** 1080×1350 px para Teams (o 1920×1080 landscape adaptable)
- **Fondo:** blanco — sin fondos negros ni rojos
- **Eyebrow:** rojo `#DC0028` · uppercase · GCO Sans pequeño
- **Título principal:** negro · CO Bold · display
- **Columnas:** fondo `#F5F5F5` · esquinas suavemente redondeadas
- **Encabezados de columna:** CO Bold negro
- **Comandos inline** (`#selection`, `#file`, `@workspace`, `LIKE`, `async/await`): monospace · fondo blanco/`#F5F5F5` · borde sutil
- **Remate "Lo que no le dices, lo adivina":** rojo `#DC0028` como acento
- **Logo Occident:** inferior derecha
- **Tipografía:** CO para títulos · GCO Sans para texto corriente · monospace para términos técnicos
- **Marca:** rojo `#DC0028` solo como acento (eyebrow, remate)
