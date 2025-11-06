import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/blog";
import BlogDetail from "@/components/BlogDetail";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Nachhaltig umziehen – Umweltfreundlicher Umzug",
  description:
    "Mehrwegkartons, gebündelte Fahrten, Recycling: So wird der Umzug grüner.",
  alternates: { canonical: "/blog/nachhaltig-umziehen-umweltfreundlich" },
  openGraph: {
    title: "Nachhaltig umziehen",
    description:
      "CO₂-Fußabdruck beim Umzug reduzieren – so geht’s.",
    url: "/blog/nachhaltig-umziehen-umweltfreundlich",
    type: "article",
  },
};

export default function Page() {
  const post = getPostBySlug("nachhaltig-umziehen-umweltfreundlich")!;
  return <BlogDetail post={post} />;
}