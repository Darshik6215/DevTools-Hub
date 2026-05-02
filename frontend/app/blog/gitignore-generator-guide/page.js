import Link from 'next/link'

export const metadata = {
  title: 'Complete Guide to .gitignore Generator - Best Practices for Git | DevTools Hub',
  description: 'Learn how to use our .gitignore generator to keep your repositories clean and secure. Complete guide on Git ignore rules, patterns, and best practices.',
  keywords: ['gitignore generator', 'git ignore guide', 'gitignore patterns', 'git best practices', 'ignore files git'],
}

export default function GitignoreGeneratorGuidePage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen bg-bg-primary">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <div className="text-sm text-text-secondary mb-4">
            Published on {currentDate} • 10 min read
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Complete Guide to .gitignore Generator: Best Practices for Git
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Master .gitignore patterns and keep your Git repositories clean, secure, and professional. Learn how to use our generator to automate your workflow.
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-12 text-center">
          <div className="text-8xl mb-4">📄</div>
          <p className="text-text-secondary">.gitignore Generator Tool</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">What is a .gitignore File?</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            A <strong className="text-text-primary">.gitignore file</strong> is a text file that tells Git which files or directories to ignore in a project. 
            It's a fundamental part of version control that prevents unnecessary, temporary, or sensitive files from being tracked and committed to your repository.
          </p>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Why You Need a .gitignore Generator</h2>
          <p className="text-text-secondary mb-4 leading-relaxed">
            Manually creating a .gitignore file for every project is tedious and error-prone. Different frameworks, languages, and operating systems 
            have different files that should be ignored. A generator simplifies this by:
          </p>
          <ul className="text-text-secondary space-y-2 mb-6">
            <li>✅ <strong className="text-text-primary">Standardization:</strong> Using industry-standard templates for Node.js, Python, Java, etc.</li>
            <li>✅ <strong className="text-text-primary">Security:</strong> Automatically including common sensitive files like <code className="text-accent">.env</code> or <code className="text-accent">secrets.json</code>.</li>
            <li>✅ <strong className="text-text-primary">Clean Repositories:</strong> Keeping your commit history free from <code className="text-accent">node_modules/</code> or build artifacts.</li>
            <li>✅ <strong className="text-text-primary">Collaboration:</strong> Ensuring all team members ignore the same OS-specific files (like <code className="text-accent">.DS_Store</code>).</li>
          </ul>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Common .gitignore Patterns</h2>
          
          <h3 className="text-2xl font-bold text-text-primary mb-3 mt-8">1. Ignoring Directories</h3>
          <p className="text-text-secondary mb-4">
            To ignore an entire directory and its contents, simply add the directory name followed by a slash:
          </p>
          <div className="bg-bg-secondary border border-border rounded-lg p-4 mb-6 font-mono text-sm">
            node_modules/<br />
            dist/<br />
            build/
          </div>

          <h3 className="text-2xl font-bold text-text-primary mb-3 mt-8">2. Ignoring Specific File Extensions</h3>
          <p className="text-text-secondary mb-4">
            Use the asterisk (*) wildcard to ignore all files with a specific extension:
          </p>
          <div className="bg-bg-secondary border border-border rounded-lg p-4 mb-6 font-mono text-sm">
            *.log<br />
            *.tmp<br />
            *.exe
          </div>

          <h3 className="text-2xl font-bold text-text-primary mb-3 mt-8">3. Exceptions (Negation)</h3>
          <p className="text-text-secondary mb-4">
            Use the exclamation mark (!) to create an exception to an ignore rule:
          </p>
          <div className="bg-bg-secondary border border-border rounded-lg p-4 mb-6 font-mono text-sm">
            # Ignore all .log files<br />
            *.log<br />
            # But keep important.log<br />
            !important.log
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Best Practices for .gitignore</h2>
          <div className="bg-card-bg border border-border rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-text-primary mb-3">1. Commit Early</h3>
            <p className="text-text-secondary">
              Create and commit your .gitignore file as the very first step in your project. This prevents unwanted files from ever entering your Git index.
            </p>
          </div>

          <div className="bg-card-bg border border-border rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-text-primary mb-3">2. Never Ignore Your .gitignore</h3>
            <p className="text-text-secondary">
              It might sound obvious, but the .gitignore file itself should always be tracked so that every collaborator uses the same rules.
            </p>
          </div>

          <div className="bg-card-bg border border-border rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-text-primary mb-3">3. Use Global Ignores for OS Files</h3>
            <p className="text-text-secondary">
              Personal IDE settings or OS files (like .DS_Store) can be ignored globally on your machine using <code className="text-primary">git config --global core.excludesfile</code>.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">How to Use Our .gitignore Generator</h2>
          <ol className="text-text-secondary space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">1.</span>
              <span><strong className="text-text-primary">Search Technologies:</strong> Type your stack (e.g., "Node", "React", "Python") in the search box.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">2.</span>
              <span><strong className="text-text-primary">Select Templates:</strong> Click on the technologies you're using. Our tool will merge them instantly.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">3.</span>
              <span><strong className="text-text-primary">Clean Output:</strong> The tool automatically removes duplicate rules and organizes the file for you.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-primary text-xl">4.</span>
              <span><strong className="text-text-primary">Copy or Download:</strong> Copy the text to your clipboard or download the generated .gitignore file.</span>
            </li>
          </ol>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">What to Do if You Already Committed Ignored Files?</h2>
          <p className="text-text-secondary mb-4 leading-relaxed">
            If you've accidentally committed files that should have been ignored, adding them to .gitignore won't remove them from Git history. 
            You need to untrack them manually:
          </p>
          <div className="bg-bg-secondary border border-border rounded-lg p-6 mb-6">
            <p className="text-sm font-bold text-text-primary mb-2">Run these commands in your terminal:</p>
            <pre className="text-primary font-mono text-sm overflow-x-auto">
{`# 1. Remove the files from the index (keeps them locally)
git rm -r --cached .

# 2. Add everything back (this time following .gitignore)
git add .

# 3. Commit the change
git commit -m "Clean up untracked files"`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Conclusion</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            A well-maintained .gitignore file is the hallmark of a professional developer. It protects your secrets, 
            optimizes your repository size, and makes collaboration smoother. Our .gitignore Generator is designed 
            to make this process effortless, allowing you to focus on writing code instead of managing config files.
          </p>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Create Your .gitignore?</h3>
            <p className="text-white/90 mb-6">
              Use our free tool to generate a professional .gitignore file for any technology stack.
            </p>
            <Link
              href="/gitignore-generator"
              className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:opacity-90 transition-all shadow-lg"
            >
              Use .gitignore Generator →
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 border-t border-border pt-12">
          <h3 className="text-2xl font-bold text-text-primary mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/dockerfile-generator-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">🐳</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">Dockerfile Generator Guide</h4>
              <p className="text-text-secondary text-sm">Learn how to containerize your applications effectively</p>
            </Link>
            <Link href="/blog/env-generator-guide" className="block bg-card-bg rounded-xl p-6 border border-border hover:border-primary transition-colors">
              <div className="text-3xl mb-3">🛠️</div>
              <h4 className="text-lg font-bold text-text-primary mb-2">Mastering .env Files</h4>
              <p className="text-text-secondary text-sm">Security best practices for environment variables</p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
