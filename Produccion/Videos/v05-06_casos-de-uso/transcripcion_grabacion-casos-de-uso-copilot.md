# Transcripción corregida — Casos de uso reales con GitHub Copilot (.NET · GAN · COBOL)

> **Grabación:** entrevista sobre casos de uso de GitHub Copilot en .NET
> **Fecha:** 22 de junio de 2026
> **Entrevistador:** Víctor Gisbert Climent
> **Desarrollador:** Luis De la Fuente Velado (GCO)

---

## Sobre esta versión

Esta es la **transcripción completa, no un resumen**. Se conserva todo lo dicho, turno por turno. Las correcciones aplicadas son solo de dos tipos:

1. **Palabras mal transcritas por el transcriptor automático**, corregidas y verificadas contra las capturas de la grabación:

| Mal transcrito | Correcto |
|---|---|
| Kifax · Xifas · XFAS · Kifas · esquifas · ifax · equifaz | **Equifax** |
| Cobble · cobo · SEOBOL · coboles | **COBOL / COBOLs** |
| Gun · Gan | **GAN** |
| punet · punto net · p*** net | **.NET** |
| Jason · mesón | **JSON** |
| Yira · Gira | **Jira** |
| gris (el que "nunca se limpiaba") | **grid** |
| radio butón · radi botón · radiado | **radio button** |
| backen · bacend / fronten | **backend / frontend** |
| muy F8 | **UTF-8** |
| jacatón | **hackathon** |
| Alasan | **Atlassian** |
| plorite | **Playwright** |
| SMS score | **SME Score** |
| sonet · GPT 54 | **Sonnet · GPT 5.4** |
| SQL Optimice | **SQL Optimize** |
| escara | **SCARA** (el COBOL SCARA56C) |
| imágenesadas · exrajesen | **imágenes escaneadas · extrajesen** |

2. **Limpieza de forma para legibilidad**: se quitaron los "eh" y las palabras duplicadas por tartamudeo ("que que", "y una y una"), y se corrigió puntuación. **No se eliminó ninguna frase ni idea.**

Los pasajes que no se pudieron descifrar con certeza quedan **[entre corchetes]** tal como sonaron — no se inventó su significado. Los hablantes dicen "Copilot" a secas en la conversación; se transcribe tal cual (se refieren a **GitHub Copilot**).

Los encabezados de sección son solo ayudas de navegación — no existen en el audio.

---

## 1. Introducción — método de trabajo y contexto

**Entrevistador:** Vale, pues cuéntame un poco, Luis, en qué te ha ayudado en .NET.

**Luis:** Te enseño diferentes casos, ¿vale? Porque yo he cogido casos en los cuales yo tenía una incidencia y tenía un documento de incidencia, tenía el código, etcétera, y las diferentes posibilidades que la herramienta me ha podido dar. O ya enfocado, cuando ya tenía un backend específico, un frontend específico y una gestión que quería realizar, pues también cómo me ha ayudado. Vale, te voy a compartir, ¿vale? Y además también te enseño lo que te comenté el otro día.

Vale, vale, vale. Esto lo que me permite hacer es recuperar todas mis sesiones de Copilot.

**Entrevistador:** Simplemente esto te ha ayudado, Copilot, lógicamente, como te puedes suponer. Sí.

**Luis:** Vale, vale. Y vamos a gestionar cosas. Mira, por ejemplo, que estaba... porque he hecho una pequeña modificación hace un momento, ¿vale? Vamos a trabajar con algo que sea solo de backend, por ejemplo, de backend, de frontend. Vale, vale. Vamos a ver, por ejemplo, lo que te comentaba del tema de incidencia. Yo, la forma de trabajar normalmente, es que tengo una carpeta que es la carpeta Proyectos, y en la carpeta Proyectos voy creando diferentes carpetas y le meto el código que yo considero que tiene que revisar, porque si no, muchas veces el problema que hay es que se lía mucho buscando información, buscando en rutas que ya le he pedido antes buscar y cosas de esas.

## 2. Caso 1 · Incidencia desde PDF (.NET + COBOL)

