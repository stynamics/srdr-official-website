import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TrustIndicatorCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function TrustIndicatorCard({ icon, title, description, className }: TrustIndicatorCardProps) {
  return (
    <div className={cn(
      "bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300 group",
      className
    )}>
      <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-brand-blue mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
