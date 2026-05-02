import Link from 'next/link'

export const metadata = {
  title: 'Mastering .env Files - Generator & Validator Guide | DevTools Hub',
  description: 'Learn why .env files are crucial for application security and how to use our generator and validator to avoid common configuration errors.',
  keywords: ['env file guide', 'dotenv tutorial', 'environment variables best practices', 'env validator', 'env generator'],
}

export default function EnvGeneratorGuidePage() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="text-sm text-text-secondary mb-4 uppercase tracking-widest font-bold">
            Published on May 3, 2024 • 8 min read
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Mastering <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">.env Files</span>
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Everything you need to know about managing environment variables securely and efficiently in your modern web applications.
          </p>
        </header>

        {/* Featured Image placeholder */}
        <div className="mb-12 bg-gradient-to-br from-primary/10 via-bg-secondary to-accent/10 rounded-3xl p-16 border border-border shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
          <div className="relative z-10 text-9xl transform group-hover:scale-110 transition-transform duration-500 text-center">🛠️</div>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Why .env Files are Crucial</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            In the early days of web development, configuration settings were often hardcoded directly into the application code. 
            However, this practice is highly insecure and inflexible. <strong>.env files</strong> solve this by separating 
            configuration from code.
          </p>

          <h3 className="text-2xl font-bold text-text-primary mb-4">Top 3 Reasons to Use .env:</h3>
          <ul className="text-text-secondary space-y-3 mb-8">
            <li>🔒 <strong className="text-text-primary">Security:</strong> Keep sensitive keys and passwords out of your source control (Git).</li>
            <li>🔄 <strong className="text-text-primary">Environment Agility:</strong> Switch between dev, staging, and production by simply swapping the .env file.</li>
            <li>🤝 <strong className="text-text-primary">Team Collaboration:</strong> Each developer can have their own local settings without affecting others.</li>
          </ul>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Common .env Syntax Errors</h2>
          <p className="text-text-secondary mb-4 leading-relaxed">
            Even experienced developers make mistakes when editing environment files manually. Here are the most common issues our 
            <Link href="/env-generator-validator" className="text-primary hover:underline"> validator tool</Link> catches:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-bg-secondary rounded-xl border border-border">
              <h4 className="font-bold text-red-400 mb-2">❌ Spaces in Keys</h4>
              <p className="text-sm text-text-secondary"><code>API KEY=123</code> is invalid. Use <code>API_KEY=123</code> instead.</p>
            </div>
            <div className="p-4 bg-bg-secondary rounded-xl border border-border">
              <h4 className="font-bold text-red-400 mb-2">❌ Missing Equals Sign</h4>
              <p className="text-sm text-text-secondary"><code>PORT 3000</code> will not be parsed. Use <code>PORT=3000</code>.</p>
            </div>
            <div className="p-4 bg-bg-secondary rounded-xl border border-border">
              <h4 className="font-bold text-red-400 mb-2">❌ Duplicate Keys</h4>
              <p className="text-sm text-text-secondary">Defining <code>DB_URL</code> twice causes unpredictable behavior.</p>
            </div>
            <div className="p-4 bg-bg-secondary rounded-xl border border-border">
              <h4 className="font-bold text-red-400 mb-2">❌ Unquoted Values with Spaces</h4>
              <p className="text-sm text-text-secondary">Values with spaces should be wrapped: <code>NAME="My App"</code>.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Dynamic Database URL Generator</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            One of the most complex variables to get right is the <code>DATABASE_URL</code>. Different databases use different 
            formats (e.g., MongoDB uses <code>mongodb://</code> while PostgreSQL uses <code>postgresql://</code>). 
            Our tool now includes a **Database URL Helper** that generates these strings for you based on:
          </p>
          <ul className="grid md:grid-cols-2 gap-4 text-text-secondary mb-8">
            <li className="flex items-center gap-2 p-3 bg-bg-secondary rounded-lg border border-border">
              🗄️ MongoDB, MySQL, PostgreSQL
            </li>
            <li className="flex items-center gap-2 p-3 bg-bg-secondary rounded-lg border border-border">
              🗄️ Redis & SQLite support
            </li>
            <li className="flex items-center gap-2 p-3 bg-bg-secondary rounded-lg border border-border">
              ⚡ Real-time URL preview
            </li>
            <li className="flex items-center gap-2 p-3 bg-bg-secondary rounded-lg border border-border">
              🔗 One-click apply to .env
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Security Best Practices</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Storing secrets is a big responsibility. Here is how to do it safely:
          </p>
          <ol className="text-text-secondary space-y-4 list-decimal list-inside mb-12">
            <li><strong>Always .gitignore:</strong> Never, ever commit your <code>.env</code> file to Git. Only commit a <code>.env.example</code> with dummy values.</li>
            <li><strong>Use Secret Management:</strong> For production, use services like AWS Secrets Manager, Vercel Environment Variables, or HashiCorp Vault.</li>
            <li><strong>Minimal Permissions:</strong> Only give your application the variables it absolutely needs to run.</li>
          </ol>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Conclusion</h2>
          <p className="text-text-secondary mb-12 leading-relaxed">
            Managing environment variables correctly is a hallmark of a professional developer. By using our 
            <Link href="/env-generator-validator" className="text-primary hover:underline"> .env Generator & Validator</Link>, 
            you can save time and prevent frustrating configuration bugs.
          </p>
        </div>

        {/* Footer Navigation */}
        <footer className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/blog" className="text-primary hover:underline flex items-center gap-2 font-bold">
            ← Back to Blog
          </Link>
          <Link href="/env-generator-validator" className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20">
            Try .env Generator
          </Link>
        </footer>
      </article>
    </div>
  )
}
