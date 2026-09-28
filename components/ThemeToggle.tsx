"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div className="flex items-center gap-1.5 p-1 px-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 opacity-70">
        <div className="p-1">
          <Sun className="w-3.5 h-3.5 text-zinc-400" />
        </div>
        <div className="p-1">
          <Moon className="w-3.5 h-3.5 text-zinc-400" />
        </div>
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center gap-1.5 p-1 px-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6025e6]"
      aria-label="Toggle color theme"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div
        className={`p-1 rounded-full transition-all duration-200 ${
          !isDark
            ? "bg-white text-amber-500 shadow-xs"
            : "text-zinc-500 hover:text-zinc-300"
        }`}
      >
        <Sun className="w-3.5 h-3.5" />
      </div>
      <div
        className={`p-1 rounded-full transition-all duration-200 ${
          isDark
            ? "bg-[#201838] text-purple-300 shadow-xs"
            : "text-zinc-400 hover:text-zinc-700"
        }`}
      >
        <Moon className="w-3.5 h-3.5" />
      </div>
    </button>
  );
}
