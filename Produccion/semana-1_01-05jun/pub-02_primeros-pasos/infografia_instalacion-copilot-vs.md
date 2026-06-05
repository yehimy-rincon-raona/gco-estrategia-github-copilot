# Brief de infografía — Pub 2 · Instalación de Copilot en Visual Studio
> Canal: Primeros Pasos con Copilot · Fecha: Jueves 5 junio
> Herramienta de diseño: Figma
> Uso: adjunta al post de Teams · funciona de forma autónoma

---

## Concepto

La infografía muestra el **paso a paso para instalar y activar GitHub Copilot en Visual Studio**, de forma que un developer pueda seguirlo sin ver el vídeo. Si ve el vídeo, le sirve como referencia rápida. Si no lo ve, le sirve como guía completa.

Tono visual: claro, limpio, técnico sin ser intimidante. Numerado y sin texto innecesario.

---

## Textos de la infografía

### Franja de canal
> 🪡 Primeros Pasos con Copilot

### Pill de fase
> Fase 1 · Concienciación

### Título principal
> **Instala y activa Copilot en Visual Studio**

### Subtítulo
> 5 pasos para dejar el entorno listo antes de tu primera pregunta

---

### Pasos (contenido de los 5 bloques)

| # | Título del paso | Descripción breve | Icono sugerido |
|---|----------------|-------------------|----------------|
| 1 | **Descarga Visual Studio** | Obtén el ejecutable desde el canal corporativo de tu equipo | 💾 descarga / portal |
| 2 | **Ejecuta el instalador** | Selecciona la edición corporativa y deja que avance la instalación | ⚙️ engranaje / instalador |
| 3 | **Vincula tu cuenta corporativa** | Inicia sesión con la cuenta corporativa de GitHub desde el perfil de usuario de Visual Studio | 👤 usuario / cuenta |
| 4 | **Abre GitHub Copilot Chat** | Ve al panel lateral derecho del IDE y abre el panel de GitHub Copilot Chat | 💬 chat / panel |
| 5 | **Verifica que está activo** | Si ves el campo para escribirle a Copilot, el entorno está listo | ✅ check / activo |

---

### Nota al pie (dentro de la infografía)
> ¿No ves el panel de Copilot? Busca "GitHub Copilot Chat" en el menú Ver de Visual Studio.

### Footer
> Estrategia de Adopción · 2026

---
# Opción 2
# Píldora ágil · Video 1

# Configura tu entorno

## Primer paso para usar GitHub Copilot en Visual Studio

Antes de pedir código, asegúrate de que tu entorno esté listo.

---

## ¿Para qué sirve esta comprobación?

Evita bloqueos iniciales y te permite empezar a trabajar con Copilot de forma controlada.

---

## 1. Instala Visual Studio

Usa el ejecutable disponible en el canal corporativo correspondiente.

Cuando termine la instalación, el entorno estará listo para empezar.

---

## 2. Valida Copilot y tu cuenta corporativa

Abre **GitHub Copilot Chat** en Visual Studio.

Si ves el campo **“Preguntar a Copilot”**, el asistente ya está activo.

Después, revisa el avatar superior derecho y confirma que estás con la cuenta corporativa de GCO.

### Comprueba que tienes:

* GitHub Copilot Chat visible.
* Cuenta corporativa correcta.

---

## 3. Abre un proyecto de prueba

Crea o abre un proyecto sencillo.

No hace falta desarrollar nada todavía.

Solo queremos comprobar que:

* Visual Studio carga bien.
* El proyecto se abre correctamente.
* Copilot puede trabajar con el contexto del IDE.

---

## 4. Revisa la terminal

Si vas a ejecutar comandos o scripts, comprueba que usas el perfil adecuado.

Cuando aplique, valida **PowerShell 7** para evitar errores por diferencias entre versiones.

Comando de referencia:

```powershell
$PSVersionTable.PSVersion
```

---

## 5. Dale contexto a Copilot

Prepara el archivo:

```text
copilot-instructions.md
```

Dentro de la carpeta:

```text
.github
```

Este archivo sirve para definir reglas básicas del equipo, por ejemplo:

* Idioma de respuesta.
* Estilo de documentación.
* Convenciones de código.
* Criterios técnicos del proyecto.

**Contexto claro = mejores respuestas.**

---

## Al terminar, deberías tener:

* Visual Studio listo.
* Copilot activo.
* Cuenta corporativa validada.
* Terminal revisada.

---

## Siguiente vídeo

**Primera interacción útil con Copilot**

---

Contenido de apoyo para la comunidad de adopción de GitHub Copilot en GCO.


---

## Especificaciones visuales para Figma

### Estructura del layout
- **Formato:** vertical · proporción recomendada 1080 × 1350 px (Instagram/Teams compatible) o 1080 × 1920 px si se quiere más espacio entre pasos
- **Distribución:** cabecera (franja + pill + título + subtítulo) · bloque de 5 pasos en columna · nota al pie · footer

### Cabecera
- Franja de canal: fondo `#DC0028` · texto blanco · icono 🪡 a la izquierda · tipografía bold
- Pill de fase: fondo gris claro `#F2F2F2` · texto `#DC0028` · bordes redondeados
- Título: tipografía principal bold · tamaño grande · color negro `#1A1A1A`
- Subtítulo: tipografía regular · tamaño medio · color gris `#555555`
- Fondo de la cabecera: blanco

### Pasos
- Numeración: círculo `#DC0028` · número blanco · tamaño prominente
- Título del paso: tipografía bold · negro
- Descripción: tipografía regular · gris oscuro
- Fondo de cada paso: blanco con separador sutil entre pasos (línea o espacio)
- Icono: pequeño, alineado a la derecha o al inicio del bloque (a definir en Figma)

### Nota al pie
- Fondo: gris muy claro `#F7F7F7`
- Texto: gris medio · icono ℹ️ al inicio
- Tipografía: regular · tamaño pequeño

### Footer
- Texto: gris · tamaño pequeño · alineado a la izquierda o centrado
- Puede incluir logo GCO / Raona si aplica

### Tipografía
- Usar la fuente definida en el design system de Occident cuando esté disponible
- Fallback: Inter o Segoe UI

---

## Relación con el Vídeo 1

Los 5 pasos de la infografía corresponden a las secciones del Vídeo 1:
- Paso 1 → Sección 1 del guión (descarga desde canal corporativo)
- Paso 2 → Sección 1 del guión (instalador)
- Paso 3 → Sección 2 del guión (vinculación cuenta corporativa)
- Paso 4-5 → Sección 3 del guión (verificación Copilot Chat activo)

La infografía omite intencionalmente los pasos de terminal (PowerShell 7) y del archivo `copilot-instructions.md` para mantener el foco en la instalación básica. Esos temas irán en publicaciones siguientes.
