import Link from "next/link";
import Image from "next/image";
import LoginButton from "@/components/Auth/login-button";
import SignupButton from "@/components/Auth/signup-button";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "@/components/Auth/logout-button";
import { redirect } from "next/navigation";
import EnterDashboardButton from "@/components/Landing Page/EnterDashboardButton";

const Navbar = async ({ authNav = false }: { authNav: boolean }) => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();
  const isLoggedIn: boolean = !(error || !data?.claims);

  return (
    <header
      className={`${authNav ? "fixed" : "sticky"} z-50 bg-card top-5 left-0 right-0 max-w-7xl shadow-lg rounded-xl mx-auto px-4 sm:px-6 lg:px-8`}
    >
      <nav className="flex items-center justify-between h-16 space-x-8">
        <div className="flex items-center justify-between space-x-10">
          <Link className="text-xl flex items-center gap-2 font-bold" href="/">
            <span className="text-primary">LeadAlert</span>
            <Image src="/logo.svg" alt="logo" width={28} height={28} />
          </Link>

          <ul className="flex gap-12">
            <li>
              <Link href="/">דף הבית</Link>
            </li>
            <li>
              <Link href="/pricing">מחירון</Link>
            </li>
            <li>
              <Link href="/contact-us">צרו קשר</Link>
            </li>
          </ul>
        </div>
        {!authNav && !isLoggedIn && (
          <div className="flex space-x-2">
            <SignupButton />
            <LoginButton />
          </div>
        )}
        {isLoggedIn && (
          <div className="flex items-center gap-2">
            <EnterDashboardButton />
            <LogoutButton variant="icon" style="outline" />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
