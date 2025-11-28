import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignupButton = () => {
  return (
    <Link href="/auth/sign-up" className="cursor-default">
      <Button>הרשמה</Button>
    </Link>
  );
};
export default SignupButton;
