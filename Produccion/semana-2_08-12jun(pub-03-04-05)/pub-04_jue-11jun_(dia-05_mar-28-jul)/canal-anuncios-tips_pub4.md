# Canal Anuncios y Tips — Pub 4 · Elige el modelo según la tarea
> Canal: Anuncios y Tips Ágiles · Tipo: Tip de uso · Post principal + 3 respuestas de hilo
> 📍 **Teams GCO congelado.** Retirada el 18 ago (se auto-publicó el 28/7). Vuelve a la cola en orden de creación — previsto la semana del 14-18 sep.
> Estado: ✅ **Texto final.** Las 4 piezas gráficas están producidas. Limpiado el 25 ago 2026: lo que ya no se usa está en `deprecados/`.
> Fuente: sesiones Nibaldo · `prop_modelo-apropiado.md`
> Historial del cambio de facturación del 21 jun (antes/después detallado): `deprecados/ajuste-facturacion-tokens_pub4.md` — archivo histórico, el cambio ya está aplicado en este documento

---

## Objetivo de esta publicación

Que los developers entiendan que en GitHub Copilot no todos los modelos tienen el mismo coste, y que usar siempre el más potente gasta su bolsa mensual más rápido. El hábito que se quiere instalar: revisar qué modelo está seleccionado antes de preguntar, y acotar el contexto.

---

## Estructura de la publicación

| # | Qué es | Pieza que lo acompaña |
|---|--------|------------------------|
| — | **Post principal** — ¿Siempre usas el mismo modelo? | `pub-04_s-2_tarjeta-comparativa_optimizacion-de-tokens-y-modelos.png` |
| 1 | **Respuesta 1** — Diseña con el que razona, ejecuta con el ligero | `pub-04_s-2_tarjeta-minimalista_disene-la-solucion-con-un-modelo-avanzado.png` |
| 2 | **Respuesta 2** — ¿Cuánto contexto le das? | `pub-04_s-2_tarjeta-minimalista_carga-progresiva-de-skills.png` |
| 3 | **Respuesta 3** — Higiene de la memoria a corto plazo | `pub-04_s-2_tarjeta-minimalista_higiene-de-la-memoria-a-corto-plazo.png` |
| — | **Post propio**, programado 1h después — Una vez o siempre | `post-una-vez-o-siempre_pub4.md` (archivo aparte) |

> **El post de "Una vez o siempre" no es una respuesta del hilo.** Va como publicación independiente, programada una hora después del post principal — igual que salió el 28/7. Así, al republicar solo hay que replicar a mano el hilo (principal + respuestas 1-3) y ese sale programado solo.
>
> Sustituye al antiguo "Memoria vs. Instrucciones", deprecado el 25 ago. Ver `deprecados/README.md`.

---

## Post principal — listo para copiar en Teams

> Texto idéntico a la publicación verificada en la captura (`Produccion/imagenes_teams/01_anuncios-y-tips-agiles/05-pub-02_anuncios-y-tips-agiles.png` — Teams Raona, 5 jun 18:50): el asunto no lleva emoji y el cuerpo abre con "Puede que estés gastando más de lo necesario."

**Asunto:** `¿Siempre usas el mismo modelo en GitHub Copilot?`

---

**Puede que estés gastando más de lo necesario.**

En GitHub Copilot no todos los modelos cuestan lo mismo. Tu licencia incluye una bolsa mensual de uso: los modelos ligeros consumen poco, los avanzados consumen bastante más. Y cuanto más contexto le pasas, más gastas.

La idea no es usar siempre el más potente — es usar el adecuado para lo que necesitas ahora.

| Tipo de tarea | Modelo |
|---------------|--------|
| Explicar un error · documentar · resumir código | Ligero |
| Refactor delicado · análisis de impacto · lógica COBOL/DB2 compleja | Avanzado |
| ¿No sabes cuál? | Empieza con el ligero. Si no alcanza, sube. |

Dos hábitos que ahorran: elige el modelo según la tarea y acota el contexto —no le pases el proyecto entero si la pregunta es sobre un método. Tu bolsa se renueva cada mes.

👉 Antes de tu próxima consulta, mira qué modelo tienes seleccionado.

---

## Respuestas del hilo

### Respuesta 1 — acompaña `pub-04_s-2_tarjeta-minimalista_disene-la-solucion-con-un-modelo-avanzado.png`

🧠 **Diseña con el que razona, ejecuta con el ligero.**

