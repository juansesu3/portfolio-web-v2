'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion' // <--- 1. Importar motion

// --- Variantes para las animaciones ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Tiempo de espera entre la animación de cada hijo
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

const GridProjects = () => {
  const t = useTranslations("projects");
  
  const projects = [
    {
      id: 1,
      title: t('projects.recommender-ai-agent-for-ecommece.title'),
      description: t('projects.recommender-ai-agent-for-ecommece.description'),
      image: 'https://my-page-negiupp.s3.amazonaws.com/1750756449867.png',//https://my-page-negiupp.s3.amazonaws.com/1750681232857.png
      technologies: ['openai ', 'nextjs', 'python','langchain'],
      link: '/projects/ecommerce',
      slug: 'ecommerce-ai'
    },
    {
      id: 2,
      title: t('projects.intelligent_assistent.title'),
      description: t('projects.intelligent_assistent.description'),
      image: 'https://my-page-negiupp.s3.amazonaws.com/1750684889719.png',
      technologies: ['n8n', 'google', 'whatsapp', 'supabase'],
      link: '/projects/task-manager',
      slug: 'google-calendar-agent'
    },
    {
      id: 3,
      title: t('projects.pandorai_agency.title'),
      description:  t('projects.pandorai_agency.description'),
      image: 'https://my-page-negiupp.s3.amazonaws.com/1750755347523.png',
      technologies: ['openai ', 'nextjs', 'python','langchain'],
      link: '/projects/finance-app',
      slug: 'pandorai-agency'
    },
    {
      id: 4,
      title: t('projects.barber_shop.title'),
      description: t('projects.barber_shop.description'),
      image: 'https://my-page-negiupp.s3.amazonaws.com/1750756003903.png',
      technologies: ['react', 'nextjs', 'tailwindcss'],
      link: '/projects/ecommerce',
      slug: 'barber-shop-app'
    },
    {
      id: 5,
      title: t('projects.ai_todo_app.title'),
      description: t('projects.ai_todo_app.description'),
      image: 'https://my-page-negiupp.s3.amazonaws.com/1750755686809.png',
      technologies: ['vue', 'firebase', 'sass'],
      link: '/projects/task-manager',
      slug: 'ai-todo-app'
    },
  ]
  const pathname = usePathname();
  const localeFromPath = pathname.split("/")[1] || "en";
  const [locale, setLocale] = useState(localeFromPath);

  useEffect(() => {
    setLocale(localeFromPath);
  }, [localeFromPath]);

  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold text-center mb-8">{t('sub_title_two')}</h2>
      
      {/* 2. Contenedor de la grilla animado */}
      <motion.div
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:px-0 px-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project) => (
          // 3. Cada elemento de la grilla (tarjeta) se envuelve en un motion.div
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }} // 4. Animación al pasar el ratón
            transition={{ type: 'spring', stiffness: 300 }} // Transición suave para el hover
          >
            <Link href={`/${locale}/projects/${project.slug}`} className="group">
              {/* Se eliminan clases de transform y transition para que Framer Motion las controle */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                {/* Imagen del proyecto */}
                <div className="relative h-52">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:opacity-90 transition-opacity duration-300"
                  />
                </div>

                {/* Contenido del proyecto */}
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>

                {/* Tecnologías en el pie */}
                <div className="p-4 border-t bg-gray-50">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="inline-block bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default GridProjects