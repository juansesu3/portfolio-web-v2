import type { Metadata } from "next";
import "../globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { Analytics } from "@vercel/analytics/react"
import Script from "next/script";
import { structuredData } from "@/lib/structured-data";


type Locale = 'en' | 'es' | 'fr' | 'de';
export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const { locale } = await params; // Esperar a que `params` se resuelva

  const metadataTranslations = {
    en: {
      title: "Full-Stack Developer & AI Integrations | Juan Sebastián Suárez",
      description:
        "Official website of Juan Sebastián Suárez, Full-Stack Developer based in Switzerland with 4+ years of experience building modern web applications and integrating AI into real products. Actively seeking new opportunities in Full-Stack or AI Engineering. Explore projects in Next.js, Node.js, Python, AI agents, automations, LangChain and OpenAI.",
      keywords:
        "Full-Stack Developer Switzerland, AI Engineer, Software Engineer Jobs, Next.js Developer, React Developer, Node.js Developer, Python Developer, AI Integrations, OpenAI, LangChain, RAG, Automation, PandorAI",
      locale: "en_US",
    },

    es: {
      title: "Desarrollador Full-Stack & Integraciones de IA | Juan Sebastián Suárez",
      description:
        "Sitio oficial de Juan Sebastián Suárez, desarrollador Full-Stack en Suiza con más de 4 años de experiencia creando aplicaciones web modernas e integrando inteligencia artificial en productos reales. Actualmente en búsqueda activa de oportunidades como Full-Stack Developer o AI Engineer. Explora proyectos con Next.js, Node.js, Python, agentes de IA, automatizaciones, LangChain y OpenAI.",
      keywords:
        "Desarrollador Full-Stack Suiza, Ingeniero de IA, Empleo Software, Next.js, React, Node.js, Python, Integraciones IA, OpenAI, LangChain, RAG, Automatización, PandorAI",
      locale: "es_ES",
    },

    fr: {
      title: "Développeur Full-Stack & Intégrations IA | Juan Sebastián Suárez",
      description:
        "Site officiel de Juan Sebastián Suárez, développeur Full-Stack basé en Suisse avec plus de 4 ans d'expérience dans la création d’applications web modernes et l’intégration de l’IA dans des produits réels. Actuellement en recherche active d’opportunités en développement Full-Stack ou en ingénierie IA. Découvrez ses projets avec Next.js, Node.js, Python, agents IA, automatisations, LangChain et OpenAI.",
      keywords:
        "Développeur Full-Stack Suisse, Ingénieur IA, Emploi Développeur, Next.js, React, Node.js, Python, Intégrations IA, OpenAI, LangChain, RAG, Automatisation, PandorAI",
      locale: "fr_FR",
    },

    de: {
      title: "Full-Stack Entwickler & KI-Integrationen | Juan Sebastián Suárez",
      description:
        "Offizielle Website von Juan Sebastián Suárez, Full-Stack Entwickler in der Schweiz mit über 4 Jahren Erfahrung in der Entwicklung moderner Webanwendungen und der Integration von KI in reale Produkte. Derzeit aktiv auf Jobsuche als Full-Stack Developer oder AI Engineer. Entdecken Sie Projekte mit Next.js, Node.js, Python, KI-Agenten, Automatisierung, LangChain und OpenAI.",
      keywords:
        "Full-Stack Entwickler Schweiz, KI Ingenieur, Softwareentwickler Jobs, Next.js, React, Node.js, Python, KI-Integrationen, OpenAI, LangChain, RAG, Automatisierung, PandorAI",
      locale: "de_DE",
    },
  };



  const metadataLocale = metadataTranslations[locale] || metadataTranslations.en;

  return {
    title: metadataLocale.title,
    description: metadataLocale.description,
    keywords: metadataLocale.keywords.split(', '), // Convertir a un array

    openGraph: {
      title: metadataLocale.title,
      description: metadataLocale.description,
      url: 'https://www.juansedev.ch/',
      siteName: 'Portfolio - Juan Sebastian Suarez Ramirez',
      images: [
        {
          url: 'https://my-page-negiupp.s3.amazonaws.com/1758271932786.png', // Reemplaza con la URL de tu imagen real
          width: 1200,
          height: 630,
          alt: 'Full-stack development work demonstrating AI applications across industries by Juan Sebastián Suárez',
        },
      ],
      locale: metadataLocale.locale, // Formato locale como 'en_US'
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@tianking_',
      title: metadataLocale.title,
      description: metadataLocale.description,
      images: ['https://my-page-negiupp.s3.amazonaws.com/1758271932786.png'], // Reemplaza con la URL de tu imagen real
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Accede a `params.locale` directamente sin `await`
  const { locale } = await params;
  // Obtener los mensajes correspondientes al locale
  let messages;
  try {
    messages = await getMessages({ locale });
  } catch (error) {
    console.error(`Error fetching messages for locale: ${locale}`, error);
    messages = {}; // fallback para evitar errores si no se encuentran los mensajes
  }
  return (
    <html lang={locale}

    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Layout>
            <NavBar />
            <div className='max-w-5xl mx-auto px-2'>
              {children}
              <Script
                id="structured-data"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(structuredData),
                }}
              />
              <Analytics />
            </div>

            <Footer />

          </Layout>

        </NextIntlClientProvider>
      </body>


    </html>
  );
}
