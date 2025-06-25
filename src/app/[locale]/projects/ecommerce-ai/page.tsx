'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { HiChevronDoubleDown } from 'react-icons/hi';
export const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' },
  }

const page = () => {


    const steps = [
        {
            title: '1. El usuario hace una consulta',
            description:
                'El sistema recibe una pregunta del cliente, como: “¿Qué producto me recomiendas para piel sensible?”.',
            img: 'https://my-page-negiupp.s3.amazonaws.com/1750670877179.jpg',
            reverse: false,
        },
        {
            title: '2. El agente analiza el perfil y responde',
            description:
                'La IA procesa la conversación, historial y preferencias del cliente, y recomienda productos específicos en tiempo real.',
            video: '/assets/chatmov.mov',
            img: 'https://my-page-negiupp.s3.amazonaws.com/1750670877179.jpg',
            reverse: true,
        },
    ];

    const stepshow = [
        'Explora Productos',
        'Agente recomienda',
        'Carrito de compras',
        'Pago automático',
        'Soporte postventa',
    ]

    return (
        <div>
           <section className="relative ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Textual Content */}
        <motion.div {...fadeUp}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            🛒 Ecommerce Inteligente con <span className="text-purple-600">IA Integrada</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-md">
            Plataforma de ecommerce con sistema de recomendaciones personalizadas, procesamiento automático de pedidos y atención al cliente con agentes inteligentes.
          </p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-purple-500 mb-2">👨‍💻 Mi rol</h2>
            <p className="text-gray-800">Desarrollo Full Stack: arquitectura, frontend, backend e integración con IA generativa.</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-purple-500 mb-2">🛠️ Stack Tecnológico</h2>
            <p className="text-gray-800">
              Next.js · TypeScript · Tailwind CSS · n8n · PostgreSQL · OpenAI API · Stripe · Google Cloud
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#overview"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Ver flujo del sistema
            </a>
            <a
              href="https://github.com/tuusuario/ecommerce-inteligente"
              target="_blank"
              className="border border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition"
            >
              Ver código en GitHub
            </a>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="https://my-page-negiupp.s3.amazonaws.com/1750670045607.jpg"
              alt="Mockup del ecommerce"
              className="w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-purple-500 text-3xl"
      >
        <a href="#overview" aria-label="Sigue bajando para ver más">
          <HiChevronDoubleDown />
        </a>
      </motion.div>
    </section>

            <section id="overview" className="py-20 bg-white text-gray-800">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-extrabold mb-16 text-center text-[#a855f7]"
                    >
                        ¿Cómo funciona el Ecommerce?
                    </motion.h2>

                    <div className="grid md:grid-cols-5 gap-8 text-center">
                        {stepshow.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center group hover:scale-105 transition-transform duration-300"
                            >
                                <div className="w-16 h-16 mb-4 bg-[#f3e8ff] text-[#a855f7] rounded-full flex items-center justify-center font-bold text-xl shadow-md group-hover:shadow-lg transition-shadow">
                                    {i + 1}
                                </div>
                                <p className="font-semibold text-gray-700 group-hover:text-[#a855f7] transition-colors duration-300">
                                    {step}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 py-20">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Recomendaciones inteligentes con búsqueda vectorial</h3>
                        <p className="text-gray-600 text-lg mb-6">
                            Nuestro sistema convierte tus consultas en vectores utilizando modelos de lenguaje (embeddings) y realiza una búsqueda semántica sobre una base de datos vectorizada de productos. Encuentra coincidencias por significado, no solo por palabras clave.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>Consulta del usuario transformada en vectores semánticos</li>
                            <li>Búsqueda inteligente en una base de datos de productos vectorizados</li>
                            <li>Resultados precisos, relevantes y personalizados en tiempo real</li>
                        </ul>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg bg-white p-4">
                        <img src="https://my-page-negiupp.s3.amazonaws.com/1750670285626.png" alt="Arquitectura de recomendación con IA" />
                    </div>
                </div>
            </section>
            <section className=" py-20">
                <div className="max-w-5xl mx-auto ">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-purple-600 mb-12 text-center"
                    >
                        ¿Cómo funciona el sistema de recomendaciones con IA?
                    </motion.h2>
                    <div className="space-y-16">
                        {steps.map(({ title, description, img, video, reverse }, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}
                            >
                                {video ? (
                                    <video
                                        src={video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full md:w-1/2 rounded-xl shadow-lg"
                                    />
                                ) : (
                                    <img
                                        src={img}
                                        alt={title}
                                        className="w-full md:w-1/2 rounded-xl shadow-lg"
                                    />
                                )}
                                <div className="md:w-1/2">
                                    <h3 className="text-xl font-semibold text-purple-500 mb-2">
                                        {title}
                                    </h3>
                                    <p className="text-gray-600">{description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
                        Tecnologías utilizadas
                    </h3>

                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 items-center justify-center">
                        {[
                            { name: "Next.js", src: "https://my-page-negiupp.s3.amazonaws.com/1750673075840.webp" },
                            { name: "Tailwind CSS", src: "https://my-page-negiupp.s3.amazonaws.com/1750674643422.png" },
                            { name: "TypeScript", src: "https://my-page-negiupp.s3.amazonaws.com/1750673498841.webp" },
                            { name: "python", src: "https://my-page-negiupp.s3.amazonaws.com/1750674739722.jpg" },
                            { name: "OpenAI", src: "https://my-page-negiupp.s3.amazonaws.com/1750673725972.webp" },
                            { name: "MongoDb", src: "https://my-page-negiupp.s3.amazonaws.com/1750674094602.png" },
                            { name: "Pinecone", src: "https://my-page-negiupp.s3.amazonaws.com/1750674173478.webp" },//
                            { name: "LangChain", src: "https://my-page-negiupp.s3.amazonaws.com/1750674827283.png" }, 
                            { name: "Stripe", src: "https://my-page-negiupp.s3.amazonaws.com/1750674558123.png" },
                            { name: "Google Cloud", src: "https://my-page-negiupp.s3.amazonaws.com/1750674676840.png" },
                            
                        ].map(({ name, src }, idx) => (
                            <div
                                key={idx}
                                className=" rounded-xl flex items-center justify-center"
                            >
                                <img
                                    src={src}
                                    alt={name}
                                    className="h-12 w-auto max-w-[120px] object-contain "
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            
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
    )
}

export default page