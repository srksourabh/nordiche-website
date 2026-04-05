export const SITE = {
  name: "Nordische Energy",
  tagline: "Advanced Battery Solutions for EV, Energy Storage & Industrial Applications",
  description:
    "High-performance lithium battery systems engineered for safety, longevity, and efficiency. Powering electric vehicles, renewable energy grids, and industrial applications across Europe.",
  url: "https://nordische-energy.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
    ? `+${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER.replace(/[^\d]/g, "")}`
    : "+4900000000000",
  email: "info@nordische-energy.com",
  phone: "+49 000 000 0000",
  address: "Nordische Energy GmbH\nIndustriestraße 42\n10115 Berlin, Germany",
  founded: "2018",
  linkedin: "https://linkedin.com/company/nordische-energy",
  xtwitter: "https://x.com/nordischeenergy",
};

export const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Technology", href: "/technology" },
  { label: "Industries", href: "/industries" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const TRUST_ITEMS = [
  { label: "ISO 9001:2015 Certified", icon: "shield" },
  { label: "CE & IEC Compliant", icon: "certificate" },
  { label: "50+ Deployed Projects", icon: "checkCircle" },
  { label: "6 Years Manufacturing", icon: "factory" },
  { label: "EU RoHS Compliant", icon: "leaf" },
] as const;

export const STATS = [
  { value: "200+", label: "Battery Systems Deployed" },
  { value: "50K+", label: "Cells Tested Monthly" },
  { value: "6", label: "Years Manufacturing Experience" },
  { value: "99.2%", label: "System Reliability Rate" },
] as const;

export const PRODUCTS = [
  {
    slug: "lithium-ion-battery-packs",
    name: "Lithium-Ion Battery Packs",
    tagline: "Maximum Energy. Minimum Footprint.",
    shortDescription:
      "High-density, long-cycle battery systems engineered for demanding EV and industrial applications.",
    fullDescription:
      "Our lithium-ion battery packs deliver industry-leading energy density in compact form factors. Engineered with precision cell selection, advanced thermal management, and integrated Battery Management Systems, these packs are designed to withstand the operational demands of electric mobility and industrial environments. Each unit undergoes 127-point quality verification before delivery.",
    features: [
      "Energy density up to 280 Wh/kg",
      "Cycle life exceeding 3,000 charge-discharge cycles",
      "Operating temperature range: -20°C to +60°C",
      "Integrated multi-level BMS with CAN/CANopen interface",
      "IP67 rated enclosure options",
      "Configurable voltage: 24V / 48V / 72V / 96V / custom",
      "State-of-Charge accuracy: ±2%",
      "Thermal runaway prevention with passive & active cooling",
    ],
    specs: [
      { param: "Chemistry", value: "NMC / LFP (application-specific)" },
      { param: "Nominal Voltage", value: "24V – 800V (configurable)" },
      { param: "Capacity Range", value: "10 Ah – 500 Ah" },
      { param: "Energy Range", value: "1 kWh – 200 kWh" },
      { param: "Peak Discharge", value: "Up to 5C" },
      { param: "Continuous Charge", value: "1C – 2C" },
      { param: "Communication", value: "CAN 2.0B, CANopen, RS485, Modbus" },
      { param: "Protection Class", value: "IP54 / IP67 (optional)" },
      { param: "Certifications", value: "UN38.3, IEC 62619, CE, RoHS" },
      { param: "Warranty", value: "3 years / 2000 cycles (whichever first)" },
    ],
    applications: ["Electric Vehicles", "AGVs & Forklifts", "Marine Propulsion", "Backup Power", "Industrial Equipment"],
    icon: "battery",
    color: "var(--color-nord-teal)",
  },
  {
    slug: "ev-battery-modules",
    name: "EV Battery Modules",
    tagline: "Engineered for the Road Ahead.",
    shortDescription:
      "Modular, scalable battery solutions optimized for electric passenger vehicles and commercial fleets.",
    fullDescription:
      "Nordische EV Battery Modules are purpose-built for electric vehicle platforms where weight, safety, and range define the product. Our modular architecture allows OEMs and fleet operators to configure the exact energy density required, with full BMS integration and automotive-grade cell qualification. Each module is crash-tested, thermally validated, and production-ready.",
    features: [
      "Automotive-grade cell qualification (IATF 16949)",
      "Structural module design for floor-pack integration",
      "Active liquid cooling channels integrated",
      "Crash-compliant aluminum housing — 15g side impact rated",
      "Automatic cell balancing with passive dissipation",
      "OBD-II diagnostic compatibility",
      "SOH prediction algorithm built into BMS",
      "Second-life repurposing program available",
    ],
    specs: [
      { param: "Cell Format", value: "Prismatic / Pouch (by model)" },
      { param: "Module Voltage", value: "48V nominal per module" },
      { param: "Module Capacity", value: "30 Ah – 120 Ah" },
      { param: "Module Energy", value: "1.4 kWh – 5.8 kWh" },
      { param: "Pack Configuration", value: "Up to 20 modules in series" },
      { param: "Thermal System", value: "Liquid cooled (glycol circuit)" },
      { param: "Charging Protocol", value: "CCS2, CHAdeMO, AC Type 2" },
      { param: "Operating Temp", value: "-30°C to +55°C" },
      { param: "Certifications", value: "ECE R100, UN38.3, ISO 26262" },
      { param: "Warranty", value: "5 years / 150,000 km" },
    ],
    applications: ["Passenger EVs", "Electric Buses", "Light Commercial Vehicles", "Electric Motorcycles", "Delivery Vans"],
    icon: "bolt",
    color: "var(--color-nord-amber)",
  },
  {
    slug: "custom-battery-solutions",
    name: "Custom Battery Solutions",
    tagline: "Your Application. Our Engineering.",
    shortDescription:
      "End-to-end battery system design for unique industrial requirements where standard solutions fall short.",
    fullDescription:
      "When standard battery products cannot meet your operational envelope, Nordische Engineering delivers from the ground up. Our in-house R&D team collaborates directly with client engineering teams to define the chemistry, architecture, thermal strategy, BMS logic, and mechanical integration — producing a battery system designed specifically around your application, not adapted to it. From concept to production-ready prototype in 12–16 weeks.",
    features: [
      "Chemistry selection consultation (NMC, LFP, LTO, NCA)",
      "Custom mechanical form factor — any shape, any dimension",
      "Application-specific BMS firmware development",
      "Thermal simulation (CFD) before physical prototype",
      "EMC and vibration testing per IEC/MIL-STD",
      "Full regulatory certification support (CE, UL, UN38.3)",
      "Small-batch manufacturing: 10–500 units",
      "Post-delivery field support and lifecycle monitoring",
    ],
    specs: [
      { param: "Voltage", value: "Fully custom (3.6V – 1200V)" },
      { param: "Capacity", value: "Fully custom" },
      { param: "Lead Time", value: "12–16 weeks (prototype)" },
      { param: "Min. Order", value: "10 units (prototype) / 100 units (production)" },
      { param: "BMS", value: "Custom firmware on NXP/STM32 platform" },
      { param: "Certifications", value: "Application-specific — we manage process" },
      { param: "Testing", value: "In-house: thermal, vibration, cycle, EMC" },
      { param: "Collaboration", value: "Joint NDA-protected development process" },
    ],
    applications: ["Defence & Aerospace", "Medical Equipment", "Subsea Systems", "Racing Vehicles", "Off-Grid Installations"],
    icon: "settings",
    color: "var(--color-nord-mist)",
  },
] as const;

export const TECH_PILLARS = [
  {
    title: "High Energy Density Architecture",
    description:
      "Our cell-to-pack integration eliminates intermediate module housing, reducing dead weight by 18% and increasing usable energy density to 280 Wh/kg. Every cubic centimeter is engineered intentionally.",
    icon: "zap",
    stat: "280 Wh/kg",
  },
  {
    title: "Enhanced Safety Architecture",
    description:
      "Seven independent protection layers operate simultaneously: overcurrent, overvoltage, under-voltage, over-temperature, short-circuit, cell imbalance, and isolation fault detection. Thermal runaway containment is validated to IEC 62619.",
    icon: "shield",
    stat: "7-Layer Protection",
  },
  {
    title: "Extended Lifecycle Engineering",
    description:
      "Precision cell matching within ±2% capacity tolerance at pack assembly, combined with adaptive balancing algorithms, extends pack life beyond 3,000 cycles while maintaining over 80% capacity retention — exceeding industry standard by 40%.",
    icon: "refreshCw",
    stat: "3,000+ Cycles",
  },
  {
    title: "Intelligent Battery Management",
    description:
      "Our in-house BMS firmware continuously monitors 48 parameters per cell, running Kalman-filter SOC estimation and predictive SOH algorithms. Real-time data is accessible via CAN bus or optional cloud dashboard for fleet operators.",
    icon: "cpu",
    stat: "48 Parameters / Cell",
  },
  {
    title: "Advanced Thermal Management",
    description:
      "Passive cooling (phase-change materials + heat spreaders) and active liquid cooling options maintain cell temperature variance below 2°C across the pack during peak load — critical for long-term cycle life and safety in high-ambient environments.",
    icon: "thermometer",
    stat: "<2°C Variance",
  },
  {
    title: "Second-Life & Sustainability",
    description:
      "Every Nordische battery is designed with end-of-life reuse in mind. Packs reaching 80% capacity after EV use are recertified and redeployed in stationary storage applications, reducing lifecycle carbon footprint by an estimated 60%.",
    icon: "leaf",
    stat: "60% Lower Lifecycle CO₂",
  },
] as const;

export const INDUSTRIES = [
  {
    slug: "electric-vehicles",
    name: "Electric Vehicles",
    icon: "car",
    headline: "Powering the Transition to Zero-Emission Mobility",
    description:
      "The shift to electric transportation demands batteries that go beyond adequate — they must deliver reliability across 200,000+ km in extreme temperature conditions, fast-charge compatibility, and crash-level structural safety. Nordische EV battery systems are engineered to meet and exceed these demands for OEMs, fleet operators, and conversion specialists.",
    painPoints: [
      "Range anxiety from underperforming packs",
      "Thermal management failures in hot climates",
      "Heavy modules reducing cargo capacity",
      "Long replacement downtime on commercial fleets",
    ],
    ourAnswer: [
      "Industry-leading 280 Wh/kg energy density",
      "Liquid cooling rated for -30°C to +55°C operation",
      "Structural floor-pack design — weight-integrated, not added",
      "Plug-and-play swap compatibility on fleet configurations",
    ],
  },
  {
    slug: "renewable-energy",
    name: "Renewable Energy Storage",
    icon: "sunMedium",
    headline: "Storing Clean Energy When the Sun Sets and Wind Stops",
    description:
      "Solar and wind generation is intermittent. Nordische stationary energy storage systems provide the buffer that makes renewable energy dispatchable — whether for industrial self-consumption, grid-stabilization, or off-grid installations. Our LFP-chemistry systems are optimized for the 6,000+ cycle life that utility-scale economics demand.",
    painPoints: [
      "Low cycle life driving high levelized storage cost",
      "Thermal runaway risk in large stationary arrays",
      "Complex BMS integration with inverter systems",
      "Regulatory compliance for grid-connected storage",
    ],
    ourAnswer: [
      "LFP chemistry: 6,000+ cycles at 80% DoD",
      "Modular rack design: 5 kWh to 10 MWh scalable",
      "Native SunSpec/Modbus inverter integration",
      "Full IEC 62619 and grid-code certification support",
    ],
  },
  {
    slug: "telecom-infrastructure",
    name: "Telecom Infrastructure",
    icon: "radioTower",
    headline: "Zero Downtime for the Networks That Keep the World Connected",
    description:
      "Telecom towers and data centers cannot tolerate power interruptions. Nordische backup power batteries replace lead-acid VRLA systems with lithium alternatives that deliver 3× the energy in 50% of the space, require zero maintenance, and operate reliably across the extreme temperature ranges found in outdoor cabinet installations across Europe and beyond.",
    painPoints: [
      "Lead-acid replacement cycles every 3–4 years",
      "High weight-to-energy ratio limiting installation options",
      "High-temperature failure in outdoor cabinet installations",
      "Manual maintenance visits increasing OpEx",
    ],
    ourAnswer: [
      "LFP: 10-year design life — 3× vs lead-acid",
      "50% weight reduction for tower-top and rooftop installations",
      "Passive thermal management to +55°C ambient — no active cooling",
      "Remote SOH monitoring — eliminate manual inspection visits",
    ],
  },
  {
    slug: "industrial-applications",
    name: "Industrial Applications",
    icon: "factory",
    headline: "Reliable Power for Demanding Industrial Environments",
    description:
      "From automated guided vehicles to mining equipment to maritime propulsion, industrial applications push batteries harder than any other use case. Nordische industrial battery systems are designed for high-vibration, high-temperature, high-discharge environments where failure is not an option and maintenance windows are narrow.",
    painPoints: [
      "Battery failure causing costly production line stoppages",
      "Inadequate cycle life driving frequent replacement cost",
      "Vibration and shock degrading cell integrity over time",
      "Complex multi-shift charging logistics",
    ],
    ourAnswer: [
      "MIL-STD vibration and shock qualification",
      "3,000+ cycle life — 1 replacement per 8-year equipment life",
      "Opportunity-charging compatible: boost to 80% in 20 minutes",
      "Industrial CAN/CANopen BMS for PLC integration",
    ],
  },
] as const;

export const CASE_STUDIES = [
  {
    slug: "ev-fleet-urban-logistics",
    client: "Urban Logistics Operator (North Germany)",
    title: "Fleet Electrification: 40-Vehicle Delivery Van Conversion",
    industry: "Electric Vehicles",
    challenge:
      "A regional logistics operator was converting a 40-vehicle diesel delivery fleet to electric. The challenge: the vans required 80 kWh packs that fit within the existing van floor template, support 2C fast charging for mid-shift top-up, and maintain 200 km range in winter conditions (-15°C).",
    solution:
      "Nordische designed a modular 80 kWh pack using prismatic NMC cells in a floor-integrated structural enclosure. Liquid thermal management maintained cell temperature above 10°C in sub-zero ambient through pre-conditioning triggered by fleet management software. BMS integrated with the operator's telematics via CAN bus.",
    results: [
      "220 km winter range achieved (vs 195 km target)",
      "2C fast charge to 80% in 24 minutes",
      "15,000 km per vehicle average with zero degradation events",
      "38% reduction in total fleet energy cost vs diesel baseline",
    ],
    deliveryWeeks: 14,
    units: 40,
  },
  {
    slug: "renewable-storage-solar-farm",
    client: "Solar Developer (Brandenburg, Germany)",
    title: "2 MWh Grid-Edge Storage for 8 MW Solar Farm",
    industry: "Renewable Energy Storage",
    challenge:
      "A solar farm developer needed grid-edge storage to maximize self-consumption, reduce curtailment, and provide 30-minute peak-shaving to avoid grid congestion penalties. The system needed to pass grid-code compliance for VDE-AR-N 4105 certification.",
    solution:
      "Deployed 2 MWh of rack-mounted LFP systems in weatherproof outdoor enclosures. SunSpec-compatible BMS integrated directly with the existing SMA inverter cluster. Nordische engineering team managed the VDE-AR-N 4105 certification process end-to-end.",
    results: [
      "94.5% round-trip efficiency achieved",
      "Grid curtailment reduced from 18% to under 3%",
      "VDE-AR-N 4105 certification completed in 6 weeks",
      "Projected payback period: 7.2 years (vs 9.5-year industry average)",
    ],
    deliveryWeeks: 18,
    units: 40,
  },
  {
    slug: "telecom-backup-upgrade",
    client: "Telecom Tower Operator (Germany)",
    title: "Lead-Acid Replacement: 220-Tower Backup Power Upgrade",
    industry: "Telecom Infrastructure",
    challenge:
      "A tower operator managing 220 outdoor towers across northern Germany was spending €380,000 annually on lead-acid replacement cycles and maintenance visits. High-temperature failures were causing an average of 2.3 outage events per tower per year.",
    solution:
      "Nordische supplied drop-in LFP replacement modules with passive thermal management rated to +60°C ambient. Remote SOH monitoring via cellular module eliminated scheduled visits. Installation was completed by the operator's own teams using Nordische installation guides.",
    results: [
      "Annual maintenance cost reduced by 71% (€270k/year saving)",
      "Outage events reduced to 0.1 per tower per year",
      "10-year design life vs 3.5-year lead-acid average",
      "Installation completed across all 220 towers in 8 weeks",
    ],
    deliveryWeeks: 6,
    units: 220,
  },
] as const;

export const MANUFACTURING_CONTENT = {
  headline: "Precision Manufacturing & Rigorous Testing",
  subheadline:
    "Every battery system that leaves our facility has passed a 127-point quality verification protocol.",
  intro:
    "Our manufacturing facility in Berlin spans 4,200 m² and operates under ISO 9001:2015 quality management. Dry-room assembly, automated cell grading, and computer-controlled formation cycling ensure that every unit meets specification before shipment. We do not outsource assembly. Everything is built and verified in-house.",
  capabilities: [
    {
      title: "Dry Room Cell Assembly",
      description:
        "Cell handling and pack assembly in controlled <1% relative humidity dry rooms to prevent moisture-induced degradation. Critical for prismatic and pouch cell formats.",
    },
    {
      title: "Automated Cell Grading",
      description:
        "Every incoming cell is tested for capacity, internal resistance, and self-discharge rate. Cells are binned to ±2% capacity match before pack assembly — eliminating weak-cell scenarios.",
    },
    {
      title: "Formation & Aging Cycles",
      description:
        "All packs undergo 3–5 controlled formation cycles and a 72-hour aging period before final testing. This process stabilizes SEI formation and filters early-life failures.",
    },
    {
      title: "Environmental Testing",
      description:
        "Thermal cycling chamber (-40°C to +85°C), vibration table (IEC 60068), and humidity exposure testing. Destructive testing performed on sample units from each production batch.",
    },
    {
      title: "Electrical Safety Testing",
      description:
        "Hipot, insulation resistance, short-circuit protection validation, and BMS failsafe verification on 100% of units. No unit ships without passing all 127 electrical checkpoints.",
    },
    {
      title: "Traceability & Documentation",
      description:
        "Full production traceability: cell serial numbers, formation data, test results, and inspection sign-off are documented per pack. Delivered with each unit as a Production Record.",
    },
  ],
  certifications: ["ISO 9001:2015", "IEC 62619", "UN38.3", "CE Marking", "RoHS", "REACH"],
} as const;

export const ABOUT_CONTENT = {
  headline: "Engineering the Future of Energy Storage",
  story: [
    "Nordische Energy was founded in 2018 by a team of electrochemical engineers and embedded systems developers who believed that advanced battery technology should be accessible to more than just the largest automotive OEMs.",
    "Starting with custom battery development for industrial automation clients in Berlin, the company grew its competency in cell selection, BMS firmware, and mechanical integration to the point where it could address the full spectrum of battery applications — from commercial EV platforms to renewable energy storage to critical telecom infrastructure.",
    "Today, Nordische employs 45 engineers and technicians across design, manufacturing, and field support. We have deployed over 200 battery systems representing more than 15 MWh of total installed capacity. Every project is led by a dedicated application engineer and backed by our in-house manufacturing and testing facility.",
    "Our goal is not to be the largest battery manufacturer in Europe. It is to be the most trusted one — the company that clients call when the application is too demanding for commodity solutions, when the specifications are tight, and when failure is not an option.",
  ],
  vision:
    "A world where reliable, sustainable energy storage enables every industry to operate without fossil fuels — not because it is mandated, but because it is the economically superior choice.",
  mission:
    "To design and manufacture battery systems that set the standard for performance, safety, and longevity — solving the hardest energy storage challenges with engineering precision.",
  values: [
    { title: "Engineering Integrity", description: "We do not ship what we would not put in our own vehicles." },
    { title: "Radical Transparency", description: "Every datasheet reflects real tested performance, not marketing targets." },
    { title: "Client Partnership", description: "We treat every project as if the client is our only client." },
    { title: "Continuous Advancement", description: "We invest 12% of revenue in R&D because standing still is regression." },
  ],
  team: [
    { name: "Dr. Lars Bergström", role: "Co-Founder & Chief Technology Officer", bio: "PhD Electrochemistry, KTH Royal Institute of Technology. 14 years battery R&D." },
    { name: "Anna Kaufmann", role: "Co-Founder & Chief Operating Officer", bio: "Former manufacturing director at a tier-1 automotive supplier. 12 years ops." },
    { name: "Felix Krause", role: "Head of BMS Engineering", bio: "Embedded systems architect with 9 years in automotive-grade firmware development." },
    { name: "Priya Sundaram", role: "Lead Application Engineer", bio: "MEng Power Electronics, TU Berlin. Specializes in thermal and electrical system design." },
  ],
} as const;

export const INDUSTRIES_OPTIONS = [
  "Electric Vehicles",
  "Renewable Energy Storage",
  "Telecom Infrastructure",
  "Industrial Applications",
  "Marine",
  "Defence & Aerospace",
  "Other",
] as const;

export const CAPACITY_OPTIONS = [
  "Under 10 kWh",
  "10–50 kWh",
  "50–200 kWh",
  "200 kWh – 1 MWh",
  "Above 1 MWh",
  "Not yet defined",
] as const;

export const FOOTER_LINKS = {
  products: [
    { label: "Lithium-Ion Battery Packs", href: "/products/lithium-ion-battery-packs" },
    { label: "EV Battery Modules", href: "/products/ev-battery-modules" },
    { label: "Custom Battery Solutions", href: "/products/custom-battery-solutions" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Manufacturing", href: "/manufacturing" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
  industries: [
    { label: "Electric Vehicles", href: "/industries/electric-vehicles" },
    { label: "Renewable Energy", href: "/industries/renewable-energy" },
    { label: "Telecom Infrastructure", href: "/industries/telecom-infrastructure" },
    { label: "Industrial Applications", href: "/industries/industrial-applications" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Site Map", href: "/sitemap" },
    { label: "Cookie Policy", href: "/privacy-policy#cookies" },
  ],
} as const;
