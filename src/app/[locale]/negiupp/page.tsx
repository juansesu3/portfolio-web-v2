'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {  FaShieldAlt, FaTrophy, FaMountain, FaLightbulb } from 'react-icons/fa';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// --- Datos Estructurados para el Viaje (sin cambios) ---


// --- El Componente Principal ---
const PersonalBrandPage = () => {


    const { scrollYProgress } = useScroll();
    const pathLength = useTransform(scrollYProgress, [0.15, 0.7], [0, 1]);
    const t = useTranslations('self_brand')

    const journeySteps = [
        {
            icon: FaMountain,
            text: t('sect_1.list.1'),
        },
        {
            icon: FaShieldAlt,
            text: t('sect_1.list.2'),
        },
        {
            icon: FaLightbulb,
            text: t('sect_1.list.3'),
        },
        {
            icon: FaTrophy,
            text: t('sect_1.list.4'),
        }
    ];
    return (
        // ---> 1. Fondo claro y texto oscuro
        <section className="relative w-full  text-slate-800 overflow-hidden">
            {/* ---> 2. Orbe de energía adaptado para fondo claro */}

            {/* ---> 3. Cabecera Heroica con nuevo color principal */}
            {/* ---> SECCIÓN DE CABECERA ACTUALIZADA <--- */}
            <div className="min-h-screen flex flex-col items-center justify-center text-center relative z-10">

                {/* 1. Imagen de la marca integrada con animación */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
                    className="mb-8" // Añade un espacio entre la imagen y el título
                >
                    <Image
                        src="https://my-page-negiupp.s3.amazonaws.com/1750931294444.webp"
                        alt="Logo de la marca NeGiupp"
                        width={200} // Ajusta el tamaño según tu preferencia
                        height={200}
                        className="" // Un poco de sombra para darle profundidad
                        priority // Importante para el rendimiento (LCP)
                    />
                </motion.div>

                {/* 2. El texto ahora aparece después de la imagen */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }} // Se retrasa un poco para entrar después de la imagen
                    className="font-black text-7xl md:text-9xl tracking-tighter text-black"
                >
                    {t('title')}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }} // También se retrasa
                    className="mt-4 max-w-xl text-lg md:text-xl text-slate-600"
                >
                    {t('description')}
                </motion.p>
            </div>

            {/* ---> 4. El Viaje de la Marca adaptado a la nueva paleta */}
            <div className="max-w-4xl mx-auto p-8 relative z-10">
                <div className="absolute left-1/2 lg:left-8 top-0 h-full w-1 -ml-0.5">
                    <div className="sticky top-0 h-screen">
                        <svg width="2" height="100%" viewBox="0 0 2 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 1 0 V 1200" stroke="url(#line-gradient-light)" strokeOpacity="0.2" strokeWidth="2" />
                            <motion.path
                                d="M 1 0 V 1200"
                                stroke="url(#line-gradient-light)"
                                strokeWidth="2"
                                style={{ pathLength }}
                            />
                            <defs>
                                <linearGradient id="line-gradient-light" x1="0" y1="0" x2="0" y2="100%">
                                    <stop offset="0%" stopColor="#9333ea" />
                                    <stop offset="100%" stopColor="#c084fc" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24 lg:pl-24"
                >
                    <h2 className="text-3xl font-bold mb-4" style={{ color: '#9333ea' }}>{t('sect_1.title')}</h2>
                    <p className="text-lg text-slate-600">
                        {t('sect_1.description')}
                    </p>
                </motion.div>

                {journeySteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 1 }}
                            className="mb-24 flex flex-col lg:flex-row items-start gap-8 lg:pl-24"
                        >
                            {/* Icono con nuevo estilo para fondo claro */}
                            <div className="p-4 bg-purple-100/80 border border-purple-200/80 rounded-full self-center lg:self-start">
                                <Icon className="text-purple-600 text-3xl" style={{ color: '#9333ea' }} />
                            </div>
                            <p className="text-lg text-slate-600 flex-1">{step.text}</p>
                        </motion.div>
                    )
                })}
            </div>

            {/* ---> 5. El Gran Final con el color de marca */}
            <div className="h-[50vh] flex items-center justify-center text-center p-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                    className="font-black text-6xl md:text-8xl"
                    style={{ color: '#9333ea' }}
                >
                    {t('sect_1.finished')}
                </motion.h2>
            </div>
        </section>
    );
};

export default PersonalBrandPage;