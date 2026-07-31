# Propuesta de contenido — Correcto uso de la memoria en GitHub Copilot
> Eje: Novedades, Actualizaciones y Tips de uso
> Fase: 2 · Entorno Nativo y Primeros Pasos
> Propuesto por: Nibaldo · 5 junio 2026
> Estado: ✅ Validado con sesiones Nibaldo · pendiente confirmación Visual Studio

---

## Concepto

Cuando Nibaldo habla de "memoria" en las sesiones, casi siempre habla de la **ventana de contexto**: el "cajón" donde el modelo guarda temporalmente todo lo que necesita para responder. No es una memoria mágica y permanente — es un espacio que se llena, se satura y, cuando se desborda, hace que Copilot empiece a mezclarse o responder mal.

Entender cómo funciona ese cajón permite a los developers:
1. Saber por qué Copilot a veces "se pone tonto" — y cómo resolverlo
2. Conseguir respuestas más precisas sin repetir contexto en cada sesión

**El mensaje central para los developers de GCO:**
Copilot no recuerda. Trabaja con lo que tiene en su cajón. Si ese cajón está mal cargado, demasiado lleno o contaminado, la respuesta empeora. Tú controlas qué metes.

---

## Cómo funciona la memoria — según Nibaldo

### El cajón de contexto

Todo lo que Copilot sabe en una sesión vive en su **ventana de contexto**. Nibaldo la describe como un cajón: si está ordenado, encuentra lo que necesitas; si está lleno de cables mezclados, la respuesta falla.

> "La ventana de contexto es como un cajón. Todo lo que se añade a la ventana del contexto es lo que el modelo sabe."

Ese cajón **nunca arranca vacío**: Copilot ya trae un system prompt propio desde el inicio. Encima de eso se van sumando capas.

### Qué entra en la ventana de contexto

| Qué entra | Explicación |
|-----------|-------------|
| System prompt de GitHub Copilot | Siempre presente. Ocupa una parte inicial del cajón. |
| Prompt del usuario | La pregunta que escribe el developer. |
| Historial de conversación | Todo lo que se ha dicho en ese hilo. Se acumula con cada turno. |
| `copilot-instructions.md` (`.github/`) | Instrucciones del equipo que Copilot aplica en cada sesión — contexto permanente. |
| Documento activo | El archivo que está abierto en ese momento. Se carga por defecto. |
| Archivos abiertos / pestañas | Si hay 100 pestañas abiertas, esas 100 entran al cajón. |
| Código seleccionado | La selección activa también se añade al contexto. |
| Código adyacente | El código que rodea al cursor, aunque no esté seleccionado. |
| Archivos referenciados | Los que se añaden explícitamente con `#file`, `#selection`, etc. |
| Herramientas del agente | Si se usa modo agente, las herramientas habilitadas también consumen espacio. |

> "Entra el system prompt, los archivos abiertos, si tengo un proyecto con 100 pestañas abiertas pasan también al cajón. El historial de conversación pasa al cajón. Los archivos de instrucciones custom también se meten en este cajón."

### Cuándo se llena y qué pasa

Conforme se usa el mismo hilo, el historial crece y el cajón se llena. Cuando se satura:

> "Esta ventana de contexto se llena y cuando la ventana de contexto se llena, el modelo se marea y cuando el modelo se marea se empieza a inventar las historias."
> "¿Alguien les ha pasado que el modelo se pone tonto? Eso es porque la ventana de contexto se llena."

**Solución directa de Nibaldo:** abrir un hilo nuevo.

> "Solución: abre una nueva conversación. Vas a tener una ventana limpia, un nuevo espacio para añadir nueva información."

### La autocompactación ayuda, pero tiene coste

Cuando el cajón se llena, algunos modelos hacen **autocompactación**: comprimen el historial para liberar espacio. Sirve, pero tiene un precio: se puede perder memoria de cosas importantes.

> "Sirve mucho. Lo negativo es que pierdes memoria de lo que estás utilizando. Si ya me había incorporado autenticación antes y se autocompactó, probablemente lo empieza a hacer mal."

**Lectura:** la autocompactación no es mala, pero no hay que confiar en que mantenga todo el historial intacto.

### Reglas de uso según Nibaldo

