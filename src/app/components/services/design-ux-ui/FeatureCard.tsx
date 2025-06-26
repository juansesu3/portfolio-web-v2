'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ICONS } from './UxUiDesign'; // Reutiliza la configuración de iconos

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100 } },
};

const FeatureCard = ({ icon, color, title, description }) => {
  const IconComponent = ICONS[icon];
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) / (width / 2); // Normaliza entre -1 y 1
    const y = (clientY - top - height / 2) / (height / 2);

    setRotate({ x: -y * 10, y: x * 10 }); // Invierte y y ajusta la intensidad
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.2s ease-out',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white/40 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/30 h-full"
    >
      <div className="flex items-center mb-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${color.replace('text-', 'bg-')}/10`}>
          <IconComponent className={`${color} text-2xl`} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">
          {title}
        </h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;