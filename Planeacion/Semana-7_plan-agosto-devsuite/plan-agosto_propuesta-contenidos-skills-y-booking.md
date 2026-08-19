# Propuesta — Plan de agosto: serie Skills + flujo de booking
> Para presentar en la reunión con GCO (a partir de la reunión con Esteban Serrano, 3 ago 2026)
> Fuentes: `Reuniones/seguimientos-semanales/resumen-de-reunion_03-08-26_raona-interno.md` · `Conocimiento/temas_mes-agosto/material-base_skills-que-son-y-cuando-usarlas.md` · `Produccion/TABLERO.md` · `Planeacion/calendario-republicacion_teams-de-gco.md`
> Estado: **propuesta, pendiente de validar con Nibaldo/Jonatan** antes de fijarla en el calendario oficial.
> ⚠️ **La sección de contenidos (serie Skills, Pub 13-15) está superada por `plan-agosto_devsuite-skills-mcp-agentes.md`** — usar ese documento como referencia vigente de números y temas. **El flujo de booking (sección 7 en adelante) sigue vigente y no se ha tocado.**

---

## 1. Punto de partida

En la reunión del 3 de agosto, Esteban confirmó dos ejes para agosto:
1. **Contenido:** el foco de las próximas publicaciones es **Skills**, de lo más básico a lo práctico, con dos publicaciones semanales (martes y jueves) y video para los temas más complejos. Esteban enviará el material — ya llegó el primer documento (`material-base_skills-que-son-y-cuando-usarlas.md`).
2. **Booking:** habilitar reservas 1:1 con expertos, con un flujo de asignación de preguntas y una herramienta de agendamiento — meta de lanzamiento entre agosto y septiembre.

Este documento propone cómo aterrizar ambos ejes.

---

## 2. Dónde encaja en el calendario ya confirmado

El calendario de republicación (`calendario-republicacion_teams-de-gco.md`) ya tiene fechas fijas hasta el 3 de septiembre. Antes de proponer algo nuevo, este es el hueco real disponible en agosto:

| Fecha | Canal ocupado | Contenido ya fijado | Serie Skills propuesta |
|-------|----------------|----------------------|--------------------------|
| Mar 4 ago | — | *(libre)* | Bloque 1 |
| Jue 6 ago | — | *(libre)* | Bloque 1 |
| Mar 11 ago | — | *(libre)* | Bloque 2 |
| Jue 13 ago | — | *(libre)* | Bloque 2 |
| Mar 18 ago | Anuncios y Tips Ágiles | Pub 4 + "Memoria vs. Instrucciones" | — (canal ya tiene 2 posts ese día) |
| Jue 20 ago | Primeros Pasos | Pub 5 | Bloque 3 (en paralelo, canal distinto) |
| Mar 25 ago | Casos de Uso Reales | Pub 6 | Bloque 4 (en paralelo, canal distinto) |
| Jue 27 ago | Casos de Uso Reales | Pub 7 | Bloque 4 (en paralelo, canal distinto) |

**Hay 4 slots 100% libres (Bloques 1 y 2)** antes de que se reanude el contenido ya congelado el 18 de agosto — coinciden exactamente con lo que pidió Esteban: dos publicaciones semanales.

**Para cubrir el resto del mes sin depender de que llegue más material de Esteban** (el que ya tenemos alcanza), se propone además correr Anuncios y Tips Ágiles en paralelo con Primeros Pasos (jue 20) y con Casos de Uso Reales (mar 25 y jue 27) — mismo patrón que el proyecto ya usa el 1 y 3 de septiembre (dos canales distintos, mismo día, sin conflicto). Mar 18 queda fuera porque Anuncios y Tips ya tiene 2 publicaciones ese día. Con esto la serie llega a **7 publicaciones**, cubriendo prácticamente todo agosto.

---

## 3. Propuesta de canal

Pub 12 estaba reservada para el canal **Primeros Pasos** (ruta básica de activación). El material que llegó de Esteban es contenido de personalización avanzada — más cercano a la **Fase 4 (Customización)** que a los primeros pasos. Además, el canal **Anuncios y Tips Ágiles** ya organiza contenido por hashtag de fase (`#Fase1 #Fase2…`) y ya alojó el primer contenido de Skills del proyecto (tarjeta "Skills para optimización de tokens" en Pub 4).

**Propuesta:** mover la serie de Skills (incluyendo Pub 12) al canal **Anuncios y Tips Ágiles**, con hashtags `#Skills #Fase4`. Esto responde directamente la pregunta 5 de `propuesta-de-contenidos.md`. Queda pendiente confirmarlo con Nibaldo/Jonatan.

