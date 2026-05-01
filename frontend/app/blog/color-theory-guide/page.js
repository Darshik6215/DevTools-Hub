import Link from 'next/link'

export const metadata = {
  title: 'Complete Guide to Color Theory for Web Developers | DevTools Hub',
  description: 'Master color theory, HEX, RGB, and HSL formats. Learn how to create beautiful color palettes and understand accessibility (WCAG) for web design.',
  keywords: ['color theory', 'hex to rgb', 'hsl vs rgb', 'color palette', 'web accessibility', 'color picker online', 'design for developers'],
}

export default function ColorTheoryGuidePage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <div className="text-sm text-text-secondary mb-4">
            Published on April 20, 2024 • 12 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Color Theory for Web Developers: Beyond the Hex Code
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Color is more than just decoration; it's a powerful tool for communication and accessibility. 
            Learn how to use color effectively in your web projects.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-12 text-center">
          <div className="text-8xl mb-4">🎨</div>
          <p className="text-text-secondary">Color Picker & Palette Tool</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Understanding Color Formats</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            On the web, we have three main ways to describe colors. Each has its own strengths and use cases.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-3">1. HEX (Hexadecimal)</h3>
              <p className="text-text-secondary text-sm mb-2">The most common format. Uses 6 characters to represent Red, Green, and Blue values.</p>
              <code className="text-primary">#FF5733</code>
            </div>
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-3">2. RGB (Red, Green, Blue)</h3>
              <p className="text-text-secondary text-sm mb-2">Describes colors based on the intensity of light. Great for programmatic color manipulation.</p>
              <code className="text-primary">rgb(255, 87, 51)</code>
            </div>
            <div className="bg-card-bg border border-border p-6 rounded-xl">
              <h3 className="text-xl font-bold text-text-primary mb-3">3. HSL (Hue, Saturation, Lightness)</h3>
              <p className="text-text-secondary text-sm mb-2">The most human-readable format. Easy to create variations (shades and tints) by just changing the lightness.</p>
              <code className="text-primary">hsl(11, 100%, 60%)</code>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Basic Color Harmonies</h2>
          <p className="text-text-secondary mb-6">
            Creating a palette from scratch can be hard. These classic schemes are a great starting point:
          </p>
          <ul className="text-text-secondary space-y-4 mb-8">
            <li>🌈 <strong className="text-text-primary">Monochromatic:</strong> Different shades and tints of the same hue. Safe and professional.</li>
            <li>🌈 <strong className="text-text-primary">Analogous:</strong> Colors that are next to each other on the color wheel. Harmonious and calm.</li>
            <li>🌈 <strong className="text-text-primary">Complementary:</strong> Colors from opposite sides of the wheel. High contrast and vibrant.</li>
            <li>🌈 <strong className="text-text-primary">Triadic:</strong> Three colors equally spaced around the wheel. Bold and balanced.</li>
          </ul>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Color and Accessibility (WCAG)</h2>
          <p className="text-text-secondary mb-6">
            As a developer, accessibility is your responsibility. The Web Content Accessibility Guidelines (WCAG) 
            require a minimum contrast ratio for text:
          </p>
          <div className="bg-card-bg border border-border p-6 rounded-xl mb-8">
            <ul className="text-sm space-y-2">
              <li className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-text-primary">Normal Text (Level AA)</span>
                <span className="text-primary font-bold">4.5:1 ratio</span>
              </li>
              <li className="flex justify-between border-b border-border/50 py-2">
                <span className="text-text-primary">Large Text (Level AA)</span>
                <span className="text-primary font-bold">3:1 ratio</span>
              </li>
              <li className="flex justify-between pt-2">
                <span className="text-text-primary">Enhanced Contrast (Level AAA)</span>
                <span className="text-primary font-bold">7:1 ratio</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">How to Use Our Color Picker</h2>
          <p className="text-text-secondary mb-6">
            Our <Link href="/color-picker" className="text-primary hover:underline">Color Picker tool</Link> is designed 
            specifically for developers:
          </p>
          <ol className="text-text-secondary space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">1.</span>
              <span><strong className="text-text-primary">Visual Selection:</strong> Use the interactive canvas to find the perfect shade.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">2.</span>
              <span><strong className="text-text-primary">Instant Conversion:</strong> Get your color in HEX, RGB, and HSL formats simultaneously.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">3.</span>
              <span><strong className="text-text-primary">Saved Palette:</strong> Keep track of your recently picked colors during your session.</span>
            </li>
          </ol>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Conclusion</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Color theory is a vast subject, but mastering these basics will immediately improve the 
            visual quality and usability of your web applications. Remember to always prioritize 
            contrast and accessibility. Happy designing!
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find Your Perfect Color</h3>
            <p className="text-white/90 mb-6">
              Use our professional color picker to generate HEX, RGB, and HSL codes for your next project.
            </p>
            <Link
              href="/color-picker"
              className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:opacity-90 transition-all shadow-lg"
            >
              Go to Color Picker →
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-2xl font-bold text-text-primary mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/image-optimization-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">🖼️</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">Image Optimization Guide</h4>
              <p className="text-text-secondary text-sm">Handling color profiles in images</p>
            </Link>
            <Link href="/blog/code-formatting-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">💻</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">Code Formatting Guide</h4>
              <p className="text-text-secondary text-sm">Keeping your CSS clean and readable</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
