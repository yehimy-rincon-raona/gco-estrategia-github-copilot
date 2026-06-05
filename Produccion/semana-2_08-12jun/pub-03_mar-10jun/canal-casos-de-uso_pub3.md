# Canal Casos de Uso Reales — Pub 3 · Primer caso real
> Canal: Casos de Uso Reales · Fecha: Martes 10 junio · Tipo: Caso de uso
> Estado: Brief listo — pendiente aprobación Nibaldo · lunes 8 junio

---

## Objetivo de esta publicación

Primer caso de uso real publicado en la comunidad. El objetivo no es impresionar — es demostrar que Copilot resuelve algo concreto en el flujo de trabajo diario, sin necesidad de generar código nuevo.

El caso elegido: **entender código heredado en segundos**.

Razón: es la necesidad más universal del equipo (todos tienen código que nadie toca hace años) y es no-invasiva — no pides que genere nada, solo que explique lo que ya existe.

---

## Post listo para Teams

**Asunto:** `📁 Caso real: entiende un programa heredado en 30 segundos`

---

📁 **¿Cuánto tiempo llevas leyendo código antes de entender qué hace?**

En una de las sesiones de formación, alguien seleccionó un bloque de COBOL que nadie había tocado en años y le preguntó a Copilot:

> *"¿Qué hace este código? Explícamelo en términos de negocio, sin tecnicismos."*

La respuesta: una explicación clara, en español, en menos de 10 segundos.

**Lo que se hizo — 3 pasos:**
1. Selecciona el bloque de código que quieres entender
2. Escribe `#selection` en el chat de Copilot para que sepa qué mirar
3. Pregunta: *"¿Qué hace este código?"* o *"¿Qué regla de negocio implementa?"*

No necesitas que genere nada. Solo que te explique lo que ya tienes.

👉 **Pruébalo hoy en un programa que tengas abierto.**

---

## Tono de comunicación

Cercano y basado en algo real que pasó en las sesiones de GCO. No es un tutorial — es un "esto ya pasó aquí, tú también puedes hacerlo".

Claves de tono:
- Anclar en la situación real (código heredado, años sin tocarlo)
- Los 3 pasos deben parecer fáciles — porque lo son
- El CTA es concreto: "pruébalo hoy en un programa que tengas abierto"

---

## Procedencia del contenido

| Elemento | Fuente |
|----------|--------|
| Caso COBOL + explicación en lenguaje de negocio | `ejemplos_practicos_Github-Copilot.md` · Módulo 1 · COBOL Evolutivo (Material Base Sesión 1) |
| Uso de `#selection` para acotar contexto | `plan_de_capacitacion.md` · Capítulo 1 · Atajos y referencias |
| Validación con Nibaldo | Pendiente — confirmar si hay un ejemplo más específico de GCO que usar |

---

## Infografía / pieza gráfica

**Tipo de pieza:** mini-caso (formato infografía narrativa)

### Estructura visual

| Elemento | Texto |
|----------|-------|
| Franja canal | 📁 Casos de Uso Reales |
| Pill fase | Fase 1 · Concienciación |
| Título | Entender código heredado en 30 segundos |
| Situación (bloque intro) | "Un bloque de COBOL. Años sin tocarlo. Nadie recuerda para qué sirve." |
| Paso 1 | Selecciona el bloque · icono cursor |
| Paso 2 | Escribe `#selection` en el chat · icono chat |
| Paso 3 | Pregunta: "¿Qué hace este código?" · icono pregunta |
| Resultado | Explicación en español, en segundos · icono check |
| CTA | 👉 Pruébalo hoy en un programa que tengas abierto |
| Footer | Estrategia de Adopción · 2026 |

### Especificaciones para Figma
- Fondo: blanco
- Franja canal: `#DC0028` + texto blanco + icono 📁
- Pill fase: gris claro + texto `#DC0028`
- Bloques de pasos: numerados (1-3) con círculo rojo, texto negro, descripción gris
- Bloque resultado: fondo gris muy claro, texto negro bold
- Tipografía: Inter o Segoe UI (hasta confirmar design system Occident)
