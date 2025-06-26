'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaMobileAlt, FaLaptop, FaPaintBrush, FaUserFriends, FaDraftingCompass, FaEye
} from 'react-icons/fa';
import FeatureCard from './FeatureCard';

export const ICONS = {
  mobile: FaMobileAlt, visual: FaPaintBrush, prototyping: FaDraftingCompass,
  user: FaUserFriends, multi: FaLaptop, accessibility: FaEye
};

export type IconKey = keyof typeof ICONS;

const FEATURES: Array<{
  icon: IconKey; color: string; titleKey: string; descriptionKey: string;
}> = [
    { icon: 'mobile', color: 'text-blue-400', titleKey: 'list.one.title', descriptionKey: 'list.one.description' },
    { icon: 'visual', color: 'text-red-400', titleKey: 'list.two.title', descriptionKey: 'list.two.description' },
    { icon: 'prototyping', color: 'text-purple-400', titleKey: 'list.three.title', descriptionKey: 'list.three.description' },
    { icon: 'user', color: 'text-green-400', titleKey: 'list.four.title', descriptionKey: 'list.four.description' },
    { icon: 'multi', color: 'text-indigo-400', titleKey: 'list.five.title', descriptionKey: 'list.five.description' },
    { icon: 'accessibility', color: 'text-orange-400', titleKey: 'list.six.title', descriptionKey: 'list.six.description' }
  ];

// --- Variantes de Animación ---
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 80, delay: 0.2 } },
}

const UxUiDesign = () => {
  const t = useTranslations('services.ux-ui');

  return (
    <section className="relative max-w-7xl mx-auto py-16 sm:py-24 px-4 overflow-hidden">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('description')}
          </p>
        </motion.div>
        <motion.div variants={imageVariants} className="flex justify-center">
          <Image
            src="https://my-page-negiupp.s3.amazonaws.com/1750929734459.png"
            alt="Proceso de diseño UX/UI"
            width={500}
            height={500}
            className="w-full max-w-md"
          />
        </motion.div>
      </motion.div>

      {/* ---> 3. Grid de tarjetas de cristal animado */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {FEATURES.map((feature) => (
          <FeatureCard
            key={feature.titleKey}
            icon={feature.icon}
            color={feature.color}
            title={t(feature.titleKey)}
            description={t(feature.descriptionKey)}
          />
        ))}
      </motion.div >
    </section>
  );
};

export default UxUiDesign;