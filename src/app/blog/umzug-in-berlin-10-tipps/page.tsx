import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/blog";
import BlogDetail from "@/components/BlogDetail";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Umzug in Berlin – 10 Tipps | Möbel Taxi Umzug Berlin",
  description:
    "10 praxisnahe Tipps für einen stressfreien Umzug in Berlin – Planung, Halteverbotszone, Montage & mehr.",
  alternates: { canonical: "/blog/umzug-in-berlin-10-tipps" },
  openGraph: {
    title: "Umzug in Berlin – 10 Tipps",
    description:
      "Checkliste & Profi-Tipps für einen entspannten Umzug in Berlin.",
    url: "/blog/umzug-in-berlin-10-tipps",
    type: "article",
  },
};

export default function Page() {
  const post = getPostBySlug("umzug-in-berlin-10-tipps")!;
  return <BlogDetail post={post} />;
}