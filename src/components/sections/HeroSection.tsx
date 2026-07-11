import React from "react";
import Image from "next/image";
import { tusker } from "../../lib/fonts";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#faf8f7] to-[#f0ece9] px-4 sm:px-6 lg:px-0 pt-10 lg:py-20 overflow-hidden">
      <div className="relative mx-auto max-w-[1350px]">
        <div className="space-y-4 lg:space-y-8 px-0 lg:px-6">
          {/* Top Row - Title & Cow Image */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-0 lg:gap-6">
            {/* Left - Title with Shape Background */}
            <div className="relative grid flex-[1.6] grid-cols-1 grid-rows-1">
              <Image
                src="/heroFrame.png"
                alt="Hero Shape Behind The Main Title"
                width={780}
                height={456}
                className="h-full w-full"
              />
              <div className="absolute top-[12%] left-[8%]">
                <h1 className={`font-display font-black tracking-[0.1em] leading-[1.4] text-[30px] md:text-[67px] ${tusker.className}`}>
                  <span className="text-[#342C27]">Where</span>{" "}
                  <span className="text-[#C0612B]">Livestock</span>
                  <br />
                  <span className="text-[#342C27]">Meets</span>
                  <br />
                  <span className="text-[#C0612B]">Intelligence.</span>
                </h1>
              </div>
            </div>

            {/* Right - Cow Image */}
            <div className="md:flex flex-col hidden relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-auto lg:min-h-[470px] overflow-visible">
              <Image
                src="/bannerCowBg.png"
                alt="Cow standing shape"
                fill
                className="object-contain"
              />
              <Image
                src="/bannerCow1.png"
                alt="Cow standing for the Gobadi livestock platform"
                width={509}
                height={529}
                className="absolute z-10 lg:h-[550px] h-[390px] w-full lg:-mt-23 mt-1.5 object-contain"
              />
            </div>
          </div>

          {/* Bottom Row - Grid Layout */}
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
            {/* Column 1 - STAY TUNED Text */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:w-[26%]">
              <div className="flex flex-1 flex-col justify-center rounded-[30px] bg-[#C0612B] p-6 md:aspect-[4/3]">
                <h2 className={`font-display tracking-[0.1em] font-extrabold uppercase leading-[1.3] md:text-[64px] text-[30px] ${tusker.className}`}>
                  <span className="text-[#3B1A09]">STAY</span>
                  <br />
                  <span className="text-white">Tuned...</span>
                </h2>
              </div>
              <div className="bg-white rounded-[40px] border border-[#e0dcd9] p-5 relative flex flex-col justify-center min-h-[150px] lg:min-h-[165px] shadow-sm overflow-hidden">
                <span className="md:text-[24px] text-[18px] font-semibold text-[#342C27] uppercase tracking-wide">
                  We are near to:
                </span>
                <h2 className={`text-[44px] md:text-[88px] font-semibold text-[#C0612B] leading-none z-10`}>
                  Launch
                </h2>
                <Image
                  src="/rocketTransp.gif"
                  alt="Rocket icon"
                  width={640}
                  height={640}
                  unoptimized
                  className="h-32 w-32 absolute top-0 -right-8 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Column 2 - Hero Phone Image */}
            <div className="relative lg:w-[22%]">
              <Image
                src="/heroPhone.png"
                alt="Gobadi mobile app shown on a smartphone"
                width={305}
                height={475}
                className="lg:h-full h-[450px] w-full rounded-[30px] object-cover"
              />
            </div>

            {/* Column 3-4 - Hero Cows Image with Text Overlay */}
            <div className="relative flex-1">
              <Image
                src="/heroCows.png"
                alt="Hero Cows Background"
                width={641}
                height={475}
                className="w-full rounded-[20px] lg:rounded-[30px] object-cover"
              />
              <div className="absolute inset-0 flex items-start justify-center pt-6 sm:pt-8 lg:pt-10 px-4 sm:px-6">
                <p className="w-full text-right lg:text-left text-[14px] md:text-xl lg:text-[28px] font-bold text-[#342C27] leading-relaxed">
                  <span className="block lg:pl-50">AI-powered digital platform</span>
                  <span className="block lg:pl-48">transforming the livestock</span>
                  <span className="block lg:pl-40">eco-system by connecting</span>
                  <span className="block lg:pl-24">farmers, veterinarians, and also</span>
                  <span className="block">trusted providers in one place.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Centered Logo - Overlapping both rows */}
          <div className="absolute z-30 hidden lg:flex items-center justify-center rounded-full bg-white border-4 lg:border-[6px] border-[#C0612B] w-36 h-36 md:w-44 md:h-44 lg:w-60 lg:h-60 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80 top-[50.5%] left-[51%] -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/gobaadi.png"
              alt="Gobadi icon"
              width={3740}
              height={3740}
              className="w-full h-full rounded-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;