"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isSafariBrowser } from "@/lib/browser";

const panels = [
  {
    index: "01",
    label: "Full-Stack",
    title: "Avenor",
    subtitle:
      "End-to-end placement tracker for engineering colleges with AI, real-time notifications, and role-based dashboards.",
    copy:
      "Full-stack MERN platform that replaces Excel sheets and WhatsApp groups for college placement management - with AI interview prep, real-time notifications, and analytics.",
    stack: "React • Node.js • MongoDB • Redis • Socket.io • Bull Queue • JWT • Grok AI • Vercel • Render",
    badges: [
      "React",
      "Node.js",
      "MongoDB",
      "Redis",
      "Socket.io",
      "Bull Queue",
      "JWT",
      "Grok AI",
      "Vercel",
      "Render",
    ],
    highlights: [
      "Built for 3 roles (Student, Coordinator, Alumni) with JWT-based RBAC, Google OAuth, and role-specific dashboards",
      "Real-time notification fanout to 500+ students using Socket.io + Bull queue with batched processing",
      "AI interview prep with live streaming responses (SSE) powered by Grok API, rate-limited via Redis",
    ],
    compactHighlights: [
      "3-role dashboards with JWT RBAC + Google OAuth",
      "Socket.io + Bull fanout to 500+ students",
      "Grok SSE interview prep with Redis rate limits",
    ],
    impact:
      "Replaced fragmented placement workflows with one production platform that improves communication velocity and preparation quality.",
    status: "Shipped",
    live: "https://www.avenor1.tech",
    github: "https://github.com/brahmjeetsingh2/avenor",
    metrics: ["3 user roles", "500+ fanout", "AI prep streaming"],
    mobileBadgeLimit: 8,
  },
  {
    index: "02",
    label: "Systems",
    title: "ChronoETL",
    subtitle: "Performance Engineering of ETL Pipelines in C++",
    copy:
      "A systematic ETL performance study across Sequential, Optimized, and Pipelined Multithreaded execution models on datasets from 500K to 2.5M records.",
    stack: "C++17 • Python 3 • ETL • Multithreading • Benchmarking",
    badges: [
      "C++17",
      "Python 3",
      "ETL",
      "Pipelined Parallelism",
      "Mutex + Condition Variables",
      "Benchmarking",
      "Throughput Analysis",
      "Chunk Tuning",
      "CSV Processing",
      "Performance Engineering",
    ],
    highlights: [
      "Compared three execution models: baseline sequential, optimized single-threaded, and pipeline multithreaded parallelism",
      "Ran chunk-granularity experiments (100-500 chunks) across 500K to 2.5M records to identify optimal throughput points",
      "Demonstrated that algorithmic and I/O optimization deliver major gains before concurrency, with measurable limits to parallel speedup",
    ],
    compactHighlights: [
      "3 execution models benchmarked end-to-end",
      "Chunk tuning (100-500) across 500K-2.5M records",
      "Measured speedups + practical multithreading limits",
    ],
    impact:
      "Produced reproducible benchmark insights for ETL scalability, throughput trade-offs, and concurrency design decisions.",
    status: "Complete",
    live: "#",
    github: "https://github.com/BrahmjeetSinghMatharu/ChronoETL",
    metrics: ["2.5M records", "1.439s best @ 500K", "6.621s best @ 2.5M"],
    mobileBadgeLimit: 7,
  },
  {
    index: "03",
    label: "Realtime",
    title: "YAPLY",
    subtitle: "Real-Time Chat Application (Full Stack) - September 2025",
    copy:
      "Created a full-stack real-time chat application using React, Node.js, Socket.IO, and MongoDB, supporting one-to-one and group chats, real-time updates, and persistent message history.",
    stack: "React • Node.js • Socket.IO • MongoDB • JWT • Redux",
    highlights: [
      "Created a full-stack real-time chat application supporting one-to-one and group chats with persistent message history",
      "Implemented JWT-based authentication, delivery/read receipts, and pagination for chat history",
      "Optimized database queries for reliable production performance and scalability",
    ],
    compactHighlights: [
      "1:1 + group chat with realtime updates",
      "JWT auth + delivery/read receipts",
      "Paginated history + optimized queries",
    ],
    impact:
      "Supports persistent history, read receipts, delivery status, and paginated chat with optimized database queries.",
    status: "Shipped",
    live: "#",
    github: "https://github.com/BrahmjeetsinghMatharu/Yaply",
    metrics: ["Realtime chat", "Group messaging", "Read receipts"],
  },
  {
    index: "04",
    label: "Vision",
    title: "Face Recognition Attendance System",
    mobileTitleClassName: "text-[clamp(1.05rem,4.6vw,1.5rem)] leading-[1.04]",
    desktopTitleClassName: "text-[clamp(1.55rem,4.2vw,2.75rem)] leading-[1.02]",
    subtitle: "Computer Vision, OpenCV - April 2025",
    copy:
      "Automated attendance tracking with real-time face recognition, capturing entry/exit logs with high accuracy and generating daily reports.",
    stack: "Python • OpenCV • face_recognition • KDTree • Pandas • Matplotlib • CSV",
    badges: [
      "Python",
      "OpenCV",
      "face_recognition",
      "KDTree",
      "Pandas",
      "Matplotlib",
      "CSV Logging",
      "Computer Vision",
      "Euclidean Distance",
      "Real-time Detection",
    ],
    highlights: [
      "Built a real-time face-recognition attendance pipeline with automated entry/exit marking and daily report generation",
      "Implemented fast matching via KDTree over face embeddings, with threshold-based Euclidean distance verification",
      "Added attendance visualization (counts + timeline) and practical optimizations like frame skipping for smoother runtime",
    ],
    compactHighlights: [
      "Realtime attendance + daily report generation",
      "KDTree embedding search for fast recognition",
      "CSV logs + timeline/count visual analytics",
    ],
    impact:
      "Reached near-99.9% recognition in controlled settings while replacing manual/proxy-prone attendance workflows.",
    status: "Shipped",
    live: "#",
    github: "https://github.com/BrahmjeetSinghMatharu/Attendance-System",
    metrics: ["99.9% accuracy", "Realtime matching", "Daily report exports"],
    mobileBadgeLimit: 7,
  },
];

