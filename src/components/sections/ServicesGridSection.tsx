"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building, Home, Paintbrush, Hammer, LayoutDashboard } from "lucide-react";

export function ServicesGridSection() {
    const services = [
        { icon: Home, title: "Residential Construction", path: "/services/residential-construction", desc: "End-to-end villa and independent house construction with premium, flawless finishing.", cols: "md:col-span-2 lg:col-span-2" },
        { icon: Building, title: "Commercial Construction", path: "/services/commercial-construction", desc: "Robust, architecturally stunning office and retail spaces built for scale.", cols: "md:col-span-1 lg:col-span-1" },
        { icon: Paintbrush, title: "Renovation", path: "/services/renovation", desc: "Transform and upgrade your aging spaces into modern architectural marvels.", cols: "md:col-span-1 lg:col-span-1" },
        { icon: Hammer, title: "Turnkey Projects", path: "/services/turnkey-projects", desc: "From concept blueprints to the final handover—we handle absolutely everything.", cols: "md:col-span-1 lg:col-span-1" },
        { icon: LayoutDashboard, title: "Interiors", path: "/services/interiors", desc: "Custom, luxurious interior design and execution for elite homes.", cols: "md:col-span-1 lg:col-span-1" },
    ];

    return (
        <section className="bg-brand-blue py-24 md:py-32 text-white relative overflow-hidden">
            {/* Background Texture/Gradient */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Our Core Expertise</h2>
                    <p className="text-slate-300 text-lg md:text-xl">
                        Comprehensive construction services designed for absolute quality, scale, and longevity.
                    </p>
                </div>

                {/* Bento Box Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((svc, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1 }}
                            className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10 hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-300 group flex flex-col ${svc.cols}`}
                        >
                            <div className="w-14 h-14 bg-brand-gold/10 text-brand-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-blue transition-all">
                                <svc.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{svc.title}</h3>
                            <p className="text-slate-400 mb-8 flex-grow text-base md:text-lg leading-relaxed">
                                {svc.desc}
                            </p>
                            
                            <Link href={svc.path} className="inline-flex items-center text-brand-gold font-semibold group-hover:text-white transition-colors mt-auto text-lg">
                                Learn More <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
