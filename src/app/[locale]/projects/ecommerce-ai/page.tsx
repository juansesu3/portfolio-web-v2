'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { img } from 'framer-motion/client';
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
    return (
        <div>
            <section className="bg-white text-gray-800 py-20 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    {/* Texto descriptivo */}
                    <div>
                        <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-purple-600">
                            🛒 Ecommerce Inteligente
                        </h1>
                        <p className="text-lg text-gray-600 mb-6">
                            Plataforma de ecommerce con sistema de recomendaciones basado en IA, procesamiento automatizado de pedidos y chat integrado para atención al cliente.
                        </p>

                        <div className="mb-6">
                            <h2 className="font-semibold text-xl text-purple-500 mb-2">👨‍💻 Mi rol</h2>
                            <p className="text-gray-700">
                                Desarrollo Full Stack: arquitectura, frontend, backend e integración de agentes de IA.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h2 className="font-semibold text-xl text-purple-500 mb-2">🛠️ Stack Tecnológico</h2>
                            <p className="text-gray-700">
                                Next.js · TypeScript · Tailwind CSS · n8n · PostgreSQL · OpenAI API · Stripe · Google Cloud
                            </p>
                        </div>

                        {/* Botones */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#overview"
                                className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition font-semibold"
                            >
                                Ver flujo del sistema
                            </a>
                            <a
                                href="https://github.com/tuusuario/ecommerce-inteligente"
                                target="_blank"
                                className="border border-purple-500 text-purple-500 px-6 py-3 rounded-full hover:bg-purple-100 transition font-semibold"
                            >
                                Ver código en GitHub
                            </a>
                        </div>
                    </div>

                    {/* Imagen o mockup */}
                    <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200">
                        <img
                            src="https://my-page-negiupp.s3.amazonaws.com/1750670045607.jpg"
                            alt="Mockup del ecommerce"
                            className="w-full object-cover"
                        />
                    </div>
                </div>
            </section>


            <section id="overview" className="py-24 bg-white text-gray-800">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        ¿Cómo funciona el Ecommerce?
                    </h2>
                    <div className="grid md:grid-cols-5 gap-6 text-center">
                        {[
                            'Explora Productos',
                            'Agente recomienda',
                            'Carrito de compras',
                            'Pago automático',
                            'Soporte postventa',
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-16 h-16 mb-4 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold text-xl">
                                    {i + 1}
                                </div>
                                <p className="font-semibold">{step}</p>
                            </div>
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
                <div className="max-w-5xl mx-auto px-4">
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
        { name: "Stripe", src: "https://my-page-negiupp.s3.amazonaws.com/1750674558123.png" },
        { name: "Google Cloud", src: "https://my-page-negiupp.s3.amazonaws.com/1750674676840.png" },
        {   name: "LangChain", src: "https://my-page-negiupp.s3.amazonaws.com/1750674827283.png" },
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

            <section className="bg-[#a855f7] text-white py-24 text-center relative overflow-hidden">
                <div className="max-w-3xl mx-auto px-6 relative z-10">
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
                        ¿Te interesa un proyecto así?
                    </h3>
                    <p className="text-lg md:text-xl mb-8 text-white/90">
                        Estoy disponible para nuevas oportunidades y colaboraciones.
                    </p>
                    <a
                        href="/contacto"
                        className="inline-block bg-white text-[#a855f7] px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
                    >
                        Contactar
                    </a>
                </div>

                {/* Fondo decorativo animado suave */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-white/20 to-transparent pointer-events-none animate-pulse" />
            </section>

        </div>
    )
}

export default page