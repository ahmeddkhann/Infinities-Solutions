import React from 'react';
import { aboutText } from './data';

const About = () => {
  return (
    <div id="about" className="flex justify-center items-center mt-16 px-4 bg-red-500 py-12">
      <div className="max-w-4xl">
        <h1 className="text-4xl text-neutral-100 font-bold mb-6 text-center">
          {aboutText.title}
        </h1>
        
        <p className="text-neutral-100 bg-neutral-700 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300
         lg:text-lg md:text-md text-sm max-w-3xl text-left">
          {aboutText.text}
        </p>
      </div>
    </div>
  );
};

export default About;
