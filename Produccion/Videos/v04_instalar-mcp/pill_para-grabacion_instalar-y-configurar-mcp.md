# Nombre del video: Instala y configura tus MCP con Copilot Dev Suite — Píldora ágil
## Del Portal de Empresa a tus primeras consultas con GitHub Copilot y los MCP de GCO

---

## Nota de producción — leer antes de generar la voz

Esta píldora cubre el guion de voz en off para la grabación de pantalla que ya grabó **Víctor Gisbert Clement** (vídeo fuente `gco_mcp-victor-gisbert`, ~11 min). El editor sincroniza la voz con los fragmentos de la grabación en postproducción, condensando el vídeo original a una píldora ágil de **2:30 – 3:00 min**.

Esta píldora está orientada a **usuarios de Fase 3** (entorno multientorno: Visual Studio Code o Terminal). Los MCP y Skills de `gco-dev-suite` funcionan en VS Code y en la Terminal, no en la versión nativa de Visual Studio 2022 que usan por defecto en GCO.

**Cómo generar la voz:**
La voz en off se genera con **Clipchamp**, usando la voz **Alessio Dragon HD Latest**. Copiar únicamente el texto del bloque de voz en off (sin comillas ni encabezados) y pegarlo en el campo de texto de Clipchamp. Si alguna frase queda con ritmo extraño, dividirla en dos bloques separados.

**Pronunciación de términos en inglés:** esta voz no lee bien las palabras en inglés. En los bloques de voz en off, los términos problemáticos se escriben **fonéticamente** para que suenen correctos (no cambia el texto en pantalla ni los títulos, que conservan la escritura real). Convención aplicada en este guion: **"Copilot" → "Copáilot"**. Si al generar el audio detectas otra palabra mal pronunciada, escríbela fonéticamente igual antes de regenerar.

**Datos sensibles — difuminar en edición:**
La grabación contiene datos reales que deben difuminarse antes de publicar:
- Correo corporativo y nombre de usuario de Víctor (`PE2782`) siempre que aparezcan en rutas, terminal o navegador.
- Cualquier **PAT / token** generado o pegado (el "churro" de caracteres en Jira, Confluence y en la terminal).
- Nombres reales de bases de datos y proyectos del servidor de desarrollo que aparezcan en las respuestas de prueba (ej. listados de BBDD, tareas de Jira). Difuminar o recortar el encuadre para que no se lean.
- Rutas con el usuario, tipo `C:\Users\PE2782\...`

**Nota de guion:** el paquete se llama **Copilot Dev Suite** en el Portal de Empresa; una vez instalado, se referencia como `gco-dev-suite`. Ambos nombres son correctos y aparecen en pantalla. El asistente siempre se nombra **GitHub Copilot**.

---

### Sección 1 · Qué vas a instalar

**Voz en off:**
> Copáilot Dev Suite es el paquete que prepara tu entorno para trabajar con los MCP de GCO.
>
> Incluye conexiones que permiten a GitHub Copáilot acceder a Jira, Confluence, bases de datos y otras herramientas, directamente desde tu editor o terminal.
>
> En esta píldora lo vas a instalar, configurarás las credenciales una sola vez y lo probarás con consultas reales. Vamos paso a paso.


**Qué mostrar en pantalla:**
Portada o primer fotograma del Portal de Empresa con la ficha de **Copilot Dev Suite** (imagen `01`). Texto en pantalla: **"Copilot Dev Suite → tus MCP en GitHub Copilot"**.

---

### Sección 2 · Instálalo desde el Portal de Empresa

**Voz en off:**
> Abre el Portal de Empresa y busca Copáilot Dev Suite. Haz clic en > **Instalar**. El proceso puede tardar un poco, ya que instala varios componentes, incluido Node.js.
> 
> Para seguir el progreso, abre la carpeta de logs de instalación y verás cómo se actualiza en tiempo real. Cuando el Portal marque la aplicación como **Instalada**, puedes cerrarlo y pasar a la configuración.
> 

**Qué mostrar en pantalla:**
Secuencia de la grabación correspondiente a las imágenes `01` a `05`:
- Ficha de **Copilot Dev Suite** en el Portal y clic en **Instalar** (`01`).
- Carpeta de logs de instalación abierta y el fichero actualizándose (`02`, `03`, `04`).
- El Portal mostrando el check de **"Instalada"** (`05`).

