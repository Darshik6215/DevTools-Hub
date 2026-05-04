import BlogClient from './BlogClient'

// SEO metadata for blog page
export const metadata = {
  title: 'Blog - Developer Tips & Articles | DevTools Hub',
  description: 'Read our latest articles about JSON formatting, password security, image optimization, and web development best practices.',
  keywords: ['developer blog', 'web development', 'JSON tutorial', 'password security', 'image optimization'],
}

const blogPosts = [
  {
    title: 'Complete Guide to Dockerfile Generator - Containerize Your Apps',
    slug: 'dockerfile-generator-guide',
    excerpt: 'Learn how to generate optimized Dockerfiles for Node.js, Python, PHP, and Java. Complete guide covering Docker basics, multi-stage builds, and best practices.',
    date: '2024-05-02',
    category: 'API & Testing',
    readTime: '10 min read',
    image: '🐳'
  },
  {
    title: 'JWT Authentication Guide - How JSON Web Tokens Work',
    slug: 'jwt-authentication-guide',
    excerpt: 'Understand JWT authentication, its structure (Header, Payload, Signature), and how to use tokens securely in your web applications.',
    date: '2024-03-15',
    category: 'Security',
    readTime: '12 min read',
    image: '🔑'
  },
  {
    title: 'Complete Guide to Hash Functions - MD5, SHA-1, SHA-256',
    slug: 'hash-functions-guide',
    excerpt: 'Understand cryptographic hash functions. Learn about MD5, SHA-1, SHA-256, their differences, and why hashing is NOT encryption.',
    date: '2024-04-10',
    category: 'Security',
    readTime: '10 min read',
    image: '🔒'
  },
  {
    title: 'Regex Tutorial for Beginners - Master Regular Expressions',
    slug: 'regex-tutorial',
    excerpt: 'Master Regular Expressions (Regex) with our beginner-friendly tutorial. Learn syntax, patterns, and how to test your regex patterns online.',
    date: '2024-02-10',
    category: 'Code Tools',
    readTime: '15 min read',
    image: '🔤'
  },
  {
    title: 'Unix Timestamp Guide - Everything You Need to Know',
    slug: 'timestamp-guide',
    excerpt: 'Master Unix timestamps. Learn what they are, how to convert them to human-readable dates, and how to handle timezones in development.',
    date: '2024-04-15',
    category: 'Development',
    readTime: '8 min read',
    image: '📅'
  },
  {
    title: 'URL Encoding & Decoding Guide - Percent Encoding Explained',
    slug: 'url-encoding-guide',
    excerpt: 'Learn why URL encoding is necessary. Master special characters, query parameters, and how to encode/decode URLs safely.',
    date: '2024-04-25',
    category: 'Development',
    readTime: '7 min read',
    image: '🌐'
  },
  {
    title: 'Base64 Encoding Guide - How it Works and When to Use it',
    slug: 'base64-encoding-guide',
    excerpt: 'Learn everything about Base64 encoding/decoding. Understand how it converts binary data to text and its common use cases in web development.',
    date: '2024-03-20',
    category: 'Data',
    readTime: '8 min read',
    image: '📦'
  },
  {
    title: 'Complete Guide to Image Optimization for Web',
    slug: 'image-optimization-guide',
    excerpt: 'Learn how to optimize images for the web to improve site speed and SEO. Complete guide covering compression, formats, and best practices.',
    date: '2024-03-05',
    category: 'Performance',
    readTime: '10 min read',
    image: '🖼️'
  },
  {
    title: 'Complete Guide to Image Resizing - Scale Your Graphics',
    slug: 'image-resizing-guide',
    excerpt: 'Learn how to resize images properly for the web. Understand aspect ratio, interpolation, and how to scale images without losing clarity.',
    date: '2024-04-08',
    category: 'Performance',
    readTime: '8 min read',
    image: '📏'
  },
  {
    title: 'Web Image Formats Guide - PNG, JPG, WebP, SVG, GIF',
    slug: 'image-formats-guide',
    excerpt: 'Understand the differences between common web image formats. Learn when to use PNG vs JPG vs WebP for optimal performance.',
    date: '2024-04-05',
    category: 'Design',
    readTime: '10 min read',
    image: '🖼️'
  },
  {
    title: 'Color Theory for Web Developers - Beyond the Hex Code',
    slug: 'color-theory-guide',
    excerpt: 'Master color theory, HEX, RGB, and HSL formats. Learn how to create beautiful color palettes and understand accessibility (WCAG).',
    date: '2024-04-20',
    category: 'Design',
    readTime: '12 min read',
    image: '🎨'
  },
  {
    title: 'Complete Guide to QR Codes - How They Work & Best Practices',
    slug: 'qr-code-guide',
    excerpt: 'Learn everything about QR codes. Discover how they store data, best practices for design, and how to generate high-quality QR codes.',
    date: '2024-04-22',
    category: 'Development',
    readTime: '9 min read',
    image: '📱'
  },
  {
    title: 'Complete Guide to Text Comparison - Finding Diffs Effectively',
    slug: 'text-comparison-guide',
    excerpt: 'Learn how text comparison works. Master diff algorithms, line-by-line comparison, and how to use diff tools to spot changes.',
    date: '2024-04-28',
    category: 'Code Tools',
    readTime: '8 min read',
    image: '🔍'
  },
  {
    title: 'JSON to CSV Guide - Modern Data Transformation',
    slug: 'json-csv-guide',
    excerpt: 'Learn how to convert JSON data to CSV and vice-versa. Understand the differences between nested JSON and flat CSV formats.',
    date: '2024-05-01',
    category: 'Data',
    readTime: '10 min read',
    image: '📊'
  },
  {
    title: 'Complete Guide to Code Formatting - Why Clean Code Matters',
    slug: 'code-formatting-guide',
    excerpt: 'Learn why clean code matters. A complete guide to code formatting, indentation, naming conventions, and how to use automated formatters.',
    date: '2024-04-02',
    category: 'Development',
    readTime: '10 min read',
    image: '💻'
  },
  {
    title: 'Complete Guide to JSON Formatter - Format & Validate JSON Online',
    slug: 'json-formatter-guide',
    excerpt: 'Learn everything about JSON formatting, validation, and best practices. Complete guide with examples, tips, and common errors.',
    date: '2024-01-15',
    category: 'JSON & Data',
    readTime: '8 min read',
    image: '📋'
  },
  {
    title: 'UUID Generator Complete Guide - When and How to Use UUIDs',
    slug: 'uuid-generator-guide',
    excerpt: 'Master UUID generation and learn when to use UUIDs vs other identifiers. Complete guide covering UUID versions, best practices, and real-world use cases.',
    date: '2024-01-12',
    category: 'Developer Tools',
    readTime: '10 min read',
    image: '🔑'
  },
  {
    title: 'Best Password Security Practices in 2024',
    slug: 'password-security-practices',
    excerpt: 'Protect your online accounts with strong passwords. Learn the latest password security best practices and how to use generators effectively.',
    date: '2024-01-10',
    category: 'Security',
    readTime: '7 min read',
    image: '🔐'
  },
  {
    title: 'Mastering .env Files - Generator & Validator Guide',
    slug: 'env-generator-guide',
    excerpt: 'Learn why .env files are crucial for application security and how to use our generator and validator to avoid common configuration errors.',
    date: '2024-05-03',
    category: 'Security',
    readTime: '8 min read',
    image: '🛠️'
  },
  {
    title: 'Complete Guide to .gitignore Generator - Best Practices for Git',
    slug: 'gitignore-generator-guide',
    excerpt: 'Learn how to use our .gitignore generator to keep your repositories clean and secure. Complete guide on Git ignore rules, patterns, and best practices.',
    date: '2024-05-04',
    category: 'Development',
    readTime: '10 min read',
    image: '📄'
  },
  {
    title: 'SLA Uptime Calculator Guide — Understanding 99.9% vs 99.99% Uptime',
    slug: 'sla-uptime-guide',
    excerpt: 'Learn what SLA uptime percentages mean in practice. Understand the difference between 99.9% and 99.99% uptime, how to calculate downtime, and why it matters.',
    date: '2024-05-05',
    category: 'Development',
    readTime: '9 min read',
    image: '⏱️'
  }
]

export default function BlogPage() {
  return <BlogClient posts={blogPosts} />
}
