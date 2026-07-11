import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative mt-10 sm:mt-16 lg:mt-20">
      <div className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[740px] overflow-hidden">
        {/* Field (Back) */}
        <div
          className="absolute inset-0 z-0 field-mask"
          style={{
            backgroundImage: "url('/field.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            backgroundSize: "100% 115%",
          }}
        />

        {/* Sky (Front) */}
        <div
          className="absolute top-0 left-0 right-0 h-[300px] sm:h-[300px] lg:h-[500px] z-10"
          style={{
            backgroundImage: "url('/sky.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            backgroundSize: "100% 120%",
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block bg-[#FBE6DA] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#C0612B] mb-4 sm:mb-6">
              <span className="text-[#C0612B] font-medium text-sm sm:text-base lg:text-lg tracking-widest uppercase">
                About Us
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#171717] mb-4 sm:mb-6">
              Who We Are
            </h2>

            {/* Description */}
            <p className="text-[#262626] text-base sm:text-lg md:text-xl lg:text-[25px] leading-relaxed max-w-3xl mx-auto px-2 sm:px-0">
              Our platform enables farmers to access veterinary care, book
              services from licensed veterinarians, receive AI-assisted health
              insights, and generate personalized livestock management content.
              Veterinarians can also use AI to create educational content, share
              expert knowledge, and provide digital consultations more
              efficiently.
            </p>

            {/* Gap after description */}
            <div className="h-[60px] sm:h-[90px] lg:h-[130px]"></div>

            {/* Three Images in Flex */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-[26px] justify-center items-center">
              {/* About Image 1 */}
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:min-w-[420px] h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Image
                  src="/about1.png"
                  alt="About 1"
                  fill
                  className="object-cover"
                />
              </div>

              {/* About Image 2 */}
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:min-w-[420px] h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] sm:-top-5 md:-top-8 lg:-top-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Image
                  src="/about2.png"
                  alt="About 2"
                  fill
                  className="object-cover"
                />
              </div>

              {/* About Image 3 */}
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:min-w-[420px] h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Image
                  src="/about3.png"
                  alt="About 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;