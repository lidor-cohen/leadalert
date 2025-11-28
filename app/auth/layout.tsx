import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl">
      <Navbar authNav={true} />
      {children}
    </div>
  );
}
