import type { Metadata } from "next";
import { NavBar } from "../components/Navbar";
import { Breaking } from "./components/Breaking";
import {GoSearch} from "react-icons/go"
export const metadata: Metadata = {
    title: 'News | Miversity',
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