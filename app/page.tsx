import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Landing Page/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
}
