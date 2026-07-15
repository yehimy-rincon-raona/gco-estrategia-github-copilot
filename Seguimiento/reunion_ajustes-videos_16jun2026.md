# Reunión de seguimiento — Ajustes de vídeos + Definición de temas S3 · 16 junio 2026

**Asistentes:** Nibaldo · Óscar Segura Herrera (GCO — Arquitectura, osegura@gco.com) · [nombre pendiente — Pasiona]  
**Fecha:** 16 junio 2026  
**Resultado:** Ajustes editoriales en V1 y V2 + temas de S3 definidos (ver sección Temas)

---

## Ajustes de vídeos

### Vídeo 1 — Configuración del entorno

**Sección: acceso a la licencia desde el perfil de myaccess.microsoft.com**

Añadir flujo completo de solicitud de licencia:

1. Si la licencia no aparece en **Sugerencias**, ir a **Ver todo**
2. Si tampoco aparece en Ver todo, buscar el paquete **"GitHub Enterprise - Arquitectura"**
3. Usar el botón **Solicitud** para pedirla
4. Lo que ocurre detrás: GCO asigna al usuario a un grupo de Azure (`AzGroup.GH.Arquitectura`) que le otorga la licencia

> Referencia visual: pantalla `myaccess.microsoft.com/@grupocatalanaaccidente.onmicrosoft.com#/access-packages` con el paquete "GitHub Enterprise - Arquitectura" y el botón Solicitud visible.

---

### Vídeo 2 — Primeros pasos

**Ajuste 1 — Campo de usuario en login de GCO**

- Al mostrar el inicio de sesión con cuenta GCO, **no mostrar el usuario real**
- Reemplazar por: `accede con _gco en el campo de usuario`

**Ajuste 2 — Autenticación en Visual Studio Code**

- La sección de Visual Studio Code debe ir **más lento**
- Desarrollar el proceso de autenticación completo igual que se hace para Visual Studio
- Explicar que VS Code usa **Sign in with GitHub** para autenticarse
- El flujo debe ser paralelo al de Visual Studio — misma lógica, mismo nivel de detalle

---

### Vídeo 3

Sin ajustes. Está bien como está.

---

## Temas para desarrollar — Semana 3 y siguientes

### Vídeo 2 — Opciones de guion (equipo debe elegir una)

| Opción | Título propuesto | Descripción |
|--------|-----------------|-------------|
| A | Chat + completado inline | Continuación directa del Vídeo 1. Enfoque básico y accesible — formas básicas de interacción con GitHub Copilot |
| B | Modo agente | Introducción al modo agente de GitHub Copilot |
| C | Planificación — modo especial | Introducción al modo especial de planificación |

> Decisión pendiente: el equipo debe elegir la opción antes de producir el guion definitivo.

---

### Contenidos gráficos Semana 3

**Martes 23 jun — Pub 6 · Canal: Casos de Uso Reales**

- **Tema:** Caso de uso real 1 — Entender código heredado con GitHub Copilot
- **Lenguaje:** COBOL
- **Semana:** S4 (desplazada desde S3 — temas confirmados el 16 jun, sin tiempo de producción para S3)
- **Bonus:** De este caso de uso nace la propuesta para el **Vídeo 3** (demo en vídeo del mismo caso)

**Jueves 25 jun — Pub 7 · Canal: Casos de Uso Reales**

- **Tema:** Caso de uso real 2 — Bug fixing con GitHub Copilot
- **Lenguaje:** .NET
- **Semana:** S4 (desplazada desde S3 — mismo motivo)
- **Bonus:** De este caso de uso nace el **Vídeo 3** — el contenido del vídeo se construye a partir de este caso real

> Vídeo 3 queda redefinido: surge de los casos de uso reales confirmados hoy. Su brief se crea una vez que Pub 6 y 7 estén producidas.

---

## Feedback de Jonatan (canal colaborativo)

**Post revisado:** *¿GitHub Copilot no aparece en tu Visual Studio?*

| Ajuste | Detalle |
|--------|---------|
| Orden de publicación | Publicar ANTES del post "No tiene memoria permanente" (el cajón). Jonatan lo ubicaría como segunda publicación del canal Primeros Pasos |
| Enlace myprofile | La mención a myprofile debe ser un enlace clicable — no texto plano |

**Pendiente de Nibaldo (1):** confirmar la URL exacta de myprofile/myaccess para el tenant de GCO.
En los screenshots de la reunión de hoy se ve `myaccess.microsoft.com/@grupocatalanaaccidente.onmicrosoft.com#/access-packages` — pero para un post en Teams puede que la URL simplificada sea diferente. Nibaldo o Óscar (GCO) deben confirmar cuál usar.

> El post "¿GitHub Copilot no aparece en tu Visual Studio?" no tiene archivo en el proyecto aún — crear en `Produccion/_propuestas/eje_primeros-pasos/` una vez confirmada la URL.

**Pendiente de Nibaldo (2) — Tarjeta "Optimización de Tokens y Modelos" (Pub 8/9):**

Jonatan señaló que el modelo de multiplicadores (0x/1x/3x) ya no aplica con el nuevo sistema de facturación de GitHub Copilot. Hay que confirmar con Nibaldo antes de publicar:

- ¿Las licencias de GCO ya operan bajo el nuevo modelo (peticiones premium mensuales)?
- ¿O todavía está activo el modelo de multiplicadores?

Hasta confirmar: la tarjeta **no se publica**. Si el nuevo modelo ya está activo, el mensaje se actualiza al ángulo propuesto por Jonatan: *"Puede que estés gastando más de lo necesario — los modelos premium consumen tu bolsa mensual; los estándar, no."*

---

## Pendientes tras esta reunión

| Acción | Responsable | Prioridad |
|--------|-------------|-----------|
| Aplicar ajustes en V1 (flujo licencia myaccess) | Yehimy / editor | Alta |
| Aplicar ajustes en V2 (usuario GCO + autenticación VS Code) | Yehimy / editor | Alta |
| Completar sección "Temas para desarrollar" con los temas que pasa Yehimy | Yehimy | Alta |
| Confirmar nombre del asistente de Pasiona | Yehimy | Media |
