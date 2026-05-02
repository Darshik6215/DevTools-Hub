import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import '../styles/globals.css'

// Enhanced SEO metadata configuration
export const metadata = {
  metadataBase: new URL('https://devtoolskit.co.in'),
  title: {
    default: 'DevTools Hub - Free Developer Tools Online | DevTools Kit',
    template: '%s | DevTools Hub - DevTools Kit'
  },
  description: 'DevTools Hub (devtoolskit.co.in): Free online developer tools including JSON formatter, password generator, image converter and more.',
  keywords: [
    'developer tools',
    'json formatter',
    'password generator',
    'image converter',
    'online tools'
  ],
  authors: [{ name: 'DevTools Hub', url: 'https://devtoolskit.co.in' }],
  openGraph: {
    type: 'website',
    url: 'https://devtoolskit.co.in',
    title: 'Free Online Developer Tools',
    description: 'Professional developer tools for free.',
    siteName: 'DevTools Hub',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'v7ilhKPEAe7LUAD99HqcSO8xh21t2he8BjH8IPiqAYc',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        {/* ✅ AdSense */}
        <meta name="google-adsense-account" content="ca-pub-8753660169522921" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8753660169522921"
          crossOrigin="anonymous"
        />

        {/* Dark theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{document.documentElement.setAttribute('data-theme','dark');localStorage.setItem('theme','dark');}catch(e){}})();`,
          }}
        />
      </head>

      <body className="antialiased">

        {/* ✅ Google Analytics (FINAL FIX) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CT6EG3L607"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CT6EG3L607', {
                page_path: window.location.pathname,
              });
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