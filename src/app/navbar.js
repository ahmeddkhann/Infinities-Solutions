"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { navImage, navItems } from './data';
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full shadow-md flex items-center justify-between px-2 transition-all duration-300 ${
        scrolled ? 'bg-white' : 'bg-white'
      } z-50`}
    >
      {/* Toggle button for small screens */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="px-3 py-6 text-2xl text-black z-50 relative">
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Logo on small screens should be on the right */}
      <div className="hidden sm:flex items-center">
        <Image src={navImage.image} width={120} height={80} alt="logo" />
      </div>

      {/* Full-screen menu overlay for small screens */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-6 sm:space-y-0 sm:flex-row ${
          isOpen ? 'flex' : 'hidden'
        } sm:static sm:bg-transparent sm:flex sm:items-center transition-all duration-300`}
      >
        <div className={`flex-col items-start sm:flex-row `}>
  {navItems.map((navItem, index) => (
    <Link key={index} href={navItem.link} onClick={closeMenu}>
      <p
        className="text-black text-[20px] px-2 py-1 relative cursor-pointer
          after:content-[''] after:absolute after:bottom-0 after:left-0 
          after:h-[2px] after:bg-red-600 after:w-0 after:transition-all after:duration-300 
          hover:after:w-full"
      >
        {navItem.name}
      </p>
    </Link>
  ))}
</div>

      </div>

      {/* Logo for larger screens */}
      <div className="sm:hidden absolute right-2">
        <Image src={navImage.image} width={120} height={80} alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
