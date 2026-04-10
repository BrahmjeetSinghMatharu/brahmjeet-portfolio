"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "Build end-to-end, not in silos",
    copy:
      "I work across product, backend, and AI so the system feels cohesive.",
  },
  {
    title: "Move fast without breaking architecture",
    copy:
      "From realtime MERN apps to edge AI, I optimize for clarity, scale, and resilience.",
  },
  {
    title: "Turn technical depth into measurable impact",
    copy:
      "I care about results teams can feel: faster onboarding, stronger throughput, and trust.",
  },
];

const metrics = [
  "Open to internships, full-time SDE roles, and freelance work",
  "Strongest in MERN, AI integration, backend architecture, and C++ systems work",
  "Full-stack product engineering with AI as a foundation, not an add-on",
];

const summaryPills = [
  "Full-Stack + AI",
  "Systems Thinking",
  "Production Mindset",
];

export default function Comparison() {
  return (
    <section
      id="about"
      className="flex scroll-mt-28 items-center py-10 lg:min-h-svh lg:py-6"
    >
      <div className="section-shell grid gap-5 lg:grid-cols-[1.28fr_0.72fr] lg:items-start">
        <motion.div
          className="mobile-premium-panel premium-blue-panel relative overflow-hidden rounded-4xl p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-7 lg:flex lg:h-full lg:flex-col lg:justify-between"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_34%,rgba(0,113,227,0.08))]" />
          <motion.div
            className="pointer-events-none absolute -right-12 top-6 h-32 w-32 rounded-full bg-[rgba(0,113,227,0.14)] blur-3xl"
            animate={{ y: [0, -10, 0], opacity: [0.42, 0.78, 0.42] }}
            transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute left-[18%] top-[54%] h-24 w-24 rounded-full bg-[rgba(86,170,255,0.12)] blur-3xl"
            animate={{ x: [0, 10, 0], y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 8.5, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute inset-x-10 top-0 h-px"
            animate={{
              background: [
                "linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)",
                "linear-gradient(90deg,transparent,rgba(255,255,255,0.24),transparent)",
                "linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,113,227,0.18)] bg-[rgba(0,113,227,0.1)] px-3 py-1.5">
              <span className="h-2 w-2 rounded-full bg-(--accent)" />
              <p className="section-kicker mb-0 text-(--accent)">About Brahmjeet</p>
            </div>
            <h2 className="section-title max-w-[14ch]">
              Product instinct, <span className="text-(--accent)">AI depth</span>, and engineering discipline.
            </h2>
            <p className="section-copy mt-3.5 max-w-3xl text-[14px] leading-6">
              Computer Science student at TIET building full-stack products,
              AI-powered systems, and performance-oriented software with a focus
              on clean architecture and real delivery.
            </p>

            <motion.div
              className="mt-4 h-px w-28 bg-[linear-gradient(90deg,rgba(0,113,227,0.85),rgba(255,255,255,0.12),transparent)]"
              animate={{ width: [112, 148, 112], opacity: [0.75, 1, 0.75] }}
              transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut" }}
            />

            <div className="mt-4 flex flex-wrap gap-2">
              {summaryPills.map((item, index) => (
                <motion.span
                  key={item}
                  className={`mobile-premium-chip rounded-full border px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] ${
                    index === 0
                        ? "premium-blue-chip"
                      : "border-white/10 bg-white/4 text-white/72"
                  }`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.08 + index * 0.05, duration: 0.42 }}
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-4 grid gap-2.5 lg:mt-5">
            <motion.div
              className="mobile-premium-card premium-blue-card rounded-[1.35rem] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_40px_rgba(0,113,227,0.08)] transform-gpu"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-(--accent)">
                  Snapshot
                </p>
                <motion.span
                  className="h-2 w-2 rounded-full bg-(--accent)"
                  animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.18, 1] }}
                  transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
                />
              </div>
              <p className="mt-2 text-[13px] leading-5.5 text-white/78">
                I move comfortably between AI pipelines, realtime product
                engineering, and systems work, which lets me think at the
                product level without losing technical depth.
              </p>
            </motion.div>

            <div className="grid gap-3">
              {metrics.map((item, index) => (
                <motion.div
                  key={item}
                  className="mobile-premium-card premium-blue-card rounded-[1.05rem] px-4 py-2.5 text-[12.5px] text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition transform-gpu"
                  whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.06)" }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.24 }}
                  transition={{
                    delay: 0.16 + index * 0.06,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <span className="mr-2 text-(--accent)">•</span>
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-2.5 lg:h-full lg:auto-rows-fr">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.title}
              className="mobile-premium-card premium-blue-panel group relative flex h-full overflow-hidden rounded-[1.35rem] p-3.5 shadow-[0_20px_55px_rgba(0,0,0,0.18)] backdrop-blur-xl transform-gpu md:p-4"
              initial={{ opacity: 0, x: 28, y: 18 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_34%,rgba(145,145,150,0.06))]" />
              <motion.div
                className="pointer-events-none absolute -right-8 top-0 h-24 w-24 rounded-full bg-[rgba(175,175,180,0.11)] blur-3xl"
                animate={{ y: [0, -8, 0], opacity: [0.45, 0.75, 0.45] }}
                transition={{ repeat: Infinity, duration: 5.2 + index, ease: "easeInOut" }}
              />
              <motion.div
                className="pointer-events-none absolute inset-x-8 top-0 h-px"
                animate={{
                  background: [
                    "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)",
                    "linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)",
                    "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 4.6 + index * 0.35 }}
              />
              <div className="relative z-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/42">
                  0{index + 1}
                </p>
                <h3 className="mt-1.5 text-[1.12rem] font-semibold tracking-[-0.04em] text-(--accent)">
                  {principle.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-5 text-white/68">
                  {principle.copy}
                </p>
                <motion.div className="mt-3 h-px w-16 bg-[linear-gradient(90deg,rgba(0,113,227,0.72),transparent)]" whileHover={{ width: 112 }} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
