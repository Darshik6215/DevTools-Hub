'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import AdComponent from '@/components/AdComponent'

export default function BlogClient({ posts }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Extract categories and counts
  const categoryData = useMemo(() => {
    const counts = posts.reduce((acc, post) => {
      acc[post.category] = (acc[post.category] || 0) + 1
      return acc
    }, {})
    
    return [
      { name: 'All', count: posts.length },
      ...Object.entries(counts).map(([name, count]) => ({ name, count }))
    ]
  }, [posts])

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [posts, activeCategory, searchQuery])

  const featuredPost = filteredPosts[0]
  const remainingPosts = filteredPosts.slice(1)

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      {/* Hero Section */}
      <section className="bg-bg-primary py-12 md:py-16 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[60%] bg-primary rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] bg-accent rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent uppercase tracking-tighter">
            Developer Blog
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto font-medium">
            Master the latest tools and techniques in modern web development.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar - Categories */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-8 space-y-8">
              {/* Search Bar */}
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-card-bg border border-border rounded-xl px-10 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-primary transition-colors">🔍</span>
              </div>

              {/* Category List */}
              <div className="bg-card-bg border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-border bg-bg-secondary/50">
                  <h3 className="font-bold text-sm uppercase tracking-widest text-text-primary">Categories</h3>
                </div>
                <div className="p-2 space-y-1">
                  {categoryData.map(cat => (
                    <button
                      key={cat.name}
                      onClick={() => setActiveCategory(cat.name)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                        activeCategory === cat.name
                          ? 'bg-primary text-white shadow-md shadow-primary/20'
                          : 'text-text-secondary hover:bg-bg-secondary hover:text-primary'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                        activeCategory === cat.name ? 'bg-white/20' : 'bg-bg-secondary'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Ad Space */}
              <div className="hidden lg:block">
                <AdComponent size="rectangle" />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Featured Post - Only shown on 'All' and no search */}
            {featuredPost && activeCategory === 'All' && searchQuery === '' && (
              <div className="mb-12 group">
                <div className="bg-card-bg rounded-3xl overflow-hidden border border-border shadow-xl hover:border-primary/30 transition-all lg:flex h-full">
                  <div className="lg:w-1/2 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-8 text-[12rem] transition-transform duration-700 group-hover:scale-105">
                    {featuredPost.image}
                  </div>
                  <div className="lg:w-1/2 p-8 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-primary text-white text-[10px] font-black rounded-full uppercase">Featured</span>
                      <span className="text-xs text-text-secondary font-bold">{featuredPost.readTime}</span>
                    </div>
                    <h2 className="text-3xl font-black mb-4 group-hover:text-primary transition-colors leading-tight">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>
                    <p className="text-text-secondary mb-6 line-clamp-3 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">{featuredPost.category}</span>
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                      >
                        Read More <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {(activeCategory !== 'All' || searchQuery !== '' ? filteredPosts : remainingPosts).map((post) => (
                <article
                  key={post.slug}
                  className="bg-card-bg rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all group flex flex-col"
                >
                  <div className="p-6">
                    <div className="text-6xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-500">{post.image}</div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 bg-bg-secondary text-text-secondary text-[10px] font-bold rounded-md uppercase">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-text-secondary">{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 h-14">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-text-secondary text-xs mb-6 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-4 border-t border-border flex items-center justify-end">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Read More <span>→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="py-20 text-center bg-card-bg rounded-3xl border border-dashed border-border">
                <div className="text-5xl mb-4">🏜️</div>
                <h3 className="text-xl font-bold text-text-primary">No articles found</h3>
                <p className="text-sm text-text-secondary mt-1">Try a different search or category.</p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer CTA */}
      <section className="bg-bg-secondary py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4">Start Building Today</h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto font-medium">
            Explore our collection of premium developer tools designed to make your life easier.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="px-10 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-all">
              All Tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
