"use client";

import { usePathname } from "next/navigation";
import SiteWideContact from "@/components/SiteWideContact";

/** Footer’dan önceki global kontakt bloğu.
 * /kontakt ve alt yollarında (örn. /kontakt/danke) görünmez. */
export default function FooterContactGate() {
  const pathname = usePathname();
  if (pathname?.startsWith("/kontakt")) return null;
  return <SiteWideContact />;
}