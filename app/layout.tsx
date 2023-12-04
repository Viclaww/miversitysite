import './globals.css'
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
 });

export const metadata: Metadata = {
  title: 'Miversity',
  description: 'Your studies in your pocket!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-inter overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
