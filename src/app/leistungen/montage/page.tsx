import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { SERVICE_CONTENT } from "@/lib/services";

export const metadata: Metadata = {
  title: `${SERVICE_CONTENT.montage.metaTitle} | Möbel Taxi Umzug Berlin`,
  description: SERVICE_CONTENT.montage.lead,
  alternates: { canonical: SERVICE_CONTENT.montage.canonical },
  openGraph: {
    title: `${SERVICE_CONTENT.montage.metaTitle} | Möbel Taxi Umzug Berlin`,
    description: SERVICE_CONTENT.montage.lead,
    images: SERVICE_CONTENT.montage.og ? [{ url: SERVICE_CONTENT.montage.og }] : undefined,
    url: SERVICE_CONTENT.montage.canonical,
    type: "article",
  },
};

export default function Page() {
  return <ServiceDetail service="montage" />;
}