export type ProjectData = {
    id: string;
    title: string;
    category: "Residential" | "Commercial" | "Renovation" | "Interiors";
    location: string;
    shortDesc: string;
    thumbnail: string;
    overview: string;
    scope: string[];
    materials: string[];
    beforeImage?: string;
    afterImage: string;
    duration: string;
    completionDate: string;
};
  
export const portfolioDatabase: ProjectData[] = [
    {
        id: "lux-villa-whitefield",
        title: "The Zenith Villa",
        category: "Residential",
        location: "Whitefield, Bangalore",
        shortDesc: "A 4-bedroom ultra-luxury independent villa showcasing modern architectural lines and fully integrated smart-home automation.",
        thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
        overview: "The Zenith Villa was conceived as a multi-generational living space in the heart of Whitefield. Our mandate was to construct a robust G+2 structure that maximized natural light despite a relatively tight corner plot. The result is a stunning contemporary architectural marvel featuring double-height living spaces, infinity edge balconies, and uncompromised structural integrity.",
        scope: ["End-to-End Civil Construction", "Vaastu-compliant Blueprinting", "Custom MEP (Mechanical, Electrical, Plumbing)", "Luxury Interior Turnkey Finishes"],
        materials: ["UltraTech 53 Grade Cement", "JSW Neo Steel", "Italian Botticino Marble", "Kohler Sanitary Fittings"],
        beforeImage: "https://images.unsplash.com/photo-1516158368565-d6e279f42b36?q=80&w=2070&auto=format&fit=crop", // placeholder dirt plot/construction
        afterImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
        duration: "11 Months",
        completionDate: "October 2025"
    },
    {
        id: "corporate-hub-ecity",
        title: "Nexus Tech Park Phase II",
        category: "Commercial",
        location: "Electronic City Phase 1",
        shortDesc: "A cutting-edge commercial office space spanning 15,000 sq ft, designed for high density and premium tenant leasing.",
        thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        overview: "Nexus Phase II required rapid execution to meet a strict commercial leasing deadline. We engineered a massive load-bearing superstructure capable of supporting intense server-room infrastructure and high foot traffic. We delivered exactly 3 weeks ahead of the penalty-backed schedule, directly saving the client immense lost rental yield.",
        scope: ["Heavy Load-Bearing Civil Work", "Commercial Fire Safety Systems", "High-Load HVAC Ducting & Electricals", "Glass Facade Installation"],
        materials: ["Industrial Ready-Mix Concrete (RMC)", "Fe550D Heavy-Duty Steel Frames", "Saint-Gobain Acoustic Facade Glass", "Heavy-Duty Epoxy Flooring"],
        afterImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        duration: "8 Months",
        completionDate: "August 2025"
    },
    {
        id: "heritage-renovation-hsr",
        title: "The HSR Revival",
        category: "Renovation",
        location: "HSR Layout, Sector 2",
        shortDesc: "Complete structural strengthening and modern aesthetic remodeling of a 20-year-old traditional home.",
        thumbnail: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop",
        overview: "This project presented the challenge of preserving the emotional legacy of an ancestral home while upgrading it to contemporary luxury standards. We executed a delicate structural jacketing process to reinforce aging load-bearing walls before gutting and expanding the interior spaces to create a seamless open-plan living environment.",
        scope: ["Deep Structural Auditing & Jacketing", "Complete Bathroom Redesign & Plumbing Overhaul", "Open-Plan Wall Demolitions", "Modern Staircase & Facade Makeover"],
        materials: ["Hilti Structural Anchors & Epoxy", "Aesthetic Wooden Louvers", "Waterproof Marine Plywood", "Jaguar Premium Bathroom Suites"],
        beforeImage: "https://images.unsplash.com/photo-1481253127861-534498168948?q=80&w=2073&auto=format&fit=crop", // old building
        afterImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop",
        duration: "4.5 Months",
        completionDate: "February 2026"
    },
    {
        id: "zen-interiors-koramangala",
        title: "Zen Minimalist Penthouse",
        category: "Interiors",
        location: "Koramangala",
        shortDesc: "A complete turnkey interior fit-out for a luxury penthouse, featuring bespoke natural woodwork and silent automation.",
        thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
        overview: "The client demanded absolute perfection and zero construction mess in an already occupied high-end apartment building. We utilized our off-site factory grid to precision-cut over 90% of the woodwork and modular setups, drastically reducing on-site installation time. The result is a breathtaking, clutter-free sanctuary.",
        scope: ["Factory-Milled Modular Kitchen & Wardrobes", "Ambient Cove Lighting Design", "Bespoke Italian PU Polishing", "Hidden Storage Optimization"],
        materials: ["100% BWP Marine Plywood", "Hafele Soft-Close Hardware", "Italian Mirror-Finish PU Coatings", "Corian Seamless Countertops"],
        afterImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
        duration: "45 Days",
        completionDate: "January 2026"
    }
];
