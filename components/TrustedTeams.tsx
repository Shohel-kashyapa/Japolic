"use client";

import { motion } from "framer-motion";
import { SpotifyLogo, SlackLogo, YCombinatorLogo, DiscordLogo } from "./Icons";

export function TrustedTeams() {
  return (
    <section className="py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-8 sm:mb-10"
        >
          Trusted by Teams
        </motion.h2>

        {/* Logos container */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 text-zinc-800 dark:text-white/90"
        >
          <div className="hover:opacity-80 transition-opacity">
            <SpotifyLogo className="h-6 sm:h-7" />
          </div>
          <div className="hover:opacity-80 transition-opacity">
            <SlackLogo className="h-6 sm:h-7" />
          </div>
          <div className="hover:opacity-80 transition-opacity">
            <YCombinatorLogo className="h-6 sm:h-7" />
          </div>
          <div className="hover:opacity-80 transition-opacity">
            <DiscordLogo className="h-6 sm:h-7" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
