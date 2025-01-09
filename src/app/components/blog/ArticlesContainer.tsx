import React from 'react'
import CardArticle from './CardArticle'

const ArticlesContainer = () => {
  // Array de objetos con datos de prueba
  const testData = [
    {
      image: "https://my-page-negiupp.s3.amazonaws.com/1707936447902.jpg",
      title: "Título del artículo de prueba 1",
      intro: "Este es un resumen introductorio del artículo de prueba 1.",
      date: "2025-01-09",
      readTime: "5 min"
    },
    {
      image: "https://pandorai.ch/_next/image?url=https%3A%2F%2Fmy-page-negiupp.s3.amazonaws.com%2F1733502993844.jpg&w=640&q=75",
      title: "Título del artículo de prueba 2",
      intro: "Este es un resumen introductorio del artículo de prueba 2.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "2025-01-10",
      readTime: "3 min"
    },
    {
      image: "https://pandorai.ch/_next/image?url=https%3A%2F%2Fmy-page-negiupp.s3.amazonaws.com%2F1733502405470.jpg&w=640&q=75",
      title: "Título del artículo de prueba 3",
      intro: "Este es un resumen introductorio del artículo de prueba 3.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "2025-01-11",
      readTime: "4 min"
    },
    {
      image: "https://my-page-negiupp.s3.amazonaws.com/1707936447902.jpg",
      title: "Título del artículo de prueba 1",
      intro: "Este es un resumen introductorio del artículo de prueba 1.",
      date: "2025-01-09",
      readTime: "5 min"
    },
    {
      image: "https://pandorai.ch/_next/image?url=https%3A%2F%2Fmy-page-negiupp.s3.amazonaws.com%2F1733502993844.jpg&w=640&q=75",
      title: "Título del artículo de prueba 2",
      intro: "Este es un resumen introductorio del artículo de prueba 2.",
      date: "2025-01-10",
      readTime: "3 min"
    },
    {
      image: "https://pandorai.ch/_next/image?url=https%3A%2F%2Fmy-page-negiupp.s3.amazonaws.com%2F1733502405470.jpg&w=640&q=75",
      title: "Título del artículo de prueba 3",
      intro: "Este es un resumen introductorio del artículo de prueba 3. ",
      date: "2025-01-11",
      readTime: "4 min"
    },
    {
      image: "https://my-page-negiupp.s3.amazonaws.com/1707936447902.jpg",
      title: "Título del artículo de prueba 1",
      intro: "Este es un resumen introductorio del artículo de prueba 1.",
      date: "2025-01-09",
      readTime: "5 min"
    },
    {
      image: "https://pandorai.ch/_next/image?url=https%3A%2F%2Fmy-page-negiupp.s3.amazonaws.com%2F1733502993844.jpg&w=640&q=75",
      title: "Título del artículo de prueba 2",
      intro: "Este es un resumen introductorio del artículo de prueba 2.",
      date: "2025-01-10",
      readTime: "3 min"
    },
    {
      image: "https://pandorai.ch/_next/image?url=https%3A%2F%2Fmy-page-negiupp.s3.amazonaws.com%2F1733502405470.jpg&w=640&q=75",
      title: "Título del artículo de prueba 3",
      intro: "Este es un resumen introductorio del artículo de prueba 3.",
      date: "2025-01-11",
      readTime: "4 min"
    }
  ];

  return (
    <div className="grid grid-cols-1 custom2:grid-cols-2 md:grid-cols-3 gap-6 px-2">
      {testData.map((article, index) => (
        <CardArticle
          key={index} // Usamos el índice como key en este caso, pero puede ser algo único si lo tienes
          image={article.image}
          title={article.title}
          intro={article.intro}
          date={article.date}
          readTime={article.readTime}
        />
      ))}
    </div>
  )
}

export default ArticlesContainer
