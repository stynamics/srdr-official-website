"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building, Home, Paintbrush, Hammer, LayoutDashboard } from "lucide-react";

export function ServicesGridSection() {
    const services = [
        { 
            icon: Home, 
            title: "Residential Construction", 
            path: "/services/residential-construction", 
            desc: "Expertly engineered villas and independent homes built with high-grade materials and obsessive attention to structural detail.", 
            cols: "md:col-span-2 lg:col-span-2" 
        },
        { 
            icon: Building, 
            title: "Commercial Projects", 
            path: "/services/commercial-construction", 
            desc: "High-velocity construction for retail, office, and clinic spaces where timeline accuracy is tied to your business ROI.", 
            cols: "md:col-span-1 lg:col-span-1" 
        },
        { 
            icon: Paintbrush, 
            title: "Aesthetic Renovation", 
            path: "/services/renovation", 
            desc: "Transforming aging properties with structural reinforcements and modern luxury upgrades that feel completely new.", 
            cols: "md:col-span-1 lg:col-span-1" 
        },
        { 
            icon: Hammer, 
            title: "Full Turnkey Solutions", 
            path: "/services/turnkey-projects", 
            desc: "We own the entire lifecycle: architecture, BBMP approvals, civil construction, and the final 100-point hand-over.", 
            cols: "md:col-span-1 lg:col-span-1" 
        },
        { 
            icon: LayoutDashboard, 
            title: "Elite Interiors", 
            path: "/services/interiors", 
            desc: "Factory-precision modular woodwork and bespoke Italian-finish luxury interiors for high-end residential living.", 
            cols: "md:col-span-1 lg:col-span-1" 
        },
    ];

    return (
        <section className="bg-brand-blue py-24 md:py-32 text-white relative overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-gold/10 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight">
                        Built for Performance. <br className="hidden md:block" /> Designed for <span className="text-brand-gold">Longevity</span>.
                    </h2>
                    <p className="text-slate-300 text-xl md:text-2xl leading-relaxed font-medium">
                        Comprehensive construction expertise across Bangalore, delivered with the precision of high-end engineering.
                    </p>
                </div>

                {/* Bento Box Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((svc, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1 }}
                            className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 hover:bg-white/10 hover:border-brand-gold/40 transition-all duration-500 group flex flex-col ${svc.cols} shadow-2xl shadow-black/20`}
                        >
                            <div className="w-16 h-16 bg-brand-gold/15 text-brand-gold rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-blue transition-all duration-300">
                                <svc.icon size={32} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-extrabold mb-5 tracking-tight">{svc.title}</h3>
                            <p className="text-slate-300/90 mb-10 flex-grow text-lg md:text-xl leading-relaxed font-medium">
                                {svc.desc}
                            </p>
                            
                            <Link href={svc.path} className="inline-flex items-center text-brand-gold font-bold group-hover:text-white transition-colors mt-auto text-xl uppercase tracking-widest">
                                View Details <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
