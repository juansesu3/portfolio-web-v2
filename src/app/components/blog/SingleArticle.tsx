'use client'
import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaClock, FaTwitter, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const SingleArticle = ({ title, image, date, readTime, content, author, authorBio, authorImage, slug, intro }) => {
  const shareUrl = `https://yourwebsite.com/blog/${slug}`;
  const shareText = `Lee este artículo: "${title}" en nuestro blog y descubre más contenido interesante.`;
  const t = useTranslations('blog');
    
  return (
    <article className="max-w-4xl mx-auto py-6">
      {/* Imagen destacada */}
      <div className="relative w-full h-64 sm:h-96 mb-4 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center justify-between text-gray-500 text-sm mb-4">

        <div className="flex items-center mb-2 sm:mb-0">
          <FaClock className="mr-2 text-purple-500" />
          <span>{readTime} min de lectura</span>
        </div>
        <div className="flex items-center mb-2 sm:mb-0">
          <FaCalendarAlt className="mr-2 text-blue-500" />
          <span>{date}</span>
        </div>
      </div>
      {/* Título del artículo */}
      <div className='flex flex-col gap-4 mb-4'>


        <h1 className="text-4xl font-extrabold text-gray-800  leading-tight">
          {title}
        </h1>
        <p className='text-gray-700 text-base leading-7 tracking-wide space-y-2 text-justify'>{intro}</p>
      </div>

      <div>
        {/* Información del artículo (fecha, tiempo de lectura) */}


        {/* Información del autor */}
        <div className='flex items-center mb-4'>
          <div className="flex items-center ">
            <Image
              src={authorImage}
              alt={`Imagen de ${author}`}
              width={60}
              height={60}
              className="rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{author}</h3>
              <p className="text-sm text-gray-600">{authorBio}</p>
            </div>
          </div>

        </div>

      </div>
      <hr className="my-4" />


      {/* Contenido del artículo */}
      <div
        className="prose-custom  max-w-none leading-relaxed "
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* Botones para compartir en redes sociales */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4">¡Comparte este artículo!</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-center items-center">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2  rounded-full max-w-36 mx-auto flex items-center space-x-2"
          >
            <FaTwitter />
            <span>Twitter</span>
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-full max-w-36 mx-auto flex items-center space-x-2"
          >
            <FaFacebook />
            <span>Facebook</span>
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(shareText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full max-w-36 mx-auto flex items-center space-x-2"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full max-w-36 mx-auto flex items-center space-x-2"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>


      {/* Call to action para suscribirse */}
      <div className="mt-16 bg-white p-4 rounded-lg border border-gray-100 shadow-md text-center">
        <h2 className="text-2xl font-bold text-purple-600 mb-4">¿Disfrutaste este artículo?</h2>
        <p className="text-gray-700 mb-6">
          Suscríbete a nuestro blog para recibir contenido exclusivo y mantenerte actualizado con las últimas tendencias.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto mx-auto justify-center">
                        {/* Input estilizado */}
                        <input
                            type="text"
                            placeholder={ t('cta_input')}
                            className="px-4 py-2 w-full sm:w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 mb-4 sm:mb-0"
                        />
                        {/* Botón estilizado */}
                        <button className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto">
                            {t('cta_btn')}
                        </button>
                    </div>
      </div>
    </article>
  );
};

export default SingleArticle;
