'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { motion, Variants } from 'framer-motion'

// --- Variantes de animación mejoradas ---

// 1. Orquesta la animación principal (texto vs imagen)
const containerVariants:Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Un ligero retraso entre el bloque de texto y la imagen
    },
  },
}

// 2. Orquesta los elementos dentro del bloque de texto (título, párrafo, botón)
const textContainerVariants:Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Un retraso más corto para una secuencia rápida
    },
  },
}


// 3. Animación con "spring" para cada elemento de texto
const itemVariants:Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

// 4. Animación de "pop-in" para la imagen
const imageVariants:Variants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 10,
    },
  },
}


const HeroProjects = () => {
  const t = useTranslations("projects")
  return (
    <section className="relative py-16">
      {/* Contenido principal con el orquestador de animación */}
      <motion.div
        className="flex items-center sm:flex-row flex-col-reverse justify-between"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Contenedor del texto que ahora también orquesta a sus hijos */}
        <motion.div
          className="max-w-2xl text-left"
          variants={textContainerVariants}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-center sm:text-left"
            variants={itemVariants}
          >
            {t('title')}<br /> <span className="text-purple-500">{t('title_two')}</span>
          </motion.h1>

          {/* Imagen móvil con su propia animación cool */}
          <motion.div className="flex sm:hidden mb-4" variants={imageVariants}>
            <Image
              src="https://my-page-negiupp.s3.amazonaws.com/1750917720544.png"
              alt="Proyectos creativos"
              width={500}
              height={500}
              className="rounded-lg md:max-w-52 max-w-40 mx-auto"
            />
          </motion.div>

          <motion.p
            className="text-lg md:text-xl mb-8 text-center sm:text-left"
            variants={itemVariants}
          >
            {t('sub_title')}
          </motion.p>

          <motion.div
            className="flex sm:justify-start justify-center gap-4"
            variants={itemVariants}
          >
            {/* El Link ahora tiene animación al pasar el cursor y al hacer clic */}
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#portfolio"
                className="bg-purple-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-400 hover:shadow-xl transition-colors duration-300"
              >
                {t('cta_btn')}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Imagen destacada para escritorio con la nueva animación */}
        <motion.div className="sm:flex hidden" variants={imageVariants}>
          <Image
            src="https://my-page-negiupp.s3.amazonaws.com/1750917720544.png"
            alt="Proyectos creativos"
            width={500}
            height={500}
            className="rounded-lg md:max-w-72 max-w-52 mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroProjects