import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.publicUrl),
  title: {
    default: site.seo.title,
    template: `%s | ${site.seo.title}`,
  },
  description: site.seo.description,
  openGraph: {
    type: "website",
    locale: site.seo.openGraphLocale,
    siteName: site.brand.name,
    title: site.seo.title,
    description: site.seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={site.htmlLang}
      suppressHydrationWarning
      className={`${notoSerif.variable} ${plusJakarta.variable} scroll-smooth antialiased bg-background`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-background text-foreground font-sans"
      >
        {children}
      </body>
    </html>
  );
}
