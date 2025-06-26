'use client'

import { motion, AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const solutions = [
  {
    title: 'Agentes de AI Autónomos',
    description: 'Agentes inteligentes capaces de ejecutar tareas complejas, integrados con tus plataformas favoritas.',
    icon: '🤖',
    metrics: [
      {
        label: 'Reducción de Costos',
        value: 35,
        desc: 'Automatización de tareas repetitivas sin intervención humana.',
        color: 'bg-green-500'
      },
      {
        label: 'Velocidad de Ejecución',
        value: 80,
        desc: 'Procesos completados hasta 4 veces más rápido.',
        color: 'bg-blue-500'
      },
      {
        label: 'Disponibilidad',
        value: 100,
        desc: 'Agentes activos sin interrupción en todos los canales.',
        color: 'bg-yellow-400'
      }
    ]
  },
  {
    title: 'Sistemas Multi-Agente',
    description: 'Colaboración entre múltiples agentes AI para resolver problemas de forma escalable y eficiente.',
    icon: '🧠',
    metrics: [
      {
        label: 'Eficiencia Coordinada',
        value: 92,
        desc: 'Resolución de tareas paralelas con comunicación efectiva.',
        color: 'bg-purple-500'
      },
      {
        label: 'Tiempo de Respuesta',
        value: 60,
        desc: 'Disminución significativa en resolución de flujos complejos.',
        color: 'bg-indigo-500'
      },
      {
        label: 'Escalabilidad',
        value: 95,
        desc: 'Capacidad de crecimiento con múltiples nodos inteligentes.',
        color: 'bg-cyan-500'
      }
    ]
  },
  {
    title: 'Integración con Sistemas Existentes',
    description: 'Llevamos AI a tus herramientas actuales sin fricción, potenciando su rendimiento con inteligencia.',
    icon: '🔗',
    metrics: [
      {
        label: 'Compatibilidad',
        value: 99,
        desc: 'Interfaz con CRMs, ERPs y más sin modificar infraestructura.',
        color: 'bg-teal-500'
      },
      {
        label: 'Tiempo de Implementación',
        value: 90,
        desc: 'Integración rápida sin interrupción de operaciones.',
        color: 'bg-orange-400'
      },
      {
        label: 'Reducción de Errores',
        value: 80,
        desc: 'Validación automática de datos y procesos existentes.',
        color: 'bg-pink-500'
      }
    ]
  },
  {
    title: 'Desarrollo de Software AI-Nativo',
    description: 'Creamos software desde cero, diseñado para convivir e impulsar las capacidades de AI.',
    icon: '💡',
    metrics: [
      {
        label: 'Optimización de Recursos',
        value: 70,
        desc: 'Arquitectura optimizada para rendimiento AI-first.',
        color: 'bg-lime-500'
      },
      {
        label: 'Customización',
        value: 100,
        desc: 'Software alineado completamente con tus procesos.',
        color: 'bg-rose-500'
      },
      {
        label: 'Mantenimiento',
        value: 85,
        desc: 'Diseñado para escalar sin cargas innecesarias.',
        color: 'bg-sky-500'
      }
    ]
  }
]

const Page = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    document.title = 'AI Solutions - Tu Nombre'
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-800  py-16">
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400">
          Soluciones de Inteligencia Artificial
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Potenciamos tu negocio con tecnología AI: desde agentes inteligentes hasta sistemas multiagente completamente integrados.
        </p>
      </motion.section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {solutions.map((sol, index) => (
          <div
            key={sol.title}
            className="relative"
          >
            <motion.div
              className={`bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer min-h-[260px]`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveIndex(index === activeIndex ? null : index)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{sol.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{sol.title}</h3>
              <p className="text-gray-600">{sol.description}</p>
            </motion.div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="absolute top-full left-0 w-full mt-4 z-10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-lg space-y-4">
                    {sol.metrics.map(metric => (
                      <div key={metric.label}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                          <span className="text-sm font-semibold text-gray-800">{metric.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <motion.div
                            className={`h-3 rounded-full ${metric.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${metric.value}%` }}
                            transition={{ duration: 0.6 }}
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{metric.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>

      <motion.div
        className="mt-28 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="text-gray-600 text-lg">
          ¿Listo para llevar tu sistema al siguiente nivel?
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          Hablemos
        </a>
      </motion.div>
    </div>
  )
}

export default Page
