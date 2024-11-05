"use client";

import React from 'react';
import { Socialcontact } from './data';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-16" id="contact">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
        
        <div className="flex flex-wrap justify-center gap-12 mb-8">
          {Socialcontact.map((contact, index) => (
            <div key={index} className="flex flex-col mt-6 items-center">
              <Link href={contact.link} passHref>
                <span target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform">
                  <Image
                    src={contact.icon}
                    width={50}
                    height={50}
                    alt={contact.name}
                    className="rounded-lg border border-gray-500 shadow-lg"
                  />
                </span>
              </Link>
              <h3 className="mt-4 text-xl font-semibold text-gray-100">{contact.name}</h3>
              <p className="text-gray-400">{contact.email}</p>
            </div>
          ))}
        </div>

        <p className="text-lg text-center border-t border-gray-600 pt-6">© 2024 Infinities Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
