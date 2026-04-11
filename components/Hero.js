"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

const PROFILE_IMAGE = "/brahmjeet_pic.jpg";

const heroStats = [
  { value: "Full-Stack", label: "Tech Stack Depth" },
  { value: "02",   label: "Internships" },
      { value: "10+",  label: "Projects" },
];

const roles = ["Full-Stack Engineer", "AI/ML Builder", "Systems Architect","Software Engineer"];

// ── Motion variants ───────────────────────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.94, filter: "blur(10px)" },
  show: {
    opacity: 1, scale: 1, filter: "blur(0px)",
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
  },
};

// ── Chip data ─────────────────────────────────────────────────
const chips = [
  { icon: "⬡", label: "Systems" },
  { icon: "◈", label: "Products" },
  { icon: "◎", label: "AI / ML" },
];

const heroStyles = `
  @keyframes mobile-photo-float {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-6px) scale(1.02); }
  }
  @keyframes mobile-photo-sheen {
    0% { transform: translateX(-130%); opacity: 0; }
    35% { opacity: 0.42; }
    100% { transform: translateX(140%); opacity: 0; }
  }
  .hero-name {
    background: linear-gradient(90deg, rgba(0,113,227,1), rgba(126,196,255,0.96), rgba(224,240,255,0.9));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .hero-role-pill {
    display: inline-flex;
    align-items: center;
    color: rgba(255,255,255,0.82);
    text-shadow: 0 0 24px rgba(0,113,227,0.14);
  }
  .chip {
    border: 1px solid rgba(0,113,227,0.14);
    background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,113,227,0.05));
    transition: border-color 90ms ease-out, background 90ms ease-out,
                box-shadow 90ms ease-out;
  }
  .chip:hover {
    border-color: rgba(0,113,227,0.55);
    background: rgba(0,113,227,0.12);
    box-shadow: 0 0 24px rgba(0,113,227,0.22);
  }
  .cta-primary {
    background: linear-gradient(135deg, rgba(0,113,227,1), rgba(41,151,255,0.98));
    box-shadow: 0 12px 28px rgba(0,113,227,0.26);
    transition: transform 110ms ease-out, background 110ms ease-out,
                box-shadow 110ms ease-out;
  }
  .cta-primary:hover {
    transform: translateY(-1px) scale(1.02);
    box-shadow: 0 0 30px rgba(0,113,227,0.38);
  }
  .cta-ghost {
    border-color: rgba(86,170,255,0.2);
    background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(0,113,227,0.06));
    transition: background 100ms ease-out, border-color 100ms ease-out,
                transform 100ms ease-out;
  }
  .cta-ghost:hover {
    background: rgba(0,113,227,0.12);
    border-color: rgba(86,170,255,0.35);
    transform: translateY(-1px);
  }
  .stat-item {
    border: 1px solid rgba(0,113,227,0.12);
    background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,113,227,0.04));
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.04);
    transition: transform 120ms ease-out, border-color 120ms ease-out,
                background 120ms ease-out, opacity 100ms ease-out;
  }
  .stat-item:hover {
    opacity: 1;
    transform: translateY(-2px);
    border-color: rgba(0,113,227,0.26);
    background: linear-gradient(180deg, rgba(255,255,255,0.055), rgba(0,113,227,0.07));
  }
  .hero-kpi-card {
    position: relative;
    overflow: hidden;
  }
  .hero-kpi-card::before {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.08), transparent 36%, rgba(0,113,227,0.1));
    opacity: 0.9;
    content: "";
    pointer-events: none;
  }
  .hero-kpi-top {
    display: flex;
    align-items: center;
    gap: 0.45rem;
  }
  .hero-kpi-dot {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 999px;
    background: rgba(0,113,227,0.95);
    box-shadow: 0 0 12px rgba(0,113,227,0.42);
  }
  .hero-kpi-label {
    margin: 0;
    font-size: 9px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.52);
  }
  .hero-kpi-value {
    margin-top: 0.55rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.04em;
    color: #fff;
    font-size: clamp(1.35rem, 2.05vw, 1.86rem);
  }
  .hero-kpi-glow {
    position: absolute;
    width: 54px;
    height: 54px;
    border-radius: 999px;
    right: -18px;
    bottom: -16px;
    background: radial-gradient(circle, rgba(0,113,227,0.34), transparent 68%);
    pointer-events: none;
  }
  @media (max-width: 767px) {
    .mobile-photo-frame img {
      animation: mobile-photo-float 5.6s ease-in-out infinite;
      transform-origin: center top;
    }
    .mobile-photo-sheen {
      animation: mobile-photo-sheen 4.6s ease-in-out infinite;
    }
    .hero-kpi-card {
      border-color: rgba(255,255,255,0.15);
      border-radius: 1.05rem;
      background:
        linear-gradient(165deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02) 45%, rgba(0,113,227,0.18)),
        rgba(12,12,15,0.8);
      box-shadow: 0 14px 30px rgba(0,0,0,0.32);
      padding: 0.82rem 0.9rem;
    }
    .hero-kpi-value {
      font-size: clamp(1.42rem, 6.2vw, 1.8rem);
    }
    .hero-kpi-label {
      font-size: 8px;
      letter-spacing: 0.16em;
    }
  }
`;

