import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Landing Page/HeroSection";
import HowItWorksSection from "@/components/Landing Page/HowItWorksSection";
import FeaturesSection from "@/components/Landing Page/FeaturesSection";
import Testimonials from "@/components/Landing Page/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen space-y-30">
      <Navbar authNav={false} />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
