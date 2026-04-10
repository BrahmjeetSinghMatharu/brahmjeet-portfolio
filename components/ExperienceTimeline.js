"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const journeySummary = [
  {
    label: "Foundation",
    copy: "Built on C, C++, data structures, and disciplined systems thinking.",
  },
  {
    label: "Execution",
    copy: "Shipped AI pipelines, realtime products, and performance-oriented systems.",
  },
  {
    label: "Direction",
    copy: "Now focused on production-grade software, scalable AI architecture, and systems-level engineering.",
  },
];

const experiences = [
  {
    period: "Auraflo",
    title: "AI/ML Intern & Team Co-Lead",
    copy:
      "Worked on multimodal AI delivery, contributed to production-minded intelligence systems, and helped lead execution across the team with sharper technical coordination.",
    impact: "Improved onboarding flow and documentation quality while shipping real AI work.",
  },
  {
    period: "ELC",
    title: "AI & MERN Stack Developer Intern",
    copy:
      "Built across full-stack product development and AI-backed workflows, moving between backend logic, application features, and practical delivery.",
    impact: "Strengthened end-to-end engineering across MERN applications and applied AI implementation.",
  },
];

function ExperienceItem({ item, index }) {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 78%", "start 34%"],
  });

  const dotScale = useTransform(scrollYProgress, [0, 1], [0.45, 1]);
  const dotOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 1]);
  const cardY = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.04, 0.14]);

  return (
    <motion.article
      ref={itemRef}
      key={item.title}
      className="mobile-premium-card-light journey-card journey-experience-card relative overflow-hidden rounded-[1.8rem] border border-black/8 bg-white/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:p-7"
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      style={{ y: cardY, opacity: cardOpacity }}
      whileHover={{ y: -6 }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.5),transparent_36%,rgba(0,113,227,0.1))]" />
      <motion.div
        className="pointer-events-none absolute -right-10 top-0 h-28 w-28 rounded-full bg-[rgba(0,113,227,0.12)] blur-3xl"
        style={{ opacity: glowOpacity }}
      />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(0,113,227,0.42),transparent)]" />
      <span className="journey-dot absolute top-7 -left-[2.1rem] flex h-4 w-4 items-center justify-center rounded-full">
        <motion.span
          className="journey-dot-fill h-2 w-2 rounded-full"
          style={{ scale: dotScale, opacity: dotOpacity }}
        />
        <motion.span
          className="journey-dot-ring absolute inset-0 rounded-full"
          style={{ scale: useTransform(scrollYProgress, [0, 1], [0.8, 1.25]), opacity: useTransform(scrollYProgress, [0, 1], [0, 0.5]) }}
        />
      </span>
      <p className="journey-period relative font-mono text-[11px] uppercase tracking-[0.3em] text-(--accent)">
        {item.period}
      </p>
      <h3 className="journey-card-title relative mt-3 text-2xl font-medium tracking-[-0.04em] text-black">
        {item.title}
      </h3>
      <p className="journey-card-copy relative mt-4 text-[15px] leading-7 text-black/65">
        {item.copy}
      </p>
      <div className="relative mt-4 rounded-[1.1rem] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(245,247,250,0.78))] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
          Impact
        </p>
        <p className="mt-2 text-sm leading-6 text-black/62">
          {item.impact}
        </p>
      </div>
    </motion.article>
  );
}

export default function ExperienceTimeline() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 72%", "end 70%"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 22,
    mass: 0.25,
  });

  return (
    <section
      id="journey"
      className="journey-section section-space relative my-12 scroll-mt-28 overflow-hidden bg-white text-black"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-8%] h-64 w-64 rounded-full bg-[rgba(0,113,227,0.08)] blur-3xl" />
        <div className="absolute -bottom-16 left-[-6%] h-56 w-56 rounded-full bg-[rgba(0,0,0,0.05)] blur-3xl" />
      </div>

      <div className="section-shell relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-kicker journey-kicker text-black/55">
            Engineering Journey
          </p>
          <h2 className="section-title journey-title max-w-[11ch] text-black">
            Experience built alongside the systems I ship.
          </h2>
          <p className="section-copy journey-copy mt-6 text-black/70">
            From strong systems fundamentals to internships, shipped products,
            and technical leadership, the journey is now less about theory and
            more about real execution in environments that demand delivery.
          </p>

          <div className="mt-7 grid gap-3">
            {journeySummary.map((item, index) => (
              <motion.div
                key={item.label}
                className="mobile-premium-card-light journey-card rounded-[1.35rem] border border-black/8 bg-white/88 px-4 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
              >
                <p className="journey-period font-mono text-[10px] uppercase tracking-[0.28em] text-(--accent)">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-black/66">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div ref={timelineRef} className="relative pl-8">
          <div className="timeline-line journey-line" />
          <motion.div
            className="journey-progress absolute left-[0.45rem] top-0 w-1.25 origin-top rounded-full"
            style={{ scaleY: lineScale, opacity: useTransform(scrollYProgress, [0, 0.12, 1], [0.45, 0.85, 1]) }}
          />

          <div className="space-y-6">
            {experiences.map((item, index) => (
              <ExperienceItem key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
