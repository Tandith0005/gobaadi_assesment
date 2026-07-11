"use client";
import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaFacebookF,
} from "react-icons/fa";

const ContactSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const offset = 80;

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="contact" className="relative bg-[#C0612B] overflow-hidden">
      {/* Solid background */}
      <div className="absolute inset-0 " />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-white/20
          blur-[180px]
          z-0
          hidden md:block
        "
      />

      {/* Orange Inner Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[200px]
          h-[200px]
          rounded-full
          bg-[#C0612B]
          opacity-60
          blur-[30px]
          z-0
          hidden md:block
        "
      />

      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-50 z-[1] w-[1400px] h-[700px] mx-auto my-auto grid-glow rounded-full hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 pt-20">
        {/* First Flex Row - Contact Info & Social Media */}
        <div className="px-4 sm:px-6 lg:px-16 pt-20 pb-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Side - Contact Text */}
            <div className="flex-1 text-white">
              {/* Badge */}
              <div className="inline-block bg-[#FBE6DA] px-4 py-1.5 rounded-full border border-[#C0612B] mb-6">
                <span className="text-[#C0612B] font-medium text-lg tracking-widest uppercase">
                  Contact Us
                </span>
              </div>

              {/* Title */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                Let&apos;s stay connected
              </h2>

              {/* Description */}
              <p className="text-white/90 text-lg max-w-md">
                Join the Gobaadi community and be part of a smarter future for
                animal care.
              </p>
            </div>

            {/* Right Side - Social Media */}
            <div className="flex-1 flex lg:justify-end lg:mt-[99px]">
              <div className="inline-block">
                <p className="text-white font-medium text-lg mb-4">
                  Follow Us On
                </p>

                <div className="flex gap-4">
                  <button className="bg-white p-3 rounded-full hover:bg-[#FBE6DA] transition-colors duration-300 shadow-lg hover:shadow-xl">
                    <FaFacebookF size={20} className="text-[#6766FF] text-xl" />
                  </button>
                  <button className="p-3 rounded-full bg-[#FFFFFF33] hover:bg-[#FBE6DA] transition-colors duration-300 shadow-lg hover:shadow-xl">
                    <FaInstagram className="text-[#ffffff] text-xl" />
                  </button>
                  <button className="bg-[#FFFFFF33] p-3 rounded-full hover:bg-[#FBE6DA] transition-colors duration-300 shadow-lg hover:shadow-xl">
                    <FaTwitter className="text-[#ffffff] text-xl" />
                  </button>
                  <button className="bg-[#FFFFFF33] p-3 rounded-full hover:bg-[#FBE6DA] transition-colors duration-300 shadow-lg hover:shadow-xl">
                    <FaLinkedin className="text-[#ffffff] text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Flex Row - Contact Info & Form */}
        <div className="md:pt-16 sm:px-6 lg:px-16 pb-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left Side - Contact Details */}
            <div className="flex-1 flex flex-col justify-center space-y-8">
              <div className="flex flex-col sm:flex-row md:gap-[88px] gap-[40px] items-start sm:items-center">
                {/* Email */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Image src="/mail.png" alt="" width={20} height={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-[30px]">
                      Email
                    </h4>
                    <p className="text-white/90 text-[20px]">
                      ceo.gobaadi@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Image src="/phone.png" alt="" width={20} height={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-[30px]">
                      Phone
                    </h4>
                    <p className="text-white/90 text-[20px]">+8801911418977</p>
                  </div>
                </div>
              </div>

              {/* Office */}
              <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Image src="/location.png" alt="" width={20} height={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-[30px]">
                    Office
                  </h4>
                  <p className="text-white/90 text-[20px]">
                    Road# 9, house# 5, Lane#3, Mirpur 11/a
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="flex-1 flex justify-end">
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-[500px] sm:max-w-[554px] lg:w-[554px] h-auto lg:h-[510px]">
                <form className="space-y-6">
                  {/* Email Input */}
                  <div>
                    <label className="block text-[#342C27] font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="pat@shuffle.dev"
                      className="w-full px-4 py-3 border border-[#e0dcd9] rounded-xl focus:outline-none focus:border-[#C0612B] focus:ring-2 focus:ring-[#C0612B]/20 transition-all duration-300 text-[#342C27] placeholder:text-[#737373]"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-[#342C27] font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      placeholder="Your message here..."
                      rows={6}
                      className="w-full px-4 py-3 border border-[#e0dcd9] rounded-xl focus:outline-none focus:border-[#C0612B] focus:ring-2 focus:ring-[#C0612B]/20 transition-all duration-300 text-[#342C27] placeholder:text-[#737373] resize-none"
                    ></textarea>
                  </div>

                  {/* Send Email Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#C0612B] text-white font-semibold py-3 px-6 rounded-[16px] hover:bg-[#a04f1f] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <Image src="/sendMail.png" alt="" width={20} height={20} />
                    Send Email
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Gap of 68.6px */}
        <div className="h-[68.6px]"></div>

        {/* Footer Section */}
        <div className="px-4 sm:px-6 lg:px-16 pb-8">
          {/* Logo and Text */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative w-12 h-12">
              <Image
                src="/gobaadi.png"
                alt="Gobaadi"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <span className="text-white text-5xl font-bold">গবাদি</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mb-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white/90 hover:text-white transition-colors font-medium text-[20px]"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="text-white/90 hover:text-white transition-colors font-medium text-[20px]"
            >
              Our Vision
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white/90 hover:text-white transition-colors font-medium text-[20px]"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Horizontal Rule */}
        <hr className="border-white/20 w-full" />

        {/* Copyright */}
        <p className="text-center text-white text-[20px] pt-[39px] pb-[56px]">
          © {new Date().getFullYear()} gobaadi. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