**Luis:** Vale, yo aquí lo que tenía — que te lo puedo enseñar porque todavía lo tengo por aquí — esta que sería Incidencia. Vale, pues a mí me pasaron un documento donde yo tenía esto. Esto es una pantalla de una operativa en la cual han rellenado una serie de datos. Van cambiando el valor del combo para elegir una figura diferente. Y bueno, pues aquí sale la información, ¿vale? También le pasé... le dije que me extrajesen las imágenes de la incidencia, y me las sacó él del PDF. Vale, vale. Pero bueno, si vamos a ver qué es lo que yo le he pedido, es decir: revisa el PDF de la incidencia, analízalo y genérame un documento de incidencia con la causa y posible solución. Te dejo el código en las carpetas GAN y COBOL. Yo lo que aquí le dejé directamente es toda la operativa de backend y frontend, o sea, .NET, y además de eso le dejé los COBOLs asociados a esas operativas.

**Entrevistador:** Okay.

**Luis:** Vale. Pues nada, él se puso a hacer un razonamiento: te leo el PDF, contiene imágenes escaneadas — lo que hizo fue extraer las imágenes, que es lo que te he enseñado —. Y bueno, pues fue leyendo y sigue leyendo hasta que llegó al punto en el cual ya tiene suficiente contexto y dice: "Vale, pues te voy a revisar, ¿vale? Te paso la operativa, se llama Actualización de Valoraciones. Por ejemplo, para este siniestro, cuando se cambia en el combo una opción y la cambias a otra, pues ocurre esto. Además, la figura del tomador no se selecciona" — que es uno de los problemas que había en la incidencia — "y si cambia el valor del perjudicado, pues tal. Estas son las imágenes que podríamos extraer" — eso no lo he traído, ¿vale? —. Y me generó un informe, que es este que aparece aquí, en incidencia.md. Primero me lo generó en inglés, y le dije: "No, no, genéramelo en español". Y me lo generó en español, y aquí está el documento.

Pues nada, el problema que había es que por defecto se estaban duplicando las garantías. Cuando yo seleccionaba en el combo, lo que ocurría es que se iban juntando más garantías al grid que estaba sacando, y como cuando cambiaba de combo para seleccionar — lo que antes decía — del asegurado y el perjudicado, pues el grid nunca se limpiaba. Pues claro, es decir, se estaban acumulando las garantías de la otra figura más las de esta figura, etcétera, y la paginación no se reseteaba cuando cambiabas, el combo no se limpiaba cuando hacías la asignación, etcétera, ¿vale? Y bueno, pues aquí me decía la posible solución: que tenía que hacer limpieza en el backend, además de que en el COBOL tenía que, cuando se hacía esto, vaciarlo, y bueno, verificar explícitamente la información, y nada.

**Entrevistador:** O sea, que de una tirada, .NET, todo junto.

**Luis:** Exactamente. Y en un momento determinado me dijo... Oye, necesitaba en una pantalla posterior decir: "Oye, que yo le estoy pasando la información, me está cargando los datos con el teléfono, pero los datos del teléfono me están llegando así, con el punto punto, y debería ser un número sin puntos". Vale, él buscó y dice: "Oye, pues no tengo este COBOL que se está llamando desde esta operativa de GAN". Pues vale, yo se lo dejé y se puso a revisar. "Te he dejado la copia del SCARA también para que hagas la [redar]." Vale, tiene todo lo que necesita. Y entonces ya se puso a hacer un loop y a hacer el cambio, y al final pues terminó modificando, desde una incidencia que era .NET, ¿vale?, además del tema de la limpieza de los grids y del cambio de combo — que se haga la limpieza y demás —, pues también me corrigió el problema de la asignación del dato, y me corrigió en el COBOL que, si venía el dato con caracteres extraños, los limpiase y me lo devolviese de forma tal. Con lo cual ya quedan sin puntos, alineados y demás.

Vale, luego te enseño esto, que esto tiene que ver con el hackathon, pero bueno, esto no tiene que ver con la incidencia. Eso vale. Eso, por ejemplo, sí — eso sería, por ejemplo, una de las primeras incidencias que yo le... Vamos a buscar otro. Cualquiera, me da lo mismo.

## 3. Caso 2 · Radio button en GAN (JavaScript)

**Luis:** Este, por ejemplo: problema de un radio button. Tenía aquí — tengo en Defensa Gestión, en esta ruta — un problema con un formulario. Yo doy de alta, graba, y cuando recargan la página me cambia el radio button del tipo — de si es defensa o reclamación —, provocando que al cambiar el radio button cambien otros datos de la página. El problema estaba en que daba un radio button, se mantenían unos datos, otros no se mantenían, y demás. Vale, se pone a localizar este... Es decir, bueno, al principio yo lo hacía así, aunque ahora, para cosas de estas, le pongo el autopilot para que no me pida los permisos.

