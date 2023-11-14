import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Tic Tac Toe Game",
  description: "Made because of the boredom",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppin.className}>{children}</body>
    </html>
  );
}
