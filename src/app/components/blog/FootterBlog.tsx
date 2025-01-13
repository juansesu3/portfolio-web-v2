import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

const FootterBlog = () => {
    const t = useTranslations('blog.footer_bay')
    return (
        <section className=" py-16 px-8 rounded-md text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className='text-purple-500'>{t('title_one')}</span> {t('title_two')}  <span className='text-purple-500'>{t('title_three')}</span> {t('title_four')} <span className='text-purple-500'>{t('title_five')}</span> 💜
            </h2>
            <p className="text-lg md:text-xl mb-8">
                {t('sub_title')}<br />
                {t('sub_title_two')}
            </p>

            {/* Call to Action */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">

                <Link href="/contact" className='bg-white border border-gray-100 hover:bg-purple-600 hover:text-white  font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300'>

                    {t('cta_btn')}

                </Link>
            </div>

            <p className="text-sm mt-8">
                {(t('end'))} <Link href="/services" className='underline hover:text-purple-500'> {(t('end_two'))}</Link>
            </p>
        </section>

    )
}

export default FootterBlog