Una táctica para ahorrar sin sacrificar calidad en GitHub Copilot: usa un **modelo avanzado** para *pensar* —analizar el problema, definir el enfoque, entender el impacto— y uno **ligero** para *escribir* —el código, el refactor, la documentación.

En COBOL o .NET: un hilo con modelo avanzado para entender qué cambiar en el módulo, otro con modelo ligero para generar los bloques de DB2 o el boilerplate. El que razona no tiene que ser el que produce volumen.

Y cuida el contexto: `#file` para apuntar solo a los archivos que importan, y `@workspace` solo cuando de verdad no sabes dónde está el problema.

👉 La próxima vez que abras una tarea compleja, separa el pensar del ejecutar.

---

### Respuesta 2 — acompaña `pub-04_s-2_tarjeta-minimalista_carga-progresiva-de-skills.png`

🎯 **¿Cuánto contexto le das a GitHub Copilot cuando preguntas algo?**

Cuanto más acotada la referencia, más enfocada la respuesta — y menos tokens consumes.

El orden: `#selection` primero, luego método o clase, luego `#file`, y `@workspace` solo cuando no sabes dónde está el problema.

Para COBOL: no cargues 20 programas para preguntarle por un SQLCODE que falla en un módulo específico. Referencia ese método directamente.

---

### Respuesta 3 — acompaña `pub-04_s-2_tarjeta-minimalista_higiene-de-la-memoria-a-corto-plazo.png`

🧹 **GitHub Copilot no recuerda lo que hablaste ayer. Pero sí se "llena" dentro del mismo hilo.**

Cada mensaje, cada archivo abierto, el historial del chat — todo entra en lo que llamamos "el cajón". Cuando se llena, el modelo empieza a mezclar contextos.

Tres reglas que hacen diferencia: abre un hilo nuevo cuando llevas muchas preguntas acumuladas, quita el archivo activo si no es relevante, y en COBOL trabaja un programa por hilo.

---

## Tono de comunicación

El gancho es la pérdida de tokens — algo concreto y que ya les puede haber pasado. El tono no es alarmista: es "te doy el criterio para decidir bien".

Claves:
- La tabla de 3 filas es el mensaje central. No necesitan leer el texto para entender el post.
- "Si no alcanza, sube de modelo" normaliza el proceso — no es un fallo, es un método.
- La renovación mensual baja la ansiedad sobre quedarse sin tokens.

---

## Briefs de las piezas

### `pub-04_s-2_tarjeta-comparativa_optimizacion-de-tokens-y-modelos` · tarjeta comparativa horizontal

> Versión vigente, reformulada tras el cambio de facturación del 21 jun 2026. El brief anterior (multiplicadores `0x` / `1x | 3x`) está en `deprecados/deprecado_briefs-historicos_pub4.md`, brief 1.
>
> ⚠️ **Regla que no se puede perder:** bajo el modelo de facturación vigente **ningún modelo es gratis** — todos consumen crédito, solo que unos mucho menos que otros. Frases como "GPT-4.1 = gratuito" o "el estándar no consume" son incorrectas y no pueden volver a la pieza ni al texto.

| Elemento | Texto |
|----------|-------|
| Eyebrow (overline) | GUÍA DE MAESTRÍA EN GITHUB COPILOT: EFICIENCIA Y CONTEXTO |
| Título principal | Optimización de Tokens y Modelos |
| Subtítulo | Tu licencia incluye una bolsa mensual de uso. El gasto depende del modelo que elijas y del contexto que le pases. |
| Columna A — encabezado | Modelos ligeros |
| Columna A — etiqueta | Menos Consumo |
| Columna A — descripción | Para tareas diarias: explicar un error, documentar, resumir código, boilerplate. |
| Columna B — encabezado | Modelos avanzados |
| Columna B — etiqueta | Más Consumo |
| Columna B — descripción | Para razonar de verdad: refactor delicado, análisis de impacto, lógica COBOL/DB2 compleja. |
| Centro | Ícono velocímetro, gris |
| Logo | Occident — inferior derecha |

**No debe aparecer en la pieza:** los badges `0x` y `1x | 3x`, los precios "(Gratis)" y "1x - 3x", ni nombres de modelo concretos (GPT-4.1, Claude, Gemini) — no se han confirmado cuáles tiene GCO.

**Figma:** landscape · fondo blanco · eyebrow rojo `#DC0028` mayúsculas · título CO Bold · columnas fondo `#F5F5F5` con esquinas redondeadas · logo inferior derecha.

---

### `pub-04_s-2_tarjeta-minimalista_disene-la-solucion-con-un-modelo-avanzado` · tarjeta minimalista

