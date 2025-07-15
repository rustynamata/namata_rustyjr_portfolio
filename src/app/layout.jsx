import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/Components/Navigation";
import Footer from "@/Components/footer";
import { LayoutHeightsProvider } from '../Context/LayoutHeightsContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rusty Namata Portfolio",
  description: "A portfolio showcasing my work and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-w-[460px]`}>
          
          <LayoutHeightsProvider>
            <Navigation />
              {children}
            <Footer />
          </LayoutHeightsProvider>
          
      </body>
    </html>
  );
}
