import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { SERVICE_CONTENT } from "@/lib/services";

export const metadata: Metadata = {
  title: `${SERVICE_CONTENT.moebeltransport.metaTitle} | Möbel Taxi Umzug Berlin`,
  description: SERVICE_CONTENT.moebeltransport.lead,
  alternates: { canonical: SERVICE_CONTENT.moebeltransport.canonical },
  openGraph: {
    title: `${SERVICE_CONTENT.moebeltransport.metaTitle} | Möbel Taxi Umzug Berlin`,
    description: SERVICE_CONTENT.moebeltransport.lead,
    images: SERVICE_CONTENT.moebeltransport.og ? [{ url: SERVICE_CONTENT.moebeltransport.og }] : undefined,
    url: SERVICE_CONTENT.moebeltransport.canonical,
    type: "article",
  },
};

export default function Page() {
  return <ServiceDetail service="moebeltransport" />;
}