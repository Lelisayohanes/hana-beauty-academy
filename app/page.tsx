// pages/index.tsx
import React from 'react';
import VideoBackground from './components/VideoBackground'; // Adjust the import path as needed
import Navigation from './components/Navigation'; // Adjust the import path as needed

const Home: React.FC = () => {
  return (
    <VideoBackground videoSrc="/my-bg.mp4"> {/* Remove 'video/' as it should be in the public folder */}
      <div className="flex flex-col justify-between w-full flex-grow">
        <div className="relative z-20 flex flex-col justify-start h-full text-white text-center">
          <Navigation />
          <div className="flex flex-col justify-center items-center text-gray-950 bg-pink-50 lg:transparent lg:opacity-30 h-screen">
            <h1 className="sm:text-2xl md:text-4xl lg:text-6xl font-bold text-center mt-20">
              HANI BEAUTY ACADEMY
            </h1>
            <p className="mt-4 text-lg font-semibold">Let Your Talent Flourish</p>
            <br />
            <p className="text-2xl font-semibold">Let Your Beauty Shine.</p>
          </div>
        </div>
      </div>
    </VideoBackground>
  );
};

export default Home;
