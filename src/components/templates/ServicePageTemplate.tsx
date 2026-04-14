"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertOctagon, Hammer, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export type ServiceData = {
  title: string;
  subtitle: string;
  heroImage: string;
  painPoints: { title: string; desc: string }[];
  solution: { title: string; desc: string };
  processSteps: { step: string; title: string; desc: string }[];
  materials: { item: string; desc: string }[];
  faqs: { q: string; a: string }[];
};

export function ServicePageTemplate({ data }: { data: ServiceData }) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${data.heroImage}')` }}
        />
        <div className="absolute inset-0 z-0 bg-brand-blue/80 mix-blend-multiply" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            {data.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-slate-200 mb-10"
          >
            {data.subtitle}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/get-a-quote">
              <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white font-bold h-14 px-10 text-lg rounded-full shadow-xl transition-transform hover:scale-105">
                Get Your Free Quote
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* The Problem */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <AlertOctagon className="text-red-500 w-8 h-8" />
                <h2 className="text-3xl font-bold text-brand-blue">The Common Frustrations</h2>
              </div>
              <div className="space-y-6">
                {data.painPoints.map((point, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
                  >
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{point.title}</h3>
                    <p className="text-slate-600">{point.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* The Solution */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-blue text-white p-10 md:p-12 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-3xl rounded-full" />
              <ShieldCheck className="text-brand-gold w-12 h-12 mb-6 relative z-10" />
              <h2 className="text-3xl font-bold mb-6 relative z-10">{data.solution.title}</h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8 relative z-10">
                {data.solution.desc}
              </p>
              <Link href="/get-a-quote" className="inline-flex items-center text-brand-gold font-bold hover:text-white transition-colors relative z-10">
                Start Your Project Properly <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Breakdown / Process */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-6">Our Structured Process</h2>
            <p className="text-lg text-slate-600">We leave zero room for error. Here is exactly how we execute your project.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <div className="text-8xl font-black text-slate-50 absolute -top-10 -left-4 z-0 pointer-events-none select-none">
                  {step.step}
                </div>
                <div className="relative z-10">
                    <h3 className="text-xl font-bold text-brand-blue mb-4">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Quality Standards */}
      <section className="py-24 bg-brand-blue text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Uncompromising <span className="text-brand-gold">Quality</span>.</h2>
              <p className="text-lg text-slate-300 mb-8">
                A structure is only as good as the sum of its parts. We never cut corners and only use industry-certified Grade-A materials.
              </p>
              <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white font-bold rounded-xl h-12 px-6">
                Download Quality Specs PDF
              </Button>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {data.materials.map((mat, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Hammer className="text-brand-gold w-6 h-6" />
                    <h4 className="text-xl font-bold">{mat.item}</h4>
                  </div>
                  <p className="text-slate-400 text-sm">{mat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know about this service.</p>
          </div>

          <Accordion className="w-full bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            {data.faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b-slate-100 last:border-0 px-2 lg:px-4">
                <AccordionTrigger className="text-lg font-bold text-brand-blue hover:text-brand-gold text-left py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-brand-blue rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden max-w-6xl mx-auto shadow-2xl shadow-brand-blue/20">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-brand-gold/20 via-transparent to-transparent pointer-events-none" />
            
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 relative z-10 tracking-tight">Ready to build your dream?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link href="/get-a-quote">
                <Button className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold/90 text-white font-bold h-16 px-10 text-lg rounded-full shadow-lg transition-transform hover:scale-105">
                  Get a Free Quote Now
                </Button>
              </Link>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full sm:w-auto bg-white/5 border-white/20 text-white hover:bg-white text-brand-blue font-bold h-16 px-10 text-lg rounded-full backdrop-blur-sm transition-all hover:scale-105">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
