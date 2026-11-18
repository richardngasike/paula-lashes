import { site } from "@/data/site";

export default function sitemap() {
  const routes = ["", "/about", "/lashes", "/nails", "/pricing", "/gallery", "/book", "/contact"];
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
