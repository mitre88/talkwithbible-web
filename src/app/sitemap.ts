import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/utils";

const PATHS = ["", "/privacy", "/support", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of routing.locales) {
    const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
    for (const path of PATHS) {
      entries.push({
        url: `${SITE_URL}${prefix}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }
  }
  return entries;
}
