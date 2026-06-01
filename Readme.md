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
├── Planeacion/                  ← Planificación operativa semana a semana
│   ├── Semana-0_planeacion-del-proyecto/   Plan maestro, estrategia y modelo operativo
│   └── Semana-1_primer-plan-de-contenidos/ Timeline, checklist y plan de contenidos
│       └── timeline-y-checklist.md         ← Documento operativo principal
│
├── Produccion/                  ← Material producido semana a semana
│   ├── README.md                ← Convenciones y estructura
│   ├── semana-0_25-29may/       Producción interna (guiones, bocetos, assets de marca)
│   │   ├── videos/
│   │   │   ├── v01_configuracion-entorno/
│   │   │   ├── v02_primeros-pasos/
│   │   │   └── v03_como-interactuar/
│   │   └── graficas/
│   └── semana-1_01-05jun/       Contenidos para publicar en Teams GCO
│       ├── pub-01_anuncios-tips/     Pub 1 · Martes 3 jun
│       └── pub-02_primeros-pasos/    Pub 2 · Jueves 5 jun
│
├── Conocimiento/                ← Investigación, benchmarks y referencias externas
│   └── README.md
│
├── Configuraciones/             ← Prompts, configs de IA y estructura del asistente
│   ├── configuracion-ia-asistente.md  ← Leer primero para entender el proyecto
│   ├── claude-project-system-prompt.md
│   ├── estructura_prompt.md
│   └── tareas.md
│
├── Design System/               ← Assets gráficos, referencias visuales y prompt de diseño
├── Manual de marca/             ← Brand book Occident + fuentes tipográficas
├── Presentaciones/              ← Presentaciones del proyecto
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
