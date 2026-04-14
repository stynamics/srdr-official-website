"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Building, ShieldCheck, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export type LocationData = {
  name: string;
  slug: string;
  heroImage: string;
  tagline: string;
  insight: { headline: string; text: string; bulletPoints: string[] };
  faqs: { q: string; a: string }[];
};

export function LocationPageTemplate({ data }: { data: LocationData }) {
  return (
    <div className="bg-white">
      {/* Localized Hero */}
      <section className="relative min-h-[65vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${data.heroImage}')` }}
        />
        <div className="absolute inset-0 z-0 bg-brand-blue/85 mix-blend-multiply" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-brand-gold/15 text-brand-gold border border-brand-gold/30 px-5 py-2 rounded-full mb-6"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-bold tracking-wide uppercase">Serving {data.name} & Surrounding Areas</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            Premium Construction Company in <br/>
            <span className="text-brand-gold underline decoration-brand-gold/40">{data.name}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto"
          >
            {data.tagline}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/get-a-quote">
              <Button className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold/90 text-white font-bold h-14 px-8 text-lg rounded-full shadow-xl transition-transform hover:scale-105">
                Calculate Cost in {data.name}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Local Insights & Expertise */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-6 leading-tight">
                {data.insight.headline}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {data.insight.text}
              </p>
              
              <div className="space-y-4">
                {data.insight.bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="bg-brand-blue/10 p-2 rounded-full text-brand-blue">
                        <HardHat className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:w-1/2 bg-brand-blue text-white p-10 md:p-14 rounded-[2rem] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-3xl rounded-full pointer-events-none" />
              <ShieldCheck className="text-brand-gold w-14 h-14 mb-8 relative z-10" />
              <h3 className="text-3xl font-bold mb-6 relative z-10">We Guarantee Execution Without Excuses.</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-10 relative z-10">
                Building in Bangalore comes with unique local challenges—from BBMP approvals to narrow access roads and soil testing. We handle everything internally so your project never stalls.
              </p>
              <Link href="/get-a-quote" className="inline-flex items-center text-brand-gold font-bold hover:text-white transition-colors relative z-10 text-lg">
                Book a Free Site Visit in {data.name} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Interlink */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-6">Our Services in {data.name}</h2>
          <p className="text-lg text-slate-600 mb-12">Whether you need a complete ground-up build or a luxury interior flip, we have dedicated teams stationed near you.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {["Residential Construction", "Commercial Development", "Turnkey Interiors"].map((svc, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:border-brand-gold/30 transition-all group">
                    <Building className="w-10 h-10 text-brand-gold mb-4 mx-auto group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold text-slate-800 text-lg">{svc}</h4>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localized FAQs */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Common questions from homeowners in {data.name}.</p>
          </div>

          <Accordion className="w-full">
            {data.faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`local-faq-${idx}`} className="border-b-slate-200">
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
    </div>
  );
}
