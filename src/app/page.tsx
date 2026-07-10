import Image from "next/image";
import Navbar from "../components/shared/Navbar";
import HeroSection from "../components/sections/HeroSection";
import VisionSection from "../components/sections/VisionSection";


export default function Home() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* our vision */}
      <VisionSection />
    </div>
  );
}