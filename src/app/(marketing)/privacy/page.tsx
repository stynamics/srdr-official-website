import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SR DreamSpace Realty',
  description: 'How SR DreamSpace Realty collects, uses, and protects your personal information.',
  alternates: {
    canonical: 'https://srdreamspacerealty.com/privacy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <section className="bg-brand-blue pt-40 pb-20 text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-slate-300 text-base font-medium">Last updated: April 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="prose prose-lg prose-slate max-w-none space-y-10">

            <div>
              <h2 className="text-2xl font-extrabold text-brand-blue mb-4 tracking-tight">1. Information We Collect</h2>
              <p className="text-slate-700 leading-relaxed font-medium">
                When you use our website or contact us through our forms, we may collect the following information:
              </p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mt-4 font-medium">
                <li>Full name and contact details (phone number, email address)</li>
                <li>Project requirements and property details you voluntarily provide</li>
                <li>Website usage data through cookies and analytics tools</li>
                <li>Device information and IP address for security purposes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-brand-blue mb-4 tracking-tight">2. How We Use Your Information</h2>
              <p className="text-slate-700 leading-relaxed font-medium">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mt-4 font-medium">
                <li>Respond to your construction inquiries and provide personalized estimates</li>
                <li>Communicate project updates and relevant service information</li>
                <li>Improve our website experience and service offerings</li>
                <li>Comply with legal obligations and protect our legitimate business interests</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-brand-blue mb-4 tracking-tight">3. Data Protection</h2>
              <p className="text-slate-700 leading-relaxed font-medium">
                We implement appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Your information is stored securely and accessed only by authorized personnel who need to process it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-brand-blue mb-4 tracking-tight">4. Third-Party Sharing</h2>
              <p className="text-slate-700 leading-relaxed font-medium">
                We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-brand-blue mb-4 tracking-tight">5. Cookies</h2>
              <p className="text-slate-700 leading-relaxed font-medium">
                Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some website functionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-brand-blue mb-4 tracking-tight">6. Your Rights</h2>
              <p className="text-slate-700 leading-relaxed font-medium">You have the right to:</p>
              <ul className="list-disc pl-6 text-slate-700 space-y-2 mt-4 font-medium">
                <li>Request access to the personal data we hold about you</li>
                <li>Request correction or deletion of your personal data</li>
                <li>Opt out of marketing communications at any time</li>
                <li>Lodge a complaint with a data protection authority</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-brand-blue mb-4 tracking-tight">7. Contact Us</h2>
              <p className="text-slate-700 leading-relaxed font-medium">
                For any questions regarding this privacy policy, please contact us at{' '}
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
