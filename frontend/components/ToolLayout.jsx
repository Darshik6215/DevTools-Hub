/**
 * ToolLayout Component
 * Reusable layout wrapper for tool pages
 * Provides consistent styling and structure
 */
export default function ToolLayout({ title, description, children }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-8 text-center reveal">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent py-2">
            {title}
          </h1>
          <p className="text-text-secondary text-lg">{description}</p>
        </div>
        
        {/* Tool Content */}
        <div className="bg-card-bg rounded-xl shadow-lg p-6 md:p-8 border border-border reveal reveal-delay-1">
          {children}
        </div>
      </div>
    </div>
  )
}
