import { Button } from "@/components/ui/button";
import Image from "next/image";

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
        {/* You can add other video formats for cross-browser compatibility */}
        <source src="/video/my-bg.mp4" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Your content goes here */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="flex justify-center items-center text-black flex-col bg-transparent h-screen  ">
        <div>HANI BEAUTY ACADEMY</div>
        <h1>Welcome to the homepage!</h1>
        <div className="flex gap-4">
        <Button className="border-2 border-black rounded-none bg-transparent text-black w-32 hover:text-white">
              About me
        </Button>
        <Button className="border-2 border-black rounded-none bg-transparent text-black w-32 hover:text-white">
              Service menu 
        </Button>
        </div>
        </div>
        
      </div>
    </div>
  );
}
