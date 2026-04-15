"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const WHATSAPP_NUMBER = "919591641954";

export default function ContactPageClient() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const phone = formData.get("phone") as string;
        const email = formData.get("email") as string;
        const requirements = formData.get("requirements") as string;

        // Build WhatsApp message with all lead data
        const message = [
            `🏗️ *New Lead from SR DreamSpace Realty Website*`,
            ``,
            `👤 *Name:* ${name}`,
            `📞 *Phone:* ${phone}`,
            email ? `📧 *Email:* ${email}` : "",
            ``,
            `📋 *Requirements:*`,
            requirements,
        ].filter(Boolean).join("\n");

        // Open WhatsApp with pre-filled message
        window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
            "_blank"
        );

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <section className="bg-brand-blue pt-40 pb-32 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-5xl">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight"
                    >
                        Let's Engineer Your <span className="text-brand-gold">Vision</span>.
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium"
                    >
                        Skip the guesswork. Speak directly with our project experts for a transparent, fixed-price construction roadmap.
                    </motion.p>
                </div>
            </section>

            <section className="py-20 -mt-20 relative z-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 max-w-7xl mx-auto">
                        
                        {/* Direct Contact Methods */}
                        <div className="lg:col-span-4 space-y-8">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-brand-blue/5 border border-slate-100 flex flex-col items-center text-center"
                            >
                                <div className="w-20 h-20 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mb-8">
                                    <Phone size={36} />
                                </div>
                                <h3 className="text-xl font-extrabold text-brand-blue mb-3 tracking-tight">Direct Consulting</h3>
                                <p className="text-slate-600 text-base mb-6 font-medium leading-relaxed">Speak with a project engineer for immediate structural advice.</p>
                                <a href="tel:+919591641954" className="w-full">
                                    <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold h-14 rounded-2xl text-lg shadow-lg transition-transform hover:scale-105">
                                        +91 95916 41954
                                    </Button>
                                </a>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-brand-blue/5 border border-slate-100 flex flex-col items-center text-center"
                            >
                                <div className="w-20 h-20 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mb-8">
                                    <MessageSquareText size={36} />
                                </div>
                                <h3 className="text-xl font-extrabold text-brand-blue mb-3 tracking-tight">WhatsApp Express</h3>
                                <p className="text-slate-600 text-base mb-6 font-medium leading-relaxed">Send us your plot dimensions or plans for a quick callback.</p>
                                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="w-full">
                                    <Button className="w-full bg-[#25D366] hover:bg-[#20BE5C] text-white font-bold h-14 rounded-2xl text-lg shadow-lg transition-transform hover:scale-105">
                                        WhatsApp Now
                                    </Button>
                                </a>
                            </motion.div>
                        </div>

                        {/* Lead Form */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="lg:col-span-8 bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-brand-blue/10 border border-slate-100"
                        >
                            {!isSuccess ? (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <Label className="text-brand-blue font-bold text-base">Full Name *</Label>
                                            <Input name="name" required placeholder="Your business or personal name" className="h-14 rounded-2xl border-slate-200 text-base font-medium bg-slate-50 focus:bg-white transition-all" />
                                        </div>
                                        <div className="space-y-3">
                                            <Label className="text-brand-blue font-bold text-base">Phone Number *</Label>
                                            <Input name="phone" required type="tel" placeholder="+91 9XXXXXXXXX" className="h-14 rounded-2xl border-slate-200 text-base font-medium bg-slate-50 focus:bg-white transition-all" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <Label className="text-brand-blue font-bold text-base">Email Address</Label>
                                        <Input name="email" type="email" placeholder="you@example.com" className="h-14 rounded-2xl border-slate-200 text-base font-medium bg-slate-50 focus:bg-white transition-all" />
                                    </div>
                                    <div className="space-y-3">
                                        <Label className="text-brand-blue font-bold text-base">Detailed Requirements *</Label>
                                        <textarea 
                                            name="requirements"
                                            required 
                                            className="w-full h-32 px-5 py-4 rounded-2xl border border-slate-200 text-base font-medium bg-slate-50 focus:bg-white transition-all focus:ring-4 focus:ring-brand-gold/10 outline-none resize-none"
                                            placeholder="Tell us about the project location, plot size, and any specific challenges..."
                                        />
                                    </div>
                                    <Button 
                                        type="submit" 
                                        disabled={isSubmitting} 
                                        className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white font-bold h-16 rounded-2xl text-lg mt-4 shadow-xl transition-transform hover:scale-[1.02]"
                                    >
                                        {isSubmitting ? "Dispatching..." : <><Send className="w-5 h-5 mr-3" /> Request Professional Estimate</>}
                                    </Button>
                                    <p className="text-center text-slate-500 font-bold text-sm uppercase tracking-widest mt-6">
                                       <CheckCircle2 className="w-5 h-5 inline mr-1 text-green-500" /> Guaranteed response within 4 working hours
                                    </p>
                                </form>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center py-24 text-center">
                                    <div className="w-24 h-24 bg-green-50 text-green-600 rounded-3xl flex items-center justify-center mb-10 shadow-lg">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <h3 className="text-3xl font-extrabold text-brand-blue mb-4 tracking-tight">Transmission Received!</h3>
                                    <p className="text-slate-700 text-lg leading-relaxed font-medium">Thank you for your trust. A senior project manager has been notified and will reach out with initial insights shortly.</p>
                                    <Button onClick={() => setIsSuccess(false)} variant="ghost" className="mt-10 text-brand-blue font-bold text-base hover:underline underline-offset-8">
                                        Send Another Inquiry
                                    </Button>
                                </div>
                            )}
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Corporate HQ Info */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="bg-brand-blue rounded-[3.5rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_50px_100px_-20px_rgba(10,25,47,0.3)]">
                        <div className="lg:w-1/2 p-12 md:p-24 text-white flex flex-col justify-center relative">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/10 blur-[100px] rounded-full opacity-40" />
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 relative z-10 tracking-tight leading-tight">Visit Our Corporate Hub</h2>
                            
                            <div className="space-y-12 relative z-10">
                                <div className="flex items-start gap-6">
                                    <MapPin className="text-brand-gold w-10 h-10 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-extrabold text-xl mb-2 tracking-tight">Bangalore Headquarters</h4>
                                        <p className="text-slate-300 leading-relaxed text-lg font-medium">
                                            #45, Prime Business Parkway,<br/>
                                            Whitefield, Bangalore - 560066<br/>
                                            Karnataka, India
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <Mail className="text-brand-gold w-10 h-10 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-extrabold text-xl mb-2 tracking-tight">Expert Consulting</h4>
                                        <p className="text-slate-300 text-lg font-medium">build@srdreamspacerealty.com</p>
                                        <p className="text-brand-gold text-lg font-bold mt-2">Open: Mon-Sat | 9 AM - 7 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 min-h-[500px] bg-slate-200">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124415.5348301777|77.580643!2d77.580643!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1713180000000!5m2!1sen!2sin" 
                                className="w-full h-full border-0 grayscale invert contrast-[1.2] opacity-80" 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
