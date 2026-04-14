"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, MessageCircle } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/residential-construction" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Locations", path: "/locations/k-r-puram" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-white/50 backdrop-blur-sm py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative font-bold text-2xl md:text-3xl tracking-tighter text-brand-blue">
            <span className="text-brand-gold">SR</span> DreamSpace
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-sm font-semibold text-slate-700 hover:text-brand-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 border-l pl-6 border-slate-200">
            {/* WhatsApp */}
            <Link
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-500 transition-colors bg-green-50 p-2 rounded-full"
              aria-label="WhatsApp Us"
            >
              <MessageCircle size={20} />
            </Link>
            {/* CTA */}
            <Link href="/get-a-quote">
              <Button className="bg-brand-gold hover:bg-brand-gold/90 text-white font-bold tracking-wide px-6 rounded-full shadow-md transition-transform hover:scale-105">
                Get a Quote
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center gap-3">
          <Link
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-500 bg-green-50 p-2 rounded-full"
          >
            <MessageCircle size={20} />
          </Link>
          <Sheet>
            <SheetTrigger className="bg-slate-50 border border-slate-100 p-2 rounded-md hover:bg-slate-100 transition-colors flex items-center justify-center">
                <Menu size={24} className="text-brand-blue" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-none w-[300px] flex flex-col pt-16">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="text-lg font-bold text-brand-blue hover:text-brand-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-auto pb-8">
                <Link href="/get-a-quote" className="block w-full">
                  <Button className="w-full bg-brand-gold hover:bg-brand-gold/90 text-white font-bold h-14 text-lg rounded-xl">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
