'use client';
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaEye, FaShieldAlt, FaRocket, FaTrophy, FaMountain, FaLightbulb } from 'react-icons/fa';
import Image from 'next/image';

// --- Datos Estructurados para el Viaje (sin cambios) ---
const journeySteps = [
    {
        icon: FaMountain,
        text: "Throughout my life, I've encountered a series of challenges that have propelled me to discover new strengths and consistently strive for the best version of myself. Each obstacle has transformed into an opportunity for personal evolution and the development of greater resilience."
    },
    {
        icon: FaShieldAlt,
        text: "NeGiupp encapsulates the attitude of never giving up, of persisting even when circumstances are daunting. It reflects my unwavering determination to surmount barriers and achieve goals that once appeared unattainable. Through this approach, I've been able to learn, grow, and evolve across all facets of my life."
    },
    {
        icon: FaLightbulb,
        text: "In my professional trajectory and personal development, NeGiupp has become a guiding beacon towards continuous achievement and self-improvement. It serves as a constant reminder that difficulties are disguised opportunities and that resilience is the key to turning them into triumphs."
    },
    {
        icon: FaTrophy,
        text: "NeGiupp is a living testament to my belief that perseverance and the 'never give up' mindset pave the way for ongoing progress. Through this philosophy, I've unearthed the inner strength to confront any challenge and turn it into a stepping stone towards advancement on my journey towards growth and success."
    }
];

// --- El Componente Principal ---
const PersonalBrandPage = () => {


    const { scrollYProgress } = useScroll();
    const pathLength = useTransform(scrollYProgress, [0.15, 0.7], [0, 1]);

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
                    NeGiupp
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }} // También se retrasa
                    className="mt-4 max-w-xl text-lg md:text-xl text-slate-600"
                >
                    If you can imagine it, you can program it. Just never stop trying and, under no circumstances, give up!
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
                    <h2 className="text-3xl font-bold mb-4" style={{ color: '#9333ea' }}>A Commitment to Growth</h2>
                    <p className="text-lg text-slate-600">
                        NeGiupp is far more than a mere personal brand; it's a profound and unwavering commitment to growth and overcoming challenges. It embodies the 'Never Give Up' philosophy that has been the driving force behind every trial and achievement in my personal and professional journey.
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
                    ¡Never Give Up!
                </motion.h2>
            </div>
        </section>
    );
};

export default PersonalBrandPage;