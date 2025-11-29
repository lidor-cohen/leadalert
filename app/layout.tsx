import type { Metadata } from "next";
import { Rubik, Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["hebrew", "latin"],
});

const notoSansHebrew = Noto_Sans_Hebrew({
  variable: "--font-noto-sans",
  subsets: ["hebrew", "latin"],
});

export const metadata: Metadata = {
  title: "LeadAlert - איסוף לידים חכם",
  description: "המערכת החכמה מבוססת AI למציאת לידים בזמן אמת",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body
        className={`${rubik.variable} ${notoSansHebrew.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
