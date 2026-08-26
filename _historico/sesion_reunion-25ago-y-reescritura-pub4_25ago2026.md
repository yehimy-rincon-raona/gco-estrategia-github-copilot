# Resumen de sesión — Reunión del 25 ago, reescritura de Pub 4 y barrido de consistencia · 25 agosto 2026
> Continúa desde: `sesion_reunion-18ago-reorganizacion-pub14-19-y-retiro-posts_18ago2026.md`

---

## Qué se completó en esta sesión

### 1 · Acta de la reunión de seguimiento del 25 ago

`Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_25-08-26.md`

Primera reunión con el equipo de Nibaldo de vuelta de vacaciones. Asistieron Nibaldo, Salva (Raona), Jonatan y Óscar (GCO). Duración 24 min 44 s.

**Se escribió contra la transcripción literal** (`Reuniones/[GCO] Transcripcion_reunion_semanal-25-08-26.docx`), no contra las notas generadas por IA. Esas notas invierten la conclusión del tema principal: presentan como correcto que la Memoria "guarda preferencias de forma persistente", cuando en la reunión se estableció justo lo contrario. Escribir el acta desde ellas habría producido un ajuste equivocado.

### 2 · Pub 4 resuelta de punta a punta

Carpeta: `Produccion/semana-2_08-12jun(pub-03-04-05)/pub-04_jue-11jun_(dia-05_mar-28-jul)/`

- **Post reescrito y publicado** el mismo día en Teams Raona, editando el post existente: `post-una-vez-o-siempre_pub4.md`.
- **Pieza gráfica producida** por Yehimy en Figma y publicada con el post.
- **`canal-anuncios-tips_pub4.md` limpiado** — se le quitaron los briefs históricos que convivían con los vigentes.
- **Carpeta `deprecados/` organizada** con 8 archivos, cada uno con su motivo y fecha.

### 3 · Documento de preguntas para la reunión del 26 ago

`Seguimiento/solicitudes-nibaldo_26ago2026.md` — reunión de vídeos con Salva y el equipo de Nibaldo. Sigue la serie de `solicitudes-nibaldo_23jun2026.md`. Incluye checklist de decisiones y, en cada duda, qué pasa según la respuesta.

### 4 · Barrido de consistencia del proyecto

Nueve inconsistencias detectadas, **cinco corregidas**:

| Qué estaba mal | Dónde |
|---|---|
| La tabla de vídeos mostraba 04, 05 y 06 como "pendientes de edición" cuando están publicados desde agosto | `Produccion/TABLERO.md` |
| Pub 13, 14, 15, 16 y 17 figuraban como "sin producir" en la tabla de detalle, contradiciendo la tabla de arriba del mismo archivo | `Produccion/TABLERO.md` |
| Pub 3 apuntaba a la carpeta equivocada y figuraba como S3 viviendo en `semana-2` | `Produccion/TABLERO.md` |
| La matriz de componentes no describía lo que se produce (tríptico vertical sin numeración, comparativa más alta) | `Configuraciones/matriz-componentes-graficos.csv` |
| El estado del proyecto se había quedado en el 21 ago | `_historico/ESTADO.md` |

### 5 · Barrido de la grafía del nombre de Jonatan

8 correcciones en 3 archivos. La fuente de reintroducción son las **transcripciones automáticas de Teams y las actas generadas por IA** — la conversión de voz a texto escribe "Jonathan" aunque el nombre de pantalla diga "Jonatan". Es la segunda vez que se hace este barrido (el primero, 15 jul, sobre 17 archivos). Guardado como regla permanente en memoria.

---

## Estado de dependencias externas

### Reunión del 26 ago — Salva y equipo de Nibaldo (vídeos)

| Qué | Bloquea |
|---|---|
| Alcance, casos de uso y fecha de grabación de los vídeos nuevos | El trabajo de la semana |
| ¿`dotnet-review` y `cobol-analyzer` son de las 32 skills? | Cierre de Pub 15 para GCO |
| ¿La Memoria de GitHub Copilot y el "cajón" de Pub 3 son la misma cosa? | Reescritura del hilo `14a` y si Memoria entra como tema propio |
| URL de Confluence con la instalación | Post de soporte de cada vídeo |
| ¿"gco-dev-suite" = "Copilot Dev Suite"? | Nomenclatura de toda la serie |
| Los tres pendientes de facturación | Piezas ya publicadas |
| ¿El séptimo vídeo entra en la tanda? | Alcance |
| ¿Quién revisa la coherencia técnica de los vídeos 05 y 06? | Su paso a GCO |

