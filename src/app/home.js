import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen" id="#">
      <div className="text-center px-4">
        <h1 className="lg:text-8xl md:text-6xl text-5xl font-bold">
          <span className="text-black">Infinities </span>
          <span className="text-red-600">Solutions</span>
        </h1>

        <p className="lg:text-3xl md:text-2xl text-xl mt-4 font-semibold">
          Tech Solutions beyond limits
        </p>

        <p className="mt-6 lg:text-xl md:text-lg text-base max-w-3xl mx-auto text-neutral-700">
          At Infinities Solutions, we push the boundaries of technology to
          elevate your business. With custom software and advanced data
          analytics, our experts provide tools tailored to your unique needs.
        </p>

        <div className="flex justify-center space-x-8 mt-12">
          {/* First button with white background and red hover */}
          <Link href="#services">
            <span className="lg:px-10 lg:py-4 px-4 py-4 bg-white text-red-600 border border-red-600 rounded-lg font-semibold text-lg lg:text-xl hover:bg-red-600 hover:text-white transition duration-300">
              View Services
            </span>
          </Link>

          {/* Second button with red background and white hover */}
          <Link href="#projects">
            <span className="lg:px-10 lg:py-4 px-4 py-4 bg-red-600 text-white border border-red-600 rounded-lg font-semibold text-lg lg:text-xl hover:bg-white hover:text-red-600 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              View Projects
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
