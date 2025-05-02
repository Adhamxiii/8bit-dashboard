import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "8-Bit Dashboard",
  description: "A retro-styled dashboard interface with 8-bit aesthetics, featuring pixel art and classic gaming vibes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`${pressStart.className} antialiased`}
      >
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
