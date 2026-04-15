"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = "919591641954";
const DEFAULT_MESSAGE = "Hi SR DreamSpace! I'm interested in your construction services. Can you help me with a quote?";

export function FloatingWhatsApp() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    // Show tooltip after 5 seconds
    const timer = setTimeout(() => {
      setIsTooltipVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!hasMounted) return null;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="relative bg-white rounded-2xl shadow-2xl shadow-black/10 border border-slate-100 p-4 pr-10 max-w-[260px]"
          >
            <button
              onClick={() => setIsTooltipVisible(false)}
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Close tooltip"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-sm font-bold text-slate-800 leading-relaxed">
              👋 Need help with your project? Chat with our engineers on WhatsApp!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-16 h-16 bg-[#25D366] hover:bg-[#20BE5C] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 transition-all hover:scale-110"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <MessageCircle className="w-7 h-7 text-white relative z-10" fill="white" />
      </motion.a>
    </div>
  );
}
