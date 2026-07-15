# Solicitudes a Nibaldo · Reunión martes 23 junio 2026
> Mensaje consolidado listo para enviar / repasar en la reunión.
> Fuente: `Seguimiento/resolucion-propia_reunion-23jun2026.md` · briefs Pub 6 y Pub 7 · `Conocimiento/facturacion-github-copilot-2026.md`
> Continúa desde: `solicitudes-nibaldo_16jun2026.md` (ninguno de esos inputs llegó).

---

## Resumen de lo que necesito de Nibaldo

| # | Tema | Tipo | Bloquea |
|---|------|------|---------|
| 1 | Lenguaje del caso de bug fixing (Pub 7) | Confirmación | No — define solo el encuadre |
| 2 | Plan de facturación real de GCO | Confirmación | No — la tarjeta ya es plan-agnóstica |
| 3 | Qué ocultar en el login del Vídeo 2 | Pregunta puntual | Sí (edición Vídeo 2) |
| 4 | Enfoque del Vídeo 2 (A/B/C) | Decisión editorial | Sí (guion Vídeo 2) |
| 5 | Regrabaciones: Vídeo 1 + VS Code en Vídeo 2 | Bloqueo de grabación | Sí |
| 6 | URLs internas (canal corporativo + licencia tenant) | Dato interno | Sí (cierre Vídeo 1) |
| 7 | Refuerzo opcional para Pub 6 y Pub 7 | Suma, no bloquea | No |

---

## Mensaje listo para copiar

---

Hola Nibaldo, te dejo junto todo lo que necesito de tu lado para avanzar esta semana. Lo agrupé en lo que **desbloquea producción** y lo que **suma pero no bloquea**, para que sea rápido de responder.

**1 · Lenguaje del caso de bug fixing (Pub 7)**
Armé el brief de Pub 7 con el caso de la **prima que quedaba en negativo al aplicar el descuento del 10%** que vimos en sesión (el del agente `@analyst` con MCP de Jira y Confluence). Para titularlo bien necesito confirmar: **¿ese caso fue en .NET?**
- Si fue → lo dejo como "bug fixing en .NET".
- Si no → dime si tienes un caso de bug fixing real en .NET, o lo publicamos como "bug fixing con contexto de negocio" sin atarlo a un lenguaje (ya está listo así).

**2 · Plan de facturación de GCO**
Confirmé por la documentación oficial que el modelo de multiplicadores **0x / 1x / 3x quedó como legacy el 1 de junio de 2026**: ahora el consumo es por **tokens contra una bolsa mensual (GitHub AI Credits)**. Reformulé la tarjeta para que funcione con cualquier plan. Solo necesito saber: **¿las licencias de GCO ya operan con el nuevo modelo por tokens, o siguen en el esquema anual legacy con multiplicadores?** Con eso afino el detalle.

**3 · Vídeo 2 — qué ocultar en el login**
Sobre el ajuste del login de GCO: necesito que me precises **qué dato exacto no debe verse** para hacer bien la edición. ¿Es solo el nombre de usuario, también el correo, el dominio, u otro dato visible en esa pantalla? ¿En qué momento(s) del vídeo aparece? Y para reemplazarlo, ¿usamos `_gco` o prefieres otro texto genérico?

**4 · Vídeo 2 — enfoque**
Para cerrar el contenido necesito que definamos el enfoque. ¿Cuál de estas tres líneas seguimos como segundo paso para los developers de GCO?
- **A)** Chat + completado inline — continuación directa del Vídeo 1
- **B)** Modo agente
- **C)** Planificación / modo especial

Mi propuesta es la **A**, para mantener el orden de menos a más, pero quiero tu visión técnica antes de producir el guion.

**5 · Regrabaciones que dependen de ti**
- **Vídeo 1:** el flujo completo de solicitud de licencia en myaccess (Sugerencias → "Ver todo" → buscar "GitHub Enterprise - Arquitectura" → botón Solicitud → mención de la asignación al grupo Azure). No puedo grabarlo: es interno del tenant de GCO.
- **Vídeo 2:** la sección de VS Code con el flujo de autenticación completo ("Sign in with GitHub"), al mismo nivel de detalle que la de Visual Studio.

**6 · Dos URLs internas**
- La **URL del canal corporativo** para enlazarla al final del Vídeo 1.
- La **URL de acceso a la licencia**: ¿es `myaccess.microsoft.com` o una específica del tenant de GCO?

**7 · Refuerzo opcional para los casos de uso (suma, no bloquea)**
Pub 6 y Pub 7 ya están listos para publicar tal cual. Si quieres potenciarlos, me sirve:
- **Pub 6 (COBOL):** un caso concreto real — nombre de un programa/copybook (puede ir anonimizado), qué pedía el ticket y qué ganó el developer. Si hubo una cifra de tiempo ("de X horas a Y minutos"), mejor aún.
- **Pub 7 (bug fixing):** confirmar que el caso de la prima negativa se puede mostrar sin datos sensibles de negocio.

Gracias — con las respuestas a los puntos 1 a 4 ya puedo cerrar lo de esta semana.

---

> Nota interna: ningún dato de GCO se da por supuesto. Los puntos 1, 2, 5 y 6 esperan confirmación; los briefs de Pub 6 y Pub 7 ya son autosuficientes sin estas respuestas.
