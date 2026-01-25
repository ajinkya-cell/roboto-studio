import type { Metadata } from "next";
import "./globals.css";
import { SanityLive } from "@/sanity/live";
import { galaxieCopernicus, galaxiePolaris } from "./font";

export const metadata: Metadata = {
  title: "Jamb",
  description: "Luxury fireplaces, lighting & furniture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${galaxieCopernicus.variable} ${galaxiePolaris.variable}`}
    >
      <body className="bg-surface antialiased">
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