**Entrevistador:** Muy bien hecho. Si no...

**Luis:** Porque si no, pues [Carma] está continuamente con los PowerShell, ¿vale? Y nada, pues se pone, tal. Es decir, me hacen una pregunta — la respuesta fue muy tonta: el formulario es que se llamaba "formulario"; por eso es formulario, porque se llamaba así en la pantalla en este caso, ¿vale? —. Y se puso a revisar, ¿vale? Y entonces ya vio, en la parte de JavaScript de ese formulario — en este caso, de un .NET —, que al pulsar el alta, el radio button calculaba una variable, que era el [flux], pero que no se guardaba ni se reinyectaba, con lo cual él no sabía qué valor estaba manteniendo cada vez que yo hacía el cambio en la parte del radio button. Es decir, cuando ya vuelve, en este caso, del backend, la vista formulario solo recarga rejillas y la variable tampoco la devuelve, con lo cual todo eso se perdía.

¿Qué me recomendaba? Lo que me recomendaba es mantener una variable en formato D — que es para cuando está viajando, para saber que se está disparando, que está yendo a modo defensa — o una R en el caso de que sea de reclamación, y que solo esto se cargase cuando fuese el inicio de la aplicación, ¿no?, cuando tuviese modificaciones, futuras recargas, en definitiva. Vale, pues nada, se puso a ajustar, se hizo el JavaScript y tocó el JavaScript — porque en GAN todos trabajamos... los JavaScript siempre están en las carpetas temporales del propio GAN — y ya hizo la validación, hizo el cambio, y bien, funcionó perfectamente.

**Entrevistador:** ¿GAN no se toca aquí, o sí? Quiero decir...

**Luis:** Sí, claro, claro. Sí, sí. Esto es un JavaScript de un GAN.

**Entrevistador:** Claro, es que yo sé que hay gente que dice que ha intentado hacer cosas de GAN, modificaciones, y les han saltado un montón de errores, porque como que GAN viene dado, arquitectura...

## 4. Caso 3 · Generación de una operativa GAN completa

**Luis:** Sí, y no. No sé si lo tengo aquí, ¿vale? Sí. Es decir, mira, yo hace tiempo hice una aplicación que es esta, que es una aplicación que tiene mucho negocio por debajo, y lo único que hace esta aplicación es: tú coges un fichero de log — por ejemplo, este del STAR —, te carga todo el fichero de log y todos los COBOLs que se están llamando. Pues nada, coges la fecha y dice: pues las peticiones que se han realizado. Y ahora dices: "Vale, el STAR 253". STAR 253: esto va a las rutas del DFS donde están los COBOLs, lee el COBOL y se trae lo que es la copy, la estructura de entrada. Y nada, yo simplemente ahora le digo "parsear", y entonces ya sé lo que ese COBOL ha recibido de una petición de producción, ¿vale? Esto es una aplicación de Windows. Todo esto tiene mucho negocio por debajo: la lectura, el parseo, el no sé qué.

Vale, ¿qué hice yo? Yo lo que hice para esto fue... no sé si la tengo por aquí. Sí, la tengo por aquí. Dices: "Vale, pues extráeme todo lo que es negocio y genérame un backend de este formulario" — porque estaba todo embebido en ese formulario, ¿no?, con una clase y poco más; no tiene mucho más —. Vale, pues esto lo tengo aquí. Vale, ¿pues qué hice yo? Vale, pues nada, no pasa nada. Llegué y le puse... — al final, "poner contexto" significa que... no fue en este, fue en el de arriba; entonces, en este no sé en cuál fue; bueno, da igual —. Al final, lo que yo hice fue... ¿No haces GAN? No, no haces GAN porque no sabes hacerlo directamente, ¿eh? Con lo cual...

**Entrevistador:** No, a mí me decían: "No, es que yo toco algo de GAN y luego me da un error de XML y no se me ve la vista en el Visual Studio". Y entonces, todo el mundo que ha tocado algo de GAN, todo el mundo me ha dicho lo mismo. Entonces...

