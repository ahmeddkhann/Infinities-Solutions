import React from 'react';
import { dataVisualization } from '@/app/data';
import Image from 'next/image';

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
        <div className="flex justify-center mb-4"> {/* Centering the image */}
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
    </div>
  );
};

export default Page;