**Contexto de tres de esas filas, detectado en esta sesión:**

- **Dos nombres vivos para el mismo producto.** El post del Vídeo 04, publicado en Raona el 14 ago, lo titula **"Copilot Dev Suite"**. Toda la serie Pub 12-19 lo llama **"gco-dev-suite"**. Marcado como pendiente sin resolver desde el 11 ago dentro del propio post de Pub 12.
- **Hay 6 vídeos publicados y un séptimo aprobado que nunca se produjo.** 01-03 en Teams GCO (16 jul), 04-06 de prueba en Teams Raona (3 y 14 ago). El séptimo — *"Primera conversación con GitHub Copilot Chat + completado inline"*, Opción A elegida por Jonatan el 15 jul — tiene guion y sigue como casilla sin marcar en `Seguimiento/matriz-correcciones-videos_15jul2026.md`. **Los `.mp4` no están en el proyecto** (excluidos por peso en `.gitignore`); la evidencia son las capturas de `Produccion/imagenes_teams/` y `Produccion/elimina-post-teams-gco/`.
- **Tres pendientes de facturación llevaban dos meses enterrados.** Plan de licencias de GCO · qué modelos concretos incluye · modo auto en Visual Studio. Estaban solo dentro de `ajuste-facturacion-tokens_pub4.md`, sin llegar nunca a la lista de bloqueantes. El segundo es la razón por la que las piezas dicen "ligeros/avanzados" y no nombres de modelo.

### Con GCO

| Qué | Responsable | Estado |
|---|---|---|
| Comunicado a Informática sobre el subcanal de Reservas | Jonatan | Al regreso de vacaciones del equipo de GCO |
| Fecha de la sesión AMA | Nibaldo + Guillermo | Bloqueada desde junio |
| Reactivación de la cadencia en Teams GCO | — | Previsto semana del 14-18 sep, en orden de creación |

---

## Decisiones tomadas

### Pub 4 se corrige en origen, no se parchea

El 18 ago se acordó ampliar el post de Memoria con un hilo anidado, porque ya estaba publicado y no se podía tocar. **Ya no lo está** — se retiró de Teams GCO el 18 ago. Así que se reescribe el post. Republicar un post equivocado seguido de una corrección enseña primero el error.

Consecuencia: los hilos `4-a` y `4-b` quedan deprecados. Existían solo para parchear.

### El eje del post pasa de propiedad a duración

| | Antes | Ahora |
|---|---|---|
| Título | Memoria vs. Instrucciones | **Una vez o siempre** |
| Eje | Tuyo vs. del equipo | **Lo que dura la conversación vs. lo que dura siempre** |
| Contenedores | Copilot Memory · `copilot-instructions.md` | El cajón de la conversación · `.github/copilot-instructions.md` |

**"Copilot Memory" sale de la pieza.** El equipo estableció que no es editable y no tiene un sitio donde vivir; si un desarrollador no puede hacer nada con ello, no merece una columna en una comparativa — y ponerlo ahí generaba exactamente la pregunta sin respuesta de Óscar (*"¿y dónde modifico eso?"*).

**El bloque de `copilot-instructions.md` se conserva íntegro.** Nibaldo reconfirmó las cuatro reglas de GCO en la reunión.

**Se difiere de lo acordado en la reunión:** allí se plantearon **tres focos** (ventana de contexto · Memoria · Instructions); se produjeron **dos**. Razón: si la Memoria es el contexto de la conversación actual, es lo mismo que el "cajón" que ya explicó Pub 3 — el primer y el segundo foco eran el mismo bajo dos nombres. Queda anotado en el acta como nota fechada.

### Convención de la carpeta `deprecados/`

Vigente para todas las publicaciones desde el 25 ago 2026:

- Lo que ya no se usa **no se borra**: baja a `deprecados/` dentro de la carpeta de su publicación.
- Cada `.md` lleva **en su cabecera** por qué se deprecó, con fecha, archivo original y sustituto.
- Las imágenes no pueden llevar cabecera: se explican en el `README.md` de la carpeta y en el `.md` con el que salieron.
- Los archivos deprecados desde esa fecha llevan el prefijo `deprecado_`. Excepción: los que otros documentos citan por su nombre original.
- **Lo que no sea de esa publicación no baja a deprecados — se mueve a donde se vaya a leer** (criterio de Yehimy). Precedente: tres pendientes con Nibaldo llevaban desde el 21 jun enterrados en un documento de Pub 4; se movieron a los bloqueantes del TABLERO.

