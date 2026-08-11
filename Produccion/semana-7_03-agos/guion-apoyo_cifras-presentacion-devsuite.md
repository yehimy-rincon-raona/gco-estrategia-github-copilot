# Guion de apoyo — Presentación Dev Suite (11 ago)
> Uso personal de Yehimy · notas de ampliación en el mismo orden que `presentacion-propuesta-agosto-devsuite_10ago2026.html`, para leer sección por sección durante la reunión
> Fuente de todos los datos: `información-equipo-raona-gco-devsuite.md` (salvo donde se indica otra fuente)
> Todo lo escrito aquí es seguro de decir frente a GCO — no incluye narrativa interna de cómo se llegó a esto, solo el contenido y el criterio.

---

## Hero — Las 4 cifras iniciales

### 32 — skills
**Qué es:** son las 32 "recetas" que ya trae la Dev Suite. Cada una le enseña a GitHub Copilot cómo hacer una tarea puntual a la manera de GCO — no de forma genérica, sino con las convenciones internas ya metidas dentro.

**Si preguntan "por ejemplo, cuáles":** revisar código .NET contra el checklist del equipo, o analizar un programa COBOL viejo (estructura, flujo de datos, copybooks, dependencias). Estas dos áreas — .NET y COBOL — son parte de las 9 áreas que agrupan las 32 skills (las otras: incidencias y logs, tickets, base de datos, coherencia entre capas, documentación, trazabilidad, gestión ágil).

**Si preguntan "cómo funciona":** no se cargan todas de golpe — el agente solo lee el nombre y la descripción de cada una (poco peso), y recién carga el contenido completo de la que aplica a la tarea del momento. Por eso se pueden tener 32 sin que esto vuelva lento o pesado al asistente.

### 5 — MCPs
**Qué es:** son los 5 conectores que le dan a GitHub Copilot acceso a datos reales y en vivo: **Jira, Confluence, Elastic, DB2 y el navegador**.

**Por qué importa:** sin esto, GitHub Copilot solo "sabe" lo que ya vio en el código. Con los MCP, puede ir a consultar de verdad — por ejemplo, leer el ticket real en Jira o ver la estructura actual de una tabla en DB2, en vez de suponerla o inventarla.

### 3 — agentes
**Qué es:** son los 3 "responsables" que deciden qué hacer y en qué orden. Ninguno escribe código directamente — deciden y coordinan.

- **El coordinador** — es el único que habla con el usuario. Recibe la petición en lenguaje natural y decide qué hace falta.
- **El orquestador de cambios** — entra cuando un cambio toca más de una capa (por ejemplo, agregar un campo que afecta base de datos, COBOL y .NET a la vez). Reconoce el tipo de cambio (hay 18 catalogados) y pone las tareas en el orden correcto.
- **El validador** — al final, revisa que las capas encajen entre sí (12 reglas de coherencia). Es conservador: avisa qué está mal, pero no lo corrige solo — dice qué hay que arreglar y quién debe hacerlo.

**La frase que resume esto, si hace falta cerrarlo rápido:** "la suite no implementa nada sin que la persona apruebe el plan primero — siempre propone, espera, y después ejecuta."

### 5 — publicaciones propuestas
**Qué es distinto en esta cifra:** las otras tres describen la herramienta (la Dev Suite). Esta describe la propuesta de contenidos — los 5 posts para contar todo esto en agosto.

**Las fechas, si preguntan:** 11 ago (Dev Suite), 13 ago (Skills 1/2), 20 ago (Skills 2/2), 25 ago (MCP), 27 ago (Agentes) — todas usan huecos reales del calendario, sin mover ninguna publicación ya programada.

---

## Sección 01 — Criterio del orden

