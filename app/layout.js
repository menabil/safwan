import { Jost, Vollkorn_SC } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

const jos = Jost({
  variable: "--font-Jos",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const vol = Vollkorn_SC({
  variable: "--font-Vol",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Safwan",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jos.variable} ${vol.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
