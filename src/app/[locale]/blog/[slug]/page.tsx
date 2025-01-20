import SingleArticle from '@/app/components/blog/SingleArticle'
import React from 'react'

const page = () => {
  const article = {
    image: "https://pandorai.ch/_next/image?url=https%3A%2F%2Fmy-page-negiupp.s3.amazonaws.com%2F1733502405470.jpg&w=640&q=75",
    title: "Título del artículo de prueba 3",
    intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    content: `
        <article>
        
            <section>
           
                <p>En esta sección, exploramos los aspectos más importantes relacionados con el tema del artículo. El objetivo es proporcionar información valiosa de manera clara y concisa.</p>

                <h3>Subtítulo 1: Análisis de los Factores Clave</h3>
                <p>El análisis de los factores clave es crucial para comprender los resultados esperados. A continuación, presentamos los elementos más importantes:</p>
                <ul>
                    <li>Factor 1: Descripción del factor clave 1.</li>
                    <li>Factor 2: Descripción del factor clave 2.</li>
                    <li>Factor 3: Descripción del factor clave 3.</li>
                </ul>

                <h3>Subtítulo 2: Estrategias de Optimización</h3>
                <p>Las estrategias de optimización juegan un papel fundamental en la mejora de los resultados. A continuación, detallamos algunas de las estrategias más efectivas:</p>
                <ol>
                    <li>Estrategia A: Descripción de la estrategia A.</li>
                    <li>Estrategia B: Descripción de la estrategia B.</li>
                    <li>Estrategia C: Descripción de la estrategia C.</li>
                </ol>

                <h3>Subtítulo 3: Ejemplos de Casos de Estudio</h3>
                <p>Los casos de estudio permiten ilustrar cómo se implementan las estrategias y los resultados obtenidos. A continuación, se presentan dos ejemplos de casos de estudio relevantes:</p>

                <table>
                    <thead>
                        <tr>
                            <th>Caso de Estudio</th>
                            <th>Descripción</th>
                            <th>Resultados</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Caso 1</td>
                            <td>Descripción del caso de estudio 1.</td>
                            <td>Resultados obtenidos del caso 1.</td>
                        </tr>
                        <tr>
                            <td>Caso 2</td>
                            <td>Descripción del caso de estudio 2.</td>
                            <td>Resultados obtenidos del caso 2.</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <footer>
                <h2>Conclusión</h2>
                <p>En resumen, el artículo proporciona un análisis profundo de los aspectos más importantes relacionados con el tema. Las estrategias y ejemplos presentados son útiles para aquellos interesados en optimizar sus procesos y obtener mejores resultados.</p>
            </footer>

      
        </article>
    `,
    date: "2025-01-11",
    readTime: "4 min",
    slug: "test-9",
    author: "Juan Sebastián Suárez Ramírez",
    authorBio: "Fullstack Developer",
    authorImage: "https://my-page-negiupp.s3.amazonaws.com/1688550234499.jpg",
}

  return (
    <div>
        <SingleArticle
         // Usamos el índice como key en este caso, pero puede ser algo único si lo tienes
            image={article.image}
            title={article.title}
            content={article.content}
            author={article.author}
            authorBio={article.authorBio}
            authorImage={article.authorImage}
            intro={article.intro}
            date={article.date}
            slug={article.slug}
            readTime={article.readTime}/>
    </div>
  )
}

export default page