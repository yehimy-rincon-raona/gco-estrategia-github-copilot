# Bocetos de contenidos — Cuatro principios de comunicación

## La idea central

Los cuatro principios son la **columna vertebral editorial** de toda la estrategia de contenidos. No son reglas de estilo: son la respuesta directa al principal problema del proyecto — **resistencia activa al uso** de una herramienta que ya está disponible y pagada.

La lógica es: si el contenido no sigue estos principios, no llega. Y si no llega, la adopción no ocurre.

---

## Los cuatro principios y por qué cada uno está ahí

| Principio | Por qué existe |
|---|---|
| **De menos a más** | El equipo ya recibió 3 sesiones técnicas y no cambió su comportamiento. El problema no es desconocimiento, es que el salto percibido es demasiado grande. Empezar desde lo básico (abrir Copilot, hacer una pregunta, dar contexto) reduce ese salto. |
| **Contenidos breves o nada** | La audiencia es técnica, con carga de trabajo real. Artículos largos no se leen. Tips de 3 puntos, infografías y micro-vídeos de 60–90 segundos sí se consumen. |
| **Casos reales antes que mensajes genéricos** | Un developer de COBOL con 20 años de experiencia no se mueve con estadísticas globales de productividad. Se mueve cuando ve: "esto resuelve el SQLCODE -803 que llevas tiempo mirando". El anclaje en COBOL, DB2, PL/SQL, Copybooks hace que el contenido hable su idioma. |
| **Tono de colega, no de experto** | La resistencia activa tiene componente emocional: percepción de imposición, miedo a quedar obsoleto, escepticismo hacia el marketing de IA. El tono "esto te ahorra tiempo hoy" genera confianza; el tono "la IA transformará tu trabajo" genera defensiva. |

---

## Justificación estratégica

Estos principios están documentados en `Planeacion/estrategia-de-adopcion-posformacion.md` (sección 6) como condición necesaria para que la comunicación funcione con **audiencia técnica y resistente**. No son preferencias de diseño — son decisiones fundamentadas en el diagnóstico del proyecto.

En la presentación (`index.html`) se condensan en una sola frase:
> *"De menos a más. Contenidos breves. Casos reales antes que mensajes genéricos. Tono de comunicación cercano que comparte un descubrimiento, no sólo que enseña."*

Los bocetos de contenido que siguen (pestañas) son la **demostración en vivo** de los cuatro principios aplicados.

---

## Gap identificado: falta el gancho anterior a lo técnico

Nibaldo fue explícito en la reunión del 08-05-26 (Reuniones/[GCO] Reunión Guillermo):
> *"No comencemos por ahí. Comencemos con algo muy básico, comencemos con tendencias… primero llamémosle la atención con la necesidad."*

El plan de acción también lo documenta:
> *"Se deberá investigar y utilizar métricas generales que demuestren qué tan productivo puedes llegar a ser si empiezas a incorporar la IA en tu flujo de trabajo."*

El contenido actual arranca directamente en modo tutorial. Falta el **gancho previo**: por qué moverse ahora, qué está pasando en el mercado, qué pierde quien no se mueve. Sin ese gancho, el developer resistente descarta el contenido antes de llegar al tip técnico.

---

## Propuesta de redirección por pestaña

### #Semana1 → renombrar a `#¿Por qué ahora?` o `#El mercado ya se movió`

Contenido de **activación competitiva, no técnico**. Datos de mercado que muestren la realidad externa:
- McKinsey: developers con IA completan tareas 40% más rápido
- Accenture: 35% reducción en tiempo de revisión de código (50.000 developers)
- BMO Bank of Montreal: adoptó Copilot en entornos COBOL y mainframe
- FedEx: IA para entender código legacy antes de modificaciones

El mensaje: *"Tu entorno ya cambió. Esto no es opcional."* Sin mencionar cómo usar Copilot todavía. Solo la realidad del mercado para activar competitividad.

**Fuentes disponibles:** `Conocimiento/benchmarks-productividad-copilot.md`

### #Tip Ágil → reencuadrar como `#Prompt básico`

Sacar COBOL/DB2 de esta pestaña en la primera ola. Nibaldo dijo explícitamente no abrumar con tecnicismos. Aquí entra **prompt engineering elemental y universal**:
- Cómo formular una pregunta a Copilot
- Qué significa dar contexto (no "revísame todo", sino "analiza este bloque")
- Por qué seleccionar solo lo relevante mejora la respuesta

Sin lenguaje específico. Aplica a cualquier developer del equipo, independientemente de su stack.

**Regla:** COBOL y DB2 entran en Tip Ágil solo cuando ya haya uso básico establecido (Fase 2 en adelante).

### #Casos reales → postergar o simplificar al máximo

Dudosa su inclusión en la primera ola. Si se mantiene, que sea el caso más simple posible:
- Copiar y pegar un log de error en Copilot Chat
- Pedir que explique un bloque de código que no se entiende

Nibaldo mencionó "arreglar un bug" como ejemplo válido de caso sencillo de entrada. Nada de SQLCODE, DB2 joins o COBOL batch en esta primera etapa.

### #Novedades → `#Tendencias del sector`

Aquí va la investigación de mercado que Nibaldo pedía. No tutoriales — **titulares del sector que activan la competitividad**:
- Qué están haciendo otros bancos y aseguradoras con IA (BMO, FedEx, Accenture)
- GitHub Developer Survey: cómo está cambiando el perfil del developer
- Qué cambió en el mercado laboral para developers que usan IA vs. los que no
- Novedades de Copilot traducidas a impacto real, no a marketing

El objetivo: que el developer de GCO sienta que el mundo se movió mientras él estaba ocupado. Sin presión directa — solo datos que hablan solos.

---

## Resumen

Los cuatro principios son la traducción táctica del diagnóstico. La resistencia es el problema; los principios son el antídoto editorial.

El ajuste pendiente es añadir un **quinto momento implícito** antes de los cuatro principios: el gancho competitivo que responde *¿por qué moverme ahora?* antes de mostrar *cómo hacerlo*. Eso es lo que Nibaldo insistió en poner primero.
