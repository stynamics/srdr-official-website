import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 py-4 px-6 md:px-12 flex justify-between items-center relative z-20">
        <Link href="/" className="flex items-center gap-2">
            <div className="font-bold text-xl md:text-2xl tracking-tighter text-brand-blue">
            <span className="text-brand-gold">SR</span> DreamSpace
            </div>
        </Link>
        <Link href="/" className="text-sm font-medium text-slate-500 hover:text-brand-blue flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </header>
      <main className="flex-grow flex flex-col relative z-10">{children}</main>
    </div>
  );
}
