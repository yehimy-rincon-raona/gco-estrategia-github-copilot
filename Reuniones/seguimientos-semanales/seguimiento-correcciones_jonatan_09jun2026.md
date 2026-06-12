# Seguimiento de correcciones — Feedback Jonatan · 9 junio 2026
> Origen: Reunión de revisión de contenido semanal · `revisión-contenido-semanal-comunicacion_team-copilot_09-06-26.docx`
> Afecta: Pub 2 (Primeros Pasos) · Video 1 · Piezas gráficas S1

---

## Resumen del feedback

Jonatan revisó el canal **Primeros Pasos** y detectó que el contenido asume que los developers tienen que instalar Visual Studio — lo cual no es correcto. Visual Studio ya está instalado en todas las máquinas corporativas. Además solicitó añadir el flujo de solicitud de licencia y el Portal de Empresa como referencias claras.

---

## Checklist de cambios

### Archivos de texto

- [x] **`infografia_instalacion-copilot-vs.md`** — Brief de `S1-Infografia_paso-a-paso.jpg` actualizado
  - Título: "Instala y activa..." → "Activa GitHub Copilot en Visual Studio"
  - Subtítulo: "5 pasos para dejar el entorno listo..." → "Lo que necesitas antes de escribir tu primer prompt"
  - Añadido bloque introductorio (VS ya instalado + flujo solicitud de licencia)
  - Paso 1: "Descarga Visual Studio" → "Abre Visual Studio"
  - Paso 2: "Ejecuta el instalador" → "¿Necesitas algo más? Portal de Empresa"
  - Nota al pie: tip del terminal en lugar de tip del panel Copilot
  - Specs Figma: añadida sección bloque introductorio

- [x] **`guion-video1_pub2.md`** — Archivo nuevo creado (separado de la infografía)
  - Guión simplificado del Video 1 con todos los cambios aplicados
  - Aviso previo sobre VS ya instalado y flujo de licencia
  - Sin referencias a "instalar Visual Studio"

- [ ] **`canal-primeros-pasos_pub2-video1.md`** — Post de Teams
  - Línea 23: cambiar "cómo **instalarlo**" → "cómo **activarlo**"

- [ ] **`Produccion/Videos/v01_configuracion-entorno/pildoras-agiles_configuracion-del-entorno.md`** — Guión completo Video 1
  - Sección 2: reescribir — eliminar "instalación desde ejecutable", reemplazar por "VS ya está en tu máquina"
  - Añadir sección nueva: flujo de solicitud de licencia (My Profile → 2 clics → ~40 min)

- [ ] **`Produccion/Videos/v01_configuracion-entorno/v01-pill01-para-grabacion_instalacion.md`** — Script de grabación
  - Sección 1: eliminar instrucción de grabar "ejecutable + instalador"
  - Reemplazar por: grabar icono en escritorio + Portal de Empresa + flujo My Profile

---

### Piezas gráficas en Figma

- [ ] **`S1-Infografia_paso-a-paso.jpg`** — Infografía principal
  - Añadir bloque introductorio antes del paso 1 (fondo `#F2F2F2`, borde izquierdo `#DC0028`)
    - Item 1: "Visual Studio ya está instalado — icono en el escritorio, doble clic"
    - Item 2: "¿Sin licencia? My Profile → menú lateral → 2 clics → ~40 min"
  - Paso 1: cambiar texto e icono — "Abre Visual Studio" (icono: 💻 escritorio)
  - Paso 2: cambiar texto e icono — "Portal de Empresa" (icono: 🏢 aplicativo)
  - Pasos 3, 4, 5: sin cambios de contenido

- [ ] **`S1-Card_paso1.png` / `S1-Card_paso-1.jpg` / `S1-Card_paso1-A.jpg`** — Cards del paso 1
  - Rediseñar completo: el mensaje cambia de "Descarga Visual Studio" a "Visual Studio ya está en tu máquina"

---

### Pendiente de Nibaldo (grabación Video 1)

- [ ] Confirmar que la sección **Portal de Empresa** ya está grabada (Nibaldo lo mencionó en la reunión)
- [ ] Grabar nueva sección: **flujo de solicitud de licencia** (My Profile de Microsoft → menú lateral → 2 clics → Solicitar acceso → ~40 minutos)

---

## Notas adicionales de la reunión

- **Acceso al Teams de GCO:** Jonatan va a gestionar usuario/contraseña y licencia Teams para Guillermo Tato, para que Yehimy pueda publicar con sus credenciales mientras no haya acceso externo directo.
- **Dinámica de revisión futura:** el equipo de Pasiona (José María como punto de contacto) revisará guiones en canal compartido antes de grabar, no en reunión sincrónica.
- **Canal de ideas compartido:** Nibaldo propuso un canal común para que todos aporten casos de uso y errores frecuentes detectados en sesiones — Yehimy lo gestiona como fuente de contenido.