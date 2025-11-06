import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/blog";
import BlogDetail from "@/components/BlogDetail";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Möbeltransport Berlin – Anbieter finden | Möbel Taxi Umzug",
  description:
    "Worauf Sie beim Möbeltransport achten sollten: Erfahrung, Schutz, Preise, flexible Termine.",
  alternates: { canonical: "/blog/moebeltransport-berlin-anbieter-finden" },
  openGraph: {
    title: "Möbeltransport Berlin – Anbieter finden",
    description:
      "So wählen Sie den passenden Transportdienst in Berlin.",
    url: "/blog/moebeltransport-berlin-anbieter-finden",
    type: "article",
  },
};

export default function Page() {
  const post = getPostBySlug("moebeltransport-berlin-anbieter-finden")!;
  return <BlogDetail post={post} />;
}