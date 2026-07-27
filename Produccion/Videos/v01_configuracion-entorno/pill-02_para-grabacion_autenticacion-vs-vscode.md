# Nombre del video: Configuración del entorno — Píldora 02
## Autenticación en Visual Studio y Visual Studio Code

---

## Nota de producción — leer antes de generar la voz

Este documento cubre únicamente el guion de voz en off para las secciones 3 y 4 de la grabación de pantalla existente (archivos de Nibaldo en `_grabaciones/`). El editor sincroniza la voz con el video de pantalla en postproducción.

**Cómo generar la voz:**
La voz en off se genera con **Clipchamp**, usando la voz **Alessio Dragon HD Latest**. Copiar únicamente el texto del bloque de voz en off (sin comillas ni encabezados) y pegarlo en el campo de texto de Clipchamp. Si alguna frase queda con ritmo extraño, dividirla en dos bloques separados.

**Datos sensibles:**
En el video de pantalla pueden aparecer datos del usuario de Nibaldo. Difuminar en edición: nombre de usuario de GitHub, correo corporativo, o cualquier identificador visible durante el flujo de autenticación en Visual Studio y Visual Studio Code.

---

### Sección 3 · Autenticación en Visual Studio

> ✅ **CORRECCIÓN APLICADA AL GUION (15 julio 2026):** una persona de GCO (no fue Jonatan; nombre por confirmar) hizo una observación sobre la parte de la voz en off que mencionaba **"guion bajo GCO"**. Decisión de Yehimy (15 jul): **se quita la mención al sufijo** y se reemplaza por una frase neutra de cuenta corporativa. El audio de esta sección debe **regenerarse y sobreescribirse** manteniendo la duración actual de **27.13 segundos** — no se cambia el tiempo ni la sincronización del video ya montado. El texto completo listo para Clipchamp está al **final de este documento**.

**Voz en off (versión corregida — es la que se regenera):**
> "Con las herramientas instaladas, el siguiente paso es autenticar tu cuenta en cada entorno.
>
> En Visual Studio verás un ícono de cuenta en la barra superior. Si tiene un punto oscuro, todavía no está autenticado. Haz clic, agrega tu cuenta de GitHub e inicia sesión con tu cuenta corporativa. Con eso se activa el acceso de la organización.
>
> Cuando el ícono esté verde, GitHub Copilot está activo. Abre el chat y ya puedes usarlo."

**Qué mostrar en pantalla:**
Fragmento de la grabación de Nibaldo correspondiente a la sección 3. Debe verse el ícono de cuenta con el punto oscuro, el flujo completo de agregar la cuenta de GitHub, el cambio del ícono a verde y el panel de GitHub Copilot Chat abierto y listo.

> **Nota de edición (15 jul):** la voz corregida ya no menciona el sufijo. Si el montaje actual lleva el caption `_GCO` en pantalla, valorar quitarlo para que imagen y voz queden coherentes — solo si es posible sin re-sincronizar; el cambio prioritario es únicamente el audio.

---

### Sección 4 · Autenticación en Visual Studio Code

**Voz en off:**
> "En Visual Studio Code el proceso es el mismo. Hay un ícono al fondo de la pantalla que dice Iniciar sesión. Selecciona GitHub, completa el flujo, y el panel de chat queda disponible."

**Qué mostrar en pantalla:**
Fragmento de la grabación de Nibaldo correspondiente a la sección 4. Debe verse el ícono de sesión en la barra inferior de Visual Studio Code, el flujo de inicio de sesión con GitHub y el panel de GitHub Copilot Chat disponible al terminar.

---

## REGENERAR AUDIO — Sección 3 · Autenticación en Visual Studio (corrección 15 jul 2026)

**Audio fuente (el que se reemplaza):** `Produccion/Videos/v02_primeros-pasos/insumos/video02-autenticacion-en-vs.mp3` — transcrito y verificado el 15 jul. La voz habla de **0:00 a 0:26.6** (duración de referencia: **27.13 s**). Solo se sobreescribe el audio; **no se cambia el tiempo** ni la sincronización del video ya montado.

**Transcripción del audio actual con tiempos (verificada):**

| Tiempo | Lo que dice el audio actual |
|--------|------------------------------|
| 0:00.0 – 0:05.0 | "Con las herramientas instaladas, el siguiente paso es autenticar tu cuenta en cada entorno." |
| 0:05.0 – 0:08.6 | "En Visual Studio verás un ícono de cuenta en la barra superior." |
| 0:08.6 – 0:12.1 | "Si tiene un punto oscuro, todavía no está autenticado." |
| **0:12.1 – 0:20.5** | **"Haz clic, agrega tu cuenta de GitHub y escribe tu nombre de usuario seguido de guion bajo GCO. Eso activa el inicio de sesión corporativo."** ← tramo que se cambia |
| 0:20.5 – 0:24.5 | "Cuando el ícono esté verde, GitHub Copilot está activo." |
| 0:24.5 – 0:26.6 | "Abre el chat y ya puedes usarlo." |

El tramo corregido (0:12.1 – 0:20.5) tenía 25 palabras; el reemplazo tiene 23 con el mismo ritmo, así que el resto de las frases cae en los mismos tiempos.

**Texto para copiar y pegar en la IA — un solo bloque, voz Alessio Dragon HD Latest:**

```
Con las herramientas instaladas, el siguiente paso es autenticar tu cuenta en cada entorno. En Visual Studio verás un ícono de cuenta en la barra superior. Si tiene un punto oscuro, todavía no está autenticado. Haz clic, agrega tu cuenta de GitHub e inicia sesión con tu cuenta corporativa. Con eso se activa el acceso de la organización. Cuando el ícono esté verde, GitHub Copilot está activo. Abre el chat y ya puedes usarlo.
```

**Verificación al generar:**
- La voz debe terminar cerca de **0:26.6** (referencia 27.13 s). Si queda más corta por poco, está bien — se rellena con silencio. Si queda más larga, quitar "Con eso se activa el acceso de la organización." y regenerar.
- Si alguna palabra suena mal pronunciada (ej. "Copilot"), escribirla fonéticamente ("Copáilot") solo en el texto pegado y regenerar — el guion conserva la escritura real.

**Qué cambió respecto al audio original (referencia):**
- Antes: "…agrega tu cuenta de GitHub **y escribe tu nombre de usuario seguido de guion bajo GCO. Eso activa el inicio de sesión corporativo**."
- Ahora: "…agrega tu cuenta de GitHub **e inicia sesión con tu cuenta corporativa. Con eso se activa el acceso de la organización**."
- El resto del texto es idéntico, palabra por palabra, al audio actual.

---
