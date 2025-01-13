import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const HeroProjects = () => {
  const t = useTranslations("projects")
  return (
    <section className="relative  py-16 ">
      {/* Contenido principal */}
      <div className=" flex items-center sm:flex-row flex-col-reverse justify-between ">
        {/* Texto del Hero */}
        <div className="max-w-2xl text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-center sm:text-left">
            {t('title')}<br /> <span className="text-purple-500">{t('title_two')}</span>
          </h1>
          <div className=" flex sm:hidden mb-4">
          <Image
            src="https://my-page-negiupp.s3.amazonaws.com/1736500882850.png" // Cambia esta imagen según tus recursos
            alt="Proyectos creativos"
            width={500}
            height={500}
            className="rounded-lg md:max-w-52 max-w-40 mx-auto"
          />
        </div>
          <p className="text-lg md:text-xl mb-8 text-center sm:text-left">
          {t('sub_title')}
          </p>
          <div className="flex sm:justify-start justify-center gap-4">
            <Link 
              href="#portfolio" 
              className="bg-purple-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-400 hover:shadow-xl transition-all duration-300"
            >
              {t('cta_btn')}
            </Link>
            
          </div>
        </div>

        {/* Imagen destacada */}
        <div className=" sm:flex hidden">
          <Image
            src="https://my-page-negiupp.s3.amazonaws.com/1736500882850.png" // Cambia esta imagen según tus recursos
            alt="Proyectos creativos"
            width={500}
            height={500}
            className="rounded-lg md:max-w-56 max-w-40 mx-auto"
          />
        </div>
       
      </div>

     
    </section>
  )
}

export default HeroProjects
