# Configuración — Canal Interno de Teams

> **Nombre del espacio:** Estrategia de Adopción GitHub Copilot GCO  
> **Tipo:** Equipo (Team) de Microsoft Teams — espacio separado del Teams de GCO  
> **Tenant:** Raona (no en el tenant de Occidente)  
> **Acceso:** Solo equipo Raona — Nibaldo, Guillermo y Yehimy  
> **Fecha de creación:** 4 junio 2026

---

## Canales

### 1. General

| Campo | Detalle |
|-------|---------|
| **Propósito** | Hacer visible el avance semanal del equipo Raona respecto al cronograma de la estrategia de adopción |
| **Contenido** | Actualizaciones de progreso, hitos alcanzados, bloqueos activos, próximo paso |
| **Cadencia** | [FALTA INFORMACIÓN — confirmar con Yehimy] |
| **Tono** | Informativo, operativo, directo — solo lo ven Nibaldo, Guillermo y Yehimy |
| **Quién publica** | Yehimy (principalmente) |
| **Carpeta fuente** | `Teams-Interno/General/actualizaciones-semanales/` |

### 2. Avances del proyecto

| Campo | Detalle |
|-------|---------|
| **Propósito** | Visibilidad semanal del estado de la estrategia de adopción: publicaciones realizadas, contenido en producción y próximas entregas |
| **Contenido** | Resumen ejecutivo semanal — qué se publicó, qué está en producción, qué viene la próxima semana |
| **Cadencia** | Una publicación por semana, al cierre de cada semana de ejecución |
| **Tono** | Profesional y ejecutivo — sin presión, sin checkboxes, orientado a visibilidad |
| **Quién publica** | Yehimy |
| **Carpeta fuente** | `Teams-Interno/Avances-del-proyecto/` |

### 3. Producción y materiales

| Campo | Detalle |
|-------|---------|
| **Propósito** | Espacio centralizado para que Nibaldo suba grabaciones, opiniones técnicas y notas que alimenten el plan editorial |
| **Contenido** | Vídeos, notas, comentarios técnicos de Nibaldo. Sin formato fijo. |
| **Cadencia** | Según disponibilidad de Nibaldo — sin cadencia fija |
| **Quién publica** | Nibaldo (aportes) + Yehimy (integraciones al plan) |
| **Registro** | `Teams-Interno/Produccion-y-materiales/nibaldo/registro-nibaldo.md` |
| **Integraciones** | `Teams-Interno/Produccion-y-materiales/integraciones/registro-integraciones.md` |

---

## Flujo de trabajo: Nibaldo → Plan

```
Nibaldo sube algo en "Producción y materiales"
        ↓
Yehimy lo registra en registro-nibaldo.md (estado: ⏳ Pendiente)
        ↓
Yehimy lo evalúa (estado: 🔄 En evaluación)
        ↓
   ¿Se integra?
   Sí → Yehimy lo traslada a Planeacion/ o Produccion/
         Actualiza registro-nibaldo.md → ✅ Integrado
         Crea entrada en registro-integraciones.md
   No → registro-nibaldo.md → ❌ Descartado (con motivo)
```

---

## Relación con el canal GCO (el de los developers)

Este canal interno **no reemplaza** el canal de Teams de GCO — son espacios distintos con audiencias distintas:

| | Canal Interno (este) | Canal GCO (developers) |
|-|---------------------|------------------------|
| **Audiencia** | Solo Nibaldo, Guillermo y Yehimy | Developers de GCO |
| **Tenant** | Raona | Occidente |
| **Contenido** | Coordinación interna, avance semanal, aportes de Nibaldo | Tips, casos de uso, formación |
| **Tono** | Operativo, interno, sin formato editorial | "Tono de colega", cercano, editorial |
| **Canales** | General + Producción y materiales + Avances del proyecto | 6 canales (ver `config_canal-teams.md`) |
