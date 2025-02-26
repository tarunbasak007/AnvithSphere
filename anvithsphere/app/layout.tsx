// app/layout.tsx
import type { Metadata } from "next";
import "../app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AnvithSphere",
  description: "A website inspired by Ghost.org with modern Next.js features.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />  {/* Always visible Navbar */}
        <main className="min-h-screen">{children}</main> {/* Dynamic content */}
        <Footer />  {/* Always visible Footer */}
      </body>
    </html>
  );
}
