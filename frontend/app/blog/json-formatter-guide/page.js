import Link from 'next/link'

export const metadata = {
  title: 'Complete Guide to JSON Formatter - Format & Validate JSON Online | DevTools Hub',
  description: 'Learn everything about JSON formatting, validation, and best practices. Complete guide with examples, tips, and common errors.',
  keywords: ['json formatter', 'json guide', 'json validation', 'json tutorial', 'format json'],
}

export default function JSONFormatterGuidePage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <div className="text-sm text-text-secondary mb-4">
            Published on January 15, 2024 • 8 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Complete Guide to JSON Formatter: Everything You Need to Know
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Master JSON formatting, validation, and best practices with our comprehensive guide. Learn how to work with JSON efficiently.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-12 text-center">
          <div className="text-8xl mb-4">📋</div>
          <p className="text-text-secondary">JSON Formatter Tool</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">What is JSON?</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            JSON (JavaScript Object Notation) is a lightweight data-interchange format that's easy for humans to read and write, 
            and easy for machines to parse and generate. It has become the de facto standard for data exchange on the web, 
            used by virtually every modern API and web service.
          </p>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Why Use a JSON Formatter?</h2>
          <p className="text-text-secondary mb-4 leading-relaxed">
            Raw JSON data from APIs is often minified (compressed into a single line) to reduce file size. While this is great 
            for performance, it makes the data nearly impossible to read and debug. A JSON formatter solves this problem by:
          </p>
          <ul className="text-text-secondary space-y-2 mb-6">
            <li>✅ <strong className="text-text-primary">Pretty printing:</strong> Adding proper indentation and line breaks</li>
            <li>✅ <strong className="text-text-primary">Syntax validation:</strong> Catching errors in your JSON structure</li>
            <li>✅ <strong className="text-text-primary">Error detection:</strong> Highlighting exactly where problems occur</li>
            <li>✅ <strong className="text-text-primary">Readability:</strong> Making complex nested data easy to understand</li>
          </ul>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Common JSON Errors and How to Fix Them</h2>
          
          <h3 className="text-2xl font-bold text-text-primary mb-3 mt-8">1. Missing Comma</h3>
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
            <p className="text-red-400 font-mono text-sm mb-2">❌ Incorrect:</p>
            <pre className="text-text-primary font-mono text-sm overflow-x-auto">
{`{
  "name": "John"
  "age": 30
}`}
            </pre>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
            <p className="text-green-400 font-mono text-sm mb-2">✅ Correct:</p>
            <pre className="text-text-primary font-mono text-sm overflow-x-auto">
{`{
  "name": "John",
  "age": 30
}`}
            </pre>
          </div>

          <h3 className="text-2xl font-bold text-text-primary mb-3 mt-8">2. Trailing Comma</h3>
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
            <p className="text-red-400 font-mono text-sm mb-2">❌ Incorrect:</p>
            <pre className="text-text-primary font-mono text-sm overflow-x-auto">
{`{
  "name": "John",
  "age": 30,
}`}
            </pre>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
            <p className="text-green-400 font-mono text-sm mb-2">✅ Correct:</p>
            <pre className="text-text-primary font-mono text-sm overflow-x-auto">
{`{
  "name": "John",
  "age": 30
}`}
            </pre>
          </div>

          <h3 className="text-2xl font-bold text-text-primary mb-3 mt-8">3. Single Quotes Instead of Double Quotes</h3>
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
            <p className="text-red-400 font-mono text-sm mb-2">❌ Incorrect:</p>
            <pre className="text-text-primary font-mono text-sm overflow-x-auto">
{`{
  'name': 'John',
  'age': 30
}`}
            </pre>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
            <p className="text-green-400 font-mono text-sm mb-2">✅ Correct:</p>
            <pre className="text-text-primary font-mono text-sm overflow-x-auto">
{`{
  "name": "John",
  "age": 30
}`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">JSON Best Practices</h2>
          <div className="bg-card-bg border border-border rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-text-primary mb-3">1. Use Consistent Naming Conventions</h3>
            <p className="text-text-secondary mb-3">
              Choose either camelCase or snake_case and stick with it throughout your JSON structure.
            </p>
            <pre className="bg-bg-secondary rounded-lg p-4 text-text-primary font-mono text-sm overflow-x-auto">
{`// camelCase (recommended for JavaScript)
{
  "firstName": "John",
  "lastName": "Doe",
  "emailAddress": "john@example.com"
}

// snake_case (common in Python/Ruby)
{
  "first_name": "John",
  "last_name": "Doe",
  "email_address": "john@example.com"
}`}
            </pre>
          </div>

          <div className="bg-card-bg border border-border rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-text-primary mb-3">2. Keep It Flat When Possible</h3>
            <p className="text-text-secondary mb-3">
              Avoid unnecessary nesting. Flat structures are easier to work with and more performant.
            </p>
            <pre className="bg-bg-secondary rounded-lg p-4 text-text-primary font-mono text-sm overflow-x-auto">
{`// Too nested ❌
{
  "user": {
    "profile": {
      "personal": {
        "name": "John"
      }
    }
  }
}

// Better ✅
{
  "userName": "John",
  "userEmail": "john@example.com"
}`}
            </pre>
          </div>

          <div className="bg-card-bg border border-border rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-text-primary mb-3">3. Use Arrays for Lists</h3>
            <p className="text-text-secondary mb-3">
              When you have multiple items of the same type, always use arrays.
            </p>
            <pre className="bg-bg-secondary rounded-lg p-4 text-text-primary font-mono text-sm overflow-x-auto">
{`{
  "users": [
    {"id": 1, "name": "John"},
    {"id": 2, "name": "Jane"},
    {"id": 3, "name": "Bob"}
  ]
}`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">How to Use Our JSON Formatter</h2>
          <ol className="text-text-secondary space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">1.</span>
              <span><strong className="text-text-primary">Paste your JSON:</strong> Copy your JSON data from your API response, file, or code and paste it into the input field.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">2.</span>
              <span><strong className="text-text-primary">Click Format:</strong> Our tool instantly validates and formats your JSON with proper indentation.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">3.</span>
              <span><strong className="text-text-primary">Fix errors:</strong> If there are any syntax errors, they'll be highlighted with helpful error messages.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">4.</span>
              <span><strong className="text-text-primary">Copy result:</strong> Once formatted, copy the clean JSON with one click.</span>
            </li>
          </ol>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Real-World Use Cases</h2>
          
          <div className="bg-card-bg border border-border rounded-xl p-6 mb-4">
            <h3 className="text-xl font-bold text-text-primary mb-3">🔍 Debugging API Responses</h3>
            <p className="text-text-secondary">
              When working with REST APIs, responses are often minified. Use our formatter to quickly understand the structure 
              and debug issues in your API integration.
            </p>
          </div>

          <div className="bg-card-bg border border-border rounded-xl p-6 mb-4">
            <h3 className="text-xl font-bold text-text-primary mb-3">📝 Configuration Files</h3>
            <p className="text-text-secondary">
              Many applications use JSON for configuration (package.json, tsconfig.json, etc.). Format these files to make 
              them more readable and catch syntax errors before deployment.
            </p>
          </div>

          <div className="bg-card-bg border border-border rounded-xl p-6 mb-4">
            <h3 className="text-xl font-bold text-text-primary mb-3">🎓 Learning and Teaching</h3>
            <p className="text-text-secondary">
              If you're learning JSON or teaching others, our formatter helps visualize the structure and understand 
              how nested objects and arrays work.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Advanced Tips</h2>
          
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-text-primary mb-3">💡 Tip 1: Validate Before Sending</h3>
            <p className="text-text-secondary">
              Always validate your JSON before sending it to an API. Invalid JSON will cause requests to fail and can be 
              difficult to debug in production.
            </p>
          </div>

          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-text-primary mb-3">💡 Tip 2: Use Comments in Development</h3>
            <p className="text-text-secondary mb-3">
              While JSON doesn't support comments, you can use a "comment" field during development:
            </p>
            <pre className="bg-bg-secondary rounded-lg p-4 text-text-primary font-mono text-sm overflow-x-auto">
{`{
  "_comment": "This is a temporary note",
  "name": "John",
  "age": 30
}`}
            </pre>
          </div>

          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-text-primary mb-3">💡 Tip 3: Minify for Production</h3>
            <p className="text-text-secondary">
              While formatted JSON is great for development, minify it for production to reduce file size and improve 
              load times. Our tool can do both!
            </p>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Conclusion</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            JSON formatting is an essential skill for modern web development. Whether you're debugging API responses, 
            working with configuration files, or learning JSON for the first time, our JSON Formatter tool makes the 
            process fast and easy. With instant validation, error detection, and one-click copying, you can work more 
            efficiently and catch errors before they become problems.
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Format Your JSON?</h3>
            <p className="text-white/90 mb-6">
              Try our free JSON Formatter tool now - no signup required!
            </p>
            <Link
              href="/json-formatter"
              className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:opacity-90 transition-all shadow-lg"
            >
              Use JSON Formatter →
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-2xl font-bold text-text-primary mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/api-testing-complete-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">🧪</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">Complete Guide to API Testing</h4>
              <p className="text-text-secondary text-sm">Learn how to test REST APIs effectively</p>
            </Link>
            <Link href="/blog/regex-tutorial" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">🔤</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">Regex Tutorial for Beginners</h4>
              <p className="text-text-secondary text-sm">Master regular expressions step by step</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
