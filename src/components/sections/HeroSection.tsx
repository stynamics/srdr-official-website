"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  CheckCircle, 
  ArrowRight, 
  Home, 
  Building2, 
  Paintbrush, 
  Armchair,
  Star,
  Zap,
  ChevronRight,
  Info
} from "lucide-react";

const PRICING: Record<string, Record<string, number>> = {
  residential: { basic: 1950, standard: 2250, premium: 2650 },
  commercial: { basic: 2150, standard: 2500, premium: 2950 },
  renovation: { basic: 850, standard: 1150, premium: 1550 },
  interiors: { basic: 900, standard: 1350, premium: 1850 }
};

export function HeroSection() {
  const [service, setService] = useState("residential");
  const [sqft, setSqft] = useState<string>("1200");
  const [quality, setQuality] = useState("standard");
  const [estimate, setEstimate] = useState<number>(0);

  useEffect(() => {
    const rate = PRICING[service]?.[quality] || 0;
    const area = parseFloat(sqft) || 0;
    setEstimate(rate * area);
  }, [service, sqft, quality]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const formatCurrency = (val: number) => {
    if (val === 0) return "₹0";
    
    // Indian Numbering System (Lakhs/Crores)
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    } else if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakhs`;
    }
    
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="relative min-h-[100vh] flex items-center pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-900">
      {/* Jaali Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-jaali pointer-events-none opacity-10" />
      
      {/* Background Image Optimized */}
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
        alt="Premium Construction across Bangalore"
        fill
        priority
        className="object-cover object-center absolute inset-0 z-0 opacity-30"
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-0" />

      {/* Animated Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Copy & Actions */}
          <motion.div 
            className="lg:col-span-6 flex flex-col gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6">
                <motion.div variants={itemVariants} className="inline-flex items-center gap-3 bg-brand-gold/10 backdrop-blur-md text-brand-gold border border-brand-gold/30 px-6 py-2.5 rounded-full w-fit">
                    <Zap className="w-4 h-4 fill-brand-gold" />
                    <span className="text-xs font-bold tracking-[0.2em] uppercase">Vastu-Compliant • Premium Construction</span>
                </motion.div>
                
                <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tighter">
                    Bangalore's <br />
                    <span className="text-brand-gold italic underline decoration-brand-gold/20">Heritage</span> Civil <br />
                    Engineers.
                </motion.h1>
                
                <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-300 max-w-xl leading-relaxed">
                    Corporate discipline meets traditional craftsmanship. From <span className="text-white font-bold italic">BHK Layouts</span> to <span className="text-white font-bold italic">Teakwood Finishes</span>, we build homes for generations.
                </motion.p>
            </div>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
              <Link href="/get-a-quote">
                <Button className="bg-brand-gold hover:bg-white hover:text-brand-blue text-brand-blue font-black h-16 px-12 text-lg rounded-2xl shadow-2xl transition-all">
                  Get Instant Estimate
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="ghost" className="text-white hover:bg-white/10 h-16 px-8 text-lg font-bold flex items-center gap-2">
                   View Masterpieces <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
                    <p className="text-brand-gold font-black text-2xl">500+</p>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Projects Handed Over</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
                    <p className="text-brand-gold font-black text-2xl">100%</p>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Vastu Compliance</p>
                </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Royal Heritage Estimator */}
          <motion.div 
            className="lg:col-span-6 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative group">
                <div className="absolute -inset-1 bg-brand-gold/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                
                <Card className="relative bg-[#FDFCF8] border-none shadow-2xl rounded-[2.5rem] overflow-hidden text-slate-900">
                    {/* Header info bar */}
                    <div className="bg-slate-950 text-white px-8 py-3 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold">Corporate Construction Discipline</span>
                        <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-bold uppercase">Pricing: April 2026 Updated</span>
                        </div>
                    </div>

                    <div className="p-8 lg:p-10 space-y-8">
                        <div>
                            <h3 className="text-3xl font-black tracking-tight mb-1 text-slate-900">Cost Estimator</h3>
                            <p className="text-slate-500 font-medium">Get a realistic budget for your dream home.</p>
                        </div>

                        {/* Step 1: Selection */}
                        <div className="space-y-4">
                            <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Project Type</Label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                {[
                                    { id: "residential", label: "Villa", icon: Home },
                                    { id: "commercial", label: "Office", icon: Building2 },
                                    { id: "renovation", label: "Remodel", icon: Paintbrush },
                                    { id: "interiors", label: "Interiors", icon: Armchair },
                                ].map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => setService(opt.id)}
                                        className={`flex flex-col items-center p-4 rounded-2xl border transition-all gap-2 ${
                                            service === opt.id 
                                            ? "bg-brand-gold border-brand-gold text-white shadow-xl scale-105" 
                                            : "bg-slate-50 border-slate-100 text-slate-400 hover:bg-slate-100"
                                        }`}
                                    >
                                        <opt.icon className="w-6 h-6" />
                                        <span className="text-[10px] font-black uppercase tracking-wider">{opt.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Step 2: Size */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Total Built-up Area</Label>
                                <div className="flex gap-2">
                                    <button onClick={() => setSqft("1200")} className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-[10px] font-bold transition-colors">30x40 (G+2)</button>
                                    <button onClick={() => setSqft("2400")} className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-[10px] font-bold transition-colors">40x60 (G+3)</button>
                                </div>
                            </div>
                            <div className="relative">
                                <Input 
                                    type="number" 
                                    value={sqft}
                                    onChange={(e) => setSqft(e.target.value)}
                                    placeholder="e.g. 1800" 
                                    className="h-16 bg-slate-50 border-slate-100 text-3xl font-black px-6 rounded-2xl focus-visible:ring-brand-gold transition-all text-slate-900" 
                                />
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 font-black text-slate-300">Sq. Ft.</span>
                            </div>
                        </div>

                        {/* Step 3: Grade selection cards */}
                        <div className="space-y-4">
                            <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Construction Grade</Label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                {[
                                    { id: "basic", label: "Classic", desc: "Solid Quality" },
                                    { id: "standard", label: "Royal", desc: "Italian Marble" },
                                    { id: "premium", label: "Imperial", desc: "Teak & Automation" },
                                ].map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => setQuality(opt.id)}
                                        className={`relative p-4 rounded-2xl border text-left transition-all ${
                                            quality === opt.id 
                                            ? "bg-slate-950 text-white border-slate-950 shadow-2xl scale-[1.02] z-10" 
                                            : "bg-slate-50 border-slate-100 text-slate-500 hover:bg-slate-100"
                                        }`}
                                    >
                                        <div className="font-black text-xs uppercase tracking-tight mb-1">{opt.label}</div>
                                        <div className={`text-[10px] font-bold ${quality === opt.id ? "text-slate-400" : "text-slate-400"}`}>{opt.desc}</div>
                                        {quality === opt.id && (
                                            <div className="absolute top-2 right-2">
                                                <CheckCircle className="w-4 h-4 text-brand-gold" />
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Result Display */}
                        <div className="pt-8 border-t border-slate-100">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-1 block">Indicative Budget</span>
                                    <motion.div 
                                        key={estimate}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter"
                                    >
                                        {formatCurrency(estimate)}
                                    </motion.div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase mt-2 tracking-widest flex items-center gap-2">
                                        <Zap className="w-3 h-3 text-brand-gold fill-brand-gold" /> Includes GS-T & Approvals Estimate
                                    </p>
                                </div>
                                <Link href="/get-a-quote" className="w-full md:w-auto">
                                    <Button className="w-full bg-brand-gold hover:bg-slate-950 text-white font-black h-16 px-8 rounded-2xl shadow-xl transition-all flex items-center gap-3">
                                        Get Detailed Quote <ChevronRight className="w-6 h-6 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
