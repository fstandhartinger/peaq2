import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { getSiteContent } from "../lib/sanity";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});
const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: "peaq GmbH · Analytics & automation",
  description: "Storage automation, analytics, and performance monitoring for Hitachi environments."
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const content = await getSiteContent();
  return (
    <html lang="en" className={`${space.variable} ${plex.variable}`}>
      <body>
        <div className="page">
          <Nav items={content.nav} />
          <main>{children}</main>
          <Footer
            address={content.site.address}
            email={content.site.email}
            popularPosts={content.popularPosts}
            supportUrl={content.site.supportUrl}
            copyright={content.site.copyright}
          />
        </div>
      </body>
    </html>
  );
}
