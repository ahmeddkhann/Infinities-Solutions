import React from "react";
import { services } from "./data";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <div id="services" className="mb-20 px-4">
      <h1 className="text-center lg:text-4xl text-3xl mt-20 mb-10">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white lg:opacity-80 lg:hover:opacity-100 lg:hover:scale-105 rounded-lg transition duration-300 shadow-lg p-4 flex flex-col items-center"
          >
            <Image
              src={service.image}
              width={200}
              height={200}
              alt="service"
              className="mb-4"
            />
            <h1 className="text-lg font-semibold mb-2">{service.title}</h1>
            <p className="text-center text-neutral-700 w-[70%]">{service.text}</p>

            {/* View More Button */}
            <Link href={`${service.link}`} className="mt-6">
              <span className="bg-white text-red-600 border border-red-600 px-4 py-2 rounded-md transition duration-300 hover:bg-red-600 hover:text-white">
                View More
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
