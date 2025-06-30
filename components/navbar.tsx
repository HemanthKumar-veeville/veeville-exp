"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        className="container mx-auto flex h-16 items-center px-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="Veeville. Home"
          >
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                YC
              </span>
            </div>
            <span className="font-bold text-xl">Veeville.</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
