"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const quickPrompts = [
  "Project 1: Explain Avenor architecture and impact",
  "Project 2: Explain ChronoETL performance engineering",
  "Project 3: Explain how YAPLY was built",
];

const recruiterSignals = [
  { label: "Tech Stack Depth", value: "Full-Stack" },
  { label: "Internships", value: "02" },
  { label: "Shipped Projects", value: "04" },
];

const knowledgeCards = [
  {
    title: "Builder Profile",
    copy: "Full-Stack + AI Engineer with systems depth, product thinking, and production execution.",
  },
  {
    title: "Best For",
    copy: "Recruiters, founders, and teams evaluating fit across AI engineering, backend systems, and full-stack work.",
  },
];

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [activePrompt, setActivePrompt] = useState(quickPrompts[0]);

  const activeSummary = useMemo(() => {
    if (activePrompt.includes("Project 1") || activePrompt.includes("Avenor")) {
      return "Avenor is a full-stack MERN placement platform that replaces spreadsheet and group-chat workflows with role-based dashboards, realtime fanout notifications, and AI interview prep via Grok-powered streaming responses.";
    }

    if (activePrompt.includes("Project 2") || activePrompt.includes("ChronoETL")) {
      return "ChronoETL benchmarks three ETL execution models (baseline, optimized, pipelined parallel) on datasets up to 2.5M records, showing how algorithmic and I/O optimization plus chunk-tuned concurrency improve throughput.";
    }

    return "YAPLY is a production-grade realtime chat system built with React, Node.js, Socket.IO, and MongoDB, featuring JWT auth, message delivery/read receipts, and paginated history with optimized queries.";
  }, [activePrompt]);

  return (
    <>
      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close AI panel overlay"
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm sm:backdrop-blur-md"
            />

            <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
              <div className="relative mb-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                  className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.2rem] bg-[radial-gradient(circle_at_78%_82%,rgba(0,113,227,0.32),transparent_54%)] blur-2xl sm:-inset-8 sm:rounded-[2.4rem] sm:blur-3xl"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.42, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="pointer-events-none absolute -inset-3 -z-10 rounded-[1.8rem] bg-[radial-gradient(circle_at_85%_18%,rgba(86,170,255,0.16),transparent_48%)] blur-xl sm:-inset-4 sm:rounded-4xl sm:blur-2xl"
                />
                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.95, rotateX: 6 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, y: 14, scale: 0.97, rotateX: 3 }}
                  transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "bottom right" }}
                  className="premium-blue-panel relative flex w-[min(95vw,380px)] max-h-[calc(100svh-6rem)] flex-col overflow-hidden rounded-[1.35rem] shadow-[0_20px_48px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:w-[min(94vw,390px)] sm:max-h-[calc(100svh-7rem)] sm:rounded-[1.6rem] sm:shadow-[0_28px_70px_rgba(0,0,0,0.45)] sm:backdrop-blur-2xl"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_28%,transparent_72%,rgba(0,113,227,0.08))]" />
                  <div className="pointer-events-none absolute -right-8 top-3 h-22 w-22 rounded-full bg-[rgba(0,113,227,0.16)] blur-2xl sm:-right-10 sm:h-28 sm:w-28 sm:bg-[rgba(0,113,227,0.22)] sm:blur-3xl" />
                  <div className="pointer-events-none absolute bottom-0 left-2 h-18 w-18 rounded-full bg-white/6 blur-2xl sm:h-24 sm:w-24 sm:bg-white/8 sm:blur-3xl" />

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.3, delay: 0.06, ease: "easeOut" }}
                    className="relative z-10 shrink-0 p-3 pb-2.5 sm:p-4 sm:pb-3"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/68">
                          <span className="h-2 w-2 rounded-full bg-(--accent)" />
                          OpenAI Panel
                        </div>
                        <p className="mt-3 text-[1.05rem] font-semibold tracking-[-0.03em] text-white">
                          Context-rich recruiter assistant
                        </p>
                        <p className="mt-1 text-[13px] leading-5.5 text-white/56 sm:text-sm sm:leading-6">
                          A faster read on Brahmjeet’s fit, depth, and shipped work.
                        </p>
                      </div>
                      <button
                        onClick={() => setOpen(false)}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 transition duration-200 hover:bg-white/10 hover:text-white"
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>

                  <motion.div
                    data-lenis-prevent
                    data-lenis-prevent-wheel
                    data-lenis-prevent-touch
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.34, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 pb-3 touch-pan-y [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.16)_transparent] sm:px-4 sm:pb-4"
                  >
                    <div className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-4 sm:gap-2">
                      {recruiterSignals.map((signal, index) => (
                        <motion.div
                          key={signal.label}
                          initial={{ opacity: 0, y: 14, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.32,
                            delay: 0.12 + 0.05 * index,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="mobile-premium-card rounded-[0.9rem] border border-[rgba(0,113,227,0.14)] bg-[rgba(255,255,255,0.04)] px-2.5 py-2.5 sm:rounded-2xl sm:px-3 sm:py-3"
                        >
                          <div className="text-lg font-semibold tracking-[-0.04em] text-white">
                            {signal.value}
                          </div>
                          <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/42">
                            {signal.label}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-3 rounded-2xl border border-[rgba(0,113,227,0.12)] bg-[rgba(0,113,227,0.06)] p-3.5 sm:mt-4 sm:rounded-[1.2rem] sm:p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-(--accent)">
                        Snapshot
                      </p>
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white/42">
                        <span className="h-1.5 w-1.5 rounded-full bg-(--accent)" />
                        Active context
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/76">
                      Brahmjeet is a Full-Stack + AI Engineer and CSE student at
                      TIET with a strong tech-stack depth. Key projects include Avenor (placement
                      platform), ChronoETL (performance-engineered ETL in C++), and
                      YAPLY (realtime chat). He is open to internships, full-time
                      roles, and freelance opportunities.
                    </p>
                  </div>

                  <div className="mt-3 grid gap-2 sm:mt-4">
                    {knowledgeCards.map((card, index) => (
                      <motion.div
                        key={card.title}
                        initial={{ opacity: 0, x: 12, scale: 0.98 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{
                          duration: 0.34,
                          delay: 0.22 + 0.07 * index,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="premium-blue-card rounded-[0.95rem] px-3.5 py-2.5 sm:rounded-2xl sm:px-4 sm:py-3"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/48">
                          {card.title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/74">
                          {card.copy}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-3 rounded-2xl border border-[rgba(0,113,227,0.12)] bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(0,113,227,0.14))] p-3.5 sm:mt-4 sm:rounded-[1.2rem] sm:p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/52">
                          Live prompt preview
                        </p>
                        <p className="mt-1 text-xs leading-5 text-white/42">
                          Simulated recruiter conversation
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white/42">
                        <span className="h-1.5 w-1.5 rounded-full bg-(--accent)" />
                        Thinking
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      {quickPrompts.map((prompt) => {
                        const isActive = activePrompt === prompt;

                        return (
                          <button
                            key={prompt}
                            onClick={() => setActivePrompt(prompt)}
                            className={`group flex w-full items-start gap-3 rounded-2xl border px-3 py-3 text-left transition duration-200 ${
                              isActive
                                ? "border-[rgba(0,113,227,0.45)] bg-[linear-gradient(135deg,rgba(0,113,227,0.18),rgba(255,255,255,0.05))] text-white shadow-[0_10px_30px_rgba(0,113,227,0.12)]"
                                : "border-white/8 bg-white/[0.035] text-white/66 hover:border-white/16 hover:bg-white/6 hover:text-white/88"
                            }`}
                          >
                            <div
                              className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold ${
                                isActive
                                  ? "border-[rgba(0,113,227,0.42)] bg-[rgba(0,113,227,0.22)] text-white"
                                  : "border-white/10 bg-white/5 text-white/58"
                              }`}
                            >
                              AI
                            </div>
                            <div className="min-w-0">
                              <p
                                className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${
                                  isActive ? "text-(--accent)" : "text-white/40"
                                }`}
                              >
                                Suggested prompt
                              </p>
                              <p className="mt-1 text-sm leading-6 text-inherit">
                                {prompt}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="flex justify-end">
                        <div className="max-w-[88%] rounded-[1.15rem] rounded-br-[0.4rem] border border-[rgba(0,113,227,0.28)] bg-[linear-gradient(135deg,rgba(0,113,227,0.28),rgba(0,113,227,0.14))] px-4 py-3">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/58">
                            Recruiter
                          </p>
                          <p className="mt-1 text-sm leading-6 text-white/90">
                            {activePrompt}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-start">
                        <div className="max-w-[92%] rounded-[1.15rem] rounded-bl-[0.4rem] border border-white/8 bg-black/24 px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.14)]">
                          <div className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/6 text-[10px] font-semibold text-(--accent)">
                              AI
                            </span>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/48">
                              Answer preview
                            </p>
                          </div>
                          <p className="mt-3 text-sm leading-6 text-white/74">
                            {activeSummary}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </>
        ) : null}
      </AnimatePresence>

      <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
        <button
          onClick={() => setOpen((value) => !value)}
          className="group relative overflow-hidden rounded-full border border-[rgba(0,113,227,0.38)] bg-[linear-gradient(135deg,rgba(0,113,227,0.96),rgba(41,151,255,0.9))] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(0,113,227,0.28)] transition duration-150 ease-out hover:-translate-y-0.5"
        >
          <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.24),transparent_28%,transparent_68%,rgba(255,255,255,0.12))] opacity-80 transition duration-200 group-hover:opacity-100" />
          <span className="relative inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.85)]" />
            {open ? "Hide AI Panel" : "Open AI Panel"}
          </span>
        </button>
      </div>
    </>
  );
}
