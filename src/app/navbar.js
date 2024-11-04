"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { navImage, navItems } from './data';
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to manage toggle

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <nav className={`fixed top-0 left-0 w-full shadow-md flex items-center justify-between px-2 transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
      <div className="flex items-center">
        <Image 
          src={navImage.image}
          width={120}
          height={80}
          alt="logo" 
        />
      </div>

      {/* Toggle button for small screens */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="p-2 text-black">
          {isOpen ? '✖' : '☰'} {/* Show 'X' or 'menu' icon based on state */}
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`flex-col sm:flex-row space-y-6 sm:space-y-0 sm:flex ${isOpen ? 'flex' : 'hidden'} transition-all duration-300`}>
        <div className={`flex flex-col sm:flex-row sm:space-x-8`}> {/* Flex column on small screens */}
          {navItems.map((navItem, index) => (
            <Link key={index} href={navItem.link}>
              <p className="text-black px-2 py-1 rounded-md hover:underline hover:underline-offset-4 hover:decoration-red-600">
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
