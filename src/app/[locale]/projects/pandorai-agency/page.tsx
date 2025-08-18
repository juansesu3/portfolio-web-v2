'use client'
import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'


const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Page = () => {
    const t = useTranslations("projects.projects.pandorai_agency.inside");
          const pathname = usePathname();
          const locale = useMemo(() => pathname.split('/')[1] || 'en', [pathname]);


    const steps = [
        { title: t('sec_3.list.1.title'), desc: t('sec_3.list.1.description') },
        { title: t('sec_3.list.2.title'), desc: t('sec_3.list.2.description')},
        { title: t('sec_3.list.3.title'), desc: t('sec_3.list.3.description') },
        { title: t('sec_3.list.4.title'), desc: t('sec_3.list.4.description') },
        { title: t('sec_3.list.5.title'), desc: t('sec_3.list.5.description') },
    ]

    const services = [
        t('sec_4.list.1'),
        t('sec_4.list.2'),
        t('sec_4.list.3'),
        t('sec_4.list.4'),
        t('sec_4.list.5'),
        t('sec_4.list.6'),
    ]

    return (
        <div className="bg-white text-gray-900 font-sans scroll-smooth">
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
                        {t('sec_1.title')}{' '}
                            <span className="text-purple-600">{t('sec_1.title_2')}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                        {t('sec_1.description')}
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-purple-600 text-white py-3 px-6 rounded-md font-medium hover:bg-purple-700 transition"
                        >
                             {t('sec_1.cta')}
                        </a>
                    </motion.div>
                </motion.div>
            </section>



            {/* ABOUT */}
            <section className="py-20 bg-white">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h2 className="text-3xl font-bold mb-4">{t('sec_2.title_1')}<span className="text-purple-600">{t('sec_2.title_2')}</span></h2>
                    <p className="text-gray-700 text-lg mb-4">
                    {t('sec_2.description_1')}
                    </p>
                    <p className="text-gray-700 text-lg">
                    {t('sec_2.description_2')}
                    </p>
                </motion.div>
            </section>

            {/* TECHNOLOGIES */}
            <section className="pt-20 text-center">
                <h2 className="text-3xl font-bold mb-10 text-gray-800"> {t('sec_3.title')}</h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 items-center justify-center">
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
                            <Image width={500} height={500} 
                                src={src}
                                alt={name}
                                className="h-12 w-auto max-w-[100px] object-contain "
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-24 bg-white">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    {t('sec_3.title_2')}
                    </h2>

                    <div className="relative border-l-4 border-purple-600 ml-4">
                        {steps.map(({ title, desc }, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.2 } }}
                                viewport={{ once: true }}
                                className="mb-12 ml-6"
                            >
                                <div className="absolute -left-3 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-md" />
                                <h3 className="text-xl font-semibold text-purple-700">{title}</h3>
                                <p className="text-gray-600 mt-2">{desc}</p>
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
                    <h2 className="text-3xl font-bold mb-6">{t('sec_4.title')}</h2>
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
            <section className="py-20 text-center bg-white text-gray-900">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-4">
                        {/** Alternancia visual en el título */}
                        <span className="text-purple-500">{t('sec_5.title_1')}</span>
                        <span className="text-black">{t('sec_5.title_2')}</span>{' '}
                        <span className="text-purple-500">{t('sec_5.title_3')}</span>{' '}
                        <span className="text-black">{t('sec_5.title_4')}</span>{' '}
                        <span className="text-purple-500">{t('sec_5.title_5')}</span>{' '}
                        <span className="text-black">{t('sec_5.title_6')}</span>{' '}
                        <span className="text-purple-500">{t('sec_5.title_7')}</span>
                        <span className="text-purple-500">{t('sec_5.title_8')}</span>
                    </h2>

                    <p className="mb-6 text-lg text-gray-700">
                    {t('sec_5.description')}
                    </p>

                    <motion.a
                              href={`/${locale}/contact`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.97 }}
                              className="inline-flex items-center gap-3 bg-[#a855f7] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#9333ea] transition"
                            >
                              {/* <IoIosSend size={20} className="text-white" /> */}
                              {t('sec_5.cta')}
                            </motion.a>
                </motion.div>
            </section>

        </div>
    )
}

export default Page
