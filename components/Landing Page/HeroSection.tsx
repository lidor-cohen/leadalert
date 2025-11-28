import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative max-w-7xl mx-auto mt-30 px-4 sm:px-6 lg:px-8">
      <div className="-z-10 absolute -top-100 left-40 rotate-20 bg-primary w-80 h-220 rounded-full"></div>

      <div className="flex justify-between gap-6">
        {/* Right Side */}
        <div className="flex flex-col gap-6 justify-center">
          <h1 className="text-6xl font-extrabold text-foreground">
            מפסיקים לפספס לידים
          </h1>
          <p className="max-w-xl text-2xl text-muted-foreground">
            LeadAlert סורק קבוצות פייסבוק ו-WhatsApp, מזהה פוסטים רלוונטיים
            בעזרת AI, ומחבר אותם לעסקים שמתאימים.
          </p>
          <Button className="text-lg bg-primary w-min p-8">
            קבלו לידים רלוונטיים כבר היום
          </Button>
        </div>

        {/*  Left Side - image*/}
        <div>
          <Image src="/hero-image.png" alt="hero" width={450} height={300} />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
