import Link from 'next/link'

export const metadata = {
  title: 'Complete Guide to Code Formatting - Best Practices & Tools | DevTools Hub',
  description: 'Learn why clean code matters. A complete guide to code formatting, indentation, naming conventions, and how to use automated formatters.',
  keywords: ['code formatting', 'clean code', 'coding standards', 'prettier', 'eslint', 'format code online', 'beautify code'],
}

export default function CodeFormattingGuidePage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <div className="text-sm text-text-secondary mb-4">
            Published on April 2, 2024 • 10 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Complete Guide to Code Formatting: Why Clean Code Matters
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Writing code is for machines, but reading code is for humans. 
            Learn how proper code formatting can make your codebase more maintainable, readable, and professional.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-12 text-center">
          <div className="text-8xl mb-4">💻</div>
          <p className="text-text-secondary">Code Formatter & Beautifier Tool</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">What is Code Formatting?</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Code formatting refers to the way source code is organized visually. It includes indentation, spacing, 
            line breaks, and the use of brackets. While formatting doesn't affect how the program runs, it 
            drastically affects how easily developers can understand and debug the code.
          </p>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">The Benefits of Clean Code</h2>
          <ul className="text-text-secondary space-y-4 mb-8">
            <li>🚀 <strong className="text-text-primary">Better Readability:</strong> Consistently formatted code is easier to scan and understand at a glance.</li>
            <li>🚀 <strong className="text-text-primary">Easier Debugging:</strong> Clear structure makes it much faster to spot logical errors and missing brackets.</li>
            <li>🚀 <strong className="text-text-primary">Improved Collaboration:</strong> When everyone on a team follows the same style, code reviews become about logic, not aesthetics.</li>
            <li>🚀 <strong className="text-text-primary">Maintainability:</strong> Clean code is easier to update and scale over time without introducing bugs.</li>
          </ul>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Essential Formatting Rules</h2>
          
          <h3 className="text-2xl font-bold text-text-primary mb-3 mt-8">1. Indentation</h3>
          <p className="text-text-secondary mb-4">
            Use a consistent number of spaces (usually 2 or 4) for every nested level. Avoid mixing tabs and spaces.
          </p>
          <div className="bg-card-bg border border-border p-4 rounded-lg mb-6">
            <pre className="text-primary font-mono text-sm overflow-x-auto">
{`function greet(name) {
  if (name) {
    console.log("Hello, " + name);
  }
}`}
            </pre>
          </div>

          <h3 className="text-2xl font-bold text-text-primary mb-3 mt-8">2. Meaningful Naming</h3>
          <p className="text-text-secondary mb-4">
            Variables and functions should describe exactly what they do.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg">
              <p className="text-red-400 font-bold mb-2">❌ Bad</p>
              <code className="text-sm">let d = 5;</code>
              <p className="text-xs text-text-secondary mt-2">What does 'd' mean?</p>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 p-4 rounded-lg">
              <p className="text-green-400 font-bold mb-2">✅ Good</p>
              <code className="text-sm">let daysToExpiration = 5;</code>
              <p className="text-xs text-text-secondary mt-2">Clearly describes the data.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Popular Formatting Tools</h2>
          <p className="text-text-secondary mb-6">
            You don't have to format code manually. Use these industry-standard tools:
          </p>
          <ul className="text-text-secondary space-y-3 mb-8">
            <li>🛠️ <strong className="text-text-primary">Prettier:</strong> An opinionated code formatter that supports many languages and integrates into your IDE.</li>
            <li>🛠️ <strong className="text-text-primary">ESLint:</strong> A linter that finds problems in your JavaScript code and can automatically fix many formatting issues.</li>
            <li>🛠️ <strong className="text-text-primary">Stylelint:</strong> A mighty, modern linter that helps you avoid errors and enforce conventions in your styles (CSS/SCSS).</li>
          </ul>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">How to Use Our Code Formatter</h2>
          <p className="text-text-secondary mb-6">
            If you need to quickly beautify a snippet of code without setting up local tools, 
            our <Link href="/code-formatter" className="text-primary hover:underline">Code Formatter</Link> is the perfect solution:
          </p>
          <ol className="text-text-secondary space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">1.</span>
              <span><strong className="text-text-primary">Paste your Code:</strong> Paste your messy JavaScript, HTML, CSS, or JSON.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">2.</span>
              <span><strong className="text-text-primary">Select Indentation:</strong> Choose between 2 or 4 spaces.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">3.</span>
              <span><strong className="text-text-primary">Format Instantly:</strong> Our tool beautifies your code using Prettier-like logic in the browser.</span>
            </li>
          </ol>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Conclusion</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Clean code isn't a luxury; it's a necessity for professional software development. 
            By adopting consistent formatting habits and using the right tools, you'll save hours 
            of debugging and make your code a joy for others to read. Happy coding!
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Beautify Your Code Instantly</h3>
            <p className="text-white/90 mb-6">
              Paste your messy code into our free online formatter and get clean, professional results in one click.
            </p>
            <Link
              href="/code-formatter"
              className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:opacity-90 transition-all shadow-lg"
            >
              Go to Code Formatter →
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-2xl font-bold text-text-primary mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/regex-tutorial" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">🔤</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">Regex Tutorial</h4>
              <p className="text-text-secondary text-sm">Improve your text processing skills</p>
            </Link>
            <Link href="/blog/json-formatter-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">📋</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">JSON Formatter Guide</h4>
              <p className="text-text-secondary text-sm">Deep dive into JSON data</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
