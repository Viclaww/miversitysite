import type { Metadata } from "next";


export const metadata: Metadata = {
    title: 'About us | Miversity',
    description: 'All the latest news and updates...',
}

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
         {children}
      </>
   
    )
  }