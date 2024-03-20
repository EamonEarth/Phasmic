import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { cn } from "@/lib/utils";
import Sidebar from "./components/Sidebar";
import { Toaster } from "sonner";
import { ScrollProvider } from "./context/ScrollContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phasmic",
  description: "experimental events",
  icons: {
    icon: "/images/phasmic_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased w-full h-full", inter.className)}>
        <ScrollProvider>
          {/* <Navbar /> */}
          {/* <Sidebar /> */}

          {children}
          <Toaster />
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
