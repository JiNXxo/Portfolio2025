import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leonald Pilvera | Virtual Assistant & Automation Expert",
  description:
    "Accomplished Production Team Leader with over 3 years of experience in the BPO industry. Virtual Assistant specializing in automation and operational efficiency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#0a0a0f] text-white antialiased">{children}</body>
    </html>
  );
}
