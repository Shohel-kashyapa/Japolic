"use client";

import { motion } from "framer-motion";
import {
  SpotifyLogo,
  SlackLogo,
  YCombinatorLogo,
  DiscordLogo,
  AtlassianLogo,
  OracleRedBullRacingLogo,
} from "./Icons";

const teams = [
  { name: "Spotify", Component: SpotifyLogo },
  { name: "Slack", Component: SlackLogo },
  { name: "Y Combinator", Component: YCombinatorLogo },
  { name: "Discord", Component: DiscordLogo },
  { name: "Atlassian", Component: AtlassianLogo },
  { name: "Oracle Red Bull Racing", Component: OracleRedBullRacingLogo },
];

// Double the items in each track so it seamlessly spans even ultra-wide & 4K displays
const trackTeams = [...teams, ...teams];

export function TrustedTeams() {
  return (
    <section className="py-10 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "200px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-8 sm:mb-12"
        >
          Trusted by Teams
        </motion.h2>
      </div>

      {/* Infinite Horizontal Side-Scroll Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "200px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative w-full overflow-hidden select-none py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="animate-marquee flex items-center">
          {/* Primary Track */}
          <div className="flex items-center gap-10 sm:gap-14 md:gap-18 px-5 sm:px-7 md:px-9 shrink-0 text-zinc-800 dark:text-white/90">
            {trackTeams.map((team, idx) => (
              <div
                key={`primary-${idx}`}
                className="hover:opacity-100 opacity-75 transition-all duration-200 hover:scale-105 shrink-0 cursor-default"
              >
                <team.Component className="h-6 sm:h-7" />
              </div>
            ))}
          </div>

          {/* Secondary Track (Continuous Seamless Duplicate) */}
          <div
            className="flex items-center gap-10 sm:gap-14 md:gap-18 px-5 sm:px-7 md:px-9 shrink-0 text-zinc-800 dark:text-white/90"
            aria-hidden="true"
          >
            {trackTeams.map((team, idx) => (
              <div
                key={`duplicate-${idx}`}
                className="hover:opacity-100 opacity-75 transition-all duration-200 hover:scale-105 shrink-0 cursor-default"
              >
                <team.Component className="h-6 sm:h-7" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
