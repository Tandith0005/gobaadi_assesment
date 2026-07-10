import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-[#faf8f7] to-[#f0ece9] px-4">
            {/* top left texts */}
            {/* <div className="w-full text-center">
                Where Livestock 
Meets 
Intelligence.
            </div> */}
            {/* Centered Image with Rounded Full */}
            <div className="relative w-77.75 h-77.75">
                <Image
                    src="/gobaadi.png"
                    alt="Gobaadi"
                    fill
                    className="object-cover rounded-full border-4 border-[#C0612B] shadow-2xl"
                    priority
                />
                
            </div>
        </div>
    );
};

export default HeroSection;