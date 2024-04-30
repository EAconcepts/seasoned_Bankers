import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./(components)/topnav";
import Footer from "./(components)/footer";
import Providers from "./(utils)/providers";
import Head from "next/head";

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
      <Head>
        <link href="favicon.ico" rel="icon" />
      </Head>
      <body className={inter.className}>
        <Providers>
          <TopNav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
