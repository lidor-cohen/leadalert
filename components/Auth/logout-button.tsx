"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export function LogoutButton({
  variant = "text",
  style = "default",
}: {
  variant?: "text" | "icon" | "icon-text";
  style?: "default" | "secondary" | "outline";
}) {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  };

  if (variant === "icon")
    return (
      <Button onClick={logout} variant={style}>
        <LogOut className="w-6 h-6" />
      </Button>
    );

  if (variant === "icon-text")
    return (
      <Button
        className="flex items-center gap-2"
        variant={style}
        onClick={logout}
      >
        <LogOut className="w-6 h-6" />
        התנתק/י
      </Button>
    );

  return (
    <Button variant={style} onClick={logout}>
      התנתק/י
    </Button>
  );
}
