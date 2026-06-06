# Canal Primeros Pasos — Pub 3 · Memoria y ventana de contexto
> Canal: Primeros Pasos con GitHub Copilot · Fecha: Martes 9 junio · Tipo: Tip de uso
> Estado: listo para revisión Nibaldo / Guillermo
> Fuente: sesiones Nibaldo · prop_memoria-copilot.md

---

## Objetivo de esta publicación

Explicar a los developers cómo funciona la "memoria" de GitHub Copilot para que dejen de culpar a la herramienta cuando responde mal, y empiecen a gestionar el contexto que le dan.

El concepto clave: la ventana de contexto es un cajón que se llena — y cuando se llena, GitHub Copilot se equivoca. La solución está en las manos del developer.

---

## Post listo para Teams

**Asunto:** `🧠 GitHub Copilot no tiene memoria permanente. Tiene un cajón.`

---

🧠 **"GitHub Copilot se pone tonto a mitad de la tarea"**

Cada vez que abres el chat, ese cajón empieza con las instrucciones base de GitHub Copilot y se va llenando: el documento activo, los archivos abiertos, el historial de la conversación, el código seleccionado.

Cuando el cajón se llena, GitHub Copilot empieza a mezclar cosas o responder mal. No está fallando — tiene demasiado dentro.

**Antes de preguntar, revisa:**

1. ¿El documento activo corresponde a tu pregunta? Si no, quítalo.
2. ¿Necesitas todo el proyecto o solo este método o archivo?
3. ¿El hilo ya lleva muchas preguntas? Abre uno nuevo.

Para tareas con varios programas COBOL: uno por uno, no todos en el mismo hilo.

👉 Menos contexto, pero el correcto — mejores respuestas.

---

## Tono de comunicación

El mensaje va directo a un síntoma que ya vivieron: "GitHub Copilot se pone tonto a mitad de la tarea". En vez de decirles que hacen algo mal, se les explica el mecanismo — y la solución es simple.

Claves:
- "Cajón" es la metáfora de Nibaldo. Mantenerla: es visual y no-técnica.
- El caso COBOL (uno por uno) es el ejemplo más aplicable al equipo de GCO.
- El tono es "te explico por qué pasa", no "estás haciendo algo mal".

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Metáfora del cajón y ventana de contexto | Sesiones Nibaldo G2M, G3M, G5M, G6M · Sesión 1 |
| Lista de qué entra al cajón | `resumen_nibaldo-uso-de-la-memoria.md` §2 |
| "Se marea / se pone tonto" | G2M Sesión 1 · G3M Sesión 1 · G6M Sesión 1 |
| Caso COBOL — uno por uno | G6M Sesión 2 |
| Solución: abrir hilo nuevo | G3M, G6M Sesión 1 |
| Prop base | `prop_memoria-copilot.md` |

---

## Infografía / pieza gráfica

**Tipo de pieza:** diagrama del cajón — qué entra, qué pasa cuando se llena, cómo resolver

### Estructura visual

| Elemento | Texto |
|----------|-------|
| Franja canal | 🧠 Primeros Pasos con GitHub Copilot |
| Pill fase | Fase 2 · Entorno Nativo |
| Título | GitHub Copilot trabaja con un cajón, no con memoria infinita |
| Subtítulo | Lo que metes determina la calidad de la respuesta |
| Bloque izquierdo | **Qué entra al cajón** — documento activo · historial · archivos abiertos · selección de código · instrucciones del equipo |
| Bloque central | **Cuando se llena** → respuestas mezcladas · invenciones · lentitud |
| Bloque derecho | **Solución** → abrir hilo nuevo · acotar referencias · quitar lo que no aporta |
| CTA | 👉 Revisa qué tiene GitHub Copilot antes de preguntar |
| Footer | Estrategia de Adopción · 2026 |

### Especificaciones Figma

- **Formato:** 1080×1350 px
- **Fondo:** blanco
- **Acento:** `#DC0028` en encabezados de bloque y título
- **Bloque problema** ("cuando se llena"): fondo gris claro `#F5F5F5`, texto negro
- **Bloque solución:** fondo `#DC0028`, texto blanco
- **Metáfora visual:** ícono contenedor / caja / cajón — no usar cerebro ni íconos de IA genérica
- **Los ítems de "qué entra"** aparecen como chips o etiquetas apiladas dentro del cajón
- **Tipografía:** CO para el título · GCO Sans para texto running