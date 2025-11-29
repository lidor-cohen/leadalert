"use client";

import React from "react";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

const EnterDashboardButton = () => {
  return <Button onClick={() => redirect("/dashboard")}>כניסה למערכת</Button>;
};
export default EnterDashboardButton;
