# Brief de infografía — Pub 2 · Activa GitHub Copilot en Visual Studio
> Archivo gráfico: `S1-Infografia_paso-a-paso.jpg`
> Canal: Primeros Pasos con GitHub Copilot · Fecha: Jueves 5 junio
> Herramienta de diseño: Figma
> Uso: adjunta al post de Teams · funciona de forma autónoma

---

## Concepto

La infografía muestra **lo que el developer necesita verificar antes de escribir su primer prompt en GitHub Copilot dentro de Visual Studio**. No es una guía de instalación — Visual Studio ya está en la máquina. Es una guía de activación y comprobación.

Tono visual: claro, limpio, técnico sin ser intimidante. Numerado y sin texto innecesario.

---

## Textos de la infografía

### Franja de canal
> 🪡 Primeros Pasos con GitHub Copilot

### Pill de fase
> Fase 1 · Concienciación

### Título principal
> **Activa GitHub Copilot en Visual Studio**

### Subtítulo
> Lo que necesitas antes de escribir tu primer prompt

---

### Bloque introductorio — antes del paso 1

> **Visual Studio ya está instalado en tu ordenador corporativo.**
> El icono está en el escritorio. Doble clic y se abre. No necesitas descargarlo ni instalarlo.

> **¿No tienes la licencia activa?**
> Ve a **My Profile de Microsoft** → menú lateral → 2 clics → "Solicitar acceso". El equipo lo aprueba en ~40 minutos y la licencia llega sola a tu Visual Studio.

Estilo visual: franja con fondo `#F2F2F2`, borde izquierdo `#DC0028`, icono ℹ️ al inicio de cada item. Tipografía regular, sin número de paso.

---

### Pasos (5 bloques numerados)

| # | Título del paso | Descripción breve | Icono sugerido |
|---|----------------|-------------------|----------------|
| 1 | **Abre Visual Studio** | Doble clic en el icono del escritorio. Si no lo ves, búscalo en el menú de inicio escribiendo "Visual Studio". No necesitas instalar nada — ya está en tu máquina | 💻 ordenador / escritorio |
| 2 | **¿Necesitas instalar algo más?** | Git, actualizaciones de VS o GitHub Copilot están en **Portal de Empresa** — el aplicativo corporativo disponible en tu ordenador | 🏢 portal / aplicativo |
| 3 | **Vincula tu cuenta corporativa** | En la esquina superior derecha del IDE verás tu avatar. Haz clic → comprueba que aparece tu correo corporativo. Si ves una cuenta personal, cierra sesión y vuelve a entrar con la cuenta de GCO | 👤 usuario / cuenta |
| 4 | **Abre GitHub Copilot Chat** | Si vas a ejecutar comandos o scripts, comprueba que usas el perfil adecuado. Cuando aplique, valida `PowerShell 7` para evitar errores por diferencias entre versiones. Comando de referencia: `$PSVersionTable.PSVersion` | 💬 chat / terminal |
| 5 | **Dale contexto a Copilot** | Prepara el archivo `copilot-instructions.md` dentro de la carpeta `.github`. Define reglas básicas del equipo: idioma de respuesta, estilo de documentación, convenciones de código, criterios técnicos del proyecto. **Contexto claro = mejores respuestas.** | 💡 contexto / instrucciones |

---

### Nota al pie (dentro de la infografía)
> ¿No sabes cómo abrir el terminal en Visual Studio? Menú → Ver → Terminal.

### Footer
> Estrategia de Adopción · 2026

---

## Especificaciones visuales para Figma

### Estructura del layout
- **Formato:** vertical · proporción recomendada 1080 × 1350 px (Instagram/Teams compatible) o 1080 × 1920 px si se quiere más espacio
- **Distribución:** cabecera (franja + pill + título + subtítulo) · bloque introductorio (2 items) · bloque de 5 pasos en columna · nota al pie · footer

### Cabecera
- Franja de canal: fondo `#DC0028` · texto blanco · icono 🪡 a la izquierda · tipografía bold
- Pill de fase: fondo gris claro `#F2F2F2` · texto `#DC0028` · bordes redondeados
- Título: tipografía principal bold · tamaño grande · color negro `#1A1A1A`
- Subtítulo: tipografía regular · tamaño medio · color gris `#555555`
- Fondo de la cabecera: blanco

### Bloque introductorio
- Fondo: `#F2F2F2` · borde izquierdo `#DC0028` · 4px de grosor
- Icono ℹ️ al inicio de cada item
- Tipografía regular · sin numeración · separación entre los 2 items

### Pasos
- Numeración: círculo `#DC0028` · número blanco · tamaño prominente
- Título del paso: tipografía bold · negro
- Descripción: tipografía regular · gris oscuro
- Fondo de cada paso: blanco con separador sutil entre pasos
- Icono: pequeño, alineado a la derecha o al inicio del bloque (a definir en Figma)

### Nota al pie
- Fondo: gris muy claro `#F7F7F7`
- Texto: gris medio · icono ℹ️ al inicio
- Tipografía: regular · tamaño pequeño

### Footer
- Texto: gris · tamaño pequeño · alineado a la izquierda o centrado
- Puede incluir logo GCO / Raona si aplica

### Tipografía
- Usar la fuente definida en el design system de Occident cuando esté disponible
- Fallback: Inter o Segoe UI