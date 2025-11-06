import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { SERVICE_CONTENT } from "@/lib/services";

export const metadata: Metadata = {
  title: `${SERVICE_CONTENT.lieferung.metaTitle} | Möbel Taxi Umzug Berlin`,
  description: SERVICE_CONTENT.lieferung.lead,
  alternates: { canonical: SERVICE_CONTENT.lieferung.canonical },
  openGraph: {
    title: `${SERVICE_CONTENT.lieferung.metaTitle} | Möbel Taxi Umzug Berlin`,
    description: SERVICE_CONTENT.lieferung.lead,
    images: SERVICE_CONTENT.lieferung.og ? [{ url: SERVICE_CONTENT.lieferung.og }] : undefined,
    url: SERVICE_CONTENT.lieferung.canonical,
    type: "article",
  },
};

export default function Page() {
  return <ServiceDetail service="lieferung" />;
}