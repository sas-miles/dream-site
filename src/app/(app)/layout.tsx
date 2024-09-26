import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { Suspense } from "react";
import { ClerkProvider } from "@clerk/nextjs";
export const metadata: Metadata = {
  title: "Dream",
  description: "Exploring new UX/UI patterns enabled by AI",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} antialiased`}>
      <body className="bg-black">
        <Suspense fallback={<div>Loading...</div>}>
          <ClerkProvider>{children}</ClerkProvider>
        </Suspense>
      </body>
    </html>
  );
}
