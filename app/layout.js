// import { Jost, Oswald } from "next/font/google";
// import "./globals.css";
// import Header from "@/layouts/Header";

// const jost = Jost({
//   variable: "--font-Jost",
//   weight: ["400", "500", "600", "700"],
//   subsets: ["latin"],
// });

// const ows = Oswald({
//   variable: "--font-Oswald",
//   weight: ["400", "500", "600", "700"],
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Safwan",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       className={`${jost.variable} ${ows.variable} h-full antialiased`}
//     >
//       <body className="min-h-full flex flex-col">
//         <Header />
//         {children}
//       </body>
//     </html>
//   );
// }

import { Jost, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/layouts/Header";

const jost = Jost({
  variable: "--font-jost",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Ows = Oswald({
  variable: "--font-ows",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Safwan",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${Ows.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
