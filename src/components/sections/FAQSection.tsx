"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const faqs = [
    {
        q: "What is your pricing model and is there a fixed-price guarantee?",
        a: "Yes, absolutely. Every project at SR DreamSpace Realty begins with a detailed cost breakdown agreed upon before a single brick is laid. We operate on a fixed-price contract — the quote you sign is the price you pay, even if material costs fluctuate during construction. There are no hidden extras, no surprise bills, and no mid-project renegotiation.",
    },
    {
        q: "How long does it take to build a typical residential house in Bangalore?",
        a: "A standard G+2 house (1,200–2,400 sq ft) typically takes 10–14 months. A duplex villa or larger bungalow may take 14–18 months. Your timeline is defined in your project agreement with milestone-wise handover dates, backed by penalty clauses if we miss deadlines.",
    },
    {
        q: "What does your construction cost per sq ft include?",
        a: "Our per-sq-ft rate includes structural civil work (foundation, columns, beams, slabs, brickwork, plastering), waterproofing, electrical wiring, plumbing, flooring, paint, and standard fixtures. Premium finishes like imported marble, modular kitchen, and automation are added as per the selected grade. BBMP sanction fees and government approval costs are separate unless explicitly included.",
    },
    {
        q: "Do you handle BBMP plan sanction and government approvals?",
        a: "Yes. We have a dedicated approvals team that handles BBMP plan sanctions, site inspections, and completion certificates. We coordinate end-to-end so you don't have to step into a government office. Approval fees are typically client-borne but we manage the entire filing and follow-up process.",
    },
    {
        q: "How do I know the right materials are being used on my site?",
        a: "We exclusively use Grade-A brands — UltraTech or Ultratech-premium cement, JSW or TATA steel, Jaquar sanitary fittings, and Berger or Asian Paints. Every material delivery is logged and photographed. Your daily WhatsApp report from your dedicated PM includes material receipts and progress photos, so you have complete traceability.",
    },
    {
        q: "Can I visit the construction site during the project?",
        a: "Absolutely — this is your home. Site visits are encouraged at any time. We also conduct formal milestone review meetings at key construction stages (foundation, slab, plastering, handover) where you inspect and sign off the work before we proceed to the next phase.",
    },
    {
        q: "Do you build Vastu-compliant homes?",
        a: "Yes. All our residential projects are designed in consultation with Vastu guidelines. Our architects incorporate Vastu principles for plot orientation, room placement, door and window positioning, and kitchen/puja room locations. If you have a specific Vastu consultant you work with, we are happy to coordinate with them directly.",
    },
    {
        q: "What is covered under your post-handover warranty?",
        a: "We provide a structural warranty and waterproofing warranty as specified in your project agreement. Electrical and plumbing workmanship defects are also covered. Our dedicated after-sales team responds to warranty claims within 48 hours. Warranty does not cover cosmetic wear, misuse, or modifications made after handover.",
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="bg-slate-50 py-24 md:py-32">
            {/* JSON-LD FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map((faq) => ({
                            "@type": "Question",
                            "name": faq.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.a,
                            },
                        })),
                    }),
                }}
            />

            <div className="container mx-auto px-4 md:px-8">
                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue mb-6 tracking-tight leading-tight">
                        Questions Every Smart <span className="text-brand-gold">Home Builder</span> Asks.
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
                        Transparency starts with honest answers. Here's everything you should know before signing with any construction company.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-white rounded-[1.5rem] border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => toggle(idx)}
                                className="w-full flex items-center justify-between p-7 md:p-8 text-left group"
                                aria-expanded={openIndex === idx}
                            >
                                <span
                                    className={`font-extrabold text-base md:text-lg leading-snug tracking-tight pr-4 transition-colors ${
                                        openIndex === idx ? "text-brand-gold" : "text-brand-blue group-hover:text-brand-gold"
                                    }`}
                                >
                                    {faq.q}
                                </span>
                                <div
                                    className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                                        openIndex === idx
                                            ? "bg-brand-gold text-white"
                                            : "bg-slate-100 text-slate-500 group-hover:bg-brand-gold/10 group-hover:text-brand-gold"
                                    }`}
                                >
                                    {openIndex === idx ? (
                                        <Minus className="w-4 h-4" />
                                    ) : (
                                        <Plus className="w-4 h-4" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === idx && (
                                    <motion.div
                                        key="answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-7 md:px-8 pb-8 text-slate-600 leading-relaxed font-medium text-base">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-slate-600 font-medium mb-6 text-base">
                        Still have questions? Our project engineers are available Mon–Sat, 9 AM – 7 PM.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center bg-brand-blue text-white font-bold px-10 h-14 rounded-2xl hover:bg-brand-blue/90 transition-all shadow-lg text-base"
                        >
                            Speak to an Engineer
                        </Link>
                        <a
                            href="https://wa.me/919591641954?text=Hi%2C%20I%20have%20a%20question%20about%20construction%20services"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-[#25D366] text-white font-bold px-10 h-14 rounded-2xl hover:bg-[#20BE5C] transition-all shadow-lg text-base"
                        >
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
