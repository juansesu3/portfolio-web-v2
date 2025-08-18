'use client'
import { useTranslations } from 'next-intl'
import React, { useMemo, useState } from 'react'
import { motion, Variants } from 'framer-motion' // ---> 1. Importar motion
import Swal from 'sweetalert2'
import { usePathname, useRouter } from 'next/navigation'
// ---> 2. Definir variantes para las animaciones
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2, // Retraso entre la animación de cada columna
        },
    },
};

const columnFromLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
};

const columnFromRight: Variants  = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
};

const ContactComponent = () => {
    const t = useTranslations("contact")
    const router = useRouter()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState('')
    console.log(isSubmitting, status)


    const pathname = usePathname();
    const locale = useMemo(() => pathname.split('/')[1] || 'en', [pathname]);


    // 👉 Función para manejar cambios en los campos
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    // 👉 Función para enviar datos al webhook de n8n
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus('')

        try {
            const response = await fetch('https://n8n.pandorai.ch/webhook/c0845e60-fc38-4131-9546-8dee4afee02e', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })

                // 👉 Aquí lanzas el SweetAlert
                Swal.fire({
                    icon: 'success',
                    title: t('alert.success.title'),
                    text: t('alert.success.text'),
                    confirmButtonText: t('alert.success.cta'),
                    confirmButtonColor: '#7e22ce',
                }).then(() => {
                    // 👉 Redirige a la página de proyectos
                    router.push(`/${locale}/projects`)
                })
            } else {
                setStatus('error')
                Swal.fire({
                    icon: 'error',
                    title: t('alert.error.title'),
                    text: t('alert.error.text'),
                })
            }
        } catch (error) {
            console.error('Error sending form:', error)
            setStatus('error')
            Swal.fire({
                icon: 'error',
                title: t('alert.error.title'),
                text: t('alert.error.text'),
            })
        }

        setIsSubmitting(false)
    }
    return (
        // ---> 3. Aplicar el orquestador de animación a la sección principal
        <motion.section
            className="py-6 flex sm:flex-row flex-col-reverse gap-10 sm:gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" // Animar cuando el componente sea visible
            viewport={{ once: true, amount: 0.3 }} // Animar solo una vez
        >
            {/* Columna del formulario (izquierda) */}
            <motion.div className='sm:w-1/2 w-full' variants={columnFromLeft}>
                <h2 className="text-4xl font-bold text-center mb-6 text-purple-500">{t('title')}</h2>
                <p className="text-lg text-gray-600 text-center mb-12">
                    {t('subtitle')}
                </p>

                {/* Formulario de Contacto */}
                <div className="max-w-4xl mx-auto bg-white border border-gray-100 shadow-lg rounded-lg p-8">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Nombre */}
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                {t('form.name')}
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder={t('form.input_name')}
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border border-gray-200 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                {t('form.email')}
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="ejemplo@correo.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-gray-200 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3"
                                required
                            />
                        </div>

                        {/* Mensaje */}
                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                {t('form.message')}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder={t('form.input_message')}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border border-gray-200 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 p-3"
                                required
                            />
                        </div>

                        {/* Botón de Enviar */}
                        <div className="text-center">
                            {/* ---> 4. Animar el botón para mayor interactividad */}
                            <motion.button
                                type="submit"
                                className="bg-purple-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-600 hover:shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            >
                                {t('form.send')}
                            </motion.button>
                        </div>
                    </form>
                </div>
            </motion.div>

            {/* Columna de Calendly (derecha) */}
            <motion.div className="sm:w-1/2 w-full bg-white border border-gray-100 shadow-lg rounded-lg py-8" variants={columnFromRight}>
                <h3 className="text-2xl font-bold text-center mb-4">{t('calendly.title')}</h3>
                <p className="text-center text-gray-600 mb-6">
                    {t('calendly.subtitle')}
                </p>

                <div className="">
                    <iframe
                        src="https://calendly.com/juan-se-suarez-ra"
                        width="100%"
                        height="421"
                        frameBorder="0"
                    ></iframe>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default ContactComponent