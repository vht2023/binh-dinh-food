import './globals.css'
import Navbar from './components/Navbar/index'
import Footer from './components/Footer'
import { siteMetadata } from '@/configs/siteMetadata'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.title,
    images: [
      {
        url: siteMetadata.ogImage,
        alt: siteMetadata.title,
      },
    ],
    url: siteMetadata.siteUrl,
    locale: siteMetadata.locale,
    type: 'website',
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
  twitter: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    card: 'summary_large_image',
    images: [siteMetadata.ogImage],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={siteMetadata.language}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
