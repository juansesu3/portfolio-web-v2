'use client'
import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { SiNextdotjs, SiTailwindcss, SiOpenai, SiTypescript, SiPrisma } from 'react-icons/si'
import { HiChevronDoubleDown } from 'react-icons/hi'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

export const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' },
}
const Page = () => {
    const t = useTranslations('projects.projects.ai_todo_app.inside')
          const pathname = usePathname();
          const locale = useMemo(() => pathname.split('/')[1] || 'en', [pathname]);
    return (
        <main className="text-[#374151] ">
            {/* HERO */}
            <section className="relative min-h-screen flex items-center justify-center flex-col text-center">
                <img
                    src="https://my-page-negiupp.s3.amazonaws.com/1750920688481.png"
                    alt="AI Icon"
                    className="w-auto h-auto max-w-[200px] md:max-w-[350px] object-contain mx-auto mb-6"
                />

                <motion.h1 {...fadeUp} className="text-4xl md:text-6xl font-bold mb-4">
                    <span className="text-black">{t('sec_1.title_1')}</span>
                    <span className="text-[#9333ea]"> {t('sec_1.title_2')}</span>
                </motion.h1>

                <motion.p
                    {...fadeUp}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl"
                >
                   {t('sec_1.description')}
                </motion.p>

                <motion.div
                    {...fadeUp}
                    transition={{ delay: 0.4 }}
                    className="space-x-4"
                >
                    <a
                        href="#demo"
                        className="bg-[#9333ea] hover:bg-indigo-700 text-white px-5 py-3 rounded transition"
                    >
                        {t('sec_1.cta_1')}
                    </a>
                    <a
                        href="https://github.com/tuusuario/ai-todo-app"
                        target="_blank"
                        className="border border-[#9333ea] text-[#9333ea] px-5 py-3 rounded hover:bg-[#9333ea] hover:text-white transition"
                    >
                        {t('sec_1.cta_2')}
                    </a>
                </motion.div>

                {/* Scroll icon */}
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="mt-20 text-[#9333ea] text-3xl"
                >
                    <a href="#about"><HiChevronDoubleDown /></a>
                </motion.div>
            </section>


            {/* ¿Qué es? */}
            <motion.section id="about" {...fadeUp} className="py-24  max-w-4xl mx-auto text-center">
                <img src="https://my-page-negiupp.s3.amazonaws.com/1750860319501.png" alt="AI Icon" className="w-24 h-24 mx-auto mb-6" />
                <h2 className="text-3xl font-semibold mb-6">
                    <span className="text-[#9333ea]">{t('sec_2.title')}</span> <span className="text-black">{t('sec_2.title_2')}</span>
                </h2>
                <p className="text-gray-700 text-lg">
                {t('sec_2.description')}
                </p>
            </motion.section>

            {/* Funcionalidades */}
            <motion.section id="features" {...fadeUp} className="py-24  bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-10">
                        <span className="text-black"> </span>{t('sec_3.title_1')} <span className="text-[#9333ea]">{t('sec_3.title_1')}</span>
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-lg text-gray-700">
                        {[
                            t('sec_3.list.1'),
                            t('sec_3.list.2'),
                            t('sec_3.list.3'),
                            t('sec_3.list.4'),
                            t('sec_3.list.5'),
                            t('sec_3.list.6'),
  
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="bg-gray-100 p-4 rounded-lg shadow"
                            >
                                ✅ {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.section>

            {/* Stack tecnológico */}
            <motion.section id="stack" {...fadeUp} className="py-24 ">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-10">
                        <span className="text-black"> {t('sec_4.title_1')} </span><span className="text-[#9333ea]">{t('sec_4.title_1')}</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-center">
                        {[
                            { icon: <SiNextdotjs size={28} />, name: "Next.js" },
                            { icon: <SiTailwindcss size={28} />, name: "TailwindCSS" },
                            { icon: <SiOpenai size={28} />, name: "OpenAI API" },
                            { icon: <SiTypescript size={28} />, name: "TypeScript" },
                            { icon: <SiPrisma size={28} />, name: "Prisma ORM" },
                        ].map(({ icon, name }) => (
                            <div key={name} className="flex flex-col items-center bg-gray-100 p-4 rounded shadow hover:scale-105 transition">
                                {icon}
                                <span className="mt-2 text-sm font-medium">{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Demo interactiva */}
            <motion.section id="demo" {...fadeUp} className="py-24 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-10">
                    <span className="text-[#9333ea]">{t('sec_5.title_1')}</span> <span className="text-black">{t('sec_5.title_2')}</span>
                </h2>
                <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg border">
                    <iframe
                        src="https://ai-todupp.vercel.app/"
                        title="AI Todo App Demo"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="clipboard-write; encrypted-media"
                    />
                </div>
                <p className="mt-4 text-gray-600">{t('sec_5.description')}</p>
            </motion.section>

            {/* Tu Rol */}
            <motion.section id="role" {...fadeUp} className="bg-white py-24  text-center">
                <img src="https://my-page-negiupp.s3.amazonaws.com/1750854346858.png" alt="Developer icon" className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-3xl font-semibold mb-6">
                    <span className="text-black">{t('sec_6.title_1')}</span> <span className="text-[#9333ea]">{t('sec_6.title_2')} </span>
                </h2>
                <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                    {t('sec_6.description')}
                </p>
            </motion.section>

            {/* CTA */}
            <motion.section id="contact" {...fadeUp} className="py-24 text-center relative ">
                <div className="relative z-10">
                    <h2 className="text-3xl font-semibold mb-6">
                        <span className="text-[#9333ea]">{t('sec_7.title_1')} </span> <span className="text-black"> {t('sec_7.title_2')}</span>
                    </h2>
                    <p className="text-gray-700 text-lg mb-6">
                        {t('sec_7.description')}
                    </p>
                    <div className="space-x-4">
                        <motion.a
                            href={`/${locale}/contact`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-3 bg-[#a855f7] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#9333ea] transition"
                        >
                            {/* <IoIosSend size={20} className="text-white" /> */}
                            {t('sec_7.cta')}
                        </motion.a>
                    </div>
                </div>
            </motion.section>
        </main>
    )
}

export default Page