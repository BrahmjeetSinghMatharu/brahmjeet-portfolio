"use client";

import { motion } from "framer-motion";

const LEETCODE_URL = "https://leetcode.com/u/brahmjeet_singh/";

const practiceTracks = [
  {
    label: "Problem Solving Rhythm",
    value: "Consistent",
    progress: "82%",
  },
  {
    label: "DSA Depth",
    value: "Growing",
    progress: "76%",
  },
  {
    label: "Interview Readiness",
    value: "Sharpening",
    progress: "72%",
  },
];

const leetcodeSignals = [
  "DSA practice as a compounding habit",
  "Structured problem solving under constraints",
  "Interview-focused consistency and progression",
];

export default function LeetCodeStats() {
  return (
    <section id="leetcode" className="section-space scroll-mt-28">
      <div className="section-shell">
        <div className="flex flex-col gap-4">
          <div>
            <p className="section-kicker">LeetCode Profile</p>
            <h2 className="max-w-none text-[clamp(1.9rem,3.1vw,2.9rem)] font-semibold leading-[1.04] tracking-[-0.03em] xl:whitespace-nowrap">
              Proof of consistency beyond shipped products.
            </h2>
          </div>

          <p className="max-w-none text-[15px] leading-7 xl:whitespace-nowrap" style={{ color: "var(--muted)" }}>
            Alongside product work, LeetCode is where I keep problem-solving
            sharp. It reflects consistency, algorithmic thinking, and the habit
            of improving under constraints.
          </p>
        </div>

        <motion.div
          className="mobile-premium-panel glass-panel relative mt-10 overflow-hidden rounded-[2.2rem] p-5 md:p-6"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_30%,rgba(255,161,22,0.08))]" />
          <motion.div
            className="pointer-events-none absolute -right-10 top-0 h-44 w-44 rounded-full bg-[rgba(255,161,22,0.18)] blur-3xl"
            animate={{ y: [0, -14, 0], scale: [1, 1.06, 1] }}
            transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute left-[22%] top-[18%] h-28 w-28 rounded-full bg-[rgba(255,214,126,0.08)] blur-3xl"
            animate={{ y: [0, 10, 0], x: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut" }}
          />
          <div className="pointer-events-none absolute inset-x-16 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,196,87,0.65),transparent)]" />

          <div className="relative z-10 grid gap-5 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
            <motion.a
              href={LEETCODE_URL}
              target="_blank"
              rel="noreferrer"
              className="mobile-premium-card group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5"
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="pointer-events-none absolute right-6 top-6 h-20 w-20 rounded-full bg-[rgba(255,161,22,0.14)] blur-2xl"
                animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
              />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,196,87,0.45),transparent)]" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[rgb(255,161,22)]">
                    Coding Profile
                  </span>
                  <motion.span
                    className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/52"
                    whileHover={{ y: -1 }}
                  >
                    Live Link
                  </motion.span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[clamp(1.8rem,3vw,2.7rem)] font-semibold tracking-[-0.05em]">
                      brahmjeet_singh
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7" style={{ color: "var(--muted)" }}>
                      A dedicated space for algorithmic practice, structured
                      thinking, and long-term interview preparation.
                    </p>
                  </div>

                  <motion.div
                    className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] text-[rgb(255,161,22)] shadow-[0_18px_36px_rgba(255,161,22,0.08)]"
                    animate={{ rotate: [0, -4, 0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  >
                    <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current" aria-hidden="true">
                      <path d="M13.48 3.59a1 1 0 0 1 1.42 0l6.5 6.5a1 1 0 0 1 0 1.42l-6.5 6.5a1 1 0 1 1-1.42-1.42L18.27 12l-4.79-4.79a1 1 0 0 1 0-1.42ZM9.1 6.52a1 1 0 0 1 0 1.42L5.03 12l4.07 4.06a1 1 0 0 1-1.41 1.42l-4.78-4.77a1 1 0 0 1 0-1.42l4.78-4.78a1 1 0 0 1 1.41 0Z" />
                    </svg>
                  </motion.div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {leetcodeSignals.map((signal, index) => (
                    <motion.span
                      key={signal}
                      className="rounded-full border border-white/10 bg-white/4 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-white/68"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.08 + index * 0.05,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {signal}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.a>

            <div className="grid gap-3">
              {practiceTracks.map((track, index) => (
                <motion.div
                  key={track.label}
                  className="mobile-premium-card group rounded-[1.45rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -3, borderColor: "rgba(255,196,87,0.2)" }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/46">
                        {track.label}
                      </p>
                      <p className="mt-1.5 text-base font-medium tracking-[-0.03em]">
                        {track.value}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-[rgb(255,161,22)]">
                      {track.progress}
                    </span>
                  </div>

                  <div className="mt-3 overflow-hidden rounded-full border border-white/8 bg-white/5">
                    <motion.div
                      className="relative h-2 rounded-full bg-[linear-gradient(90deg,rgba(255,196,87,0.95),rgba(255,161,22,0.96))]"
                      initial={{ width: 0 }}
                      whileInView={{ width: track.progress }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{
                        duration: 0.95,
                        delay: 0.14 + index * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <motion.span
                        className="absolute inset-y-0 right-0 w-8 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.6))]"
                        animate={{ x: [-10, 8, -10] }}
                        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
