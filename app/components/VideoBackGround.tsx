"use client";

import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

const VideoBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <ReactPlayer
        className="absolute inset-0 w-full h-full bg-white"
        url="https://www.youtube.com/embed/Lie2Mn1tNRQ?autoplay=1&mute=1&controls=0&modestbranding=0&showinfo=0&rel=0&fs=0&loop=1&playlist=Lie2Mn1tNRQ"
        playing
        muted
        loop
        controls={false}
        width="100%"
        height="100%"
        style={{ objectFit: 'cover', zIndex: 0 }} // Ensures the video covers the entire space
      />
      {/* Lightened overlay for better visibility of content */}
      <div className="absolute inset-0 bg-white opacity-60 z-10" />
    </div>
  );
};

export default VideoBackground;
