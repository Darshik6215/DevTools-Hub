import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'
import '../styles/globals.css'

// Enhanced SEO metadata configuration
export const metadata = {
  metadataBase: new URL('https://devtools-hub.com'),
  title: {
    default: 'DevTools Hub - Free Online Developer Tools | JSON, Password, Image Converter',
    template: '%s | DevTools Hub'
  },
  description: 'Free online developer tools: JSON formatter & validator, secure password generator, image converter (PNG/JPG/WebP). Fast, secure, no signup required.',
  keywords: [
    'developer tools',
    'json formatter',
    'json validator',
    'password generator',
    'image converter',
    'online tools',
    'free tools',
    'web development',
    'format json',
    'validate json',
    'secure password',
    'convert images'
  ],
  authors: [{ name: 'DevTools Hub', url: 'https://devtools-hub.com' }],
  creator: 'DevTools Hub',
  publisher: 'DevTools Hub',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devtools-hub.com',
    title: 'DevTools Hub - Free Online Developer Tools',
    description: 'Professional developer tools: JSON formatter, password generator, image converter. 100% free.',
    siteName: 'DevTools Hub',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DevTools Hub - Free Developer Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevTools Hub - Free Developer Tools',
    description: 'Format JSON, generate passwords, convert images - all free!',
    creator: '@devtoolshub',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
