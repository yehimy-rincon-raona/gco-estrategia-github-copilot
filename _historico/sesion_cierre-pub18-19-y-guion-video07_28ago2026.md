# Resumen de sesión — Cierre de Pub 18-19 y arranque de los vídeos de la Dev Suite · 28 agosto 2026
> Continúa desde: `sesion_reunion-25ago-y-reescritura-pub4_25ago2026.md`

## Qué se completó en esta sesión

**La serie gco-dev-suite queda terminada de punta a punta (Pub 12-19).** Pub 18 y 19 pasaron de "propuesta de contenido" a listas para publicar, con post final, brief cerrado y piezas gráficas producidas, revisadas y corregidas.

- `Produccion/semana-10_fechas-pendiente(pub-18-19)/pub-18_mar-sem10-pendiente/canal-anuncios-tips_pub18.md` — post final, brief con especificaciones Figma, y las tres piezas del tríptico vertical:
  - `pub-18_s-10_triptico_1-los-3-agentes-que-deciden-ejecutan-y-validan.png`
  - `pub-18_s-10_triptico_2-uno-habla-contigo-los-otros-dos-cuando-hace-falta.png`
  - `pub-18_s-10_triptico_3-el-agente-decide-la-skill-explica-el-conector-busca.png`
- `Produccion/semana-10_fechas-pendiente(pub-18-19)/pub-19_jue-sem10-pendiente/canal-anuncios-tips_pub19.md` — post final, brief cerrado y `pub-19_s-10_infografia_el-flujo-de-un-cambio-6-pasos.jpg`.

**Revisión de las cuatro piezas contra los briefs, en dos rondas.** La primera exportación llevaba tres errores de dato en la infografía —"en cascada" mal colocado, el validador descrito como que comprueba "requisitos" en vez de coherencia entre capas, y "el sistema" como actor genérico—, cinco apariciones de "el desarrollador" y un highlight que faltaba en el panel 2 del tríptico. Todo corregido y verificado contra las piezas reexportadas a las 16:01.

**Arranca la fase de vídeos** (`Produccion/Videos/v07-08_gco-dev-suite/`):

- `planteamiento-grabacion_videos-07-08.md` — qué necesita cada vídeo, qué material existente se reutiliza, requisitos de captura y lista de comprobación. Creado por la mañana y **cotejado por la tarde** contra la grabación que llegó del equipo de Nibaldo.
- `transcripciones/transcripcion_video_gco-dev-suite.md` — transcripción de la grabación, formateada con el skill `formato-md-legible`: 50 correcciones de captura registradas, 18 pasajes marcados `[?]`, y copia del original crudo en `.bak.md`.
- `resumenes/que-aporta-esta-grabacion.md` — lectura de proyecto sobre la grabación: qué aporta, qué confirma, qué contradice, y el contraste con `notebooklm.md`.
- `v07-pill_para-grabacion_que-es-la-dev-suite.md` — **guion del Vídeo 07**, seis secciones, 2:45-3:00, montado sobre las 51 capturas numeradas de la grabación.

**`Produccion/TABLERO.md` actualizado** con todo lo anterior.

**Regla nueva en `Configuraciones/convencion-nombres-piezas-graficas.md`:** el nombre del grupo de Figma no viaja al nombre del archivo — se renombra al término de la matriz después de exportar.

## Estado de dependencias externas

**Todo lo crítico depende de Nibaldo, y apareció un bloqueante nuevo que es el más urgente:**

- **Las cifras de la suite no cuadran, y están impresas en piezas ya producidas.** La grabación y su barra de estado muestran **39 skills y 5 servidores MCP**, y enumera conectores que incluyen Kibana, SQL, SharePoint y Playwright. El material del 6 de agosto —base de Pub 12 a 19— dice **3 agentes, 32 skills y 5 conectores** con el navegador como quinto. Las cifras 3, 32 y 5 están en las piezas gráficas de Pub 14, 16, 18 y 19. Hasta que se aclare, ninguna pieza ni guion nuevo debe llevar cifras.
- **La grabación del Vídeo 08 no existe.** No hay ni un plano de un agente recibiendo una petición, devolviendo un plan y esperando aprobación. Es lo único que no se puede sustituir con material existente. La petición está desglosada en ocho momentos en el planteamiento.
- **URL de Confluence** — pedida el 18 y el 25 de agosto, sigue sin llegar. Bloquea el post de soporte de cada vídeo.
- **El nombre del producto** — sin respuesta desde el 11 de agosto, pero ahora hay evidencia suficiente para cerrarlo con una confirmación: el guion del Vídeo 04 (línea 24) ya trae la formulación, y las capturas la respaldan — el portal y la barra de estado dicen "Copilot Dev Suite" / "DevSuite", y la carpeta instalada es `gco-dev-suite`.
- `dotnet-review` / `cobol-analyzer` entre las 32 skills reales — bloquea el cierre de Pub 15.
- Plan de licencias y qué modelos concretos incluye — abierto desde el 21 de junio.
- **El entorno.** La guía de la suite se anuncia como "VS Code & Copilot CLI". Si la suite no funciona en el Visual Studio que usa GCO de forma nativa, un vídeo autoformativo tiene que decirlo en los primeros treinta segundos.

