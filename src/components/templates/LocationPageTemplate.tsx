"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Building, ShieldCheck, HardHat, Star, CheckCircle2, Home, Building2 } from "lucide-react";
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

const WHATSAPP_NUMBER = "919591641954";

export function LocationPageTemplate({ data }: { data: LocationData }) {
  return (
    <div className="bg-white pb-24 md:pb-0 relative">
      {/* Localized Hero Optimized */}
      <section className="relative min-h-[65vh] flex items-center pt-24 pb-20 overflow-hidden">
        <Image
          src={data.heroImage}
          alt={`Construction in ${data.name}`}
          fill
          priority
          className="object-cover object-center absolute inset-0 z-0"
        />
        <div className="absolute inset-0 z-0 bg-brand-blue/85 mix-blend-multiply" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-5xl pt-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 bg-brand-gold/20 text-brand-gold border border-brand-gold/30 px-6 py-2.5 rounded-full mb-8 backdrop-blur-md"
          >
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-bold tracking-widest uppercase">Serving {data.name} & Adjacent Zones</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]"
          >
            High-Performance Construction in <br className="hidden md:block" />
            <span className="text-brand-gold underline decoration-brand-gold/30">{data.name}</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            {data.tagline}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/get-a-quote">
                <Button className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold/90 text-white font-bold h-16 px-12 text-xl rounded-full shadow-2xl transition-transform hover:scale-105">
                  Check Construction Cost in {data.name}
                </Button>
              </Link>
            </div>

            {/* CRO Refinements */}
            <div className="flex flex-col items-center gap-4">
               <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full backdrop-blur-md border border-white/20">
                  <div className="flex -space-x-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-brand-gold fill-brand-gold" />)}
                  </div>
                  <span className="text-white text-md font-bold ml-2">Trusted by 100+ Families in Bangalore</span>
               </div>
               <p className="text-slate-300 text-md flex items-center gap-4 font-bold tracking-wide uppercase">
                  <span className="flex items-center gap-2 font-bold"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Free Consultation</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <span className="flex items-center gap-2 font-bold"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> No Hidden Fees</span>
               </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Insights & Expertise */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-6xl font-extrabold text-brand-blue mb-8 leading-tight tracking-tight">
                {data.insight.headline}
              </h2>
              <p className="text-xl text-slate-700 mb-10 leading-relaxed font-medium">
                {data.insight.text}
              </p>
              
              <div className="space-y-6">
                {data.insight.bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-5 bg-slate-50 p-6 rounded-[1.5rem] border border-slate-100">
                    <div className="bg-brand-blue/10 p-3 rounded-2xl text-brand-blue">
                        <HardHat className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-bold text-slate-800 leading-snug">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:w-1/2 bg-brand-blue text-white p-12 md:p-16 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(10,25,47,0.2)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/15 blur-[100px] rounded-full pointer-events-none opacity-50" />
              <ShieldCheck className="text-brand-gold w-18 h-18 mb-10 relative z-10" />
              <h3 className="text-3xl md:text-4xl font-extrabold mb-8 relative z-10 tracking-tight leading-tight">Execution Without Excuses.</h3>
              <p className="text-slate-300 text-xl md:text-2xl leading-relaxed mb-12 relative z-10 font-medium">
                Building in Bangalore comes with unique local challenges—from BBMP plan sanctions to congested logistics and specific soil requirements. We handle these internal complexities so you never face a day of delay.
              </p>
              <Link href="/get-a-quote" className="inline-flex items-center text-brand-gold font-bold hover:text-white transition-colors relative z-10 text-xl uppercase tracking-widest text-[14px]">
                Start Your Site Visit in {data.name} <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Interlink */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-extrabold text-brand-blue mb-8 tracking-tight">Our Capabilities in {data.name}</h2>
          <p className="text-xl text-slate-700 mb-16 leading-relaxed font-medium">Whether you're planning a multi-story independent home or a premium retail project, we have dedicated engineering teams stationed across this zone.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Residential Construction", icon: Home },
              { title: "Commercial Development", icon: Building2 },
              { title: "Turnkey Interiors", icon: Building }
            ].map((svc, i) => (
                <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-xl shadow-brand-blue/5 hover:border-brand-gold/40 transition-all group">
                    <svc.icon className="w-14 h-14 text-brand-gold mb-6 mx-auto group-hover:scale-110 transition-transform" />
                    <h4 className="font-extrabold text-brand-blue text-xl md:text-2xl tracking-tight">{svc.title}</h4>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localized FAQs */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-16 px-4">
            <h2 className="text-4xl md:text-6xl font-extrabold text-brand-blue mb-8 tracking-tight leading-tight">Expert Answers for {data.name}</h2>
            <p className="text-xl text-slate-700 font-medium leading-relaxed">Specific insights based on local construction norms and bylaws.</p>
          </div>

          <Accordion className="w-full bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-brand-blue/5 border border-slate-100">
            {data.faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`local-faq-${idx}`} className="border-b-slate-100 last:border-0">
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
