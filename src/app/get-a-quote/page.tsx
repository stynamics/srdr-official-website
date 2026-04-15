"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, ChevronRight, Check } from "lucide-react";

const formSchema = z.object({
  service: z.string().min(1, "Service is required"),
  size: z.string().min(1, "Size is required"),
  quality: z.string().min(1, "Quality is required"),
  timeline: z.string().min(1, "Timeline is required"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required").optional().or(z.literal("")),
});

type FormData = z.infer<typeof formSchema>;

export default function GetAQuotePage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: "",
      size: "",
      quality: "",
      timeline: "",
      name: "",
      phone: "",
      email: "",
    },
  });

  const nextStep = () => {
    const currentValues = form.getValues();
    if (step === 1 && !currentValues.service) return;
    if (step === 2 && !currentValues.size) return;
    if (step === 3 && !currentValues.quality) return;
    if (step === 4 && !currentValues.timeline) return;
    
    setStep((prev) => Math.min(prev + 1, 5));
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const WHATSAPP_NUMBER = "919591641954";

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Build WhatsApp message with all lead data
    const message = [
      `🏗️ *New Quote Request from SR DreamSpace Realty Website*`,
      ``,
      `📋 *Service:* ${data.service}`,
      `📐 *Size:* ${data.size} Sq. Ft.`,
      `⭐ *Quality:* ${data.quality}`,
      `📅 *Timeline:* ${data.timeline}`,
      ``,
      `👤 *Name:* ${data.name}`,
      `📞 *Phone:* ${data.phone}`,
      data.email ? `📧 *Email:* ${data.email}` : "",
    ].filter(Boolean).join("\n");

    // Open WhatsApp with pre-filled message
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const progress = (step / 5) * 100;

  if (isSuccess) {
    return (
      <div className="flex-grow flex items-center justify-center p-4">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-lg w-full text-center border border-slate-100"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} />
          </div>
          <h2 className="text-3xl font-extrabold text-brand-blue mb-4 tracking-tight">Request Received!</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Thank you for reaching out. A dedicated project manager will review your exact requirements and contact you shortly with a personalized estimate.
          </p>
          <a href="https://wa.me/919591641954" target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-[#25D366] hover:bg-[#20BE5C] text-white font-bold h-14 rounded-xl text-lg shadow-md transition-all hover:scale-105">
                Connect Instantly via WhatsApp
            </Button>
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex-grow flex flex-col md:flex-row bg-white">
      {/* Left Form Area */}
      <div className="w-full md:w-3/5 lg:w-2/3 flex flex-col">
        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-slate-100">
            <motion.div 
                className="h-full bg-brand-gold relative"
                initial={{ width: `0%` }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            />
        </div>

        <div className="flex-grow flex items-center justify-center p-6 md:p-12">
            <div className="w-full max-w-xl">
                <motion.span 
                    key={step} // re-animate on step change
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-brand-gold font-bold mb-3 block tracking-wider uppercase text-sm"
                >
                    Step {step} of 5
                </motion.span>
                
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {step === 1 && (
                            <div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-8 tracking-tight">What type of service do you need?</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {["Residential Construction", "Commercial Construction", "Renovation", "Interiors"].map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => { form.setValue("service", opt); nextStep(); }}
                                            className={`p-6 rounded-2xl border-2 text-left font-bold text-lg transition-all ${
                                                form.watch("service") === opt ? "border-brand-gold bg-brand-gold/5 text-brand-blue shadow-sm" : "border-slate-200 text-slate-600 hover:border-brand-gold/50"
                                            }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-4 tracking-tight">What is the approximate size of your project?</h2>
                                <p className="text-slate-500 mb-8 text-lg">Enter the plot size or built-up area in square feet.</p>
                                <div className="space-y-6">
                                    <Input 
                                        type="number" 
                                        placeholder="e.g., 2400" 
                                        className="h-16 text-2xl font-bold px-6 rounded-2xl border-slate-300 placeholder:font-normal"
                                        {...form.register("size")}
                                    />
                                    <Button onClick={nextStep} disabled={!form.watch("size")} className="w-full h-14 bg-brand-gold text-white font-bold rounded-xl text-lg hover:bg-brand-gold/90 shadow-md">
                                        Continue <ChevronRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-8 tracking-tight">What build quality are you targeting?</h2>
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        { id: "Basic", title: "Standard Build", desc: "Reliable quality, highly durable value-focused materials." },
                                        { id: "Premium", title: "Premium Build", desc: "High-quality finishes, branded premium fittings." },
                                        { id: "Luxury", title: "Ultra Luxury", desc: "Top-tier imported materials, smart home integration." }
                                    ].map((opt) => (
                                        <button
                                            key={opt.id}
                                            onClick={() => { form.setValue("quality", opt.id); nextStep(); }}
                                            className={`p-6 rounded-2xl border-2 text-left transition-all ${
                                                form.watch("quality") === opt.id ? "border-brand-gold bg-brand-gold/5 shadow-sm" : "border-slate-200 hover:border-brand-gold/50 hover:bg-slate-50"
                                            }`}
                                        >
                                            <div className={`font-bold text-xl mb-1 ${form.watch("quality") === opt.id ? "text-brand-blue" : "text-slate-700"}`}>{opt.title}</div>
                                            <div className="text-slate-500 text-sm">{opt.desc}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-8 tracking-tight">When do you want to start?</h2>
                                <div className="grid grid-cols-1 gap-4">
                                    {["Immediately", "Within 3-6 Months", "Still in planning phase"].map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => { form.setValue("timeline", opt); nextStep(); }}
                                            className={`p-6 rounded-2xl border-2 text-left font-bold text-lg transition-all ${
                                                form.watch("timeline") === opt ? "border-brand-gold bg-brand-gold/5 text-brand-blue shadow-sm" : "border-slate-200 text-slate-600 hover:border-brand-gold/50"
                                            }`}
                                        >
                                            {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step === 5 && (
                            <div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-4 tracking-tight">You're almost there!</h2>
                                <p className="text-slate-500 mb-8 text-lg">Where should we send your customized estimate and proposal?</p>
                                
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="space-y-2">
                                        <Label className="text-slate-700 font-bold text-base">Full Name</Label>
                                        <Input {...form.register("name")} placeholder="John Doe" className="h-14 px-4 rounded-xl border-slate-300 text-lg" />
                                        {form.formState.errors.name && <span className="text-red-500 text-sm font-medium">{form.formState.errors.name.message}</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-slate-700 font-bold text-base">Phone Number *</Label>
                                        <Input {...form.register("phone")} type="tel" placeholder="+91 95916 41954" className="h-14 px-4 rounded-xl border-slate-300 text-lg" />
                                        {form.formState.errors.phone && <span className="text-red-500 text-sm font-medium">{form.formState.errors.phone.message}</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-slate-700 font-bold text-base">Email (Optional)</Label>
                                        <Input {...form.register("email")} type="email" placeholder="you@example.com" className="h-14 px-4 rounded-xl border-slate-300 text-lg" />
                                    </div>

                                    <Button 
                                        type="submit" 
                                        disabled={isSubmitting} 
                                        className="w-full h-14 bg-brand-blue hover:bg-brand-blue/90 text-white font-bold rounded-xl text-lg mt-6 shadow-xl transition-all"
                                    >
                                        {isSubmitting ? "Processing..." : "Get My Quote"}
                                    </Button>
                                </form>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>

                {step > 1 && step < 5 && (
                    <motion.button 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={prevStep} 
                        className="mt-8 text-sm text-slate-400 hover:text-brand-blue font-bold transition-colors uppercase tracking-wider"
                    >
                        ← Back to previous question
                    </motion.button>
                )}
            </div>
        </div>
      </div>

      {/* Right Trust Area (Desktop Only) */}
      <div className="hidden md:flex w-2/5 lg:w-1/3 bg-brand-blue text-white p-12 flex-col justify-center relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 max-w-sm">
            <h3 className="text-4xl font-extrabold mb-10 tracking-tight leading-tight">
                Trusted by <span className="text-brand-gold underline decoration-brand-gold/40">100+</span> Clients across Bangalore.
            </h3>
            
            <div className="space-y-8 mb-16">
                {[
                    "100% Transparent Pricing Quotes",
                    "Committed Final Handover Dates",
                    "Dedicated Full-Time Project Manager",
                ].map((point, i) => (
                    <div key={i} className="flex items-start gap-4">
                        <CheckCircle2 className="text-brand-gold w-7 h-7 shrink-0 mt-0.5" />
                        <span className="text-slate-200 text-xl font-medium">{point}</span>
                    </div>
                ))}
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
                <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <span key={s} className="text-brand-gold text-xl">★</span>)}
                </div>
                <p className="text-slate-300 text-base italic mb-6 leading-relaxed">
                    "SR DreamSpace Realty made building our home completely stress-free. The final cost perfectly matched the initial quote."
                </p>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center font-bold text-brand-gold">R</div>
                    <p className="font-bold text-white text-lg">Rajesh K., Whitefield</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