---

## 4. Serie de contenidos propuesta — 7 publicaciones

El material de Esteban resuelve por sí mismo dos de las preguntas abiertas en `propuesta-de-contenidos.md`:
- **Pregunta 1 (¿qué Skill mostrar?):** el documento trae dos skills reales ya implementadas en la plantilla `copilot-template-gco`: `dotnet-review` y `cobol-analyzer`. Son el ejemplo que se pedía.
- **Pregunta 4 (¿existe demo o formación previa?):** sí — Capítulo 3 de la formación de marzo 2026, "Personaliza tu Copilot: Skills · Agentes · MCP · Memory".

Con eso resuelto, propongo esta secuencia — de lo más simple a lo más práctico, siguiendo la regla del proyecto:

| # | Fecha | Título propuesto | Basado en (sección del material) | Formato |
|---|-------|-------------------|-------------------------------------|---------|
| **Pub 12** | Mar 4 ago | "¿Qué es una Skill (y qué no es)?" | 1.1 Definición · 1.5 Qué NO es | Post + infografía comparativa (skill vs. prompt guardado vs. documentación pasiva) |
| **Pub 13** | Jue 6 ago | "La carpeta que le enseña a GitHub Copilot cómo lo hacen aquí" — anatomía de una skill | 1.2 Anatomía · 1.3 Ejemplo real (`dotnet-review`) · 2.1 Carga progresiva | Post + tarjeta con la estructura de carpeta y el `SKILL.md` real · **video corto viable** (ver sección 5) |
| **Pub 14** | Mar 11 ago | "El mapa completo: Skills, instructions, prompt files, agentes y MCP" | 3. Los cinco niveles de personalización | Post + infografía tipo tabla comparativa (5 niveles) |
| **Pub 15** | Jue 13 ago | "Cuándo sí y cuándo no usar una Skill" — con el ejemplo `cobol-analyzer` | 7. Cuándo usar · 8. Cuándo NO usar · 1.4 Ejemplo COBOL legacy | Post + tríptico (mismo formato que Casos de Uso Reales) |
| **Pub 16** | Jue 20 ago *(en paralelo con Pub 5, canal distinto)* | "Cómo escribir tu primera Skill: la fórmula que funciona" | 9. Cómo se escribe una buena skill | Post + infografía checklist (fórmula de la descripción + estructura del cuerpo) |
| **Pub 17** | Mar 25 ago *(en paralelo con Pub 6, canal distinto)* | "8 tareas donde una Skill ya está dando resultado" | 6. Para qué se usan — casos de uso | Post + infografía de 8 casos (grid o lista) |
| **Pub 18** | Jue 27 ago *(en paralelo con Pub 7, canal distinto)* | "Los errores que matan una Skill (y los riesgos que hay que vigilar)" | 10. Errores frecuentes · 11. Riesgos y límites | Post + tarjeta comparativa error → corrección |

**Sobre Pub 14 y la pregunta 2 de `propuesta-de-contenidos.md`** ("¿Skills, instructions o ambas?"): propongo que Pub 12 se enfoque solo en Skills (instructions ya tiene su propio post — "Memoria vs. Instrucciones", Pub 4, programado 18 ago). Pub 14 es donde sí se comparan explícitamente Skills e instructions, junto con los otros tres niveles — con eso queda cubierta la comparación sin duplicar el post de Pub 4.

**Lo que queda del material para series futuras (septiembre en adelante):** por qué existen las skills (sección 4), beneficios concretos (5), la dimensión de equipo (12), ecosistema `dotnet/skills` y `awesome-copilot` (13), preguntas frecuentes (14) y glosario (15). Con Pub 12–18 usamos 9 de las 15 secciones del material — sigue quedando margen para más adelante.

---

## 5. Video — viabilidad

Esteban mencionó video para los temas más complejos. De las 7 piezas propuestas, **Pub 13 (anatomía de una skill)** es la candidata natural: es visual (una carpeta, un archivo `SKILL.md` real) y cabe en el formato de 60-90 seg ya usado en el proyecto.

**Condición:** el material solo tiene el contenido en texto (fragmento del `SKILL.md` de `dotnet-review`). Para grabar algo real (no una recreación) haría falta conseguir una captura de pantalla del repositorio `copilot-template-gco`. Sin eso, la pieza se queda en post + tarjeta estática — sigue siendo válida, solo que sin video.

Las otras 6 piezas (definición, mapa comparativo, cuándo usar, cómo escribir una skill, casos de uso, errores y riesgos) son más conceptuales — no aportaría tanto forzar un video ahí; post + gráfica es formato correcto y más rápido de producir.

