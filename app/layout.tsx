import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarCanvas from "@/src/client/components/atoms/StarCanvas";
import StarBackground from "@/src/client/components/organisms/StarBackground";
import Navbar from "@/src/client/components/molecules/Navbar";
import Footer from "@/src/client/components/organisms/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iury Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarCanvas childrenElement={StarBackground} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
