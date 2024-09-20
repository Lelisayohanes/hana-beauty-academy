import React from 'react';
import VideoBackground from '@/app/components/VideoBackGround';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <VideoBackground />
      <div className="relative z-20 flex flex-col justify-start  h-full text-white text-center">
        <Navigation />
        <div className='flex flex-col justify-center items-center text-gray-950' >
          <h1 className="text-6xl font-bold text-center  mt-20">HANI BEAUTY ACADEMY</h1>
          <p className="mt-4 text-lg font-semibold">Let Your Talent Flourish</p><br></br>
          <p className="text-2xl  font-semibold">Let Your Beauty Shine.</p>
        </div>
      </div>
    </div>
  );
}