**Luis:** Sí, a ver, sí, no. Eso es como todo. Es decir, esta operativa de GAN está hecha completamente por la IA. Solo he tenido que hacer dos ajustes mínimos. ¿Por qué? Porque cuando yo le dije "genérame un backend", le puse una carpeta donde había a lo mejor 30 o 40 BE con código y BE de COBOL, y dice: "Utiliza esto como contexto". Y entonces [me sorprendió] y me hizo un backend, efectivamente, y con el [Gaído en el truco de esto], ¿no? Y en el G... Exactamente. Bueno, a ver si se puede ver, pero bueno. Y en el backend me ha hecho tres cuartas partes de lo mismo. Es decir, el frontend: yo le puse una carpeta que tenía 30 o 40 GANs y dice: "Genérame una operativa de GAN con la misma estructura que tiene cualquiera de todos estos CS, y los únicos controles que puedes utilizar son los que hay aquí". Y me generó esta operativa de GAN, que es operativa, es decir, funciona perfectamente. Solo tuve que hacer un apaño... [por la también generada por la esta me la hizo de la entera], ¿no? Aquí yo solo tuve, tal: me puso todos los nombres, me los tal, y me generó todo el XML y la estructura. Esto es...

**Entrevistador:** Que poderse, se puede.

**Luis:** Se puede, si le das el contexto suficiente para que sepa cómo hacerlo. Es que al final es eso.

## 5. Caso 4 · Combos interrelacionados y recálculo de situación (.NET / WCF)

**Luis:** Vale, más cosas que me ha podido hacer. Vale, pues vamos a ver más cosas que me ha podido hacer. Esto es... me corrigió el tema del este... Vale, mira, aquí el tema del debug, que esto fue el del otro día, ¿vale? Aquí tengo una mezcla de una operativa de GAN con muchos JavaScript, y tiene muchos combos la aplicación, en la cual... mira, te lo puedo enseñar aquí. O sea, porque GAN como tal es .NET.

**Entrevistador:** Sí, es .NET. Vale. GAN es WCF: Windows Communication Foundation. Eso es .NET.

**Luis:** Sí, un poco de antes, ¿no?

**Entrevistador:** Sí, un poquito de antes. Un poquito de antes, pero sí.

**Luis:** Espera, sin este no le vale. Pues este otro. A ver, ¿dónde estoy? Ah, que estoy en desarrollo. Me voy a producción. Vale, este mismo. Vale, yo tengo esta operativa, y el problema que tenía con esta operativa es que esto tiene mucha interrelación entre ellos. ¿Eso qué significa? Que si yo le pongo aquí... de repente el combo de situación se cambia; pero si yo le pongo aquí "iniciada", o le pongo que esto es un algoritmo, o aquí le cargo un importe, empiezo a hacer cálculos y... vale, pues tal. ¿Qué problema hay? Pues el problema era este: si en el combo de situación yo seleccionaba que estaba con valor 2 — que es desestimado... rehabilitado, perdón —, la situación [pasap] y al grabar se transforma la situación en un valor de 1. O sea, de repente me lo volvía a rehacer y me lo ponía en otro estado diferente. ¿Qué pasa? Que hay muchos eventos que se desencadenan en cada uno de los combos, cajas, etcétera, ¿vale?

Y se puso a revisarme: "Vale, pues esto se está mapeando aquí y viene por este lado". Encontró la parte del front, y cuando yo grabo se llama Alfa 11, y perfecto. Y él mismo me lo ha [conado]. Vale, pues nada — espera, que esto fue que le pedí otra cosa, ¿vale? —. Y al final me localizó cuál era el problema: la causa está en la recarga. Lo que está ocurriendo realmente es que todo era calculado. No se envía en ningún momento a grabar, y se calcula dependiendo de la situación de los combos y dependiendo de los valores elegidos en los diferentes elementos. Al grabar la operativa, se lo está pasando hasta este COBOL, y este COBOL se lo pasa al 29 o al 3 — 29 era porque es diversos, y esto es porque es autos —, y después la pantalla se rellena de nuevo y lo recalcula por la decisión. Claro, por este combo lanzaba este otro, y por este combo lanzaba este otro, ¿vale? Y al final lo que pasa es que la tabla que se genera es esta, o sea, que deja la decisión en P, porque no viene cargada, porque no se estaba grabando en ningún sitio. Vale. "Ajusta el código, añádele comentarios del cambio, para que permita, en este caso, que si está rehabilitado no cambie la situación a iniciada, sino que mantenga lo que venga." Pues nada, al final, a partir de todos estos cálculos, me hizo la modificación correspondiente y ya hizo el ajuste en "obtener situación" para que, cuando la decisión sea P, si la situación ya viene de 2, se mantenga y no se recalcule — el problema real que había, que hacía un ajuste y un reajuste a partir de este.

