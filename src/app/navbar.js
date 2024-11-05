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

  return (
    <nav
      className={`fixed top-0 left-0 w-full shadow-md flex items-center justify-between px-2 transition-all duration-300 ${
        scrolled ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center">
        <Image src={navImage.image} width={120} height={80} alt="logo" />
      </div>

      {/* Toggle button for small screens */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="p-2 text-black">
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`flex-col sm:flex-row space-y-6 sm:space-y-0 sm:flex ${
          isOpen ? 'flex' : 'hidden'
        } transition-all duration-300`}
      >
        <div className="flex flex-col sm:flex-row sm:space-x-8">
          {navItems.map((navItem, index) => (
            <Link key={index} href={navItem.link}>
              <p
                className="text-black px-2 py-1 relative cursor-pointer
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
    </nav>
  );
};

export default Navbar;
