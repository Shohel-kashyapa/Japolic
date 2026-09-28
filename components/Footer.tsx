"use client";

import Link from "next/link";
import { JapolicLogo, InstagramIcon, GitHubIcon, TwitterXIcon } from "./Icons";

const footerLinks = {
  company: {
    title: "Company",
    links: [
      { name: "About", href: "#about" },
      { name: "Partnership", href: "#partnership" },
      { name: "FAQ", href: "#faq" },
      { name: "Blog", href: "#blog" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Resources 01", href: "#resources-01" },
      { name: "Resources 02", href: "#resources-02" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "Privacy", href: "#privacy" },
      { name: "Terms", href: "#terms" },
    ],
  },
  careers: {
    title: "Careers",
    links: [
      { name: "Career Details", href: "#careers" },
      { name: "Team", href: "#team" },
    ],
  },
};

export function Footer() {
  return (
    <footer id="company" className="px-4 sm:px-6 pb-8 sm:pb-12 pt-10">
      <div className="max-w-6xl mx-auto rounded-[32px] md:rounded-[42px] bg-gradient-to-r from-[#100822] via-[#221044] to-[#6c23ee] text-white p-8 sm:p-12 md:p-16 shadow-[0_20px_50px_rgba(16,8,34,0.4)] relative overflow-hidden">
        {/* Subtle radial sheen on the right side */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -bottom-20 w-[450px] h-[450px] bg-gradient-to-tl from-[#9333ea]/30 via-[#7928ca]/20 to-transparent blur-[90px] rounded-full"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Left Side: Brand, Description, Socials */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <Link href="/" className="inline-block" aria-label="Japolic Home">
                <JapolicLogo className="h-8 w-auto text-3xl" textClassName="text-white" />
              </Link>
              <p className="mt-4 text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-xs">
                Japolic gives developers and engineering teams high-performance shared storage for AI
                and data.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-zinc-300">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors hover:text-white"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors hover:text-white"
                aria-label="X (formerly Twitter)"
              >
                <TwitterXIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Side: 4 Link Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Company Column */}
            <div>
              <h4 className="text-base font-bold text-white mb-4 tracking-tight">
                {footerLinks.company.title}
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.company.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-base font-bold text-white mb-4 tracking-tight">
                {footerLinks.resources.title}
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.resources.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-base font-bold text-white mb-4 tracking-tight">
                {footerLinks.legal.title}
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.legal.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Careers Column */}
            <div>
              <h4 className="text-base font-bold text-white mb-4 tracking-tight">
                {footerLinks.careers.title}
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.careers.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Made with ♥ in Sri Lanka Copyright © 2026 */}
        <div className="relative z-10 pt-6 text-center text-xs sm:text-sm text-zinc-300/80 font-normal">
          <span>Made with ♥ in Sri Lanka Copyright © 2026</span>
        </div>
      </div>
    </footer>
  );
}
