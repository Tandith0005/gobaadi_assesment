import React from "react";
import Image from "next/image";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { RiGeminiFill } from "react-icons/ri";

const VisionSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-16 bg-[#FFFFFF]">
      <div className="flex flex-col justify-center lg:flex-row lg:gap-[98px] items-center my-[90px]">
        {/* Left Side - Content */}
        <div className="flex-1 space-y-6">
          {/* Badge */}
          <div className="inline-block bg-[#FBE6DA] px-4 py-1.5 rounded-full border border-[#C0612B]">
            <span className="text-[#C0612B] font-semibold text-lg tracking-widest uppercase">
              Our Visions
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#342C27] leading-tight">
            Empowering Smarter <br />
            Animal CareThrough AI
          </h2>

          {/* Description */}
          <p className="text-[#525252] text-base sm:text-lg leading-relaxed max-w-xl">
            Gobadi is building a unified digital ecosystem where animal care
            becomes faster, smarter, and more accessible. <br />
            Our goal is to improve animal wellbeing through AI-driven insights,
            expert consultation, and trusted marketplace solutions.
          </p>

          {/* Cards Grid */}
          <div className="space-y-4 pt-10">
            {/* First Row - 2 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="flex gap-[14px]">
                <FaHandHoldingMedical size={20} color="#C0612B" />
                <div>
                  <h4 className="text-[#342C27] font-semibold text-base mb-1">
                    Animal Care Ecosystem
                  </h4>

                  <p className="text-[#737373] text-sm leading-relaxed">
                    A complete platform for pet health, care <br /> guidance,
                    and daily wellbeing support.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex gap-[14px]">
                <FaUserDoctor size={20} color="#C0612B" />
                <div>
                  <h4 className="text-[#342C27] font-semibold text-base mb-1">
                    Doctor Consultation Network
                  </h4>

                  <p className="text-[#737373] text-sm leading-relaxed">
                    Instant access to veterinary professionals <br /> for
                    reliable diagnosis and treatment advice.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Row - 1 Card (Full Width) */}
            <div className="flex gap-[14px]">
              <RiGeminiFill size={20} color="#C0612B" />
              <div>
                <h4 className="text-[#342C27] font-semibold text-base mb-1">
                  AI-Powered Insights
                </h4>

                <p className="text-[#737373] text-sm leading-relaxed">
                  Smart AI results for better decisions, plus a marketplace{" "}
                  <br /> for services, products, and care solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 relative">
          <div className="relative w-full max-w-md mx-auto lg:max-w-none">
            {/* absolute background */}
            <div className="absolute top-[85px] right-[100px] w-[426px] h-[338px] bg-[#FD5B2F]/5 rounded-tl-[140px]"></div>
            {/* relative container for images */}
            <div className="relative w-full h-[600px]">
              {/* Vision 1 - Top Left (Small) */}
              <div className="absolute top-0 right-[103px]">
                <div className="relative w-[84px] h-[84px]">
                  <div className="absolute -top-3 -right-2 w-12 h-12 rounded-full bg-[#C96A39]/50" />
                  <Image
                    src="/vision1.png"
                    alt="Vision 1"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Vision 2 - Top Right (Medium) */}
              <div className="absolute top-[40px] right-[200px]">
                <div className="relative w-[240px] h-[240px]">
                
                  <Image
                    src="/vision2.png"
                    alt="Vision 2"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Vision 3 - Bottom Left (Small) */}
              <div className="absolute top-[300px] right-[0px]">
                <div className="relative w-[200px] h-[200px]">
                
                  <Image
                    src="/vision3.png"
                    alt="Vision 3"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Vision 4 - Bottom Right (Medium) */}
              <div className="absolute top-[400px] right-[200px]">
                <div className="relative w-[320px] h-[320px]">
                  <div className="absolute top-3 left-0 w-[100px] h-[100px] rounded-full bg-[#C96A39]" />
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
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#C0612B]/5 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#C0612B]/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
