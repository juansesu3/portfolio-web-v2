"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import {
    FaArrowRight,
    FaRobot,
    FaCalendarAlt,
    FaBolt,
    FaChartLine,
    FaShieldAlt,
    FaFileCode,
    FaMousePointer,
} from "react-icons/fa";

// --- Variantes de Animación para Framer Motion ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100 },
    },
};

// --- Objeto de Iconos ---





// --- Página Principal ---
const Page: React.FC = () => {
    const t = useTranslations('projects.projects.ai_rox_pro.inside')
          const pathname = usePathname();
          const locale = useMemo(() => pathname.split('/')[1] || 'en', [pathname]);

    const featuresData = [
        {
            title: t('sect_2.list.1.title'),
            description: t('sect_2.list.1.description'),
            icon: <FaRobot className="w-8 h-8 mb-4 text-purple-600" />
        },
        {
            title: t('sect_2.list.2.title'),
            description: t('sect_2.list.2.description'),
            icon: <FaCalendarAlt className="w-8 h-8 mb-4 text-purple-600" />
        },
        {
            title: t('sect_2.list.3.title'),
            description: t('sect_2.list.3.description'),
            icon: <FaBolt className="w-8 h-8 mb-4 text-purple-600" />
        },
        {
            title: t('sect_2.list.4.title'),
            description: t('sect_2.list.4.description'),
            icon: <FaChartLine className="w-8 h-8 mb-4 text-purple-600" />
        },
        {
            title: t('sect_2.list.5.title'),
            description: t('sect_2.list.5.description'),
            icon: <FaShieldAlt className="w-8 h-8 mb-4 text-purple-600" />
        },
        {
            title: t('sect_2.list.6.title'),
            description: t('sect_2.list.6.description'),
            icon: <FaFileCode className="w-8 h-8 mb-4 text-purple-600" />
        }
    ];
    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            {/* --- Hero --- */}
            <main className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                <div className="container mx-auto px-6 py-24 md:py-32 text-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-6"
                    >
                        <Image
                            src="https://my-page-negiupp.s3.amazonaws.com/1751454106820.png"
                            alt="Rox Pro Logo"
                            width={120}
                            height={120}
                            className="mx-auto rounded-2xl shadow-lg"
                            unoptimized
                        />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4"
                    >
                        {t('sect_1.title')}
                        <br />
                        <span className="text-purple-600">{t('sect_1.title_2')}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="max-w-2xl mx-auto text-lg text-gray-600 mb-10"
                    >
                        {t('sect_1.description')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    >
                        <a
                            href="hyrox-pro.vercel.app"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
                        >
                            {t('sect_1.cta')} <FaArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </main>

            {/* --- Sección de Características --- */}
            <section id="features" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {t('sect_2.title')}
                        </h2>
                        <p className="max-w-xl mx-auto text-gray-600 mt-4">
                            {t('sect_2.description')}
                        </p>
                    </div>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}>
                        {featuresData.map((feature) => (
                            <motion.div
                                key={feature.title} // Usamos el título como key único
                                variants={itemVariants} // Tus variantes
                                className="bg-white p-6 rounded-2xl shadow-md border border-gray-200/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                {feature.icon} {/* <-- Icono dinámico */}
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {feature.title} {/* <-- Título dinámico */}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {feature.description} {/* <-- Descripción dinámica */}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- Showcase --- */}
            <section id="showcase" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {t('sect_3.title')}
                        </h2>
                        <p className="max-w-xl mx-auto text-gray-600 mt-4">
                            {t('sect_3.description')}
                        </p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center"
                    >
                        <div className="lg:col-span-3 p-4 bg-gray-100 rounded-2xl shadow-2xl border border-gray-200/80">
                            <Image
                                src="https://placehold.co/1200x800/f3e8ff/9333ea?text=Screenshot+Principal+de+la+App"
                                alt="App Screenshot Principal"
                                width={1200}
                                height={800}
                                className="rounded-lg"
                                unoptimized
                            />
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            <div className="p-3 bg-gray-100 rounded-2xl shadow-lg border border-gray-200/80">
                                <Image
                                    src="https://placehold.co/800x600/f3e8ff/9333ea?text=Vista+Detalle"
                                    alt="App Screenshot Detalle"
                                    width={800}
                                    height={600}
                                    className="rounded-lg"
                                    unoptimized
                                />
                            </div>
                            <div className="p-3 bg-gray-100 rounded-2xl shadow-lg border border-gray-200/80">
                                <Image
                                    src="https://placehold.co/800x600/f3e8ff/9333ea?text=Feedback+IA"
                                    alt="App Screenshot Feedback IA"
                                    width={800}
                                    height={600}
                                    className="rounded-lg"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- CTA --- */}
            <section id="cta" className="bg-gray-50">
                <div className="container mx-auto px-6 py-20 text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={containerVariants}
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl md:text-4xl font-bold text-gray-900"
                        >
                            {t('sec_4.title')}
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="max-w-xl mx-auto text-gray-600 mt-4 mb-8"
                        >
                            {t('sec_4.description')}
                        </motion.p>
                        <motion.div variants={itemVariants}>
                            <a
                                href="hyrox-pro.vercel.app"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
                            >
                                {t('sec_4.cta')} <FaMousePointer className="w-5 h-5" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* --- Footer --- */}
            <footer className="bg-white py-8">
                <div className="container mx-auto px-6 text-center text-gray-500">
                    <p>
                        &copy; {new Date().getFullYear()} pandorai.ch  {t('sec_4.closed')}.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Page;
