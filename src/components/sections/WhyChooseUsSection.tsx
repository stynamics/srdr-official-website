"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CalendarCheck, Users, DraftingCompass } from "lucide-react";
import { TrustIndicatorCard } from "@/components/ui/TrustIndicatorCard";

export function WhyChooseUsSection() {
    const features = [
        { 
            icon: <ShieldCheck size={32} />, 
            title: "Iron-Clad Fixed Pricing", 
            desc: "The quote we sign is the price you pay. Even if material costs spike during construction, we absorb the difference." 
        },
        { 
            icon: <CalendarCheck size={32} />, 
            title: "Zero-Delay Handover", 
            desc: "We run our sites with corporate project management rigor. If we say 10 months, we mean 10 months, backed by penalty clauses." 
        },
        { 
            icon: <Users size={32} />, 
            title: "Daily Site Reporting", 
            desc: "You won't have to chase contractors. Your dedicated PM sends photos and progress logs every single day via WhatsApp." 
        },
        { 
            icon: <DraftingCompass size={32} />, 
            title: "Verified Grade-A Brands", 
            desc: "We exclusively use brands like UltraTech, JSW, and Jaquar. No local substitutes, no cutting corners on structural integrity." 
        },
    ];

    return (
        <section className="bg-white py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12 items-end justify-between mb-20">
                    <div className="lg:w-3/5">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue leading-[1.15] mb-6 tracking-tight">
                            Trust Isn't Given. It's Built Through <span className="text-brand-gold">Meticulous Execution</span>.
                        </h2>
                    </div>
                    <div className="lg:w-2/5">
                        <p className="text-base text-slate-700 font-medium md:border-l-4 md:border-brand-gold md:pl-8 leading-relaxed mb-4">
                            Building a home in Bangalore is traditionally stressful. We’ve professionalized the process by treating your project like high-stakes corporate infrastructure.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {features.map((feat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all group"
                        >
                            <div className="w-16 h-16 bg-white text-brand-gold rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                {feat.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue mb-3 tracking-tight">{feat.title}</h3>
                            <p className="text-base text-slate-600 leading-relaxed font-medium">
                                {feat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
