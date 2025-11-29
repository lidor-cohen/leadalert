import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

const Header = () => {
  return (
    <header>
      <div className="flex h-5 items-center space-x-4 text-sm">
        <SidebarTrigger />
        <Separator orientation="vertical" />
        <h3 className="text-lg">דשבורד</h3>
      </div>
    </header>
  );
};
export default Header;
