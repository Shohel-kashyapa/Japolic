"use client";

import Link from "next/link";
import { JapolicLogo, InstagramIcon, GitHubIcon, TwitterXIcon } from "./Icons";

export function Footer() {
  return (
    <footer id="company" className="w-full pt-10 sm:pt-16 px-3 sm:px-6 md:px-8 mt-auto">
      <div className="max-w-7xl mx-auto rounded-t-[32px] sm:rounded-t-[40px] md:rounded-t-[48px] bg-gradient-to-r from-[#0d071e] via-[#220d4b] to-[#6722ea] text-white p-7 sm:p-10 md:p-14 shadow-[0_-10px_40px_rgba(16,8,34,0.35)] relative overflow-hidden">
        {/* Subtle radial ambient glow on the right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -bottom-20 w-[450px] h-[450px] bg-gradient-to-tl from-[#9333ea]/35 via-[#7928ca]/20 to-transparent blur-[90px] rounded-full"
        />

        {/* Main Columns Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          {/* Column 1: Brand Logo, Description, Raw Social Icons */}
          <div className="lg:col-span-4 space-y-3.5 max-w-xs">
            <Link href="/" className="inline-block" aria-label="Japolic Home">
              <JapolicLogo className="h-8 w-auto text-3xl" textClassName="text-white" />
            </Link>
            <p className="text-xs sm:text-sm text-zinc-300/90 font-normal leading-relaxed">
              Japolic gives developers and engineering teams high-performance shared storage for AI and data.
            </p>
            {/* Raw Social Icons without circular backgrounds */}
            <div className="flex items-center gap-3.5 pt-1 text-zinc-300/80">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="X"
              >
                <TwitterXIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-1">
            {/* Company */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 tracking-tight">
                Company
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-xs sm:text-sm text-zinc-300/80 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#partnership" className="text-xs sm:text-sm text-zinc-300/80 hover:text-white transition-colors">
                    Partnership
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-xs sm:text-sm text-zinc-300/80 hover:text-white transition-colors">
                    Faq
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-xs sm:text-sm text-zinc-300/80 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 tracking-tight">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#resources-01" className="text-xs sm:text-sm text-zinc-300/80 hover:text-white transition-colors">
                    Resources 01
                  </Link>
                </li>
                <li>
                  <Link href="#resources-02" className="text-xs sm:text-sm text-zinc-300/80 hover:text-white transition-colors">
                    Resources 02
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 tracking-tight">
                Legal
              </h4>
            </div>

            {/* Careers */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 tracking-tight">
                Careers
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#careers" className="text-xs sm:text-sm text-zinc-300/80 hover:text-white transition-colors">
                    Career Details
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-xs sm:text-sm text-zinc-300/80 hover:text-white transition-colors">
                    Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Text - Unbordered, cleanly centered */}
        <div className="relative z-10 pt-10 sm:pt-14 pb-2 text-center text-xs sm:text-sm text-zinc-300/70 font-normal">
          <span>Made with ♥ by <span className="text-zinc-200 font-medium">Shohel Kashyapa</span> in Sri Lanka Copyright © 2026</span>
        </div>
      </div>
    </footer>
  );
}
