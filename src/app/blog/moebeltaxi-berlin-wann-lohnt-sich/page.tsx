import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/blog";
import BlogDetail from "@/components/BlogDetail";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Möbeltaxi Berlin – Wann lohnt es sich? | Möbel Taxi Umzug",
  description:
    "Wann ist ein Möbeltaxi sinnvoll? Kleine Transporte, Sicherheit, Zeit sparen – die Vorteile im Überblick.",
  alternates: { canonical: "/blog/moebeltaxi-berlin-wann-lohnt-sich" },
  openGraph: {
    title: "Möbeltaxi Berlin – Wann lohnt es sich?",
    description:
      "Perfekt für kleine bis mittlere Transporte: schnell, sicher, stressfrei.",
    url: "/blog/moebeltaxi-berlin-wann-lohnt-sich",
    type: "article",
  },
};

export default function Page() {
  const post = getPostBySlug("moebeltaxi-berlin-wann-lohnt-sich")!;
  return <BlogDetail post={post} />;
}