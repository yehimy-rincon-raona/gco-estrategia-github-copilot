# Nombre del video: Primeros pasos — Píldora complementaria
## Instalación y acceso a GitHub Copilot en Visual Studio Code

---

## Nota de producción — leer antes de generar la voz

Este documento cubre el guion de voz en off para el **segmento de Visual Studio Code que se incluye en el Vídeo 02 (Primeros pasos)**. Complementa el guion principal del vídeo (`pildoras-agiles_primeros-pasos-y-skills.md`), que está centrado en Visual Studio.

**Duración total del segmento: 27 segundos** — es la duración real de la grabación de pantalla disponible (ajustado el 15 jul en edición). La voz en off es **un solo párrafo continuo** (~76 palabras ≈ 26–27 s con la voz de Clipchamp) que se genera como un único audio y se coloca en 0:00.

**Insumos de este segmento:**
- Audio original: `insumos/gco-grab-original_instalacion-vscode.mp3` (~1 min)
- Transcripción literal: `insumos/transcripcion_grabacion-instalacion-vscode.md`
- Capturas de la grabación: `insumos/screenshots_grabacion/` (imágenes `01` a `07`)

**Pronunciación de términos en inglés:** esta voz no lee bien las palabras en inglés. En la voz en off, los términos problemáticos se escriben **fonéticamente** (no cambia el texto en pantalla ni los títulos). Convención: **"Copilot" → "Copáilot"**. Si la voz pronuncia mal "Code" u otra palabra, escribirla fonéticamente igual (ej. "Code" → "coud") antes de regenerar.

> ✅ **Nota (15 jul):** por la observación de GCO sobre el video de autenticación, la voz en off **no menciona el sufijo `_GCO`** (misma decisión aplicada en `v01_configuracion-entorno/pill-02_para-grabacion_autenticacion-vs-vscode.md`, Sección 3). El sufijo solo se ve en pantalla como parte del usuario, que va difuminado.

**Datos sensibles — difuminar en edición:**
- Nombre de usuario de GitHub **`victor-gisbert_GCO`** y avatar, visibles en la pantalla de autorización del navegador (captura `05`).
- Iniciales de la cuenta (círculo "VG") en el Portal de Empresa (capturas `01`, `02`).
- Carpetas y repositorios recientes visibles en Visual Studio Code: panel Explorer y listas de recientes (VSNET, arq-portal-chatbot, DESA, ghcop-testmcp, mcp-sharepoint, gco-dev-suite) y cualquier ruta con el usuario, tipo `C:\Users\PE2782\...` (capturas `03`, `04`, `07`).
- Nombres de las organizaciones de GitHub en la pantalla de single sign-on (captura `06`) — valorar con el equipo si se difuminan o se muestran.

---

## Voz en off — texto único para Clipchamp (copiar y pegar)

Generar con **Clipchamp**, voz **Alessio Dragon HD Latest**, como **un solo audio continuo** colocado en **0:00**. Copiar el párrafo completo tal cual (sin el recuadro, sin comillas). Sugerencia de nombre del archivo: `v02-vscode-voz-completa`.

```
Visual Studio Code ya viene instalado en tu equipo, no necesitas descargar nada. Ábrelo desde el buscador de Windows. Abre el chat de GitHub Copáilot e inicia sesión: Continuar con GitHub, y confirma tu cuenta corporativa. Autoriza el acceso a las organizaciones que te muestre y confirma con Continuar. Esto solo pasa la primera vez. Y listo: el chat queda activo y puedes elegir el modelo para trabajar. GitHub Copáilot, ahora también en Visual Studio Code.
```

**Si el audio queda más largo que los 27 segundos**, recortar en este orden y regenerar:
1. Quitar "Esto solo pasa la primera vez."
2. Si aún falta, quitar la frase final "GitHub Copáilot, ahora también en Visual Studio Code."

---

## Sincronización imagen ↔ voz (referencia para edición)

La voz es un audio único; esta tabla es solo para calzar la imagen con lo que se va diciendo.

| Tiempo | La voz va diciendo… | Qué se ve en la grabación | Texto en pantalla |
|--------|--------------------|---------------------------|-------------------|
| 0:00 – 0:07 | "Visual Studio Code ya viene instalado… Ábrelo desde el buscador de Windows." | Escritorio y buscador de Windows; apertura de la aplicación (capturas `01`–`03`) | **"Visual Studio Code → ya instalado en tu equipo"** |
| 0:07 – 0:13 | "Abre el chat… Continuar con GitHub, y confirma tu cuenta corporativa." | Ventana "Sign in to use GitHub Copilot" → **Continue with GitHub** (`04`) → navegador "Authorize Visual Studio Code" → **Continue** (`05`, difuminar `victor-gisbert_GCO`) | **"Chat → Continue with GitHub"** |
| 0:13 – 0:20 | "Autoriza el acceso a las organizaciones… Esto solo pasa la primera vez." | "Single sign-on to your organizations" → **Authorize** → **Continue** (`06`) | **"Authorize → Continue · Solo la primera vez"** |
| 0:20 – 0:27 | "Y listo: el chat queda activo… ahora también en Visual Studio Code." | Panel de chat activo y selector de modelos desplegado (`07`), difuminar rutas recientes | **"GitHub Copilot activo en Visual Studio Code"** |

---

## Recomendaciones para edición

- Duración total: **27 segundos** — la de la grabación. No estirar clips: si el audio no cabe, recortar texto (orden de recorte arriba), no la imagen.
- Hacia 0:07 la grabación pasa del editor al navegador — la voz ya lo acompaña; si el corte se siente brusco, una transición rápida.
- Los clics de autorización (Continue → Authorize → Continue) deben verse en pantalla, no solo mencionarse en el audio.
- Este segmento asume que el developer ya vio la autenticación en Visual Studio (Vídeo 01, píldora 02). No repetir esa parte: aquí solo el flujo propio de Visual Studio Code.
- Difuminar **siempre** el usuario `victor-gisbert_GCO`, las iniciales "VG", las rutas con usuario y los repositorios recientes.
