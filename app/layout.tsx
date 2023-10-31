import './globals.css'
import type { Metadata } from 'next';

import { Roboto } from 'next/font/google';

const roboto = Roboto({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: '500'
 });

export const metadata: Metadata = {
  title: 'Miversity',
  description: 'Your studies in your pocket!',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} font-inter overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
