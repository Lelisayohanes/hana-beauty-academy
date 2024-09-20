import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('/path-to-about-bg.jpg')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Dark overlay for readability */}
      
      <div className="relative z-10 text-center max-w-4xl p-8 text-white space-y-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-shadow-md">About HANI BEAUTY ACADEMY</h1>
        <p className="text-lg md:text-2xl leading-relaxed">
          Welcome to <span className="text-[#F47899] font-bold">HANI BEAUTY ACADEMY</span>, where the world of beauty unfolds like an art form, and every brushstroke brings you closer to mastering your craft. We are more than just a beauty academy—we are a community of creatives, visionaries, and passionate individuals dedicated to reshaping the beauty industry with innovation and artistic expression.
        </p>
        <p className="text-lg md:text-2xl leading-relaxed">
          Our mission is simple: to empower you with the skills, techniques, and confidence to turn your passion into a lifelong career. Whether it's makeup, nails, or hair, we believe that beauty is more than aesthetics; it’s an experience, a form of self-expression, and a journey to discovering your unique style.
        </p>
        <p className="text-lg md:text-2xl leading-relaxed">
          Here at HANI BEAUTY ACADEMY, we blend traditional techniques with modern trends, ensuring that you not only stay ahead of the curve but also become a trendsetter in your own right. Our team of expert instructors will guide you every step of the way, making sure that your creative potential is realized and refined.
        </p>
        <p className="text-lg md:text-2xl leading-relaxed">
          Join us on this journey where beauty meets art, and creativity knows no bounds. Discover the artist within you and step into a future of limitless possibilities.
        </p>
        <button className="px-6 py-3 mt-6 bg-[#F47899] text-white font-semibold text-xl rounded-full hover:bg-[#e36080] transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutUsPage;
