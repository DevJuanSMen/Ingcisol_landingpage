export type Service = {
  name: string;
  unit: string;
  priceLabel: string;
};

export type ServiceGroup = {
  id: string;
  title: string;
  description: string;
  services: Service[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "consultoria",
    title: "Consultoría técnica",
    description:
      "Analizamos, calculamos y asesoramos. Sin ejecutar obra, pero dándole a tu proyecto la base técnica que protege los márgenes desde el primer día.",
    services: [
      { name: "Presupuesto de obra", unit: "global / m²", priceLabel: "$2.400.000" },
      { name: "Programación de obra (cronograma)", unit: "global", priceLabel: "$1.800.000" },
      { name: "Interventoría técnica", unit: "mensual", priceLabel: "$4.500.000/mes" },
      { name: "Asesoría técnica especializada", unit: "hora", priceLabel: "$180.000/hora" },
      { name: "Estructuración de propuestas SECOP II", unit: "global", priceLabel: "$3.500.000" },
      { name: "Memorias de cantidades / Cómputos métricos", unit: "m²", priceLabel: "$5.000/m²" },
      { name: "Análisis de Precios Unitarios (APUs)", unit: "por APU", priceLabel: "$85.000/APU" },
    ],
  },
  {
    id: "disenos",
    title: "Diseños técnicos",
    description:
      "Planos, cálculos y estudios con firma profesional. Gestionamos al especialista; tú recibes el entregable listo para licencia, sin correr detrás de cada profesional.",
    services: [
      { name: "Diseño arquitectónico", unit: "m²", priceLabel: "$85.000/m²" },
      { name: "Diseño estructural (NSR-10)", unit: "m²", priceLabel: "$60.000/m²" },
      { name: "Diseño de redes hidrosanitarias", unit: "m²", priceLabel: "$35.000/m²" },
      { name: "Diseño de redes eléctricas (RETIE)", unit: "m²", priceLabel: "$37.500/m²" },
      { name: "Estudio de suelos / geotecnia", unit: "global", priceLabel: "$4.500.000" },
      { name: "Diseño de mezclas de concreto", unit: "por mezcla", priceLabel: "$550.000" },
      { name: "Diseño de pavimento (vías)", unit: "m²", priceLabel: "$12.000/m²" },
      { name: "Diseño de urbanismo / loteo", unit: "m²", priceLabel: "$9.000/m²" },
    ],
  },
  {
    id: "ejecucion",
    title: "Mano de obra / Ejecución",
    description:
      "Tú suministras los materiales; nosotros ponemos el equipo, la supervisión técnica y el control de calidad actividad por actividad.",
    services: [
      { name: "Localización y replanteo", unit: "m²", priceLabel: "$4.500/m²" },
      { name: "Excavación manual", unit: "m³", priceLabel: "$42.000/m³" },
      { name: "Plantilla en mortero (e=8cm)", unit: "m²", priceLabel: "$18.000/m²" },
      { name: "Instalación de piso en porcelanato", unit: "m²", priceLabel: "$35.000/m²" },
      { name: "Muro en bloque o ladrillo", unit: "m²", priceLabel: "$32.000/m²" },
      { name: "Repello / pañete de muros", unit: "m²", priceLabel: "$14.000/m²" },
      { name: "Estuco y pintura", unit: "m²", priceLabel: "$22.000/m²" },
      { name: "Instalación hidráulica (puntos)", unit: "und", priceLabel: "$85.000/punto" },
      { name: "Instalación sanitaria (puntos)", unit: "und", priceLabel: "$95.000/punto" },
      { name: "Instalación eléctrica (puntos)", unit: "und", priceLabel: "$65.000/punto" },
      { name: "Cubierta en teja termoacústica", unit: "m²", priceLabel: "$28.000/m²" },
      { name: "Sardinel y andén en concreto", unit: "ml", priceLabel: "$48.000/ml" },
    ],
  },
];

export type Client = {
  name: string;
  logo?: string;
};

export const clients: Client[] = [
  { name: "MOLVAR Construcciones S.A.S.", logo: "/logos/molvar.jpeg" },
  { name: "G&M Ingenieros Constructores", logo: "/logos/gm.jpeg" },
  { name: "MS Construcciones", logo: "/logos/ms.jpeg" },
  {
    name: "ASOCIT — Asociación de Autoridades Indígenas",
    logo: "/logos/asocit.jpeg",
  },
  { name: "CAMACOL Risaralda", logo: "/logos/camacol-risaralda.jpeg" },
  {
    name: "Consorcio Mercado Valledupar 2022",
    logo: "/logos/consorcio-mercado-valledupar.jpeg",
  },
  { name: "Consorcio Vías Curumaní" },
];

