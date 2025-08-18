'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'



const Page = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
const t = useTranslations('ai_solutions')
  useEffect(() => {
    document.title = 'AI Solutions - Tu Nombre'
  }, [])



  const solutions = [
    {
      title: t('list.1.title'),
      description: t('list.1.description'),
      icon: '🤖',
      metrics: [
        {
          label: t('list.1.metrics.1.title'),
          value: 35,
          desc: t('list.1.metrics.1.description'),
          color: 'bg-green-500'
        },
        {
          label: t('list.1.metrics.2.title'),
          value: 80,
          desc: t('list.1.metrics.2.description'),
          color: 'bg-blue-500'
        },
        {
          label: t('list.1.metrics.3.description'),
          value: 100,
          desc: t('list.1.metrics.3.description'),
          color: 'bg-yellow-400'
        }
      ]
    },
    {
      title: t('list.2.title'),
      description: t('list.2.description'),
      icon: '🧠',
      metrics: [
        {
          label: t('list.2.metrics.1.description'),
          value: 92,
          desc: t('list.2.metrics.1.description'),
          color: 'bg-purple-500'
        },
        {
          label: t('list.2.metrics.2.title'),
          value: 60,
          desc: t('list.2.metrics.2.description'),
          color: 'bg-indigo-500'
        },
        {
          label: t('list.2.metrics.3.title'),
          value: 95,
          desc: t('list.2.metrics.3.description'),
          color: 'bg-cyan-500'
        }
      ]
    },
    {
      title: t('list.3.title'),
      description: t('list.3.description'),
      icon: '🔗',
      metrics: [
        {
          label: t('list.3.metrics.1.title'),
          value: 99,
          desc: t('list.3.metrics.1.description'),
          color: 'bg-teal-500'
        },
        {
          label: t('list.3.metrics.2.title'),
          value: 90,
          desc: t('list.3.metrics.2.description'),
          color: 'bg-orange-400'
        },
        {
          label: t('list.3.metrics.3.title'),
          value: 80,
          desc: t('list.3.metrics.3.description'),
          color: 'bg-pink-500'
        }
      ]
    },
    {
      title: t('list.4.title'),
      description: t('list.4.description'),
      icon: '💡',
      metrics: [
        {
          label: t('list.4.metrics.1.title'),
          value: 70,
          desc: t('list.4.metrics.1.description'),
          color: 'bg-lime-500'
        },
        {
          label: t('list.4.metrics.2.title'),
          value: 100,
          desc: t('list.4.metrics.2.description'),
          color: 'bg-rose-500'
        },
        {
          label: t('list.4.metrics.3.title'),
          value: 85,
          desc: t('list.4.metrics.3.description'),
          color: 'bg-sky-500'
        }
      ]
    }
  ]
  return (
    <div className="min-h-screen bg-white text-gray-800  py-16">
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400">
          {t('title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        {t('description')}
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
          {t('sect_final.title')}
        </p>
        <Link
          href="/contact"
          className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          {t('sect_final.description')}
        </Link>
      </motion.div>
    </div>
  )
}

export default Page
