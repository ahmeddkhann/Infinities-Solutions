import React from 'react';
import { projects } from './data';
import Image from 'next/image';
import Link from 'next/link';

const Project = () => {
  return (
    <div id='projects' className="py-10 px-4 mt-16">
      <h1 className="text-3xl font-bold text-center mb-8">Our Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="block py-8 text-neutral-900 bg-white sm:mt-4 shadow-lg rounded-lg
            transform transition hover:bg-red-500 hover:text-neutral-100  duration-500">
            <Image 
              src={project.image}
              width={200}
              height={150}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold ">{project.title}</h2>
              <p className="mt-2">{project.description}</p>
              {/* Centering the button and giving it padding */}
              <div className="flex justify-center mt-4">
                <Link href={project.link} className="px-12 py-3 bg-white text-red-600 border border-red-600 rounded-md font-semibold 
                hover:bg-red-600 hover:text-white transition duration-300">
                  Visit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