export type WorkPhoto = {
  src: string;
  title: string;
  caption: string;
};

// Registro fotográfico real de obra (tomas de dron). Sin atribuir a un
// contrato específico: son ejemplos de ejecución vial y de urbanismo.
export const workPhotos: WorkPhoto[] = [
  {
    src: "/obras/obra-4.jpeg",
    title: "Placa-huella en concreto",
    caption: "Mejoramiento de vía en sector poblado — Región Caribe",
  },
  {
    src: "/obras/obra-1.jpeg",
    title: "Apertura y afirmado de vía",
    caption: "Trazado en zona montañosa — vista aérea",
  },
  {
    src: "/obras/obra-3.jpeg",
    title: "Pavimento en concreto rígido",
    caption: "Vía terciaria en ladera — control de obra en campo",
  },
  {
    src: "/obras/obra-2.jpeg",
    title: "Movimiento de tierras y estructura vial",
    caption: "Conformación de banca y obras de arte",
  },
  {
    src: "/obras/obra-5.jpeg",
    title: "Urbanismo y andenes",
    caption: "Placa-huella peatonal y vehicular — mejoramiento urbano",
  },
];

export type OfficeRender = {
  src: string;
  alt: string;
};

// Renders de la nueva sede de INGCISOL en Valledupar.
export const officeRenders: OfficeRender[] = [
  { src: "/renders/oficina-1.jpeg", alt: "Zona de trabajo y sala de reuniones — render de oficina INGCISOL" },
  { src: "/renders/oficina-4.jpeg", alt: "Sala de reuniones con biblioteca técnica — render de oficina INGCISOL" },
  { src: "/renders/oficina-2.jpeg", alt: "Estaciones de trabajo con maqueta arquitectónica — render de oficina INGCISOL" },
  { src: "/renders/oficina-5.jpeg", alt: "Vista general del espacio de diseño — render de oficina INGCISOL" },
];

export const problemCards = [
  {
    title: "Cotizaciones que tardan días",
    body: "El cliente escribe, espera, y muchas veces ya contrató a otro. Con PROCURA AI cotizamos en menos de 45 minutos.",
  },
  {
    title: "Presupuestos que no se controlan",
    body: "Muchas obras terminan con sobrecostos porque no hay seguimiento por periodo. Nosotros estructuramos con APUs validados y corte mensual.",
  },
  {
    title: "Licitaciones perdidas por forma, no por precio",
    body: "La mayoría de pequeñas constructoras pierde procesos SECOP por documentos mal organizados, no por precio. Estructuramos propuestas completas desde $3.5M.",
  },
];

export type AIAgent = {
  name: string;
  status: "activo" | "desarrollo";
  statusLabel: string;
  title: string;
  body: string;
  flow?: string[];
  href?: string;
};

export const aiAgents: AIAgent[] = [
  {
    name: "PROCURA AI",
    status: "activo",
    statusLabel: "ACTIVO — Demo: CAMACOL Cartagena, julio 2026",
    title: "Antes, cotizar tardaba días.\nAhora tarda 45 minutos.",
    body:
      "El cliente escribe por WhatsApp. PROCURA AI lee el requerimiento, consulta los catálogos de precios de INGCISOL, arma el borrador y nos lo manda a aprobar. En menos de 45 minutos el cliente tiene su cotización en PDF.\n\nSin back-and-forth. Sin esperar hasta el día siguiente. Sin que una oportunidad se pierda mientras alguien la digita.",
    flow: ["WhatsApp del cliente", "PROCURA AI", "Revisión INGCISOL", "PDF al cliente"],
    href: "https://procuraai.ingcisolai.com/login",
  },
  {
    name: "ACTA AI",
    status: "desarrollo",
    statusLabel: "EN DESARROLLO",
    title: "El papeleo de obra consume tiempo de ingeniero.\nEso tiene solución.",
    body:
      "Cada contrato genera actas: de inicio, parciales, de recibo final, de liquidación. En el sector, eso se hace manualmente, muchas veces tarde y con errores.\n\nACTA AI toma los datos del contrato desde una plantilla estructurada y genera el documento listo para firma, con todos los campos correctos, en el formato correcto, sin que nadie tenga que redactarlo desde cero.",
  },
  {
    name: "LICIFLOW",
    status: "desarrollo",
    statusLabel: "EN DESARROLLO · nombre comercial en definición final",
    title:
      "La mayoría de constructoras pierde licitaciones SECOP que sí podía ganar.\nNo por precio. Por no saber cuáles abordar.",
    body:
      "LICIFLOW consulta la base de procesos del SECOP II en tiempo real, evalúa cada licitación en 7 criterios técnicos y financieros, y la clasifica: verde (viable), amarillo (revisar), rojo (no aplica).\n\nEn vez de revisar manualmente decenas de procesos cada semana, ves solo los que tienen sentido para el perfil de tu empresa.",
    href: "https://liciflow.ingcisolai.com/login",
  },
];

