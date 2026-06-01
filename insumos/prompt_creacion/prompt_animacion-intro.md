Aquí tienes el prompt listo para entregar a otro LLM:

---

**PROMPT: Intro animado para video corporativo GCO — Occident**

Crea una animación HTML/CSS/JS de intro para video corporativo de **3-4 segundos** con las siguientes especificaciones exactas:

**Identidad de marca (Occident/GCO):**
- Color principal: `#DC0028` (rojo corporativo) — fondo del intro
- Color texto: `#FFFFFF` blanco sobre fondo rojo
- Texto secundario: `rgba(255,255,255,0.6)` para elementos de menor jerarquía
- Tipografía: Arial Bold (sistema), ya que la fuente corporativa GCO no está disponible
- El símbolo de la marca es una **Y trifurcada** con 3 puntas redondeadas (como un tridente suavizado), color blanco

**Secuencia de animación (orden y timing):**
1. `0.2s` — Símbolo Y entra con efecto **scale** desde 0.4 a 1 con rebote (`cubic-bezier(0.34,1.56,0.64,1)`)
2. `0.7s` — Texto "Occident" sube con **fadeIn + translateY** (de 16px a 0)
3. `1.05s` — Línea divisoria blanca crece horizontalmente de 0 a 80px
4. `1.3s` — Etiqueta "GitHub Copilot · Serie formativa" aparece en **fadeIn**, tamaño 10px, letra espaciada 3px, uppercase
5. `1.55s` — Título principal "Configura tu entorno: primer paso para usar Copilot" entra con **fadeIn + translateY**
6. `1.95s` — Código de video "Video 01 · GCO_Video01_Config_Entorno_Copiloto" aparece en fadeIn, tamaño 11px, opacidad 0.55
7. `0.3s` — Barra de progreso en la parte inferior crece de 0 a 100% en 3.2 segundos (simula duración del intro)

**Requisitos técnicos:**
- HTML, CSS y JS en un solo archivo o bloque, sin dependencias externas
- Todo controlado con `setTimeout` y `style.transition` en JS puro, sin librerías
- Incluir botón "↺ Reproducir de nuevo" que resetee todos los estilos y relance la secuencia completa
- Fondo rojo `#DC0028` con `border-radius: 12px`
- Dos círculos decorativos de fondo con `rgba(255,255,255,0.04)` para dar profundidad sutil
- El símbolo SVG de la Y se construye con 3 líneas (`<line>`) y 3 círculos (`<circle>`) en blanco, `stroke-width: 8`, `stroke-linecap: round`
- Sin gradientes, sin sombras, sin efectos de blur
- Compatible con modo oscuro y claro

**Medidas y espaciado:**
- Contenedor: `min-height: 340px`, `padding: 2rem`, centrado con flexbox columna
- Símbolo: `60x60px`
- Nombre marca: `font-size: 30px`, `font-weight: 700`
- Línea divisoria: `height: 2px`, `width final: 80px`
- Título: `font-size: 19px`, `font-weight: 700`, `max-width: 360px`, `text-align: center`
- Barra progreso: `height: 3px`, pegada al borde inferior del contenedor

**Nombre del archivo de salida sugerido:** `GCO_Video01_intro.html`

---
