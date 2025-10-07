import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({ subsets: ["latin"], weight: ["400","700"] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'This my Portfolio.',
  keywords: [
    '3D portfolio',
    'Spline template',
    'Next.js portfolio',
    'developer portfolio',
    'designer website',
    'React 3D site',
    'Spline 3D web',
  ],
  authors: [{ name: 'AyoSynk', url: 'https://ayosynk.pages.dev' }],
  creator: 'AyoSynk',
  generator: 'Next.js + pnpm',
  openGraph: {
    title: 'Portfolio',
    description:
      'Showcase your work with a sleek, interactive 3D portfolio built using Spline and Next.js.',
    url: 'https://thevoid.pages.dev',
    siteName: '3D Portfolio Template',
    images: [
      {
        url: 'https://www.dropbox.com/scl/fi/lmo5veobl7uoezn89q0a0/standard.gif?rlkey=n1hr72nqu6culb87bbh7zxyfs&st=qoa7wdub&dl=1',
        width: 1920,
        height: 1080,
        alt: 'Portofolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  metadataBase: new URL('https://thevoid.pages.dev'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${silkscreen.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
