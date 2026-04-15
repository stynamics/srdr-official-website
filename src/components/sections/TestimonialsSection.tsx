"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh Kumar",
        location: "Whitefield, Bangalore",
        project: "3BHK Villa",
        rating: 5,
        text: "SR DreamSpace completely transformed our building experience. The final cost matched the initial quote to the last rupee, and they delivered our villa 2 weeks ahead of schedule. The daily WhatsApp updates gave us complete peace of mind.",
        initials: "RK",
    },
    {
        name: "Priya Sharma",
        location: "HSR Layout, Bangalore",
        project: "4BHK Duplex Villa",
        rating: 5,
        text: "After two failed experiences with local contractors, SR DreamSpace was a breath of fresh air. Their project manager was always reachable, the material quality was exceptional, and every Vastu specification we requested was honoured perfectly.",
        initials: "PS",
    },
    {
        name: "Mohammed Ismail",
        location: "Electronic City, Bangalore",
        project: "Commercial Office Space",
        rating: 5,
        text: "We needed our 4,000 sq ft office ready in exactly 6 months for our business launch. SR DreamSpace not only delivered on time but the fit-out quality exceeded our expectations. The fixed-price contract saved us from budget anxiety.",
        initials: "MI",
    },
    {
        name: "Ananya Reddy",
        location: "K R Puram, Bangalore",
        project: "Complete Home Renovation",
        rating: 5,
        text: "Our 20-year-old home needed a complete overhaul. The SR DreamSpace team handled everything — from structural reinforcement to modern interiors — without us having to chase a single person. Truly professional construction management.",
        initials: "AR",
    },
    {
        name: "Suresh & Lakshmi Nair",
        location: "Sarjapur Road, Bangalore",
        project: "2BHK Independent House",
        rating: 5,
        text: "Building our retirement home was an emotional decision. SR DreamSpace treated it with the gravity it deserved. The Vastu-compliant design, A-grade UltraTech cement, and Jaquar fittings — everything was exactly as promised in the agreement.",
        initials: "SN",
    },
];

export function TestimonialsSection() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-advance every 6 seconds
    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, []);

    const t = testimonials[current];

    const slideVariants = {
        enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
    };

    return (
        <section className="bg-white py-24 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue mb-6 tracking-tight leading-tight">
                        Families Who <span className="text-brand-gold">Trusted</span> Us With Their Dream.
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                        Real stories from real homeowners across Bangalore who chose transparency over uncertainty.
                    </p>
                </div>

                {/* Testimonial Card */}
                <div className="max-w-4xl mx-auto relative">
                    <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100 relative overflow-hidden min-h-[320px] flex flex-col justify-center">
                        {/* Decorative Quote */}
                        <div className="absolute top-8 right-8 opacity-5">
                            <Quote className="w-32 h-32 text-brand-blue" />
                        </div>

                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="relative z-10"
                            >
                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-brand-gold fill-brand-gold" />
                                    ))}
                                </div>

                                {/* Quote Text */}
                                <p className="text-lg md:text-xl text-slate-800 leading-relaxed font-medium italic mb-10">
                                    &ldquo;{t.text}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 bg-brand-gold/15 text-brand-gold rounded-2xl flex items-center justify-center font-black text-lg">
                                        {t.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-brand-blue text-lg tracking-tight">{t.name}</h4>
                                        <p className="text-slate-500 text-sm font-bold">
                                            {t.project} • {t.location}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8">
                        <div className="flex gap-2">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setDirection(idx > current ? 1 : -1);
                                        setCurrent(idx);
                                    }}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        idx === current
                                            ? "w-10 bg-brand-gold"
                                            : "w-2 bg-slate-200 hover:bg-slate-300"
                                    }`}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={prev}
                                className="w-12 h-12 rounded-xl bg-slate-100 hover:bg-brand-gold hover:text-white text-slate-600 flex items-center justify-center transition-all"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={next}
                                className="w-12 h-12 rounded-xl bg-slate-100 hover:bg-brand-gold hover:text-white text-slate-600 flex items-center justify-center transition-all"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
