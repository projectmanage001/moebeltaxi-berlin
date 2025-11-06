import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { SERVICE_CONTENT } from "@/lib/services";

export const metadata: Metadata = {
  title: `${SERVICE_CONTENT.umzug.metaTitle} | Möbel Taxi Umzug Berlin`,
  description: SERVICE_CONTENT.umzug.lead,
  alternates: { canonical: SERVICE_CONTENT.umzug.canonical },
  openGraph: {
    title: `${SERVICE_CONTENT.umzug.metaTitle} | Möbel Taxi Umzug Berlin`,
    description: SERVICE_CONTENT.umzug.lead,
    images: SERVICE_CONTENT.umzug.og ? [{ url: SERVICE_CONTENT.umzug.og }] : undefined,
    url: SERVICE_CONTENT.umzug.canonical,
    type: "article",
  },
};

export default function Page() {
  return <ServiceDetail service="umzug" />;
}