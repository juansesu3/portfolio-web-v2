'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaCode, FaPalette, FaShieldAlt, FaLightbulb, FaUserCheck } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

// --- Datos Estructurados para los Servicios y Principios ---





// --- Variantes de Animación ---
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};


const Page = () => {

  const t = useTranslations('how_can_i_help_you')

  const principles = [
    { icon: FaShieldAlt, name: t('sect_2.list.1') },
    { icon: FaLightbulb, name: t('sect_2.list.2') },
    { icon: FaUserCheck, name: t('sect_2.list.3') }
  ];

  const services = [
    {
      icon: FaBrain,
      title: t('list.1.title'),
      description: t('list.1.description'),
      keywords: ["OpenAI", "LangChain", "Python", "Automation"],
      accentColor: "#9333ea" // Tu color principal
    },
    {
      icon: FaCode,
      title: t('list.2.title'),
      description: t('list.2.description'),
      keywords: ["Next.js", "React", "TypeScript", "Node.js"],
      accentColor: "#3b82f6" // Un color secundario para el espectro
    },
    {
      icon: FaPalette,
      title: t('list.3.title'),
      description: t('list.3.description'),
      keywords: ["Figma", "User Research", "Prototyping"],
      accentColor: "#10b981" // Un tercer color para el espectro
    }
  ];
  return (
    <section className="w-full bg-white py-20 sm:py-28">
      <motion.div
        className="max-w-7xl mx-auto px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* ---> 1. El Título y el Puente Narrativo */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-slate-900 text-center"
        >
          {t('title_1')} <span className="text-purple-500">{t('title_2')}</span> {t('title_3')}
          {t('title_4')} <span className="text-purple-500">{t('title_5')}</span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 text-center"
        >
          {t('description_1')} "<span className="text-purple-500 font-semibold">Never Give Up</span>" {t('description_2')}
        </motion.p>
      </motion.div>

      {/* ---> 2. El Prisma de Servicios */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="relative bg-slate-50 rounded-xl p-8 border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              style={{ '--accent-color': service.accentColor } as React.CSSProperties}
            >
              {/* Resplandor de la tarjeta al pasar el cursor */}
              <div className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: `radial-gradient(400px at center, ${service.accentColor}15, transparent 80%)` }}>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="relative z-10">
                <div className="p-3 inline-block rounded-lg mb-4" style={{ backgroundColor: `${service.accentColor}1A` }}>
                  <service.icon className="text-3xl" style={{ color: service.accentColor }} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4 text-sm">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.keywords.map(keyword => (
                    <span key={keyword} className="text-xs font-medium text-slate-700 bg-slate-200/70 px-2 py-1 rounded-full">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ---> 3. Principios Fundamentales */}
      <motion.div
        className="max-w-4xl mx-auto mt-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h3 variants={itemVariants} className="text-2xl font-bold text-slate-800">{t('sect_2.title')}</motion.h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {principles.map(principle => (
            <motion.div variants={itemVariants} key={principle.name} className="flex items-center justify-center gap-3 p-4 bg-slate-100/80 rounded-lg border border-slate-200/80">
              <principle.icon className="text-xl text-purple-600" style={{ color: '#9333ea' }} />
              <span className="font-semibold text-slate-700">{principle.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ---> 4. Llamada a la Acción Final */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-bold text-slate-900">{t('sect_3.title')}</h3>
        <p className="mt-2 text-lg text-slate-600">{t('sect_3.description')}</p>
        <motion.button
          className="mt-6 px-8 py-3 text-lg font-semibold text-white rounded-lg shadow-lg"
          style={{ backgroundColor: '#9333ea' }}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(147, 51, 234, 0.25)" }}
          whileTap={{ scale: 0.95 }}
        >
          {t('sect_3.cta')}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Page;