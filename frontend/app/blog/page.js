import Link from 'next/link'
import AdComponent from '@/components/AdComponent'

// SEO metadata for blog page
export const metadata = {
  title: 'Blog - Developer Tips & Tutorials',
  description: 'Read our latest articles about JSON formatting, password security, image optimization, and web development best practices.',
  keywords: ['developer blog', 'web development', 'JSON tutorial', 'password security', 'image optimization'],
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'How to Fix Common JSON Errors',
      slug: 'how-to-fix-json-errors',
      excerpt: 'Learn how to identify and fix the most common JSON syntax errors quickly. This comprehensive guide covers missing commas, trailing commas, incorrect quotes, and more.',
      date: '2024-01-15',
      category: 'JSON',
      readTime: '5 min read',
      image: '📋'
    },
    {
      title: 'Best Password Security Practices in 2024',
      slug: 'password-security-practices',
      excerpt: 'Discover the latest password security best practices to protect your accounts. Learn about password managers, two-factor authentication, and creating strong passwords.',
      date: '2024-01-10',
      category: 'Security',
      readTime: '7 min read',
      image: '🔐'
    },
    {
      title: 'Convert Images Without Losing Quality',
      slug: 'convert-images-without-losing-quality',
      excerpt: 'Complete guide to converting images while maintaining optimal quality. Understand different image formats, compression techniques, and when to use each format.',
      date: '2024-01-05',
      category: 'Images',
      readTime: '6 min read',
      image: '🖼️'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Developer Blog
            </h1>
            <p className="text-xl text-gray-600">
              Tips, tutorials, and best practices for web developers
            </p>
          </div>
        </div>
      </section>

      {/* Ad Placement */}
      <div className="container mx-auto px-4 py-6">
        <AdComponent size="banner" />
      </div>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-6xl mb-4 text-center">{post.image}</div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Try Our Free Tools</h2>
          <p className="text-xl text-gray-600 mb-8">
            Format JSON, generate passwords, and convert images instantly
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/json-formatter"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              JSON Formatter
            </Link>
            <Link
              href="/password-generator"
              className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Password Generator
            </Link>
            <Link
              href="/image-converter"
              className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Image Converter
            </Link>
          </div>
        </div>
      </section>

      {/* Ad Placement */}
      <div className="container mx-auto px-4 py-6">
        <AdComponent size="banner" />
      </div>
    </div>
  )
}
