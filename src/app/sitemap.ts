import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://sushankpandey.com.np", lastModified: new Date() }];
}
