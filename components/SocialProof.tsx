"use client";

import { motion } from "framer-motion";

export function SocialProof() {
  return (
    <div className="flex justify-center items-center py-6 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="inline-flex items-center gap-3 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#151222] border border-white/15 shadow-lg shadow-black/20"
      >
        {/* Avatars cluster */}
        <div className="flex items-center -space-x-2">
          {/* Avatar 1 */}
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-[#151222] overflow-hidden bg-gradient-to-tr from-amber-400 to-rose-400 flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
            <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
              <rect width="36" height="36" fill="#f59e0b" />
              <circle cx="18" cy="14" r="7" fill="#fef3c7" />
              <path d="M7 32c0-6 4.9-11 11-11s11 5 11 11" fill="#fef3c7" />
            </svg>
          </div>
          {/* Avatar 2 */}
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-[#151222] overflow-hidden bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
            <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
              <rect width="36" height="36" fill="#8b5cf6" />
              <circle cx="18" cy="14" r="7" fill="#ede9fe" />
              <path d="M7 32c0-6 4.9-11 11-11s11 5 11 11" fill="#ede9fe" />
            </svg>
          </div>
          {/* Avatar 3 */}
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-[#151222] overflow-hidden bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
            <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
              <rect width="36" height="36" fill="#06b6d4" />
              <circle cx="18" cy="14" r="7" fill="#cffafe" />
              <path d="M7 32c0-6 4.9-11 11-11s11 5 11 11" fill="#cffafe" />
            </svg>
          </div>
          {/* Avatar 4 */}
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-[#151222] overflow-hidden bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
            <svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
              <rect width="36" height="36" fill="#10b981" />
              <circle cx="18" cy="14" r="7" fill="#d1fae5" />
              <path d="M7 32c0-6 4.9-11 11-11s11 5 11 11" fill="#d1fae5" />
            </svg>
          </div>
        </div>

        {/* Text: TRUSTED WORLDWIDE */}
        <span className="font-mono text-[10px] sm:text-xs font-bold tracking-wider text-zinc-200">
          TRUSTED WORLDWIDE
        </span>

        {/* Rating: Purple star + 4.9/5 rating */}
        <div className="flex items-center gap-1 pl-1 border-l border-white/10">
          <svg className="w-3.5 h-3.5 text-[#9353d3] fill-current" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="text-[11px] sm:text-xs font-semibold text-[#b794f4]">
            4.9/5 <span className="font-normal text-zinc-400">rating</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
