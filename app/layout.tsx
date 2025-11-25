import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import StructuredData from "@/components/analytics/StructuredData";

// Fonts are now loaded via @import in globals.css to avoid build-time Google Fonts fetching issues

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dis-infect.in'),
  title: {
    default: "Disinfect® - Hospital-Grade Chlorine Dioxide (ClO<sub>2</sub>) Disinfection for Healthcare",
    template: "%s | Disintox®"
  },
  description: "Advanced ClO₂ disinfection technology for hospitals. Patented, WHO & EPA approved. 99.99% pathogen elimination. Listed in Maharashtra EDL. Request a demo today.",
  keywords: "Chlorine Dioxide (ClO<sub>2</sub>) disinfectant, hospital fumigation India, Disintox tablets, ClO<sub>2</sub> sterilizer, hospital disinfectant, HAI prevention, COVID-19 disinfectant, Chlorine Dioxide (ClO<sub>2</sub>) India, hospital disinfection, healthcare disinfection, medical disinfection",
  authors: [{ name: "Disinfect Sales & Marketing LLP" }],
  creator: "Disinfect Sales & Marketing LLP",
  publisher: "Disinfect Sales & Marketing LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.dis-infect.in",
    siteName: "Disintox®",
    title: "Disintox® - Hospital-Grade Disinfection for Healthcare Facilities",
    description: "Patented Chlorine Dioxide (ClO<sub>2</sub>) tablets for hospital disinfection. 99.99% efficacy against bacteria, viruses, and fungi.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Disintox® - Hospital-Grade Chlorine Dioxide (ClO<sub>2</sub>) Disinfection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disintox® - Hospital-Grade Disinfection for Healthcare",
    description: "99.99% efficacy against pathogens. Patented ClO₂ technology trusted by hospitals nationwide.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://www.dis-infect.in" />
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
