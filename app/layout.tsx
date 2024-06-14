import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import PrelineScript from "@/components/ PrelineScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enhance business solutions",
  description: "Created by Kaifi Azmi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <Header />
        <main id="content" role="main" className=''>
          {children}
        </main>
        <Footer />
      </body>
      <PrelineScript />
    </html >
  );
}
