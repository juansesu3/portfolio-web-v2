'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MdOutlineGTranslate } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";




import React, { useEffect, useState, useRef } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false); // Estado para dropdown de idioma

  const dropdownRef = useRef(null); // Referencia para el dropdown de servicios
  const langDropdownRef = useRef(null); // Referencia para el dropdown de idioma

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Alternar estado del dropdown de servicios
  };

  const toggleLangDropdown = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen); // Alternar estado del dropdown de idioma
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdowns = () => {
    setIsDropdownOpen(false); // Cerrar dropdown de servicios
    setIsLangDropdownOpen(false); // Cerrar dropdown de idioma
  };

  const handleClickOutside = (event: { target: any }) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false); // Cerrar dropdown de servicios
    }
    if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
      setIsLangDropdownOpen(false); // Cerrar dropdown de idioma
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside); // Agregar evento de clic
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Eliminar evento al desmontar
    };
  }, []);

  const pathname = usePathname();
  const localeFromPath = pathname.split("/")[1] || "en";
  const [locale, setLocale] = useState(localeFromPath);
  const router = useRouter();
  const t = useTranslations("navbar");

  useEffect(() => {
    setLocale(localeFromPath);
  }, [localeFromPath]);

  const changeLanguage = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath === pathname ? `/${newLocale}${pathname}` : newPath);
    setLocale(newLocale);
    setIsLangDropdownOpen(false); // Cerrar el menú de idioma después de seleccionar
  };

  return (
    <nav className="flex mb-4 items-center justify-between lg:px-6 py-4 px-2 bg-white text-gray-500 sticky top-0 z-50 shadow-md ">
      <Link href="/" className="text-xl font-bold w-6 h-6 transition-all duration-300 ease-in-out hover:-translate-y-1">
        <Image
          src="/assets/logofinalpulido-black-3.png"
          alt="Logo"
          width={400}
          height={200}
          className="transition-transform duration-500 ease-in-out hover:rotate-90 cursor-pointer"
        />
      </Link>
      {/* Botón de menú para mobile */}

      <div className='flex flex-row-reverse gap-2'>
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none border border-gray-200 p-2 py-3 rounded-md"
          aria-label="Toggle menu">
          <div className={`w-6 h-0.5 bg-gray-500 mb-1 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1 bg-purple-500' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-500 mb-1 transition-all duration-300 ${isOpen ? 'opacity-0 bg-purple-500' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-500 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1 bg-purple-500' : ''}`}></div>
        </button>

        <div className='relative  md:hidden flex'>
          <button
            onClick={toggleLangDropdown}
            className="text-gray-500 hover:text-purple-500 flex items-center py-2 px-2 bg-white rounded-md shadow-sm border border-gray-100 gap-2"
            aria-label="Change language"
          >
            {
              isLangDropdownOpen ? (<IoIosArrowUp />) : (<IoIosArrowDown />)
            }
            <MdOutlineGTranslate size={23} />
          </button>

          {/* Menú desplegable para cambio de idioma */}
          <div
            className={`absolute top-full mt-2 right-4  bg-white shadow-md rounded-md border overflow-hidden transition-all duration-300 ease-in-out ${isLangDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`
            }
            style={{ transitionProperty: 'max-height, opacity' }}
          >
            <button onClick={() => changeLanguage('de')} className="block w-full text-sm py-2 px-4 text-left hover:bg-purple-100 hover:text-purple-500">
              🇩🇪
            </button>
            <button onClick={() => changeLanguage('en')} className="block w-full text-sm py-2 px-4 text-left hover:bg-purple-100 hover:text-purple-500">
              🇬🇧
            </button>
            <button onClick={() => changeLanguage('es')} className="block w-full text-sm py-2 px-4 text-left hover:bg-purple-100 hover:text-purple-500">
              🇪🇸
            </button>
            <button onClick={() => changeLanguage('fr')} className="block w-full text-sm py-2 px-4 text-left hover:bg-purple-100 hover:text-purple-500">
              🇫🇷
            </button>
          </div>
        </div>
      </div>
      {/* Links del navbar */}
      <div className={`flex-col md:flex md:flex-row justify-center shadow-md md:shadow-none items-center lg:gap-6 gap-1 absolute md:static top-16 right-0 md:right-auto bg-white md:bg-transparent w-full md:w-auto ${isOpen ? 'visible translate-x-0' : 'invisible -translate-x-96'} md:visible md:translate-x-0 transition-all duration-300 ease-in-out`}>
        <Link href="/" onClick={toggleMenu} className="block text-center text-sm py-2 px-4 md:py-0 hover:text-purple-500 transition-all duration-300 ease-in-out">{t('home')}</Link>
        <Link href={`/${locale}/about`} onClick={toggleMenu} className="block text-center text-sm py-2 px-4 md:py-0 hover:text-purple-500 transition-all duration-300 ease-in-out">{t('about')}</Link>
        <Link href={`/${locale}/projects`} onClick={toggleMenu} className="block text-center text-sm py-2 px-4 md:py-0 hover:text-purple-500 transition-all duration-300 ease-in-out">{t('projects')}</Link>
        {/* Dropdown de Servicios */}
        <div ref={dropdownRef} className="relative w-full md:w-auto flex flex-col justify-center items-center">
          <button
            onClick={toggleDropdown}
            className="text-center text-sm py-2 px-4 md:py-0 hover:text-purple-500 flex items-center space-x-2 transition-all duration-300 ease-in-out"
          >
            <span>{t('services_t')}</span>
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
          <div
            className={`w-52 md:bg-white border border-gray-100 md:shadow-md border-b mt-2 rounded-md md:absolute md:top-5 md:w-52 overflow-hidden transition-all duration-300 ease-in-out ${isDropdownOpen ? 'max-h-[500px] translate-y-0 opacity-100 flex flex-col items-center' : 'max-h-0 -translate-y-2 opacity-0 flex flex-col items-center'
              }`}
            style={{ transitionProperty: 'max-height, transform, opacity' }}>

         
            <Link href={`/${locale}/services/ai-agents-development`} onClick={() => { toggleMenu(); closeDropdowns(); }} className="w-full flex justify-center items-center text-sm py-2 px-4 hover:bg-purple-100 hover:text-purple-500">
              {t('services.service_4')}
            </Link>
            <Link href={`/${locale}/services/web-development`} onClick={() => { toggleMenu(); closeDropdowns(); }} className="w-full flex justify-center items-center text-sm py-2 px-4 hover:bg-purple-100 hover:text-purple-500">
              {t('services.service_2')}
            </Link>
            <Link href={`/${locale}/services/design-ux-ui`} onClick={() => { toggleMenu(); closeDropdowns(); }} className="w-full flex justify-center items-center text-sm py-2 px-4 hover:bg-purple-100 hover:text-purple-500">
              {t('services.service_3')}
            </Link>

          </div>
        </div>
        <Link href={`/${locale}/blog`} onClick={toggleMenu} className="block text-center text-sm py-2 px-4 md:py-0 hover:text-purple-500 transition-all duration-300 ease-in-out">{t('blog')}</Link>
        <Link href={`/${locale}/contact`} onClick={toggleMenu} className="block text-center text-sm py-2 px-4 md:py-0 hover:text-purple-500 transition-all duration-300 ease-in-out">{t('contact')}</Link>
      </div>
      <div className='flex-row gap-2 hidden md:flex relative'>
        <button onClick={toggleMenu} className="bg-purple-500 md:flex hidden text-white py-1 px-2 rounded-md hover:bg-purple-600 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out" aria-label="Toggle menu">{t('lets_talk')}</button>
        {/* Botón de cambio de idioma */}
        <div className="  py-1 px-2 bg-white rounded-md shadow-sm border border-gray-100 ">
          <button
            onClick={toggleLangDropdown}
            className="text-gray-500 hover:text-purple-500 flex items-center space-x-2"
            aria-label="Change language"
          >
            {
              isLangDropdownOpen ? (<IoIosArrowUp />) : (<IoIosArrowDown />)
            }
            <MdOutlineGTranslate size={23} />
          </button>
          {/* Menú desplegable para cambio de idioma */}
          <div
            className={`absolute top-full mt-2 right-0  bg-white shadow-md rounded-md border overflow-hidden transition-all duration-300 ease-in-out ${isLangDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`
            }
            style={{ transitionProperty: 'max-height, opacity' }}
          >
            <button onClick={() => changeLanguage('de')} className="block w-full text-sm py-2 px-4 text-left hover:bg-purple-100 hover:text-purple-500">
              🇩🇪
            </button>
            <button onClick={() => changeLanguage('en')} className="block w-full text-sm py-2 px-4 text-left hover:bg-purple-100 hover:text-purple-500">
              🇬🇧
            </button>
            <button onClick={() => changeLanguage('es')} className="block w-full text-sm py-2 px-4 text-left hover:bg-purple-100 hover:text-purple-500">
              🇪🇸
            </button>
            <button onClick={() => changeLanguage('fr')} className="block w-full text-sm py-2 px-4 text-left hover:bg-purple-100 hover:text-purple-500">
              🇫🇷
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
