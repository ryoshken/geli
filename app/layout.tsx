import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "./CustomCursor";

export const metadata: Metadata = {
  title: "Hello Geli!",
  description: "Start a study timer and bake some sweets!",
  keywords: "sugar, focus, study, timer, pixel art, retro",
  authors: [{ name: "Sugar & Focus" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
