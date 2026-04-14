"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, ShieldCheck, HeartPulse, Building2, HardHat, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-brand-blue pt-32 pb-24 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-4xl">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight"
                    >
                        Building <span className="text-brand-gold">Trust</span>,<br/>Not Just Structures.
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-2xl text-slate-300"
                    >
                        We are engineering Bangalore's skyline with unparalleled transparency, unyielding timelines, and uncompromising quality.
                    </motion.p>
                </div>
            </section>

            {/* Story & Mission */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1541888088320-cf5f9f6874eb?q=80&w=2070&auto=format&fit=crop" 
                                alt="Construction Project" 
                                className="w-full h-auto rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-8 -right-8 bg-brand-gold text-white p-8 rounded-2xl shadow-xl hidden md:block">
                                <h3 className="text-4xl font-extrabold">100%</h3>
                                <p className="text-brand-blue font-bold tracking-wider uppercase text-sm mt-1">Fixed Pricing Guarantee</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">Our Story & Mission</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                SR DreamSpace Realty was born out of profound frustration. Time and again, we witnessed honest families in Bangalore being manipulated by disorganized contractors, constantly shifting timelines, and budgets that spiraled out of control.
                            </p>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                We realized the real estate industry didn't just need another builder—it needed strict corporate discipline. We engineered a massive transformation by introducing fixed price contracts, stringent 100-point quality audits, and dedicated project managers. Building your dream shouldn't be a nightmare.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <Target className="w-8 h-8 text-brand-gold mb-3" />
                                    <h4 className="font-bold text-brand-blue text-xl mb-2">Our Mission</h4>
                                    <p className="text-slate-600 text-sm">To completely eradicate the anxiety of building a home by deploying 100% transparent construction ecosystems.</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                    <Building2 className="w-8 h-8 text-brand-gold mb-3" />
                                    <h4 className="font-bold text-brand-blue text-xl mb-2">Our Vision</h4>
                                    <p className="text-slate-600 text-sm">To be Bangalore's most implicitly trusted civil construction and luxury real estate developer.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-brand-gold/5 via-transparent to-transparent pointer-events-none" />
                <div className="container relative z-10 mx-auto px-4 md:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">The Pillars of SR DreamSpace</h2>
                        <p className="text-lg text-slate-300">These aren't just buzzwords. They are the strict non-negotiable mandates every single one of our employees follows.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: ShieldCheck, title: "Absolute Transparency", desc: "Our quotes break down everything to the exact penny. Zero hidden fees. Period." },
                            { icon: HeartPulse, title: "Uncompromising Quality", desc: "If an execution is slightly off, we tear it down and rebuild it perfectly at our cost." },
                            { icon: HardHat, title: "Timely Delivery", desc: "We utilize rigorous milestone mapping to guarantee your home is handed over exactly on schedule." },
                        ].map((val, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md text-center hover:bg-white/10 hover:border-brand-gold/30 transition-all group"
                            >
                                <div className="w-16 h-16 bg-brand-gold/20 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <val.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{val.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Indicators Banner */}
            <section className="py-12 bg-brand-gold text-brand-blue">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                        <div className="text-center">
                            <h4 className="text-4xl md:text-6xl font-extrabold mb-1">10+</h4>
                            <p className="font-bold uppercase tracking-widest text-sm text-brand-blue/80">Years Experience</p>
                        </div>
                        <div className="text-center hidden sm:block">
                            <h4 className="text-4xl md:text-6xl font-extrabold mb-1">100+</h4>
                            <p className="font-bold uppercase tracking-widest text-sm text-brand-blue/80">Projects Delivered</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-4xl md:text-6xl font-extrabold mb-1">100%</h4>
                            <p className="font-bold uppercase tracking-widest text-sm text-brand-blue/80">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Message Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                        <div className="md:w-2/5 relative h-80 md:h-auto">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" alt="Founder" className="absolute w-full h-full object-cover" />
                        </div>
                        <div className="md:w-3/5 p-10 md:p-14">
                            <h3 className="text-3xl font-bold text-brand-blue mb-6">A Personal Commitment</h3>
                            <p className="text-lg text-slate-600 italic mb-8 leading-relaxed">
                                "When you entrust us with building your home, you aren't just assigning a contract—you are handing over your life's savings and your family's future. I personally guarantee that our team will treat your project with the exact same gravity, respect, and meticulous care as if we were constructing our own homes."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                                    <Smile className="text-brand-blue" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-blue text-xl">Founder & Director</h4>
                                    <p className="text-slate-500">SR DreamSpace Realty</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-brand-blue mb-8 tracking-tight">Experience Peace of Mind.</h2>
                    <Link href="/get-a-quote">
                        <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white font-bold h-16 px-12 text-lg rounded-full shadow-xl transition-all hover:scale-105">
                            Start Your Project with Us <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