---

## 6. Piezas gráficas a producir

| Pieza | Para | Tipo |
|-------|------|------|
| Infografía "Qué es una Skill" (comparativa) | Pub 12 | Infografía 1080×1350 px |
| Tarjeta "Anatomía de una Skill" (carpeta + `SKILL.md`) | Pub 13 | Tarjeta 1080×1350 px |
| Infografía "Los 5 niveles de personalización" | Pub 14 | Infografía tabla comparativa 1080×1350 px |
| Tríptico "Cuándo usar / no usar una Skill" (portada → cuándo sí → cuándo no) | Pub 15 | card-triptico 1080×1080 px |
| Infografía checklist "Fórmula de una buena Skill" | Pub 16 | Infografía 1080×1350 px |
| Infografía "8 tareas donde ya tiene sentido una Skill" (grid o lista) | Pub 17 | Infografía 1080×1350 px |
| Tarjeta comparativa "Errores → corrección" | Pub 18 | Tarjeta 1080×1350 px |

---

## 7. Flujo de booking y agendamiento — propuesta

### 7.1 Lo acordado con Esteban (3 ago)
- Los usuarios plantean sus preguntas en un canal o foro de ayuda.
- El equipo asigna el experto más adecuado, evitando sobrecarga.
- Existe una herramienta (nombre pendiente de que Esteban lo comparta) que permite ver disponibilidad de expertos y agendar — Esteban la describió como "sencilla y rápida" de integrar.
- Yehimy propuso automatizar la recepción de preguntas con un bot.
- Meta de lanzamiento: entre agosto y septiembre.

### 7.2 Flujo propuesto, por etapas

**Etapa 1 — manual (desbloquea lo que ya está pendiente hoy):**
1. Se configura el software de agendamiento — bloqueante activo, responsable Yehimy. Herramienta por definir: `Produccion/TABLERO.md` traía a Microsoft Bookings como plan original, pero en la reunión del 3 ago Yehimy le pidió a Esteban sugerencias de herramientas — queda abierto hasta que confirme el nombre.
2. El post de Pub "Reservas 1:1" explica el servicio y enlaza directo a la reserva.
3. El usuario elige entre los expertos publicados y agenda sin intermediarios.

**Etapa 2 — con triage manual:**
1. El usuario plantea su pregunta en el canal Foro de Ayuda / AMA.
2. El equipo (Nibaldo/Raona/Pasiona) revisa y asigna el experto más adecuado según la tecnología (COBOL, .NET, DB2, PL/SQL).
3. Se comparte con el usuario el enlace de agendamiento del experto asignado.

**Etapa 3 — automatizada (objetivo de Esteban, ago-sep):**
1. Un bot recibe la pregunta en el canal de ayuda.
2. El bot sugiere o asigna automáticamente al experto según el tema.
3. El bot entrega el enlace de agendamiento del experto correspondiente, sin intervención manual del equipo.

### 7.3 Pendientes antes de poder avanzar
| Pendiente | Responsable |
|-----------|-------------|
| Nombre y alcance real de la herramienta de booking sugerida (¿reemplaza a Microsoft Bookings o es la misma?) | Esteban |
| Confirmar si la Etapa 3 (bot) se construye sobre esa misma herramienta o aparte | Esteban + Yehimy |
| Configurar el software de agendamiento (Etapa 1, ya bloqueante activo) | Yehimy |
| Lista de expertos disponibles y su disponibilidad real | Nibaldo + Guillermo |

**Propuesta para la reunión con GCO:** presentar las 3 etapas como una implementación progresiva — no depende de tener el bot listo para poder lanzar Reservas 1:1 (Etapa 1 ya es viable hoy, solo falta confirmar y configurar la herramienta de agendamiento). Esto desbloquea la publicación pendiente sin esperar a la automatización completa.

---

## 8. Próximos pasos

1. Validar con Nibaldo/Jonatan: cambio de canal de Pub 12 (sección 3) y la secuencia de las 7 publicaciones (sección 4).
2. Confirmar si se puede conseguir una captura del repo `copilot-template-gco` para el video de Pub 13.
3. Producir las piezas gráficas de la sección 6.
4. Confirmar con Esteban el nombre de la herramienta de agendamiento (¿Microsoft Bookings o una nueva?) y configurarla para desbloquear la Etapa 1 del flujo de booking (sección 7.2).
5. Dar seguimiento a Esteban sobre el nombre de la herramienta de booking y el plan del bot (Etapa 3).
