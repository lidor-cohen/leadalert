import Navbar from "@/components/Navbar";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();
  const isLoggedIn: boolean = !(error || !data?.claims);

  if (isLoggedIn) redirect("/dashboard");

  return (
    <div dir="rtl">
      <Navbar authNav={true} />
      {children}
    </div>
  );
}
