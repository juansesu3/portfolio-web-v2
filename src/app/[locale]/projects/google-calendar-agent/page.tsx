'use client';
import React from 'react';
import DiagramaFlujoInteractivo from '@/app/components/projects/DiagramaFlujoInteractivo';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import Image from 'next/image';

const page = () => {
    return (
        <div className="bg-white text-gray-800 overflow-x-hidden">
            {/* 🟣 Hero Full Screen */}
            <section className="h-screen flex flex-col justify-center items-center text-center  bg-white relative">
                <Image src="https://my-page-negiupp.s3.amazonaws.com/1750751608365.png" width={400} height={400} alt="Sebastián" className="w-24 h-24 object-cover" />
                <motion.h1
                    className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="text-purple-600">Sebastián</span>, tu Asistente Inteligente
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-gray-700 max-w-2xl mb-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Automatiza la gestión de tus{' '}
                    <span className="text-purple-500 font-semibold">citas y eventos</span> desde{' '}
                    <span className="text-purple-500 font-semibold">WhatsApp</span> usando{' '}
                    <span className="text-purple-500 font-semibold">IA y Google Calendar</span>.
                </motion.p>

                <motion.div
                    className="animate-bounce mt-10 text-purple-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <FaArrowDown size={28} />
                </motion.div>
            </section>

            {/* 🎯 Interactive Flow Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto text-center ">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Cómo funciona nuestro flujo
                    </motion.h2>
                    <motion.p
                        className="text-gray-600 text-lg mb-12"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Este diagrama representa el proceso completo: desde que el usuario envía un mensaje por WhatsApp hasta que el asistente responde con IA y gestiona el calendario.
                    </motion.p>
                    <motion.div
                        className="rounded-lg shadow-md overflow-hidden border border-gray-200"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <DiagramaFlujoInteractivo />
                    </motion.div>
                </div>
            </section>

            {/* 🔁 Step-by-step section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-5xl mx-auto ">
                    <motion.h3
                        className="text-2xl font-semibold mb-12 text-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Flujo paso a paso
                    </motion.h3>
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 text-center">
                        {[
                            { title: '📥 Recibe mensaje', desc: 'El usuario escribe por WhatsApp.' },
                            { title: '🤖 IA responde', desc: 'El agente interpreta y analiza el mensaje.' },
                            { title: '📅 Calendar API', desc: 'Consulta, agenda o cancela eventos.' },
                            { title: '💬 Respuesta cálida', desc: 'Responde al usuario con empatía.' },
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                                <p className="text-gray-600">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🖼 Screenshot Gallery */}
            <section className="py-20  bg-white">
                <div className="max-w-5xl mx-auto text-center ">
                    <motion.h3
                        className="text-2xl font-bold mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Capturas del asistente en acción
                    </motion.h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            'https://my-page-negiupp.s3.amazonaws.com/1750748342077.PNG',
                            'https://my-page-negiupp.s3.amazonaws.com/1750748348421.PNG',
                        ].map((src) => (
                            <motion.div
                                key={src}
                                className="rounded-xl overflow-hidden shadow-lg border border-gray-200"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <img src={src} alt="Screenshot" className="w-full object-cover" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🚀 Footer */}
            <section className="relative overflow-hidden bg-white text-gray-900 py-20">
                {/* Fondo decorativo animado muy sutil */}
                <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#a855f7]/20 via-transparent to-transparent pointer-events-none animate-pulse" />

                <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold mb-6"
                    >
                        <span className="text-[#a855f7]">¿Te interesa</span>{' '}
                        <span className="text-gray-900">un proyecto así?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl mb-10 text-gray-700"
                    >
                        Estoy disponible para nuevas oportunidades, colaboraciones o ayudarte a impulsar tu negocio con IA.
                    </motion.p>

                    <motion.a
                              href="/contacto"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.97 }}
                              className="inline-flex items-center gap-3 bg-[#a855f7] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#9333ea] transition"
                            >
                              {/* <IoIosSend size={20} className="text-white" /> */}
                              Contactar ahora
                            </motion.a>
                </div>
            </section>

        </div>
    );
};

export default page;
