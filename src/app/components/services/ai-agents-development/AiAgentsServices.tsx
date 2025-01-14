
'use client'
import { useState } from 'react';
import { FaBrain, FaRobot, FaIndustry, FaSearch, FaChartLine } from 'react-icons/fa';

const AiAgentsServices = () => {
  const [activeTab, setActiveTab] = useState('development');

  const services = {
    development: {
      title: "Desarrollo de Agentes de IA",
      description: "Creamos agentes de IA avanzados que utilizan procesamiento de lenguaje natural, machine learning y otras técnicas para automatizar tareas y mejorar procesos.",
    },
    industries: {
      title: "Aplicaciones en Industrias",
      description: "Nuestros agentes son indispensables en diversas industrias como la salud, finanzas, comercio electrónico, atención al cliente, y más.",
    },
    benefits: {
      title: "Beneficios Clave",
      description: "Reducción de costos, mejoras en la eficiencia operativa, y personalización en tiempo real son solo algunos de los beneficios de nuestros agentes de IA.",
    },
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
        Desarrollo de Agentes de IA
      </h1>

      <div className="flex justify-center mb-6 space-x-4">
        <button
          className={`px-4 py-2 rounded-lg text-sm font-medium ${activeTab === 'development' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          onClick={() => setActiveTab('development')}
        >
          Desarrollo
        </button>
        <button
          className={`px-4 py-2 rounded-lg text-sm font-medium ${activeTab === 'industries' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          onClick={() => setActiveTab('industries')}
        >
          Industrias
        </button>
        <button
          className={`px-4 py-2 rounded-lg text-sm font-medium ${activeTab === 'benefits' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          onClick={() => setActiveTab('benefits')}
        >
          Beneficios
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {services[activeTab].title}
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {services[activeTab].description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
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
      </div>
    </div>
  );
};

export default AiAgentsServices;
