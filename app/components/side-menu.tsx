import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerTrigger,
    DrawerFooter,
    DrawerClose,
} from "@/components/ui/drawer"; 
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import React from 'react';

const SideMenu = () => {
    return (
        <div className="flex justify-center items-center">
            <Drawer>
                <DrawerTrigger className="border-2 border-black rounded-none bg-transparent text-black w-36 h-12 hover:bg-pink-100 hover:font-bold hover:scale-105 transition-transform duration-200">
                     Service menu 
                </DrawerTrigger>
                <DrawerContent className="bg-slate-50 p-4">
                    {/*  */}
                    <div className="flex flex-col md:flex-row gap-4 mt-4 justify-between text-3xl px-24">
                        <Link href="/" className="text-gray-600 hover:underline hover:text-[#f1b0b6]">Home</Link>
                        <Link href="/about" className="text-gray-600 hover:underline hover:text-[#f1b0b6]" >About</Link>
                        <Link href="/services" className="text-gray-600 hover:underline hover:text-[#f1b0b6]">Services</Link>
                        <Link href="/contact" className="text-gray-600 hover:underline hover:text-[#f1b0b6]">Contact</Link>
                    </div>
                    <DrawerFooter className="mt-4">
                        <DrawerClose>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
};

export default SideMenu;
