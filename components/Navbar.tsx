"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { JapolicLogo } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Products", href: "#products" },
  { name: "Solutions", href: "#solutions" },
  { name: "Docs", href: "#docs" },
  { name: "Company", href: "#company" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-[#07050d]/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center group" aria-label="Japolic Home">
          <JapolicLogo />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-9 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-zinc-900 dark:hover:text-white transition-colors duration-150"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Theme Toggle & Get Started CTA */}
        <div className="hidden md:flex items-center gap-5">
          <ThemeToggle />
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="#get-started"
              className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-[#5e1ee3] hover:bg-[#6c29ee] rounded-full shadow-[0_0_20px_rgba(94,30,227,0.35)] hover:shadow-[0_0_25px_rgba(94,30,227,0.55)] transition-all duration-200"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Mobile: Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-black/10 dark:border-white/10 bg-white/95 dark:bg-[#07050d]/95 backdrop-blur-xl px-6 py-6 overflow-hidden"
          >
            <nav className="flex flex-col gap-4 text-base font-medium text-zinc-700 dark:text-zinc-300">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 hover:text-[#5e1ee3] dark:hover:text-purple-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-black/10 dark:border-white/10 flex flex-col gap-3">
                <Link
                  href="#get-started"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#5e1ee3] hover:bg-[#6c29ee] rounded-full shadow-[0_0_20px_rgba(94,30,227,0.4)]"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
