import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Miversity | Miversity",
  description: "All the latest news and updates...",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section>{children}</section>
    </>
  );
}
