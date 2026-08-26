# Deprecados — Pub 4

> Aquí vive todo lo que **ya no se usa** en Pub 4 pero **no se borra**. Nada de esta carpeta va a Teams.
>
> **Regla:** cada archivo `.md` lleva en su cabecera por qué se deprecó y con qué fecha. Las imágenes no pueden llevar cabecera, así que se explican en este índice y en el `.md` con el que salieron.
>
> **Nombres:** lo deprecado el 25 ago 2026 en adelante lleva el prefijo `deprecado_` y conserva el resto de su nombre original. Excepciones: los dos `.png` anteriores a esa fecha y `ajuste-facturacion-tokens_pub4.md`, que conservan su nombre de origen porque otros documentos los citan por él.

---

## Documentos

| Archivo | Deprecado | Por qué, en una línea |
|---|---|---|
| `deprecado_post-memoria-vs-instrucciones_mar-28jul.md` | 25 ago 2026 | Es el post que Óscar señaló. Llama "permanente" a la Memoria y dice que "guarda tus preferencias" — desmentido en la reunión del 25 ago |
| `deprecado_canal-anuncios-tips_pub4-a.md` | 25 ago 2026 | Hilo-parche para un post que ya no está publicado, y arrastra la misma premisa equivocada |
| `deprecado_canal-anuncios-tips_pub4-b.md` | 25 ago 2026 | Se escribió la mañana del 25 ago, antes de la reunión que lo desmintió el mismo día |
| `deprecado_briefs-historicos_pub4.md` | 25 ago 2026 | Briefs con terminología de facturación anterior al 21 jun, más el brief de la tarjeta de Memoria. Se sacaron del md de Pub 4 para dejarlo limpio |
| `ajuste-facturacion-tokens_pub4.md` | 25 ago 2026 | Registro del cambio de facturación del 21 jun. **El cambio ya está aplicado**; se conserva por trazabilidad. Los 3 pendientes con Nibaldo que contenía se movieron a los bloqueantes del TABLERO |

Las **tres primeras filas** quedan sustituidas por `post-una-vez-o-siempre_pub4.md` (en la carpeta de Pub 4). Las dos últimas no tienen sustituto: son registro histórico, y su contenido vigente ya está dentro de `canal-anuncios-tips_pub4.md`.

---

## Imágenes

| Imagen | Deprecada | Salió con | Por qué |
|---|---|---|---|
| `deprecado_pub-04_s-2_tarjeta-comparativa_memoria-vs-instrucciones.png` | 25 ago 2026 | `deprecado_post-memoria-vs-instrucciones_mar-28jul.md` | La columna izquierda entera está mal: *"Copilot Memory · Individual · **Guarda** tus preferencias de respuesta, estilo de código personal y atajos propios. Solo tú lo ves."* Y el subtítulo dice *"contexto **permanente**"*. Además imprime `sin credenciales hardcodeadas` — anglicismo, contra la regla de Jonatan. **La columna derecha era correcta y se reaprovecha** en la pieza nueva |
| `05-1-S2-Infografia_pub4.png` | 21 jun 2026 | Brief `1-S2-card_pub4`, hoy en `deprecado_briefs-historicos_pub4.md` | Versión anterior de "Optimización de Tokens y Modelos". Imprime los multiplicadores **`0x`** y **`1x \| 3x`**, la etiqueta **"(Gratis)"** y los nombres de modelo GPT-4.1 / 5 mini y Claude / Gemini. El modelo de multiplicadores quedó legacy el 1 jun 2026 y los modelos concretos de GCO nunca se confirmaron. Sustituida por `pub-04_s-2_tarjeta-comparativa_optimizacion-de-tokens-y-modelos.png` |
| `05-2-S2-card_pub4.png` | 21 jun 2026 | Brief `2-S2-card_pub4` | Versión anterior de "Diseñe la solución…". Dice **"modelo Premium"** y **"uno Estándar"**, términos legacy del mismo cambio de facturación. Sustituida por `pub-04_s-2_tarjeta-minimalista_disene-la-solucion-con-un-modelo-avanzado.png` |

> El detalle completo del cambio de facturación del 21 jun está en `ajuste-facturacion-tokens_pub4.md`, en la carpeta de Pub 4.
