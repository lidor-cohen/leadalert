import React from "react";
import Image from "next/image";
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button";

const Footer = () => {
  return (
    <footer className="shadow-[0px_-8px_15px_-5px_rgba(0,_0,_0,_0.1)] bg-card text-card-foreground py-8 px-16 rounded-t-2xl flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="logo image" width={32} height={32} />

        <p className="font-semibold">
          כל הזכויות שמורות ל- LeadAlert {new Date().getFullYear()}
        </p>
      </div>

      <ThemeToggleButton />
    </footer>
  );
};
export default Footer;
