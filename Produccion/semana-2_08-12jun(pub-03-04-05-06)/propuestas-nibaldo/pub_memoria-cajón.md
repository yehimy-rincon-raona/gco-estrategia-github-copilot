# Pub — Memoria y ventana de contexto
> Canal: Primeros Pasos con GitHub Copilot
> Tipo: Tip de uso · Fase 2 · Entorno Nativo
> Fuente validada: sesiones Nibaldo · prop_memoria-copilot.md
> Fecha: pendiente asignación en tablero

---

## Post para Teams

---

🧠 **GitHub Copilot no tiene memoria permanente. Tiene un cajón.**

Cada vez que abres el chat, ese cajón empieza con las instrucciones base de GitHub Copilot y desde ahí se va llenando: el documento activo, los archivos abiertos, el historial de la conversación, el código seleccionado.

Cuando el cajón se llena, GitHub Copilot empieza a mezclar cosas o responder mal. No está fallando — está trabajando con demasiado dentro.

**Antes de preguntar, revisa:**

1. ¿El documento activo corresponde a tu pregunta? Si no, quítalo.
2. ¿Necesitas todo el proyecto o solo este método o archivo?
3. ¿El hilo ya lleva muchas preguntas? Abre uno nuevo.

Para tareas con varios programas COBOL: uno por uno, no todos en el mismo hilo.

👉 Menos contexto, pero el correcto — mejores respuestas.

---

## Brief de infografía (Figma)

**Tipo de pieza:** diagrama del cajón — qué entra, qué pasa cuando se llena, cómo resolver

**Formato:** 1080×1350 px

| Elemento | Texto |
|----------|-------|
| Franja canal | 🧠 Primeros Pasos con GitHub Copilot |
| Pill fase | Fase 2 · Entorno Nativo |
| Título | GitHub Copilot trabaja con un cajón, no con memoria infinita |
| Subtítulo | Lo que metes determina la calidad de la respuesta |
| Bloque izquierdo | **Qué entra al cajón** — document activo · historial · archivos · selección · instrucciones |
| Bloque central | **Cuando se llena** → respuestas mezcladas · invenciones · lentitud |
| Bloque derecho — solución | Abrir hilo nuevo · acotar referencias · quitar lo que no aporta |
| CTA | 👉 Revisa qué tiene GitHub Copilot antes de preguntar |
| Footer | Estrategia de Adopción · 2026 |

**Specs de diseño:**
- Fondo: blanco
- Acento: `#DC0028` en los encabezados de bloque
- Metáfora visual: ícono contenedor/cajón (no usar ilustraciones de cerebro ni IA)
- Bloque problema: fondo gris muy claro (`#F5F5F5`)
- Bloque solución: acento rojo con texto blanco
- Tipografía: GCO Sans para texto running · CO para el título
- Los tres conceptos de "Qué entra" deben aparecer como etiquetas o chips apilados dentro del cajón

---

## Notas de publicación

- **Tono:** coloquial. "Se pone tonto" es la expresión que usó Nibaldo — si se incluye en el texto, mantenerla.
- **No incluir** la lista completa de 10 mecanismos del cajón en el post. Solo los 3 que el developer puede controlar hoy: documento activo, archivos abiertos, hilo.
- **Caso COBOL:** mantenerlo. Es el ejemplo más directo y universal para el equipo de GCO.
- **Pendiente confirmar** con Nibaldo: si `copilot-instructions.md` funciona igual en Visual Studio que en VS Code (no afecta este post, pero sí el contenido del cajón completo).