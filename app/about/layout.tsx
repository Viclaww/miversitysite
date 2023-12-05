import type { Metadata } from "next";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export const metadata: Metadata = {
  title: "News | Miversity",
  description: "All the latest news and updates...",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section>News page</section>
    </>
  );
}
