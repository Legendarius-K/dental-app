import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Trygg Tandvård - Din lokala tandläkare i Tranås",
  description:
    "På Trygg Tandvård får du proffessionell och trygg tandvård för hela familjen. Vår moderna klinik finns mitt i Tranås. Välkommen att boka tid.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="min-h-screen" lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://www.tryggtandvard.se/" />
      </head>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!} />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased box-border flex flex-col h-full text-neutral-800 font-nunito`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
