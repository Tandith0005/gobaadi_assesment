"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/src/constants/navigation";
import { usePathname } from "next/navigation";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoClose, IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#000000] text-[18px] font-extrabold"
                    : "text-[#737373]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="bg-linear-to-r from-[#C0612B] via-[#bd8b6e] to-[#C0612B] font-medium flex justify-center items-center gap-2 text-white py-2 px-4 rounded-xl whitespace-nowrap">
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
              <Link
                key={link.href}
                href={link.href}
                className={`block font-medium transition-colors px-3 py-3 rounded-lg ${
                  pathname === link.href
                    ? "text-[#000000] text-[18px] font-extrabold bg-[#f5f5f5]"
                    : "text-[#737373]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 px-3">
              <button className="bg-linear-to-r from-[#C0612B] via-[#bd8b6e] to-[#C0612B] font-medium flex justify-center items-center gap-2 text-white py-3 px-4 rounded-xl w-full">
                <AiFillThunderbolt size={17} /> Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}