| Regla | Qué implica |
|-------|-------------|
| Saber qué está en contexto | Revisar documento activo, archivos abiertos, selección y referencias antes de preguntar. |
| Quitar el documento activo si no aporta | Si el archivo abierto no es relevante, sacarlo del contexto. |
| Acotar la referencia | Referenciar archivo, método, líneas o selección en vez de cargar todo el proyecto. |
| No cargar 10 proyectos si trabajas en uno | Cuanto más contexto innecesario, peor respuesta. |
| Limpiar cuando se satura | Abrir hilo nuevo si Copilot empieza a responder raro. |
| Dividir tareas grandes | Para 20 programas COBOL, uno por uno — no todos al mismo hilo. |
| No confiar ciegamente en el historial | El historial acumula y contamina. |

> "Dale diez proyectos. ¿Te va a responder? Probablemente sí. ¿Te va a responder bien? Bueno, la probabilidad cambia. Acótalo."

> "No es que Copilot esté contestando mal. Es que está referenciando documento activo."

---

## Borrador del post para Teams

**Canal sugerido:** Primeros Pasos con GitHub Copilot
**Formato:** Tip práctico — concepto + reglas de uso

---

🧠 **GitHub Copilot no tiene memoria permanente. Tiene un cajón.**

Cada vez que abres un chat, ese cajón empieza con el system prompt de Copilot — y desde ahí va llenándose: con el documento activo, tus archivos abiertos, el historial de la conversación y lo que tú vayas añadiendo.

Cuando el cajón se llena, Copilot puede empezar a mezclar cosas o responder mal. No es que sea malo — es que tiene demasiado dentro.

**Antes de preguntar, revisa:**
1. ¿El documento activo aporta? Si no, quítalo.
2. ¿Necesitas todo el proyecto o solo este método o archivo?
3. ¿El hilo ya lleva muchas preguntas? Abre uno nuevo.

Para tareas con 20 programas COBOL: uno por uno, no todos al mismo hilo.

👉 Menos contexto, pero el correcto — suele dar mejores respuestas.

---

## Brief visual (Figma)

**Tipo de pieza:** diagrama del cajón — qué entra, qué pasa cuando se llena, cómo resolver

| Elemento | Texto |
|----------|-------|
| Franja canal | 🧠 Primeros Pasos con GitHub Copilot |
| Pill fase | Fase 2 · Entorno Nativo |
| Título | Copilot trabaja con un cajón, no con memoria infinita |
| Subtítulo | Lo que metes determina la calidad de la respuesta |
| Sección izq. | **Qué entra al cajón**: document activo · historial · archivos · selección · instrucciones |
| Sección der. | **Qué pasa cuando se llena**: respuestas mezcladas · invenciones · lentitud |
| Solución | Abrir hilo nuevo · acotar referencias · quitar lo que no aporta |
| CTA | 👉 Revisa qué tiene Copilot antes de preguntar |
| Footer | Estrategia de Adopción · 2026 |

**Specs Figma:** 1080×1350px · fondo blanco · `#DC0028` · metáfora visual del cajón (ícono genérico contenedor) · sección de "problema" en gris claro · sección de "solución" con acento rojo

---

## Estado del checklist

- [x] **¿Cómo funciona la ventana de contexto?** — Confirmado en múltiples sesiones: es el "cajón", todo lo que Copilot puede saber en una sesión.
- [x] **¿Qué entra al contexto?** — System prompt, historial, documento activo, archivos abiertos, pestañas, código seleccionado, código adyacente, instrucciones custom, archivos referenciados.
- [x] **¿Qué pasa cuando se llena?** — Copilot "se marea": mezcla contextos, inventa, responde mal. Solución: hilo nuevo.
- [x] **¿Otros mecanismos además de `copilot-instructions.md`?** — Sí: referencias explícitas con `#file`, `#selection`, clase o método. No hay un "guardado de conversación" entre sesiones.
- [x] **Ejemplo para COBOL/DB2** — Para 20 programas COBOL: uno por uno, cerrando conclusión y limpiando contexto antes del siguiente.
- [ ] **Confirmar que `copilot-instructions.md` en `.github/` funciona igual en Visual Studio que en VS Code** — Nibaldo no lo clarificó en detalle para VS. Pendiente.
- [ ] **¿GCO ya tiene alguna restricción definida en su archivo de instrucciones?** — Pendiente confirmar con Nibaldo/Guillermo.