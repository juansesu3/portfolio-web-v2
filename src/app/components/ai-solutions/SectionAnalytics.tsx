'use client'

import { motion } from 'framer-motion'


const metrics = [
  {
    label: "Reducción de Costos",
    value: "35%",
    desc: "Menos gasto operativo al automatizar procesos con AI.",
    color: "bg-green-500"
  },
  {
    label: "Aumento en Velocidad",
    value: "3x",
    desc: "Procesos hasta 3 veces más rápidos gracias a los agentes de AI.",
    color: "bg-blue-500"
  },
  {
    label: "Eficiencia Operativa",
    value: "92%",
    desc: "Sistemas multiagente con decisiones autónomas precisas.",
    color: "bg-purple-500"
  }
]

const SectionAnalytics = () => {


  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Impacto de nuestras soluciones de AI
        </motion.h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Observa cómo nuestras integraciones con Inteligencia Artificial transforman tu negocio con resultados medibles.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            className="bg-gray-100 p-6 rounded-2xl shadow-md text-left border hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-4 h-4 rounded-full ${metric.color}`}></div>
              <h3 className="text-xl font-bold text-gray-800">{metric.label}</h3>
            </div>
            <p className="text-4xl font-extrabold text-gray-900 mb-2">{metric.value}</p>
            <p className="text-gray-600 text-sm">{metric.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default SectionAnalytics
