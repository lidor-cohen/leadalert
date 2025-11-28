import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Landing Page/HeroSection";
import HowItWorksSection from "@/components/Landing Page/HowItWorksSection";
import FeaturesSection from "@/components/Landing Page/FeaturesSection";

export default function Home() {
  return (
    <div className="min-h-screen space-y-40">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
    </div>
  );
}