const toExternalUrl = (url) => {
  if (!url || url === "#") return "#";
  if (/^https?:\/\//i.test(url)) return url;
  return `https://${url}`;
};

export default function HorizontalScroll() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const isSafari = isSafariBrowser();

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      const buildHorizontalAnimation = ({
        distanceMultiplier,
        viewportFactor,
        scrub,
      }) => {
        const track = scrollRef.current;
        if (!track) return () => {};

        const basePaddingRight = track.style.paddingRight;
        const computedPaddingRight = parseFloat(
          window.getComputedStyle(track).paddingRight || "0"
        );

        const cards = track.querySelectorAll("article");
        const lastCard = cards[cards.length - 1];

        if (!lastCard) return () => {};

        const viewportWidth = window.innerWidth;
        const mobileEdgePadding = Math.max(Math.round(viewportWidth * 0.06), 16);
        const centerTravel = Math.max(
          lastCard.offsetLeft + lastCard.offsetWidth / 2 - viewportWidth / 2,
          0
        );
        const fullVisibleTravel = Math.max(
          lastCard.offsetLeft + lastCard.offsetWidth - viewportWidth + mobileEdgePadding,
          0
        );

        const desiredTravel =
          viewportWidth < 768
            ? Math.max(centerTravel, fullVisibleTravel)
            : centerTravel;
        const maxTravelWithoutExtraPadding = Math.max(track.scrollWidth - window.innerWidth, 0);
        const extraRightPaddingNeeded = Math.max(
          desiredTravel - maxTravelWithoutExtraPadding,
          0
        );

        if (extraRightPaddingNeeded > 0) {
          track.style.paddingRight = `${computedPaddingRight + extraRightPaddingNeeded}px`;
        }

        const finalCenterTravel = Math.max(
          lastCard.offsetLeft + lastCard.offsetWidth / 2 - viewportWidth / 2,
          0
        );
        const finalFullVisibleTravel = Math.max(
          lastCard.offsetLeft + lastCard.offsetWidth - viewportWidth + mobileEdgePadding,
          0
        );
        const finalTravel =
          viewportWidth < 768
            ? Math.max(finalCenterTravel, finalFullVisibleTravel)
            : finalCenterTravel;

        const scrollDistance = Math.max(
          finalTravel * distanceMultiplier,
          window.innerWidth * viewportFactor
        );

        gsap.set(track, { x: 0 });

        const tween = gsap.to(track, {
          x: () => -finalTravel,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            scrub,
            pin: true,
            pinSpacing: true,
            anticipatePin: isSafari ? 0 : 1,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
          track.style.paddingRight = basePaddingRight;
        };
      };

      mm.add("(max-width: 767px)", () => {
        return buildHorizontalAnimation({
          distanceMultiplier: isSafari ? 1.35 : 1.6,
          viewportFactor: isSafari ? 2 : 2.4,
          scrub: isSafari ? 0.5 : 0.85,
        });
      });

      mm.add("(min-width: 768px)", () => {
        return buildHorizontalAnimation({
          distanceMultiplier: isSafari ? 1.1 : 1.38,
          viewportFactor: isSafari ? 1.65 : 2.15,
          scrub: isSafari ? 0.55 : 1.15,
        });
      });

      return () => mm.revert();
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="section-space scroll-mt-28 overflow-x-clip">
      <div className="section-shell mb-10">
        <motion.p
          className="section-kicker"
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          Selected Work
        </motion.p>
        <motion.h2
          className="section-title max-w-none"
          initial={{ opacity: 0, x: -42, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Projects in motion, not just stacked below the fold.
        </motion.h2>
        <motion.div
          className="mt-3 h-px w-44 bg-[linear-gradient(90deg,rgba(0,113,227,0.95),rgba(255,255,255,0.06),transparent)]"
          initial={{ opacity: 0, scaleX: 0, transformOrigin: "left center" }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
        />
      </div>

      <div ref={containerRef} className="relative h-[96svh] overflow-hidden pt-16 max-[390px]:h-[93svh] max-[390px]:pt-14 max-[375px]:h-[92svh] max-[375px]:pt-13 max-[360px]:h-[91svh] max-[360px]:pt-12 md:h-svh md:pt-24">
        <div
          ref={scrollRef}
          className="flex h-[calc(84svh-6.5rem)] items-center gap-6 pl-[6vw] pr-[16vw] max-[390px]:h-[calc(82svh-6rem)] max-[390px]:gap-4 max-[390px]:pl-[4.5vw] max-[390px]:pr-[14vw] max-[375px]:h-[calc(81svh-5.9rem)] max-[375px]:pl-[4vw] max-[375px]:pr-[13.5vw] max-[360px]:h-[calc(80svh-5.75rem)] max-[360px]:pl-[3.8vw] max-[360px]:pr-[13vw] sm:h-[calc(88svh-6.5rem)] sm:gap-10 sm:pl-[9vw] sm:pr-[18vw] md:h-[calc(100svh-9rem)] md:items-stretch md:gap-12 md:pl-[12vw] md:pr-[16vw] lg:gap-24 lg:pl-[14vw] lg:pr-[18vw]"
        >
          {panels.map((panel) => (
            (() => {
              const MOBILE_BADGE_TARGET = 6;
              const mobileBadgesSource = panel.badges ?? panel.stack.split(" • ");
              const mobileBadgeLimit = Math.min(
                panel.mobileBadgeLimit ?? mobileBadgesSource.length,
                MOBILE_BADGE_TARGET
              );
              const mobileBadges =
                mobileBadgesSource.length > mobileBadgeLimit
                  ? [
                      ...mobileBadgesSource.slice(0, mobileBadgeLimit),
                      `+${mobileBadgesSource.length - mobileBadgeLimit}`,
                    ]
                  : mobileBadgesSource;

              const mobileHighlights = panel.compactHighlights ?? panel.highlights ?? panel.metrics;
              const mobileHighlightItems = mobileHighlights.slice(0, 2);
              const hasLiveDemo = Boolean(panel.live && panel.live !== "#");

              return (
            <motion.article
              key={panel.title}
              className="flex h-auto w-[84vw] max-w-230 min-w-[84vw] shrink-0 items-stretch max-[390px]:w-[85vw] max-[390px]:min-w-[85vw] max-[375px]:w-[86vw] max-[375px]:min-w-[86vw] max-[360px]:w-[88vw] max-[360px]:min-w-[88vw] sm:w-[80vw] sm:min-w-[80vw] md:h-full md:w-[76vw] md:min-w-170 lg:w-[72vw] lg:min-w-190"
            >
              <div className="project-showcase project-noise glass-panel flex h-full w-full flex-col justify-start gap-3 rounded-4xl p-4 max-[390px]:gap-2.5 max-[390px]:p-3.5 max-[375px]:gap-2 max-[375px]:p-3 max-[360px]:p-2.5 sm:p-5 md:h-full md:max-h-none md:justify-between md:gap-0 md:rounded-[2.4rem] md:p-8 lg:p-10">
                <div className="project-showcase-grid pointer-events-none absolute inset-0 opacity-50" />
                <div className="project-showcase-glow pointer-events-none absolute -right-16 top-8 h-64 w-64 rounded-full bg-[rgba(0,113,227,0.32)] blur-3xl" />
                <div className="project-showcase-glow pointer-events-none absolute bottom-0 left-10 h-48 w-48 rounded-full bg-[rgba(0,113,227,0.16)] blur-3xl" />
                <div className="project-showcase-glow pointer-events-none absolute left-[32%] top-[24%] h-36 w-36 rounded-full bg-[rgba(85,170,255,0.12)] blur-3xl" />

                <div className="flex items-center justify-between">
                  <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-(--accent)">
                    Case Study {panel.index}
                  </p>
                  <span className="rounded-full border border-[rgba(0,113,227,0.18)] bg-[rgba(0,113,227,0.08)] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/72">
                    {panel.status}
                  </span>
                </div>

                <div className="relative mt-3 min-h-0 space-y-2.5 max-[390px]:space-y-2 overflow-visible pr-1 max-[390px]:pr-0.5 md:hidden">
                  <motion.div
                    className="pointer-events-none absolute inset-0 rounded-[1.3rem] border border-white/8"
                    animate={{ opacity: [0.35, 0.65, 0.35] }}
                    transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="pointer-events-none absolute -left-6 top-2 h-[60%] w-16 rounded-full bg-[rgba(86,170,255,0.22)] blur-xl"
                    animate={{ x: [0, 6, 0], opacity: [0.4, 0.75, 0.4] }}
                    transition={{ repeat: Infinity, duration: 4.4, ease: "easeInOut" }}
                  />

                  <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02)_44%,rgba(0,113,227,0.13))] px-3.5 py-3 shadow-[0_16px_36px_rgba(0,0,0,0.28)]">
                    <motion.div
                      className="pointer-events-none absolute -left-8 top-0 h-full w-20 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.24),transparent)]"
                      animate={{ x: [0, 220, 0], opacity: [0, 0.55, 0] }}
                      transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
                    />
                    <div className="pointer-events-none absolute left-2 top-2 h-4 w-4 rounded-tl-md border-l border-t border-white/25" />
                    <div className="pointer-events-none absolute bottom-2 right-2 h-4 w-4 rounded-br-md border-b border-r border-[rgba(0,113,227,0.4)]" />
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/48">
                        {panel.label}
                      </p>
                      <span className="rounded-full border border-[rgba(0,113,227,0.34)] bg-[rgba(0,113,227,0.14)] px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-white/78">
                        Premium Build
                      </span>
                    </div>
                    <h3 className={`mt-2 line-clamp-2 min-h-[2.3em] font-semibold tracking-[-0.035em] text-white ${panel.mobileTitleClassName ?? "text-[clamp(1.2rem,5.4vw,1.85rem)] leading-[0.98]"}`}>
                      {panel.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 min-h-[2.55em] text-[12px] leading-4.75 text-white/74">
                      {panel.subtitle ?? panel.copy}
                    </p>
                    {panel.subtitle ? (
                      <p className="mt-1 line-clamp-2 min-h-[2.35em] text-[10.5px] leading-4 text-white/56">
                        {panel.copy}
                      </p>
                    ) : null}
                  </div>

                  <div className="rounded-[1.15rem] border border-white/10 bg-black/20 px-3.5 py-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-(--accent)">
                      Key Highlights
                    </p>
                    <div className="mt-2 space-y-1.25 min-h-[5.35rem]">
                      {mobileHighlightItems.map((item) => (
                        <p key={`${panel.title}-mobile-highlight-${item}`} className="line-clamp-2 min-h-[2.15rem] text-[11px] leading-4.25 text-white/78">
                          <span className="mr-1.5 text-(--accent)">-</span>
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {mobileBadges.map((item) => (
                      <span
                        key={`${panel.title}-badge-mobile-${item}`}
                        className="rounded-full border border-white/10 bg-[rgba(0,113,227,0.08)] px-2 py-1 text-[8.5px] uppercase tracking-[0.12em] text-white/76"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex min-h-[2.7rem] flex-wrap items-start gap-2.5">
                    {hasLiveDemo ? (
                      <a
                        href={toExternalUrl(panel.live)}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex w-fit items-center rounded-full border border-[rgba(0,113,227,0.35)] bg-[linear-gradient(135deg,rgba(0,113,227,0.82),rgba(41,151,255,0.94))] px-4 py-2 text-[11px] font-medium text-white/96 transition duration-300 hover:border-[rgba(0,113,227,0.55)] hover:brightness-110"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <span
                        aria-disabled="true"
                        className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/3 px-4 py-2 text-[11px] font-medium text-white/45"
                      >
                        Live Demo
                      </span>
                    )}
                    <a
                      href={toExternalUrl(panel.github)}
                      target={panel.github && panel.github !== "#" ? "_blank" : undefined}
                      rel={panel.github && panel.github !== "#" ? "noreferrer" : undefined}
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/4 px-4 py-2 text-[11px] font-medium text-white/86 transition duration-300 hover:border-white/20 hover:bg-white/10"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="relative z-10 hidden h-full gap-6 md:grid md:gap-8 lg:grid-cols-[1.08fr_0.92fr]">
                  <div className="max-w-3xl">
                      <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025)_42%,rgba(0,113,227,0.14))] px-5 py-4 shadow-[0_18px_44px_rgba(0,0,0,0.28)]">
                        <motion.div
                          className="pointer-events-none absolute -left-20 top-0 h-full w-24 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)]"
                          animate={{ x: [0, 420, 0], opacity: [0, 0.55, 0] }}
                          transition={{ repeat: Infinity, duration: 5.8, ease: "easeInOut" }}
                        />

                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span className="h-px w-12 bg-[linear-gradient(90deg,rgba(0,113,227,0.9),transparent)]" />
                            <p className="text-[11px] uppercase tracking-[0.22em] text-white/44">
                              {panel.label}
                            </p>
                          </div>
                          <span className="rounded-full border border-[rgba(0,113,227,0.34)] bg-[rgba(0,113,227,0.14)] px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/84">
                            Premium Build
                          </span>
                        </div>

                        <h3 className={`mt-3 font-medium tracking-[-0.05em] lg:mt-4 ${panel.desktopTitleClassName ?? "text-[clamp(2rem,7.6vw,3.6rem)] leading-[0.94] lg:text-6xl"}`}>
                          {panel.title}
                        </h3>
                        {panel.subtitle ? (
                          <p className="mt-2 max-w-2xl text-[13px] leading-5 text-white/62">
                            {panel.subtitle}
                          </p>
                        ) : null}
                        <p className="mt-3 max-w-2xl text-[14.5px] leading-6.5 text-(--muted)">
                          {panel.copy}
                        </p>
                    </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                      {(panel.badges ?? panel.stack.split(" • ")).map((item) => (
                        <span
                          key={`${panel.title}-badge-${item}`}
                            className="rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.022))] px-3 py-1.5 text-[10.5px] uppercase tracking-[0.14em] text-white/70"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                      {panel.metrics.map((item) => (
                        <span
                          key={`${panel.title}-metric-${item}`}
                            className="rounded-full border border-[rgba(0,113,227,0.28)] bg-[rgba(0,113,227,0.14)] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white/84"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex h-full flex-col justify-end gap-4">
                    <motion.div
                        className="relative overflow-hidden rounded-[1.7rem] border border-white/12 bg-[linear-gradient(170deg,rgba(255,255,255,0.06),rgba(0,0,0,0.18)_42%,rgba(0,113,227,0.14))] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.24)]"
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                    >
                        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)]" />
                      <p className="text-[11px] uppercase tracking-[0.18em] text-(--accent)">
                        Key Highlights
                      </p>
                      <div className="mt-3 space-y-3">
                        {(panel.highlights ?? [panel.impact]).map((item) => (
                            <p key={`${panel.title}-desktop-highlight-${item}`} className="text-sm leading-6 text-white/86">
                            <span className="mr-2 text-(--accent)">-</span>
                            {item}
                          </p>
                        ))}
                      </div>
                    </motion.div>

                    <div className="flex flex-wrap gap-2.5">
                      {panel.live && panel.live !== "#" ? (
                        <a
                          href={toExternalUrl(panel.live)}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="inline-flex w-fit items-center rounded-full border border-[rgba(0,113,227,0.42)] bg-[linear-gradient(180deg,rgba(0,113,227,0.28),rgba(0,113,227,0.18))] px-4 py-2 text-sm font-medium text-white/95 transition duration-300 hover:border-[rgba(0,113,227,0.65)] hover:bg-[linear-gradient(180deg,rgba(0,113,227,0.36),rgba(0,113,227,0.22))]"
                        >
                          Live Demo
                        </a>
                      ) : null}

                      <a
                        href={toExternalUrl(panel.github)}
                        target={panel.github && panel.github !== "#" ? "_blank" : undefined}
                        rel={panel.github && panel.github !== "#" ? "noreferrer" : undefined}
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex w-fit items-center rounded-full border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-4 py-2 text-sm font-medium text-white/90 transition duration-300 hover:border-white/28 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.05))]"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
              );
            })()
          ))}
        </div>
      </div>
    </section>
  );
}
