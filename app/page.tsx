import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  Shield,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Welcome to Excellence - Veeville.",
  description:
    "Discover excellence with our innovative solutions. We provide top-tier services and products designed to elevate your business to new heights.",
  openGraph: {
    title: "Welcome to Excellence - Veeville.",
    description:
      "Discover excellence with our innovative solutions. We provide top-tier services and products designed to elevate your business to new heights.",
    url: "https://yourwebsite.com",
  },
  alternates: {
    canonical: "https://yourwebsite.com",
  },
};

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience blazing-fast performance with our optimized solutions.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Your data is protected with enterprise-grade security measures.",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Get help from our team of experienced professionals 24/7.",
  },
];

const benefits = [
  "Increase productivity by up to 300%",
  "Reduce operational costs significantly",
  "Scale your business effortlessly",
  "Access premium features and tools",
];

export default function HomePage() {
  return (
    <>
      {/* Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Welcome to Excellence - Veeville.",
            description:
              "Discover excellence with our innovative solutions. We provide top-tier services and products designed to elevate your business to new heights.",
            url: "https://yourwebsite.com",
            mainEntity: {
              "@type": "Organization",
              name: "Veeville.",
              description: "Excellence in innovation and business solutions",
            },
          }),
        }}
      />

      <div className="flex flex-col">
        <h1>Veeville. Experiences</h1>
      </div>
    </>
  );
}
