import type { Metadata } from "next";
import "../globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { Analytics } from "@vercel/analytics/react"


type Locale = 'en' | 'es' | 'fr' | 'de';
export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const { locale } = await params; // Esperar a que `params` se resuelva

  const metadataTranslations = {
    en: {
      title: 'Software Solutions | Juan Sebastian Suarez Ramirez',
      description: 'Official website of Juan Sebastián Suárez Ramírez, Full-Stack Software Developer with over 4 years of experience. Welcome to Negiupp, your hub for exploring innovative digital solutions, articles on software development, and the integration of artificial intelligence in cutting-edge projects. Empower your business with customized AI solutions and automation.',
      keywords: 'Full-Stack Software Development, AI Solutions, Custom AI Systems, Automation for Businesses, AI Integration, Digital Innovation, PandorAI',
      locale: 'en_US',
    },
    es: {
      title: 'Soluciones de Software | Soluciones de IA para Comercio Electrónico y Soporte al Cliente',
      description: 'Sitio oficial de Juan Sebastián Suárez Ramírez, desarrollador de software Full-Stack con más de 4 años de experiencia. Bienvenido a Negiupp, tu espacio para explorar soluciones digitales innovadoras, artículos sobre desarrollo de software y la integración de inteligencia artificial en proyectos de vanguardia. Potencia tu negocio con soluciones personalizadas en IA y automatización.',
      keywords: 'Desarrollo Full-Stack, Soluciones de IA, Sistemas IA Personalizados, Automatización para Empresas, Integración de IA, Innovación Digital, PandorAI',
      locale: 'es_ES',
    },
    fr: {
      title: 'Solutions Logiciels | Solutions IA pour le E-Commerce et le Support Client',
      description: "Site officiel de Juan Sebastián Suárez Ramírez, développeur Full-Stack avec plus de 4 ans d'expérience. Bienvenue sur Negiupp, votre espace pour découvrir des solutions numériques innovantes, des articles sur le développement de logiciels et l'intégration de l'intelligence artificielle dans des projets à la pointe de la technologie. Boostez votre entreprise avec des solutions IA personnalisées et de l'automatisation.",
      keywords: 'Développement Full-Stack, Solutions IA, Systèmes IA Personnalisés, Automatisation pour Entreprises, Intégration IA, Innovation Numérique, PandorAI',
      locale: 'fr_FR',
    },
    de: {
      title: 'Softwarelösungen | KI-Lösungen für E-Commerce und Kundenservice',
      description: 'Offizielle Website von Juan Sebastián Suárez Ramírez, Full-Stack-Softwareentwickler mit über 4 Jahren Erfahrung. Willkommen bei Negiupp, Ihrem Zentrum für innovative digitale Lösungen, Artikeln über Softwareentwicklung und der Integration von Künstlicher Intelligenz in fortschrittliche Projekte. Stärken Sie Ihr Unternehmen mit maßgeschneiderten KI-Lösungen und Automatisierung.',
      keywords: 'Full-Stack-Entwicklung, KI-Lösungen, Maßgeschneiderte KI-Systeme, Automatisierung für Unternehmen, KI-Integration, Digitale Innovation, PandorAI',
      locale: 'de_DE',
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
              <Analytics/>
            </div>

            <Footer />

          </Layout>

        </NextIntlClientProvider>
      </body>
    </html>
  );
}
