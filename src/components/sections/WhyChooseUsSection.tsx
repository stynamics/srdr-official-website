"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CalendarCheck, Users, DraftingCompass } from "lucide-react";
import { TrustIndicatorCard } from "@/components/ui/TrustIndicatorCard";

export function WhyChooseUsSection() {
    const features = [
        { icon: <ShieldCheck size={28} />, title: "Transparent Pricing", desc: "No hidden fees. Every cost is documented upfront in an iron-clad agreement." },
        { icon: <CalendarCheck size={28} />, title: "Committed Timelines", desc: "We map out the entire project aggressively and deliver precisely when promised." },
        { icon: <Users size={28} />, title: "Dedicated Project Manager", desc: "One expert point of contact giving you consistent, proactive updates on progress." },
        { icon: <DraftingCompass size={28} />, title: "Quality Materials", desc: "We never cut corners. We use only standardized, premium-grade steel, cement, and fittings." },
    ];

    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-16">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-blue leading-tight mb-6">
                            Trust Built Through <br className="hidden md:block"/> <span className="text-brand-gold">Flawless Execution</span>.
                        </h2>
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-lg text-slate-600 md:border-l-4 md:border-brand-gold md:pl-6 leading-relaxed">
                            We don't just build spaces; we build trust. Our engineering rigor and uncompromising project management systems ensure your project is seamless, premium, and inherently stress-free.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {features.map((feat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <TrustIndicatorCard 
                                icon={feat.icon}
                                title={feat.title}
                                description={feat.desc}
                                className="h-full"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
