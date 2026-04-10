"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    index: "01",
    title: "ChronoETL",
    summary:
      "A high-performance, multithreaded ETL pipeline engineered in modern C++ for million-scale data processing.",
    stack: "C++ • std::thread • Mutexes • Condition Variables • Pipeline Architecture",
    impact:
      "Evolved from sequential to cache-optimized multithreaded execution across 2.5M+ records, benchmarked for optimal chunk granularity and scalability limits.",
    role: "Systems engineering",
    highlightLabel: "Engineering focus",
    highlights: [
      "Cache-aware worker scheduling",
      "Chunk sizing tuned against throughput bottlenecks",
      "Pipeline stages designed for predictable scaling",
    ],
    metrics: ["2.5M+ records", "Multithreaded", "Cache-optimized"],
    theme: {
      accent: "#7cc7ff",
      accentSoft: "rgba(0, 113, 227, 0.14)",
      border: "rgba(124, 199, 255, 0.18)",
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.065), rgba(255,255,255,0.028))",
      glow:
        "radial-gradient(circle at 18% 16%, rgba(0,113,227,0.2), transparent 34%), radial-gradient(circle at 82% 14%, rgba(124,199,255,0.14), transparent 28%)",
    },
    github: null,
    live: null,
    status: "Shipped",
  },
  {
    index: "02",
    title: "YAPLY",
    summary:
      "A production-grade real-time chat application with one-to-one and group messaging, built for reliability and scale.",
    stack: "React • Node.js • Socket.IO • MongoDB • JWT • Redux",
    impact:
      "Supports persistent message history, read receipts, delivery status, and paginated chat with performance-optimized database queries.",
    role: "Product engineering",
    highlightLabel: "Realtime features",
    highlights: [
      "Persistent chat history with reliable delivery state",
      "Group and one-to-one messaging flows",
      "Backend queries optimized for smoother pagination",
    ],
    metrics: ["Realtime chat", "Group messaging", "Read receipts"],
    theme: {
      accent: "#56b7ff",
      accentSoft: "rgba(41, 151, 255, 0.16)",
      border: "rgba(86, 183, 255, 0.2)",
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.026))",
      glow:
        "radial-gradient(circle at 18% 18%, rgba(41,151,255,0.16), transparent 34%), radial-gradient(circle at 82% 12%, rgba(255,255,255,0.08), transparent 24%)",
    },
    github: null,
    live: null,
    status: "Shipped",
  },
  {
    index: "03",
    title: "Face Recognition Attendance System",
    summary:
      "An automated attendance solution using computer vision with near-perfect recognition accuracy.",
    stack: "Python • OpenCV • Face Recognition • Machine Learning",
    impact:
      "Achieved 99.9% recognition accuracy with automated entry and exit logging plus daily report generation.",
    role: "AI automation",
    highlightLabel: "Vision pipeline",
    highlights: [
      "Automated face capture and matching workflow",
      "Entry and exit logging with report generation",
      "Built for classroom or lab deployment scenarios",
    ],
    metrics: ["99.9% accuracy", "Automated logs", "Daily reports"],
    theme: {
      accent: "#ffb84d",
      accentSoft: "rgba(255, 161, 22, 0.16)",
      border: "rgba(255, 184, 77, 0.22)",
      background:
        "linear-gradient(180deg, rgba(255,255,255,0.062), rgba(255,255,255,0.024))",
      glow:
        "radial-gradient(circle at 18% 18%, rgba(255,161,22,0.18), transparent 36%), radial-gradient(circle at 84% 14%, rgba(255,214,126,0.1), transparent 24%)",
    },
    github: null,
    live: null,
    status: "Shipped",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-space">
      <div className="section-shell">
        <p className="section-kicker">Selected Work</p>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="section-title max-w-[10ch]">
            Shipped work with real engineering underneath.
          </h2>
          <p className="section-copy max-w-xl">
            These projects reflect how I like to build: clear system design,
            measurable outcomes, and implementation that holds up beyond the
            prototype stage.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Tilt
              key={project.title}
              tiltMaxAngleX={7}
              tiltMaxAngleY={7}
              scale={1.015}
              perspective={1400}
              transitionSpeed={700}
            >
              <motion.article
                className="project-noise glass-panel h-full rounded-4xl p-6 md:p-8"
                style={{
                  borderColor: project.theme.border,
                  backgroundImage: `${project.theme.glow}, ${project.theme.background}`,
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06, duration: 0.65 }}
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="absolute inset-x-6 top-0 h-0.5 rounded-full opacity-90" style={{ background: `linear-gradient(90deg, transparent, ${project.theme.accent}, transparent)` }} />
                  <div className="absolute -right-12 top-10 h-32 w-32 rounded-full blur-3xl" style={{ background: project.theme.accentSoft, opacity: 0.85 }} />
                  <div className="absolute bottom-0 left-10 h-24 w-24 rounded-full blur-3xl" style={{ background: project.theme.accentSoft, opacity: 0.55 }} />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: project.theme.accent }}>
                        Case Study {project.index}
                      </span>
                      <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em]">
                        {project.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/12 px-3 py-1 text-xs text-(--muted)">
                      {project.status}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <span
                        key={`${project.title}-${metric}`}
                        className="rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white/78"
                        style={{
                          borderColor: project.theme.border,
                          background: "rgba(255,255,255,0.05)",
                          boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px ${project.theme.accentSoft}`,
                        }}
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  <p className="mt-5 text-[15px] leading-7 text-(--muted)">
                    {project.summary}
                  </p>

                  <div className="mt-6 rounded-[1.4rem] border p-4" style={{ borderColor: project.theme.border, background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03))" }}>
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: project.theme.accent }}>
                        {project.highlightLabel}
                      </p>
                      <span className="text-[11px] uppercase tracking-[0.16em] text-(--muted-2)">
                        {project.role}
                      </span>
                    </div>

                    <div className="mt-4 grid gap-3">
                      {project.highlights.map((highlight) => (
                        <div
                          key={`${project.title}-${highlight}`}
                          className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/10 px-3 py-3"
                        >
                          <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full shadow-[0_0_16px_rgba(0,113,227,0.35)]" style={{ background: project.theme.accent }} />
                          <p className="text-sm leading-6 text-white/80">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <p className="rounded-2xl border border-white/10 bg-black/15 px-4 py-3 text-sm leading-6 text-white/85">
                      {project.impact}
                    </p>
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-(--muted-2)">
                      {project.stack}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-8">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-(--text) transition duration-300 ease-out hover:bg-white/8 hover:text-(--text)"
                      >
                        Repository
                      </a>
                    ) : null}
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-full bg-(--accent) px-4 py-2 text-sm font-medium text-white transition duration-300 ease-out hover:bg-(--accent-hover)"
                      >
                        Live Preview
                      </a>
                    ) : null}
                    {!project.github && !project.live ? (
                      <span className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-(--muted)" style={{ background: "rgba(255,255,255,0.03)" }}>
                        Links available on request
                      </span>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
