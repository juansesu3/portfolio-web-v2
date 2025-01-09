'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para manejar el dropdown
 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Cambiar el estado del dropdown
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();
  const localeFromPath = pathname.split("/")[1] || "en";
  const [locale, setLocale] = useState(localeFromPath);
  const router = useRouter();

  useEffect(() => {
    setLocale(localeFromPath);
  }, [localeFromPath]);

  return (
    <nav className="flex mb-4 items-center justify-between lg:px-6 py-4 px-2 bg-white text-gray-500 sticky top-0 z-50 shadow-md">
      <Link href="/" className="text-xl font-bold w-6 h-6 transition-all duration-300 ease-in-out hover:-translate-y-1">

        <Image
          src="/assets/logofinalpulido-black-3.png" // nota la barra inclinada al inicio
          alt="Logo"
          width={400}
          height={200}
          className="transition-transform duration-500 ease-in-out hover:rotate-90 cursor-pointer"
        /></Link>

      {/* Botón de menú para mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none border border-gray-200 p-2 py-3 rounded-md"
        aria-label="Toggle menu">
        <div className={`w-6 h-0.5 bg-gray-500 mb-1 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-gray-500 mb-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-gray-500 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
      </button>

      {/* Links del navbar */}
      <div className={`flex-col md:flex md:flex-row justify-center shadow-md md:shadow-none items-center md:gap-6 absolute md:static top-14 right-0 md:right-auto bg-white md:bg-transparent w-full md:w-auto overflow-hidden ${isOpen ? 'visible translate-x-0' : 'invisible -translate-x-96'} md:visible md:translate-x-0 transition-all duration-300 ease-in-out`}>
        <Link href="/" onClick={toggleMenu} className="block text-center text-sm py-2 px-4 md:py-0 hover:text-purple-500 trtansition-all duration-300 ease-in-out">Inicio</Link>
        <Link href={`/${locale}/about`} onClick={toggleMenu} className="block text-center text-sm py-2 px-4 md:py-0 hover:text-purple-500 trtansition-all duration-300 ease-in-out">Sobre</Link>
        <Link href={`/${locale}/projects`} onClick={toggleMenu} className="block text-center text-sm py-2 px-4 md:py-0 hover:text-purple-500 trtansition-all duration-300 ease-in-out">Proyectos</Link>
        
        {/* Dropdown de Servicios */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-center text-sm py-2 px-4 md:py-0 hover:text-purple-500 flex items-center space-x-2 trtansition-all duration-300 ease-in-out"
          >
            <span>Servicios</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 h-4 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Menú desplegable de servicios */}
          {isDropdownOpen && (
            <div className="absolute left-0 w-full bg-white shadow-md mt-2 rounded-md z-50">
              <Link href={`/${locale}/services/consulting`} onClick={toggleMenu} className="block text-sm py-2 px-4 hover:bg-purple-100 hover:text-purple-500">Consultoría</Link>
              <Link href={`/${locale}/services/development`} onClick={toggleMenu} className="block text-sm py-2 px-4 hover:bg-purple-100 hover:text-purple-500">Desarrollo Web</Link>
              <Link href={`/${locale}/services/design`} onClick={toggleMenu} className="block text-sm py-2 px-4 hover:bg-purple-100 hover:text-purple-500">Diseño UI/UX</Link>
              <Link href={`/${locale}/services/support`} onClick={toggleMenu} className="block text-sm py-2 px-4 hover:bg-purple-100 hover:text-purple-500">Soporte Técnico</Link>
            </div>
          )}
        </div>
        
        <Link href={`/${locale}/blog`} onClick={toggleMenu} className="block text-center text-sm py-2 px-4 md:py-0 hover:text-purple-500 trtansition-all duration-300 ease-in-out">Blog</Link>
        <Link href={`/${locale}/contact`} onClick={toggleMenu} className="block text-center text-sm py-2 px-4 md:py-0 hover:text-purple-500 trtansition-all duration-300 ease-in-out">Contacto</Link>
      </div>

      <button onClick={toggleMenu} className="bg-purple-500 md:flex hidden text-white py-1 px-2 rounded-md hover:bg-purple-600 shadow-md hover:shadow-lg trtansition-all duration-300 ease-in-out" aria-label="Toggle menu">Let's talk</button>
    </nav>
  );
};

export default NavBar;
