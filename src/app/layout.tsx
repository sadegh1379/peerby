import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import SessionProvider from "@/providers/session-provider";
import DirectionProvider from "@/providers/direction-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        {/* Link to the manifest */}
        <link rel="manifest" href="/manifest.json" />
        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
        {/* Favicon links */}
        <link rel="icon" href="/assets/icons/icon512_rounded.png" />
        <link rel="icon" href="/assets/icons/icon512_rounded.png" sizes="512x512" />
      </head>
      <body className={`antialiased`} style={{ fontFamily: "IranSans" }}>
        <DirectionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <SessionProvider>{children}</SessionProvider>
          </ThemeProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
