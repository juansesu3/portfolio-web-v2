'use client'
import React from 'react'
import CardArticle from './CardArticle'
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion'; // ---> 1. Importar motion

// ---> 2. Definir las variantes para la animación
const containerVariants = {
  hidden: { opacity: 1 }, // El estado inicial del contenedor
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Tiempo de espera entre la animación de cada tarjeta
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 }, // Cada tarjeta empieza 20px abajo y transparente
  visible: {
    y: 0,
    opacity: 1,
    transition: {
        type: 'spring', // Usamos una física de muelle para un efecto más natural
        stiffness: 120,
    }
  },
};


const ArticlesContainer = () => {
  // Array de objetos con datos de prueba
  const testData = [
    {
      image: "https://my-page-negiupp.s3.amazonaws.com/1707936447902.jpg",
      title: "Título del artículo de prueba 1",
      intro: "Este es un resumen introductorio del artículo de prueba 1.",
      date: "2025-01-09",
      readTime: "5 min",
      slug: "test-1"
    },
    {
      image: "https://pandorai.ch/_next/image?url=https%3A%2F%2Fmy-page-negiupp.s3.amazonaws.com%2F1733502993844.jpg&w=640&q=75",
      title: "Título del artículo de prueba 2",
      intro: "Este es un resumen introductorio del artículo de prueba 2.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "2025-01-10",
      readTime: "3 min",
      slug: "test-2"
    },
    {
      image: "https://pandorai.ch/_next/image?url=https%3A%2F%2Fmy-page-negiupp.s3.amazonaws.com%2F1733502405470.jpg&w=640&q=75",
      title: "Título del artículo de prueba 3",
      intro: "Este es un resumen introductorio del artículo de prueba 3.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "2025-01-11",
      readTime: "4 min",
      slug: "test-3"
    },
    {
      image: "https://my-page-negiupp.s3.amazonaws.com/1707936447902.jpg",
      title: "Título del artículo de prueba 1",
      intro: "Este es un resumen introductorio del artículo de prueba 1.",
      date: "2025-01-09",
      readTime: "5 min",
      slug: "test-4"
    },
    {
      image: "https://pandorai.ch/_next/image?url=https%3A%2F%2Fmy-page-negiupp.s3.amazonaws.com%2F1733502993844.jpg&w=640&q=75",
      title: "Título del artículo de prueba 2",
      intro: "Este es un resumen introductorio del artículo de prueba 2.",
      date: "2025-01-10",
      readTime: "3 min",
      slug: "test-5"
    },
    {
      image: "https://pandorai.ch/_next/image?url=https%3A%2F%2Fmy-page-negiupp.s3.amazonaws.com%2F1733502405470.jpg&w=640&q=75",
      title: "Título del artículo de prueba 3",
      intro: "Este es un resumen introductorio del artículo de prueba 3. ",
      date: "2025-01-11",
      readTime: "4 min",
      slug: "test-6"
    },
    {
      image: "https://my-page-negiupp.s3.amazonaws.com/1707936447902.jpg",
      title: "Título del artículo de prueba 1",
      intro: "Este es un resumen introductorio del artículo de prueba 1.",
      date: "2025-01-09",
      readTime: "5 min",
      slug: "test-7"
    },
    {
      image: "https://pandorai.ch/_next/image?url=https%3A%2F%2Fmy-page-negiupp.s3.amazonaws.com%2F1733502993844.jpg&w=640&q=75",
      title: "Título del artículo de prueba 2",
      intro: "Este es un resumen introductorio del artículo de prueba 2.",
      date: "2025-01-10",
      readTime: "3 min",
      slug: "test-8"
    },
    {
      image: "https://pandorai.ch/_next/image?url=https%3A%2F%2Fmy-page-negiupp.s3.amazonaws.com%2F1733502405470.jpg&w=640&q=75",
      title: "Título del artículo de prueba 3",
      intro: "Este es un resumen introductorio del artículo de prueba 3.",
      date: "2025-01-11",
      readTime: "4 min",
      slug: "test-9"
    }
  ];

  const t = useTranslations('blog');
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-8">{t('sub_title_two')}</h2>

      {/* ---> 3. Aplicar las variantes al contenedor de la grilla */}
      <motion.div
        className="grid grid-cols-1 custom2:grid-cols-2 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {testData.map((article) => (
          // ---> 4. Envolver cada tarjeta en un motion.div para la animación individual
          <motion.div key={article.slug} variants={itemVariants}>
            <CardArticle
              image={article.image}
              title={article.title}
              intro={article.intro}
              date={article.date}
              slug={article.slug}
              readTime={article.readTime}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default ArticlesContainer