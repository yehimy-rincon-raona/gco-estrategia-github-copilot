# Convención de nombres — piezas gráficas

> Vigente desde el 25 de agosto de 2026. Sustituye a la nomenclatura anterior (`día-semana-tipo_publicación`), que se abandonó porque el número inicial no era el de la publicación sino el del día, y eso hacía imposible ubicar una pieza sin abrir la carpeta.

---

## La fórmula

```
pub-N_s-N_componente_titulo-de-la-pieza.extension
```

| Parte | Qué es | Ejemplo |
|-------|--------|---------|
| `pub-N` | Número de la publicación, con dos dígitos. Los hilos llevan su letra: `pub-14a` | `pub-16` |
| `s-N` | Número de la semana, tomado de la carpeta de semana | `s-9` |
| `componente` | Nombre del componente según `matriz-componentes-graficos.csv` | `triptico` |
| `titulo-de-la-pieza` | **El título que aparece en el encabezado, dentro de la pieza** — en minúsculas, sin tildes ni signos, separado por guiones | `las-llaves-de-los-sistemas` |

**Ejemplo completo:**
```
pub-16_s-9_triptico_1-las-llaves-de-los-sistemas.png
```

---

## Vocabulario de componente

Se toma de `Configuraciones/matriz-componentes-graficos.csv`, en minúsculas y sin tildes:

`triptico` · `tarjeta-minimalista` · `tarjeta-comparativa` · `diptico` · `infografia` · `banner`

---

## Piezas de varios paneles

Cuando una pieza tiene varios paneles (trípticos, dípticos, series de tarjetas), **el número de panel va delante del título**, porque el orden del carrusel es información que se pierde si no está en el nombre:

```
pub-16_s-9_triptico_1-las-llaves-de-los-sistemas.png
pub-16_s-9_triptico_2-cuando-algo-falla-no-hay-un-solo-sitio-donde-mirar.png
pub-16_s-9_triptico_3-cinco-llaves-que-abren-cada-sistema-de-verdad-en-vivo.png
```

**Si los paneles comparten el mismo título** — pasa cuando el título es de la publicación entera y lo que cambia es el subtítulo de sección — el título del archivo es **el subtítulo de la sección**, que es lo que de verdad distingue un panel de otro. Precedente: Pub 15, cuyas 3 tarjetas se titulan todas "La carpeta que le enseña a GitHub Copilot cómo lo hacen aquí":

```
pub-15_s-8_tarjeta-minimalista_1-anatomia-de-una-skill.png
pub-15_s-8_tarjeta-minimalista_2-el-cerebro-de-la-skill-metadata.png
pub-15_s-8_tarjeta-minimalista_3-rendimiento-y-carga-progresiva.png
```

---

## Reglas de escritura del título

- Todo en **minúsculas**, palabras separadas por **guiones**.
- **Sin tildes ni eñes**: `anos` no `años`, `disene` no `diseñe`, `gestion` no `gestión`. Los caracteres acentuados en nombres de archivo dan problemas al sincronizar entre Windows, OneDrive y Git.
- **Sin signos de puntuación**: fuera `¿ ? ¡ ! . , : ;`. `tengo-que-instalar-visual-studio`, no `¿tengo-que-instalar-visual-studio?`.
- **Fiel al título de la pieza**, no una interpretación. Si el título es largo, se recorta por el final dejando la parte que identifica — nunca se reescribe.
- Si una pieza **no tiene título en el encabezado** (pasa en algunos paneles de cuerpo), se usa la frase dominante del panel. Precedente: `pub-02_s-1_triptico_2-visual-studio-ya-esta-instalado`.

---

## Qué NO entra en esta convención

- **Las capturas de Teams** (`Produccion/imagenes_teams/`, `pub-01_screenshots_de-banners-de-bienvenida/`). Son evidencia de lo publicado, no piezas gráficas. Conservan su nombre descriptivo.
- Cualquier archivo de `_avoid/`.

---

## Al crear una pieza nueva

1. Mirar el encabezado de la pieza y copiar el título tal cual.
2. Tomar `pub-N` de la carpeta de publicación y `s-N` de la carpeta de semana — **no del nombre de otro archivo**, que es de donde venía el error anterior.
3. Elegir el componente en la matriz.
4. Registrar el nombre en la tabla "Piezas gráficas de esta publicación" del brief, para que el documento y el archivo digan lo mismo.
