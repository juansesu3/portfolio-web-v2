import { useTranslations } from 'next-intl';
import React from 'react';
import { FaCode, FaServer, FaCogs, FaTools, FaDatabase, FaRocket, FaGithub, FaGitAlt } from 'react-icons/fa';

const WebDevelopmentServices = () => {
  const t = useTranslations("services.web_development");
  const technologies = [
    { name: 'Next.js', icon: <FaRocket className="text-blue-500 text-3xl" /> },
    { name: 'React', icon: <FaCode className="text-cyan-500 text-3xl" /> },
    { name: 'TypeScript', icon: <FaCogs className="text-blue-600 text-3xl" /> },
    { name: 'JavaScript', icon: <FaCode className="text-yellow-500 text-3xl" /> },
    { name: 'Python', icon: <FaServer className="text-green-600 text-3xl" /> },
    { name: 'OpenAI', icon: <FaRocket className="text-indigo-500 text-3xl" /> },
    { name: 'MongoDB', icon: <FaDatabase className="text-green-500 text-3xl" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-500 text-3xl" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-800 text-3xl" /> },
    { name: 'CI/CD', icon: <FaTools className="text-red-500 text-3xl" /> },
    { name: 'DBMS', icon: <FaDatabase className="text-teal-500 text-3xl" /> },
  ];

  return (
    <div className="max-w-7xl mx-auto  py-12">
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-8">
        {t('title')}
      </h1>
      <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
      {t('description')}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <div key={index} className="flex items-center p-4 bg-white border border-gray-100 rounded-lg shadow-sm justify-center">
            <div className="mr-4">{tech.icon}</div>
            <h3 className="text-xl  font-semibold text-gray-900">{tech.name}</h3>
          </div>
        ))}
      </div>

      <div className="bg-purple-100 rounded-lg shadow-md p-6 mt-12">
        <h2 className="text-2xl font-bold text-purple-700 mb-4"> {t('metodologies.title')}</h2>
        <p className="text-gray-700 leading-relaxed">
       { t('metodologies.descrition')}
        </p>
      </div>
    </div>
  );
};

export default WebDevelopmentServices;
