"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, ArrowRight, HardHat, Home, SearchCheck } from "lucide-react";

export function HeroSection() {
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

  return (
    <section className="relative min-h-[90vh] flex items-center pt-16 pb-12 lg:pt-24 lg:pb-24 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-blue/95 via-brand-blue/80 to-brand-blue/40" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-4 py-1.5 rounded-full w-fit mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-sm font-semibold tracking-wide uppercase">Premium Builders in Bangalore</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl lg:leading-[1.1] font-extrabold text-white tracking-tight">
              Build Your Dream Home in Bangalore — Without <span className="text-brand-gold">Delays</span>, <span className="text-brand-gold">Hidden Costs</span>, or <span className="text-brand-gold">Stress</span>.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Transparent pricing, committed timelines, and expert project management from planning to handover. We build peace of mind.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
              <Link href="#estimator" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold/90 text-white font-bold h-14 px-8 text-[15px] sm:text-lg rounded-full shadow-lg transition-transform hover:scale-105">
                  Calculate Construction Cost <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/get-a-quote" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto bg-white/5 border-white/20 text-white hover:bg-white hover:text-brand-blue flex items-center justify-center font-bold h-14 px-8 text-[15px] sm:text-lg rounded-full backdrop-blur-sm transition-all">
                  Get Free Quote
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 sm:gap-8 mt-8 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
              <div className="flex items-center gap-3">
                <HardHat className="text-brand-gold w-8 h-8" />
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold text-white">10+ Years</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">Experience</span>
                </div>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-3">
                <Home className="text-brand-gold w-8 h-8" />
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold text-white">100+</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">Projects Completed</span>
                </div>
              </div>
              <div className="w-px h-10 bg-white/10 hidden md:block" />
              <div className="flex items-center gap-3">
                <SearchCheck className="text-brand-gold w-8 h-8" />
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold text-white">100%</span>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider">Fixed Pricing</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Estimator Card */}
          <motion.div 
            id="estimator"
            className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/95 backdrop-blur-xl border-none shadow-2xl rounded-3xl">
              <div className="bg-slate-50 border-b border-slate-100 p-6 rounded-t-3xl">
                <CardTitle className="text-xl sm:text-2xl font-extrabold text-brand-blue flex items-center gap-2">
                  Instant Cost Estimator
                </CardTitle>
                <p className="text-sm text-slate-500 mt-2">Get a rough estimate for your project in 30 seconds.</p>
              </div>
              <CardContent className="p-6 md:p-8 space-y-6">
                {/* Step 1 */}
                <div className="space-y-2">
                  <Label className="text-slate-700 font-semibold text-sm">1. Type of Service</Label>
                  <Select>
                    <SelectTrigger className="h-12 border-slate-200">
                      <SelectValue placeholder="Select Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Construction</SelectItem>
                      <SelectItem value="commercial">Commercial Construction</SelectItem>
                      <SelectItem value="renovation">Renovation</SelectItem>
                      <SelectItem value="interior">Interior Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Step 2 */}
                <div className="space-y-2">
                  <Label className="text-slate-700 font-semibold text-sm">2. Plot Size (Sq. Ft.)</Label>
                  <Input type="number" placeholder="e.g. 1200" className="h-12 border-slate-200" />
                </div>

                {/* Step 3 */}
                <div className="space-y-2">
                  <Label className="text-slate-700 font-semibold text-sm">3. Construction Quality</Label>
                  <Select>
                    <SelectTrigger className="h-12 border-slate-200">
                      <SelectValue placeholder="Select Quality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Standard Build (Value focused)</SelectItem>
                      <SelectItem value="standard">Premium Build (High-quality finish)</SelectItem>
                      <SelectItem value="premium">Ultra Luxury (Top-tier imported materials)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* CTA */}
                <Link href="/get-a-quote" className="block pt-2">
                  <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold h-14 text-sm sm:text-lg rounded-xl shadow-md transition-all">
                    Show My Estimate
                  </Button>
                </Link>
                <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
                  <CheckCircle className="w-3 h-3" /> No hidden obligations
                </p>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
