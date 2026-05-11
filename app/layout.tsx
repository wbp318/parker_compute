import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Parker AI Works — AI workflows for small businesses",
  description:
    "I'm William Parker. I set up Claude, ChatGPT, and the tools alongside them, then train your team to use them. Based in East Carroll Parish, Louisiana. No hype, no jargon.",
  openGraph: {
    title: "Parker AI Works",
    description:
      "AI workflows for small businesses. Set up, trained, and documented in plain English.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
