# Brief de marca — Catalana Occident × GitHub Copilot
> Referencia rápida para diseñadores y copywriters. Seguir al pie de la letra.

---

## IDENTIDAD VISUAL

### Colores

| Rol | Color | Hex |
|-----|-------|-----|
| **Rojo corporativo** · protagonista, acentos, iconos, CTA | Rojo Occident | `#DC0028` |
| **Gris texto** · logotipo, textos secundarios | Cool Gray 9 | `#828282` |
| **Naranja acento** · solo en degradado | Naranja Occident | `#FA9600` |
| **Fondo universal** · toda pieza sobre blanco | Blanco | `#FFFFFF` |
| **Titulares** · texto sobre fondo blanco | Negro suave | `#1A1A1A` |

**Degradado corporativo** (uso limitado: headers, cards de impacto, banners)
- Fórmula: `#DC0028` → `#FA9600`, 45°, solo cuando el texto encima va en blanco

### Tipografía

**Familia principal: CO (Catalana Occident)**
Disponible como `.woff` / `.ttf` (web) y `.otf` (diseño):

| Variante | Archivo | Uso |
|----------|---------|-----|
| Regular | `CO-Rg` / `GCO.otf` | Cuerpo, párrafos, etiquetas |
| Medium | `CO-Md` / `GCO-Medium.otf` | Subtítulos, énfasis moderado |
| Bold | `CO-Bd` / `GCO-Bold.otf` | Titulares, destacados |
| Italic | `CO-RgIt` / `GCO-Italic.otf` | Citas, notas aclaratorias |
| Bold Italic | `CO-BdIt` / `GCO-BoldItalic.otf` | Énfasis dentro de títulos |

**Familia secundaria: GCOSans** (mismas variantes, sin serifa)
- Usar para etiquetas de tecnología, badges, labels de interfaz.

**Fallback:** Open Sans → Arial → sans-serif genérico. Solo en caso de que CO no cargue.

**Regla:** Máximo 2 familias tipográficas por pieza.

### Iconografía

- Fuente: biblioteca icomoon de Occident (`Manual de marca/iconografía/`)
- Consultar galería visual: `galeria-iconos.html`
- Color por defecto: `#DC0028` (rojo corporativo)
- Formato: SVG inline o fuente icomoon — no PNG ni rasterizados
- Tamaño mínimo en digital: 24×24 px

### Espaciado y bordes

| Elemento | Valor |
|----------|-------|
| Padding mínimo en cards | `24px` |
| Border radius · cards | `6–8px` |
| Border radius · pills/badges | `20px` |
| Sombra máxima permitida | `0 2px 8px rgba(0,0,0,0.08)` |
| Borde izquierdo de acento | `4px sólido #DC0028` |

---

## REGLAS DE DISEÑO — QUÉ NO HACER

| ❌ Prohibido | Alternativa |
|------------|-------------|
| Fondos negros o rojos en áreas grandes | Fondo blanco + elementos de acento rojo |
| Imágenes de personas con overlay de color oscuro | Overlay blanco en alpha si se necesita |
| Más de 2 colores de acento en una sola pieza | Rojo + gris como máximo |
| Tipografías decorativas o display ajenas a la familia CO | Solo CO, GCOSans o fallbacks definidos |
| Deformar proporciones de logos o iconos | Escalar respetando aspect ratio siempre |
| El logotipo de Occident sobre fondo de color | Solo sobre blanco o con versión negativa definida |

---

## TONO DE VOZ Y COPY

### Perfil del lector
Developer del equipo de GCO. Trabaja con COBOL, .NET, DB2, PL/SQL. Lleva años en su stack. Recibe el contenido en Microsoft Teams mientras tiene código abierto. Es escéptico ante mensajes de marketing de IA.

### Los 4 principios editoriales (no negociables)

**1. De menos a más**
Empezar siempre desde lo más básico. El objetivo de la semana 1 es que abran Copilot y hagan una pregunta — no que dominen el agente. No quemar etapas.

**2. Brevedad o nada**
- Posts de Teams: máximo 150 palabras
- Tips: máximo 3 puntos por pieza
- Infografías: título + mensaje principal + 3–4 puntos
- Micro-vídeos: 60–90 segundos, sin introducción corporativa

**3. Casos reales antes que generalizaciones**
Anclar todo en el stack de GCO: COBOL, DB2, PL/SQL, .NET, Copybooks, SQLCODE, Jira, Confluence.
- ✅ "Pega tu SQLCODE en el chat y Copilot te explica qué significa"
- ❌ "La IA puede mejorar tu productividad hasta un 40%"

**4. Tono de colega, no de experto**
- ✅ "Esto te ahorra tiempo hoy"
- ✅ "Comparte un descubrimiento, no solo enseñes"
- ❌ "La IA transformará tu forma de trabajar"
- ❌ Condescendencia, tutoriales paso a paso que suenen a curso online

### Vocabulario

| Usar | Evitar |
|------|--------|
| GitHub Copilot | "la IA" como término genérico |
| Copilot Chat | "el chatbot" |
| Visual Studio | "tu IDE" (en Fase 1) |
| Canal de Teams | "plataforma", "ecosistema" |
| tienen, pueden, ustedes | tenéis, podéis, vosotros |

**Idioma:** español latinoamericano. Sin ningún castellano peninsular (tenéis, vosotros, podáis).

### Estructura de cada tipo de pieza

**Post de Teams**
```
[Emoji relevante] Titular directo (máximo 10 palabras)

Contexto en 1-2 oraciones.

Punto 1 · breve
Punto 2 · breve
Punto 3 · breve

👉 CTA claro y accionable.
```

**Brief de infografía**
```
Título: [mensaje central, máximo 8 palabras]
Subtítulo: [contexto opcional]
3-4 puntos visuales: [texto + ícono sugerido]
Nota al pie: [canal donde se publica / fase]
```

**Script de micro-vídeo**
```
Duración: [60–90 seg]
Narración: [texto completo]
Pantalla: [descripción de lo que se ve]
CTA final: [acción concreta que debe hacer el viewer]
```

---

## CONTEXTO DEL CANAL

El contenido se publica en **Microsoft Teams de GCO** — no en redes sociales públicas. El tono es interno, entre colegas. No hay necesidad de "vender" ni de headline clickbait. La meta es que la persona que lo lea piense: *"esto me sirve hoy"*.

---

## ARCHIVOS DE REFERENCIA

| Recurso | Ruta |
|---------|------|
| Fuentes OTF para diseño | `Manual de marca/CatalanaFonts/` |
| Galería de iconos | `Manual de marca/iconografía/galeria-iconos.html` |
| Logotipos y variantes | `Manual de marca/logotipo/` |
| Campañas históricas de Occident | `Conocimiento/campanas-marca_catalana.md` |
| Principios de comunicación (justificación) | `Conocimiento/principios-de-comunicacion_justificacion.md` |
| Plan de contenidos semana a semana | `Planeacion/Semana-1_primer-plan-de-contenidos/timeline-y-checklist.md` |
| Casos de uso reales para contenidos | `Planeacion/Semana-0_planeacion-del-proyecto/ejemplos_practicos_Github-Copilot.md` |