**Del lado de GCO:** Jonatan envía el correo a Informática sobre el subcanal de Reservas al regreso de vacaciones.

**Del lado de Yehimy:** falta decir en qué canal del Teams de Raona se publican las previsualizaciones. `Configuraciones/config_canal-interno.md` documenta tres canales —General, Avances del proyecto, Producción y materiales— y ninguno es "Anuncios y Tips", pero Pub 13 a 17 ya se publicaron ahí de prueba.

## Decisiones tomadas

- **El título de Pub 18 dice "contigo", no "por ti".** "Por ti" se lee como "en tu lugar" y choca con el argumento del bloque, que es el contrario. **Criterio que sale de aquí y aplica a toda la serie:** la suite nunca se describe como que hace cosas en lugar de la persona; trabaja contigo, propone y espera.
- **Las etiquetas `Rol 1 - Función` del panel 2 se quedan.** Se planteó quitarlas por ser nomenclatura interna del brief, pero enumeran y dejan claro de un vistazo que los agentes son tres. El precedente del 21 de agosto (`HILO 14-a`) no aplica: aquel código no significaba nada para quien lee.
- **El segmento de componente en el nombre de archivo es `triptico`, no `Card`.** Manda la convención sobre lo que exporta Figma. Registrado como regla general.
- **El criterio de familia del tríptico queda cerrado:** portada con eyebrow y sin píldora de fase, paneles 2 y 3 con isótipo y píldora — replicando lo que se hizo en Pub 16.
- **El bloque "Componentes en acción" de Pub 19 se conserva**, con la terminología alineada a Pub 18. En la publicación que cierra la serie, recordar la regla funciona como cierre, no como repetición.
- **La voz en off del Vídeo 07 no dice ninguna cifra**, mientras la discrepancia siga abierta. La pantalla muestra lo que muestra; la narración habla de "conectores y herramientas" sin contarlos.
- **Reparto de vídeos propuesto:** 07 = qué es la suite y cómo se activa; 08 = los agentes en acción. La sección de credenciales del 07 va condensada a 45 segundos porque el detalle ya es el Vídeo 04. **Si se decide que el 07 absorbe al 04, esa sección debe crecer.** Consecuencia pendiente de confirmar: el vídeo de Primeros Pasos aprobado el 15 de julio pasaría a ser el 09.
- **`notebooklm.md` no se usa como fuente literal para guiones.** Resuelve dos marcas `[?]` de la transcripción (`squirrer` → Squirrel, `girasch` → `jira_search`), pero afirma que la consulta "recupera con éxito las incidencias asignadas" cuando en la grabación eso no llega a verse: el audio se corta antes. Sirve para orientarse, no para citar.
- **Las marcas `[?]` de la transcripción no se resuelven con fuentes externas.** Ese documento registra lo que se oye; las resoluciones se anotan en `que-aporta-esta-grabacion.md`.

## Próximas tareas pendientes

| # | Tarea | Responsable |
|---|-------|-------------|
| 1 | Publicar Pub 18 y 19 en Teams Raona y guardar las capturas como `pendiente-pub-18_...` y `pendiente-pub-19_...` en `Produccion/imagenes_teams/01_anuncios-y-tips-agiles/` | Yehimy |
| 2 | Llevar a la reunión del martes 1 sep las cinco preguntas de `que-aporta-esta-grabacion.md`: las cifras, el nombre, la grabación del 08, el solapamiento con el 04 y los permisos de Confluence | Yehimy |
| 3 | Pedir al equipo de Nibaldo la grabación del Vídeo 08, con la lista de ocho momentos del planteamiento | Yehimy + Nibaldo |
| 4 | Decidir con qué cierra el post de Pub 19 — enlace al Vídeo 08, subcanal de Reservas, o cierre seco | Yehimy |
| 5 | Documentar en `Configuraciones/config_canal-interno.md` el canal de Teams Raona donde se publican las previsualizaciones | Yehimy |
| 6 | Actualizar la fila `Infografia` de `Configuraciones/matriz-componentes-graficos.csv` — van dos piezas seguidas fuera de medida (Pub 17 y Pub 19) | Yehimy |
| 7 | Corregir el punto final que falta al paso 6 de la infografía de Pub 19, si hay otro reexport | Yehimy |
| 8 | Confirmar la corrección `Hola, Jain` → `Hola, Jamie` de la transcripción — es la única que no se apoya en el propio documento | Yehimy |

## Archivos clave del momento

- **Guion pendiente de validar:** `Produccion/Videos/v07-08_gco-dev-suite/v07-pill_para-grabacion_que-es-la-dev-suite.md`
- **Para la reunión del martes:** `Produccion/Videos/v07-08_gco-dev-suite/resumenes/que-aporta-esta-grabacion.md` y `planteamiento-grabacion_videos-07-08.md`
- **Listas para publicar en Raona:** las dos carpetas de `Produccion/semana-10_fechas-pendiente(pub-18-19)/`
- **Estado de producción:** `Produccion/TABLERO.md`
- **Fuente de contenido de la serie:** `Conocimiento/temas_mes-agosto/información-equipo-raona-gco-devsuite.md` — es la que entra en conflicto con las cifras de la grabación
- **Acta que abrió esta fase:** `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_25-08-26.md`
