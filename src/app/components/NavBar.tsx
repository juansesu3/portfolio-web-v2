'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <div className={`flex-col md:flex md:flex-row justify-center shadow-md md:shadow-none items-center md:gap-6 absolute md:static top-14 right-0 md:right-auto bg-white md:bg-transparent w-full md:w-auto overflow-hidden ${isOpen ? 'visible  translate-x-0' : 'invisible  -translate-x-96'} md:visible md:translate-x-0 transition-all duration-300 ease-in-out `}>
        <Link href="/" className="block text-center text-sm py-2 px-4 md:py-0 hover:text-purple-500 trtansition-all duration-300 ease-in-out">Inicio</Link >
        <Link href={`/${locale}/about`} className="block text-center text-sm  py-2 px-4 md:py-0 hover:text-purple-500 trtansition-all duration-300 ease-in-out">Sobre</Link >
        <Link href={`/${locale}/services`} className="block text-center text-sm  py-2 px-4 md:py-0 hover:text-purple-500 trtansition-all duration-300 ease-in-out">Servicios</Link >
        <Link href={`/${locale}/projects`} className="block text-center text-sm  py-2 px-4 md:py-0 hover:text-purple-500 trtansition-all duration-300 ease-in-out">Proyectos</Link >
        <Link href={`/${locale}/blog`} className="block text-center text-sm  py-2 px-4 md:py-0 hover:text-purple-500 trtansition-all duration-300 ease-in-out">Blog</Link >
        <Link href={`/${locale}/contact`} className="block text-center text-sm  py-2 px-4 md:py-0 hover:text-purple-500 trtansition-all duration-300 ease-in-out">Contacto</Link >
      </div>

      <button onClick={toggleMenu} className="bg-purple-500 md:flex hidden text-white py-1 px-2 rounded-md hover:bg-purple-600  shadow-md hover:shadow-lg trtansition-all duration-300 ease-in-out" aria-label="Toggle menu">Let's talk</button>

    </nav>
  );
};

export default NavBar;
