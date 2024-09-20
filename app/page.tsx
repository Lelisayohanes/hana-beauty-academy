import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navigation from "./components/Navigation";
import HeroMessage from "./components/hero-message";

export default function Home() {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        <source src="/video/my-bg.mp4" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="flex justify-center items-center text-white flex-col bg-transparent h-screen">
          <div className="flex flex-col justify-center items-center">
            
          </div>
          <HeroMessage/>
          <Navigation />
        </div>
      </div>
    </div>
  );
}
