import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Work | SR DreamSpace Realty',
  description: 'Terms and conditions governing construction services by SR DreamSpace Realty, Bangalore.',
  alternates: {
    canonical: 'https://srdreamspacerealty.com/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="bg-brand-blue pt-40 pb-20 text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Terms of Work</h1>
          <p className="text-slate-300 text-base font-medium">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="prose prose-lg prose-slate max-w-none space-y-10">

            <div>
              <h2 className="text-2xl font-extrabold text-brand-blue mb-4 tracking-tight">1. Scope of Services</h2>
              <p className="text-slate-700 leading-relaxed font-medium">
                SR DreamSpace Realty provides residential construction, commercial construction, renovation, turnkey project management, and interior design services across Bangalore and surrounding areas. The exact scope of work for each project is defined in the individual project agreement signed between the client and SR DreamSpace Realty.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-brand-blue mb-4 tracking-tight">2. Pricing & Payments</h2>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mt-2 font-medium">
                <li>All pricing estimates provided through our website are indicative and subject to a detailed site inspection</li>
                <li>Final pricing is locked in through a formal, signed agreement with a fixed-price guarantee</li>
                <li>Payment milestones are clearly defined in the project agreement and tied to construction progress</li>
                <li>All prices are inclusive of applicable GST unless otherwise stated</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-brand-blue mb-4 tracking-tight">3. Project Timelines</h2>
              <p className="text-slate-700 leading-relaxed font-medium">
                We commit to delivering projects within the agreed-upon timeline. Delays caused by force majeure events, government regulations, or client-requested changes are excluded from penalty calculations. Our standard timeline commitments are backed by contractual penalty clauses as defined in each project agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-brand-blue mb-4 tracking-tight">4. Quality Standards</h2>
              <p className="text-slate-700 leading-relaxed font-medium">
                All construction work adheres to Bureau of Indian Standards (BIS) specifications and local BBMP guidelines. We exclusively use Grade-A materials from approved vendors including UltraTech, JSW, Jaquar, and equivalent premium brands. Material substitution is never done without prior written client approval.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-brand-blue mb-4 tracking-tight">5. Approvals & Permits</h2>
              <p className="text-slate-700 leading-relaxed font-medium">
                SR DreamSpace Realty assists in obtaining necessary BBMP plan sanctions, building permits, and other regulatory approvals. However, fees associated with government approvals, sanctions, and utility connections are borne by the client unless explicitly included in the project agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-brand-blue mb-4 tracking-tight">6. Warranty & After-Sales</h2>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mt-2 font-medium">
                <li>Structural warranty: As per the terms outlined in the individual project agreement</li>
                <li>Waterproofing warranty: Covered as specified in the project agreement</li>
                <li>Electrical and plumbing workmanship warranty is covered under the project terms</li>
                <li>Warranty does not cover damage caused by misuse, natural disasters, or unauthorized modifications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-brand-blue mb-4 tracking-tight">7. Dispute Resolution</h2>
              <p className="text-slate-700 leading-relaxed font-medium">
                Any disputes arising from projects shall be resolved through mutual negotiation first. If unresolved, disputes shall be subject to arbitration in Bangalore under the Arbitration and Conciliation Act, 1996. The jurisdiction for legal proceedings shall be the courts of Bangalore, Karnataka.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-brand-blue mb-4 tracking-tight">8. Website Disclaimer</h2>
              <p className="text-slate-700 leading-relaxed font-medium">
                The content on this website, including images and project descriptions, is for informational purposes only. While we strive to keep information accurate and up-to-date, we make no warranties about the completeness or accuracy of any information on this site. Cost estimates provided through our online calculator are approximate and subject to a detailed site evaluation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-brand-blue mb-4 tracking-tight">9. Contact</h2>
              <p className="text-slate-700 leading-relaxed font-medium">
                For any questions about these terms, please contact us at{' '}
                <a href="mailto:info@srdreamspacerealty.com" className="text-brand-gold hover:underline font-bold">
                  info@srdreamspacerealty.com
                </a>{' '}
                or call us at{' '}
                <a href="tel:+919591641954" className="text-brand-gold hover:underline font-bold">
                  +91 95916 41954
                </a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