export type Project = {
  name: string;
  client: string;
  scope: string;
  facts: string[];
  description: string;
  quote: string;
  image?: string;
  /** true = mostrar la imagen completa (contain), p. ej. un documento/tabla. */
  imageContain?: boolean;
};

export const projects: Project[] = [
  {
    name: "Conjunto Residencial GIRONA — Valledupar",
    client: "G&M Ingenieros Constructores",
    image: "/proyectos/girona-presupuesto.png",
    imageContain: true,
    scope: "Estructuración y consultoría de presupuesto integral",
    facts: ["80 viviendas de dos plantas", "118 m²/unidad", "18 meses de ejecución"],
    description:
      "INGCISOL estructuró el presupuesto completo del conjunto por unidades, capítulos y etapas de obra, con análisis de precios unitarios, control de costos por periodo y herramienta de seguimiento financiero integrada.",
    quote:
      "Presupuestar 80 casas a escala no es lo mismo que presupuestar una. Aquí estructuramos cada módulo por separado para que el control sea real en campo.",
  },
  {
    name: "Adecuación de Local Comercial — Unicentro Valledupar",
    client: "MOLVAR Construcciones S.A.S. (Contrato INGCIS-002)",
    image: "/renders/oficina-3.jpeg",
    scope: "Ejecución de mano de obra de acabados y remodelación",
    facts: ["Local 2-27, piso 2", "38.58 m² de área construida", "Centro Comercial Unicentro"],
    description:
      "Ejecución de mano de obra de acabados interiores con control de calidad, seguimiento por cortes de obra y estado de cuenta por periodo.",
    quote:
      "Una remodelación comercial no admite margen de error. El cliente abre cuando la obra termina, no cuando el equipo está listo.",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Director de obra, empresa constructora",
    role: "Valledupar, 2026",
    quote:
      "Antes de contratar a INGCISOL cotizábamos casi a ciegas. Con la interventoría técnica supimos exactamente en qué se iba cada peso del presupuesto, semana a semana.",
  },
  {
    name: "Gerente de proyecto, entidad privada",
    role: "Cesar, 2026",
    quote:
      "La cuadrilla cumplió el alcance pactado sin reprocesos ni sorpresas de última hora. El seguimiento semanal nos permitió tomar decisiones a tiempo, no después del problema.",
  },
];

// Cifras que animan como contador (solo números).
export type NumericStat = {
  label: string;
  value: number;
  suffix?: string;
  format?: "year";
};

export const numericStats: NumericStat[] = [
  { label: "m² intervenidos en construcción", value: 100000, suffix: "+" },
  { label: "Entidades con las que hemos trabajado", value: 30, suffix: "+" },
  { label: "Servicios en catálogo", value: 57 },
  { label: "Agentes de IA propios", value: 3 },
  { label: "Años de experiencia en el sector", value: 9, suffix: "+" },
];

// Datos cualitativos (texto) — se muestran como credenciales.
export const textStats = [
  { label: "Sede", value: "Valledupar, Cesar" },
  { label: "Cobertura", value: "Región Caribe" },
  { label: "RUP", value: "Vigente" },
];

export type ProcuraShot = {
  src: string;
  title: string;
  caption: string;
};

