import type { Metadata } from "next";
import { clashDisplay, poppins, satoshi } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ByteSpace — Get Access to Hundreds of Courses",
    template: "%s | ByteSpace",
  },
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with ByteSpace's wide range of courses from creators around the world.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${poppins.variable} ${clashDisplay.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
