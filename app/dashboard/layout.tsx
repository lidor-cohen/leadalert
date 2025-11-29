import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Dashboard/AppSidebar";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Dashboard/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-6 w-full shadow-xl m-4 rounded-xl">
        <Header />
        <Separator className="my-4" />
        {children}
      </main>
    </SidebarProvider>
  );
}
