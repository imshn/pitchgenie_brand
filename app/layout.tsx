import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'PitchGenie - #1 AI Outreach Tool for Cold Email & LinkedIn',
    template: '%s | PitchGenie'
  },
  description: 'The most advanced AI outreach tool for B2B sales. Generate hyper-personalized cold emails and LinkedIn sequences that get replies. Start for free.',
  keywords: [
    'AI outreach tool',
    'cold email software',
    'AI email generator',
    'LinkedIn automation tool',
    'sales engagement platform',
    'B2B lead generation',
    'automated email sequences',
    'AI sales assistant',
    'email personalization AI',
    'sales automation software',
    'cold outreach strategy',
    'email warmup tool',
    'linkedin lead generation',
    'ai copywriting for sales',
    'automated follow ups',
    'sales pipeline automation',
    'sdr tools',
    'business development software',
    'pitchgenie',
    'ai sales tools'
  ],
  metadataBase: new URL('https://pitchgenie.in'),
  alternates: {
    canonical: 'https://pitchgenie.in',
  },
  applicationName: 'PitchGenie',
  appleWebApp: {
    capable: true,
    title: 'PitchGenie',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: 'PitchGenie - #1 AI Outreach Tool',
    description: 'Stop sending spam. Start starting conversations. The AI outreach tool that writes personalized emails for you.',
    type: 'website',
    locale: 'en_US',
    url: 'https://pitchgenie.in',
    siteName: 'PitchGenie',
    images: [{
      url: 'https://pitchgenie.in/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'PitchGenie AI Outreach Tool Dashboard',
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PitchGenie - AI Cold Email & Outreach Tool',
    description: 'The AI outreach tool that actually gets replies. Join 2,000+ sales teams.',
    creator: '@pitchgenie',
    images: ['https://pitchgenie.in/opengraph-image'],
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
    google: 'google-site-verification=YOUR_CODE',
    yandex: 'yandex-verification=YOUR_CODE',
  },
  authors: [{ name: 'PitchGenie Team', url: 'https://pitchgenie.in' }],
  creator: 'PitchGenie',
  publisher: 'PitchGenie',
  category: 'Business & Finance',
  classification: 'Business Software',
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ujtmeyjanv");
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                email: 'support@pitchgenie.in',
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased bg-black`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
