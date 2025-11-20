export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://juansedev.ch/#website",
      "url": "https://juansedev.ch/",
      "name": "Juan Sebastián Suárez | Full-Stack Developer & AI Integrations",
      "description":
        "Portfolio of Juan Sebastián Suárez, Full-Stack Developer in Switzerland focused on modern web applications and AI integrations.",
      "inLanguage": ["en", "es", "fr", "de"],
      "publisher": {
        "@id": "https://juansedev.ch/#person"
      }
    },
    {
      "@type": "Person",
      "@id": "https://juansedev.ch/#person",
      "name": "Juan Sebastián Suárez Ramírez",
      "givenName": "Juan Sebastián",
      "familyName": "Suárez Ramírez",
      "alternateName": [
        "Juan Sebastián Suárez",
        "Juan Sebastian Suarez",
        "Sebas"
      ],
      "jobTitle": [
        "Full-Stack Developer",
        "AI Integrations Engineer"
      ],
      "description":
        "Full-Stack Developer based in Fribourg, Switzerland, with 4+ years of experience building web applications and integrating AI into real products. Actively seeking roles as Full-Stack Developer or AI Engineer.",
      "url": "https://juansedev.ch/",
      "sameAs": [
        "https://juansedev.ch/",
        "https://github.com/juansesu3"
      ],
      "homeLocation": {
        "@type": "Place",
        "name": "Fribourg, Switzerland"
      },
      "knowsLanguage": [
        {
          "@type": "Language",
          "name": "Spanish",
          "alternateName": "es"
        },
        {
          "@type": "Language",
          "name": "English",
          "alternateName": "en"
        },
        {
          "@type": "Language",
          "name": "French",
          "alternateName": "fr"
        },
        {
          "@type": "Language",
          "name": "German",
          "alternateName": "de"
        }
      ],
      "worksFor": [
        {
          "@id": "https://juansedev.ch/#brand-negiupp"
        },
        {
          "@id": "https://juansedev.ch/#org-pandorai"
        }
      ]
    },
    {
      "@type": "Brand",
      "@id": "https://juansedev.ch/negiupp",
      "name": "Negiupp",
      "description":
        "Personal brand of Juan Sebastián Suárez focused on full-stack development, AI integrations and digital solutions.",
      "url": "https://juansedev.ch/"
    },
    {
      "@type": "Organization",
      "@id": "https://www.juansedev.ch/en/projects/pandorai-agency",
      "name": "PandorAI",
      "description":
        "AI-focused project led by Juan Sebastián Suárez to build SaaS solutions, AI agents and automation workflows.",
      "founder": {
        "@id": "https://juansedev.ch/#person"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://juansedev.ch/#homepage",
      "url": "https://juansedev.ch/",
      "name": "Full-Stack Developer & AI Integrations | Juan Sebastián Suárez",
      "isPartOf": {
        "@id": "https://juansedev.ch/#website"
      },
      "about": {
        "@id": "https://juansedev.ch/#person"
      },
      "inLanguage": ["en", "es", "fr", "de"],
      "description":
        "Homepage of Juan Sebastián Suárez, Full-Stack Developer in Switzerland on the path to becoming an AI Engineer, with experience in Next.js, Node.js, Python, OpenAI, LangChain and automation."
    }
  ]
};