export default function Hero() {
  const [imageReady, setImageReady] = useState(true);
  const [roleIdx, setRoleIdx] = useState(0);
  const [typedRole, setTypedRole] = useState(roles[0]);
  const prefersReducedMotion = useReducedMotion();
  const displayedRole = prefersReducedMotion ? roles[roleIdx] : typedRole;

  // Cursor orb — only animate it when motion is appropriate.
  const mouseX = useMotionValue(400);
  const mouseY = useMotionValue(300);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 28, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    mouseX.set(window.innerWidth / 2 - 200);
    mouseY.set(window.innerHeight / 2 - 200);

    if (prefersReducedMotion) return undefined;

    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (!hasFinePointer) return undefined;

    const move = (e) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", move, { passive: true });

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    let timeoutId;
    let currentIndex = 0;
    const currentRole = roles[roleIdx];

    const typeNextCharacter = () => {
      currentIndex += 1;
      setTypedRole(currentRole.slice(0, currentIndex));

      if (currentIndex < currentRole.length) {
        timeoutId = setTimeout(typeNextCharacter, 55);
        return;
      }

      timeoutId = setTimeout(() => {
        setRoleIdx((index) => (index + 1) % roles.length);
      }, 1200);
    };

    timeoutId = setTimeout(() => {
      setTypedRole("");
      typeNextCharacter();
    }, 120);

    return () => clearTimeout(timeoutId);
  }, [prefersReducedMotion, roleIdx]);

  const handleSectionScroll = (event, selector) => {
    const target = document.querySelector(selector);
    if (!target) return;

    event.preventDefault();
    const y = target.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({
      top: Math.max(0, y),
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>{heroStyles}</style>

      <section
        id="home"
        className="relative w-full min-h-svh scroll-mt-28 overflow-hidden lg:h-svh"
      >
        {/* ── Cursor orb ─────────────────────────────────────── */}
        {!prefersReducedMotion ? (
          <motion.div
            className="hero-orb pointer-events-none absolute z-0 h-100 w-100 rounded-full"
            style={{
              x: springX,
              y: springY,
              background:
                "radial-gradient(circle, rgba(0,113,227,0.22) 0%, transparent 68%)",
              filter: "blur(50px)",
            }}
          />
        ) : null}

        {/* ── Atmosphere ─────────────────────────────────────── */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[2%] top-[8%]  h-96 w-96 rounded-full bg-[rgba(0,113,227,0.10)] blur-[110px]" />
          <div className="absolute right-[4%] bottom-[8%] h-72 w-72 rounded-full bg-[rgba(0,113,227,0.07)] blur-[95px]" />
          {/* Noise grain */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              backgroundSize: "128px",
            }}
          />
          {/* Horizontal rule under nav */}
          <div className="absolute inset-x-0 top-18 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.09),transparent)]" />
          {/* Subtle diagonal vignette */}
          <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(0,0,0,0.08),rgba(0,0,0,0.78)_44%,rgba(0,0,0,0.97))]" />
        </div>

        {/* ══════════════════ MAIN GRID ═══════════════════════ */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 grid w-full grid-cols-1 items-center gap-10 px-[clamp(18px,5.5vw,72px)] pb-8 pt-21.5 max-[390px]:gap-8 max-[390px]:pt-20.5 max-[375px]:gap-7 max-[375px]:pt-20 max-[360px]:gap-6 max-[360px]:pt-19 lg:h-full lg:grid-cols-[1.12fr_0.88fr] lg:gap-[clamp(28px,4vw,60px)] lg:pb-5 lg:pt-18"
          style={{
            paddingLeft: "clamp(18px, 5.5vw, 72px)",
            paddingRight: "clamp(18px, 5.5vw, 72px)",
          }}
        >
          {/* ═══════════ LEFT ═══════════ */}
          <div className="flex max-w-160 flex-col justify-center max-[375px]:max-w-full lg:max-w-160">

            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
              <motion.span
                className="block h-px bg-(--accent)"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 56, opacity: 0.72 }}
                transition={{ delay: 0.45, duration: 0.65, ease: "easeOut" }}
              />
              <span className="hero-name text-[11px] uppercase tracking-[0.34em]">
                Brahmjeet Singh
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="max-w-[11ch] font-bold leading-[0.91] tracking-[-0.06em] text-white sm:max-w-[10ch]"
              style={{
                fontSize: "clamp(2.25rem, 8.6vw, 4.85rem)",
                marginBottom: "clamp(14px, 2vh, 26px)",
              }}
            >
              Building systems
              <br />
              with{" "}
              <span className="gradient-text">intelligent</span>
              <br />
              execution.
            </motion.h1>

            {/* Cycling role */}
            <motion.div
              variants={fadeUp}
              className="mb-5 overflow-hidden"
              style={{ height: "clamp(30px, 3vh, 38px)" }}
            >
              <motion.span
                className="hero-role-pill block max-w-full text-[11.5px] font-extrabold uppercase tracking-[0.14em] sm:text-[13px] sm:tracking-[0.2em] md:text-[14px]"
              >
                {displayedRole}
                {!prefersReducedMotion ? (
                  <span className="ml-1 inline-block h-[1em] w-px animate-pulse bg-white/70" />
                ) : null}
              </motion.span>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="text-(--muted) leading-[1.72]"
              style={{
                fontSize: "clamp(13px, 1.1vw, 15px)",
                maxWidth: "500px",
                marginBottom: "clamp(22px, 2.8vh, 36px)",
              }}
            >
              CSE student at TIET. I ship end-to-end web platforms and
              AI&#8209;powered pipelines — real-time systems to
              edge-optimised ML. Depth and delivery, together.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mb-8 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <MagneticButton>
                <a
                  href="#process"
                  onClick={(event) => handleSectionScroll(event, "#process")}
                  className="cta-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-white max-[390px]:px-4.5 max-[390px]:py-2.25 max-[375px]:px-4 max-[375px]:text-[10.5px] max-[360px]:px-3.5 max-[360px]:text-[10px] sm:px-7 sm:py-3 sm:text-[13px] sm:tracking-[0.12em]"
                >
                  View Work
                </a>
              </MagneticButton>
              <a
                href="https://drive.google.com/file/d/1nj4kDAQZm1tEtnxOneY5AdusilZwBwIE/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="cta-ghost inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-[11px] font-medium uppercase tracking-widest text-(--text) max-[390px]:px-4.5 max-[390px]:py-2.25 max-[375px]:px-4 max-[375px]:text-[10.5px] max-[360px]:px-3.5 max-[360px]:text-[10px] sm:px-7 sm:py-3 sm:text-[13px] sm:tracking-[0.12em]"
              >
                View Resume
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="grid max-w-130 grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="mobile-premium-card premium-blue-card stat-item hero-kpi-card rounded-[1.35rem] px-4 py-4"
                  >
                    <div className="hero-kpi-top">
                      <span className="hero-kpi-dot" />
                      <p className="hero-kpi-label">{stat.label}</p>
                    </div>
                    <div className="hero-kpi-value">
                      {stat.value}
                    </div>
                    <div className="hero-kpi-glow" />
                  </div>
              ))}
            </motion.div>
          </div>

          {/* ═══════════ RIGHT ═══════════ */}
          <motion.div
            variants={fadeIn}
            className="relative mx-auto flex h-full w-full max-w-145 items-center justify-center lg:mx-0 lg:max-w-none"
          >
            {/* Breathing ring */}
            <motion.div
              className="absolute inset-0 rounded-[2.6rem] pointer-events-none"
                animate={{
                  boxShadow: [
                    "0 0 0px  rgba(0,113,227,0)",
                    "0 0 84px rgba(0,113,227,0.2)",
                    "0 0 0px  rgba(0,113,227,0)",
                  ],
                }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { repeat: Infinity, duration: 3.9, ease: "easeInOut" }
              }
            />

            {/* Card shell */}
            <div
              className="premium-blue-panel glass-panel relative w-full overflow-hidden rounded-[2.4rem]"
              style={{ padding: "clamp(10px, 1.3vw, 18px)" }}
            >
              {/* Shimmer top edge */}
              <motion.div
                className="absolute inset-x-10 top-0 h-px"
                animate={{
                  background: [
                    "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)",
                    "linear-gradient(90deg,transparent,rgba(255,255,255,0.28),transparent)",
                    "linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 3.8 }}
              />

              <div
                className="rounded-4xl border border-white/[0.07] bg-[linear-gradient(180deg,rgba(15,15,17,0.99),rgba(6,6,8,1))]"
                style={{ padding: "clamp(12px, 1.3vw, 20px)" }}
              >
                {/* ── Photo banner ── */}
                <div className="relative mb-3.5">
                  <div
                    className="mobile-photo-frame relative aspect-[4/4.9] overflow-hidden rounded-[1.6rem] border border-white/8 md:aspect-4/3"
                  >
                    {imageReady ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={PROFILE_IMAGE}
                          alt="Brahmjeet Singh"
                          className="h-full w-full object-cover object-top"
                          onError={() => setImageReady(false)}
                        />
                        <div className="mobile-photo-sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] md:hidden" />
                        {/* Vignette */}
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_22%,rgba(0,0,0,0.72))]" />
                        {/* Scanlines */}
                        <motion.div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background:
                              "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.018) 4px)",
                          }}
                          animate={
                            prefersReducedMotion
                              ? { backgroundPositionY: "0px" }
                              : { backgroundPositionY: ["0px", "800px"] }
                          }
                          transition={
                            prefersReducedMotion
                              ? { duration: 0 }
                              : {
                                  repeat: Infinity,
                                  duration: 10,
                                  ease: "linear",
                                }
                          }
                        />
                        {/* Corner accent */}
                        <div className="absolute top-3 right-3 h-5 w-5 border-t border-r border-white/20 rounded-tr-sm" />
                        <div className="absolute top-3 left-3 h-5 w-5 border-t border-l border-white/20 rounded-tl-sm" />
                      </>
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(0,113,227,0.18),transparent_60%),linear-gradient(180deg,#0d0e10,#161820)]">
                        <div className="text-center">
                          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/4 text-lg font-semibold text-white/75">
                            BS
                          </div>
                          <p className="mt-3 text-[9px] uppercase tracking-[0.24em] text-white/28">
                            Add profile image
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Name overlay */}
                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.22em] text-white/42 mb-0.5">
                          CSE · TIET
                        </p>
                        <p className="text-[14px] font-semibold text-white leading-none tracking-[-0.025em]">
                          Brahmjeet Singh
                        </p>
                      </div>
                      <span className="rounded-full border border-white/10 bg-black/55 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/62 backdrop-blur-md">
                        Full-Stack + AI
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Chips ── */}
                <div className="mb-3.5 grid grid-cols-3 gap-2">
                  {chips.map((item, i) => (
                    <motion.div
                      key={item.label}
                      className="chip flex flex-col items-center gap-1.5 rounded-2xl py-3 cursor-default"
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.7 + i * 0.09,
                        duration: 0.55,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <span className="text-(--accent) text-[14px] leading-none">
                        {item.icon}
                      </span>
                      <span className="text-[9.5px] uppercase tracking-[0.18em] text-white/48">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* ── Status bar ── */}
                <div className="flex flex-wrap items-center justify-between gap-2 rounded-[0.9rem] border border-white/[0.07] bg-white/[0.016] px-4 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-1.75 w-1.75">
                      <motion.span
                        className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-65"
                        animate={
                          prefersReducedMotion
                            ? { scale: 1, opacity: 0.65 }
                            : { scale: [1, 2.3, 1], opacity: [0.65, 0, 0.65] }
                        }
                        transition={
                          prefersReducedMotion
                            ? { duration: 0 }
                            : { repeat: Infinity, duration: 2.2 }
                        }
                      />
                      <span className="relative inline-flex h-1.75 w-1.75 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-[10.5px] text-white/48 tracking-[0.06em]">
                      Open to opportunities
                    </span>
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/22">
                    2025
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -right-3 bottom-[14%] hidden xl:block z-20"
              style={{ padding: "11px 15px" }}
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.35, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="pointer-events-none absolute -inset-5 -z-10 rounded-[1.8rem] bg-[radial-gradient(circle_at_28%_42%,rgba(255,255,255,0.22),transparent_36%),radial-gradient(circle_at_78%_72%,rgba(0,113,227,0.34),transparent_56%)] blur-3xl" />
              <motion.div
                className="relative overflow-hidden rounded-[1.2rem] border border-white/14 bg-[linear-gradient(180deg,rgba(16,18,24,0.82),rgba(10,12,18,0.9))] shadow-[0_18px_40px_rgba(0,0,0,0.32)] backdrop-blur-xl"
                animate={prefersReducedMotion ? { y: 0 } : { y: [0, -8, 0] }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { repeat: Infinity, duration: 5.5, ease: "easeInOut" }
                }
                style={{ padding: "11px 15px" }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_34%,rgba(0,113,227,0.12))]" />
                <div className="pointer-events-none absolute inset-0 backdrop-blur-[14px]" />
                <p className="relative text-[9px] uppercase tracking-[0.22em] text-(--accent) mb-1.5">
                  Currently
                </p>
                <p className="relative max-w-38.75 text-[11px] font-medium leading-[1.55] text-white/84">
                  Deepening systems programming &amp; scalable AI architecture.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
