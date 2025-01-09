import Image from 'next/image';
import React from 'react';

const CardArticle = ({ image, title, intro, date, readTime }) => {
    return (
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all ease-in-out duration-300">
            {/* Imagen del artículo */}
            <Image
                        width={500}
                        height={500} className="w-full h-48 object-cover" src={image} alt={title} />

            {/* Contenido */}
            <div className="p-4 flex flex-col justify-between"> {/* Altura fija y flex para organización */}
                {/* Título */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-purple-500 transition-colors duration-300">
                    {title}
                </h2>

                {/* Descripción con alto fijo y ocultar el exceso de texto */}
                <p className="text-gray-600 mb-4 overflow-hidden text-ellipsis line-clamp-3 flex-grow h-[70px] ">
                    {intro}
                </p>

                {/* Fecha y tiempo de lectura */}
                <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                    <span>{date}</span>
                    <span>{readTime} min de lectura</span>
                </div>
            </div>
        </div>
    );
};

export default CardArticle;