**Entrevistador:** Bueno, he visto un mensaje por ahí que... dime... he visto un mensaje también: "me has cambiado la codificación y se han roto los acentos y todo".

**Luis:** Sí, eso era un UTF-8, y a ver, eso es de antes... y ahora, casi esta mañana, me lo ha hecho también. Me ha cambiado la codificación de una cosa. Bueno, luego lo he cambiado yo a mano, aunque estaba utilizando el cobol-debug, el cobol-[dev]... pero hay que echarle vistazos al skill, eso es cierto. Vale, sí, es complicado. Es decir, te da igual, es decir, si tienes una cosa u otra y más. Aquí, por ejemplo, le pedí que me clonase una operativa completa con otro nombre diferente, y... eso más o menos. Eso ya sí que le costó un poquito más. Tenía que haberle dado más.

## 6. Modelos y créditos

**Entrevistador:** ¿Con qué modelo hiciste...? Porque he visto que en algunos tenías el GPT 5.4, en otros he visto que tenías el Sonnet — porque tienes ahí como un check al principio de cada cosa que hemos enseñado, que se ve el modelo.

**Luis:** Sí, correcto. Sí, sí.

**Entrevistador:** ¿Has trabajado alguna cosa muy difícil con el Opus, por ejemplo, y has dicho: "Vale, esto... se nota la mejoría"?

**Luis:** Sí. Por ejemplo, cuando estoy ahora con tema de rendimiento de consultas... con rendimiento de consultas sí que se lo he pasado al 8, porque me entra la duda de que, cuando uno de los skills está usándose — en este caso, por ejemplo, es el SQL Optimize, que es bueno, pero hay múltiples —, no sé si funciona mejor si le pongo un modelo más alto, o funciona peor si le pongo un modelo más alto.

**Entrevistador:** Ya.

**Luis:** Me resulta la duda. No lo sé. Debería hacerlo mejor con un modelo más alto, simplemente por... no sé. Yo, el no sé cuál, el otro día sí que lo tuve puesto todo el rato, y en una sesión larga se fue a los 4.000 créditos.

**Entrevistador:** Eso es un mes, ¿eh?

**Luis:** Eso es mucho dinero, me lo imagino.

**Entrevistador:** Es un mes ahora mismo de licencia. Así que no está mal, no está mal... una buena sesión.

**Luis:** Exactamente.

## 7. Tiempo y contexto

**Entrevistador:** Vale. Entonces, bueno, como te he comentado... pues qué le pediste, cómo te lo hizo... Ya lo hemos visto: qué ganaste a partir de Copilot. Entiendo que — lo que también hablé con Stefania — tiempo ganas, pero ¿crees que, si tú lo hubieras hecho — aunque hubieras tardado más haciéndolo tú —, todos estos bugs o todo esto lo habrías encontrado? O, aparte de tiempo, ¿te ha regalado conocimiento?

**Luis:** No: tiempo, tiempo, tiempo y, sobre todo, más contexto. Es decir, aunque la aplicación no la conozcas, te da un contexto.

**Entrevistador:** Sí.

**Luis:** Te da un contexto de tal. Es decir, lo ves... hay algunas que simplemente es: "Explícame cómo se carga esto", o... es lo mismo: "En esta operativa de Datos de Lesionado, explícame el tipo de acción, el uso y los valores que va tomando según el tiempo, qué valores puede ir cogiendo a lo largo del tiempo". Y dice: "¿Necesitas algún COBOL? Yo te lo paso". Y me va pidiendo, y al final pues me lo va explicando. Es decir: cuándo esto es modo consulta, cuándo es tal, es servicio... ¿Qué suele pasar? Es decir, partes de una operativa de GAN y terminas llegando, en mi caso, siempre a un COBOL. Lo más normal es que termines llegando a un COBOL. Es lo más normal.

**Entrevistador:** Es, al final, lo que va por detrás de todo, ¿no?

## 8. Caso 5 · Equifax — backend puro con API de terceros

