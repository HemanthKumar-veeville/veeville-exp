import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { ExperiencesSection } from "@/components/sections/experiences-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Veeville Experiences - Welcome to Excellence",
  description:
    "Discover excellence with our innovative solutions. We provide top-tier services and products designed to elevate your business to new heights.",
  openGraph: {
    title: "Veeville Experiences - Welcome to Excellence",
    description:
      "Discover excellence with our innovative solutions. We provide top-tier services and products designed to elevate your business to new heights.",
    url: "https://www.veevillexp.com",
  },
  alternates: {
    canonical: "https://www.veevillexp.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <ExperiencesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}