import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./(components)/topnav";
import Footer from "./(components)/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seasoned Bankers",
  description: "Seasoned Bankers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
