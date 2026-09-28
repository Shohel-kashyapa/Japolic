"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-12 pb-6 md:pt-20 md:pb-10 flex flex-col items-center text-center px-4 sm:px-6">
      {/* Subtle purple backdrop ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[350px] bg-gradient-to-b from-[#7928ca]/15 via-[#5e1ee3]/10 to-transparent blur-[120px] rounded-full dark:opacity-80 opacity-40 -z-10"
      />

      <div className="max-w-6xl mx-auto flex flex-col items-center w-full px-2">
        {/* Top Badge: HIGH-PERFORMANCE SHARED STORAGE */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151221] border border-white/10 text-white shadow-sm mb-6 sm:mb-8"
        >
          <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-zinc-300 pl-1">
            HIGH-PERFORMANCE SHARED
          </span>
          <span className="bg-[#4d1bbd] text-purple-200 text-[9px] sm:text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full font-mono">
            STORAGE
          </span>
        </motion.div>

        {/* Hero Headline - Exactly Two Lines, Cleanly Fitted Without Clipping */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-heading font-black tracking-tight leading-[1.12] w-full text-2xl sm:text-3xl md:text-[2.5rem] lg:text-[3.1rem] xl:text-[3.45rem]"
        >
          <span className="hidden dark:block metallic-text-gradient-dark">
            <span className="inline-block whitespace-normal sm:whitespace-nowrap">STORAGE THAT MOVES AT THE SPEED</span>
            <br className="hidden sm:inline" />{" "}
            <span className="inline-block whitespace-normal sm:whitespace-nowrap">OF YOUR COMPUTE</span>
          </span>
          <span className="dark:hidden block metallic-text-gradient-light">
            <span className="inline-block whitespace-normal sm:whitespace-nowrap">STORAGE THAT MOVES AT THE SPEED</span>
            <br className="hidden sm:inline" />{" "}
            <span className="inline-block whitespace-normal sm:whitespace-nowrap">OF YOUR COMPUTE</span>
          </span>
        </motion.h1>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-sm sm:text-base md:text-[1.05rem] text-zinc-600 dark:text-zinc-400 font-normal max-w-2xl leading-relaxed"
        >
          Japolic gives developers and engineering teams high-performance shared storage for AI and
          data-intensive workloads, combining the speed of local storage with the flexibility of S3.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Link
              href="#get-started"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 text-sm font-semibold text-white bg-[#5e1ee3] hover:bg-[#6c29ee] rounded-full shadow-[0_0_25px_rgba(94,30,227,0.4)] hover:shadow-[0_0_35px_rgba(94,30,227,0.6)] transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-2.5 sm:px-7 sm:py-3 text-sm font-semibold rounded-full border transition-all duration-200 bg-white border-zinc-300 text-zinc-800 hover:bg-zinc-50 shadow-xs dark:bg-white/[0.04] dark:border-white/15 dark:text-zinc-200 dark:hover:bg-white/[0.08] dark:shadow-none"
            >
              <span>Talk to an Engineer</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
