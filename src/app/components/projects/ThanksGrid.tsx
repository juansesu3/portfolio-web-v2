'use client'
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react';

const ThanksGrid = () => {
    const t = useTranslations('projects');

    const pathname = usePathname();
    const locale = useMemo(() => pathname.split('/')[1] || 'en', [pathname]);
    return (
        <section className=" py-16  text-center rounded-lg ">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold mb-4">
                    ¡<span className='text-purple-500'>{t('end_section.title.one')}</span> {t('end_section.title.two')} <span className='text-purple-500'>{t('end_section.title.three')}</span> {t('end_section.title.four')}  <span className='text-purple-500'>{t('end_section.title.five')}</span>!
                </h2>
                <p className="text-lg mb-6 ">
                    {t('end_section.paragrah_1')}
                </p>
                <p className="text-lg mb-6">
                    {t('end_section.paragrah_2')}
                </p>
                <p className="text-lg font-semibold mb-8">
                    {t('end_section.paragrah_3')}
                </p>
                <Link
                    href={`/${locale}/contact`} // Enlace que puedes personalizar
                    className="bg-purple-500 text-white hover:text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-white border border-gray-100  transition duration-300"
                >
                    {t('end_section.cta')}
                </Link>
            </div>
        </section>
    );
};

export default ThanksGrid;
