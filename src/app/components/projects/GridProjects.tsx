import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Datos de ejemplo para los proyectos
const projects = [
  {
    id: 1,
    title: 'E-commerce Web App',
    description: 'Plataforma moderna de comercio electrónico para una experiencia de compra fluida.',
    image: 'https://negiupp.com/_next/image?url=https%3A%2F%2Fmy-page-negiupp.s3.amazonaws.com%2F1713345137122.png&w=640&q=75',
    technologies: ['react', 'nextjs', 'tailwindcss'],
    link: '/projects/ecommerce'
  },
  {
    id: 2,
    title: 'Sistema de Gestión de Tareas',
    description: 'Organiza tus proyectos con este sistema intuitivo para gestión de tareas.',
    image: 'https://negiupp.com/_next/image?url=https%3A%2F%2Fmy-page-negiupp.s3.amazonaws.com%2F1697543716503.png&w=640&q=75',
    technologies: ['vue', 'firebase', 'sass'],
    link: '/projects/task-manager'
  },
  {
    id: 3,
    title: 'Aplicación de Finanzas',
    description: 'Una app para administrar gastos y finanzas personales con gráficos interactivos.',
    image: 'https://negiupp.com/_next/image?url=https%3A%2F%2Fmy-page-negiupp.s3.amazonaws.com%2F1692007995201.png&w=640&q=75',
    technologies: ['angular', 'nodejs', 'bootstrap'],
    link: '/projects/finance-app'
  }
]

const GridProjects = () => {
  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Mis Proyectos</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {projects.map((project) => (
          <Link href={project.link} key={project.id} className="group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
              {/* Imagen del proyecto */}
              <div className="relative h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-90 transition-opacity duration-300"
                />
              </div>

              {/* Contenido del proyecto */}
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>

              {/* Tecnologías en el pie */}
              <div className="p-4 border-t bg-gray-50">
                <div className="flex space-x-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="inline-block bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default GridProjects
