'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'; // ---> 1. Importar motion

// ---> 2. Definir variantes de animación
const containerVariants = {
  hidden: { opacity: 1 }, // El contenedor en sí no se anima, solo orquesta
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Retraso entre la animación del bloque de texto y la imagen
    },
  },
};

const textBlockVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Retraso entre la animación del h1, p y el botón
        },
    }
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', duration: 0.8 } },
};


const Hero = () => {
    const t = useTranslations('blog');
    
    return (
        <div className="relative py-8">
            {/* ---> 3. Aplicar variantes al contenedor principal */}
            <motion.div 
                className="max-w-7xl mx-auto flex flex-row items-center justify-between"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* ---> 4. Animar el contenedor del texto como un grupo */}
                <motion.div className="text-left w-1/2" variants={textBlockVariants}>
                    <motion.h1 
                        className="text-4xl md:text-6xl font-bold mb-6 leading-tight whitespace-nowrap"
                        variants={itemVariants}
                    >
                        <span className='text-purple-500'>{t('title')}</span>  {t('title_two')} <br />
                        {t('title_three')}
                    </motion.h1>
                    <motion.p 
                        className="mt-4 text-md sm:text-xl"
                        variants={itemVariants}
                    >
                        {t('sub_title')}
                    </motion.p>
                    <motion.div 
                        className="mt-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto"
                        variants={itemVariants}
                    >
                        {/* Input estilizado */}
                        <input
                            type="text"
                            placeholder={ t('cta_input')}
                            className="px-4 py-2 w-full sm:w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 mb-4 sm:mb-0"
                        />
                        {/* Botón estilizado */}
                        <button className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto">
                            {t('cta_btn')}
                        </button>
                    </motion.div>
 
                </motion.div>
                {/* ---> 5. Animar el contenedor de la imagen */}
                <motion.div 
                    className="w-1/2 flex justify-end"
                    variants={imageVariants}
                >
                    <Image
                        width={500}
                        height={500}
                        src="https://my-page-negiupp.s3.amazonaws.com/1736414784389.png"
                        alt="Imagen destacada"
                        className="w-full max-w-40 sm:max-w-72 transform scale-x-[-1]"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;