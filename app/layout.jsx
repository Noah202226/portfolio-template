import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LIRA ANN MENDOZA",
  description: "Portfolio website build by NOA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dim">
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Oswald:wght@200..700&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
        </style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
