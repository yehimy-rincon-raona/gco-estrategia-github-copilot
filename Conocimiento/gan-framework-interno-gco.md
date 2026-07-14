# GAN — Framework interno de GCO

> **Fuente:** Transcripción de la entrevista de Víctor Gisbert Climent a Luis De la Fuente Velado (desarrollador de GCO), 22 de junio de 2026 — `Produccion/Videos/v05_casos-de-uso/transcripcion_grabacion-casos-de-uso-copilot.md` — y capturas de esa misma grabación.
> **Fecha de registro:** 9 de julio de 2026
> **Relevancia:** GAN aparece en los casos de uso reales de los Videos 05 y 06 y en contenidos del canal Casos de Uso Reales. Este documento centraliza lo que sabemos verificado sobre GAN para no reinventarlo (ni inventarlo) en cada brief, guion o post.

---

## Qué es

GAN es el **framework interno de GCO** con el que sus desarrolladores construyen las **"operativas"** — las pantallas y aplicaciones de gestión que se usan internamente en el grupo (siniestros, valoraciones, gestión de defensa/reclamación, etc.).

Cuando un desarrollador de GCO dice "una operativa de GAN", se refiere a una de esas pantallas corporativas construidas con este framework.

## Base tecnológica

- **Es .NET, pero de una generación anterior.** En la entrevista, Víctor lo define así: *"GAN es WCF, Windows Communication Foundation. Eso es .NET… un poquito de antes"*. Luis lo confirma: *"GAN como tal es .NET"*.
- WCF (Windows Communication Foundation) es la tecnología de servicios de Microsoft previa a las APIs modernas — coherente con el perfil legacy del stack de GCO.

## Anatomía de una operativa GAN

Según lo que Luis muestra y describe en la grabación:

| Componente | Detalle |
|------------|---------|
| Código C# (`.cs`) | La lógica de la operativa; las operativas comparten una estructura común entre sí |
| XML | Define la estructura de la pantalla; es la parte que "se rompe" cuando se toca mal (error de XML → la vista no se ve en Visual Studio) |
| Controles propios | El framework tiene su propio set de controles de interfaz — no se puede usar cualquier control, solo los del framework |
| JavaScript | El comportamiento de pantalla; peculiaridad: *"en GAN los JavaScript siempre están en las carpetas temporales del propio GAN"* |

## Relación con COBOL

Las operativas GAN son la capa visible; la lógica de negocio de fondo vive en el mainframe. En palabras de Luis: *"partes de una operativa de GAN y terminas llegando, en mi caso, siempre a un COBOL. Es lo más normal"*. Al grabar desde una pantalla GAN, la llamada baja a un COBOL que a su vez puede delegar en otros (en la grabación menciona el 29 para diversos y el 3 para autos).

## El mito: "GAN no se toca con IA"

Entre los desarrolladores de GCO circula la creencia de que modificar GAN con IA rompe las cosas. El propio entrevistador lo relata: *"yo toco algo de GAN y luego me da un error de XML y no se me ve la vista en el Visual Studio… todo el mundo que ha tocado algo de GAN me ha dicho lo mismo"*.

**Lo que demostró Luis (caso del Video 05):** GitHub Copilot generó una operativa GAN completa y funcional — backend, operativa y XML — con solo 2 ajustes manuales. La condición fue el contexto: le dio una carpeta con **30–40 operativas y backends existentes como ejemplos** y la instrucción de usar la misma estructura y únicamente los controles permitidos. Su conclusión textual: *"se puede, si le das el contexto suficiente para que sepa cómo hacerlo"*.

También resolvió bugs dentro de GAN (casos del Video 06): un radio button que se reseteaba (ajuste de JavaScript) y un combo que se recalculaba al grabar (rastreo del frontend hasta el COBOL).

## Por qué importa para la estrategia de adopción

- El mito de "GAN es intocable" es una **fuente activa de resistencia**: da una razón aparentemente técnica para no usar GitHub Copilot en el día a día real de GCO.
- El caso de Luis lo desmonta con evidencia interna, no con marketing — exactamente el tipo de argumento que pide el filtro de la resistencia del proyecto.
- **Patrón replicable para contenidos:** el mensaje no es "GitHub Copilot funciona con GAN" a secas, sino "funciona **si le das las operativas existentes como contexto**". El método (carpeta con ejemplos + restricción de estructura y controles) es el tip accionable.

## Lo que NO sabemos (no inventar)

- **Qué significa la sigla GAN** — no aparece en los documentos del proyecto ni en la transcripción. `[No hay información — confirmar con Nibaldo o GCO]`
- Historia, versiones o alcance exacto del framework dentro de GCO.
- Si todos los equipos de GCO lo usan o solo algunos.

Si un contenido necesita alguno de estos datos, confirmarlo antes de publicar.
