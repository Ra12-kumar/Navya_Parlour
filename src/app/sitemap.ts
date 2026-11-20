import type { MetadataRoute } from "next";
import { salon } from "@/data/salon";

const routes = [
  "",
  "/about",
  "/services",
  "/pricing",
  "/bridal",
  "/gallery",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/cancellation-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${salon.siteUrl}${r}`,
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
