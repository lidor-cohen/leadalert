import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/Auth/logout-button";
import { createClient } from "@/lib/supabase/server";

const Page = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
    <div className="flex items-center justify-center gap-2 w-full py-6">
      <p>
        Hello <span>{data.claims.email}</span>
      </p>
      <LogoutButton />
    </div>
  );
};

export default Page;
