import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { SERVICE_CONTENT } from "@/lib/services";

export const metadata: Metadata = {
  title: `${SERVICE_CONTENT.entruempelung.metaTitle} | Möbel Taxi Umzug Berlin`,
  description: SERVICE_CONTENT.entruempelung.lead,
  alternates: { canonical: SERVICE_CONTENT.entruempelung.canonical },
  openGraph: {
    title: `${SERVICE_CONTENT.entruempelung.metaTitle} | Möbel Taxi Umzug Berlin`,
    description: SERVICE_CONTENT.entruempelung.lead,
    images: SERVICE_CONTENT.entruempelung.og ? [{ url: SERVICE_CONTENT.entruempelung.og }] : undefined,
    url: SERVICE_CONTENT.entruempelung.canonical,
    type: "article",
  },
};

export default function Page() {
  return <ServiceDetail service="entruempelung" />;
}