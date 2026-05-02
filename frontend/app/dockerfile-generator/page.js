import ToolLayout from '@/components/ToolLayout'
import DockerfileGenerator from '@/components/tools/DockerfileGenerator'
import AdComponent from '@/components/AdComponent'
import Link from 'next/link'

export const metadata = {
  title: 'Free Dockerfile Generator Online | Create Dockerfile for Node.js, Python, PHP',
  description: 'Generate Dockerfiles instantly for Node.js, Python, PHP, and more. Free online Dockerfile generator with ready-to-use templates.',
  keywords: ['dockerfile generator', 'docker generator', 'create dockerfile', 'online docker tools', 'node.js dockerfile', 'python dockerfile'],
}

export default function DockerfileGeneratorPage() {
  return (
    <ToolLayout
      title="Dockerfile Generator"
      description="Instantly generate optimized Dockerfiles for your favorite programming languages and frameworks."
    >
      {/* Top Ad Space */}
      <div className="mb-8">
        <AdComponent size="leaderboard" />
      </div>

      <DockerfileGenerator />

      {/* Middle Ad Space */}
      <div className="my-12">
        <AdComponent size="rectangle" />
      </div>

      {/* SEO Content Section */}
      <div className="mt-16 prose prose-invert max-w-none">
        <div className="bg-bg-secondary rounded-2xl p-8 border border-border">
          <h2 className="text-3xl font-bold text-text-primary mb-6">What is a Dockerfile?</h2>
          <p className="text-text-secondary mb-4 leading-relaxed">
            A <strong>Dockerfile</strong> is a text document that contains all the commands a user could call on the command line to assemble an image. 
            Using <code>docker build</code>, users can create an automated build that executes several command-line instructions in succession. 
            It's the blueprint for your containers, ensuring that your application runs identically regardless of the environment it's deployed in.
          </p>
          <p className="text-text-secondary mb-6 leading-relaxed">
            In modern DevOps workflows, Dockerfiles are essential for containerization, allowing developers to package their applications 
            with all necessary dependencies, libraries, and configurations.
          </p>

          <h2 className="text-3xl font-bold text-text-primary mb-6">How to Use Dockerfile Generator</h2>
          <p className="text-text-secondary mb-4 leading-relaxed">
            Our tool makes creating Dockerfiles easy. Simply follow these steps:
          </p>
          <ul className="text-text-secondary space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">1.</span>
              <span><strong>Select Language:</strong> Choose your programming language (Node.js, Python, PHP, or Java).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">2.</span>
              <span><strong>Pick Framework:</strong> Select the specific framework or build tool you are using.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">3.</span>
              <span><strong>Configure Port:</strong> Specify the port your application listens on (default is 3000).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">4.</span>
              <span><strong>Download or Copy:</strong> Once generated, you can copy the content or download it directly as a <code>Dockerfile</code>.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-text-primary mb-6">Benefits of Using This Tool</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-card-bg rounded-xl border border-border">
              <h4 className="text-xl font-bold text-primary mb-2">🚀 Speed Up Development</h4>
              <p className="text-text-secondary text-sm">Don't waste time writing boilerplate Dockerfiles. Get a production-ready file in seconds.</p>
            </div>
            <div className="p-6 bg-card-bg rounded-xl border border-border">
              <h4 className="text-xl font-bold text-accent mb-2">🛡️ Best Practices</h4>
              <p className="text-text-secondary text-sm">Our templates use official images and optimized build stages for smaller image sizes.</p>
            </div>
            <div className="p-6 bg-card-bg rounded-xl border border-border">
              <h4 className="text-xl font-bold text-green-500 mb-2">🔄 Consistency</h4>
              <p className="text-text-secondary text-sm">Ensure all your projects follow a standardized Docker configuration.</p>
            </div>
            <div className="p-6 bg-card-bg rounded-xl border border-border">
              <h4 className="text-xl font-bold text-yellow-500 mb-2">📱 No Install Needed</h4>
              <p className="text-text-secondary text-sm">Entirely web-based tool. Generate Dockerfiles from any device instantly.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-text-primary mb-4">Why Containerization Matters</h3>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Containerization has revolutionized the way we build, ship, and run applications. By isolating the application and its dependencies 
            into a single image, you eliminate the "it works on my machine" problem. Docker containers are lightweight, portable, and secure, 
            making them the standard for cloud-native development and microservices architectures.
          </p>

          <h3 className="text-2xl font-bold text-text-primary mb-4">Internal Links & Resources</h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/json-formatter" className="text-primary hover:underline">→ JSON Formatter</Link>
            <Link href="/api-tester" className="text-primary hover:underline">→ API Tester</Link>
            <Link href="/blog" className="text-primary hover:underline">→ Developer Blog</Link>
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
