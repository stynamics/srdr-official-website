"use client";

import { motion } from "framer-motion";
import { Clock, Wallet, MessageSquareX, CheckCircle2 } from "lucide-react";

export function PainPointsSection() {
    const painPoints = [
        { icon: Clock, title: "Endless Delays", desc: "Handover dates that keep moving back by months, causing stress and escalating rental costs." },
        { icon: Wallet, title: "Budget Overruns", desc: "Hidden costs and 'unforeseen' expenses that double your initial quoted budget unexpectedly." },
        { icon: MessageSquareX, title: "Poor Communication", desc: "Contractors going completely silent when you demand critical updates about your project." },
    ];

    return (
        <section className="bg-slate-50 py-24">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-6 tracking-tight">
                        Building a home shouldn't be a nightmare.
                    </h2>
                    <p className="text-lg text-slate-600">
                        We know the horror stories. You probably do, too. Unreliable contractors and skyrocketing budgets. But it doesn't have to be this way.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {painPoints.map((point, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow"
                        >
                            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                                <point.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-blue mb-3">{point.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{point.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-brand-blue text-white p-8 md:p-12 rounded-3xl text-center max-w-4xl mx-auto flex flex-col items-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-gold/10 to-transparent" />
                    <CheckCircle2 className="w-12 h-12 text-brand-gold mb-6 relative z-10" />
                    <h3 className="text-2xl md:text-3xl font-bold relative z-10 leading-snug">
                        We solve these exact problems with a structured, 100% transparent execution model.
                    </h3>
                </motion.div>
            </div>
        </section>
    );
}
