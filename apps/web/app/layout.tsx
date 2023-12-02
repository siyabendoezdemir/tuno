import "@/styles/globals.css";

import { Metadata } from "next";
import { ReactNode } from "react";
import Providers from "./providers";

const title =
  "Tuno - Notes made simple";
const description =
  "Tuno is a very simple note taking app made for when you need to quickly take notes on a topic";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "@steventey",
  },
  metadataBase: new URL("https://sacapital.ch"),
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
