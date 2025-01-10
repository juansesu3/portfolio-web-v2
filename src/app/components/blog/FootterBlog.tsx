import Link from 'next/link'
import React from 'react'

const FootterBlog = () => {
    return (
        <section className=" py-16 px-8 rounded-md text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¡ <span className='text-purple-500'>Gracias</span> por  <span className='text-purple-500'>visitar</span> nuestro <span className='text-purple-500'>blog</span>! 💜
            </h2>
            <p className="text-lg md:text-xl mb-8">
                Esperamos que hayas disfrutado nuestros artículos y encontrado información valiosa.
                ¡No te pierdas nuestras últimas actualizaciones y recursos exclusivos!
            </p>

            {/* Call to Action */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        
                <Link href="/contact" className='bg-white border border-gray-100 hover:bg-purple-600 hover:text-white  font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300'>
            
                        Contáctanos
                    
                </Link>
            </div>

            <p className="text-sm mt-8">
                ¿Interesado en trabajar con nosotros? Revisa nuestros <Link href="/services" className='underline hover:text-indigo-300'>servicios</Link>.
            </p>
        </section>

    )
}

export default FootterBlog