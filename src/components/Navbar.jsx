import React, { useEffect, useRef, useState } from 'react'
import { assets, navbarInfo, navbarLinks } from '../assets/assets'
const Navbar = ({ isDarkMode, setIsDarkMode }) => {

  const sideMenuRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);
  const openSideMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  }
  const closeSideMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
      <img src={assets.header_bg_color} alt='' className='w-full' />
    </div>

    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 
    ${isScrolled ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-gray-900 dark:shadow-white/20" : ""}`}>
      <a href="#top">
        {/* <img src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-28 cursor-pointer mr-14' /> */}
        <h1 className={`text-3xl font-bold font-Poppins cursor-pointer ${isDarkMode ? "text-white" : "text-black"}`}>Nandhu <span className='text-red-500 text-5xl font-Ovo'>.</span> </h1>
      </a>
      <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
       ${isScrolled ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border/50 dark:bg-transparent"}`}>
        {navbarLinks.map((link, index) => (
          <li key={index}>
            <a className='font-Ovo' href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className='flex items-center gap-4'>
        <button onClick={() => setIsDarkMode(prev => !prev)}>
          <img src={isDarkMode ? assets.sun_icon : assets.moon_icon}
            alt='' className='w-6' /> </button>
        <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border 
        border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
          {navbarInfo.contact} <img src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3' />
        </a>
        <button className='block md:hidden ml-3' onClick={openSideMenu}>
          <img src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 
      h-screen bg-rose-50 transition duration-500 dark:bg-gray-900  dark:text-white'  onClick={closeSideMenu}>
        <div className='absolute right-6 top-6' >
          <img src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
        </div>
        {navbarLinks.map((link, index) => (
          <li key={index}>
            <a className='font-Ovo' href={link.href}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>

  </>
}

export default Navbar