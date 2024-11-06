"use client";

import React, { useState, useEffect, useRef } from 'react';
import { team } from './data';
import Image from 'next/image';
import Link from 'next/link';
import { useSpring, animated } from '@react-spring/web'; // Import React Spring
import linkedIn from "/public/linkedin.png";

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [autoSlide, setAutoSlide] = useState(true); // Track auto sliding state
  const sliderRef = useRef(null);

  // Function to handle the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % team.length);
  };

  // Function to handle the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? team.length - 1 : prevIndex - 1
    );
  };

  // Intersection Observer to track slider visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) observer.unobserve(sliderRef.current);
    };
  }, []);

  // Start/stop auto-slide based on visibility and autoSlide state
  useEffect(() => {
    let interval;
    if (isVisible && autoSlide) {
      interval = setInterval(nextSlide, 3000);
    } else if (interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isVisible, autoSlide]);

  // React Spring animation
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: `translateX(${isVisible ? 0 : 100}%)`, // Adjust sliding effect
    config: { tension: 200, friction: 20 }, // Adjust these values for your desired effect
  });

  // Stop auto-slide when a card is clicked
  const handleCardClick = () => {
    setAutoSlide(false);
  };

  return (
    <div id="team" className="py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Team</h1>

      {/* Slider for Small Screens */}
      <div ref={sliderRef} className="relative block lg:hidden w-full overflow-hidden">
        <animated.div
          style={props} // Apply the spring animation style
          className="flex min-w-full cursor-pointer bg-red-500 text-white p-5 flex-col items-center rounded-lg transition duration-300"
        >
          <div
            className={`w-32 h-32 mb-4 p-5 flex justify-center items-center`} // Smaller size for small screens
          >
            <Image
              src={team[currentIndex].image}
              width={120}
              height={120}
              alt={team[currentIndex].name}
              className="object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold">{team[currentIndex].name}</h2>
          <div className="mb-4 text-center">
            {team[currentIndex].position.map((pos, idx) => (
              <h3 key={idx}>{pos}</h3>
            ))}
          </div>
          <Link href={team[currentIndex].LinkedIn} className="hover:underline">
            <Image
              src={linkedIn}
              width={50}
              height={50}
              alt="LinkedIn"
            />
          </Link>
        </animated.div>

        {/* Left and Right Buttons for Sliding */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4">
          <button
            onClick={prevSlide}
            className="text-white bg-gray-600 p-2 rounded-full hover:bg-red-500"
          >
            &lt;
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4">
          <button
            onClick={nextSlide}
            className="text-white bg-gray-600 p-2 rounded-full hover:bg-red-500"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Grid for Larger Screens */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {team.map((member, index) => (
          <div
            key={member.name}
            className="flex flex-col items-center p-5 rounded-lg shadow-md transition duration-300 bg-gray-200 text-black hover:bg-red-500 hover:text-white transform lg:hover:scale-105 cursor-pointer"
            onClick={handleCardClick}
          >
            <div className="w-40 h-40 mb-4 p-5 flex justify-center items-center">
              <Image
                src={member.image}
                width={150}
                height={150}
                alt={member.name}
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <div className="mb-4 text-center">
              {member.position.map((pos, idx) => (
                <h3 key={idx}>{pos}</h3>
              ))}
            </div>
            <Link href={member.LinkedIn} className="hover:underline">
              <Image
                src={linkedIn}
                width={30}
                height={30}
                alt="LinkedIn"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
