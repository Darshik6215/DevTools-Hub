export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for DevTools Hub - Learn how we handle your data and protect your privacy.',
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Last Updated:</strong> January 15, 2024
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
        <p>
          Welcome to DevTools Hub. We respect your privacy and are committed to protecting your personal data. 
          This privacy policy explains how we handle your information when you use our website and tools.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
        <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Data You Provide</h3>
        <p>
          When you use our tools (JSON Formatter, Password Generator, Image Converter), the data you input 
          is processed in real-time and is not stored on our servers. We do not collect or retain:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>JSON data you format</li>
          <li>Passwords you generate</li>
          <li>Images you convert</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Automatically Collected Data</h3>
        <p>We may collect:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>IP address (anonymized)</li>
          <li>Pages visited and time spent</li>
          <li>Referring website</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide and maintain our services</li>
          <li>Improve user experience</li>
          <li>Analyze website usage and performance</li>
          <li>Detect and prevent technical issues</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Cookies</h2>
        <p>
          We use cookies to enhance your browsing experience. You can control cookie settings through 
          your browser preferences. Disabling cookies may affect website functionality.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Third-Party Services</h2>
        <p>We may use third-party services such as:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Google Analytics for website analytics</li>
          <li>Google AdSense for advertisements</li>
        </ul>
        <p>
          These services have their own privacy policies and may collect data independently.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your data. However, no method of 
          transmission over the internet is 100% secure. We cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access your personal data</li>
          <li>Request data correction or deletion</li>
          <li>Opt-out of data collection</li>
          <li>Withdraw consent at any time</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">8. Children&apos;s Privacy</h2>
        <p>
          Our services are not directed to children under 13. We do not knowingly collect data from 
          children under 13 years of age.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">9. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Changes will be posted on this page 
          with an updated revision date.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
        <p>
          If you have questions about this privacy policy, please contact us through our contact page.
        </p>
      </div>
    </div>
  )
}
