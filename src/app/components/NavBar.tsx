'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MdOutlineGTranslate } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect, useState, useRef } from 'react';

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname() || "/";
  const router = useRouter();
  const t = useTranslations("navbar");

  /** ---- LOCALE DETECTADO DESDE LA URL ---- */
  const locale = pathname.split("/")[1] || "en";

  /** ---- Cerrar dropdowns cuando se hace clic fuera ---- */
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
    if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
      setIsLangDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /** ---- Cambiar idioma sin duplicar /en/en/... ---- */
  const changeLanguage = (newLocale: string) => {
    if (newLocale === locale) {
      setIsLangDropdownOpen(false);
      return;
    }

    const segments = pathname.split("/");
    if (segments.length > 1) {
      segments[1] = newLocale;
    }
    const newPath = segments.join("/") || "/";
    router.push(newPath);

    setIsLangDropdownOpen(false);
  };

  const toggleMenu = () => setIsOpen(prev => !prev);
  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
  const toggleLangDropdown = () => setIsLangDropdownOpen(prev => !prev);
  const closeDropdowns = () => {
    setIsDropdownOpen(false);
    setIsLangDropdownOpen(false);
  };

  return (
    <nav className="flex mb-4 items-center justify-between lg:px-6 py-4 px-2 bg-white text-gray-500 sticky top-0 z-50 shadow-md ">
      
      {/* Logo */}
      <Link href="/" className="text-xl font-bold w-6 h-6 transition-all duration-300 ease-in-out hover:-translate-y-1">
        <Image
          src="/assets/logofinalpulido-black-3.png"
          alt="Logo"
          width={400}
          height={200}
          className="transition-transform duration-500 ease-in-out hover:rotate-90 cursor-pointer"
        />
      </Link>

      {/* LANGUAGE + MENU (mobile) */}
      <div className='flex flex-row-reverse gap-2'>

        {/* Hamburguer */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none border border-gray-200 p-2 py-3 rounded-md"
        >
          <div className={`w-6 h-0.5 bg-gray-500 mb-1 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1 bg-purple-500' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-500 mb-1 transition-all duration-300 ${isOpen ? 'opacity-0 bg-purple-500' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-500 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1 bg-purple-500' : ''}`}></div>
        </button>

        {/* Language dropdown MOBILE */}
        <div ref={langDropdownRef} className='relative md:hidden flex'>
          <button
            onClick={toggleLangDropdown}
            className="text-gray-500 hover:text-purple-500 flex items-center py-2 px-2 bg-white rounded-md shadow-sm border border-gray-100 gap-2"
          >
            {isLangDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            <MdOutlineGTranslate size={23} />
          </button>

          <div
            className={`absolute top-full mt-2 right-4 bg-white shadow-md rounded-md border overflow-hidden transition-all duration-300 ease-in-out 
              ${isLangDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <button onClick={() => changeLanguage('en')} className="block w-full text-sm py-2 px-4 text-left hover:bg-purple-100">🇬🇧</button>
            <button onClick={() => changeLanguage('es')} className="block w-full text-sm py-2 px-4 text-left hover:bg-purple-100">🇪🇸</button>
            <button onClick={() => changeLanguage('fr')} className="block w-full text-sm py-2 px-4 text-left hover:bg-purple-100">🇫🇷</button>
          </div>
        </div>

      </div>

      {/* ---- NAV LINKS ---- */}
      <div className={`flex-col md:flex md:flex-row justify-center shadow-md md:shadow-none items-center lg:gap-6 gap-1 absolute md:static top-16 right-0 bg-white md:bg-transparent w-full md:w-auto
          ${isOpen ? 'visible translate-x-0' : 'invisible -translate-x-96'} 
          md:visible md:translate-x-0 transition-all duration-300 ease-in-out`}>

        <Link href={`/${locale}/`} onClick={toggleMenu} className="block text-center text-sm py-2 px-4 hover:text-purple-500">{t('home')}</Link>
        <Link href={`/${locale}/about`} onClick={toggleMenu} className="block text-center text-sm py-2 px-4 hover:text-purple-500">{t('about')}</Link>
        <Link href={`/${locale}/projects`} onClick={toggleMenu} className="block text-center text-sm py-2 px-4 hover:text-purple-500">{t('projects')}</Link>

        {/* SERVICES DROPDOWN */}
        <div ref={dropdownRef} className="relative w-full md:w-auto flex flex-col justify-center items-center">
          <button
            onClick={toggleDropdown}
            className="text-center text-sm py-2 px-4 hover:text-purple-500 flex items-center space-x-2"
          >
            <span>{t('services_t')}</span>
            <svg className={`w-4 h-4 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            className={`w-52 border border-gray-100 md:shadow-md mt-2 bg-white rounded-md md:absolute md:top-5 overflow-hidden transition-all duration-300 ease-in-out
              ${isDropdownOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <Link href={`/${locale}/services/ai-agents-development`} onClick={() => { toggleMenu(); closeDropdowns(); }} className="block text-sm py-2 px-4 hover:bg-purple-100">{t('services.service_4')}</Link>
            <Link href={`/${locale}/services/web-development`} onClick={() => { toggleMenu(); closeDropdowns(); }} className="block text-sm py-2 px-4 hover:bg-purple-100">{t('services.service_2')}</Link>
            <Link href={`/${locale}/services/design-ux-ui`} onClick={() => { toggleMenu(); closeDropdowns(); }} className="block text-sm py-2 px-4 hover:bg-purple-100">{t('services.service_3')}</Link>
          </div>
        </div>

        <Link href={`/${locale}/contact`} onClick={toggleMenu} className="block text-center text-sm py-2 px-4 hover:text-purple-500">{t('contact')}</Link>
      </div>

      {/* ---- LANG + CTA DESKTOP ---- */}
      <div className='flex-row gap-2 hidden md:flex relative' ref={langDropdownRef}>

        <button className="bg-purple-500 text-white py-1 px-2 rounded-md hover:bg-purple-600 shadow-md">
          {t('lets_talk')}
        </button>

        <div className="py-1 px-2 bg-white rounded-md shadow-sm border">
          <button
            onClick={toggleLangDropdown}
            className="text-gray-500 hover:text-purple-500 flex items-center space-x-2"
          >
            {isLangDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            <MdOutlineGTranslate size={23} />
          </button>

          <div
            className={`absolute top-full mt-2 right-0 bg-white shadow-md rounded-md border overflow-hidden transition-all duration-300 ease-in-out 
              ${isLangDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <button onClick={() => changeLanguage('en')} className="block w-full text-sm py-2 px-4 text-left hover:bg-purple-100">🇬🇧</button>
            <button onClick={() => changeLanguage('es')} className="block w-full text-sm py-2 px-4 text-left hover:bg-purple-100">🇪🇸</button>
            <button onClick={() => changeLanguage('fr')} className="block w-full text-sm py-2 px-4 text-left hover:bg-purple-100">🇫🇷</button>
          </div>
        </div>

      </div>

    </nav>
  );
};

export default NavBar;
