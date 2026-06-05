# Proceso de producción — Piezas gráficas canal Teams
> Documento interno · Referencia para producir las 8 publicaciones

---

## Opción A — Card con identidad de canal
Cada pieza lleva una marca visual que identifica el canal de origen. El lector sabe de un vistazo de dónde viene y qué tipo de contenido es. Consistente y escalable: una vez definido el sistema, cada pieza nueva es rápida de producir.

**Cuándo usarla:** audiencia con resistencia, volumen alto de piezas, poco tiempo de producción por pieza.

### Paso a paso

1. **Definir el color de canal** (se hace una sola vez)
   - Anuncios y Tips Ágiles → rojo `#DC0028` (color principal de marca)
   - Primeros Pasos → naranja `#FA9600` (acento corporativo)
   - Casos de Uso Reales → gris oscuro `#444444` (tono técnico, neutro)
   - Foro AMA → degradado corporativo (rojo → naranja)
   - Reservas 1:1 → rojo `#DC0028` con icono de calendario

2. **Crear la plantilla base en Figma** (se hace una sola vez por canal)
   - Fondo blanco
   - Franja superior de color de canal (altura: ~48px) con nombre del canal en blanco
   - Zona de contenido con padding 24px
   - Footer con logo Occident + etiqueta de fase

3. **Por cada pieza nueva**
   - Abrir la plantilla del canal correspondiente
   - Sustituir: título, cuerpo de texto, icono e imagen de apoyo
   - Ajustar la etiqueta de fase si cambia (pill rojo)
   - Exportar a PNG · 1200×628 o 1080×1080 según el brief

4. **Generar el prompt para Claude Design**
   - Usar el brief de `plan-contenidos-graficos.md` como fuente
   - Especificar: canal, color, icono, texto exacto, imagen de apoyo
   - Guardar el prompt como `prompt_claude_design_pub[N]-[slug].md` en esta carpeta

5. **Probar en Claude Design → revisar → ajustar en Figma**

6. **Aprobar y archivar**
   - La pieza aprobada se guarda en `Produccion/semana-X/graficas/exportadas/`
   - Actualizar estado en `plan-contenidos-graficos.md`

---

## Opción B — Estilo editorial tipo newsletter visual
Cada pieza tiene su propio protagonismo visual. Comparten tipografía y paleta pero no una plantilla fija. Más impacto individual, más decisiones de diseño por pieza.

**Cuándo usarla:** pocas piezas, audiencia que ya está enganchada, contenido de alto impacto puntual.

### Paso a paso

1. **Definir los tokens compartidos** (se hace una sola vez)
   - Tipografía: Georgia Bold para titulares · Arial para cuerpo
   - Paleta: `#DC0028` · `#FA9600` · `#1A1A1A` · `#828282` · `#FFFFFF`
   - Logo Occident siempre presente en footer
   - Padding mínimo: 24px

2. **Por cada pieza: definir el concepto visual único**
   - ¿Cuál es el elemento protagonista? (icono, dato, comparativa, foto, cita)
   - ¿Qué emoción busca? (sorpresa, claridad, confianza, urgencia)
   - Esto define el layout — no hay plantilla fija

3. **Generar el prompt para Claude Design**
   - Describir el concepto visual con detalle
   - Especificar layout, jerarquía, elementos y proporciones
   - Guardar como `prompt_claude_design_pub[N]-[slug].md`

4. **Probar en Claude Design → revisar → ajustar en Figma**

5. **Aprobar y archivar**
   - Mismo proceso que Opción A

---

## Comparativa rápida

| | Opción A | Opción B |
|--|----------|----------|
| Tiempo por pieza | Bajo (plantilla) | Alto (diseño libre) |
| Consistencia | Alta | Media |
| Impacto individual | Medio | Alto |
| Escalable a 8 piezas | Sí | Con esfuerzo |
| Recomendada para GCO | ✅ Sí | No en esta fase |

---

## Decisión tomada

**Opción A** para las 8 publicaciones de las semanas 1–4.
La audiencia tiene resistencia activa — la consistencia visual genera hábito y confianza antes que impacto estético.

---

## Directriz general — tono de comunicación

Todas las piezas gráficas y textos de acompañamiento deben mantener el mismo tono de comunicación del proyecto: cercano, claro, útil y sin presión. La idea es que el equipo sienta que el canal acompaña el uso de GitHub Copilot, no que exige adoptarlo de golpe.

Este tono sigue las directrices del manual de marca y la forma en que se está trabajando la campaña:
- Mensajes simples, concretos y fáciles de entender.
- Lenguaje de colega: "empieza cuando quieras", "aquí no hay prisa", "con apoyo del equipo".
- Enfoque práctico: recursos, tips y casos de uso reales.
- Evitar promesas grandilocuentes, tecnicismos innecesarios o frases que suenen obligatorias.

Referencia de tono:
> Este espacio está pensado para ayudarte a orientarte: qué canal usar, dónde encontrar cada recurso y cómo empezar sin perder tiempo.  
> El contenido se irá publicando por fases, de menos a más. Puedes avanzar a tu ritmo y volver cuando necesites consultar algo.  
> Si tienes una duda concreta, usa el canal que mejor encaje con lo que necesitas.

---

## Regla de Teams — imagen autosuficiente

En Teams, las imágenes cargadas en un post aparecen como adjunto separado del texto, no inline.
Por eso **cada pieza gráfica debe contener toda la información**: título, mensaje, CTA y branding.
El texto del post puede acompañar y dar contexto, pero la imagen no debe depender de ese texto para entenderse.
