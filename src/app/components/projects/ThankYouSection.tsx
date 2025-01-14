import React from 'react';

const ThankYouSection = () => {
  return (
    <section className=" py-16  text-center rounded-lg ">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          ¡<span className='text-purple-500'>Gracias</span> por  <span className='text-purple-500'>visitar</span> nuestro  <span className='text-purple-500'>proyecto</span>!
        </h2>
        <p className="text-lg mb-6 ">
          Tu tiempo y tu interés significan mucho para mi. Este proyecto ha sido desarrollado con pasión, 
          innovación y un enfoque en crear soluciones escalables y centradas en el usuario.  
        </p>
        <p className="text-lg mb-6">
          Si te ha gustado lo que viste, te invito a explorar más sobre mis soluciones. Como desarrollador 
          full stack, me encanta convertir ideas complejas en experiencias simples y efectivas.  
        </p>
        <p className="text-lg font-semibold mb-8">
          ¿Te gustaría trabajar juntos? Estoy abierto a nuevas colaboraciones y desafíos emocionantes.
        </p>
        <a
          href="#contacto" // Enlace que puedes personalizar
          className="bg-purple-500 text-white hover:text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-white border border-gray-100  transition duration-300"
        >
          Contáctame
        </a>
      </div>
    </section>
  );
};

export default ThankYouSection;
