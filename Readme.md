# Estrategia de Adopción de GitHub Copilot — GCO

**Cliente:** Grupo Catalana Occidente (GCO)  
**Equipo:** Yehimy Rincón (Jamie) · Nibaldo · Guillermo  
**Estado:** Post-formación — ecosistema de adopción activo (Mayo 2026)

---

## Documento principal

**[→ Abrir index.html](index.html)** — Presentación completa para stakeholders de GCO. Este es el documento central del proyecto: cubre contexto, propuesta, fases, soporte, métricas y decisiones solicitadas a dirección.

---

## Objetivo del proyecto

Convertir GitHub Copilot en un hábito real en el día a día de los equipos de desarrollo de GCO. Las 18 sesiones de formación técnica (6 grupos × 3 sesiones) ya dieron la base. Ahora el reto es sostener esa base con un ecosistema de contenidos, comunidad y soporte continuo.

---

## Arquitectura del proyecto

```
[1-GCO] Estrategia de Adopción de GitHub Copilot/
│
├── CLAUDE.md                    ← Configuración automática para Claude Code
├── Readme.md                    ← Este archivo
├── index.html                   ← Presentación principal (stakeholders)
│
├── .github/
│   └── copilot-instructions.md  ← Configuración para GitHub Copilot / Codex
│
├── Conocimiento/                ← Base de conocimiento e investigación
│   ├── README.md
│   ├── benchmarks-productividad-copilot.md
│   └── [archivos de investigación]
│
├── Configuraciones/             ← Prompts, configs de IA y estructura del asistente
│   ├── configuracion-ia-asistente.md  ← Leer primero para entender el proyecto
│   ├── claude-project-system-prompt.md
│   ├── config_canal-teams.md
│   ├── estructura_prompt.md
│   └── tareas.md
│
├── Planeacion/                  ← Estrategia, plan de acción, capacitación
│   ├── estrategia-de-adopcion-posformacion.md  ← Documento base estratégico
│   ├── plan_de_accion-estrategia_de_comunicacion.md
│   ├── plan_de_capacitacion.md
│   ├── ejemplos_practicos_Github-Copilot.md
│   └── resumen_ejecutivo.md
│
├── Design System/               ← Assets y referencias gráficas
├── Manual de marca/             ← Brand book Occident + fuentes tipográficas
├── Reuniones/                   ← Notas y grabaciones de reuniones
├── Seguimiento/                 ← Correos y seguimiento de helpdesk
└── Sesiones/                    ← Materiales de formación G1M–G6M (sesiones 1–3)
```

---

## Para asistentes IA (Claude, Copilot, Codex)

- **Claude Code:** Lee automáticamente `CLAUDE.md` al abrir este proyecto.
- **GitHub Copilot / Codex / otros IDEs:** Lee `.github/copilot-instructions.md`.
- **Configuración completa:** `Configuraciones/configuracion-ia-asistente.md` — incluye rol, restricciones, casos reales de GCO y formato de salida.

---

## Bookings del equipo

| Persona | Enlace |
|---------|--------|
| Nibaldo | https://bookings.cloud.microsoft/bookwithme/user/6d57b2816da84721a3b35ad1c293030a%40raona.com?ismsaljsauthenabled=&anonymous |
| Yehimy | https://bookings.cloud.microsoft/bookwithme/me/meetingtype/new |
