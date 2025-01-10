'use client'
import React from 'react'
import { InlineWidget } from 'react-calendly'

const ContactComponent = () => {
    return (
        <section className="py-12  flex sm:flex-row  flex-col-reverse gap-10
         sm:gap-4">
            <div className='sm:w-1/2 w-full'>

        
            <h2 className="text-4xl font-bold text-center mb-6">Contáctanos</h2>
            <p className="text-lg text-gray-600 text-center mb-12">
                ¿Tienes preguntas o un proyecto en mente? Completa el formulario o agenda una reunión directamente con nosotros.
            </p>

            {/* Formulario de Contacto */}
            <div className="max-w-4xl mx-auto bg-white border border-gray-100 shadow-lg rounded-lg p-8">
                <form className="space-y-6">
                    {/* Nombre */}
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            Nombre Completo
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Ingresa tu nombre"
                            className="w-full border border-gray-200 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="ejemplo@correo.com"
                            className="w-full border border-gray-200 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3"
                            required
                        />
                    </div>

                    {/* Mensaje */}
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            placeholder="Escribe tu mensaje..."
                            className="w-full border border-gray-200 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3"
                            required
                        />
                    </div>

                    {/* Botón de Enviar */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-purple-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg transition-all duration-300"
                        >
                            Enviar Mensaje
                        </button>
                    </div>
                </form>
            </div>
            </div>
            {/* Espaciado para el componente de Calendly */}
            <div className=" sm:w-1/2 w-full bg-white border border-gray-100 shadow-lg rounded-lg py-8  ">
                <h3 className="text-2xl font-bold text-center mb-4">Agenda una Reunión</h3>
                <p className="text-center text-gray-600 mb-6">
                    ¿Prefieres una charla en persona? Usa nuestro calendario para agendar una reunión.
                </p>

                <div className="">
                    <iframe
                        src="https://calendly.com/juan-se-suarez-ra"
                        width="100%"
                        height="421"
                        frameBorder="0"
                       
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default ContactComponent
