import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mosiah Grandol Tamba',
  url: 'https://mosiah-dev.vercel.app',
  jobTitle: 'Développeur Web Freelance',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Perpignan',
    addressRegion: 'Occitanie',
    addressCountry: 'FR',
  },
  sameAs: [
    'https://www.linkedin.com/in/mosiah-grandol',
    'https://github.com/GROSJOINDEBEUH',
  ],
  description:
    'Développeur web freelance spécialisé en sites modernes, rapides et optimisés SEO pour restaurants, commerces, indépendants et applications sur-mesure.',
  knowsAbout: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SEO', 'Shopify'],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png', type: 'image/png' },
    ],
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.shortName} — Développeur Web Freelance`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  verification: {
    google: '-WAZAkI26pGdnZcBPzkcw1B6Z08T0R4DVpdyvAC5y1I',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <head>
        <meta name="theme-color" content="#09090b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground" suppressHydrationWarning>
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}