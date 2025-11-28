import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="bg-card sticky top-5 left-0 right-0 max-w-7xl shadow-lg rounded-xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex items-center justify-between h-16 space-x-8">
        <div className="flex items-center justify-between space-x-10">
          <Link className="text-xl" href="/public">
            <Image src="/logo.svg" alt="logo" width={120} height={32} />
          </Link>

          <ul className="flex gap-12">
            <li>
              <Link href="/public">דף הבית</Link>
            </li>
            <li>
              <Link href="/pricing">מחירון</Link>
            </li>
            <li>
              <Link href="/contact-us">צרו קשר</Link>
            </li>
          </ul>
        </div>

        <div className="flex space-x-2">
          <Button>הרשמה</Button>
          <Button variant="outline">התחברות</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
