import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Resource | Miversity",
  description: "All the latest news and updates...",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="font-poppins">{children}</section>;
}
