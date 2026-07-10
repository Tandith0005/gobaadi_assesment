import React from "react";
import Image from "next/image";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

const ComingSoon = () => {
  return (
    <section className="py-[90px] pl-4 pr-0 sm:pl-6 sm:pr-0 lg:pl-8  bg-gradient-to-br bg-[#ffffff]">
      <div
        className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 `}
      >
        {/* Left Side - Text Content */}
        <div className="flex-1">
          <h2 className={`text-4xl sm:text-5xl md:text-[87px] font-bold text-[#171717] leading-tight ${audiowide.className} `}>
            Something <br />
            New Is
          </h2>

          {/* Coming Soon Badge */}
          <div className="inline-block bg-[#C0612B] px-6 py-2 rounded-[28px] mt-[16px] mb-4">
            <span className={`text-white font-bold text-2xl sm:text-3xl md:text-[96px] tracking-wider ${audiowide.className}`}>
              COMING
              <div className="flex gap-2 mt-2">
                {"SOON".split("").map((letter, index) => (
                  <span
                    key={index}
                    className="bg-white text-[#C0612B] px-[12px] py-1 rounded-[20px]"
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </span>
          </div>

          <p className="text-[#171717] text-[56px] font-semibold pt-[64px]">
            Our new and improved <br />
            digital livestock platform.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-full ">
            <Image
              src="/coming.png"
              alt="Coming Soon"
              width={837}
              height={642}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