// Capturas reales del panel de PROCURA AI en operación.
export const procuraShots: ProcuraShot[] = [
  {
    src: "/procura/dashboard.png",
    title: "Dashboard del proyecto",
    caption:
      "Avance de ejecución APU, alertas y órdenes de compra en un solo panel.",
  },
  {
    src: "/procura/cotizaciones.png",
    title: "Comparativo de cotizaciones",
    caption:
      "Tabla de proveedores contra el precio APU, con ganador sugerido y OC emitida.",
  },
  {
    src: "/procura/requisiciones.png",
    title: "Requisiciones y control APU",
    caption:
      "Cada insumo validado contra el saldo del presupuesto aprobado del proyecto.",
  },
];

export const faqs = [
  {
    question: "¿INGCISOL ejecuta obras completas o solo partes específicas?",
    answer:
      "Las dos cosas. Podemos tomar la ejecución completa de mano de obra de un proyecto, o solo las actividades que necesites: acabados, redes, movimiento de tierras, instalaciones. También ofrecemos consultoría e interventoría sin ejecutar obra.",
  },
  {
    question: "¿Los precios de la página son los precios reales?",
    answer:
      "Son precios \"desde\": el punto de partida para el escenario más sencillo de cada servicio. El precio real se define en la cotización formal, según alcance, área, complejidad y ubicación. No cobramos por cotizar.",
  },
  {
    question: "¿En qué regiones opera INGCISOL?",
    answer:
      "Principalmente en el departamento del Cesar (Valledupar y municipios). También ejecutamos proyectos en Magdalena, La Guajira y Atlántico según el alcance del contrato.",
  },
  {
    question: "¿INGCISOL puede participar en licitaciones públicas SECOP II?",
    answer:
      "Sí. Tenemos RUP vigente ante la Cámara de Comercio de Valledupar para contratación pública. Además, ofrecemos el servicio de estructuración de propuestas SECOP para otras empresas constructoras que quieran participar con una propuesta bien armada.",
  },
  {
    question: "¿Qué es PROCURA AI y cómo funciona?",
    answer:
      "Es el agente de cotización automática que desarrollamos internamente. Cuando un cliente hace un requerimiento por WhatsApp, el agente clasifica el servicio, consulta nuestras tablas de precios y genera un borrador de cotización formal. Nosotros lo revisamos y aprobamos. El cliente recibe su PDF en menos de 45 minutos. Es el primer sistema de este tipo construido por una empresa constructora de la región Caribe.",
  },
  {
    question: "¿Cuánto tiempo tarda en llegar una cotización?",
    answer:
      "El objetivo es ≤ 45 minutos desde que el cliente hace el requerimiento hasta que recibe el documento. En casos complejos o con alcance amplio, dentro del mismo día hábil.",
  },
  {
    question: "¿Trabajan con consorcios o uniones temporales para licitaciones públicas?",
    answer:
      "Sí. INGCISOL puede participar como miembro de consorcio o unión temporal en procesos SECOP II donde el alcance o los requisitos financieros lo requieran.",
  },
];

export const credentials = [
  "Registrados en Cámara de Comercio · Valledupar",
  "RUP vigente — Contratación pública y privada",
  "Región Caribe — Cesar, Magdalena, La Guajira, Atlántico",
];

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "IA", href: "#ia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
];

// Los cinco problemas del sector con su respuesta operativa (formato problema → solución).
export type SectorProblem = {
  num: string;
  tag: string;
  solution: string;
  body: string;
};

export const sectorProblems: SectorProblem[] = [
  {
    num: "01",
    tag: "Retrasos",
    solution: "Programación de obra con seguimiento semanal",
    body: "No reportes de cierre de mes. Cronograma vivo, revisado cada semana contra el avance real.",
  },
  {
    num: "02",
    tag: "Sobrecostos",
    solution: "Presupuestos con AIU y jornales actualizados",
    body: "Tabla de jornales, AIU (A9/I1/U15) y régimen SIMPLE 7.3% revisados cada 6 meses. Nada de estimaciones genéricas.",
  },
  {
    num: "03",
    tag: "Reprocesos",
    solution: "Interventoría técnica desde el diseño",
    body: "El control de calidad empieza antes del primer vaciado, no después del error.",
  },
  {
    num: "04",
    tag: "Baja trazabilidad",
    solution: "Actas y control financiero centralizados",
    body: "Cortes de obra, caja menor y cruce de giros en un solo lugar — en desarrollo con ACTA AI.",
  },
  {
    num: "05",
    tag: "Mala planeación",
    solution: "Diagnóstico técnico antes de cotizar",
    body: "Visita y levantamiento de información antes de firmar, no después.",
  },
];

