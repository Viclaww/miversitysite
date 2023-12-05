import "./globals.css";
import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import StoreProvider from "./data/Provider";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: '400'
});

export const metadata: Metadata = {
  title: "Miversity",
  description: "Your studies in your pocket!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-poppins overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