**Luis:** Y si tiro por backends, pues al final me pasa tres cuartas partes de lo mismo. Mira, aquí, por ejemplo, una de las primeras... Bueno, esta fue muy buena, la de Equifax. Mm, tengo alguna de Equifax más... nueva. A ver, esta. Vale, esto ¿qué me hizo? A ver, este es "cargar scores". Es que este hay uno... una de ellas... A ver: Equifax es un servicio de terceros, ¿vale? Y es una conexión con un servicio que está alojado... A ver, voy a buscar Equifax. Pasa que son muy cortas las sesiones. Ah, este sí. Mira, esto es lo que te quería comentar. Es decir, esto es un backend puro, no tiene frontend por debajo, ¿vale? Esto es una operativa, un backend que llama a un servicio de terceros — en este caso, Equifax — y llama a una URL, y le tienes que pasar una petición POST con un JSON, ¿vale? Y el tema estaba en que en algunos hay unas nuevas derivaciones, en las cuales viene un valor u otro dependiendo del tipo de validación que hace Equifax, y te devuelve... Equifax sirve para saber si una persona tiene algún tipo de — llamémoslo así — no deuda, pero sí es confiable.

**Entrevistador:** Vale.

**Luis:** Vale. Pues...

**Entrevistador:** Es una API, efectivamente, que está publicada en internet, de una empresa de terceros.

**Luis:** Vale. Vale. Pues yo le he llegado a decir... necesitaba controlar las nuevas propiedades que venían en el JSON, y controlarlas y que las gestionase como está gestionado aquí. Pues yo, directamente, pasándole la ruta del BE y el Jira, el JSON que a mí me está llegando: "Contrólalo para que no falle; no tengas en cuenta los nulos, etcétera... qué datos, pero contrólalo para que no falle". Pues nada, él se puso a tocarme el backend, y tocó las propiedades y demás para que, si viniese nulo o ese nodo no venía, lo pudiese controlar sin ningún problema. Dices: "Vale, ya está controlado. Si no viene, no falla, y grabarla con el valor real. Mapeo tal, mapeo tal... el valor esperado sería que la fiabilidad — en este caso, que es el SME Score — pues era de 849".

Vale, ¿qué pasa? Que hay tres versiones: está el Equifax, el Equifax Windows y el Equifax TMP. Pues dices: "Vete a esta ruta, que es donde estaba el código del Equifax versión Windows, y haces lo mismo: si yo te paso ese JSON, gestiónalo". Pues hizo lo mismo: evaluó el backend, hizo los diferentes controles — este era un poquito diferente — e hizo las gestiones. Y bueno, pues: "Ya está corregido; carga tal y persistencia, este y resto de datos; si no vienen, no se inicializan y no se rompe el flujo". Pues nada, a por el tercero — que es una copia, pero con un poco de diferencia —, pues lo mismo. Ta, tal, ta, tal. Es decir, llegó un momento en el que dice que está bloqueado. Es decir, aquí le dije "desbloquéamelo", pero ya se lo desbloqueó él solo. Luego se puso a desbloquear... desbloqueado.

Y ahora, pues nada: otro JSON le pegué, otro JSON diferente, con otra petición. Dice: "Ten en cuenta que viene con un JSON tal, pero que me está viniendo un error. Esto lo tengo que controlar y traérmelo". Pues lo mismo, ¿vale? Con este, ya mensaje correcto, pero que viene con error: pues el mensaje tiene que ir por otro y lo sacamos en el código de descripción del backend. Y él hizo, pues, los tres backends: "Debo traducir por un mensaje, y si no llega al contemplado, no lo debo suponer. Siempre que el return no sea cero; solo aplico cuando no sea ese valor". Y me hizo el ajuste: si es 00, no se toca; si es distinto de todo, se completa el switch y se saca el mensaje — ¿cómo lo llamaría? — el mensaje, uno de los numerados que tenía, de que tiene un valor y sale otro diferente; y si no está contemplado, se conserva el mensaje regular, y es lo que estamos devolviendo, y se aplica a los tres. Es decir... y en este caso, que sí que viene un mensaje, pero esto se considera correcto — porque hice unas pruebas y me decía que había error cuando estaba llegando bien —: "No lo tengas en cuenta cuando viene 00". Pues hizo lo mismo.