Texto en pantalla: **"Portal de Empresa → Instalar → esperar"**.

> **Nota edición:** el vídeo original muestra la instalación en tiempo real (tarda un par de minutos). Acelerar o cortar esa espera; basta con mostrar inicio y confirmación de "Instalada".

---

### Sección 3 · Abre la guía de configuración

**Voz en off:**
> Con la aplicación instalada, abre la guía de configuración. Está publicada en la unidad común, accesible para todos.
> 
> La guía tiene dos pestañas: **Instalación** y **Skills**, con los pasos numerados del uno al siete. Como la instalación ya está hecha, vamos directo al paso cinco: configurar las credenciales.


**Qué mostrar en pantalla:**
Secuencia de las imágenes `06` a `08`:
- Navegador con la guía **`gco-dev-suite — Guía completa`** abierta desde `O:/PE2782/guia-gco-dev-suite.html` (difuminar el usuario en la ruta).
- Menú lateral con los pasos: 1 Consigue los archivos · 2 Abre PowerShell · 3 Desbloquea el script · 4 Ejecuta el instalador · **5 Configura credenciales** · 6 Lanza Chrome · 7 Verifica.
- Zoom al **Paso 5 · "Configura las credenciales"**.

Texto en pantalla: **"Guía → Paso 5: Configura las credenciales"**.

---

### Sección 4 · Configura las credenciales de Atlassian (Jira y Confluence)

**Voz en off:**
> "El usuario y el token se guardan cifrados en el Gestor de credenciales de Windows: no hay ningún fichero que editar y solo lo haces una vez.
>
> Abre PowerShell, entra a la carpeta de geceo-dev-suite y ejecuta el script de credenciales de Atlassian. El script te pedirá tu usuario y tu token personal, primero de Yira y luego de Confluencs.
>
> Para crear el token de Yira: entra y haz clic en tu avatar arriba a la derecha, Perfil, Tokens personales de acceso, y crea uno nuevo. Ponle un nombre, por ejemplo eme ce pe- atlassian, con una duración de noventa días. Copia el código que te genera y pégalo en la terminal.
>
> Para Confluencs es lo mismo: entra desde el icono de los nueve cuadros, Administrar Confluencs, tu perfil, Configuración, Tokens personales de acceso, y creas el token igual. Lo copias y lo pegas en la terminal."

**Qué mostrar en pantalla (en orden, sincronizado con la voz en off):**

La voz en off tiene 4 bloques. Este es el orden exacto de lo que se ve en cada uno:

**Bloque 1 — "se guardan cifrados en Windows… solo lo haces una vez"**
- Zoom al **Paso 5 de la guía**, "Configura las credenciales" (`07`).

**Bloque 2 — "Abre PowerShell, entra a la carpeta y ejecuta el script de Atlassian… te pedirá usuario y token"**
1. En la guía se copia el comando `cd` y se pega en PowerShell (`08_...copia-el-cd` → `09`).
2. Se copia el segundo comando y se pega en PowerShell (`10` → `11`):
   ```
   cd $env:USERPROFILE\gco-dev-suite
   .\setup-atlassian-credentials.bat
   ```
3. El `.bat` arranca y **pide el usuario y el token**. Aquí es donde Víctor usa sus datos ya guardados:
   - **AQUÍ VA EL `.txt` CON LAS CLAVES** → imágenes `12_...se-valida-con-datos-guardados-en-local` y `13_...se-valida-correo-y-path-jira`. Es la nota donde tiene su usuario y sus tokens pre-guardados y los pega en la terminal.
   - **Texto lateral (ver Tabla de correspondencia):** *"Datos de ejemplo. Las credenciales reales fueron modificadas por seguridad."*
   - **Único recorte obligatorio de encuadre:** el comando `docker run … mcp-atlassian` de esa nota (no es el flujo oficial). El resto se muestra tal cual con el texto lateral.

**Bloque 3 — "Para crear el token de Jira: avatar → Perfil → Tokens personales de acceso → crear → nombre mcp-atlassian → 90 días → copia y pega"**
Es la demostración de cómo se crea el token (para quien no lo tenga guardado):
1. Avatar → **Perfil** (`14`).
2. **Tokens personales de acceso** (`15`).
3. **Crear** token (`16`).
4. Nombre `mcp-atlassian`, duración 90 días (`17`).
5. Token generado (`18`).
6. Se pega en PowerShell (`19`).
- **Texto en pantalla:** *"Perfil → Tokens personales de acceso → Crear · 90 días"*.
- **Texto lateral:** el mismo aviso de datos de ejemplo.

