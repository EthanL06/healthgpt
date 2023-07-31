"use client";

import "./globals.css";
import { Manrope } from "next/font/google";

import Navbar from "@/components/Navbar";

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html data-theme="dark" lang="en">
      <body
        className={`${manrope.className} flex flex-col items-center min-h-screen `}
      >
        <Navbar />

        <div className="flex flex-col items-center w-full sm:w-[30rem] pt-8 px-12 text-center relative">
          <h1 className="font-bold text-5xl">
            Health<span className="text-brand">GPT</span>
          </h1>
          <div className="text-xl">An AI-Powered Patient Diagnosis Tool</div>
          <div className="divider"></div>
        </div>

        {children}
      </body>
    </html>
  );
}
