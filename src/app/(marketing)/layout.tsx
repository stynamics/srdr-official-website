import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-grow pt-[88px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
