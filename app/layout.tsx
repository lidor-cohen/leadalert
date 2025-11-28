import type { Metadata } from "next";
import { Rubik, Noto_Sans_Hebrew } from "next/font/google";
import "./globals.css";

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
    <html lang="he" dir="rtl">
      <body
        className={`${rubik.variable} ${notoSansHebrew.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
