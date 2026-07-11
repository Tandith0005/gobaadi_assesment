"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/src/constants/navigation";
import { usePathname } from "next/navigation";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Handle Contact Us button click
  const handleContactClick = () => {
    scrollToSection("contact");
  };

  // Update active section based on scroll
  useEffect(() => {
    const sections = navLinks.map(link => link.href.replace("#", ""));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Check if a link is active
  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return activeSection === href.replace("#", "");
    }
    return pathname === href;
  };

  return (
    <nav className="bg-[#ffffff]/70 shadow-md sticky top-0 z-50 backdrop-blur-sm">
      <div className="px-4 sm:px-6 md:px-10 py-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <Image
                  src="/gobaadi.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-2xl md:text-3xl font-bold text-[#342C27]">
                গবাদি
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.replace("#", ""))}
                className={`font-medium transition-colors cursor-pointer ${
                  isActive(link.href)
                    ? "text-[#000000] text-[18px] font-extrabold"
                    : "text-[#737373]"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={handleContactClick}
              className="bg-linear-to-r from-[#C0612B] via-[#bd8b6e] to-[#C0612B] font-medium flex justify-center items-center gap-2 text-white py-2 px-4 rounded-xl whitespace-nowrap cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <AiFillThunderbolt size={17} /> Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-[#737373] focus:outline-none p-2 hover:text-[#000000] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <IoClose size={28} />
              ) : (
                <IoMenu size={28} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-125 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-200">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href.replace("#", ""))}
                className={`block w-full text-left font-medium transition-colors px-3 py-3 rounded-lg ${
                  isActive(link.href)
                    ? "text-[#000000] text-[18px] font-extrabold bg-[#f5f5f5]"
                    : "text-[#737373]"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 px-3">
              <button
                onClick={handleContactClick}
                className="bg-linear-to-r from-[#C0612B] via-[#bd8b6e] to-[#C0612B] font-medium flex justify-center items-center gap-2 text-white py-3 px-4 rounded-xl w-full transition-all duration-300 hover:scale-105"
              >
                <AiFillThunderbolt size={17} /> Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}