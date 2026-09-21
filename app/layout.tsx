import type { Metadata } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600"],
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://secondtour.fr"),
  title: "Second Tour — Le rappel qui fait revenir vos clients",
  description:
    "Vos clients satisfaits ne reviennent pas parce qu'ils oublient, pas parce qu'ils sont déçus. Second Tour les relance automatiquement, au bon moment.",
  openGraph: {
    title: "Second Tour — Le rappel qui fait revenir vos clients",
    description:
      "Vos clients satisfaits ne reviennent pas parce qu'ils oublient. Second Tour les relance automatiquement, au bon moment.",
    url: "https://secondtour.fr",
    siteName: "Second Tour",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Second Tour — Le rappel qui fait revenir vos clients",
    description:
      "Vos clients satisfaits ne reviennent pas parce qu'ils oublient. Second Tour les relance automatiquement.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
