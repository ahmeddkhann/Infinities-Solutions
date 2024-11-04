import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="mt-32" id="home">
      <div className="text-center">
        <h1 className="lg:text-7xl md:text-5xl text-4xl">
          <span className="text-black">Infinities </span>
          <span className="text-red-600">Solutions</span>
        </h1>
        <p className="lg:text-[30px] mt-2">Tech Solutions beyond limits</p>

        <p className="mt-4 lg:text-lg md:text-md text-sm max-w-2xl mx-auto text-neutral-700">
          At Infinities Solutions, we push the boundaries of technology to elevate your business. With custom software and advanced data analytics, our experts provide tools tailored to your unique needs.
        </p>

        <div className="flex justify-center space-x-6 mt-8">
          {/* First button with white background and red hover */}
          <Link href="#services">
            <span className="px-6 py-3 bg-white text-red-600 border border-red-600 rounded-md font-semibold hover:bg-red-600 hover:text-white transition duration-300">
              View Services
            </span>
          </Link>

          {/* Second button with red background and white hover */}
          <Link href="#projects">
            <span className="px-6 py-3 bg-white text-red-600 border border-red-600 rounded-md font-semibold hover:bg-red-600 hover:text-white  transition duration-300">
              View Projects
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
