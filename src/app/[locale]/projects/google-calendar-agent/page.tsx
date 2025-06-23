'use client'
import DiagramaFlujoInteractivo from '@/app/components/projects/DiagramaFlujoInteractivo';
import React, { useState } from 'react'

const page = () => {


    const [activeNode, setActiveNode] = useState(null);
    const nodes = [
        { id: 1, title: 'WhatsApp Trigger', emoji: '💬', desc: 'Detecta mensajes entrantes en WhatsApp.' },
        { id: 2, title: 'If', emoji: '🔀', desc: 'Evalúa condiciones del mensaje para dirigir el flujo.' },
        { id: 3, title: 'Date & Time', emoji: '🕓', desc: 'Procesa y estructura fechas y horas.' },
        { id: 4, title: 'Date & Time1', emoji: '🕓', desc: 'Segunda etapa de procesamiento de tiempo.' },
        { id: 5, title: 'Edit Fields4', emoji: '✍️', desc: 'Prepara los datos finales para el agente.' },
        { id: 6, title: 'Schedule Trigger', emoji: '⏰', desc: 'Activa el flujo automáticamente en horario definido.' },
        { id: 7, title: 'Edit Fields3', emoji: '✍️', desc: 'Formato de datos desde flujo programado.' },
        { id: 8, title: 'Merge', emoji: '🔗', desc: 'Combina ambas entradas para unificarlas.' },
        { id: 9, title: 'AI Agent', emoji: '🤖', desc: 'Agente que interpreta y gestiona las acciones.' },
        { id: 10, title: 'Memory', emoji: '🧠', desc: 'Accede al contexto guardado en PostgreSQL.' },
        { id: 11, title: 'Get Events', emoji: '📆', desc: 'Consulta todos los eventos del calendario.' },
        { id: 12, title: 'Agendar Evento', emoji: '📆', desc: 'Crea un nuevo evento en Google Calendar.' },
        { id: 13, title: 'Cancelar Evento', emoji: '📆', desc: 'Elimina un evento existente del calendario.' },
        { id: 14, title: 'WhatsApp Business Cloud', emoji: '📤', desc: 'Envía la respuesta al usuario por WhatsApp.' }
    ];
    return (
        <div>
            <section className="bg-white py-20  ">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        Así funciona nuestro agente inteligente
                    </h2>
                    <p className="text-lg text-gray-600 mb-10">
                        Este flujo automatizado combina WhatsApp, Google Calendar y un agente con IA para gestionar tus eventos de forma natural.
                    </p>
                    < DiagramaFlujoInteractivo/>
                </div>
            </section>
            <section id="como-funciona" className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-[#a855f7] mb-12">
                        ¿Cómo funciona el agente?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-10 text-left">
                        {[
                            {
                                title: "Conexión con Google Calendar",
                                desc: "El agente se conecta de forma segura con tu calendario para acceder a tus eventos y disponibilidad.",
                            },
                            {
                                title: "Interfaz conversacional",
                                desc: "Puedes preguntarle por tus próximas reuniones, agregar eventos o mover citas usando lenguaje natural.",
                            },
                            {
                                title: "Automatización con n8n",
                                desc: "Gracias a un template de n8n, el agente automatiza respuestas, acciones y flujos según tu necesidad.",
                            },
                        ].map((step, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default page