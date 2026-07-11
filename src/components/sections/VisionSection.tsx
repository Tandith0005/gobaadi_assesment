import React from "react";
import Image from "next/image";

const VisionSection = () => {
  return (
    <section id="vision" className="py-16 px-4 sm:px-6 lg:px-16 bg-[#FFFFFF]">
      <div className="flex flex-col justify-center lg:flex-row lg:gap-[98px] items-center my-[90px]">
        {/* Left Side - Content */}
        <div className="flex-1 space-y-6 w-full lg:w-auto">
          {/* Badge */}
          <div className="inline-block bg-[#FBE6DA] px-4 py-1.5 rounded-full border border-[#C0612B]">
            <span className="text-[#C0612B] font-semibold text-sm sm:text-base lg:text-lg tracking-widest uppercase">
              Our Visions
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#342C27] leading-tight">
            Empowering Smarter <br className="hidden sm:block" />
            Animal Care Through AI
          </h2>

          {/* Description */}
          <p className="text-[#525252] text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
            Gobadi is building a unified digital ecosystem where animal care
            becomes faster, smarter, and more accessible. <br className="hidden sm:block" />
            Our goal is to improve animal wellbeing through AI-driven insights,
            expert consultation, and trusted marketplace solutions.
          </p>

          {/* Cards Grid */}
          <div className="space-y-4 pt-6 sm:pt-8 lg:pt-10">
            {/* First Row - 2 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 - Animal Care Ecosystem */}
              <div className="flex gap-[14px] items-start">
                <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1">
                  <Image
                    src="/visionCow.png"
                    alt="Animal Care"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-[#342C27] font-semibold text-sm sm:text-base mb-1">
                    Animal Care Ecosystem
                  </h4>
                  <p className="text-[#737373] text-xs sm:text-sm leading-relaxed">
                    A complete platform for pet health, care guidance, and daily wellbeing support.
                  </p>
                </div>
              </div>

              {/* Card 2 - Doctor Consultation Network */}
              <div className="flex gap-[14px] items-start">
                <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1">
                  <Image
                    src="/visionDoctor.png"
                    alt="Doctor Consultation"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-[#342C27] font-semibold text-sm sm:text-base mb-1">
                    Doctor Consultation Network
                  </h4>
                  <p className="text-[#737373] text-xs sm:text-sm leading-relaxed">
                    Instant access to veterinary professionals for reliable diagnosis and treatment advice.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Row - 1 Card (Full Width) */}
            <div className="flex gap-[14px] items-start">
              <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1">
                <Image
                  src="/visionGemini.png"
                  alt="AI Powered Insights"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-[#342C27] font-semibold text-sm sm:text-base mb-1">
                  AI-Powered Insights & Marketplace
                </h4>
                <p className="text-[#737373] text-xs sm:text-sm leading-relaxed">
                  Smart AI results for better decisions, plus a marketplace <br className="hidden sm:block" /> for services, products, and care solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image Grid */}
        <div className="flex-1 relative w-full lg:w-auto mt-10 lg:mt-0">
          <div className="relative w-full max-w-md mx-auto lg:max-w-none">
            {/* absolute background - centered on mobile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[426px] lg:h-[338px] lg:top-[85px] lg:right-[100px] lg:left-auto lg:translate-x-0 lg:translate-y-0 bg-[#FD5B2F]/5 rounded-tl-[140px]"></div>
            
            {/* relative container for images */}
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
              {/* Vision 1 - Top Left (Small) */}
              <div className="absolute top-0 left-[10%] sm:left-[20%] lg:right-[103px] lg:left-auto">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[84px] lg:h-[84px]">
                  <div className="absolute -top-3 -right-2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-[#C96A39]/50" />
                  <Image
                    src="/vision1.png"
                    alt="Vision 1"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Vision 2 - Top Right (Medium) */}
              <div className="absolute top-[30px] sm:top-[35px] lg:top-[40px] right-[10%] sm:right-[20%] lg:right-[200px]">
                <div className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[240px] lg:h-[240px]">
                  <Image
                    src="/vision2.png"
                    alt="Vision 2"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Vision 3 - Bottom Left (Small) */}
              <div className="absolute top-[200px] sm:top-[250px] lg:top-[300px] left-[10%] sm:left-[15%] lg:right-[0px] lg:left-auto">
                <div className="relative w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] lg:w-[200px] lg:h-[200px]">
                  <Image
                    src="/vision3.png"
                    alt="Vision 3"
                    fill
                    className="rounded-full object-cover z-1"
                  />
                </div>
              </div>

              {/* Vision 4 - Bottom Right (Medium) */}
              <div className="absolute top-[280px] sm:top-[340px] lg:top-[400px] right-[10%] sm:right-[20%] lg:right-[200px]">
                <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[320px] lg:h-[320px]">
                  <div className="absolute top-3 left-0 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px] rounded-full bg-[#C96A39]" />
                  <Image
                    src="/vision4.png"
                    alt="Vision 4"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-[#C0612B]/5 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-[#C0612B]/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;