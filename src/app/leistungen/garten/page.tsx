import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { SERVICE_CONTENT } from "@/lib/services";

export const metadata: Metadata = {
  title: `${SERVICE_CONTENT.garten.metaTitle} | Möbel Taxi Umzug Berlin`,
  description: SERVICE_CONTENT.garten.lead,
  alternates: { canonical: SERVICE_CONTENT.garten.canonical },
  openGraph: {
    title: `${SERVICE_CONTENT.garten.metaTitle} | Möbel Taxi Umzug Berlin`,
    description: SERVICE_CONTENT.garten.lead,
    images: SERVICE_CONTENT.garten.og ? [{ url: SERVICE_CONTENT.garten.og }] : undefined,
    url: SERVICE_CONTENT.garten.canonical,
    type: "article",
  },
};

export default function Page() {
  return <ServiceDetail service="garten" />;
}