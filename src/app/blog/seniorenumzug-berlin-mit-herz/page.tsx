import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/blog";
import BlogDetail from "@/components/BlogDetail";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Seniorenumzug in Berlin – Mit Herz & Erfahrung",
  description:
    "Einfühlsamer Umzugsservice für Ältere – Planung, Tragehilfe und Komplettservice.",
  alternates: { canonical: "/blog/seniorenumzug-berlin-mit-herz" },
  openGraph: {
    title: "Seniorenumzug in Berlin",
    description:
      "Sicher, respektvoll und gut organisiert umziehen.",
    url: "/blog/seniorenumzug-berlin-mit-herz",
    type: "article",
  },
};

export default function Page() {
  const post = getPostBySlug("seniorenumzug-berlin-mit-herz")!;
  return <BlogDetail post={post} />;
}