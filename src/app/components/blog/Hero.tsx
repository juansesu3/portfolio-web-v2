import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <div className="relative  py-16">
            <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
                <div className="text-left  w-1/2">
                    <h1 className="text-2xl sm:text-5xl font-extrabold tracking-tight">
                        <span className='text-purple-500'>Aprender</span>  Nunca Termina
                    </h1>
                    <p className="mt-4 text-md sm:text-xl">
                        Explora artículos sobre desarrollo full-stack, inteligencia artificial y consejos para potenciar tu carrera tecnológica.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
                        {/* Input estilizado */}
                        <input
                            type="text"
                            placeholder="Ingresa tu correo"
                            className="px-4 py-2 w-full sm:w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 mb-4 sm:mb-0"
                        />
                        {/* Botón estilizado */}
                        <button className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto">
                            Subscribe
                        </button>
                    </div>
 
                </div>
                <div className=" w-1/2 flex justify-end">
                    <Image
                        width={500}
                        height={500}
                        src="https://my-page-negiupp.s3.amazonaws.com/1736414784389.png"
                        alt="Imagen destacada"
                        className="w-full max-w-40 sm:max-w-72 transform scale-x-[-1] "
                        
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;