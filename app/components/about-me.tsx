import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import React from 'react';

const ProfilePage = () => {
    return (
        <div className="flex items-center justify-center ">
            <Sheet>
                <SheetTrigger className="border-2 border-black rounded-none bg-transparent text-black w-36 h-12 hover:bg-pink-100 hover:font-bold hover:scale-105 transition-transform duration-200">
                    About me
                </SheetTrigger>
                <SheetContent className="bg-white h-full p-6 rounded-lg shadow-lg overflow-auto">
                    <SheetHeader>
                        <div className="flex flex-col items-center mb-4 bg-gray-50 ">
                            {/* Avatar Image */}
                            <img
                                src="/images/avatar.png" // Replace with your avatar image path
                                alt="Avatar"
                                className="w-24 h-24 rounded-full border-2 border-gray-300"
                            />
                            <div className="ml-4 text-center">
                                <SheetTitle className="text-2xl md:text-3xl font-bold mb-2 text-black">HANA ADAMU</SheetTitle>
                                <div className="relative bg-gray-200 p-4 rounded-lg mt-4">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center rounded-lg opacity-40"
                                        style={{ backgroundImage: "url('/images/side-bg.png')" }} // Replace with your background image path
                                    ></div>
                                    <div className="relative z-10">
                                        <SheetDescription className="text-sm md:text-base">
                                            <p className="text-gray-700">
                                                Hello! I'm Hana, a passionate makeup artist with a flair for transforming visions into stunning reality. With a deep love for beauty and artistry, I specialize in creating unique looks that enhance natural features and boost confidence.
                                            </p>
                                            <p className="mt-2 text-gray-700">
                                                My creativity shines through in every brushstroke, whether it’s a glamorous evening look or a subtle daytime glow. I believe that makeup is not just about application; it’s a powerful form of self-expression that allows individuals to showcase their personality.
                                            </p>
                                            <p className="text-gray-700">
                                                Outside of my artistry, I enjoy exploring the latest beauty trends, experimenting with new products, and sharing my knowledge with others. I find inspiration in everything around me, from nature to fashion, and I strive to infuse that inspiration into my work.
                                            </p>
                                            <p className="mt-2 text-gray-700">
                                                Join me on this creative journey as I continue to bring beauty to life, one face at a time!
                                            </p>
                                        </SheetDescription>
                                        <div className="mt-8">
                                            <Link href="/" className="text-blue-500 hover:underline">Call me</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default ProfilePage;
