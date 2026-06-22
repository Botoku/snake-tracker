import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/general-ui/Header";
import { SessionProvider } from "@/components/auth/SessionProvider";
import { ThemeProvider } from "next-themes";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Snake Parent",
  description: "An app for you to manage everything related to your serpentine friend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunito.variable}  antialiased`}
      >
        <SessionProvider>
          <ThemeProvider themes={['colombian', 'argentine', 'albino', 'sonoran', 'anery', 'moonglow', 'salmon']}>
            <Suspense fallback={<p>Loading</p>}>
              <Header />
              {children}
            </Suspense>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
