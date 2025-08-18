'use client';
import React, { useMemo } from 'react';
import DiagramaFlujoInteractivo from '@/app/components/projects/DiagramaFlujoInteractivo';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

const Page = () => {
    const t = useTranslations("projects.projects.intelligent_assistent.inside");
      const pathname = usePathname();
      const locale = useMemo(() => pathname.split('/')[1] || 'en', [pathname]);
    
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
                    <span className="text-purple-600">{t('sec_1.title_1')}</span>, {t('sec_1.title_2')}
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-gray-700 max-w-2xl mb-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {t('sec_1.description_1')}{' '}
                    <span className="text-purple-500 font-semibold">{t('sec_1.description_2')}</span> {t('sec_1.description_3')}{' '}
                    <span className="text-purple-500 font-semibold">{t('sec_1.description_4')}</span> {t('sec_1.description_5')}{' '}
                    <span className="text-purple-500 font-semibold">{t('sec_1.description_6')}</span>.
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
                        {t('sec_2.title')}
                    </motion.h2>
                    <motion.p
                        className="text-gray-600 text-lg mb-12"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {t('sec_2.description')}
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
                        {t('sec_3.title')}
                    </motion.h3>
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 text-center">
                        {[
                            { title: `📥 ${t('sec_3.flow_1.title')}`, desc: `${t('sec_3.flow_1.description')}` },
                            { title: `🤖 ${t('sec_3.flow_2.title')}`, desc: `${t('sec_3.flow_2.description')}` },
                            { title: `📅 ${t('sec_3.flow_3.title')}`, desc: `${t('sec_3.flow_3.description')}` },
                            { title: `💬 ${t('sec_3.flow_4.title')}`, desc: `${t('sec_3.flow_4.description')}` },
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
                        {t('sec_4.title')}
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
                        <span className="text-[#a855f7]">{t('sec_5.title')}</span>{' '}
                        <span className="text-gray-900">{t('sec_5.title_2')}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl mb-10 text-gray-700"
                    >
                        {t('sec_5.description')}
                    </motion.p>

                    <motion.a
                        href={`/${locale}/contact`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-3 bg-[#a855f7] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#9333ea] transition"
                    >
                        {/* <IoIosSend size={20} className="text-white" /> */}
                        {t('sec_5.cta')}
                    </motion.a>
                </div>
            </section>

        </div>
    );
};

export default Page;
