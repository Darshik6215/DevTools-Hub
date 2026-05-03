import Link from 'next/link'

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for using DevTools Hub services.',
}

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent reveal">
        Terms & Conditions
      </h1>
      
      <div className="prose prose-lg max-w-none text-text-secondary reveal reveal-delay-1">
        <p className="mb-6">
          <strong className="text-text-primary">Last Updated:</strong> May 3, 2026
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">1. Acceptance of Terms</h2>
        <p>
          By accessing and using DevTools Hub, you accept and agree to be bound by these Terms and Conditions. 
          If you do not agree to these terms, please do not use our services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">2. Use of Services</h2>
        <h3 className="text-xl font-semibold mt-6 mb-3 text-text-primary">2.1 Permitted Use</h3>
        <p>You may use our tools for:</p>
        <ul className="list-disc pl-6 mb-4 marker:text-primary">
          <li>Personal and commercial projects</li>
          <li>Development and testing purposes</li>
          <li>Educational purposes</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-text-primary">2.2 Prohibited Use</h3>
        <p>You may not:</p>
        <ul className="list-disc pl-6 mb-4 marker:text-primary">
          <li>Use our services for illegal activities</li>
          <li>Attempt to hack or compromise our systems</li>
          <li>Distribute malware or harmful code</li>
          <li>Scrape or copy our content without permission</li>
          <li>Overload our servers with excessive requests</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">3. Intellectual Property</h2>
        <p>
          All content, features, and functionality on DevTools Hub are owned by us and protected by 
          international copyright, trademark, and other intellectual property laws.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">4. User Content</h2>
        <p>
          You retain all rights to the content you process through our tools. We do not claim ownership 
          of your JSON data, passwords, or images. We do not store or retain your content.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">5. Disclaimer of Warranties</h2>
        <p>
          Our services are provided &quot;as is&quot; without warranties of any kind. We do not guarantee that:
        </p>
        <ul className="list-disc pl-6 mb-4 marker:text-primary">
          <li>Services will be uninterrupted or error-free</li>
          <li>Results will be accurate or reliable</li>
          <li>Defects will be corrected</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">6. Limitation of Liability</h2>
        <p>
          We shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
          resulting from your use of our services.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">7. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the content 
          or privacy practices of these external sites.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">8. Modifications to Services</h2>
        <p>
          We reserve the right to modify, suspend, or discontinue any part of our services at any time 
          without notice.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">9. Changes to Terms</h2>
        <p>
          We may update these terms from time to time. Continued use of our services after changes 
          constitutes acceptance of the new terms.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">10. Governing Law</h2>
        <p>
          These terms shall be governed by and construed in accordance with applicable laws, without 
          regard to conflict of law provisions.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">11. Contact Information</h2>
        <p>
          For questions about these terms, please contact us through our <Link href="/contact" className="text-primary hover:underline">contact page</Link>.
        </p>
      </div>
    </div>
  )
}
