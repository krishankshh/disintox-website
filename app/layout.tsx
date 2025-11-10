import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Disintox® - Clinical-Grade Chlorine Dioxide Disinfection for Healthcare",
  description: "Advanced ClO₂ disinfection technology for hospitals. Patented, WHO & EPA approved. 99.99% pathogen elimination. Listed in Maharashtra EDL. Request a demo today.",
  keywords: "chlorine dioxide disinfectant, hospital fumigation India, Disintox tablets, ClO2 sterilizer, hospital disinfectant, HAI prevention, COVID-19 disinfectant",
  authors: [{ name: "Disinfect Sales & Marketing LLP" }],
  openGraph: {
    title: "Disintox® - Clinical-Grade Disinfection for Healthcare Facilities",
    description: "Patented chlorine dioxide tablets for hospital disinfection. 99.99% efficacy against bacteria, viruses, and fungi.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
