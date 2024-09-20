import React from 'react';

const HeroMessage = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 lg:space-y-6">
      <div className="text-center text-4xl font-bold tracking-wide md:text-6xl lg:text-8xl text-black">
        <span className="relative">
          <span className="absolute inset-0 bg-gradient-to-r from-[#FFB6C1] to-[#F47899] opacity-30 blur-lg"></span>
          <span className="relative">HANI BEAUTY</span>
        </span>
        <br />
        <span className="text-[#F47899]">ACADEMY</span>
      </div>
      <div className="text-center text-2xl md:text-4xl lg:text-6xl font-light leading-tight ">
        WHERE TRUE ART EMBODIES THE
        <br />
        <span className="relative inline-block px-2 py-1">
          <span
            className="relative text-transparent font-extrabold"
            style={{
              WebkitTextStroke: '2px #F47899', // Stroke effect
            }}
          >
            SPIRIT OF CREATION
          </span>
        </span>
      </div>
    </div>
  );
};

export default HeroMessage;
