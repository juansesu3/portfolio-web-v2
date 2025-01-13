'use client'
import { useTranslations } from 'next-intl';
import React from 'react'

const SectionThree = () => {
    const t = useTranslations("home");
    return (
        <div className='flex gap-4 flex-col md:flex-row'>
            <div className='border  border-gray-100 flex flex-col custom2:flex-row  gap-2 cursor-pointer rounded-2xl shadow-md p-4 w-full '>
                <div className='border w-full  border-gray-100 p-6 rounded-xl hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out  text-black flex flex-col justify-center items-center' >
                    <h3 className='font-bold text-2xl'>+04</h3>
                    <p className='uppercase text-slate-500 text-center'>{t('section_three.box_one.title_1')}</p>
                </div>
                <div className='border w-full  border-gray-100 p-6 rounded-xl hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out  text-black flex flex-col justify-center items-center' >
                    <h3 className='font-bold text-2xl'> +10</h3>
                    <p className='uppercase text-slate-500 text-center'>{t('section_three.box_one.title_2')}</p>
                </div>
                <div className='border w-full  border-gray-100 p-6 rounded-xl hover:shadow-md cursor-pointer transition-all duration-300 ease-in-out  text-black flex flex-col justify-center items-center' >
                    <h3 className='font-bold text-2xl'> +15</h3>
                    <p className='uppercase text-slate-500 text-center'>{t('section_three.box_one.title_3')}</p>
                </div>
            </div>
            <div className='group border border-gray-100 flex flex-col justify-end gap-2 cursor-pointer rounded-2xl shadow-md p-4 w-full hover:-translate-y-1 transition-all duration-300 ease-in-out hover:bg-purple-500 hover:text-white'>
                <h1 className='text-5xl font-bold'>
                {t('section_three.box_two.title')} <br />
                    <span className='text-purple-500 group-hover:text-white'>  {t('section_three.box_two.title_2')} </span>   {t('section_three.box_two.title_3')} 
                </h1>
            </div>
        </div>
    )
}

export default SectionThree