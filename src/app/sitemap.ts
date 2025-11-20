import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://juansedev.ch";

  // Idiomas de tu sitio
  const locales = ["en", "es", "fr"];

  // Rutas principales
  const staticRoutes = [
    "",
    "about",
    "projects",
    "contact",
  ];

  // Rutas de servicios de tu portafolio
  const serviceRoutes = [
    "services/ai-agents-development",
    "services/web-development",
    "services/design-ux-ui",
  ];

  // Unimos todas las rutas
  const allRoutes = [...staticRoutes, ...serviceRoutes];

  return allRoutes.flatMap((route) =>
    locales.map((locale) => {
      const url = `${baseUrl}/${locale}/${route}`;

      // Alternates (hreflang)
      const alternatesLanguages: Record<string, string> = {};
      locales.forEach((lang) => {
        alternatesLanguages[lang] = `${baseUrl}/${lang}/${route}`;
      });

      return {
        url,
        lastModified: new Date(),
        alternates: {
          languages: alternatesLanguages,
        },
      };
    })
  );
}
