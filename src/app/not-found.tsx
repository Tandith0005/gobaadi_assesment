import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { IoArrowBackOutline } from "react-icons/io5";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#faf8f7] to-[#f0ece9] px-4">
      <div className="max-w-lg w-full text-center">
        {/* 404 Illustration/Number */}
        <div className="relative mb-8">
          <h1 className="text-[120px] sm:text-[150px] md:text-[200px] font-bold leading-none bg-gradient-to-r from-[#C0612B] via-[#bd8b6e] to-[#C0612B] bg-clip-text text-transparent animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 bg-[#C0612B]/5 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#342C27] mb-4">
          Page Not Found
        </h2>
        <p className="text-[#737373] text-base sm:text-lg mb-8 max-w-sm mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-linear-to-r from-[#C0612B] via-[#bd8b6e] to-[#C0612B] text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <AiOutlineHome size={20} />
            Back to Home
          </Link>
        </div>

        {/* Optional: Helpful Links */}
        <div className="mt-8 pt-8 border-t border-[#e0dcd9]">
          <p className="text-[#737373] text-sm mb-4">You might want to check:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/about"
              className="text-[#C0612B] hover:text-[#a04f1f] text-sm font-medium transition-colors"
            >
              About Us
            </Link>
            <span className="text-[#d4cfcb]">•</span>
            <Link
              href="/our-vision"
              className="text-[#C0612B] hover:text-[#a04f1f] text-sm font-medium transition-colors"
            >
              Our Vision
            </Link>
            <span className="text-[#d4cfcb]">•</span>
            <Link
              href="/contact"
              className="text-[#C0612B] hover:text-[#a04f1f] text-sm font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}