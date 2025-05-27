import { useTranslations } from 'next-intl';
import React from 'react';

const ThankYouSection = () => {
      const t = useTranslations('projects');
  return (
    <section className=" py-16  text-center rounded-lg ">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-purple-500">
          {t('end_section_inside.title')}
        </h2>
        <p className=" mb-6 text-2xl font-normal">
        {t('end_section_inside.paragrah_1')}
        </p>
        <p className="text-lg mb-6">
        {t('end_section_inside.paragrah_2')}
        </p>

        <a
          href="#contacto" // Enlace que puedes personalizar
          className="bg-purple-500 text-white hover:text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-white border border-gray-100  transition duration-300"
        >
    {t('end_section_inside.cta')}
        </a>
      </div>
    </section>
  );
};

export default ThankYouSection;
