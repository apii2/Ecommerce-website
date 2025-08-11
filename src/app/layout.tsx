import type { Metadata } from "next";
import { Geist, Nunito} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductProvider } from "@/lib/store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Venture - Shopper's Paradise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${geistSans.variable} antialiased`}
      >
        <ProductProvider>
          <Header />
          {children}
          <Footer />
        </ProductProvider>
      </body>
    </html>
  );
}
