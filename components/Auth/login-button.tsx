"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LoginButton = () => {
  return (
    <Link href="/auth/login" className="cursor-default">
      <Button variant="outline">התחברות</Button>
    </Link>
  );
};
export default LoginButton;
