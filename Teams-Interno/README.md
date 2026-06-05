# Teams-Interno — Canal de coordinación interna del equipo Raona

> **Propósito:** Esta carpeta organiza todo el contenido y el registro de actividad del espacio de Teams interno creado para hacer seguimiento al avance semanal de la estrategia de adopción GitHub Copilot en GCO.
>
> ⚠️ Este espacio NO es el Teams de GCO para los developers. Es el equipo de coordinación interna del equipo Raona, creado en el **tenant de Raona**. Solo tienen acceso Nibaldo, Guillermo y Yehimy.

---

## Estructura de canales en Teams

| Canal en Teams | Propósito | Carpeta en proyecto |
|----------------|-----------|---------------------|
| **General** | Comunicación general del equipo. Coordinación, decisiones, conversaciones del día a día. | `Teams-Interno/General/` |
| **Avances del proyecto** | Resumen ejecutivo semanal del estado de la estrategia: publicaciones realizadas, contenido en producción y próximas entregas. Una publicación por semana. | `Teams-Interno/Avances-del-proyecto/` |
| **Producción y materiales** | Espacio donde Nibaldo sube grabaciones, notas y opiniones técnicas. Yehimy revisa e integra lo relevante al plan editorial. | `Teams-Interno/Produccion-y-materiales/` |

---

## Metodología de trabajo

### Canal General
- **Cadencia:** [FALTA INFORMACIÓN — confirmar con Yehimy: ¿cada lunes? ¿al inicio de cada semana del cronograma?]
- **Formato de publicación:** breve, directo, alineado con el cronograma. No es contenido de cara al cliente — es visibilidad interna entre los tres.
- **Estructura base de cada actualización:**
  1. Semana en curso y fase del cronograma
  2. Qué se completó desde la última actualización
  3. Qué está en curso / bloqueado
  4. Próximo paso
- **Audiencia:** Nibaldo, Guillermo y Yehimy únicamente

### Canal Producción y materiales
- Nibaldo sube grabaciones y notas técnicas **sin formato fijo** — como le salga en el momento
- Yehimy revisa → decide qué integrar al plan → lo traslada a `Planeacion/` o `Produccion/`
- Cada ítem que Nibaldo sube se registra en `Teams-Interno/Produccion-y-materiales/nibaldo/registro-nibaldo.md`
- Las integraciones al plan se documentan en `Teams-Interno/Produccion-y-materiales/integraciones/registro-integraciones.md`

---

## Estructura de carpetas

```
Teams-Interno/
├── README.md                              ← este archivo (cómo funciona todo)
├── General/
│   └── actualizaciones-semanales/        ← posts generales del canal General
├── Avances-del-proyecto/                  ← resúmenes ejecutivos semanales
│   └── semana-N_DDmes.md                 ← un archivo por semana
└── Produccion-y-materiales/
    ├── nibaldo/
    │   └── registro-nibaldo.md           ← log de todo lo que Nibaldo ha subido
    ├── integraciones/
    │   └── registro-integraciones.md     ← qué se integró al plan y dónde quedó
    └── propuestas/                        ← briefs propuesta para validación de Nibaldo
```

---

## Reglas de esta carpeta

1. **Cada entrada de Nibaldo se registra**, aunque no se integre. Campos: fecha, tema, formato (vídeo/nota/comentario), estado (pendiente / integrado / descartado).
2. **Las actualizaciones del canal General** van numeradas por semana y reflejan el cronograma real — no el ideal.
3. **Nunca se publica en Teams** algo que no esté primero en esta carpeta. La carpeta es la fuente de verdad.
4. **Si algo cambia en el Teams**, se actualiza aquí también — y si afecta al plan global, se actualiza en `Planeacion/` y en `CLAUDE.md`.
