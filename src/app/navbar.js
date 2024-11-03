"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { navImage, navItems } from './data';
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full shadow-md flex items-center justify-between px-2 transition-all duration-300 ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
      <div className="flex items-center">
        <Image 
          src={navImage.image}
          width={120}
          height={80}
          alt="logo" 
        />
        <p className="ml-2 text-xl font-semibold">
          <span className="text-black">Infinities</span> 
          <span className="text-red-600">Solutions</span>
        </p>
      </div>
      
      <div className="flex space-x-6">
        {navItems.map((navItem, index) => (
          <Link key={index} href={navItem.link}>
            <p className="text-black px-2 py-1 rounded-md hover:underline hover:underline-offset-4 hover:decoration-red-600">
              {navItem.name}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
