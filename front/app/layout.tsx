import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito, Gorditas } from "next/font/google";
import "./globals.css";
import Header from "@/components/general-ui/Header";
import { SessionProvider } from "@/components/auth/SessionProvider";
import { ThemeProvider } from "next-themes";
import { Suspense } from "react";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});
const gorditas = Gorditas({
  variable: "--font-gorditas",
  weight:["400", "700" ]
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
        <head>
              <Script id={"GA_head"}>
          {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','G-0T1MFE592R');
        `}
        </Script>
        </head>
      <body
        className={`${nunito.variable} ${gorditas.variable}  antialiased`}
      >
               <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-0T1MFE592R"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
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
