# Conocimiento — Base de Investigación del Proyecto

Esta carpeta contiene **investigación, referencias y análisis externos** que alimentan el proyecto de adopción de GitHub Copilot en GCO.

> **Importante:** Esta carpeta es una fuente de información, no el proyecto en sí. Los materiales aquí sirven para enriquecer argumentos ante stakeholders, fundamentar decisiones estratégicas, y explorar temas antes de crear contenidos.

---

## Propósito

| Objetivo | Descripción |
|----------|-------------|
| **Investigación** | Datos, estudios y benchmarks sobre adopción de IA en entornos enterprise |
| **Referencia** | Casos de éxito de empresas similares (sector financiero/asegurador, legacy, COBOL) |
| **Argumentación** | Evidencia para respaldar decisiones ante stakeholders de GCO |
| **Exploración** | Temas emergentes (Spec-Driven Development, MCP, nuevas versiones de Copilot) que podrían integrarse en fases futuras |

---

## Archivos disponibles

| Archivo | Contenido |
|---------|-----------|
| `resistencia-adopcion-ia.md` | Causas de resistencia a la IA en entornos técnicos y estrategias probadas para superarla |
| `benchmarks-productividad-copilot.md` | Métricas y estudios de productividad con GitHub Copilot (GitHub, McKinsey, Accenture) |
| `casos-exito-sector-financiero.md` | Empresas del sector financiero/asegurador que han adoptado IA con éxito (referencias) |
| `glosario-tecnico-gco.md` | Glosario de términos técnicos del stack de GCO para contextualizar contenidos |
| `facturacion-github-copilot-2026.md` | Cambio de GitHub Copilot a facturación usage-based (AI Credits) el 1 jun 2026 — fin del modelo 0x/1x/3x. Impacta la tarjeta de tokens de Pub 8/9 |
| `gan-framework-interno-gco.md` | GAN, el framework interno de GCO (.NET/WCF) con el que se construyen las operativas: anatomía, relación con COBOL, el mito "GAN no se toca con IA" y cómo lo desmonta el caso de Luis (Videos 05–06) |

### Subcarpeta `temas_mes-agosto/`

Material fuente recibido del equipo (Nibaldo/Esteban-Pasiona) para la serie de contenidos de agosto sobre la gco-dev-suite y Skills — insumo sin filtrar, consultado directamente desde `Planeacion/Semana-7_plan-agosto-devsuite/plan-agosto_devsuite-skills-mcp-agentes.md`.

| Archivo | Contenido |
|---------|-----------|
| `información-equipo-raona-gco-devsuite.md` (+ `.doc`) | Primera respuesta real del equipo de Nibaldo (6 ago 2026): qué es la gco-dev-suite, arquitectura (3 agentes, 32 skills, 5 MCPs), problemas que resuelve, decisiones de diseño. Registrada en `Teams-Interno/Produccion-y-materiales/nibaldo/registro-nibaldo.md` |
| `material-base_skills-que-son-y-cuando-usarlas.md` | Material sobre Skills enviado por Esteban Serrano (Raona/Pasiona) tras la reunión del 3 ago 2026 — definición, anatomía, niveles de personalización, casos de uso |
| `resumen-skills_Copilot_Informacion.docx` | Documento original (Word) del que se organizó el material-base anterior |
| `[GCO] Propuesta de temas para agosto - Estrategia de adopción de Github Copilot .docx` | Propuesta de temas de agosto recibida del equipo |

---

## Cómo usar esta carpeta

1. **Para crear contenidos**: Busca aquí métricas o casos reales para hacer los posts más creíbles.
2. **Para presentaciones**: Extrae datos de benchmarks para la sección de "oportunidad" ante directivos.
3. **Para responder objeciones**: La investigación sobre resistencia a la IA te da argumentos para el equipo de GCO.
4. **Para explorar temas futuros**: La carpeta puede crecer con investigación sobre temas que surjan en el proyecto.

---

## Cómo añadir nuevo conocimiento

Cuando encuentres un estudio, artículo, caso de éxito o dato relevante:

1. Crea un archivo `.md` con nombre descriptivo.
2. Incluye al inicio: fuente, fecha, relevancia para el proyecto.
3. Extrae solo lo que sea útil — no copies contenido completo sin filtrar.
4. Actualiza la tabla de "Archivos disponibles" en este README.
