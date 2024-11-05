"use client";

import React, { useState, useEffect } from 'react';
import { team } from './data';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import linkedIn from "/public/linkedin.png";
import emailIcon from "public//email.png"

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % team.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="team" className="py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Team</h1>

      {/* Slider for Small Screens */}
      <div className="relative block lg:hidden w-full overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100, y: -1 }}
            animate={{ opacity: 1, x: 0, y: -1 }}
            exit={{ opacity: 0, x: -100, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex min-w-full cursor-pointer 
              ${currentIndex % 2 === 0 ? 'bg-gray-100 text-black' : 'bg-red-500 text-neutral-100'} 
              p-5 flex-col items-center rounded-lg`}
          >
            <Image
              src={team[currentIndex].image}
              width={150}
              height={150}
              alt={team[currentIndex].name}
              className="rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{team[currentIndex].name}</h2>
            <div className="mb-4 text-center">
              {team[currentIndex].position.map((pos, idx) => (
                <h3 key={idx} className="">{pos}</h3>
              ))}
            </div>
            <Link href={team[currentIndex].LinkedIn} className="hover:underline">
              <Image
                src={linkedIn}
                width={50}
                height={50}
                alt='linkedIn' 
              />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Grid for Larger Screens */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            className={`flex flex-col items-center p-5 rounded-lg shadow-md transition duration-300 
              ${index % 2 === 0 ? 'bg-gray-100 text-black' : 'bg-red-500 text-neutral-100'}`}
          >
            <Image
              src={member.image}
              width={150}
              height={150}
              alt={member.name}
              className="rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <div className="mb-4 text-center">
              {member.position.map((pos, idx) => (
                <h3 key={idx} className="">{pos}</h3>
              ))}
            </div>
            <Link href={member.LinkedIn} className="hover:underline">
              <Image
                src={linkedIn}
                width={30}
                height={30}
                alt='linkedIn' 
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div> 
  );
};

export default Team;