**Bloque 4 — "Para Confluence es lo mismo: nueve cuadros → Administrar Confluence → perfil → Configuración → Tokens → crear igual → copia y pega"**
1. Nueve cuadros → **Administrar Confluence** (`20`).
2. Perfil → **Configuración** → Tokens personales de acceso (`21`).
3. Se crea el token igual y se pega en PowerShell (`22`).
- **Texto lateral:** el mismo aviso de datos de ejemplo.

> **Resumen para el editor:** el `.txt` con las claves aparece en el Bloque 2 (imágenes `12`–`13`), justo cuando la terminal pide el token. Se muestra tal cual con el texto lateral de "datos de ejemplo"; solo se recorta el comando `docker run`. Reforzar visualmente que este paso se hace **una sola vez**.

---

### Sección 5 · Configura las credenciales de tu base de datos (DB2)

**Voz en off:**
> "En la misma carpeta, configura ahora las credenciales de tu base de datos De Be Dos. Ejecutas el script de De Be Dos y te pide tu usuario y tu contraseña, que también se guardan cifrados en Windows.
>
> Un aviso importante: la terminal no muestra los caracteres mientras escribes la contraseña. Escríbela con cuidado, respetando mayúsculas y minúsculas.
>
> Cuando termines, reinicia GitHub Copáilot para que tome las nuevas credenciales."

**Qué mostrar en pantalla:**
Secuencia de las imágenes `42` a `44`, en la ventana de PowerShell:
- Ejecución del comando:
  ```
  .\setup-db2-credentials.bat
  ```
  con la cabecera `=== Configurar credenciales DB2 en Windows Credential Manager ===` y `Nombre de credencial: mcp-db2` (`42`).
- Introducción de `Usuario DB2:` y `Contraseña DB2 (no se muestra): ******` — la contraseña no se ve al teclear (`43`, `44`).
- Confirmación `[OK] Credenciales guardadas correctamente.` con la credencial `mcp-db2` (`44`).

Texto en pantalla: **"DB2 → `.\setup-db2-credentials.bat` → usuario + contraseña (no se ve al escribir)"**.

> **Nota edición:** la guía indica al final del script *"Reinicia Copilot (o ejecuta `/mcp restart`) para aplicar el cambio"*. Se puede mostrar brevemente ese mensaje para enlazar con la sección siguiente (arrancar GitHub Copilot). **Difuminar** el usuario DB2 real (`PE2782`) que aparece en el resultado.

---

### Sección 6 · Arranca GitHub Copilot y verifica los MCP

**Voz en off:**
> "Con las credenciales listas, arranca Git-jab Copáilot. Al iniciar, carga los MCP configurados.
>
> Puedes ver la lista de servidores disponibles: Yira, GeCeO, Elastic, Atlassian, De Be Dos, SQL y Pleywrait, además del servidor integrado de Git-jab. Todos con un check verde: están cargados y listos para usarse."

**Qué mostrar en pantalla:**
Secuencia de las imágenes `23` a `25`:
- Arranque de **GitHub Copilot** en la terminal (`23`).
- Lista de **MCP Servers** con el check verde en cada uno: `mcp-jira`, `mcp-gco`, `mcp-elastic`, `mcp-atlassian`, `mcp-db2`, `mcp-sql`, `mcp-playwright` y el built-in `github-mcp-server` (`24`, `25`). **Difuminar la ruta de config con el usuario.**

Texto en pantalla: **"MCP cargados: Jira · Atlassian · DB2 · SQL · Elastic · GCO"**.

---

### Sección 7 · Pruébalo con consultas reales

**Voz en off:**
> "Ahora la prueba: pídele algo en lenguaje natural y deja que use el MCP correspondiente.
>
> Para Atlassian: 'dime qué tareas tengo asignadas'. GitHub Copáilot consulta Yira y te devuelve tus tareas en una tabla ordenada.
>
> Para las bases de datos: le pides que te liste las bases de datos que ve en el servidor de desarrollo, primero con el MCP de DeBeDos y luego con el de SQL. En segundos te devuelve el listado, leyendo directamente de la fuente.
>
> Eso es todo: entorno instalado, credenciales configuradas una sola vez, y GitHub Copáilot conectado a tus herramientas."

