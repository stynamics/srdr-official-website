"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Building2, HardHat, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioDatabase } from "@/lib/data/portfolio";

export default function PortfolioGalleryPageClient() {
    const categories = ["All", "Residential", "Commercial", "Renovation", "Interiors"];
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = activeFilter === "All" 
        ? portfolioDatabase 
        : portfolioDatabase.filter(p => p.category === activeFilter);

    return (
        <div className="bg-white min-h-screen">
            {/* Header / Hero */}
            <section className="bg-brand-blue pt-20 pb-32 text-center relative overflow-hidden">
                <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-brand-gold/15 blur-[120px] rounded-full pointer-events-none opacity-50" />
                <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-white/5 blur-[100px] rounded-full pointer-events-none" />
                
                <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-5xl">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight"
                    >
                        Our Engineering <span className="text-brand-gold">Masterpieces</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        Success isn't accidental. Explore our portfolio of successfully delivered residential villas, commercial hubs, and high-end restorations across Bangalore.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row justify-center gap-6"
                    >
                        <Link href="/get-a-quote">
                            <Button className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold/90 text-white font-bold h-14 px-10 text-base rounded-full shadow-2xl transition-transform hover:scale-105">
                                Start Your Journey
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Trust Badges Banner */}
            <section className="bg-slate-50 py-12 border-y border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-70">
                        <div className="flex items-center gap-3 text-slate-600 font-bold uppercase tracking-widest text-xs">
                           <ShieldCheck size={20} className="text-brand-gold" /> Guaranteed Timelines
                        </div>
                        <div className="flex items-center gap-3 text-slate-600 font-bold uppercase tracking-widest text-xs">
                           <HardHat size={20} className="text-brand-gold" /> Approved Materials
                        </div>
                        <div className="flex items-center gap-3 text-slate-600 font-bold uppercase tracking-widest text-xs">
                           <Building2 size={20} className="text-brand-gold" /> BBMP Compliant
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-12 border-b border-slate-100 bg-white sticky top-[80px] z-30 shadow-sm backdrop-blur-md bg-white/90">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-8 py-4 rounded-xl font-black text-sm md:text-base uppercase tracking-widest transition-all duration-300 ${
                                    activeFilter === cat 
                                    ? "bg-brand-blue text-white shadow-xl scale-105" 
                                    : "bg-slate-50 text-slate-500 border border-slate-200 hover:border-brand-gold hover:text-brand-blue"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-24 md:py-32 bg-slate-50/50">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div 
                        layout
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
                    >
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    key={project.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    className="group cursor-pointer rounded-[3rem] overflow-hidden border border-slate-200 shadow-xl hover:shadow-[0_50px_100px_-20px_rgba(10,25,47,0.15)] transition-all bg-white"
                                >
                                    <Link href={`/portfolio/${project.id}`}>
                                        <div className="relative h-80 md:h-[500px] w-full overflow-hidden">
                                            <div 
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                                style={{ backgroundImage: `url('${project.thumbnail}')` }} 
                                            />
                                            {/* Tag */}
                                            <div className="absolute top-8 left-8 bg-brand-gold text-brand-blue px-6 py-2 rounded-xl text-sm font-black tracking-widest uppercase shadow-2xl z-20">
                                                {project.category}
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/95 via-brand-blue/40 to-transparent opacity-90 z-10" />
                                            
                                            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end z-20">
                                                <div className="max-w-[80%]">
                                                    <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-3 tracking-tight leading-tight group-hover:text-brand-gold transition-colors">{project.title}</h3>
                                                    <div className="flex items-center text-slate-300 text-base font-bold">
                                                        <MapPin className="w-5 h-5 mr-2 text-brand-gold" /> {project.location}
                                                    </div>
                                                </div>
                                                <div className="w-14 h-14 bg-white text-brand-blue rounded-full flex items-center justify-center scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 shadow-2xl">
                                                    <ArrowRight className="w-6 h-6" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-8 md:p-12">
                                            <p className="text-slate-700 leading-relaxed text-base font-medium line-clamp-3">
                                                {project.shortDesc}
                                            </p>
                                            <div className="mt-8 flex flex-wrap gap-3">
                                                {project.scope.slice(0, 3).map((s, i) => (
                                                    <span key={i} className="bg-brand-blue/5 text-brand-blue/70 text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl border border-brand-blue/10">
                                                        {s}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-between">
                                                <span className="text-brand-blue text-sm font-black uppercase tracking-[0.2em]">View Case Study</span>
                                                <ArrowRight className="w-5 h-5 text-brand-gold group-hover:translate-x-3 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
