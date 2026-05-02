import ToolLayout from '@/components/ToolLayout'
import AdComponent from '@/components/AdComponent'
import GitignoreGenerator from '@/components/tools/GitignoreGenerator'
import Link from 'next/link'

export const metadata = {
  title: 'Free .gitignore Generator Online | Create Gitignore for Node, React, Python',
  description: 'Generate custom .gitignore files instantly for Node.js, React, Python, Java, PHP and more. Free online gitignore generator tool for developers.',
  keywords: ['gitignore generator', 'create gitignore file', 'ignore files git', 'online gitignore maker', 'git tools'],
}

export default function GitignoreGeneratorPage() {
  const faqs = [
    {
      question: 'What is a .gitignore file?',
      answer: 'A .gitignore file is a text file that tells Git which files or directories to ignore in a project. It is used to prevent sensitive information (like API keys), dependencies (like node_modules), and temporary build files from being tracked and committed to version control.'
    },
    {
      question: 'How do I use this .gitignore generator?',
      answer: 'Simply search for and select the technologies, frameworks, and operating systems you are using in your project. The tool will automatically generate a combined .gitignore file. You can then copy the content or download it directly as a .gitignore file.'
    },
    {
      question: 'Why should I remove duplicates in .gitignore?',
      answer: 'Removing duplicates keeps your .gitignore file clean, readable, and efficient. Our tool automatically handles this by merging multiple templates and ensuring each unique ignore rule only appears once.'
    },
    {
      question: 'Is it safe to use this online tool?',
      answer: 'Yes! Our tool runs entirely in your browser. We do not store or transmit any of your selections. Your privacy and security are our top priority.'
    }
  ]

  return (
    <ToolLayout
      title="Free Online .gitignore Generator"
      description="Create professional .gitignore files for your projects in seconds. Support for Node.js, Python, Java, VS Code, and more."
    >
      {/* Top Ad */}
      <div className="mb-10">
        <AdComponent size="leaderboard" />
      </div>

      {/* Tool Component */}
      <GitignoreGenerator />

      {/* Middle Ad */}
      <div className="my-12">
        <AdComponent size="rectangle" />
      </div>

      {/* SEO Content Section */}
      <div className="prose prose-lg max-w-none mt-16 reveal">
        <h2 className="text-3xl font-black mb-6 text-text-primary uppercase tracking-tight">What is a .gitignore file?</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          A <strong className="text-text-primary">.gitignore file</strong> is a crucial component of any Git repository. It is a simple text file located in the root directory of your project that explicitly tells Git which files or folders to ignore. By using a <strong>gitignore generator</strong>, you ensure that your repository remains clean, organized, and free from unnecessary or sensitive files.
        </p>
        <p className="text-text-secondary leading-relaxed mb-6">
          Without a properly configured .gitignore, you might accidentally commit large dependency folders, local configuration files containing secrets, or temporary build artifacts. This not only bloats your repository size but also poses significant security risks.
        </p>

        <h2 className="text-3xl font-black mb-6 mt-12 text-text-primary uppercase tracking-tight">How to Use the .gitignore Generator</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          Creating a custom ignore list has never been easier. Our <strong>create gitignore file</strong> tool is designed for speed and accuracy:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-text-secondary mb-8">
          <li>
            <strong className="text-text-primary">Select Your Tech Stack:</strong> Use the search bar or browse the list to find the technologies you are using (e.g., Node.js, Python, VS Code).
          </li>
          <li>
            <strong className="text-text-primary">Combine Multiple Templates:</strong> Select as many as you need. The tool will automatically merge them and remove any duplicate rules.
          </li>
          <li>
            <strong className="text-text-primary">Review the Output:</strong> The generated content appears instantly in the preview box.
          </li>
          <li>
            <strong className="text-text-primary">Copy or Download:</strong> Use the &quot;Copy&quot; button to quickly paste into an existing file, or &quot;Download&quot; to save a fresh .gitignore file to your computer.
          </li>
        </ol>

        <h2 className="text-3xl font-black mb-6 mt-12 text-text-primary uppercase tracking-tight">Why .gitignore is Important for Developers</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          When you <strong>ignore files git</strong> properly, you are following industry best practices. Here is why it matters:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-text-secondary mb-8">
          <li><strong className="text-text-primary">Security:</strong> Prevents committing .env files, API keys, and credentials.</li>
          <li><strong className="text-text-primary">Repository Health:</strong> Keeps the repo size small by excluding node_modules, venv, and build/dist folders.</li>
          <li><strong className="text-text-primary">Collaboration:</strong> Avoids &quot;merge noise&quot; caused by local IDE settings (like .vscode or .idea) that differ between team members.</li>
          <li><strong className="text-text-primary">Clarity:</strong> Makes it easier for other developers to see which files are part of the actual source code.</li>
        </ul>

        <h2 className="text-3xl font-black mb-6 mt-12 text-text-primary uppercase tracking-tight">Common Files to Ignore</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          While every project is unique, most developers need to <strong>create gitignore file</strong> rules for these common categories:
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card-bg p-6 rounded-2xl border border-border">
            <h4 className="font-bold text-primary mb-3 uppercase tracking-wider text-sm">📦 Dependencies</h4>
            <p className="text-sm text-text-secondary">node_modules/, vendor/, venv/, .pypackages/</p>
          </div>
          <div className="bg-card-bg p-6 rounded-2xl border border-border">
            <h4 className="font-bold text-accent mb-3 uppercase tracking-wider text-sm">🏗️ Build Outputs</h4>
            <p className="text-sm text-text-secondary">dist/, build/, out/, .next/, *.exe, *.dll</p>
          </div>
          <div className="bg-card-bg p-6 rounded-2xl border border-border">
            <h4 className="font-bold text-green-500 mb-3 uppercase tracking-wider text-sm">🔒 Environment</h4>
            <p className="text-sm text-text-secondary">.env, .env.local, config.py, secrets.json</p>
          </div>
          <div className="bg-card-bg p-6 rounded-2xl border border-border">
            <h4 className="font-bold text-orange-500 mb-3 uppercase tracking-wider text-sm">💻 OS & IDE</h4>
            <p className="text-sm text-text-secondary">.DS_Store, Thumbs.db, .vscode/, .idea/</p>
          </div>
        </div>

        {/* Internal Links Section */}
        <div className="mt-16 p-10 bg-bg-secondary rounded-[2.5rem] border border-border reveal shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full"></div>
          <h3 className="text-2xl font-black mb-8 text-text-primary uppercase tracking-tight">Boost Your DevOps Workflow</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/dockerfile-generator" className="group block p-6 bg-card-bg rounded-2xl border border-border hover:border-primary transition-all hover:-translate-y-2">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🐳</div>
              <h4 className="font-bold text-text-primary group-hover:text-primary mb-2">Dockerfile Generator</h4>
              <p className="text-xs text-text-secondary leading-relaxed">Create optimized Docker configurations for any language.</p>
            </Link>
            <Link href="/env-generator-validator" className="group block p-6 bg-card-bg rounded-2xl border border-border hover:border-primary transition-all hover:-translate-y-2">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🛠️</div>
              <h4 className="font-bold text-text-primary group-hover:text-primary mb-2">.env Generator</h4>
              <p className="text-xs text-text-secondary leading-relaxed">Generate and validate secure environment variables.</p>
            </Link>
            <Link href="/code-formatter" className="group block p-6 bg-card-bg rounded-2xl border border-border hover:border-primary transition-all hover:-translate-y-2">
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
              <h4 className="font-bold text-text-primary group-hover:text-primary mb-2">Code Formatter</h4>
              <p className="text-xs text-text-secondary leading-relaxed">Beautify and minify your code instantly.</p>
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-20 reveal">
        <h2 className="text-4xl font-black mb-12 text-center text-text-primary tracking-tight">Common Questions</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card-bg p-8 rounded-3xl border border-border hover:border-primary/50 transition-all group shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-text-primary group-hover:text-primary transition-colors flex items-start gap-3">
                <span className="text-primary">Q:</span> {faq.question}
              </h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Ad */}
      <div className="mt-20">
        <AdComponent size="leaderboard" />
      </div>
    </ToolLayout>
  )
}
