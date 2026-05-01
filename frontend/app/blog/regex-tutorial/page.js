import Link from 'next/link'

export const metadata = {
  title: 'Regex Tutorial for Beginners - Master Regular Expressions | DevTools Hub',
  description: 'Master Regular Expressions (Regex) with our beginner-friendly tutorial. Learn syntax, patterns, and how to test your regex patterns online.',
  keywords: ['regex tutorial', 'regular expressions', 'regex for beginners', 'regex cheat sheet', 'test regex online'],
}

export default function RegexTutorialPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <div className="text-sm text-text-secondary mb-4">
            Published on February 10, 2024 • 15 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Regex Tutorial for Beginners: Master Regular Expressions
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Regular Expressions can seem like magic or a foreign language, but they are incredibly powerful tools for 
            searching, matching, and manipulating text. This guide will take you from zero to regex hero.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-12 text-center">
          <div className="text-8xl mb-4">🔤</div>
          <p className="text-text-secondary">Regex Tester & Debugger Tool</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">What is Regex?</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            A Regular Expression (Regex) is a sequence of characters that forms a search pattern. When you search for 
            data in a text, you can use this search pattern to describe what you are looking for. Regex is supported 
            by almost all programming languages and many text editors.
          </p>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Basic Syntax Cheat Sheet</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 text-primary">Character</th>
                  <th className="py-3 px-4 text-primary">Description</th>
                  <th className="py-3 px-4 text-primary">Example</th>
                </tr>
              </thead>
              <tbody className="text-text-secondary">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-mono text-text-primary">.</td>
                  <td className="py-3 px-4">Any single character (except newline)</td>
                  <td className="py-3 px-4 font-mono">h.t matches hat, hot</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-mono text-text-primary">*</td>
                  <td className="py-3 px-4">Zero or more occurrences</td>
                  <td className="py-3 px-4 font-mono">ho*t matches ht, hot, hoot</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-mono text-text-primary">+</td>
                  <td className="py-3 px-4">One or more occurrences</td>
                  <td className="py-3 px-4 font-mono">ho+t matches hot, hoot</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-mono text-text-primary">?</td>
                  <td className="py-3 px-4">Zero or one occurrence</td>
                  <td className="py-3 px-4 font-mono">ho?t matches ht, hot</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-mono text-text-primary">^</td>
                  <td className="py-3 px-4">Starts with</td>
                  <td className="py-3 px-4 font-mono">^Hello matches "Hello world"</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-mono text-text-primary">$</td>
                  <td className="py-3 px-4">Ends with</td>
                  <td className="py-3 px-4 font-mono">world$ matches "Hello world"</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-mono text-text-primary">\d</td>
                  <td className="py-3 px-4">Any digit (0-9)</td>
                  <td className="py-3 px-4 font-mono">\d\d matches 42</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-mono text-text-primary">\w</td>
                  <td className="py-3 px-4">Any word character (a-z, A-Z, 0-9, _)</td>
                  <td className="py-3 px-4 font-mono">\w+ matches "hello"</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Common Regex Patterns</h2>
          
          <h3 className="text-2xl font-bold text-text-primary mb-3 mt-8">Email Validation</h3>
          <p className="text-text-secondary mb-4">A simple pattern to match most email addresses:</p>
          <pre className="bg-bg-secondary p-4 rounded-lg text-primary font-mono overflow-x-auto mb-6">
            {`^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$`}
          </pre>

          <h3 className="text-2xl font-bold text-text-primary mb-3 mt-8">Phone Numbers (US)</h3>
          <p className="text-text-secondary mb-4">Matches (123) 456-7890 or 123-456-7890:</p>
          <pre className="bg-bg-secondary p-4 rounded-lg text-primary font-mono overflow-x-auto mb-6">
            {`^(\\(\\d{3}\\)\\s?|\\d{3}-)\\d{3}-\\d{4}$`}
          </pre>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Regex Flags</h2>
          <p className="text-text-secondary mb-4">Flags are used to modify the search behavior:</p>
          <ul className="text-text-secondary space-y-2 mb-8">
            <li>⚙️ <strong className="text-text-primary">g (global):</strong> Find all matches rather than stopping after the first.</li>
            <li>⚙️ <strong className="text-text-primary">i (case-insensitive):</strong> Ignore case when matching.</li>
            <li>⚙️ <strong className="text-text-primary">m (multiline):</strong> ^ and $ match start/end of lines rather than start/end of string.</li>
          </ul>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">How to Use Our Regex Tester</h2>
          <ol className="text-text-secondary space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">1.</span>
              <span><strong className="text-text-primary">Enter your Pattern:</strong> Type your regex in the pattern field.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">2.</span>
              <span><strong className="text-text-primary">Enter Test Text:</strong> Paste the text you want to search through in the text area.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">3.</span>
              <span><strong className="text-text-primary">Check Highlights:</strong> Matches will be instantly highlighted in your test text.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">4.</span>
              <span><strong className="text-text-primary">View Match Details:</strong> See a list of all matches, including their position and groups.</span>
            </li>
          </ol>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Conclusion</h2>
          <p className="text-text-secondary mb-8 leading-relaxed">
            Regex is a skill that pays off for a lifetime. Once you understand the basics, you'll find 
            countless ways to use it in your coding, data analysis, and even simple text editing tasks. 
            Keep practicing and use our Regex Tester to experiment with different patterns!
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Want to Test Your Regex?</h3>
            <p className="text-white/90 mb-6">
              Use our live Regex Tester to build and debug your patterns with real-time feedback.
            </p>
            <Link
              href="/regex-tester"
              className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:opacity-90 transition-all shadow-lg"
            >
              Use Regex Tester Tool →
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-2xl font-bold text-text-primary mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/api-testing-complete-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">🧪</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">API Testing Guide</h4>
              <p className="text-text-secondary text-sm">Learn to test REST APIs efficiently</p>
            </Link>
            <Link href="/blog/json-formatter-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">📋</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">JSON Formatter Guide</h4>
              <p className="text-text-secondary text-sm">Everything about JSON formatting</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
