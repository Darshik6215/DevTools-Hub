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
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
        
        {/* Tool Content */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
          {children}
        </div>
      </div>
    </div>
  )
}
