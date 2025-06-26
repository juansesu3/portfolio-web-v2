'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import { FaCode, FaServer, FaCogs, FaTools, FaDatabase, FaRocket, FaGithub, FaGitAlt, FaClipboardCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image'; // ---> Importar Image de Next.js

// --- Variantes de Animación ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 150, damping: 15 } },
};

// ---> Nuevas variantes para la sección de dos columnas
const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80 } },
}

const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80 } },
}


const WebDevelopmentServices = () => {
  const t = useTranslations("services.web_development");
  const technologies = [
    { name: 'Next.js', icon: <FaRocket className="text-blue-500 text-4xl" /> },
    { name: 'React', icon: <FaCode className="text-cyan-500 text-4xl" /> },
    { name: 'TypeScript', icon: <FaCogs className="text-blue-600 text-4xl" /> },
    { name: 'JavaScript', icon: <FaCode className="text-yellow-500 text-4xl" /> },
    { name: 'Python', icon: <FaServer className="text-green-600 text-4xl" /> },
    { name: 'OpenAI', icon: <FaRocket className="text-indigo-500 text-4xl" /> },
    { name: 'MongoDB', icon: <FaDatabase className="text-green-500 text-4xl" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-500 text-4xl" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-800 text-4xl" /> },
    { name: 'CI/CD', icon: <FaTools className="text-red-500 text-4xl" /> },
    { name: 'DBMS', icon: <FaDatabase className="text-teal-500 text-4xl" /> },
  ];

  const titleString = t('title');

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 py-16 sm:py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* ---> 1. Título con colores alternados */}
      <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-center mb-6">
        {titleString.split(' ').map((word, index) => (
          <span key={index} className={index % 2 === 0 ? 'text-purple-600' : 'text-gray-900'}>
            {word}{' '}
          </span>
        ))}
      </motion.h1>

      <motion.p variants={itemVariants} className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
        {t('description')}
      </motion.p>
      
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        variants={containerVariants}
      >
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
            className="flex flex-col items-center justify-center p-6 bg-gray-50/80 rounded-xl shadow-sm cursor-pointer min-h-[140px] gap-3"
          >
            {tech.icon}
            <h3 className="text-lg font-semibold text-gray-800 text-center">{tech.name}</h3>
          </motion.div>
        ))}
      </motion.div>

      {/* ---> 2. Sección de metodologías rediseñada, animada y con imagen */}
      <motion.div 
        className="bg-slate-50 rounded-xl shadow-md p-8 mt-16 overflow-hidden" // Ocultar overflow para que las animaciones de slide se vean limpias
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Columna de Texto */}
            <motion.div variants={slideInLeft}>
                <div className='flex items-start gap-6'>
                    <FaClipboardCheck className="text-purple-600 text-5xl flex-shrink-0 mt-1" />
                    <div>
                        <h2 className="text-2xl font-bold text-purple-800 mb-3">{t('metodologies.title')}</h2>
                        <p className="text-gray-700 leading-relaxed">
                            {t('metodologies.descrition')}
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Columna de Imagen */}
            <motion.div variants={slideInRight} className="flex justify-center items-center">
                <Image
                    src="https://my-page-negiupp.s3.amazonaws.com/1750928977694.png" // URL de imagen alusiva
                    alt="Diagrama de metodologías ágiles"
                    width={500}
                    height={400}
                    className="rounded-lg object-cover"
                />
            </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WebDevelopmentServices;