Primer caso completo: Pub 4, 8 archivos.

### Decisión que queda abierta: el post de Memoria salió distinto en cada tenant

- **Teams GCO:** post raíz independiente, 28/7 a las 8:00, una hora después de Pub 4, sin respuestas.
- **Teams Raona:** dentro del hilo del post principal, 11 jun.

Los lectores de GCO lo vieron suelto, sin el post que lo contextualiza. **Eso explica el diagnóstico de Óscar del 18 ago.** Al republicar hay que decidir explícitamente cuál de las dos formas se usa.

Este hallazgo resolvió de paso el bloqueante *"¿se auto-publicó el post completo de Pub 4 o solo la tarjeta?"* — se auto-publicaron los dos posts.

---

## Próximas tareas pendientes

### De Yehimy, inmediatas

1. **Guardar el PNG exportado** como `pub-04_s-2_tarjeta-comparativa_una-vez-o-siempre.png` en la carpeta de Pub 4.
2. **Reemplazar la captura** `imagenes_teams/01_anuncios-y-tips-agiles/05-pub-04_anuncios-y-tips-agiles.png` — quedó obsoleta al editar el post.
3. **Avisar en la reunión** de que Pub 4 ya está reescrita y publicada en Raona, para que la revisen.

### Después de la reunión del 26 ago

4. **Reescribir el hilo `14a`.** Publicado en Raona el 21 ago con su tarjeta. Dos problemas: remite a `4-a`, que quedó deprecado, y se apoya en el eje *"¿esto es mío o del equipo?"*, abandonado en Pub 4. Cómo quede depende de la respuesta sobre Memoria y el cajón.
5. **Decidir si Memoria entra como tema propio.** Si es lo mismo que el cajón, no entra. Si es distinto, sería un bloque nuevo tomando Pub 20 — la serie Dev Suite cierra en 19, pero eso cerraba la serie, no el proyecto.
6. **Construir los vídeos** con el equipo de Nibaldo.

### Inconsistencias detectadas y no corregidas

7. **`CLAUDE.md` dice que el proyecto está en junio, semana 1 de ejecución.** Lista Pub 1 y 2 como último hito. Es el archivo que cualquier IA lee primero.
8. **Nombres de carpeta de publicación con cuatro formatos distintos.** Además Pub 10 y 11 llevan fecha de septiembre cuando la cola dice octubre.
9. **`semana-3` no tiene publicaciones** — Pub 3-5 viven en `semana-2` y Pub 6-7 en `semana-4`.
10. **Erratas dentro de piezas ya producidas:** "Github Copilot" en Pub 12 portada y Pub 13 1/2 · cuatro erratas en Pub 11 panel 3 · "backend" en Pub 10 panel 2.

### Arrastradas

11. Producir Pub 18-19 (Agentes) — briefs listos, sin piezas.
12. Publicar Pub 12, que sigue como borrador cargado en Raona sin enviar.
13. Infografía de acompañamiento del Vídeo 04.
14. Microsoft Bookings — y confirmar si la dinámica del subcanal de Reservas lo sustituye.

---

## Archivos clave del momento

| Archivo | Para qué |
|---|---|
| `Seguimiento/solicitudes-nibaldo_26ago2026.md` | **Lo primero que hay que abrir mañana** — las preguntas de la reunión |
| `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_25-08-26.md` | Qué se acordó ayer y con qué palabras exactas |
| `Produccion/TABLERO.md` | Estado real de producción, ya al día |
| `Produccion/semana-2.../pub-04.../post-una-vez-o-siempre_pub4.md` | El post reescrito y su brief |
| `Produccion/semana-2.../pub-04.../deprecados/README.md` | Modelo de la convención de deprecados, para replicarla en otras pubs |
| `Produccion/semana-8.../pub-14.../canal-anuncios-tips_pub14-a.md` | Lleva el aviso de reescritura pendiente |
| `Seguimiento/base-reunion-seguimiento.md` | Documento vivo — actualizar antes de la próxima reunión de seguimiento |
