/* ============================================================
   GoodApps SAS — Datos del organigrama
   ------------------------------------------------------------
   Este archivo es texto plano y editable directamente en GitHub.
   Reemplazá los nombres "(a completar)" por los reales y ajustá
   el campo "status" de cada puesto. No hace falta tocar el código.

   status admitidos: Ocupado | Vacante | En búsqueda | Onboarding | Licencia | Interino
   ============================================================ */
window.GOODAPPS_ORG = {
  meta: {
    empresa: "GoodApps SAS",
    subtitle: "Organigrama interactivo",
    industria: "Software",
    etapa: "Scaleup",
    actualizado: "2026-06-16",
    moneda: "ARS"
  },

  areas: {
    direccion:   { label: "Dirección General",            color: "#0F3E57" },
    tecnologia:  { label: "Tecnología",                   color: "#1E7A8C" },
    producto:    { label: "Producto",                     color: "#2A9D8F" },
    comercial:   { label: "Comercial",                    color: "#3A7D44" },
    marketing:   { label: "Marketing",                    color: "#6A8D2F" },
    operaciones: { label: "Operaciones",                  color: "#9A6A3A" },
    finanzas:    { label: "Finanzas y Administración",    color: "#7A5C8E" },
    people:      { label: "People / RRHH",                color: "#B0566E" },
    legal:       { label: "Legal y Compliance",           color: "#566B7A" },
    seguridad:   { label: "Seguridad de la Información",  color: "#3E5066" },
    calidad:     { label: "Calidad (QMS)",                color: "#4A7C59" }
  },

  statuses: {
    "Ocupado":     { color: "#2E9E6B" },
    "Vacante":     { color: "#E0524D" },
    "En búsqueda": { color: "#E08A3C" },
    "Onboarding":  { color: "#3B82C4" },
    "Licencia":    { color: "#9A8FB0" },
    "Interino":    { color: "#C9A227" }
  },

  /* Sedes / ubicaciones disponibles (editables desde la web o acá).
     El campo "location" de cada rol debería coincidir con una de estas. */
  sedes: ["Villa del Rosario", "Cordoba", "HomeOffice", "Hibrido"],

  changelog: [
    { fecha: "2026-06-17", autor: "Editor", detalle: "Sedes redefinidas: Villa del Rosario, Cordoba, HomeOffice, Hibrido. Ubicaciones remapeadas (Buenos Aires→Cordoba, Remoto/Distribuido→HomeOffice)." },
    { fecha: "2026-06-16", autor: "Sistema", detalle: "Estructura inicial estándar de empresa de software creada (plantilla de ejemplo)." }
  ],

  /* ---- Nodos ---- */
  nodes: [
    {
      id: "dir-ceo", title: "CEO / Director General", name: "(a completar)",
      area: "direccion", reportsTo: null, dotted: [], seniority: "C-Level", band: "E1",
      critical: true, successor: null, status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-01-15", nextReview: "2026-07-15", headcount: 1,
      mission: "Definir la visión y estrategia de la compañía y asegurar su sostenibilidad y crecimiento.",
      responsibilities: ["Estrategia y dirección general", "Relación con inversores y board", "Cultura y liderazgo ejecutivo"],
      kpis: ["Crecimiento de ingresos", "EBITDA", "Net Revenue Retention"],
      authority: "Total", careerNext: "Presidente / Board", skillsGap: "—"
    },
    {
      id: "dir-ea", title: "Executive Assistant", name: "(a completar)",
      area: "direccion", reportsTo: "dir-ceo", dotted: [], seniority: "Semi-Senior", band: "P2",
      critical: false, successor: null, status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-02-01", nextReview: "2026-08-01", headcount: 1,
      mission: "Dar soporte ejecutivo a Dirección y coordinar agenda y comunicaciones.",
      responsibilities: ["Gestión de agenda", "Coordinación de reuniones de board", "Soporte administrativo a Dirección"],
      kpis: ["Cumplimiento de agenda", "Tiempo de respuesta"],
      authority: "Baja", careerNext: "Office Manager", skillsGap: "—"
    },

    /* ===== TECNOLOGÍA ===== */
    {
      id: "tec-cto", title: "CTO", name: "(a completar)",
      area: "tecnologia", reportsTo: "dir-ceo", dotted: [], seniority: "C-Level", band: "E1",
      critical: true, successor: "tec-arch", status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-01-20", nextReview: "2026-07-20", headcount: 1,
      mission: "Liderar la estrategia tecnológica y garantizar la escalabilidad, calidad y seguridad del producto.",
      responsibilities: ["Arquitectura y roadmap técnico", "Liderazgo de Ingeniería", "Decisiones de plataforma y tooling"],
      kpis: ["Disponibilidad (uptime)", "Lead time de cambios", "Tasa de fallas en despliegue"],
      authority: "Alta", careerNext: "VP Engineering / CTO en mayor escala", skillsGap: "—"
    },
    {
      id: "tec-arch", title: "Arquitecto/a de Software", name: "(a completar)",
      area: "tecnologia", reportsTo: "tec-cto", dotted: [], seniority: "Staff", band: "T6",
      critical: true, successor: null, status: "Ocupado",
      location: "HomeOffice", modality: "Remoto", contract: "Full-time",
      ingreso: "—", lastReview: "2025-11-10", nextReview: "2026-05-10", headcount: 1,
      mission: "Definir y custodiar la arquitectura de sistemas para asegurar escalabilidad y mantenibilidad.",
      responsibilities: ["Diseño de arquitectura", "Estándares de código", "Revisión técnica transversal"],
      kpis: ["Deuda técnica controlada", "Adopción de estándares"],
      authority: "Alta", careerNext: "CTO", skillsGap: "Liderazgo de equipos"
    },
    {
      id: "tec-em-be", title: "Engineering Manager — Backend", name: "(a completar)",
      area: "tecnologia", reportsTo: "tec-cto", dotted: [], seniority: "Manager", band: "M4",
      critical: false, successor: "tec-be-sr", status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-03-01", nextReview: "2026-09-01", headcount: 1,
      mission: "Liderar al equipo de Backend y garantizar la entrega de servicios robustos y seguros.",
      responsibilities: ["Gestión del equipo Backend", "Planificación de sprints", "Calidad y performance de APIs"],
      kpis: ["Velocity del equipo", "Cobertura de tests", "Incidentes en producción"],
      authority: "Media", careerNext: "Director de Ingeniería", skillsGap: "—"
    },
    {
      id: "tec-be-sr", title: "Backend Sr / Tech Lead", name: "(a completar)",
      area: "tecnologia", reportsTo: "tec-em-be", dotted: [], seniority: "Senior", band: "T5",
      critical: false, successor: null, status: "Ocupado",
      location: "HomeOffice", modality: "Remoto", contract: "Full-time",
      ingreso: "—", lastReview: "2026-02-15", nextReview: "2026-08-15", headcount: 1,
      mission: "Liderar técnicamente el desarrollo backend y mentorear al equipo.",
      responsibilities: ["Liderazgo técnico", "Code reviews", "Diseño de servicios"],
      kpis: ["Calidad de entregas", "Mentoring"],
      authority: "Media", careerNext: "Engineering Manager", skillsGap: "—"
    },
    {
      id: "tec-be", title: "Equipo Backend", name: "Equipo (8)",
      area: "tecnologia", reportsTo: "tec-em-be", dotted: [], seniority: "Mixto", band: "T2–T4",
      critical: false, successor: null, status: "Ocupado",
      location: "HomeOffice", modality: "Remoto", contract: "Full-time",
      ingreso: "—", lastReview: "2026-03-01", nextReview: "2026-09-01", headcount: 8,
      mission: "Desarrollar y mantener los servicios backend de la plataforma.",
      responsibilities: ["Desarrollo de features", "Mantenimiento de APIs", "Resolución de bugs"],
      kpis: ["Throughput", "Bugs por release"],
      authority: "Baja", careerNext: "Backend Sr", skillsGap: "Observabilidad"
    },
    {
      id: "tec-em-fe", title: "Engineering Manager — Frontend", name: "(a completar)",
      area: "tecnologia", reportsTo: "tec-cto", dotted: [], seniority: "Manager", band: "M4",
      critical: false, successor: "tec-fe-sr", status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-03-01", nextReview: "2026-09-01", headcount: 1,
      mission: "Liderar al equipo de Frontend y garantizar experiencias de usuario performantes.",
      responsibilities: ["Gestión del equipo Frontend", "Calidad de UI", "Performance web"],
      kpis: ["Core Web Vitals", "Velocity", "Bugs de UI"],
      authority: "Media", careerNext: "Director de Ingeniería", skillsGap: "—"
    },
    {
      id: "tec-fe-sr", title: "Frontend Sr / Tech Lead", name: "(a completar)",
      area: "tecnologia", reportsTo: "tec-em-fe", dotted: [], seniority: "Senior", band: "T5",
      critical: false, successor: null, status: "Ocupado",
      location: "HomeOffice", modality: "Remoto", contract: "Full-time",
      ingreso: "—", lastReview: "2026-02-15", nextReview: "2026-08-15", headcount: 1,
      mission: "Liderar técnicamente el desarrollo frontend y los estándares de UI.",
      responsibilities: ["Liderazgo técnico", "Design system", "Code reviews"],
      kpis: ["Calidad de UI", "Reutilización de componentes"],
      authority: "Media", careerNext: "Engineering Manager", skillsGap: "—"
    },
    {
      id: "tec-fe", title: "Equipo Frontend", name: "Equipo (6)",
      area: "tecnologia", reportsTo: "tec-em-fe", dotted: [], seniority: "Mixto", band: "T2–T4",
      critical: false, successor: null, status: "Ocupado",
      location: "HomeOffice", modality: "Remoto", contract: "Full-time",
      ingreso: "—", lastReview: "2026-03-01", nextReview: "2026-09-01", headcount: 6,
      mission: "Desarrollar las interfaces de la plataforma.",
      responsibilities: ["Desarrollo de UI", "Integración con APIs", "Accesibilidad"],
      kpis: ["Velocity", "Bugs de UI"],
      authority: "Baja", careerNext: "Frontend Sr", skillsGap: "Testing E2E"
    },
    {
      id: "tec-mobile", title: "Mobile Lead", name: "(a completar)",
      area: "tecnologia", reportsTo: "tec-cto", dotted: [], seniority: "Senior", band: "T5",
      critical: false, successor: null, status: "Vacante",
      location: "HomeOffice", modality: "Remoto", contract: "Full-time",
      ingreso: "—", lastReview: "—", nextReview: "—", headcount: 1,
      mission: "Liderar el desarrollo de las aplicaciones móviles.",
      responsibilities: ["Apps iOS/Android", "Estrategia mobile", "Publicación en stores"],
      kpis: ["Rating en stores", "Crash-free rate"],
      authority: "Media", careerNext: "Engineering Manager", skillsGap: "—"
    },
    {
      id: "tec-devops", title: "DevOps / SRE Lead", name: "(a completar)",
      area: "tecnologia", reportsTo: "tec-cto", dotted: [], seniority: "Senior", band: "T5",
      critical: true, successor: null, status: "Ocupado",
      location: "HomeOffice", modality: "Remoto", contract: "Full-time",
      ingreso: "—", lastReview: "2025-10-01", nextReview: "2026-04-01", headcount: 1,
      mission: "Garantizar la confiabilidad, observabilidad y automatización de la infraestructura.",
      responsibilities: ["CI/CD", "Infraestructura cloud", "Monitoreo y respuesta a incidentes"],
      kpis: ["Uptime", "MTTR", "Costo de infraestructura"],
      authority: "Alta", careerNext: "Head of Platform", skillsGap: "—"
    },
    {
      id: "tec-qa", title: "QA Lead", name: "(a completar)",
      area: "tecnologia", reportsTo: "tec-cto", dotted: ["qa-qms"], seniority: "Senior", band: "T5",
      critical: false, successor: null, status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-02-01", nextReview: "2026-08-01", headcount: 1,
      mission: "Asegurar la calidad del producto mediante estrategias de testing y automatización.",
      responsibilities: ["Estrategia de QA", "Automatización de tests", "Gestión de defectos"],
      kpis: ["Defect escape rate", "Cobertura automatizada"],
      authority: "Media", careerNext: "QA Manager", skillsGap: "—"
    },
    {
      id: "tec-qa-eng", title: "Equipo QA", name: "Equipo (3)",
      area: "tecnologia", reportsTo: "tec-qa", dotted: [], seniority: "Mixto", band: "T2–T4",
      critical: false, successor: null, status: "Ocupado",
      location: "HomeOffice", modality: "Remoto", contract: "Full-time",
      ingreso: "—", lastReview: "2026-02-01", nextReview: "2026-08-01", headcount: 3,
      mission: "Ejecutar pruebas manuales y automatizadas del producto.",
      responsibilities: ["Test cases", "Automatización", "Reporte de bugs"],
      kpis: ["Bugs detectados pre-prod"],
      authority: "Baja", careerNext: "QA Sr", skillsGap: "Performance testing"
    },
    {
      id: "tec-data", title: "Data / BI Lead", name: "(a completar)",
      area: "tecnologia", reportsTo: "tec-cto", dotted: [], seniority: "Senior", band: "T5",
      critical: false, successor: null, status: "En búsqueda",
      location: "HomeOffice", modality: "Remoto", contract: "Full-time",
      ingreso: "—", lastReview: "—", nextReview: "—", headcount: 1,
      mission: "Construir la capa de datos y analítica para la toma de decisiones.",
      responsibilities: ["Data warehouse", "Dashboards", "Modelos de datos"],
      kpis: ["Adopción de dashboards", "Calidad de datos"],
      authority: "Media", careerNext: "Head of Data", skillsGap: "—"
    },

    /* ===== PRODUCTO ===== */
    {
      id: "prod-cpo", title: "CPO / Head of Product", name: "(a completar)",
      area: "producto", reportsTo: "dir-ceo", dotted: [], seniority: "C-Level", band: "E1",
      critical: true, successor: null, status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-01-25", nextReview: "2026-07-25", headcount: 1,
      mission: "Definir la estrategia de producto y maximizar el valor entregado a los usuarios y al negocio.",
      responsibilities: ["Estrategia y roadmap de producto", "Priorización", "Liderazgo de Producto y Diseño"],
      kpis: ["Adopción de features", "NPS", "Time-to-market"],
      authority: "Alta", careerNext: "VP Product", skillsGap: "—"
    },
    {
      id: "prod-pm", title: "Product Managers", name: "Equipo (3)",
      area: "producto", reportsTo: "prod-cpo", dotted: [], seniority: "Mixto", band: "P3–P5",
      critical: false, successor: null, status: "Ocupado",
      location: "HomeOffice", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-02-10", nextReview: "2026-08-10", headcount: 3,
      mission: "Descubrir, definir y entregar producto que resuelva problemas reales de los usuarios.",
      responsibilities: ["Discovery", "Definición de features", "Métricas de producto"],
      kpis: ["Activación", "Retención de features"],
      authority: "Media", careerNext: "Group PM", skillsGap: "—"
    },
    {
      id: "prod-po", title: "Product Owners", name: "Equipo (2)",
      area: "producto", reportsTo: "prod-cpo", dotted: ["tec-cto"], seniority: "Semi-Senior", band: "P3",
      critical: false, successor: null, status: "Ocupado",
      location: "HomeOffice", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-02-10", nextReview: "2026-08-10", headcount: 2,
      mission: "Gestionar el backlog y asegurar la entrega de valor en cada sprint.",
      responsibilities: ["Backlog grooming", "Aceptación de historias", "Coordinación con Ingeniería"],
      kpis: ["Sprint goal hit rate"],
      authority: "Media", careerNext: "Product Manager", skillsGap: "—"
    },
    {
      id: "prod-design", title: "Head of Design (UX/UI)", name: "(a completar)",
      area: "producto", reportsTo: "prod-cpo", dotted: [], seniority: "Manager", band: "M4",
      critical: false, successor: null, status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-03-05", nextReview: "2026-09-05", headcount: 1,
      mission: "Liderar la experiencia de usuario y el sistema de diseño del producto.",
      responsibilities: ["Dirección de diseño", "Design system", "Coherencia de UX"],
      kpis: ["Usabilidad (SUS)", "Consistencia de UI"],
      authority: "Media", careerNext: "Director de Diseño", skillsGap: "—"
    },
    {
      id: "prod-ux", title: "Equipo de Diseño UX/UI", name: "Equipo (3)",
      area: "producto", reportsTo: "prod-design", dotted: [], seniority: "Mixto", band: "P2–P4",
      critical: false, successor: null, status: "Ocupado",
      location: "HomeOffice", modality: "Remoto", contract: "Full-time",
      ingreso: "—", lastReview: "2026-03-05", nextReview: "2026-09-05", headcount: 3,
      mission: "Diseñar interfaces y flujos centrados en el usuario.",
      responsibilities: ["Wireframes y prototipos", "Diseño visual", "Testing de usabilidad"],
      kpis: ["Tareas de diseño entregadas"],
      authority: "Baja", careerNext: "Diseñador Sr", skillsGap: "—"
    },
    {
      id: "prod-research", title: "UX Researcher", name: "(a completar)",
      area: "producto", reportsTo: "prod-design", dotted: [], seniority: "Semi-Senior", band: "P3",
      critical: false, successor: null, status: "Vacante",
      location: "HomeOffice", modality: "Remoto", contract: "Full-time",
      ingreso: "—", lastReview: "—", nextReview: "—", headcount: 1,
      mission: "Generar insights de usuario que informen las decisiones de producto.",
      responsibilities: ["Entrevistas", "Tests de usabilidad", "Síntesis de insights"],
      kpis: ["Estudios por trimestre"],
      authority: "Baja", careerNext: "UX Researcher Sr", skillsGap: "—"
    },

    /* ===== COMERCIAL ===== */
    {
      id: "com-cro", title: "Director Comercial / CRO", name: "(a completar)",
      area: "comercial", reportsTo: "dir-ceo", dotted: [], seniority: "C-Level", band: "E1",
      critical: true, successor: "com-cs", status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-01-30", nextReview: "2026-07-30", headcount: 1,
      mission: "Liderar la generación de ingresos y la estrategia comercial de la compañía.",
      responsibilities: ["Estrategia de ventas", "Pipeline y forecast", "Liderazgo del equipo comercial"],
      kpis: ["ARR", "Win rate", "CAC"],
      authority: "Alta", careerNext: "VP Revenue", skillsGap: "—"
    },
    {
      id: "com-ae", title: "Account Executives", name: "Equipo (4)",
      area: "comercial", reportsTo: "com-cro", dotted: [], seniority: "Mixto", band: "S3–S5",
      critical: false, successor: null, status: "Ocupado",
      location: "HomeOffice", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-02-20", nextReview: "2026-08-20", headcount: 4,
      mission: "Cerrar oportunidades de venta y expandir cuentas.",
      responsibilities: ["Gestión de oportunidades", "Negociación", "Cierre"],
      kpis: ["Quota attainment", "Deals cerrados"],
      authority: "Media", careerNext: "Senior AE / Sales Manager", skillsGap: "—"
    },
    {
      id: "com-sdr", title: "SDR / Prospecting", name: "Equipo (3)",
      area: "comercial", reportsTo: "com-cro", dotted: [], seniority: "Junior", band: "S2",
      critical: false, successor: null, status: "Ocupado",
      location: "HomeOffice", modality: "Remoto", contract: "Full-time",
      ingreso: "—", lastReview: "2026-02-20", nextReview: "2026-08-20", headcount: 3,
      mission: "Generar y calificar oportunidades de venta.",
      responsibilities: ["Prospección", "Calificación de leads", "Agendado de demos"],
      kpis: ["SQLs generados", "Tasa de conversión"],
      authority: "Baja", careerNext: "Account Executive", skillsGap: "—"
    },
    {
      id: "com-se", title: "Sales Engineer / Preventa", name: "(a completar)",
      area: "comercial", reportsTo: "com-cro", dotted: ["prod-cpo"], seniority: "Senior", band: "S5",
      critical: false, successor: null, status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-02-20", nextReview: "2026-08-20", headcount: 1,
      mission: "Dar soporte técnico al proceso comercial y demostrar el valor del producto.",
      responsibilities: ["Demos técnicas", "POCs", "Respuesta a RFPs"],
      kpis: ["Win rate técnico"],
      authority: "Media", careerNext: "Sales Engineering Lead", skillsGap: "—"
    },
    {
      id: "com-cs", title: "Head of Customer Success", name: "(a completar)",
      area: "comercial", reportsTo: "com-cro", dotted: [], seniority: "Manager", band: "M4",
      critical: true, successor: null, status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-03-10", nextReview: "2026-09-10", headcount: 1,
      mission: "Maximizar la retención y expansión de la base de clientes.",
      responsibilities: ["Estrategia de CS", "Gestión de churn", "Liderazgo de CSMs"],
      kpis: ["Net Revenue Retention", "Churn", "CSAT"],
      authority: "Media", careerNext: "VP Customer Success", skillsGap: "—"
    },
    {
      id: "com-csm", title: "Customer Success Managers", name: "Equipo (4)",
      area: "comercial", reportsTo: "com-cs", dotted: [], seniority: "Mixto", band: "S3–S4",
      critical: false, successor: null, status: "Ocupado",
      location: "HomeOffice", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-03-10", nextReview: "2026-09-10", headcount: 4,
      mission: "Acompañar a los clientes para que obtengan valor del producto.",
      responsibilities: ["Onboarding de clientes", "Adopción", "Renovaciones"],
      kpis: ["Retención", "Upsell"],
      authority: "Baja", careerNext: "Senior CSM", skillsGap: "—"
    },

    /* ===== MARKETING ===== */
    {
      id: "mkt-head", title: "Head of Marketing", name: "(a completar)",
      area: "marketing", reportsTo: "dir-ceo", dotted: [], seniority: "Manager", band: "M4",
      critical: false, successor: null, status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-03-12", nextReview: "2026-09-12", headcount: 1,
      mission: "Construir la marca y generar demanda calificada para el equipo comercial.",
      responsibilities: ["Estrategia de marketing", "Generación de demanda", "Marca y posicionamiento"],
      kpis: ["MQLs", "CAC", "Awareness"],
      authority: "Media", careerNext: "VP Marketing", skillsGap: "—"
    },
    {
      id: "mkt-growth", title: "Growth Lead", name: "(a completar)",
      area: "marketing", reportsTo: "mkt-head", dotted: [], seniority: "Senior", band: "P5",
      critical: false, successor: null, status: "Ocupado",
      location: "HomeOffice", modality: "Remoto", contract: "Full-time",
      ingreso: "—", lastReview: "2026-03-12", nextReview: "2026-09-12", headcount: 1,
      mission: "Optimizar el funnel de adquisición y activación mediante experimentación.",
      responsibilities: ["Experimentos de growth", "Performance marketing", "Analítica de funnel"],
      kpis: ["CAC", "Conversión de funnel"],
      authority: "Media", careerNext: "Head of Growth", skillsGap: "—"
    },
    {
      id: "mkt-content", title: "Content / Brand Lead", name: "(a completar)",
      area: "marketing", reportsTo: "mkt-head", dotted: [], seniority: "Semi-Senior", band: "P3",
      critical: false, successor: null, status: "Ocupado",
      location: "HomeOffice", modality: "Remoto", contract: "Full-time",
      ingreso: "—", lastReview: "2026-03-12", nextReview: "2026-09-12", headcount: 1,
      mission: "Producir contenido y custodiar la identidad de marca.",
      responsibilities: ["Estrategia de contenido", "Branding", "Redes y comunicación"],
      kpis: ["Tráfico orgánico", "Engagement"],
      authority: "Baja", careerNext: "Content Manager", skillsGap: "—"
    },
    {
      id: "mkt-demand", title: "Demand Gen Specialist", name: "(a completar)",
      area: "marketing", reportsTo: "mkt-head", dotted: [], seniority: "Junior", band: "P2",
      critical: false, successor: null, status: "Onboarding",
      location: "HomeOffice", modality: "Remoto", contract: "Full-time",
      ingreso: "2026-06-01", lastReview: "—", nextReview: "2026-09-01", headcount: 1,
      mission: "Ejecutar campañas de generación de demanda.",
      responsibilities: ["Campañas pagas", "Email marketing", "Nurturing"],
      kpis: ["Leads generados"],
      authority: "Baja", careerNext: "Growth Specialist", skillsGap: "Automatización"
    },

    /* ===== OPERACIONES ===== */
    {
      id: "ops-coo", title: "COO / Director de Operaciones", name: "(a completar)",
      area: "operaciones", reportsTo: "dir-ceo", dotted: [], seniority: "C-Level", band: "E1",
      critical: true, successor: null, status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-01-18", nextReview: "2026-07-18", headcount: 1,
      mission: "Asegurar la eficiencia operativa y la ejecución de la estrategia en toda la compañía.",
      responsibilities: ["Operaciones y procesos", "Delivery", "Eficiencia organizacional"],
      kpis: ["Eficiencia operativa", "On-time delivery"],
      authority: "Alta", careerNext: "CEO", skillsGap: "—"
    },
    {
      id: "ops-pmo", title: "PMO / Delivery Manager", name: "(a completar)",
      area: "operaciones", reportsTo: "ops-coo", dotted: [], seniority: "Senior", band: "M3",
      critical: false, successor: null, status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-03-08", nextReview: "2026-09-08", headcount: 1,
      mission: "Coordinar la entrega de proyectos y la gestión de portfolio.",
      responsibilities: ["Gestión de proyectos", "Reporting de delivery", "Gestión de riesgos"],
      kpis: ["On-time delivery", "Desvío de presupuesto"],
      authority: "Media", careerNext: "Head of Delivery", skillsGap: "—"
    },
    {
      id: "ops-support", title: "Head of Support", name: "(a completar)",
      area: "operaciones", reportsTo: "ops-coo", dotted: [], seniority: "Manager", band: "M3",
      critical: false, successor: null, status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-03-08", nextReview: "2026-09-08", headcount: 1,
      mission: "Liderar el soporte al cliente y garantizar la satisfacción post-venta.",
      responsibilities: ["Gestión de soporte", "SLAs", "Escalamientos"],
      kpis: ["CSAT", "Tiempo de resolución", "SLA cumplido"],
      authority: "Media", careerNext: "Director de Soporte", skillsGap: "—"
    },
    {
      id: "ops-support-team", title: "Equipo de Soporte", name: "Equipo (6)",
      area: "operaciones", reportsTo: "ops-support", dotted: [], seniority: "Mixto", band: "S1–S3",
      critical: false, successor: null, status: "Ocupado",
      location: "HomeOffice", modality: "Remoto", contract: "Full-time",
      ingreso: "—", lastReview: "2026-03-08", nextReview: "2026-09-08", headcount: 6,
      mission: "Atender y resolver las consultas de los clientes.",
      responsibilities: ["Tickets", "Resolución de incidencias", "Base de conocimiento"],
      kpis: ["Tickets resueltos", "First response time"],
      authority: "Baja", careerNext: "Support Sr", skillsGap: "—"
    },
    {
      id: "ops-it", title: "IT / Sistemas Internos", name: "(a completar)",
      area: "operaciones", reportsTo: "ops-coo", dotted: ["sec-ciso"], seniority: "Semi-Senior", band: "T3",
      critical: false, successor: null, status: "Ocupado",
      location: "Cordoba", modality: "Presencial", contract: "Full-time",
      ingreso: "—", lastReview: "2026-03-08", nextReview: "2026-09-08", headcount: 1,
      mission: "Gestionar la infraestructura y herramientas internas de la compañía.",
      responsibilities: ["Soporte interno", "Gestión de accesos", "Equipamiento"],
      kpis: ["Disponibilidad de sistemas internos"],
      authority: "Baja", careerNext: "IT Manager", skillsGap: "—"
    },

    /* ===== FINANZAS ===== */
    {
      id: "fin-cfo", title: "CFO / Director de Finanzas", name: "(a completar)",
      area: "finanzas", reportsTo: "dir-ceo", dotted: [], seniority: "C-Level", band: "E1",
      critical: true, successor: "fin-fpa", status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-01-22", nextReview: "2026-07-22", headcount: 1,
      mission: "Garantizar la salud financiera y el control de la compañía.",
      responsibilities: ["Planificación financiera", "Control de gestión", "Relación con bancos e inversores"],
      kpis: ["Runway", "Margen", "Precisión del forecast"],
      authority: "Alta", careerNext: "VP Finance", skillsGap: "—"
    },
    {
      id: "fin-account", title: "Contabilidad", name: "Equipo (2)",
      area: "finanzas", reportsTo: "fin-cfo", dotted: [], seniority: "Mixto", band: "P2–P4",
      critical: false, successor: null, status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-02-05", nextReview: "2026-08-05", headcount: 2,
      mission: "Llevar la contabilidad y cumplir las obligaciones fiscales.",
      responsibilities: ["Registración contable", "Impuestos", "Cierre mensual"],
      kpis: ["Cierre en término", "Cumplimiento fiscal"],
      authority: "Baja", careerNext: "Jefe de Contabilidad", skillsGap: "—"
    },
    {
      id: "fin-fpa", title: "FP&A Analyst", name: "(a completar)",
      area: "finanzas", reportsTo: "fin-cfo", dotted: [], seniority: "Semi-Senior", band: "P3",
      critical: false, successor: null, status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-02-05", nextReview: "2026-08-05", headcount: 1,
      mission: "Analizar la performance financiera y construir proyecciones.",
      responsibilities: ["Forecast", "Análisis de variaciones", "Modelos financieros"],
      kpis: ["Precisión del forecast"],
      authority: "Baja", careerNext: "FP&A Manager", skillsGap: "—"
    },
    {
      id: "fin-admin", title: "Administración", name: "(a completar)",
      area: "finanzas", reportsTo: "fin-cfo", dotted: [], seniority: "Junior", band: "P2",
      critical: false, successor: null, status: "Licencia",
      location: "Cordoba", modality: "Presencial", contract: "Full-time",
      ingreso: "—", lastReview: "2025-09-05", nextReview: "2026-03-05", headcount: 1,
      mission: "Gestionar tareas administrativas y de facturación.",
      responsibilities: ["Facturación", "Cobranzas", "Pagos a proveedores"],
      kpis: ["DSO", "Facturas emitidas en término"],
      authority: "Baja", careerNext: "Analista Administrativo Sr", skillsGap: "—"
    },

    /* ===== PEOPLE / RRHH ===== */
    {
      id: "ppl-head", title: "Head of People", name: "(a completar)",
      area: "people", reportsTo: "dir-ceo", dotted: [], seniority: "Manager", band: "M4",
      critical: true, successor: null, status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-03-14", nextReview: "2026-09-14", headcount: 1,
      mission: "Atraer, desarrollar y retener el talento, y custodiar la cultura.",
      responsibilities: ["Estrategia de People", "Cultura", "Compensaciones y desarrollo"],
      kpis: ["eNPS", "Rotación", "Time-to-hire"],
      authority: "Media", careerNext: "CHRO", skillsGap: "—"
    },
    {
      id: "ppl-ta", title: "Talent Acquisition", name: "(a completar)",
      area: "people", reportsTo: "ppl-head", dotted: [], seniority: "Semi-Senior", band: "P3",
      critical: false, successor: null, status: "Ocupado",
      location: "HomeOffice", modality: "Remoto", contract: "Full-time",
      ingreso: "—", lastReview: "2026-03-14", nextReview: "2026-09-14", headcount: 1,
      mission: "Liderar la atracción y selección de talento.",
      responsibilities: ["Reclutamiento", "Employer branding", "Gestión de candidatos"],
      kpis: ["Time-to-hire", "Calidad de contratación"],
      authority: "Baja", careerNext: "TA Lead", skillsGap: "—"
    },
    {
      id: "ppl-ops", title: "People Ops", name: "(a completar)",
      area: "people", reportsTo: "ppl-head", dotted: [], seniority: "Semi-Senior", band: "P3",
      critical: false, successor: null, status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-03-14", nextReview: "2026-09-14", headcount: 1,
      mission: "Gestionar la administración de personal y la experiencia del empleado.",
      responsibilities: ["Onboarding", "Liquidación de haberes", "Administración de personal"],
      kpis: ["Satisfacción de onboarding"],
      authority: "Baja", careerNext: "People Ops Lead", skillsGap: "—"
    },
    {
      id: "ppl-ld", title: "L&D Specialist", name: "(a completar)",
      area: "people", reportsTo: "ppl-head", dotted: [], seniority: "Semi-Senior", band: "P3",
      critical: false, successor: null, status: "Vacante",
      location: "HomeOffice", modality: "Remoto", contract: "Full-time",
      ingreso: "—", lastReview: "—", nextReview: "—", headcount: 1,
      mission: "Diseñar e implementar programas de aprendizaje y desarrollo.",
      responsibilities: ["Capacitaciones", "Planes de desarrollo", "Gestión del conocimiento"],
      kpis: ["Horas de formación", "Adopción de programas"],
      authority: "Baja", careerNext: "L&D Manager", skillsGap: "—"
    },

    /* ===== LEGAL ===== */
    {
      id: "legal-head", title: "Legal & Compliance Lead", name: "(a completar)",
      area: "legal", reportsTo: "dir-ceo", dotted: [], seniority: "Senior", band: "M3",
      critical: false, successor: null, status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-02-28", nextReview: "2026-08-28", headcount: 1,
      mission: "Gestionar el marco legal y de cumplimiento de la compañía.",
      responsibilities: ["Contratos", "Compliance", "Asesoría legal"],
      kpis: ["Riesgo legal mitigado", "Contratos en término"],
      authority: "Media", careerNext: "General Counsel", skillsGap: "—"
    },

    /* ===== SEGURIDAD ===== */
    {
      id: "sec-ciso", title: "CISO", name: "(a completar)",
      area: "seguridad", reportsTo: "dir-ceo", dotted: ["tec-cto"], seniority: "Manager", band: "M4",
      critical: true, successor: null, status: "En búsqueda",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "—", nextReview: "—", headcount: 1,
      mission: "Definir y custodiar la estrategia de seguridad de la información.",
      responsibilities: ["Política de seguridad", "Gestión de riesgos", "Respuesta a incidentes"],
      kpis: ["Incidentes de seguridad", "Cumplimiento ISO 27001"],
      authority: "Alta", careerNext: "VP Security", skillsGap: "—"
    },

    /* ===== CALIDAD / QMS ===== */
    {
      id: "qa-qms", title: "Quality Manager (QMS / ISO)", name: "(a completar)",
      area: "calidad", reportsTo: "ops-coo", dotted: ["tec-cto", "sec-ciso"], seniority: "Manager", band: "M3",
      critical: true, successor: null, status: "Ocupado",
      location: "Cordoba", modality: "Híbrido", contract: "Full-time",
      ingreso: "—", lastReview: "2026-03-20", nextReview: "2026-09-20", headcount: 1,
      mission: "Custodiar el sistema de gestión de calidad y los estándares internacionales.",
      responsibilities: ["Gestión del QMS", "Auditorías internas", "Mejora continua (ISO 9001)"],
      kpis: ["No conformidades", "Cumplimiento de auditorías"],
      authority: "Media", careerNext: "Director de Calidad", skillsGap: "—"
    }
  ]
};