**"Sin entender qué es la Dev Suite como conjunto..." — qué quiere decir:** si a alguien le hablas de "una skill" o "un MCP" sin haberle explicado antes qué es la Dev Suite en general, esa pieza suelta no tiene dónde encajar — no sabe para qué sirve dentro del conjunto ni por qué debería importarle. Por eso el primer post es sobre la Dev Suite completa, y los siguientes desarrollan cada componente por separado, ya con un lugar donde encajar.

**Objetivo de esta sección:** aprovechar la información ya disponible para desarrollar cada tema con precisión, alineando hoy el orden y las fechas antes de pasar a producir las piezas gráficas.

**Si preguntan por "Dev Suite" vs. "Copilot Dev Suite" (Video 04):** todavía sin confirmar si son la misma herramienta — queda como punto a confirmar antes de fijar el nombre en las piezas gráficas (ver sección 05).

---

## Sección 03 — Cronograma

**Por qué no hay nada el martes 18 de agosto:** ese día el canal Anuncios y Tips Ágiles — el mismo canal de esta serie — ya tiene 2 publicaciones programadas: Pub 4 y "Memoria vs. Instrucciones". Meter una tercera publicación de Dev Suite ahí sería saturar el canal. Por eso la tabla muestra esa fecha en gris, marcada como "sin hueco", y la secuencia salta del jueves 13 directo al jueves 20 — ese día el canal ocupado es otro (Primeros Pasos), así que Anuncios y Tips queda libre.

**Si preguntan por qué se dejó visible esa fila en vez de solo omitirla:** para que quede claro que no se salta un día al azar — hay un motivo concreto, y GCO puede ver exactamente cuál.

---

## Sección 04 — Contenidos (al mostrar la pestaña de Skills)

### ⚠️ Punto abierto para plantear: el "32" todavía es solo una cifra
El número 32 aparece en Pub 12 como dato de impacto, pero ningún post de la secuencia explica todavía cuáles son esas 32 skills. Pub 13 y 14 hablan de qué es una skill *en general* (con los ejemplos `dotnet-review` / `cobol-analyzer`) — no muestran el catálogo real de la Dev Suite.

**El desglose real ya existe** — son 9 áreas: incidencias y logs, tickets, COBOL, base de datos, .NET, coherencia entre capas, documentación, trazabilidad, gestión ágil.

**Cómo plantearlo:** "El 32 que mostramos hoy es la cifra de impacto — todavía no decidimos en qué post se explica el desglose real por áreas. Hay dos caminos: meterlo dentro de Pub 14 (Skills 2/2, jue 20 ago) como una sección adicional, o abrirle un post propio más adelante." — dejar que el equipo decida cuál prefiere, no cerrarlo antes de la reunión.

---

## Sección 05 — Puntos por confirmar

**El punto 5 de la tabla (discrepancia de MCP):** el material recibido trae 5 MCPs (Jira, Confluence, Elastic, DB2, navegador); el guion del Video 04 menciona 4 (Jira, Confluence, DB2, SQL). Antes de publicar Pub 15 (25 ago) hay que confirmar cuál es la lista vigente — se puede decir tal cual: "hay una diferencia entre dos materiales que tenemos, y hace falta que ustedes nos confirmen cuál es la vigente."

**Los otros 5 puntos de la tabla** (proceso para proponer Skill/MCP/agente nuevo, si hay alguna Skill propia mostrable, qué pasa con un MCP sin aprobar) — son procesos que GCO todavía no ha definido. No se inventa nada sobre ellos: se presentan como puntos a resolver juntos, no como preguntas que "alguien no contestó."

---

## Sección 06 — Siguientes pasos

Los 4 pasos de esta sección ya están escritos para leerse directo desde la pantalla — no necesitan ampliación adicional. El único que vale la pena remarcar en voz: el último ("Cerrar los procesos de gobernanza pendientes") es trabajo conjunto con GCO, no una tarea que Raona resuelve sola.

---

## Si preguntan algo que no está aquí

No inventar. Decir tal cual: "eso todavía no lo tenemos confirmado, queda como pendiente de seguimiento."
