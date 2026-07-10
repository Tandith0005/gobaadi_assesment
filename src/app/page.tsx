import Image from "next/image";
import Navbar from "../components/shared/Navbar";
import HeroSection from "../components/sections/HeroSection";
import VisionSection from "../components/sections/VisionSection";
import AboutSection from "../components/sections/AboutSection";


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
    </div>
  );
}