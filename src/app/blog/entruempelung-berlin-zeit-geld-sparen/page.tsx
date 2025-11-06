import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/blog";
import BlogDetail from "@/components/BlogDetail";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Entrümpelung Berlin – Zeit & Geld sparen | Möbel Taxi Umzug",
  description:
    "Schnelle, effiziente und umweltgerechte Entrümpelung in Berlin – so geht’s.",
  alternates: { canonical: "/blog/entruempelung-berlin-zeit-geld-sparen" },
  openGraph: {
    title: "Entrümpelung leicht gemacht",
    description:
      "Praktische Tipps für Entrümpelungen in Berlin – Wohnung, Keller, Büro.",
    url: "/blog/entruempelung-berlin-zeit-geld-sparen",
    type: "article",
  },
};

export default function Page() {
  const post = getPostBySlug("entruempelung-berlin-zeit-geld-sparen")!;
  return <BlogDetail post={post} />;
}