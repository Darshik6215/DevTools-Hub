import ToolLayout from '@/components/ToolLayout'
import EnvTool from '@/components/tools/EnvTool'
import AdComponent from '@/components/AdComponent'
import Link from 'next/link'

export const metadata = {
  title: 'Free .env Generator & Validator Online | Create and Validate Environment Files',
  description: 'Generate and validate .env files online. Check syntax errors, duplicate keys, and create environment variables easily for your projects.',
  keywords: ['env generator', 'env validator', 'environment variables tool', 'dotenv generator', 'validate .env file'],
}

export default function EnvGeneratorValidatorPage() {
  return (
    <ToolLayout
      title=".env Generator & Validator"
      description="Create optimized environment files and validate them for syntax errors or duplicates instantly."
    >
      {/* Top Ad Space */}
      <div className="mb-8">
        <AdComponent size="leaderboard" />
      </div>

      <EnvTool />

      {/* Middle Ad Space */}
      <div className="my-12">
        <AdComponent size="rectangle" />
      </div>

      {/* SEO Content Section */}
      <div className="mt-16 prose prose-invert max-w-none">
        <div className="bg-bg-secondary rounded-2xl p-8 border border-border">
          <h2 className="text-3xl font-bold text-text-primary mb-6">What is a .env File?</h2>
          <p className="text-text-secondary mb-4 leading-relaxed">
            A <strong>.env file</strong> (or environment file) is a simple text file used to store configuration variables for your application. 
            It follows a simple <code>KEY=VALUE</code> format. These variables are often sensitive data like API keys, database credentials, 
            or environment-specific settings (like <code>PORT</code> or <code>NODE_ENV</code>).
          </p>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Using environment files is a best practice in modern software development. It allows you to keep your code separate from your 
            configuration, making it easier to deploy the same code to different environments (development, staging, production) without modification.
          </p>

          <h2 className="text-3xl font-bold text-text-primary mb-6">How to Use This Tool</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-primary italic">Mode 1: Generate</h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                Use the "Generate" tab to build a new .env file from scratch. Simply add your keys and values, and we'll format them 
                correctly. You can then download the result as a <code>.env</code> file or copy it to your clipboard.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-accent italic">Mode 2: Validate</h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                Have an existing .env file that isn't working? Paste it into the "Validate" tab. Our tool will automatically check 
                for common errors like missing equals signs, spaces in key names, or duplicate keys that might cause bugs in your app.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-6">Common Mistakes in .env Files</h2>
          <p className="text-text-secondary mb-4">Avoid these frequent errors to ensure your application loads configurations correctly:</p>
          <ul className="text-text-secondary space-y-3 mb-8 list-disc list-inside">
            <li><strong>Spaces around the "=" sign:</strong> Most libraries expect <code>KEY=VALUE</code>, not <code>KEY = VALUE</code>.</li>
            <li><strong>Spaces in Key Names:</strong> Keys should be alphanumeric and underscores (e.g., <code>DB_PASS</code>).</li>
            <li><strong>Duplicate Keys:</strong> If a key is defined twice, the second one usually overrides the first, leading to confusion.</li>
            <li><strong>Missing Quotes for Strings with Spaces:</strong> If your value contains spaces, it's safer to wrap it in quotes.</li>
            <li><strong>Commiting .env to Git:</strong> Always add <code>.env</code> to your <code>.gitignore</code> to protect secrets.</li>
          </ul>

          <h2 className="text-3xl font-bold text-text-primary mb-6">Benefits of Using This Tool</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-text-secondary mb-8">
            <li className="flex items-center gap-2 p-3 bg-card-bg rounded-lg border border-border">
              <span className="text-green-400">✓</span> No installation required
            </li>
            <li className="flex items-center gap-2 p-3 bg-card-bg rounded-lg border border-border">
              <span className="text-green-400">✓</span> Fully client-side (your secrets stay private)
            </li>
            <li className="flex items-center gap-2 p-3 bg-card-bg rounded-lg border border-border">
              <span className="text-green-400">✓</span> Real-time validation feedback
            </li>
            <li className="flex items-center gap-2 p-3 bg-card-bg rounded-lg border border-border">
              <span className="text-green-400">✓</span> One-click download as .env
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-text-primary mb-4">Internal Links</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/dockerfile-generator" className="text-primary hover:underline">→ Dockerfile Generator</Link>
            <Link href="/json-formatter" className="text-primary hover:underline">→ JSON Formatter</Link>
            <Link href="/api-tester" className="text-primary hover:underline">→ API Tools</Link>
          </div>
        </div>
      </div>

      {/* Bottom Ad Space */}
      <div className="mt-12">
        <AdComponent size="leaderboard" />
      </div>
    </ToolLayout>
  )
}
