import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dota 2 Players Searching for Team",
  description: "Dota 2 Players Searching for Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-slate-800	">
        <div className="max-w-screen-lg mx-auto">{children}</div>
        <Toaster />
        </div>
      </body>
    </html>
    // </ClerkProvider>
  );
}
