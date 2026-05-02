import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Script from 'next/script'
import SmoothScroll from '@/components/SmoothScroll'
import '../styles/globals.css'

// Enhanced SEO metadata configuration
export const metadata = {
  metadataBase: new URL('https://devtoolskit.co.in'),
  title: {
    default: 'DevTools Hub - Free Developer Tools Online | DevTools Kit',
    template: '%s | DevTools Hub - DevTools Kit'
  },
  description: 'DevTools Hub (devtoolskit.co.in): Free online developer tools including JSON formatter, password generator, image converter and more. Professional utilities for modern developers.',
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
  authors: [{ name: 'DevTools Hub', url: 'https://devtoolskit.co.in' }],
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
    url: 'https://devtoolskit.co.in',
    title: 'Free Online Developer Tools | JSON Formatter, API Tester & More',
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
    google: 'v7ilhKPEAe7LUAD99HqcSO8xh21t2he8BjH8IPiqAYc', // Google Search Console verification
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        {/* Google AdSense Verification Meta Tag */}
        <meta name="google-adsense-account" content="ca-pub-8753660169522921" />

        {/* Google AdSense — plain <script> tag required; Next.js <Script> adds
            data-nscript which AdSense rejects. This loads before body hydration. */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8753660169522921"
          crossOrigin="anonymous"
        />

        {/* Force Dark Theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  document.documentElement.setAttribute('data-theme', 'dark');
                  localStorage.setItem('theme', 'dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-CT6EG3L607`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CT6EG3L607');
            `,
          }}
        />

        <Navbar />
        <SmoothScroll>
          <main className="min-h-screen">
            {children}
          </main>
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  )
}
