import type { ServiceData } from "@/components/templates/ServicePageTemplate";

export const serviceDatabase: Record<string, ServiceData> = {
  "residential-construction": {
    title: "Premium Residential Construction",
    subtitle: "End-to-end villa and independent house construction in Bangalore with flawless execution and fixed pricing.",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    painPoints: [
      { title: "Contractors Disappearing", desc: "Local contractors abandoning the project halfway through or causing massive delays." },
      { title: "Hidden Out-of-Pocket Costs", desc: "Being forced to pay for 'unforeseen adjustments' that were never in the original quote." },
      { title: "Substandard Materials", desc: "Using cheap local cement or steel to maximize contractor margins silently." }
    ],
    solution: {
      title: "The SR DreamSpace Promise",
      desc: "Our residential team operates on a strict 100% Fixed Price Model. The price you sign is the price you pay to the penny. We utilize dedicated project managers assigning you daily photo updates, ensuring zero guesswork."
    },
    processSteps: [
      { step: "01", title: "Consultation & Scope", desc: "We map out your exact vision, evaluate your plot, and lock in the floor plans." },
      { step: "02", title: "Approval & Agreements", desc: "We secure all required BBMP/BDA legal approvals on your behalf." },
      { step: "03", title: "Execution Phase", desc: "Our massive in-house workforce executes the structural and finishing phases meticulously." },
      { step: "04", title: "Final Handover", desc: "A 100-point quality check ensures the house is pristine before we hand you the keys." }
    ],
    materials: [
      { item: "Grade-A Steel & Cement", desc: "We exclusively use recognizable top-tier brands like UltraTech, JSW, and Tata Tiscon." },
      { item: "Premium Waterproofing", desc: "Advanced Dr. Fixit chemical compounds used in all wet areas and terraces." },
      { item: "Branded Electricals", desc: "Fire-resistant Finolex/Polycab wiring with branded modular switches." },
      { item: "Flawless Finishes", desc: "Machine-cut marble, premium vitrified tiles, and precision woodwork." }
    ],
    faqs: [
      { q: "How much does construction cost per sq ft in Bangalore?", a: "Our premium residential construction typically starts from ₹1950/sq ft and goes up to ₹2500+/sq ft depending on the luxury finishes required. We lock this price in before the first brick is laid." },
      { q: "Do you help with BBMP/BDA plan approvals?", a: "Yes, our turnkey solution includes completely handling all statutory government approvals so you don't face any bureaucratic hassles." },
      { q: "How long does it take to build a standard G+2 house?", a: "We commit to a rigid 8-to-10 month timeline for a standard G+2 residential home in Bangalore, barring extraordinary weather conditions." },
      { q: "Do you provide a warranty?", a: "Absolutely. We provide a comprehensive 10-year structural warranty and a 1-year seepage warranty on all residential projects." }
    ]
  },
  "commercial-construction": {
     title: "Robust Commercial Construction",
     subtitle: "High-yield commercial spaces, retail complexes, and office buildings delivered strictly on schedule.",
     heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
     painPoints: [
       { title: "Lost Rental Income", desc: "Every month of delayed construction is a month of massive lost rental yield." },
       { title: "Compliance Failures", desc: "Finding out post-construction that the building violates commercial fire and safety codes." },
       { title: "Poor Structural Integrity", desc: "Weak foundations struggling to handle standard commercial floor load requirements." }
     ],
     solution: {
       title: "Agile, Code-Compliant Execution",
       desc: "We prioritize velocity without sacrificing structural integrity. Our commercial engineering teams specialize in deep foundations, heavy load-bearing frames, and expedited timelines to ensure you start generating revenue instantly."
     },
     processSteps: [
      { step: "01", title: "Feasibility & Planning", desc: "We analyze FAR (Floor Area Ratio) limits and commercial viability." },
      { step: "02", title: "Commercial Approvals", desc: "Fire safety, BESCOM, and complete structural clearance obtained." },
      { step: "03", title: "Rapid Structural Erection", desc: "Using advanced curing techniques and heavy machinery for faster deployment." },
      { step: "04", title: "Fit-out Readiness", desc: "Building handed over strictly adhering to exact commercial interior specs." }
    ],
    materials: [
      { item: "Industrial Grade Concrete", desc: "Specialty mixed RMC for superior strength and rapid setup times." },
      { item: "Heavy Duty Framework", desc: "Oversized column structures utilizing engineered FE550D steel." },
      { item: "Commercial Fire Safety", desc: "Integrated sprinkler networks and highly fire-retardant structural treatments." },
      { item: "High-Traffic Flooring", desc: "Specialized epoxy and heavy-duty vitrified slabs for endless foot traffic." }
    ],
    faqs: [
      { q: "What types of commercial spaces do you build?", a: "We construct standalone retail stores, office complexes, co-working spaces, clinics, and multi-story commercial leasing assets." },
      { q: "Can you guarantee the delivery timeline?", a: "Yes. Due to the financial nature of commercial projects, we sign penalty-backed timeline commitments for our commercial clients." },
      { q: "Do you handle specialized MEP (Mechanical, Electrical, Plumbing)?", a: "Yes, our commercial division includes dedicated MEP engineers to handle heavy HAVC loads, server room setups, and commercial plumbing." }
    ]
  },
  "renovation": {
    title: "Luxury Renovation & Remodeling",
    subtitle: "Breathe new life into aging spaces with structural upgrades and modern aesthetics.",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop",
    painPoints: [
      { title: "Unseen Structural Damage", desc: "Tearing down walls only to discover critical hidden damage that destroys the budget." },
      { title: "Dust & Disruption", desc: "Contractors making your home unlivable and leaving hazardous debris everywhere." },
      { title: "Patchy Execution", desc: "New additions looking entirely out of place compared to the older structure." }
    ],
    solution: {
      title: "Clean, Calculated Transformations",
      desc: "Our remodeling experts don't guess. We perform deep structural audits before touching a hammer. We isolate work zones to minimize dust and surgically integrate new luxury finishes to match your exact vision."
    },
    processSteps: [
      { step: "01", title: "Structural Audit", desc: "We thoroughly check load-bearing walls, seepage, and electrical integrity." },
      { step: "02", title: "3D Visualizations", desc: "Before breaking ground, you'll see exact 3D models of the newly renovated space." },
      { step: "03", title: "Surgical Demolition", desc: "Clean, fast, and debris-managed tearing down of targeted elements." },
      { step: "04", title: "Rebuild & Handover", desc: "Flawless reconstruction with premium fittings, deep cleaned on handover." }
    ],
    materials: [
      { item: "Seamless Jointing", desc: "Advanced adhesives and binders ensuring old masonry melds perfectly with new." },
      { item: "Modern UPVC / Aluminum", desc: "Replacing aging wooden frames with ultra-durable, sound-proof window systems." },
      { item: "Concealed Utilities", desc: "Cutting-edge rerouting of old plumbing and wiring behind clean false ceilings/walls." },
      { item: "Smart Lighting", desc: "Upgrading legacy electricals into modern, energy-efficient smart networks." }
    ],
    faqs: [
      { q: "Can we live in the house during renovation?", a: "Depending on the scale. For localized remodels (e.g., kitchen/bath), yes. For whole-house structural overhauls, we usually recommend vacating." },
      { q: "How do you handle old, weakened walls?", a: "We inject specialized structural epoxy and use advanced jacketing techniques to drastically reinforce older load-bearing walls before applying new finishes." },
      { q: "Is renovation cheaper than rebuilding?", a: "Most of the time, yes. A total remodel typically costs 30-50% less than a complete teardown and rebuild, making it highly cost-effective." }
    ]
  },
  "turnkey-projects": {
    title: "End-to-End Turnkey Projects",
    subtitle: "From raw soil to fully furnished interiors. You provide the vision, we hand over the keys.",
    heroImage: "https://images.unsplash.com/photo-1541888088320-cf5f9f6874eb?q=80&w=2070&auto=format&fit=crop",
    painPoints: [
      { title: "Coordination Chaos", desc: "Juggling an architect, a civil contractor, and an interior designer all blaming each other." },
      { title: "Design Mismatches", desc: "The civil engineer couldn't match the interior designer's specific ceiling designs." },
      { title: "Endless Meetings", desc: "Wasting every weekend at the site trying to manage labor and material deliveries." }
    ],
    solution: {
      title: "One Contract. Zero Headaches.",
      desc: "Turnkey means total accountability. SR DreamSpace acts as your sole point of contact. Our unified team of architects, civil engineers, and master interior designers operate in perfect sync to deliver a fully complete home."
    },
    processSteps: [
      { step: "01", title: "Master Blueprint", desc: "Integrating both civil architecture and interior blueprints into one master plan." },
      { step: "02", title: "Core Construction", desc: "Executing the heavy lifting: foundation, super-structure, and initial MEP." },
      { step: "03", title: "Interior Fit-outs", desc: "Seamless transition into producing custom woodwork, ceilings, and modular setups." },
      { step: "04", title: "Plug-and-Play Handover", desc: "You walk in with your suitcases. The lighting, ACs, and furniture are ready." }
    ],
    materials: [
      { item: "Harmonized Material Sourcing", desc: "Every marble slab and veneer is selected together to match the unified 3D design." },
      { item: "Factory-Cut Woodwork", desc: "Our interiors feature precision machine-cut plywood using BWR and BWP marine grades." },
      { item: "Integrated Home Automation", desc: "Wired deep into the foundation—controlling lights, climate, and security via smartphone." },
      { item: "Global Brand Fittings", desc: "Kohler/Jaquar bathware, Hafele/Hettich hardware, and customized Italian finishes." }
    ],
    faqs: [
      { q: "What exactly does 'Turnkey' include?", a: "Turnkey covers absolutely everything. Approvals, architecture, structural civil work, plumbing, painting, full interior furnishing, and final cleaning." },
      { q: "Is Turnkey more expensive?", a: "Often, it's cheaper. Because we control the entire lifecycle, there is zero material wastage caused by miscommunication between disparate agencies." },
      { q: "Can I still choose my interior finishes?", a: "Yes! Turnkey doesn't mean standardized. You spend your time purely in design studios picking exquisite finishes, while we handle the execution." }
    ]
  },
  "interiors": {
    title: "Luxury Interior Design",
    subtitle: "Bespoke, breathtaking spaces crafted purely for aesthetics, comfort, and elite living.",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    painPoints: [
      { title: "Peeling & Warping", desc: "Cheap plywood and laminates bubbling up or rotting within just two years." },
      { title: "Cookie-Cutter Designs", desc: "Interiors that look exactly like a mass-produced hotel room rather than a custom home." },
      { title: "Carpenters Staying Forever", desc: "Promises of a 45-day delivery turning into 6 months of noisy carpenters in your living room." }
    ],
    solution: {
      title: "Precision Factory Execution",
      desc: "We ditch the loud on-site carpentary model. 80% of our luxury woodwork is designed in 3D and precision-cut at our factory grid. We simply assemble it perfectly on site, eliminating mess and ensuring millimeter perfection."
    },
    processSteps: [
      { step: "01", title: "Design Discovery", desc: "Mapping your lifestyle to our luxurious palettes: modern, minimalist, or neo-classical." },
      { step: "02", title: "Immersive 3D Rendering", desc: "Tour your home in incredibly realistic VR/3D before we purchase a single material." },
      { step: "03", title: "Factory Production", desc: "Precision milling, edge-banding, and PU coating executed in a dust-free environment." },
      { step: "04", title: "Rapid Installation", desc: "Our team assembles the factory units on-site swiftly, cleanly, and silently." }
    ],
    materials: [
      { item: "Marine Grade Plywood", desc: "100% boiling waterproof (BWP) ply used in all critical structural elements." },
      { item: "Polyurethane (PU) Finishes", desc: "Replacing cheap laminates with mirror-finish, scratch-resistant Italian PU coatings." },
      { item: "Soft-Close Technology", desc: "Every hinge, drawer, and slider runs purely on silent, soft-close German hardware." },
      { item: "Custom Ambient Lighting", desc: "Recessed profiles, cove lighting, and luxury chandeliers mapped perfectly to the space." }
    ],
    faqs: [
      { q: "Do you only do interiors for homes you built?", a: "No, we handle premium interior projects for completed homes, luxury apartments, and villas regardless of who constructed the shell." },
      { q: "How fast can you complete an interior project?", a: "Because we utilize a centralized factory approach, most 3BHK luxury interior installations take only 45-60 days once the 3D design is locked." },
      { q: "What design styles do you specialize in?", a: "Our master designers excel in Contemporary luxury, Minimalist Zen, Neo-Classical, and vibrant modern Indian aesthetics." }
    ]
  }
};
