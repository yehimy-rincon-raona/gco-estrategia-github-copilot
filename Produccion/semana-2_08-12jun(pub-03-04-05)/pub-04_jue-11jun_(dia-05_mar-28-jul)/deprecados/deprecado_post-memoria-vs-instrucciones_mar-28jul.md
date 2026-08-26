> # ⛔ DEPRECADO — no usar
>
> **Fecha de deprecación:** 25 de agosto de 2026
> **Archivo original:** `post-memoria-vs-instrucciones_mar-28jul.md` (carpeta de Pub 4)
> **Sustituido por:** `post-una-vez-o-siempre_pub4.md`
> **Imagen asociada, deprecada con él:** `deprecado_pub-04_s-2_tarjeta-comparativa_memoria-vs-instrucciones.png` (en esta misma carpeta) — antes `pub-04_s-2_tarjeta-comparativa_memoria-vs-instrucciones.png`
>
> ## Por qué se deprecó
>
> **Es el post que Óscar señaló** en la reunión del 18 ago y que se diagnosticó a fondo el 25 ago. Se auto-publicó en Teams GCO el 28/7 a las 8:00 (como post raíz independiente, no como hilo) y se retiró el 18 ago.
>
> **Lo que falla:**
>
> 1. **El encuadre.** *"Dos formas de darle contexto **permanente** a GitHub Copilot"*. Llamar "permanente" a la Memoria es la raíz del malentendido — Óscar leyó "permanente" y entendió sesión a sesión, con razón.
> 2. **El párrafo de Copilot Memory.** *"**Guarda** tus preferencias personales: tu estilo de respuesta, lo que te funciona, cómo prefieres recibir el código. Solo lo ves tú."* Óscar, textual: *"ese 'guarda tus preferencias personales' parece que sea algo que permanece en el tiempo, sesión a sesión."* Salva lo confirmó leyéndolo en frío: *"podría interpretar que también se almacena en el copilot-instructions.md."*
> 3. **El eje de la comparación.** Compara *tuyo vs. del equipo*. Ese eje es el que se rompió: "tuyo" se lee como "guardado en algún sitio mío". El eje correcto es **duración**, no propiedad.
>
> **Lo que se conserva y pasa íntegro al post nuevo:** todo el bloque de `.github/copilot-instructions.md` — el mecanismo y las cuatro reglas de GCO (SQL, COBOL, .NET, credenciales). Nibaldo las reconfirmó en la reunión del 25 ago.
>
> ## Errata detectada al revisar (no corregida aquí, corregida en el post nuevo)
>
> La tarjeta imprime `sin credenciales hardcodeadas` — anglicismo, contra la regla de Jonatan. El texto del post sí lo decía bien: "escritos directamente en el código".
>
> Acta: `Reuniones/seguimientos-semanales/resumen_reunion-seguimiento-semanal_25-08-26.md`
>
> ---

# Canal Anuncios y Tips Ágiles — Post propio · Memoria vs. Instrucciones
> Canal: Anuncios y Tips Ágiles · Fecha: Martes 28 julio (programado el 15 jul, una hora después del post principal de la Pub 4) · Tipo: Publicación independiente

---

## Objetivo de esta publicación

Cerrar el tema del hilo de la Pub 4 con la distinción clave entre las dos formas de contexto permanente:
- **Copilot Memory** — preferencias personales, solo del developer
- **`.github/copilot-instructions.md`** — reglas permanentes de todo el equipo

Era la Respuesta 4 del hilo original. **Decisión 15 jul:** se separa como post propio para que el martes 28 solo haya que replicar manualmente el hilo (post principal + respuestas 1–3) y este salga programado solo.

---

## Post listo para copiar en Teams (tenant GCO)

> Texto verificado contra la captura (`Produccion/imagenes_teams/01_anuncios-y-tips-agiles/05-pub-04_anuncios-y-tips-agiles.png`) — coincide con lo publicado el 11 jun.

**Asunto:** `Escríbelo una vez, aplícalo siempre`

---

⚙️ **Dos formas de darle contexto permanente a GitHub Copilot. Una es tuya. La otra es de todo el equipo.**

**Copilot Memory** guarda tus preferencias personales: tu estilo de respuesta, lo que te funciona, cómo prefieres recibir el código. Solo lo ves tú — no afecta a nadie más.

**`.github/copilot-instructions.md`** es diferente. Ese archivo entra al cajón en cada conversación, para todos, sin que nadie tenga que escribirlo en el prompt. Es donde el equipo define las reglas permanentes del proyecto. En GCO, por ejemplo:

- SQL: sin `LIKE`, sin `DELETE` ni `TRUNCATE`
- COBOL: código solo entre columnas 7–72 · no modificar copybooks sin listar primero el impacto
- .NET: C# 12 · `async/await` en toda operación I/O
- Todos: sin credenciales, tokens ni passwords escritos directamente en el código

Lo que defines ahí, GitHub Copilot lo aplica siempre. Sin repetirlo en cada prompt.

---

## Tono de comunicación

Mismo tono del canal Anuncios y Tips Ágiles: colega, directo y accionable. La distinción personal/equipo se explica con el mecanismo, no con teoría — y el remate deja el beneficio claro: definir una vez, aplicar siempre.

---

## Recursos adjuntos

- **Tarjeta `5-S2` — Memoria vs. Instrucciones** (`pub-04_s-2_tarjeta-comparativa_memoria-vs-instrucciones.png`, en esta misma carpeta) — verificar contra la captura antes de adjuntar.

---

## Procedencia del contenido

| Punto del post | Fuente |
|----------------|--------|
| Texto completo | Sección "Respuesta 4" de `canal-anuncios-tips_pub4.md` (esta carpeta) — verificado contra la captura de Teams |
| Copilot Memory vs. instrucciones de equipo | Brief tarjeta `5-S2` en `canal-anuncios-tips_pub4.md` |
| Reglas de código GCO (SQL, COBOL, .NET, credenciales) | Propuestas de Nibaldo · `semana-2_08-12jun/propuestas-nibaldo/resumen_nibaldo-uso-de-la-memoria.md` |
