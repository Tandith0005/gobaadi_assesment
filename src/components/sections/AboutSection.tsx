import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative mt-20">
  <div className="relative min-h-[740px] overflow-hidden">

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
      className="absolute top-0 left-0 right-0 h-[500px] z-10"
      style={{
        backgroundImage: "url('/sky.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "100% 120%",
      }}
    />
        
        

        {/* Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block bg-[#FBE6DA] px-4 py-1.5 rounded-full border border-[#C0612B] mb-6">
              <span className="text-[#C0612B] font-medium text-lg tracking-widest uppercase">
                About Us
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] mb-6">
              Who We Are
            </h2>

            {/* Description */}
            <p className="text-[#262626] text-[25px] leading-relaxed max-w-3xl mx-auto">
              Our platform enables farmers to access veterinary care, book
              services from licensed veterinarians, receive AI-assisted health
              insights, and generate personalized livestock management content.
              Veterinarians can also use AI to create educational content, share
              expert knowledge, and provide digital consultations more
              efficiently.
            </p>

            {/* Gap after description - 130px */}
            <div className="h-[130px]"></div>

            {/* Three Images in Flex */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-[26px] justify-center items-center">
              {/* About Image 1 */}
              <div className="relative min-w-[420px] h-[420px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Image
                  src="/about1.png"
                  alt="About 1"
                  fill
                  className="object-cover"
                />
              </div>

              {/* About Image 2 */}
              <div className="relative w-full min-w-[420px] h-[420px] -top-10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <Image
                  src="/about2.png"
                  alt="About 2"
                  fill
                  className="object-cover"
                />
              </div>

              {/* About Image 3 */}
              <div className="relative w-full min-w-[420px] h-[420px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
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
