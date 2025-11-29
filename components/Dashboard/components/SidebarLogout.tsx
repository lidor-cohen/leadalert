"use client";

import React from "react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

const SidebarLogout = () => {
  const supabase = createClient();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    redirect("/");
  };

  return (
    <DropdownMenuItem onClick={handleLogout} variant="destructive" asChild>
      <span>התנתק/י</span>
    </DropdownMenuItem>
  );
};
export default SidebarLogout;
