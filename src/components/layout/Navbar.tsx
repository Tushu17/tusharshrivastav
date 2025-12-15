"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm",
        isScrolled ? "bg-slate-950/80 shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#"
          className="text-primary font-bold text-xl md:text-2xl tracking-tight hover:opacity-80 transition-opacity"
        >
          {/* Using a signature-like style if possible, or just bold colored text as placeholder for signature */}
          <span className="font-mono">{portfolioData.name.split(" ")[0]}</span>
          <span className="text-slate-100 font-sans">
            {" "}
            {portfolioData.name.split(" ")[1]}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ol className="flex gap-8 text-sm font-mono text-slate-300 list-decimal-zero">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ol>

          <a
            href="/files/resume.pdf"
            target="_blank"
            className="px-5 py-2 border border-primary text-primary font-mono text-sm rounded bg-transparent hover:bg-primary/10 transition-colors"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
