"use client";

import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  metric: string;
  align: "top" | "bottom";
  variant: "subtle" | "vibrant";
  delay: number;
}

const cardsData: CardProps[] = [
  {
    title: "Ai/LLM Checkpoint Savings",
    description:
      "Ai/LLM gives developeed engineering, high performane and checkpoint cores.",
    metric: "[LATENCY: 0.1ms]",
    align: "bottom",
    variant: "subtle",
    delay: 0.1,
  },
  {
    title: "Ai/LLM Checkpoint Savings",
    description:
      "Ai/LLM gives developeed engineering, high performane and checkpoint cores.",
    metric: "[LATENCY: 0.1ms]",
    align: "top",
    variant: "vibrant",
    delay: 0.2,
  },
  {
    title: "Ai/LLM Checkpoint Savings",
    description:
      "Ai/LLM gives developeed engineering, high performane and checkpoint cores.",
    metric: "[LATENCY: 0.1ms]",
    align: "bottom",
    variant: "subtle",
    delay: 0.3,
  },
];

export function UseCases() {
  return (
    <section id="products" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "250px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white"
          >
            Use Case / Value
          </motion.h2>
        </div>

        {/* 3 Cards Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {cardsData.map((card, idx) => (
            <UseCaseCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({
  title,
  description,
  metric,
  align,
  variant,
  delay,
}: CardProps) {
  const isVibrant = variant === "vibrant";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "250px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`relative min-h-[440px] sm:min-h-[470px] md:min-h-[500px] rounded-[30px] p-7 sm:p-8 flex flex-col transition-all duration-300 overflow-hidden shadow-lg ${
        align === "bottom" ? "justify-end" : "justify-start"
      } ${
        isVibrant
          ? // Vibrant electric violet card (matches card 2 in both dark and light mode)
            "bg-gradient-to-b from-[#5c1ee4] via-[#6a25ee] to-[#7b32f5] text-white shadow-[0_12px_36px_rgba(92,30,228,0.35)] border border-purple-400/20"
          : // Subtle lavender in light mode / deep dark violet in dark mode (matches cards 1 & 3)
            "bg-gradient-to-b from-[#d9ccf8] to-[#cebef6] text-[#190f33] shadow-[0_10px_30px_rgba(150,130,200,0.18)] border border-purple-200/60 dark:bg-gradient-to-b dark:from-[#241344] dark:via-[#1e0f38] dark:to-[#170a2c] dark:text-white dark:shadow-[0_12px_36px_rgba(0,0,0,0.5)] dark:border-white/10"
      }`}
    >
      {/* Decorative ambient gradient circle inside card */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute w-[260px] h-[260px] rounded-full blur-[80px] -z-0 ${
          align === "bottom" ? "-top-12 -right-12" : "-bottom-12 -left-12"
        } ${
          isVibrant
            ? "bg-purple-300/25"
            : "bg-white/40 dark:bg-purple-600/15"
        }`}
      />

      {/* Content Block */}
      <div className="relative z-10 space-y-3">
        {/* Title */}
        <h3
          className={`text-xl sm:text-2xl font-bold tracking-tight leading-snug ${
            isVibrant
              ? "text-white"
              : "text-[#180e32] dark:text-white"
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`text-sm sm:text-base leading-relaxed font-normal ${
            isVibrant
              ? "text-purple-100/90"
              : "text-[#473b64] dark:text-zinc-300/90"
          }`}
        >
          {description}
        </p>

        {/* Metric badge */}
        <div className="pt-2">
          <span
            className={`inline-block font-mono text-xs sm:text-sm font-bold tracking-wider ${
              isVibrant
                ? "text-white bg-white/15 px-2.5 py-1 rounded-md backdrop-blur-xs"
                : "text-[#3b1778] dark:text-purple-200 bg-black/5 dark:bg-white/10 px-2.5 py-1 rounded-md"
            }`}
          >
            {metric}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