> Versión vigente. La anterior decía "modelo Premium" / "uno Estándar" — deprecada, ver `deprecados/deprecado_briefs-historicos_pub4.md`, brief 2.

| Elemento | Texto |
|----------|-------|
| Ícono (izquierda superior) | Checklist/kanban · rojo `#DC0028` |
| Título corto (derecha) | ESTRATEGIA PLANIFICADOR-EJECUTOR |
| Título principal | Diseñe la solución con un modelo Avanzado. |
| Subtítulo | Y ejecuta el código con uno ligero. |
| Punto 1 | Referencias precisas con `#file`, así solo se eligen los archivos esenciales para no saturar la ventana de contexto. |
| Punto 2 (aviso, en rojo) | Reserva `@workspace`: solo cuando genuinamente no sepas dónde está el problema. |
| Logo | Occident — inferior derecha |

**Figma:** 1080×1350 px · fondo gris muy claro `#F5F5F5` (la distingue de las otras minimalistas, que son blancas) · título corto rojo mayúsculas a la derecha · título principal CO Bold · comandos en monospace con chip.

---

### `pub-04_s-2_tarjeta-minimalista_carga-progresiva-de-skills` · tarjeta minimalista

| Elemento | Texto |
|----------|-------|
| Título corto (derecha) | GUÍA DE MAESTRÍA EN GITHUB COPILOT |
| Título principal | Carga progresiva de Skills |
| Subtítulo | Ahorra tokens al inyectar contenido solo cuando el modelo detecta relevancia |
| Párrafo | No cargues Skills de entrada. Empieza por `#selection` o el método específico y escala solo si el modelo necesita más contexto. La precisión de la referencia define la precisión de la respuesta. |
| Logo | Occident — inferior derecha |

**Figma:** 1080×1350 px · fondo blanco · título corto rojo mayúsculas a la derecha · título principal CO Bold · párrafo GCO Sans con interlineado 1.5 · comandos (`#selection`, `#file`, `@workspace`) en monospace con chip `#F5F5F5`.

---

### `pub-04_s-2_tarjeta-minimalista_higiene-de-la-memoria-a-corto-plazo` · tarjeta minimalista

| Elemento | Texto |
|----------|-------|
| Título corto (derecha) | OPTIMIZADOR DE CONTEXTO Y TOKENS |
| Título principal | Higiene de la memoria a corto plazo |
| Subtítulo | Abre un nuevo hilo cada 20 turnos para evitar respuestas imprecisas o errores. |
| Párrafo | Cada 20 turnos, el historial pesa más que el código actual. Un hilo nuevo devuelve el foco al modelo. En COBOL: un programa por hilo, sin mezclar contextos entre módulos. |
| Logo | Occident — inferior derecha |

**Figma:** 1080×1350 px · fondo blanco · mismo sistema que la anterior.

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Modelos ligeros vs. avanzados (consumo relativo) | G4M Sesión 1 · G2M Sesión 2 · actualizado por el cambio de facturación del 1 jun 2026 |
| "En dos días te quedas sin tokens" | G3M Sesión 1 |
| Criterio tarea simple / compleja | G2M Sesión 1 · G5M Sesión 1 |
| Renovación mensual de la bolsa | G2M Sesión 2 |
| Prop base | `prop_modelo-apropiado.md` |

> **Modo auto (VS Code)** — G5M Sesión 1. No entró en este post; queda como nota complementaria para más adelante.

---

## Qué se sacó de este archivo el 25 ago 2026

| Qué | Dónde está ahora |
|---|---|
| Post "Memoria vs. Instrucciones" (Respuesta 4 original) | Reescrito como `post-una-vez-o-siempre_pub4.md`. El original en `deprecados/` |
| Hilos `4-a` y `4-b` | `deprecados/` — nunca se produjeron sus piezas |
| Brief `1-S2` con multiplicadores 0x/1x/3x | `deprecados/deprecado_briefs-historicos_pub4.md`, brief 1 |
| Brief `2-S2` con "modelo Premium / uno Estándar" | `deprecados/deprecado_briefs-historicos_pub4.md`, brief 2 |
| Brief `5-S2` de "Memoria vs. Instrucciones" | `deprecados/deprecado_briefs-historicos_pub4.md`, brief 3 |
| Nota sobre el texto retirado "El desglose completo: qué modelo usar y cuánto consume" | `deprecados/ajuste-facturacion-tokens_pub4.md`, punto 5 |
