import Image from "next/image";
import Navbar from "../components/shared/Navbar";
import HeroSection from "../components/sections/HeroSection";
import VisionSection from "../components/sections/VisionSection";
import AboutSection from "../components/sections/AboutSection";
import ComingSoon from "../components/sections/comingSoon";
import ContactSection from "../components/sections/ContactSection";


export default function Home() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* our vision */}
      <VisionSection />
      {/* About Us */}
      <AboutSection />
      {/* coming soon */}
      <ComingSoon />
       <Image
          src="/wave.png"
          alt=""
          width={1440}
          height={250}
          className="w-full h-auto"
        />
      {/* contact */}
      <ContactSection />
    </div>
  );
}