**Qué mostrar en pantalla:**
Secuencia de las imágenes `26` a `33`:
- Prompt de Atlassian **"dime qué tareas tengo asignadas"** y la respuesta en tabla (`26`, `27`). **Difuminar el contenido real de las tareas y el proyecto.**
- Prompt para **DB2** pidiendo las bases de datos disponibles y su respuesta (`28`, `29`, `30`).
- Prompt para **SQL** con su respuesta en tabla (`31`, `33`). **Difuminar los nombres reales de las bases de datos.**

Texto en pantalla: **"Pregunta en lenguaje natural → GitHub Copilot usa el MCP → respuesta real"**.

---

## Fuera de esta píldora (decisión de guion)

Del vídeo original se dejan **fuera** de esta píldora, por decisión editorial:
- La parte de **Chrome / Playwright** y la selección de **custom agents** (`gco-coordinador`). Víctor mismo indica en el audio que es una versión preliminar y que cambiará, por lo que no se documenta aquí para no enseñar algo que va a evolucionar.
- La verificación final del token en Jira (fecha de última autenticación).
- El **cierre personal de Víctor** (se presenta por su nombre e invita a escribirle). Es una despedida del autor de la grabación, no un CTA del guion; por eso la píldora cierra en la Sección 7 con las pruebas funcionando.

Si más adelante se quiere una píldora avanzada con agentes y Playwright, se produce por separado cuando esa parte esté estabilizada.

---

## Recomendaciones para edición

- Duración objetivo: **2:30 – 3:00 min**. El vídeo fuente dura ~11 min; hay que condensar tiempos de espera (instalación, carga de MCP) con cortes o aceleración.
- Difuminar **siempre** tokens, correos, usuario `PE2782` y nombres reales de BBDD y proyectos.
- El paso de credenciales es el corazón de la píldora: que se vea claro que **se hace una sola vez** y que se guardan cifradas en Windows.
- Los comandos de PowerShell deben verse legibles en pantalla (zoom), no solo mencionarse en el audio: `.\setup-atlassian-credentials.bat` (Atlassian) y `.\setup-db2-credentials.bat` (DB2).

---

## Tabla de correspondencia — rótulos en pantalla (para el editor)

**Cómo leer esta tabla:**
- **Texto en pantalla** = rótulo principal que resume el momento (arriba/centro).
- **Texto lateral** = aviso fijo en la franja lateral o inferior, en fondo semitransparente, para no tapar lo que se señala.
- **Importante:** esta tabla NO cambia la voz en off. El audio de cada sección se queda igual; aquí solo se define lo que se escribe en pantalla.
- Los datos sensibles (usuario `PE2782`, correo, tokens) se muestran tal cual el paso real, pero acompañados del **texto lateral** que aclara que son de ejemplo. El único recorte de encuadre obligatorio es el comando `docker run` de la nota `.txt` (no es el flujo oficial — el oficial es el `.bat`).

| Sección | Momento | Imágenes | Texto en pantalla | Texto lateral |
|---------|---------|----------|-------------------|---------------|
| S2 | Ficha del paquete y clic en Instalar | `01` | Portal de Empresa → Instalar | — |
| S2 | Carpeta de logs actualizándose | `02` · `03` · `04` | Carpeta de logs | — |
| S2 | El Portal confirma la instalación | `05` | Instalada | — |
| S4 | Guía Paso 5 + bloque PowerShell | `07` · `08` · `10` | Guía → Paso 5: Configura las credenciales | — |
| S4 | PowerShell pide usuario de Jira | `09` · `11` · `12` · `13` | — | Datos de ejemplo. Las credenciales reales fueron modificadas por seguridad. |
| S4 | Creación del PAT de Jira | `14`–`18` | Perfil → Tokens personales de acceso → Crear · 90 días | Datos de ejemplo. Las credenciales reales fueron modificadas por seguridad. |
| S4 | Pegado del token en PowerShell | `19` | — | Datos de ejemplo. Las credenciales reales fueron modificadas por seguridad. |
| S4 | Creación del PAT de Confluence | `20` · `21` | — | Datos de ejemplo. Las credenciales reales fueron modificadas por seguridad. |
| S4 | Pegado del token de Confluence | `22` | — | Datos de ejemplo. Las credenciales reales fueron modificadas por seguridad. |
