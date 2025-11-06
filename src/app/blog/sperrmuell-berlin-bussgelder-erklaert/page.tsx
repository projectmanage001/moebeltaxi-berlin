import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/blog";
import BlogDetail from "@/components/BlogDetail";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Sperrmüll in Berlin – Bußgelder erklärt | Möbel Taxi Umzug",
  description:
    "So entsorgen Sie Sperrmüll korrekt in Berlin und vermeiden Bußgelder.",
  alternates: { canonical: "/blog/sperrmuell-berlin-bussgelder-erklaert" },
  openGraph: {
    title: "Sperrmüll richtig entsorgen",
    description:
      "BSR, Abholung & Bußgelder – was in Berlin wichtig ist.",
    url: "/blog/sperrmuell-berlin-bussgelder-erklaert",
    type: "article",
  },
};

export default function Page() {
  const post = getPostBySlug("sperrmuell-berlin-bussgelder-erklaert")!;
  return <BlogDetail post={post} />;
}