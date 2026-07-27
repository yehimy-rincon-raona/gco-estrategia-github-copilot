# Configuración estándar de exportación de videos — DaVinci Resolve

> Estándar del proyecto para exportar **todas** las píldoras y videos de adopción de GitHub Copilot.
> Destino de los videos: Teams / SharePoint (tenant GCO y canal colaborativo), así que la prioridad es **compatibilidad y peso liviano**, no calidad de posproducción.
> Definido el 15 julio 2026 (a raíz del export del segmento de Visual Studio Code, que con códec APV estimaba 2.16 GB).

---

## Ajustes de renderización (Custom Export)

### Pestaña Video

| Ajuste | Valor estándar | Por qué |
|--------|----------------|---------|
| Renderizar | Un clip | Un solo archivo de salida |
| Exportar video | ✓ Activado | — |
| Formato | **MP4** | Compatible con Teams, SharePoint y cualquier equipo |
| Códec | **H.264** | El estándar universal de reproducción. Nunca usar APV, ProRes ni DNxHR para entregas — son códecs de posproducción y generan archivos de gigas |
| Tipo / perfil | El que aparece por defecto con H.264 (4:2:0, 8 bits) | La grabación de pantalla no necesita 10-bit ni 4:2:2 |
| Optimización de red | ✓ **Activada** | Permite que el video empiece a reproducirse mientras carga en Teams/SharePoint |
| Resolución | **Timeline Resolution (1920 × 1080)** | La de la línea de tiempo |
| Frecuencia de imagen | Igual a la línea de tiempo | No cambiarla en el export |
| Calidad | Automática – **Alta** (o restringir a ~10,000 kb/s) | Calidad visualmente idéntica para pantalla grabada, con peso de decenas de MB |

### Pestaña Audio

| Ajuste | Valor estándar |
|--------|----------------|
| Exportar audio | ✓ Activado |
| Códec | **AAC** |
| Bitrate | **192 – 320 kb/s** |

---

## Verificación rápida antes de darle a renderizar

1. **Códec dice H.264** y el tamaño estimado bajó a decenas de MB (si dice cientos de MB o GB, el códec está mal).
2. **Optimización de red activada.**
3. Difuminados aplicados (usuarios, correos, rutas, tokens) — revisar el mapa de datos sensibles del guion del video.
4. Audio sincronizado y sin cortes al inicio/final.

## Después de exportar

- El MP4 exportado **no se sube al repositorio** — es un archivo pesado. Su destino es `_avoid/` o directamente el SharePoint/Teams donde se publica (regla de la carpeta `_avoid/` en `CLAUDE.md`).
- Registrar el estado del video en `Produccion/TABLERO.md`.

---

> **Sugerencia para no repetir la configuración:** en DaVinci Resolve, una vez configurado todo, guardar el preset con el botón de los tres puntos (⋯) del panel de renderización → "Save as New Preset" con el nombre **`GCO-Teams-H264`**. En los siguientes exports solo se selecciona el preset.
