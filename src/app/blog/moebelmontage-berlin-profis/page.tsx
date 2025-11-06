import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/blog";
import BlogDetail from "@/components/BlogDetail";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Möbelmontage in Berlin – Profis beauftragen",
  description:
    "Zeit sparen, Schäden vermeiden: Fachgerechte Montage von Schränken, Betten, Regalen & Küchen.",
  alternates: { canonical: "/blog/moebelmontage-berlin-profis" },
  openGraph: {
    title: "Möbelmontage in Berlin",
    description:
      "Warum Profis für die Montage sinnvoll sind.",
    url: "/blog/moebelmontage-berlin-profis",
    type: "article",
  },
};

export default function Page() {
  const post = getPostBySlug("moebelmontage-berlin-profis")!;
  return <BlogDetail post={post} />;
}