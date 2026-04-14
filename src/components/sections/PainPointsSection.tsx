"use client";

import { motion } from "framer-motion";
import { Clock, Wallet, MessageSquareX, CheckCircle2 } from "lucide-react";

export function PainPointsSection() {
    const painPoints = [
        { 
            icon: Clock, 
            title: "The 'Endless Delay' Trap", 
            desc: "Most Bangalore contractors promise 8 months and deliver in 18. Every month delayed is a month of lost rental or extra interest on your home loan." 
        },
        { 
            icon: Wallet, 
            title: "The 'Hidden Cost' Surprise", 
            desc: "Low initial quotes often turn into endless 'extra work' bills midway through the project. We lock our pricing so you don't face budget explosions." 
        },
        { 
            icon: MessageSquareX, 
            title: "The Silent Contractor", 
            desc: "The frustration of your calls going ignored when the work stops. Professionalism in construction means being reachable and accountable, 24/7." 
        },
    ];

    return (
        <section className="bg-slate-50 py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-brand-blue mb-8 tracking-tight leading-[1.1]">
                        Construction in Bangalore shouldn't be a nightmare.
                    </h2>
                    <p className="text-xl text-slate-700 leading-relaxed font-medium">
                        You've likely heard the horror stories: contractors vanishing, BBMP approval headaches, and substandard materials. At SR DreamSpace, we’ve built our entire business model to solve these exact frustrations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">
                    {painPoints.map((point, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-brand-blue/5 border border-slate-100 flex flex-col items-center text-center group hover:border-brand-gold/20 transition-all"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-red-50 flex items-center justify-center text-red-500 mb-8 group-hover:scale-110 transition-transform">
                                <point.icon size={36} />
                            </div>
                            <h3 className="text-2xl font-extrabold text-brand-blue mb-4 tracking-tight">{point.title}</h3>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">{point.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="bg-brand-blue text-white p-12 md:p-16 rounded-[3rem] text-center max-w-5xl mx-auto flex flex-col items-center relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-gold/20 via-transparent to-transparent opacity-50" />
                    <CheckCircle2 className="w-16 h-16 text-brand-gold mb-8 relative z-10" />
                    <h3 className="text-3xl md:text-4xl font-bold relative z-10 leading-[1.3] text-brand-gold/90 uppercase tracking-widest">
                        Total Transparency. Zero Exceptions.
                    </h3>
                    <p className="text-xl md:text-2xl text-white font-medium mt-6 relative z-10 leading-relaxed">
                        From securing tedious BBMP plan sanctions to daily high-definition photo updates, we handle the complexity so you can stay excited about your new home.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
