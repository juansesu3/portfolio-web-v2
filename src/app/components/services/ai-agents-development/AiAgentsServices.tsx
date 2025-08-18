'use client'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { FaRobot, FaIndustry, FaChartLine, FaShoppingCart, FaUserTie } from 'react-icons/fa';
import { motion, AnimatePresence, Variants } from 'framer-motion'; // ---> 1. Importaciones necesarias

const AiAgentsServices = () => {
  type ServiceTabs = 'development' | 'benefits' | 'ecommerce';
  const [activeTab, setActiveTab] = useState<ServiceTabs>('development');
  const t = useTranslations("services.ai_agents_development");

  // --- Variantes de Animación ---
  const containerVariants:Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const contentVariants:Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } },
  };
  
  // Datos originales (sin cambios)
  const services = {
    development: {
        title: "Desarrollo de Agentes de IA",
        description: `
        <p>${t('sections.development.description')}</p>
        
        <h3 class="text-lg font-semibold mt-4">${t('sections.development.avanced_techniques.title')}:</h3>
        <ul class="list-disc list-inside ml-4">
          <li>
            <strong>${t('sections.development.avanced_techniques.list.one.title')}:</strong> ${t('sections.development.avanced_techniques.list.one.description')}
          </li>
          <li>
            <strong>${t('sections.development.avanced_techniques.list.two.title')}:</strong> ${t('sections.development.avanced_techniques.list.two.description')}
          </li>
          <li>
            <strong>${t('sections.development.avanced_techniques.list.three.title')}:</strong> ${t('sections.development.avanced_techniques.list.three.description')}
          </li>
        </ul>
    
        <h3 class="text-lg font-semibold mt-4">${t('sections.development.key_features.title')}:</h3>
        <ul class="list-disc list-inside ml-4">
          <li>${t('sections.development.key_features.one')}</li>
          <li>${t('sections.development.key_features.two')}</li>
          <li>${t('sections.development.key_features.three')}</li>
        </ul>
      `,
      },
      benefits: {
        title: "Beneficios Clave",
        description: `
          <p>${t('sections.benefits.description')}</p>
      
          <h3 class="text-lg font-semibold mt-4">${t('sections.benefits.highlighted_benefits.title')}:</h3>
          <ul class="list-disc list-inside ml-4">
            <li>
              <strong>${t('sections.benefits.highlighted_benefits.list.one.title')}:</strong> ${t('sections.benefits.highlighted_benefits.list.one.description')}
            </li>
            <li>
              <strong>${t('sections.benefits.highlighted_benefits.list.two.title')}:</strong> ${t('sections.benefits.highlighted_benefits.list.two.description')}
            </li>
            <li>
              <strong>${t('sections.benefits.highlighted_benefits.list.three.title')}:</strong> ${t('sections.benefits.highlighted_benefits.list.three.description')}
            </li>
            <li>
              <strong>${t('sections.benefits.highlighted_benefits.list.four.title')}:</strong> ${t('sections.benefits.highlighted_benefits.list.four.description')}
            </li>
            <li>
              <strong>${t('sections.benefits.highlighted_benefits.list.five.title')}:</strong> ${t('sections.benefits.highlighted_benefits.list.five.description')}
            </li>
          </ul>
        `,
      },
      ecommerce: {
        title: "Agentes de IA para Comercio Electrónico",
        description: `
          <p>${t('sections.ecommerce.content.introduction')}</p>
          
          <h3 class="text-lg font-semibold mt-4">${t('sections.ecommerce.content.key_aplications.title')}:</h3>
          <ul class="list-disc list-inside ml-4">
            <li>
              <strong>${t('sections.ecommerce.content.key_aplications.list.one.title')}:</strong> ${t('sections.ecommerce.content.key_aplications.list.one.description')}
            </li>
            <li>
              <strong>${t('sections.ecommerce.content.key_aplications.list.two.title')}:</strong> ${t('sections.ecommerce.content.key_aplications.list.two.description')}
            </li>
            <li>
              <strong>G${t('sections.ecommerce.content.key_aplications.list.three.title')}:</strong> ${t('sections.ecommerce.content.key_aplications.list.three.description')}
            </li>
            <li>
              <strong>${t('sections.ecommerce.content.key_aplications.list.four.title')}:</strong> ${t('sections.ecommerce.content.key_aplications.list.four.description')}
            </li>
          </ul>
          
          <h3 class="text-lg font-semibold mt-4">${t('sections.ecommerce.content.key_benefit.title')}:</h3>
          <ul class="list-disc list-inside ml-4">
            <li>${t('sections.ecommerce.content.key_benefit.list.one')}</li>
            <li>${t('sections.ecommerce.content.key_benefit.list.two')}</li>
            <li>${t('sections.ecommerce.content.key_benefit.list.three')}</li>
            <li>${t('sections.ecommerce.content.key_benefit.list.four')}</li>
          </ul>
        `,
      },
  };
  
  const TABS = [
    { id: 'ecommerce', title: t('sections.ecommerce.title') },
    { id: 'development', title: t('sections.development.title') },
    { id: 'benefits', title: t('sections.benefits.title') },
  ];

  return (
    <motion.div 
      className="max-w-5xl mx-auto py-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants} className="text-4xl font-bold text-center mb-8 text-purple-500">
        {t('title')}
      </motion.h1>
      <motion.div variants={itemVariants} className='flex justify-center items-center w-[200px] h-[200px] mx-auto '>
        <Image src={'https://my-page-negiupp.s3.amazonaws.com/1750929062690.png'} width={500} height={500} alt='ai-chip'></Image>
      </motion.div>

      {/* ---> 2. Pestañas animadas */}
      <motion.div variants={itemVariants} className="flex justify-center mb-6 space-x-4 overflow-x-auto scroll-snap-x py-2 scrollbar-hide">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as ServiceTabs)}
            className={`px-4 py-2 rounded-lg text-sm text-nowrap font-medium relative ${activeTab === tab.id ? 'text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab-indicator"
                className="absolute inset-0 bg-purple-500 rounded-lg -z-10"
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              />
            )}
            <span className="relative z-10">{tab.title}</span>
          </button>
        ))}
      </motion.div>

      {/* ---> 3. Contenido de las pestañas con transición suave */}
      <div className="bg-white rounded-lg py-6 px-4 min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            dangerouslySetInnerHTML={{ __html: services[activeTab]?.description }}
          />
        </AnimatePresence>
      </div>
      
      {/* ---> 4. Grid de tarjetas con animación escalonada */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
        variants={containerVariants}
      >
        {[
          { icon: <FaRobot className="text-blue-600 text-3xl mr-4" />, title: "Automatización", text: "Automatiza procesos complejos con agentes inteligentes." },
          { icon: <FaIndustry className="text-green-600 text-3xl mr-4" />, title: "Industria 4.0", text: "Optimiza la manufactura y logística con IA." },
          { icon: <FaChartLine className="text-purple-600 text-3xl mr-4" />, title: "Analítica Predictiva", text: "Anticipa tendencias de mercado con machine learning." },
          { icon: <FaShoppingCart className="text-orange-600 text-3xl mr-4" />, title: "Personalización", text: "Mejora las recomendaciones con IA inteligente." },
          { icon: <FaUserTie className="text-red-600 text-3xl mr-4" />, title: "Soporte al Cliente", text: "Asistentes virtuales que responden en tiempo real." },
        ].map((item, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.03 }}
            className="flex items-center p-4 bg-gray-50 rounded-lg shadow"
          >
            {item.icon}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AiAgentsServices;