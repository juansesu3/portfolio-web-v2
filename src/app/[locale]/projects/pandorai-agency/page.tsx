'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const page = () => {
    const stack = [
        'Next.js',
        'Tailwind CSS',
        'Typescript',
        'Python',
        'LangChain',
        'OpenAI API',
        'Pinecone',
        'Supabase',
    ]

    const steps = [
        { title: 'Diagnóstico', desc: 'Analizamos tus procesos y detectamos oportunidades.' },
        { title: 'Diseño de Agente', desc: 'Creamos un plan técnico y estratégico a medida.' },
        { title: 'Desarrollo', desc: 'Construimos e integramos el agente en tu entorno.' },
        { title: 'Entrenamiento', desc: 'Ajustamos el comportamiento con tus datos y reglas.' },
        { title: 'Despliegue y soporte', desc: 'Lanzamos y damos seguimiento activo.' },
    ]

    const services = [
        'Desarrollo de agentes autónomos',
        'Integración de modelos de lenguaje (LLMs)',
        'Automatización de procesos empresariales',
        'Copilots y asistentes personalizados',
        'Consultoría en IA generativa',
        'Entrenamiento de modelos con datos privados',
    ]

    return (
        <main className="bg-white text-gray-900 font-sans scroll-smooth">
            {/* HERO */}
            <section className="min-h-screen flex items-center justify-center  py-16 ">
                <motion.div
                    className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
                        viewport={{ once: true }}
                        className="w-full flex justify-center"
                    >
                        <Image
                            src="https://my-page-negiupp.s3.amazonaws.com/1750758622623.PNG"
                            alt="Hero PandorAI"
                            width={600}  // ajustado para que no se estire tanto
                            height={400}
                            className=" object-contain"
                            priority
                        />
                    </motion.div>

                    {/* TEXT */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                            Potenciamos tu empresa con{' '}
                            <span className="text-purple-600">IA Generativa</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                            En PandorAI desarrollamos agentes de inteligencia artificial a medida para automatizar procesos, mejorar operaciones y escalar tu negocio.
                        </p>
                        <a
                            href="#contacto"
                            className="inline-block bg-purple-600 text-white py-3 px-6 rounded-md font-medium hover:bg-purple-700 transition"
                        >
                            Conoce más
                        </a>
                    </motion.div>
                </motion.div>
            </section>



            {/* ABOUT */}
            <section className="py-20 px-6 bg-white">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h2 className="text-3xl font-bold mb-4">Sobre PandorAI</h2>
                    <p className="text-gray-700 text-lg mb-4">
                        Somos una agencia especializada en inteligencia artificial generativa. Creamos soluciones personalizadas para empresas que quieren adoptar IA sin complicaciones.
                    </p>
                    <p className="text-gray-700 text-lg">
                        Mi rol dentro del equipo es liderar el diseño de soluciones, integraciones técnicas y desarrollo de agentes autónomos. Tengo experiencia en Next.js, APIs, procesamiento de lenguaje natural (NLP) y arquitectura IA.
                    </p>
                </motion.div>
            </section>

            {/* TECHNOLOGIES */}
            <section className="py-20 px-6 bg-gray-100">
                <motion.div
                    className="max-w-5xl mx-auto text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h2 className="text-3xl font-bold mb-6">Tecnologías que usamos</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {stack.map((tech) => (
                            <motion.span
                                key={tech}
                                className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium"
                                whileHover={{ scale: 1.1 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* PROCESS */}
            <section className="py-20 px-6 bg-white">
                <motion.div
                    className="max-w-5xl mx-auto text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h2 className="text-3xl font-bold mb-6">Nuestro Proceso</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        {steps.map(({ title, desc }, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: idx * 0.1 } }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl font-semibold text-purple-600 mb-2">{title}</h3>
                                <p className="text-gray-600">{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* SERVICES */}
            <section className="py-20 px-6 bg-gray-100">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h2 className="text-3xl font-bold mb-6">Qué hacemos</h2>
                    <ul className="space-y-4 text-left text-gray-700">
                        {services.map((s, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-purple-600 mt-1">✔</span>
                                <span>{s}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-purple-800 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-4">¿Listo para trabajar con inteligencia artificial?</h2>
                    <p className="mb-6 text-lg">Contáctanos y lleva tu negocio al siguiente nivel.</p>
                    <motion.a
                        href="mailto:contact@pandorai.ch"
                        className="inline-block bg-white text-purple-700 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Escríbenos
                    </motion.a>
                </motion.div>
            </section>
        </main>
    )
}

export default page