Al final, todo esto es backend .NET y demás. Y al final, luego se detectó una incidencia — esto estaba ya en producción — y es que el mensaje llegaba, Equifax lo devolvía y no se grababa en ningún sitio, con lo cual no te enterabas. Pues nada, como en ese momento no tenía acceso — porque, fíjate, esto es de abril, no tenía acceso a las tablas —, pues al final yo busqué la estructura de las tablas, se las pasé, y dice: "Hay que grabarlo en este campo, no sé qué". Y se puso a hacer las modificaciones correspondientes para poder tratarlo. Es otro tipo de ejemplo de tema de backend. Es decir, un backend en el cual yo lo que tengo son respuestas de Equifax y tengo una entidad, y las tienes que ir mapeando, y él te las mapea bien y tal. Bueno, vas haciendo prueba-error, prueba-error, y al final los cambios los hizo él, y esto está ya en producción. Este cambio está en producción y funciona todo perfectamente, ¿vale? Con lo cual, pues otro ejemplo diferente.

**Entrevistador:** Bueno, está bien. La chica va a tener para elegir, ¿eh? Go.

**Luis:** Sí. Si le das contexto, funciona bien. Mm, depende: si tiene mucho contexto, sí, sí. Pero un código puro de .NET, ahí yo creo que se mueve muy bien, no tiene ningún problema. Este, por ejemplo, que es un backend que era puro código, ¿no? Esto sí tenía llamadas a algo de COBOL, pero era puro código: que si el if, que si el este, que si control, este hace el switch... y al final, pues esto ya de menos.

**Entrevistador:** Bueno, al final, pues lo que hemos hablado, ¿no? Mucho ahorro de tiempo en tareas que tú podrías tener ahí.

**Luis:** Sí, hombre, das muchas vueltas también. Es verdad: hasta que... pues una vez lo haces de una forma, otra vez de otra forma, y ya sabes que lo tienes que hacer de esta u otra.

## 9. MCPs modificados y herramienta del hackathon

**Entrevistador:** Ya, es que te falta la experiencia, y bueno, ni más ni menos: es una herramienta nueva. También hay que... Efectivamente: tú ahí estabas en abril; ahora, con Copilot, estás haciendo ya otras cosas. O sea, junio... después de todo lo que has estado usándolo, creo que el [CPL] ya...

**Luis:** Por ponerte un ejemplo: yo ya he modificado — lo que pasa es que en mi versión local, lógicamente — el MCP de Jira y el MCP [de ELK], para que no haga un Playwright y escriba, y se tenga que abrir el navegador para irse al este... que lo haga con el token.

**Entrevistador:** ¿Eso te lo dio...?

**Luis:** ¿Es el DK, no? El DK no... el [DLK] no... El de Atlassian, sí, sí, el de Atlassian, sí. Vale, ahora tengo que hacer una cosa, ¿vale? La voy a implementar. La estaba implementando justo cuando te he hablado, pero como no me han cancelado la sesión, digo: pues se la envío ya.

**Entrevistador:** Espérate, voy a parar de grabar. Ah, sí, la chica tiene esto. Por cierto, esto, por ejemplo — lo que decíamos —: le pasó vuestros skills y tú lo validas y dices: "Jurado, pues 46,8 %". Lo que ha hecho es trasladar lo que hace el skill a JavaScript, y te lo pinta.

**Luis:** Vale, pero este, el asistente... y esto del jurado lo hizo Óscar, de GCA.

**Entrevistador:** Ah, bueno, no lo sé. No... eso lo hizo Óscar, todo, para el hackathon. O sea, se le ocurrió a él y empezó a hacerlo, y ya te digo.

**Luis:** Pues nada, esto es lo mismo: cogiendo los skills, me lo ha traducido a pantalla.

**Entrevistador:** Está muy bien, eh. Está muy guay, la verdad.

**Luis:** Puedes ver el JSON que se genera y... Al final, como todo, pues otra forma de presentación, en vez de tener que copiar y sacar. Hombre, es más fácil decir: "A ver qué sesión cojo, pues cojo esta revisión del AUT 81", y dices: "Pues este, por ejemplo, tendrá 'validar jurado', pues un 31". Pero bueno. Y viene bien para buscar sesiones y demás. Esto al final es un HTML, ¿no? No es más, pero...

**Entrevistador:** Sí, sí, ya lo he visto. ¿Busca en el local, no? ¿Esto lo ha conectado a la carpeta... pilot?

**Luis:** No, no, no, no. Esto va a la carpeta de sesiones directamente.

**Entrevistador:** Ah, vale. Ahora voy a parar de grabar y te cuento.
