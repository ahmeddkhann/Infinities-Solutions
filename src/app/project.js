import React from 'react';
import { projects } from './data';
import Image from 'next/image';
import Link from 'next/link';

const Project = () => {
  return (
    <div id='projects' className="py-10 px-4 mt-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-neutral-100 text-gray-800 hover:bg-red-500 hover:text-white lg:opacity-80 lg:hover:opacity-100 
            hover:scale-105 rounded-lg transition duration-300 shadow-lg p-6 flex flex-col items-center"
          >
            {/* Image at the top and centered */}
            <div className="w-full h-40 flex justify-center items-center">
              <Image 
                src={project.image}
                width={180}
                height={120}
                alt={project.title}
                className="object-cover rounded-md"
              />
            </div>
            
            <h2 className="text-xl font-semibold text-center mb-2">{project.title}</h2>
            <p className="text-center text-sm mb-4">{project.description}</p>

            {/* View More Button */}
            <div className="flex justify-center mt-4">
              <Link 
                href={project.link} 
                className="px-8 py-2 bg-white text-red-600 border border-red-600 rounded-md font-semibold 
                hover:bg-red-600 hover:text-white transition duration-300"
              >
                Visit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
