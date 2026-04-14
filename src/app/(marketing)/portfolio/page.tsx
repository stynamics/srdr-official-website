"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioDatabase } from "@/lib/data/portfolio";

export default function PortfolioGalleryPage() {
    const categories = ["All", "Residential", "Commercial", "Renovation", "Interiors"];
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = activeFilter === "All" 
        ? portfolioDatabase 
        : portfolioDatabase.filter(p => p.category === activeFilter);

    return (
        <div className="bg-white min-h-screen">
            {/* Header / Hero */}
            <section className="bg-brand-blue pt-32 pb-20 text-center relative overflow-hidden">
                <div className="absolute top-0 right-[-10%] w-96 h-96 bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
                    >
                        Our Engineering & Design <span className="text-brand-gold">Masterpieces</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-300 mb-10"
                    >
                        Explore our portfolio of successfully delivered residential builds, high-yield commercial spaces, and stunning aesthetic renovations across Bangalore.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href="/get-a-quote">
                            <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white font-bold h-14 px-10 text-lg rounded-full shadow-xl transition-transform hover:scale-105">
                                Discuss Your Project
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-12 border-b border-slate-100 bg-slate-50 sticky top-[88px] z-30 shadow-sm">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                                    activeFilter === cat 
                                    ? "bg-brand-blue text-white shadow-md scale-105" 
                                    : "bg-white text-slate-600 border border-slate-200 hover:border-brand-gold hover:text-brand-blue"
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <motion.div 
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
                    >
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    key={project.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="group cursor-pointer rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all bg-white"
                                >
                                    <Link href={`/portfolio/${project.id}`}>
                                        <div className="relative h-72 md:h-96 w-full overflow-hidden">
                                            <div 
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                                style={{ backgroundImage: `url('${project.thumbnail}')` }} 
                                            />
                                            {/* Tag */}
                                            <div className="absolute top-6 left-6 bg-brand-blue/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                                                {project.category}
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-transparent to-transparent opacity-80" />
                                            
                                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                                <div>
                                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                                                    <div className="flex items-center text-slate-300 text-sm font-medium">
                                                        <MapPin className="w-4 h-4 mr-1" /> {project.location}
                                                    </div>
                                                </div>
                                                <div className="w-12 h-12 bg-brand-gold text-white rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                                                    <ArrowRight className="w-6 h-6" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-8">
                                            <p className="text-slate-600 leading-relaxed text-lg">
                                                {project.shortDesc}
                                            </p>
                                            <div className="mt-6 flex flex-wrap gap-2">
                                                {project.scope.slice(0, 3).map((s, i) => (
                                                    <span key={i} className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-md">
                                                        {s}
                                                    </span>
                                                ))}
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
