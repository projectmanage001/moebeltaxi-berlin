import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/blog";
import BlogDetail from "@/components/BlogDetail";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Gartenabfälle entsorgen in Berlin – Ihre Optionen",
  description:
    "Laub, Äste, Grünschnitt umweltfreundlich entsorgen – BSR, Abholung & Tipps.",
  alternates: { canonical: "/blog/gartenabfaelle-richtig-entsorgen-berlin" },
  openGraph: {
    title: "Gartenabfälle richtig entsorgen",
    description:
      "Umweltfreundliche Lösungen für Berlin.",
    url: "/blog/gartenabfaelle-richtig-entsorgen-berlin",
    type: "article",
  },
};

export default function Page() {
  const post = getPostBySlug("gartenabfaelle-richtig-entsorgen-berlin")!;
  return <BlogDetail post={post} />;
}