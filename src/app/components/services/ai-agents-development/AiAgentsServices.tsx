'use client'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { FaRobot, FaIndustry, FaChartLine, FaShoppingCart, FaUserTie } from 'react-icons/fa';

const AiAgentsServices = () => {
  type ServiceTabs = 'development' | 'benefits' | 'ecommerce';
  const [activeTab, setActiveTab] = useState<ServiceTabs>('development');
const t = useTranslations("services.ai_agents_development");
  const services = {
    development: {
      title: "Desarrollo de Agentes de IA",
      description: `
      <p>${t('sections.development.description')}</p>
      
      <h3 class="text-lg font-semibold mt-4">${t('sections.development.avanced_techniques.title')}:</h3>
      <ul class="list-disc list-inside ml-4">
        <li>
          <strong>${t('sections.development.avanced_techniques.list.one.title')}:</strong> ${t('sections.development.avanced_techniques.list.one.description')}
        </li>
        <li>
          <strong>${t('sections.development.avanced_techniques.list.two.title')}:</strong> ${t('sections.development.avanced_techniques.list.two.description')}
        </li>
        <li>
          <strong>${t('sections.development.avanced_techniques.list.three.title')}:</strong> ${t('sections.development.avanced_techniques.list.three.description')}
        </li>
      </ul>
  
      <h3 class="text-lg font-semibold mt-4">${t('sections.development.key_features.title')}:</h3>
      <ul class="list-disc list-inside ml-4">
        <li>${t('sections.development.key_features.one')}</li>
        <li>${t('sections.development.key_features.two')}</li>
        <li>${t('sections.development.key_features.three')}</li>
      </ul>
    `,
    },
    benefits: {
      title: "Beneficios Clave",
      description: `
        <p>${t('sections.benefits.description')}</p>
    
        <h3 class="text-lg font-semibold mt-4">${t('sections.benefits.highlighted_benefits.title')}:</h3>
        <ul class="list-disc list-inside ml-4">
          <li>
            <strong>${t('sections.benefits.highlighted_benefits.list.one.title')}:</strong> ${t('sections.benefits.highlighted_benefits.list.one.description')}
          </li>
          <li>
            <strong>${t('sections.benefits.highlighted_benefits.list.two.title')}:</strong> ${t('sections.benefits.highlighted_benefits.list.two.description')}
          </li>
          <li>
            <strong>${t('sections.benefits.highlighted_benefits.list.three.title')}:</strong> ${t('sections.benefits.highlighted_benefits.list.three.description')}
          </li>
          <li>
            <strong>${t('sections.benefits.highlighted_benefits.list.four.title')}:</strong> ${t('sections.benefits.highlighted_benefits.list.four.description')}
          </li>
          <li>
            <strong>${t('sections.benefits.highlighted_benefits.list.five.title')}:</strong> ${t('sections.benefits.highlighted_benefits.list.five.description')}
          </li>
        </ul>
      `,
    },
    ecommerce: {
      title: "Agentes de IA para Comercio Electrónico",
      description: `
        <p>${t('sections.ecommerce.content.introduction')}</p>
        
        <h3 class="text-lg font-semibold mt-4">${t('sections.ecommerce.content.key_aplications.title')}:</h3>
        <ul class="list-disc list-inside ml-4">
          <li>
            <strong>${t('sections.ecommerce.content.key_aplications.list.one.title')}:</strong> ${t('sections.ecommerce.content.key_aplications.list.one.description')}
          </li>
          <li>
            <strong>${t('sections.ecommerce.content.key_aplications.list.two.title')}:</strong> ${t('sections.ecommerce.content.key_aplications.list.two.description')}
          </li>
          <li>
            <strong>G${t('sections.ecommerce.content.key_aplications.list.three.title')}:</strong> ${t('sections.ecommerce.content.key_aplications.list.three.description')}
          </li>
          <li>
            <strong>${t('sections.ecommerce.content.key_aplications.list.four.title')}:</strong> ${t('sections.ecommerce.content.key_aplications.list.four.description')}
          </li>
        </ul>
        
        <h3 class="text-lg font-semibold mt-4">${t('sections.ecommerce.content.key_benefit.title')}:</h3>
        <ul class="list-disc list-inside ml-4">
          <li>${t('sections.ecommerce.content.key_benefit.list.one')}</li>
          <li>${t('sections.ecommerce.content.key_benefit.list.two')}</li>
          <li>${t('sections.ecommerce.content.key_benefit.list.three')}</li>
          <li>${t('sections.ecommerce.content.key_benefit.list.four')}</li>
        </ul>
      `,
    },

  };

  return (
    <div className="max-w-5xl mx-auto  py-10 ">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-500">
        {t('title')}
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
         {t('sections.ecommerce.title')}
        </button>
        <button
          className={`px-4 py-2 rounded-lg text-sm font-medium border border-gray-100 ${activeTab === 'development' ? 'bg-purple-500 text-white' : 'bg-white shadow-md border border-gray-100 text-gray-700'
            }`}
          onClick={() => setActiveTab('development')}
        >
         {t('sections.development.title')}
        </button>

        <button
          className={`px-4 py-2 rounded-lg text-sm font-medium border border-gray-100 ${activeTab === 'benefits' ? 'bg-purple-500 text-white' : 'bg-white shadow-md border border-gray-100 text-gray-700'
            }`}
          onClick={() => setActiveTab('benefits')}
        >
           {t('sections.benefits.title')}
        </button>

      </div>

      <div className="bg-white rounded-lg py-6">
        <div
          dangerouslySetInnerHTML={{ __html: services[activeTab]?.description }}
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
