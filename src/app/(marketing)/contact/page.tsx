"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API
        await new Promise(r => setTimeout(r, 1000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <section className="bg-brand-blue pt-32 pb-24 text-center">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight"
                    >
                        Let's Talk About Your Project
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-300"
                    >
                        Our expert team is ready to provide you with absolute clarity, guidance, and transparent estimates.
                    </motion.p>
                </div>
            </section>

            <section className="py-16 -mt-10 relative z-10">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        
                        {/* Direct Contact Methods */}
                        <div className="lg:col-span-4 space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center"
                            >
                                <div className="w-14 h-14 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mb-6">
                                    <Phone size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-brand-blue mb-2">Call Us Directly</h3>
                                <p className="text-slate-500 mb-6">Available Mon-Sat, 9 AM - 6 PM.</p>
                                <a href="tel:+919876543210" className="w-full">
                                    <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold h-12 rounded-xl text-md">
                                        +91 98765 43210
                                    </Button>
                                </a>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col items-center text-center"
                            >
                                <div className="w-14 h-14 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                                </div>
                                <h3 className="text-xl font-bold text-brand-blue mb-2">Instant Chat</h3>
                                <p className="text-slate-500 mb-6">Skip the queues. Message us.</p>
                                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-full">
                                    <Button className="w-full bg-[#25D366] hover:bg-[#20BE5C] text-white font-bold h-12 rounded-xl text-md">
                                        WhatsApp Us
                                    </Button>
                                </a>
                            </motion.div>
                        </div>

                        {/* Lead Form */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="lg:col-span-8 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100"
                        >
                            {!isSuccess ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label className="text-brand-blue font-bold">Full Name *</Label>
                                            <Input required placeholder="John Doe" className="h-14 rounded-xl border-slate-300" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-brand-blue font-bold">Phone Number *</Label>
                                            <Input required type="tel" placeholder="+91 98765 43210" className="h-14 rounded-xl border-slate-300" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-brand-blue font-bold">Email Address</Label>
                                        <Input type="email" placeholder="you@example.com" className="h-14 rounded-xl border-slate-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-brand-blue font-bold">Project Requirement *</Label>
                                        <textarea 
                                            required 
                                            className="w-full h-32 px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-gold outline-none resize-none"
                                            placeholder="Tell us what you are looking to build..."
                                        />
                                    </div>
                                    <Button 
                                        type="submit" 
                                        disabled={isSubmitting} 
                                        className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white font-bold h-16 rounded-xl text-lg mt-4 shadow-lg transition-transform hover:scale-105"
                                    >
                                        {isSubmitting ? "Sending..." : <><Send className="w-5 h-5 mr-2" /> Send Message</>}
                                    </Button>
                                </form>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center py-16 text-center">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-brand-blue mb-4">Message Sent Successfully!</h3>
                                    <p className="text-slate-600 text-lg">Thank you for reaching out. One of our project experts will contact you shortly to discuss your requirements.</p>
                                </div>
                            )}
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Maps & Office Info */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="bg-brand-blue rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
                        <div className="md:w-1/2 p-12 md:p-20 text-white flex flex-col justify-center relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-3xl rounded-full" />
                            <h2 className="text-3xl font-bold mb-8 relative z-10">Visit Our Corporate Office</h2>
                            
                            <div className="space-y-8 relative z-10">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-brand-gold w-8 h-8 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">Headquarters</h4>
                                        <p className="text-slate-300 leading-relaxed text-lg">
                                            #45, Prime Business Parkway,<br/>
                                            Whitefield, Bangalore - 560066<br/>
                                            Karnataka, India
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="text-brand-gold w-8 h-8 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-xl mb-1">Email Connect</h4>
                                        <p className="text-slate-300 text-lg">build@srdreamspace.com</p>
                                        <p className="text-slate-300 text-lg">support@srdreamspace.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 min-h-[400px]">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124415.5348301777|77.580643!2d77.580643!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1713180000000!5m2!1sen!2sin" 
                                className="w-full h-full border-0" 
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