// Tres líneas de negocio (reemplazan el catálogo detallado de 57 servicios).
export type BusinessLine = {
  title: string;
  benefit: string;
  items: string[];
  anchor: string;
  waMessage: string;
};

export const businessLines: BusinessLine[] = [
  {
    title: "Consultoría técnica",
    benefit: "Para quien necesita control de proyecto sin montar un equipo interno.",
    items: [
      "Programación y control de obra",
      "Interventoría y supervisión técnica",
      "Gestión contractual",
      "Presupuestos y planeación",
      "Gestión de proyectos",
    ],
    anchor: "Desde $1.800.000 COP",
    waMessage:
      "Hola INGCISOL 👋 Necesito consultoría técnica (interventoría/presupuesto/programación de obra).",
  },
  {
    title: "Diseño",
    benefit: "Estudios técnicos con el mismo rigor que exige la etapa de ejecución.",
    items: [
      "Diseño estructural",
      "Diseño hidráulico",
      "Diseño arquitectónico",
      "Diseño vial",
      "Estudios técnicos",
    ],
    anchor: "Desde $35.000 COP/m² (redes hidrosanitarias)",
    waMessage:
      "Hola INGCISOL 👋 Necesito un diseño especializado (estructural/hidráulico/arquitectónico/vial).",
  },
  {
    title: "Ejecución de obra",
    benefit: "Mano de obra especializada. Contratos sin materiales — materiales a cargo del cliente.",
    items: [
      "Construcción",
      "Pavimentos",
      "Urbanismo",
      "Obras hidráulicas",
      "Infraestructura civil",
    ],
    anchor: "Cotización según alcance de la obra",
    waMessage: "Hola INGCISOL 👋 Necesito cotizar ejecución de obra civil.",
  },
];

// Método de trabajo — seis pasos en flujo.
export type ProcessStep = {
  num: string;
  title: string;
  body: string;
};

export const processSteps: ProcessStep[] = [
  { num: "01", title: "Diagnóstico", body: "Visita técnica y levantamiento de información antes de cotizar." },
  { num: "02", title: "Planeación", body: "Programación de obra, presupuesto y AIU definidos con jornales actualizados." },
  { num: "03", title: "Diseño", body: "Diseño estructural, hidráulico, arquitectónico o vial según el alcance." },
  { num: "04", title: "Construcción", body: "Ejecución con mano de obra especializada y seguimiento semanal." },
  { num: "05", title: "Control", body: "Interventoría técnica y actas de obra — control financiero con ACTA AI." },
  { num: "06", title: "Entrega", body: "Acta de entrega, liquidación de contrato y cierre documental." },
];

// Videos reales de obra (hover para reproducir).
export type ExecutionVideo = {
  src: string;
  poster: string;
  caption: string;
};

export const executionVideos: ExecutionVideo[] = [
  {
    src: "/videos/obra-concreto.mp4",
    poster: "/videos/poster-obra-concreto.webp",
    caption: "Vaciado de concreto — obra hidráulica",
  },
  {
    src: "/videos/obra-edificacion.mp4",
    poster: "/videos/poster-obra-edificacion.webp",
    caption: "Estructura metálica — edificaciones",
  },
];

// Galería de proyectos reales (scroll infinito).
export type ProjectPhoto = {
  src: string;
  caption: string;
};

export const projectPhotos: ProjectPhoto[] = [
  { src: "/proyectos/concreto-hidraulico.webp", caption: "Vaciado de placa en concreto — obra hidráulica" },
  { src: "/proyectos/team-obra.webp", caption: "Construcción de vivienda unifamiliar — 80 unidades, ~118 m²/und" },
  { src: "/proyectos/render-diseno-interior-1.webp", caption: "Diseño arquitectónico — anteproyecto de interiores" },
  { src: "/proyectos/render-diseno-interior-2.webp", caption: "Diseño arquitectónico — anteproyecto de interiores" },
  { src: "/proyectos/vial-aerea-curva.webp", caption: "Pavimentación de vía — zona rural del Caribe" },
  { src: "/proyectos/urbanismo-aereo.webp", caption: "Construcción de andén peatonal — concreto rígido" },
  { src: "/proyectos/topografia-vial.webp", caption: "Levantamiento topográfico — diseño vial" },
];
