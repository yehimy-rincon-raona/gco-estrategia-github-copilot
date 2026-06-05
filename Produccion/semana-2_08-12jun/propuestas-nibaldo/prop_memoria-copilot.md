# Propuesta de contenido — Correcto uso de la memoria en GitHub Copilot
> Eje: Novedades, Actualizaciones y Tips de uso
> Fase: 2 · Entorno Nativo y Primeros Pasos
> Propuesto por: Nibaldo · 5 junio 2026
> Estado: 📋 Propuesta — pendiente validación técnica Nibaldo

---

## Concepto

GitHub Copilot no recuerda conversaciones anteriores entre sesiones — cada vez que abres un chat nuevo, empieza de cero. Pero hay una forma de darle contexto persistente desde el primer momento: el archivo de instrucciones.

Entender cómo funciona la "memoria" de GitHub Copilot permite a los developers:
1. No repetir el mismo contexto en cada sesión
2. Conseguir respuestas más ajustadas a su equipo y su proyecto desde la primera pregunta

**El mensaje central para los developers de GCO:**
GitHub Copilot no te recuerda. Pero tú puedes decirle quién eres antes de que te pregunte.

---

## Cómo funciona (pendiente validación Nibaldo)

| Mecanismo | Qué hace | Persistencia |
|-----------|----------|--------------|
| Chat de la sesión | Copilot recuerda lo dicho dentro del chat actual | Solo esa sesión |
| `copilot-instructions.md` (en `.github/`) | Define reglas del equipo que Copilot aplica siempre | Permanente (vive en el repositorio) |
| [PENDIENTE] | [Otros mecanismos de memoria que Nibaldo quiera incluir] | [PENDIENTE] |

---

## Borrador del post para Teams

**Canal sugerido:** Primeros Pasos con GitHub Copilot
**Formato:** Tip práctico — concepto + ejemplo de uso

---

🪡 **GitHub Copilot no te recuerda entre sesiones. Pero tú puedes darle contexto permanente.**

Cada vez que abres un chat nuevo, GitHub Copilot empieza desde cero. No sabe en qué proyecto trabajas, qué convenciones usa tu equipo ni en qué idioma quieres las respuestas.

La solución: un archivo de instrucciones que Copilot lee automáticamente al inicio de cada sesión.

**Cómo usarlo:**
1. Crea el archivo `.github/copilot-instructions.md` en tu repositorio
2. Escribe las reglas que quieres que Copilot aplique siempre:
   - Idioma de respuesta (español)
   - Estilo de documentación de tu equipo
   - Restricciones del proyecto (por ejemplo: no generar código COBOL que use `GO TO`)
3. Copilot lo leerá automáticamente en cada sesión

**Resultado:** la primera respuesta ya tiene el contexto de tu equipo. Sin repetirlo cada vez.

👉 Empieza con 3 líneas: idioma, estilo, una restricción. Ya es útil.

---

## Brief visual (Figma)

**Tipo de pieza:** flujo "antes / después" — sin instrucciones vs. con instrucciones

| Elemento | Texto |
|----------|-------|
| Franja canal | 🪡 Primeros Pasos con GitHub Copilot |
| Pill fase | Fase 2 · Entorno Nativo |
| Título | Dale memoria a GitHub Copilot |
| Subtítulo | Un archivo. Contexto permanente. |
| Bloque "Sin instrucciones" | Copilot empieza de cero cada sesión |
| Bloque "Con instrucciones" | Copilot ya sabe: idioma, estilo, restricciones del equipo |
| Paso a paso | 3 pasos: crear archivo · escribir reglas · Copilot lo aplica siempre |
| CTA | 👉 Empieza con 3 líneas |
| Footer | Estrategia de Adopción · 2026 |

**Specs Figma:** 1080×1350px · fondo blanco · `#DC0028` · bloque "sin instrucciones" en gris claro · bloque "con instrucciones" con acento rojo

---

## Qué necesito de Nibaldo para completar este brief

- [ ] Confirmar que `copilot-instructions.md` en `.github/` funciona igual en Visual Studio que en VS Code
- [ ] ¿Hay alguna restricción específica que GCO ya tiene definida para el archivo de instrucciones?
- [ ] Añadir otros mecanismos de "memoria" que Nibaldo considere relevantes (¿conversaciones guardadas, contexto por workspace?)
- [ ] Ejemplo real de instrucción que tenga sentido para COBOL/DB2 en GCO
