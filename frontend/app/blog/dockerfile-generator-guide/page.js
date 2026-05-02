import Link from 'next/link'

export const metadata = {
  title: 'Complete Guide to Dockerfile Generator - Containerize Your Apps | DevTools Hub',
  description: 'Learn how to generate optimized Dockerfiles for Node.js, Python, PHP, and Java. Complete guide covering Docker basics, multi-stage builds, and best practices.',
  keywords: ['dockerfile generator', 'docker guide', 'docker tutorial', 'containerization', 'devops'],
}

export default function DockerfileGeneratorGuidePage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="text-sm text-text-secondary mb-4 uppercase tracking-widest font-bold">
            Published on May 2, 2024 • 10 min read
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-text-primary mb-6 leading-tight">
            Complete Guide to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Dockerfile Generator</span>
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
            Master the art of containerization. Learn how to generate production-ready Dockerfiles for any environment and language.
          </p>
        </header>

        {/* Featured Image placeholder */}
        <div className="mb-12 bg-gradient-to-br from-primary/10 via-bg-secondary to-accent/10 rounded-3xl p-16 border border-border shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
          <div className="relative z-10 text-9xl transform group-hover:scale-110 transition-transform duration-500 text-center">🐳</div>
          <div className="text-center mt-8 relative z-10">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-bold border border-primary/20">
               Official Guide
             </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Why Docker Matters?</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Docker has transformed the way we develop and deploy applications. By packaging code, runtime, system tools, system libraries, 
            and settings into a single container, you ensure that your application runs the same way every time, regardless of where it's deployed.
          </p>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">The Power of Dockerfiles</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            A Dockerfile is essentially the "recipe" for your container image. It specifies the base image, environment variables, 
            dependencies, and the command to start your application. However, writing a perfect Dockerfile can be tricky, 
            especially when considering security and image size optimization.
          </p>

          <div className="bg-bg-secondary rounded-2xl p-8 border border-border mb-12">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Common Dockerfile Instructions</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <code className="text-primary bg-primary/10 px-2 py-1 rounded font-bold">FROM</code>
                <span className="text-text-secondary">Specifies the base image to build from. Always use official, minimal images like <code>alpine</code> or <code>slim</code>.</span>
              </li>
              <li className="flex items-start gap-3">
                <code className="text-primary bg-primary/10 px-2 py-1 rounded font-bold">WORKDIR</code>
                <span className="text-text-secondary">Sets the working directory for subsequent instructions.</span>
              </li>
              <li className="flex items-start gap-3">
                <code className="text-primary bg-primary/10 px-2 py-1 rounded font-bold">COPY</code>
                <span className="text-text-secondary">Copies files from the host machine to the container filesystem.</span>
              </li>
              <li className="flex items-start gap-3">
                <code className="text-primary bg-primary/10 px-2 py-1 rounded font-bold">RUN</code>
                <span className="text-text-secondary">Executes commands during the image build process.</span>
              </li>
              <li className="flex items-start gap-3">
                <code className="text-primary bg-primary/10 px-2 py-1 rounded font-bold">EXPOSE</code>
                <span className="text-text-secondary">Informs Docker that the container listens on the specified network ports at runtime.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Using our Dockerfile Generator</h2>
          <p className="text-text-secondary mb-6 leading-relaxed">
            Our <Link href="/dockerfile-generator" className="text-primary hover:underline">Dockerfile Generator tool</Link> is designed 
            to help you get started in seconds. Whether you are using Node.js, Python, or PHP, we provide optimized templates 
            that follow industry best practices.
          </p>

          <h3 className="text-2xl font-bold text-text-primary mb-4 mt-8">Best Practices for Small Images</h3>
          <ul className="text-text-secondary space-y-3 mb-8">
            <li>✅ Use <strong>Multi-stage builds</strong> to separate the build environment from the production environment.</li>
            <li>✅ Minimize the number of layers by combining commands where possible.</li>
            <li>✅ Always include a <code>.dockerignore</code> file to exclude unnecessary files like <code>node_modules</code> or <code>.git</code>.</li>
            <li>✅ Use <code>USER</code> instruction to run as a non-root user for better security.</li>
          </ul>

          <h2 className="text-3xl font-bold text-text-primary mb-4 mt-12">Conclusion</h2>
          <p className="text-text-secondary mb-12 leading-relaxed">
            Containerization is no longer a luxury; it's a necessity for modern web applications. By mastering Dockerfiles, 
            you take full control of your deployment pipeline.
          </p>
        </div>

        {/* Footer Navigation */}
        <footer className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/blog" className="text-primary hover:underline flex items-center gap-2 font-bold">
            ← Back to Blog
          </Link>
          <div className="flex gap-4">
             <Link href="/dockerfile-generator" className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20">
               Try Dockerfile Generator
             </Link>
          </div>
        </footer>
      </article>
    </div>
  )
}
