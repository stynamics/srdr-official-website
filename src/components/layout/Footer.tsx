import Link from "next/link";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-brand-blue text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand & Trust */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="font-bold text-3xl tracking-tighter text-white">
                <span className="text-brand-gold">SR</span> DreamSpace
              </div>
            </Link>
            <p className="text-slate-300 leading-relaxed text-sm">
              We build premium, future-ready spaces across Bangalore. Transparent pricing, guaranteed timelines, and zero compromises on quality.
            </p>
            <div className="flex items-center gap-4 text-brand-gold font-medium">
              <span>Licensed & Insured</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span>10+ Years Exp</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6 lg:pl-8">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-slate-300 text-sm">
              <li><Link href="/services/residential-construction" className="hover:text-brand-gold transition-colors">Our Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-brand-gold transition-colors">Portfolio Showcase</Link></li>
              <li><Link href="/locations/k-r-puram" className="hover:text-brand-gold transition-colors">Service Areas</Link></li>
              <li><Link href="/blog" className="hover:text-brand-gold transition-colors">Construction Insights</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <ul className="flex flex-col gap-4 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span>Major Hub in Bangalore<br />Karnataka, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-brand-gold transition-colors">+91 XXXXX XXXXX</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="mailto:info@srdreamspace.com" className="hover:text-brand-gold transition-colors">info@srdreamspace.com</a>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col gap-6 bg-slate-800/50 p-6 rounded-2xl border border-white/5">
            <h4 className="text-lg font-semibold text-white">Ready to Build?</h4>
            <p className="text-sm text-slate-300">
              Get a transparent, fixed-price estimate for your construction project today.
            </p>
            <Link href="/get-a-quote">
              <Button className="w-full bg-brand-gold hover:bg-white hover:text-brand-blue text-brand-blue font-bold tracking-wide rounded-lg h-12 transition-all">
                Book Free Consultation
              </Button>
            </Link>
            <a 
              href="https://wa.me/91XXXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm text-green-400 hover:text-green-300 mt-2 font-medium"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-slate-400 text-xs">
          <p>© {new Date().getFullYear()} SR DreamSpace Realty. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
