// app/layout.tsx
import type { Metadata } from "next";
import "../app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RootProvider } from '../providers/RootProvider';

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
    <html lang="en" className="h-full">
      <body className="flex min-h-screen flex-col bg-gray-100 text-gray-900">
        <RootProvider>
          <Navbar />
          <main className="flex-grow px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}
