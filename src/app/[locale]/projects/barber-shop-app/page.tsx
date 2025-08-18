'use client'
import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { HiChevronDoubleDown } from 'react-icons/hi'
import {
    SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiAxios, SiJsonwebtokens, SiNodedotjs
} from 'react-icons/si'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' },
}

export const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 },
}

const techStack = [
    { icon: <SiNextdotjs size={28} />, name: 'Next.js' },
    { icon: <SiTailwindcss size={28} />, name: 'TailwindCSS' },
    { icon: <SiNodedotjs size={28} />, name: 'Node.js' },
    { icon: <SiExpress size={28} />, name: 'Express' },
    { icon: <SiMongodb size={28} />, name: 'MongoDB' },
    { icon: <SiJsonwebtokens size={28} />, name: 'JWT' },
    { icon: <SiAxios size={28} />, name: 'Axios' },
]

const Page = () => {
    const t = useTranslations('projects.projects.barber_shop.inside')
          const pathname = usePathname();
          const locale = useMemo(() => pathname.split('/')[1] || 'en', [pathname]);
    return (
        <div className="text-[#374151]">
            {/* Hero Section */}
            <section
                id="hero"
                className="relative h-screen  flex items-center justify-center flex-col text-center "
            >
                <Image width={500} height={500} src="https://my-page-negiupp.s3.amazonaws.com/1750920966907.png" alt="barber img"  className="w-auto h-auto max-w-[200px] md:max-w-[350px] object-contain mx-auto mb-6"/>

                {/* Contenido principal */}
                <motion.h1
                    {...fadeUp}
                    className="text-4xl md:text-6xl font-bold mb-4 relative z-10"
                >
                    <span className="text-black">{t('sec_1.title_1')}</span>
                    <span className="text-[#a855f7]">{t('sec_1.title_2')}</span>
                </motion.h1>

                <motion.p
                    {...fadeUp}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-600 mb-6 max-w-md relative z-10"
                >
                   {t('sec_1.description')}
                </motion.p>

                <motion.div
                    {...fadeUp}
                    transition={{ delay: 0.4 }}
                    className="space-x-4 relative z-10"
                >
                    <a href="#demo" className="bg-[#a855f7] hover:bg-purple-700 text-white px-5 py-3 rounded transition">{t('sec_1.cta_1')}</a>
                    <a href="https://github.com/tuusuario/barberapp" target="_blank" className="border border-[#a855f7] text-[#a855f7] px-5 py-3 rounded hover:bg-[#a855f7] hover:text-white transition">{t('sec_1.cta_2')}</a>
                </motion.div>

                {/* Ícono animado scroll */}
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className=" text-[#a855f7]  mt-16 text-3xl cursor-pointer z-10"
                >
                    <a href="#about" aria-label="Desplazar hacia abajo">
                        <HiChevronDoubleDown />
                    </a>
                </motion.div>
            </section>

            {/* About */}
            <motion.section id="about" {...fadeUp} className=" max-w-4xl mx-auto text-center">
                <Image width={500} height={500}  src="https://my-page-negiupp.s3.amazonaws.com/1750842845653.png" alt="Barbería" className="w-24 h-24 mx-auto mb-6" />
                <h2 className="text-3xl font-semibold mb-6">
                    <span className="text-[#a855f7]">{t('sec_2.title')}</span> <span className="text-black">{t('sec_2.title_2')}</span>
                </h2>
                <p className="text-gray-700 text-lg">
                {t('sec_2.description')}
                </p>
            </motion.section>

            {/* Stack */}
            <motion.section id="tech" {...fadeIn} className="bg-white py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-10">
                        <span className="text-black">{t('sec_3.title_1')}</span> <span className="text-[#a855f7]">{t('sec_3.title_2')}</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {techStack.map(({ icon, name }) => (
                            <motion.div
                                key={name}
                                whileHover={{ scale: 1.1 }}
                                className="bg-gray-100 p-4 rounded shadow flex flex-col items-center"
                            >
                                {icon}
                                <span className="mt-2 text-sm font-medium">{name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Demo */}
            <motion.section id="demo" {...fadeUp} className="py-24 px-6 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-10">
                    <span className="text-[#a855f7]">{t('sec_4.title_1')}</span>{" "}
                    <span className="text-black">{t('sec_4.title_2')}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Cliente */}
                    <motion.div {...fadeUp} className="flex flex-col items-center">
                        <h3 className="text-lg font-medium mb-4 text-gray-700">{t('sec_4.client')}</h3>
                        <video
                            src="/assets/mobilebarberclient.mov"
                            loop
                            autoPlay
                            muted
                            playsInline
                            className="rounded-xl shadow-lg w-full max-w-[360px] h-auto"
                            style={{ aspectRatio: '9 / 16', objectFit: 'contain' }}
                        />
                    </motion.div>

                    {/* Admin */}
                    <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="flex flex-col items-center">
                        <h3 className="text-lg font-medium mb-4 text-gray-700">{t('sec_4.admin')}</h3>
                        <video
                            src="/assets/mobilebarbeadmin.mov"
                            loop
                            autoPlay
                            muted
                            playsInline
                            className="rounded-xl shadow-lg w-full max-w-[360px] h-auto"
                            style={{ aspectRatio: '9 / 16', objectFit: 'contain' }}
                        />
                    </motion.div>
                </div>


            </motion.section>

            {/* Mi Rol */}
            <motion.section id="role" {...fadeUp} className="bg-white py-24 px-6 text-center">
                <Image width={500} height={500}  src="https://my-page-negiupp.s3.amazonaws.com/1750854346858.png" alt="Developer icon" className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-3xl font-semibold mb-6">
                    <span className="text-black">{t('sec_5.title_1')}</span> <span className="text-[#a855f7]">{t('sec_5.title_2')}</span>
                </h2>
                <p className="text-gray-700 text-lg max-w-3xl mx-auto">
                {t('sec_5.description')}
                </p>
            </motion.section>

            {/* CTA final */}
            <motion.section id="contact" {...fadeUp} className="py-24 text-center relative  overflow-hidden">
                <Image width={500} height={500}  src="https://my-page-negiupp.s3.amazonaws.com/1750854994616.png" alt="Barbería fondo" className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none" />
                <div className="relative z-10">
                    <h2 className="text-3xl font-semibold mb-6">
                        <span className="text-[#a855f7]">{t('sec_6.title_1')}</span> <span className="text-black">{t('sec_6.title_2')}</span>
                    </h2>
                    <p className="text-gray-700 text-lg mb-6">
                    {t('sec_6.description')}
                    </p>
                    <div className="space-x-4">
                        <motion.a
                            href={`/${locale}/contact`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-3 bg-[#a855f7] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#9333ea] transition"
                        >
                            {/* <IoIosSend size={20} className="text-white" /> */}
                            {t('sec_6.cta')}
                        </motion.a>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}

export default Page
