import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "dark";
}

export function Section({ children, className, id, background = "white" }: SectionProps) {
  const bgColors = {
    white: "bg-white",
    gray: "bg-slate-50",
    dark: "bg-brand-blue text-white",
  };

  return (
    <section id={id} className={cn("py-20 md:py-32", bgColors[background], className)}>
      <div className="container mx-auto px-4 md:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ 
  title, 
  subtitle, 
  align = "center",
  dark = false
}: { 
  title: string; 
  subtitle?: string; 
  align?: "left" | "center" | "right";
  dark?: boolean;
}) {
  return (
    <div className={cn("mb-16", {
      "text-left": align === "left",
      "text-center": align === "center",
      "text-right": align === "right",
    })}>
      <h2 className={cn("text-3xl md:text-5xl font-bold tracking-tight mb-4", dark ? "text-white" : "text-brand-blue")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-lg md:text-xl max-w-2xl", align === "center" && "mx-auto", dark ? "text-slate-300" : "text-slate-600")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
