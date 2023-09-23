"use client";

import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import { Manrope } from "next/font/google";

import Navbar from "@/components/Navbar";

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <html data-theme="light" lang="en">
        <body
          className={`${manrope.className} flex flex-col items-center min-h-screen py-8`}
        >
          <Navbar />

          {children}
          <Analytics />
        </body>
      </html>
    </>
  );
}
