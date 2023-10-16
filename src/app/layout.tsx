import MyNavbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import MyCustomNavbar from "@/components/MyCustomNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-w-[700px]`}>
        <Providers>
          <MyCustomNavbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
