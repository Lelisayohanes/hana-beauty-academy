import React from 'react';

const ServicePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {/* Service 1 */}
      <div className="relative h-80 group">
        <img
          src="/images/nail.png"
          alt="Makeup Service"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-500"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h2 className="text-3xl text-white font-bold text-shadow-md">Makeup Artistry</h2>
        </div>
      </div>

      {/* Service 1 */}
      <div className="relative h-80 group">
        <img
          src="/images/nail.png"
          alt="Makeup Service"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-500"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h2 className="text-3xl text-white font-bold text-shadow-md">Makeup Artistry</h2>
        </div>
      </div>

      {/* Service 1 */}
      <div className="relative h-80 group">
        <img
          src="/images/nail.png"
          alt="Makeup Service"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-500"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h2 className="text-3xl text-white font-bold text-shadow-md">Makeup Artistry</h2>
        </div>
      </div>

      {/* Service 1 */}
      <div className="relative h-80 group">
        <img
          src="/images/nail.png"
          alt="Makeup Service"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-500"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h2 className="text-3xl text-white font-bold text-shadow-md">Makeup Artistry</h2>
        </div>
      </div>
      {/* Service 1 */}
      <div className="relative h-80 group">
        <img
          src="/images/nail.png"
          alt="Makeup Service"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-500"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h2 className="text-3xl text-white font-bold text-shadow-md">Makeup Artistry</h2>
        </div>
      </div>

      {/* Service 2 */}
      <div className="relative h-80 group">
        <img
          src="/images/mak-up.png"
          alt="Nails Service"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-500"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h2 className="text-3xl text-white font-bold text-shadow-md">Nail Design</h2>
        </div>
      </div>

      {/* Add more services as needed */}
    </div>
  );
};

export default ServicePage;
