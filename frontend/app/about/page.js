import Link from 'next/link'

export const metadata = {
  title: 'About Us',
  description: 'Learn more about DevTools Hub - our mission, our tools, and our commitment to the developer community.',
}

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12 reveal">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About DevTools Hub
        </h1>
        <p className="text-xl text-text-secondary">
          Empowering developers with professional-grade tools, 100% free.
        </p>
      </div>

      <div className="prose prose-lg max-w-none text-text-secondary reveal reveal-delay-1">
        <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">Our Mission</h2>
        <p>
          At <span className="text-primary font-bold">DevTools Hub</span> (devtoolskit.co.in), our mission is simple: to provide developers with a comprehensive suite of high-quality, easy-to-use tools that streamline their workflow and boost productivity.
        </p>
        <p>
          We believe that essential development tools should be accessible to everyone, regardless of their budget. That's why every tool on our platform is, and will always be, completely free to use.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">What We Offer</h2>
        <p>
          Our platform hosts a growing collection of utilities designed to handle common development tasks, including:
        </p>
        <ul className="list-disc pl-6 mb-4 marker:text-primary">
          <li><strong>Data Formatting:</strong> Clean and structure your JSON, CSS, and HTML code.</li>
          <li><strong>Converters:</strong> Effortlessly switch between Base64, Hex, and various image formats.</li>
          <li><strong>Generators:</strong> Create secure passwords, UUIDs, and customized Dockerfiles.</li>
          <li><strong>Security Tools:</strong> Encode and decode JWTs, generate hashes, and test regex patterns.</li>
          <li><strong>Image Optimization:</strong> Compress and resize images without compromising quality.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">Why Choose DevTools Hub?</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="p-6 bg-bg-secondary border border-border rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-text-primary">Privacy First</h3>
            <p className="text-sm">We don't store your data. All processing happens in real-time and is never retained on our servers.</p>
          </div>
          <div className="p-6 bg-bg-secondary border border-border rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-text-primary">Blazing Fast</h3>
            <p className="text-sm">Built with Next.js, our platform is optimized for speed and a seamless user experience.</p>
          </div>
          <div className="p-6 bg-bg-secondary border border-border rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-text-primary">Modern Design</h3>
            <p className="text-sm">Clean, intuitive interface with dark mode support, because we know developers love it.</p>
          </div>
          <div className="p-6 bg-bg-secondary border border-border rounded-xl">
            <h3 className="text-xl font-bold mb-2 text-text-primary">Always Free</h3>
            <p className="text-sm">No subscriptions, no hidden fees. Just free tools for the developer community.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-text-primary">Join Our Community</h2>
        <p>
          We are constantly working to improve and expand our toolset. If you have any suggestions, feedback, or ideas for new tools, we'd love to hear from you.
        </p>
        <div className="mt-8 text-center">
          <Link href="/contact" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-all shadow-lg transform active:scale-95">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
