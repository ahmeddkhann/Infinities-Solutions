import React from 'react';
import { dataVisualization, visualizationProject } from '@/app/data'; // Ensure to import visualizationProject
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-100 py-10 px-4">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-red-500 mb-2">
          {dataVisualization.techTitle}
        </h1>
        <h3 className="text-2xl text-neutral-600">
          {dataVisualization.techSubTitle}
        </h3>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          <Image 
            src={dataVisualization.image}
            width={300}
            height={300}
            alt="Data Visualization Image"
            className="rounded-lg" // Optional: rounded corners for the image
          />
        </div>
        <h1 className="text-4xl font-semibold mb-2 mt-2 text-center">
          {dataVisualization.title}
        </h1>
        <h3 className="text-lg text-neutral-500 mb-4 text-center">
          {dataVisualization.subTitle}
        </h3>
        <p className="text-base text-neutral-800 leading-relaxed">
          {dataVisualization.text}
        </p>
      </div>

      {/* Projects Section */}
      <div className="mt-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visualizationProject.map((project, index) => (
            <div 
              key={project.id} 
              className={`p-4 flex flex-col items-center rounded-lg shadow-lg bg-gray-100 text-black transition-all duration-300 
                hover:bg-red-500 hover:text-white lg:hover:bg-red-500 lg:hover:text-white`} // Default gray bg with red hover on large screens
            >
              <Image 
                src={project.image}
                width={200}
                height={150}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4" 
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <Link 
                href={project.link} 
                className="px-12 py-2 rounded transition-all duration-300 
                  bg-red-500 text-white hover:bg-white hover:text-black lg:hover:bg-white lg:hover:text-black"
              >
                Visit
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
