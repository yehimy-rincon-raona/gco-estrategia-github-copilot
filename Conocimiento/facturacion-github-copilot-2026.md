# Facturación de GitHub Copilot — cambio a modelo usage-based (2026)

> **Fuente:** Documentación oficial de GitHub y blog de GitHub (consultado el 21 junio 2026).
> **Fecha del cambio:** 1 de junio de 2026.
> **Relevancia para el proyecto:** resuelve el punto que levantó Jonatan en el canal colaborativo — el modelo 0x/1x/3x ya cambió. Impacta directamente la tarjeta "Optimización de Tokens y Modelos" (Pub 8/9), que está construida sobre el esquema antiguo.

---

## Qué cambió

El **1 de junio de 2026**, GitHub Copilot pasó de un modelo de **peticiones premium** (premium requests / PRUs, con multiplicadores 0x/1x/3x por modelo) a un modelo de **facturación por uso (usage-based)** basado en **GitHub AI Credits**.

| Concepto | Modelo anterior (legacy) | Modelo nuevo (desde 1 jun 2026) |
|----------|--------------------------|----------------------------------|
| Unidad de consumo | Peticiones premium (PRUs) con multiplicador por modelo (0x / 1x / 3x…) | **GitHub AI Credits**, consumidos según **tokens** (entrada + salida + cacheados) |
| Cómo se mide | Cada interacción = N peticiones según el multiplicador del modelo | Consumo de tokens según las tarifas de API publicadas por cada modelo |
| Asignación | Bolsa mensual de peticiones premium | **Bolsa mensual de AI Credits** por plan |

> Importante: el esquema **0x / 1x / 3x** sobre el que está hecha la tarjeta de Pub 8/9 quedó como **legacy**. Solo sigue vigente para suscriptores de **planes anuales** que mantienen el modelo de peticiones hasta que expire su suscripción (y a esos usuarios los multiplicadores les **subieron** el 1 de junio).

---

## Bolsa mensual de AI Credits por plan

| Plan | Coste | AI Credits mensuales (base) |
|------|-------|------------------------------|
| Copilot Pro | $10/mes | $10 |
| Copilot Pro+ | $39/mes | $39 |
| Copilot Business | $19/usuario/mes | $19 (base) |
| Copilot Enterprise | $39/usuario/mes | $39 (base) |

**Créditos promocionales (jun–ago 2026, solo Business/Enterprise):**
- Copilot Business: $30/mes
- Copilot Enterprise: $70/mes

---

## Cómo se consume el crédito

El consumo se calcula por **tokens**: entrada, salida y tokens cacheados, según las **tarifas de API publicadas para cada modelo**. Es decir, ya no es "este modelo cuesta 3x"; ahora es "este modelo cuesta X por cada millón de tokens", y el gasto depende del tamaño real de cada conversación.

Esto refuerza —en lugar de invalidar— el mensaje de fondo de nuestras tarjetas de eficiencia:
- **Acotar el contexto** (referencias precisas en vez de pegar todo) sigue ahorrando, ahora de forma aún más directa (menos tokens = menos crédito).
- **Higiene de la memoria / hilos cortos** sigue siendo válido (menos historial arrastrado = menos tokens).
- Lo que cambia es el **encuadre del coste**: ya no hablamos de "multiplicadores 0x/1x/3x" ni de "bolsa de peticiones", sino de **crédito por consumo de tokens**.

---

## Implicación para el contenido del proyecto

1. **Tarjeta "Optimización de Tokens y Modelos" (Pub 8/9):** está construida con el esquema 0x/1x/3x y "bolsa de peticiones premium". **Hay que reformularla** al modelo de AI Credits / tokens antes de publicar. No publicarla tal como está.
2. **Confirmación que sigue dependiendo de Nibaldo:** bajo qué plan están las licencias de GCO (Business o Enterprise) y si ya operan bajo el modelo nuevo o aún bajo un plan anual legacy. El modelo público ya está claro; el estado específico de GCO, no.
3. **El mensaje de eficiencia no se cae:** acotar contexto, elegir el modelo adecuado y mantener hilos limpios siguen siendo válidos. Solo cambia el vocabulario del coste.

---

## Pendiente de confirmar con Nibaldo (no inventar)

- Plan exacto de las licencias de GCO (Business / Enterprise) y bolsa mensual real.
- Si GCO ya está en el modelo usage-based (AI Credits) o en un plan anual con peticiones legacy.
- Si GCO quiere que las tarjetas mencionen cifras de crédito concretas o se mantengan en el plano conceptual (recomendado: conceptual, para no atar el contenido a precios que cambian).

---

## Fuentes

- [GitHub Copilot is moving to usage-based billing — The GitHub Blog](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/)
- [Models and pricing for GitHub Copilot — GitHub Docs](https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing)
- [Usage-based billing for individuals — GitHub Docs](https://docs.github.com/en/copilot/concepts/billing/billing-for-individuals)
- [Requests in GitHub Copilot (legacy) — GitHub Docs](https://docs.github.com/en/copilot/concepts/billing/copilot-requests)
