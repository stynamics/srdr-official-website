"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, ShieldCheck, HeartPulse, Building2, HardHat, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPageClient() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-brand-blue pt-40 pb-32 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/15 blur-[120px] rounded-full pointer-events-none opacity-50" />
                <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-5xl">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight"
                    >
                        Building <span className="text-brand-gold">Certainty</span>,<br/>Not Just Structures.
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-3xl text-slate-300 leading-relaxed font-medium"
                    >
                        Professionalizing civil construction across Bangalore with corporate discipline and iron-clad transparency.
                    </motion.p>
                </div>
            </section>

            {/* Story & Mission */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1541888088320-cf5f9f6874eb?q=80&w=2070&auto=format&fit=crop" 
                                alt="Construction Project" 
                                className="w-full h-auto rounded-[3rem] shadow-2xl"
                            />
                            <div className="absolute -bottom-10 -right-10 bg-brand-gold text-white p-12 rounded-[2.5rem] shadow-2xl hidden md:block">
                                <h3 className="text-5xl font-extrabold">100%</h3>
                                <p className="text-brand-blue font-black tracking-[0.2em] uppercase text-xs mt-2">Legal Compliance</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-extrabold text-brand-blue mb-8 tracking-tight leading-tight">Our Mission: Rescuing the Dream.</h2>
                            <p className="text-xl text-slate-700 mb-8 leading-relaxed font-medium">
                                SR DreamSpace Realty was born out of profound frustration. We saw too many Bangalore families lose their life savings to disorganized contractors, shifting timelines, and budgets that ballooned without warning.
                            </p>
                            <p className="text-xl text-slate-700 mb-10 leading-relaxed font-medium">
                                We realized the industry didn't just need another builder—it needed high-stakes engineering rigor. We brought corporate discipline to the site, enforcing fixed price contracts and daily reporting so building your home stays a joyful experience.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                                    <Target className="w-10 h-10 text-brand-gold mb-4" />
                                    <h4 className="font-extrabold text-brand-blue text-2xl mb-3">Our Core Goal</h4>
                                    <p className="text-slate-600 text-lg leading-relaxed font-medium">To completely eradicate the anxiety of building a home through 100% transparent management.</p>
                                </div>
                                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                                    <Building2 className="w-10 h-10 text-brand-gold mb-4" />
                                    <h4 className="font-extrabold text-brand-blue text-2xl mb-3">Our Vision</h4>
                                    <p className="text-slate-600 text-lg leading-relaxed font-medium">To be Bangalore's most implicitly trusted civil construction and luxury real estate developer.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 md:py-32 bg-brand-blue text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-brand-gold/10 via-transparent to-transparent pointer-events-none" />
                <div className="container relative z-10 mx-auto px-4 md:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-24">
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">The SR Mandate</h2>
                        <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">These are the strict, non-negotiable standards that define every square foot we build.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { icon: ShieldCheck, title: "Absolute Transparency", desc: "No fuzzy estimates. Our quotes break down costs to the last rupee before the first brick is laid." },
                            { icon: HeartPulse, title: "Uncompromising Quality", desc: "If a finish isn't perfect, we rebuild it. We don't settle for 'good enough' in structural safety." },
                            { icon: HardHat, title: "Punctual Delivery", desc: "We utilize rigorous milestone mapping to guarantee your project is handed over exactly when promised." },
                        ].map((val, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] backdrop-blur-md text-center hover:bg-white/10 hover:border-brand-gold/40 transition-all group"
                            >
                                <div className="w-20 h-20 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <val.icon size={40} />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-extrabold mb-6 tracking-tight">{val.title}</h3>
                                <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Indicators Banner */}
            <section className="py-16 md:py-24 bg-brand-gold text-brand-blue">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-wrap justify-center gap-16 md:gap-32">
                        <div className="text-center">
                            <h4 className="text-5xl md:text-8xl font-black mb-2">10+</h4>
                            <p className="font-black uppercase tracking-[0.2em] text-xs md:text-sm text-brand-blue/70">Years Experience</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-5xl md:text-8xl font-black mb-2">100+</h4>
                            <p className="font-black uppercase tracking-[0.2em] text-xs md:text-sm text-brand-blue/70">Families Served</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-5xl md:text-8xl font-black mb-2">100%</h4>
                            <p className="font-black uppercase tracking-[0.2em] text-xs md:text-sm text-brand-blue/70">Price Certainty</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Message Section */}
            <section className="py-24 md:py-32 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <div className="bg-white rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-slate-100">
                        <div className="lg:w-2/5 relative h-96 lg:h-auto">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" alt="Founder" className="absolute w-full h-full object-cover" />
                        </div>
                        <div className="lg:w-3/5 p-12 md:p-20 flex flex-col justify-center">
                            <h3 className="text-3xl font-extrabold text-brand-blue mb-10 tracking-tight uppercase tracking-widest text-sm text-brand-gold">A Personal commitment</h3>
                            <p className="text-2xl md:text-3xl text-slate-800 italic mb-12 leading-relaxed font-medium">
                                "When you build your home with us, you aren't just signing a contract—you are handing over your family's future. I personally guarantee that our engineers will treat your project with the exact same gravity and care as if we were constructing our own homes."
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center">
                                    <Smile size={32} className="text-brand-blue" />
                                </div>
                                <div>
                                    <h4 className="font-black text-brand-blue text-2xl tracking-tight">Founder & Director</h4>
                                    <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">SR DreamSpace Realty</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 md:py-32 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-7xl font-extrabold text-brand-blue mb-10 tracking-tight leading-tight">Ready to build without the <span className="text-brand-gold">stress</span>?</h2>
                    <Link href="/get-a-quote">
                        <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white font-bold h-20 px-16 text-xl rounded-full shadow-2xl transition-all hover:scale-105">
                            Start Your Project Properly <ArrowRight className="ml-4 w-6 h-6" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
