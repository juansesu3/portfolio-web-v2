'use client'
import Image from 'next/image';
import { useState } from 'react';
import { FaBrain, FaRobot, FaIndustry, FaSearch, FaChartLine, FaShoppingCart, FaUserTie } from 'react-icons/fa';

const AiAgentsServices = () => {
  const [activeTab, setActiveTab] = useState('development');

  const services = {
    development: {
      title: "Desarrollo de Agentes de IA",
      description: `
      <p>Creo agentes de IA avanzados que utilizan procesamiento de lenguaje natural, machine learning y técnicas modernas para automatizar tareas y mejorar procesos.</p>
      
      <h3 class="text-lg font-semibold mt-4">Técnicas Avanzadas de Desarrollo:</h3>
      <ul class="list-disc list-inside ml-4">
        <li>
          <strong>Retrieval-Augmented Generation (RAG):</strong> Combino modelos generativos de lenguaje con capacidades de recuperación de información, permitiendo que los agentes accedan a bases de conocimiento externas en tiempo real para proporcionar respuestas actualizadas y precisas.
        </li>
        <li>
          <strong>Sistemas de Tool y Multi-Tool:</strong> Mis agentes pueden integrarse con múltiples herramientas (como buscadores, calculadoras, y APIs especializadas) para realizar tareas complejas de manera eficiente. Esto permite que un agente seleccione y utilice herramientas específicas según el contexto de la consulta o problema.
        </li>
        <li>
          <strong>Multi-Agent Systems (Sistemas Multi-Agentes):</strong> Diseño arquitecturas en las que múltiples agentes de IA colaboran para resolver problemas grandes o distribuidos. Estos agentes pueden comunicarse entre sí para coordinar tareas, optimizar decisiones, y manejar procesos de manera paralela.
        </li>
      </ul>
  
      <h3 class="text-lg font-semibold mt-4">Características Clave:</h3>
      <ul class="list-disc list-inside ml-4">
        <li>Adaptación continua mediante aprendizaje dinámico.</li>
        <li>Capacidad de razonar y actuar usando conocimiento actualizado.</li>
        <li>Escalabilidad para manejar tareas simples o altamente complejas.</li>
      </ul>
    `,
    },
    industries: {
      title: "Aplicaciones en Industrias",
      description: `
        <p>Nuestros agentes de IA son indispensables en diversas industrias, proporcionando soluciones inteligentes que optimizan procesos, mejoran la experiencia del cliente y generan ventajas competitivas.</p>
        
        <h3 class="text-lg font-semibold mt-4">Industrias Clave:</h3>
        <ul class="list-disc list-inside ml-4">
          <li>
            <strong>Salud:</strong> Automatización de diagnósticos, asistentes virtuales para pacientes, y análisis predictivo para mejorar la atención médica y la gestión de recursos.
          </li>
          <li>
            <strong>Finanzas:</strong> Detección de fraudes, asistentes financieros personalizados, y análisis automatizados para la toma de decisiones basadas en datos.
          </li>
          <li>
            <strong>Comercio Electrónico:</strong> Personalización de recomendaciones de productos, asistentes de atención al cliente 24/7, y optimización de precios dinámicos.
          </li>
          <li>
            <strong>Atención al Cliente:</strong> Bots de IA que responden preguntas frecuentes, manejan consultas complejas y mejoran la experiencia de soporte en tiempo real.
          </li>
          <li>
            <strong>Manufactura:</strong> Optimización de procesos de producción, mantenimiento predictivo y automatización de líneas de ensamblaje con agentes inteligentes.
          </li>
        </ul>
    
        <h3 class="text-lg font-semibold mt-4">Beneficios Generales:</h3>
        <ul class="list-disc list-inside ml-4">
          <li>Reducción de costos operativos mediante automatización de tareas repetitivas.</li>
          <li>Mejora de la eficiencia y precisión en procesos críticos.</li>
          <li>Incremento en la satisfacción del cliente con respuestas rápidas y personalizadas.</li>
          <li>Toma de decisiones más informadas utilizando análisis predictivos.</li>
        </ul>
      `,
    },
    benefits: {
      title: "Beneficios Clave",
      description: `
        <p>La implementación de agentes de IA ofrece múltiples beneficios que transforman los procesos empresariales, mejoran la eficiencia operativa y personalizan la experiencia del cliente.</p>
    
        <h3 class="text-lg font-semibold mt-4">Beneficios Destacados:</h3>
        <ul class="list-disc list-inside ml-4">
          <li>
            <strong>Reducción de Costos:</strong> Automatiza tareas repetitivas, disminuye errores humanos y reduce la necesidad de recursos manuales, logrando optimizar el presupuesto operativo.
          </li>
          <li>
            <strong>Mejora en la Eficiencia Operativa:</strong> Los agentes de IA aceleran procesos clave, permiten decisiones basadas en datos en tiempo real y mejoran el flujo de trabajo general.
          </li>
          <li>
            <strong>Personalización en Tiempo Real:</strong> Ofrece recomendaciones, respuestas y soluciones adaptadas al comportamiento y las preferencias del usuario para mejorar la experiencia del cliente.
          </li>
          <li>
            <strong>Escalabilidad:</strong> Permite manejar un volumen creciente de datos y solicitudes sin comprometer el rendimiento o la calidad del servicio.
          </li>
          <li>
            <strong>Mejora en la Toma de Decisiones:</strong> Utiliza analítica predictiva y aprendizaje automático para prever tendencias, evaluar riesgos y tomar decisiones más informadas.
          </li>
        </ul>
      `,
    },
    ecommerce: {
      title: "Agentes de IA para Comercio Electrónico",
      description: `
        <p>Los agentes de IA están revolucionando el comercio electrónico al transformar la manera en que las empresas interactúan con sus clientes y optimizan sus operaciones. Ofrecemos soluciones avanzadas que impulsan la personalización, automatización y análisis predictivo para ayudar a las empresas a destacar en un mercado competitivo.</p>
        
        <h3 class="text-lg font-semibold mt-4">Aplicaciones Clave:</h3>
        <ul class="list-disc list-inside ml-4">
          <li>
            <strong>Recomendaciones Personalizadas:</strong> Algoritmos de recomendación impulsados por IA que sugieren productos basados en el comportamiento y las preferencias de los clientes, mejorando la experiencia de compra.
          </li>
          <li>
            <strong>Asistentes Virtuales para Atención al Cliente:</strong> Bots conversacionales que proporcionan soporte 24/7, resolviendo consultas, ofreciendo información de pedidos y reduciendo los tiempos de espera.
          </li>
          <li>
            <strong>Gestión Inteligente de Inventario:</strong> Agentes predictivos que anticipan la demanda de productos, ayudando a reducir costos por sobrestock o faltantes, y optimizando la cadena de suministro.
          </li>
          <li>
            <strong>Optimización de Precios Dinámicos:</strong> Ajuste automatizado de precios basado en datos de competencia, demanda y tendencias de mercado, maximizando las ganancias.
          </li>
        </ul>
        
        <h3 class="text-lg font-semibold mt-4">Beneficios Clave:</h3>
        <ul class="list-disc list-inside ml-4">
          <li>Aumento de conversiones gracias a experiencias de compra personalizadas que impulsan las decisiones de los clientes.</li>
          <li>Mejora de la satisfacción del cliente mediante respuestas rápidas, precisas y disponibles las 24 horas del día.</li>
          <li>Reducción de costos operativos al automatizar tareas repetitivas y procesos de soporte al cliente.</li>
          <li>Incremento en la precisión de las predicciones de inventario y ventas, ayudando a tomar decisiones estratégicas más informadas.</li>
        </ul>
      `,
    },

  };

  return (
    <div className="max-w-5xl mx-auto  py-10 ">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-500">
        Desarrollo de Agentes de IA
      </h1>
      <div className='flex justify-center items-center w-20 h-20 mx-auto mb-8'>
    <Image src={'https://my-page-negiupp.s3.amazonaws.com/1737368910098.png'} width={500} height={500 } alt='ai-chip'></Image>
      </div>

      <div className="flex justify-center mb-6 space-x-4 overflow-x-auto scroll-snap-x py-2 scrollbar-hide">
        <button
          className={`px-4 py-2 rounded-lg text-sm text-nowrap font-medium border border-gray-100 ${activeTab === 'ecommerce' ? 'bg-purple-500 text-white' : 'bg-white shadow-md border border-gray-100 text-gray-700'
            }`}
          onClick={() => setActiveTab('ecommerce')}
        >
          E-Commerce
        </button>
        <button
          className={`px-4 py-2 rounded-lg text-sm font-medium border border-gray-100 ${activeTab === 'development' ? 'bg-purple-500 text-white' : 'bg-white shadow-md border border-gray-100 text-gray-700'
            }`}
          onClick={() => setActiveTab('development')}
        >
          Desarrollo
        </button>

        <button
          className={`px-4 py-2 rounded-lg text-sm font-medium border border-gray-100 ${activeTab === 'benefits' ? 'bg-purple-500 text-white' : 'bg-white shadow-md border border-gray-100 text-gray-700'
            }`}
          onClick={() => setActiveTab('benefits')}
        >
          Beneficios
        </button>

      </div>

      <div className="bg-white rounded-lg py-6">
        <div
            className="prose-custom  max-w-none leading-relaxed"
          dangerouslySetInnerHTML={{ __html: services[activeTab].description }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8  justify-center">
        <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow">
          <FaRobot className="text-blue-600 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Automatización</h3>
            <p className="text-sm text-gray-600">Automatiza procesos complejos con agentes inteligentes.</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow">
          <FaIndustry className="text-green-600 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Industria 4.0</h3>
            <p className="text-sm text-gray-600">Optimiza la manufactura y logística con IA.</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow">
          <FaChartLine className="text-purple-600 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Analítica Predictiva</h3>
            <p className="text-sm text-gray-600">Anticipa tendencias de mercado con machine learning.</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow">
          <FaShoppingCart className="text-orange-600 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Personalización de Productos</h3>
            <p className="text-sm text-gray-600">Mejora las recomendaciones con IA inteligente.</p>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow">
          <FaUserTie className="text-red-600 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Soporte al Cliente</h3>
            <p className="text-sm text-gray-600">Asistentes virtuales que responden en tiempo real.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAgentsServices;
