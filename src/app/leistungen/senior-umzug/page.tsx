import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { SERVICE_CONTENT } from "@/lib/services";

export const metadata: Metadata = {
  title: `${SERVICE_CONTENT["senior-umzug"].metaTitle} | Möbel Taxi Umzug Berlin`,
  description: SERVICE_CONTENT["senior-umzug"].lead,
  alternates: { canonical: SERVICE_CONTENT["senior-umzug"].canonical },
  openGraph: {
    title: `${SERVICE_CONTENT["senior-umzug"].metaTitle} | Möbel Taxi Umzug Berlin`,
    description: SERVICE_CONTENT["senior-umzug"].lead,
    images: SERVICE_CONTENT["senior-umzug"].og ? [{ url: SERVICE_CONTENT["senior-umzug"].og }] : undefined,
    url: SERVICE_CONTENT["senior-umzug"].canonical,
    type: "article",
  },
};

export default function Page() {
  return <ServiceDetail service="senior-umzug" />;
}