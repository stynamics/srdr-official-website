import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white pt-24 pb-12 border-t border-white/5 overflow-hidden">
      {/* Jaali Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-jaali opacity-[0.03] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          
          {/* Brand & Trust */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-56 h-14">
                <Image 
                    src="/logo.png" 
                    alt="SR DreamSpace Realty" 
                    fill
                    className="object-contain object-left invert brightness-200"
                />
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed text-base font-medium max-w-sm">
                Bangalore's premier engineering partner. We combine **Vastu science** with corporate project discipline to build legendary homes.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-brand-gold font-bold text-xs uppercase tracking-[0.2em]">
              <span>ISO 9001 Certified</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
              <span>A+ Grade Materials</span>
            </div>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div>
              <h4 className="text-xs font-black text-brand-gold mb-5 uppercase tracking-[0.25em]">Primary Hubs</h4>
              <ul className="flex flex-col gap-4 text-slate-300 text-sm font-bold">
                <li><Link href="/locations/whitefield" className="hover:text-brand-gold transition-colors">Whitefield (IT Corridor)</Link></li>
                <li><Link href="/locations/k-r-puram" className="hover:text-brand-gold transition-colors">K R Puram (East-Zone)</Link></li>
                <li><Link href="/locations/electronic-city" className="hover:text-brand-gold transition-colors">Electronic City</Link></li>
                <li><Link href="/locations/hsr-layout" className="hover:text-brand-gold transition-colors">HSR Layout (Premium)</Link></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-10">
            <div>
              <h4 className="text-xs font-black text-brand-gold mb-5 uppercase tracking-[0.25em]">Quick Links</h4>
              <ul className="flex flex-col gap-4 text-slate-400 text-sm font-bold">
                <li><Link href="/about" className="hover:text-white transition-colors">Our Legacy</Link></li>
                <li><Link href="/services/residential-construction" className="hover:text-white transition-colors">Construction</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-colors">Masterpieces</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Reach Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <h4 className="text-xs font-black text-brand-gold mb-3 uppercase tracking-[0.25em]">H.Q. Bangalore</h4>
            <ul className="flex flex-col gap-5 text-slate-300 text-sm font-bold">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                <span className="leading-relaxed">12, SRT Square, 2nd Floor,<br />Whitefield Main Road, Bangalore 560066</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="tel:+919591641954" className="hover:text-brand-gold transition-colors font-black text-base">+91 95916 41954</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="mailto:info@srdreamspacerealty.com" className="hover:text-brand-gold transition-colors">info@srdreamspacerealty.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Banner Inline Footer */}
        <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 mb-20 flex flex-col lg:flex-row items-center justify-between gap-10 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[80px] rounded-full pointer-events-none" />
            <div className="text-center lg:text-left relative z-10">
                <h4 className="text-2xl font-black text-white mb-2">Begin Your Legacy.</h4>
                <p className="text-slate-400 text-base font-medium">Book a site visit with our chief engineers today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 w-full lg:w-auto relative z-10">
                <Link href="/get-a-quote">
                    <Button className="w-full sm:w-auto bg-brand-gold hover:bg-white hover:text-brand-blue text-brand-blue font-black px-12 h-16 rounded-2xl shadow-2xl transition-all">
                        Free Consultation
                    </Button>
                </Link>
                <a 
                    href="https://wa.me/919591641954" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-10 h-16 bg-white/5 text-slate-200 hover:bg-white/10 rounded-2xl transition-all font-black border border-white/10"
                >
                    <MessageCircle size={24} className="text-green-500" />
                    WhatsApp
                </a>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/5 text-slate-500 text-xs font-bold">
          <p className="tracking-wide">© {new Date().getFullYear()} SR DreamSpace Realty. Proudly Building Bangalore.</p>
          <div className="flex gap-8 mt-6 md:mt-0 uppercase tracking-[0.15em] text-[10px]">
            <Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Work</Link>
            <Link href="/sitemap" className="hover:text-brand-gold transition-colors">Digital Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
