"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, AlertOctagon, Hammer, ShieldCheck, HeartPulse, Star } from "lucide-react";
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

const WHATSAPP_NUMBER = "919876543210";

export function ServicePageTemplate({ data }: { data: ServiceData }) {
  return (
    <div className="bg-white pb-24 md:pb-0 relative">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center pt-24 pb-20 overflow-hidden">
        <Image
          src={data.heroImage}
          alt={data.title}
          fill
          priority
          className="object-cover object-center absolute inset-0 z-0"
        />
        <div className="absolute inset-0 z-0 bg-brand-blue/80 mix-blend-multiply" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-5xl pt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]"
          >
            {data.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl text-slate-200 mb-12 leading-relaxed font-medium"
          >
            {data.subtitle}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-3 mb-2 bg-white/10 px-6 py-3 rounded-full backdrop-blur-md border border-white/20">
               <div className="flex -space-x-1">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-brand-gold fill-brand-gold" />)}
               </div>
               <span className="text-white text-md font-bold ml-2">Rated 4.9/5 by 100+ Families in Bangalore</span>
            </div>
            
            <Link href="/get-a-quote">
              <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white font-bold h-16 px-12 text-xl rounded-full shadow-2xl transition-transform hover:scale-105">
                Calculate Custom Quote
              </Button>
            </Link>
            
            <p className="text-slate-300 text-md mt-4 flex items-center justify-center gap-4 font-bold tracking-wide uppercase">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Free Site Consultation</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> 100% Fixed Pricing</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* The Problem */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <AlertOctagon className="text-red-500 w-10 h-10" />
                <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue tracking-tight">The Reality Gap</h2>
              </div>
              <div className="space-y-8">
                {data.painPoints.map((point, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-8 rounded-[2rem] shadow-xl shadow-brand-blue/5 border border-slate-100"
                  >
                    <h3 className="text-2xl font-bold text-brand-blue mb-3 tracking-tight">{point.title}</h3>
                    <p className="text-lg text-slate-700 leading-relaxed font-medium">{point.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* The Solution */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-blue text-white p-12 md:p-16 rounded-[3rem] relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/20 blur-[100px] rounded-full opacity-50" />
              <ShieldCheck className="text-brand-gold w-16 h-16 mb-8 relative z-10" />
              <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10 tracking-tight leading-tight">{data.solution.title}</h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-10 relative z-10 font-medium">
                {data.solution.desc}
              </p>
              <Link href="/get-a-quote" className="inline-flex items-center text-brand-gold font-bold hover:text-white transition-colors relative z-10 text-xl uppercase tracking-widest text-[14px]">
                Book a Free Consultation <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Breakdown / Process */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold text-brand-blue mb-8 tracking-tight">Professional Proof-Points</h2>
            <p className="text-xl text-slate-700 leading-relaxed font-medium">We don't leave your dream to chance. Our structured methodology ensures absolute accountability at every stage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {data.processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 rounded-[2rem] bg-slate-50 border border-slate-100"
              >
                <div className="text-9xl font-black text-brand-gold/5 absolute -top-12 -left-4 z-0 pointer-events-none select-none">
                  {step.step}
                </div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-brand-blue mb-4 tracking-tight">{step.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Quality Standards */}
      <section className="py-24 md:py-32 bg-brand-blue text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-2/5">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight">Grade-A <span className="text-brand-gold">Materials</span>. Guaranteed.</h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed font-medium">
                We exclusively use industry-leading brands. No substitutions, no local alternatives, and certainly no cutting corners on structural safety.
              </p>
              <Button variant="outline" className="border-white/20 hover:bg-white text-brand-blue font-bold rounded-xl h-14 px-8 text-lg">
                View Quality Audit Sheet
              </Button>
            </div>
            
            <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {data.materials.map((mat, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-xl hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <Hammer className="text-brand-gold w-8 h-8" />
                    <h4 className="text-2xl font-bold tracking-tight">{mat.item}</h4>
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed font-medium">{mat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold text-brand-blue mb-8 tracking-tight">Deep Dive: FAQs</h2>
            <p className="text-xl text-slate-700 leading-relaxed font-medium">Transparency means answering the tough questions upfront.</p>
          </div>

          <Accordion className="w-full bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-brand-blue/5 border border-slate-100">
            {data.faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b-slate-100 last:border-0 px-2 lg:px-4">
                <AccordionTrigger className="text-xl md:text-2xl font-bold text-brand-blue hover:text-brand-gold text-left py-8 tracking-tight">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 text-lg md:text-xl leading-relaxed pb-8 font-medium">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="bg-brand-blue rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden max-w-6xl mx-auto shadow-[0_50px_100px_-20px_rgba(10,25,47,0.3)]">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-brand-gold/20 via-transparent to-transparent pointer-events-none" />
            
            <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-10 relative z-10 tracking-tight leading-[1.1]">Build With Absolute <span className="text-brand-gold">Certainty</span>.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10 pt-4">
              <Link href="/get-a-quote">
                <Button className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold/90 text-white font-bold h-18 px-12 text-xl rounded-full shadow-2xl transition-transform hover:scale-105">
                  Request Your Free Quote
                </Button>
              </Link>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full sm:w-auto bg-white/5 border-white/20 text-white hover:bg-white text-brand-blue font-bold h-18 px-12 text-xl rounded-full backdrop-blur-sm transition-all hover:scale-105">
                  Chat With Engineers
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mobile Sticky CTA Bar */}
      <div className="md:hidden fixed bottom-1 left-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200 p-3 rounded-2xl shadow-2xl z-50 flex items-center gap-3">
         <Link href="/get-a-quote" className="flex-1">
            <Button className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white font-bold h-12 rounded-xl shadow-sm">
              Get Quote
            </Button>
         </Link>
         <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="outline" className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue/5 font-bold h-12 rounded-xl flex items-center justify-center gap-2">
              WhatsApp
            </Button>
         </a>
      </div>
    </div>
  );
}
