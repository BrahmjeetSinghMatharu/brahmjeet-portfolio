"use client";

import { motion } from "framer-motion";

const CSS3_LOGO =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath fill='%231572B6' d='M10 6h44l-4 45-18 7-18-7z'/%3E%3Cpath fill='%2333A9DC' d='M32 54V10h18l-3 38z'/%3E%3Cpath fill='%23fff' d='M20 18h24l-1 6H27l1 6h14l-2 15-8 3-8-3-1-8h6l1 4 4 1 4-1 1-5H22l-2-18z'/%3E%3C/svg%3E";

const VSCODE_LOGO =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath fill='%23007ACC' d='M46 8 18 18 8 28l10 8-10 8 10 10 28 10 10-5V13z'/%3E%3Cpath fill='%231F9CF0' d='M46 8 28 25l-9-7-6 6 11 12-11 12 6 6 9-7 18 17z'/%3E%3Cpath fill='%23fff' d='M46 18 31 32l15 14V18z' opacity='.95'/%3E%3C/svg%3E";

const stackApps = [
  { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus/00599C", category: "Systems", row: 1, column: 4, scale: "lg", offset: "-8px" },
  { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB", category: "Library", row: 1, column: 5, scale: "xl", offset: "-8px" },
  { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB", category: "Language", row: 1, column: 6, scale: "lg", offset: "-8px" },
  { name: "NumPy", logo: "https://cdn.simpleicons.org/numpy/013243", category: "Data", row: 1, column: 7, scale: "md", offset: "-8px" },
  { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E", category: "Language", row: 2, column: 2, scale: "md", offset: "18px" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/5FA04E", category: "Runtime", row: 2, column: 3, scale: "lg", offset: "18px" },
  { name: "Express", logo: "https://cdn.simpleicons.org/express/FFFFFF", category: "Backend", row: 2, column: 4, scale: "md", offset: "18px" },
  { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248", category: "Database", row: 2, column: 5, scale: "md", offset: "18px" },
  { name: "C", logo: "https://cdn.simpleicons.org/c/00599C", category: "Language", row: 2, column: 6, scale: "lg", offset: "18px" },
  { name: "Socket.IO", logo: "https://cdn.simpleicons.org/socketdotio/FFFFFF", category: "Realtime", row: 2, column: 7, scale: "md", offset: "18px" },
  { name: "WebSockets", logo: "https://cdn.simpleicons.org/socketdotio/FFFFFF", category: "Protocol", row: 2, column: 8, scale: "md", offset: "18px" },
  { name: "SQL", logo: "https://cdn.simpleicons.org/mysql/4479A1", category: "Database", row: 3, column: 1, scale: "md", offset: "-6px" },
  { name: "FastAPI", logo: "https://cdn.simpleicons.org/fastapi/009688", category: "Backend", row: 3, column: 2, scale: "lg", offset: "-6px" },
  { name: "Pandas", logo: "https://cdn.simpleicons.org/pandas/150458", category: "Data", row: 3, column: 3, scale: "md", offset: "-6px" },
  { name: "OpenCV", logo: "https://cdn.simpleicons.org/opencv/5C3EE8", category: "Vision", row: 3, column: 4, scale: "md", offset: "-6px" },
  { name: "JWT", logo: "https://cdn.simpleicons.org/jsonwebtokens/FFFFFF", category: "Auth", row: 3, column: 5, scale: "md", offset: "-6px" },
  { name: "Redux", logo: "https://cdn.simpleicons.org/redux/764ABC", category: "State", row: 3, column: 6, scale: "md", offset: "-6px" },
  { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032", category: "Tooling", row: 3, column: 7, scale: "md", offset: "-6px" },
  { name: "Linux", logo: "https://cdn.simpleicons.org/linux/FCC624", category: "OS", row: 3, column: 8, scale: "md", offset: "-6px" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github/FFFFFF", category: "Versioning", row: 4, column: 1, scale: "md", offset: "20px" },
  { name: "Postman", logo: "https://cdn.simpleicons.org/postman/FF6C37", category: "API", row: 4, column: 2, scale: "md", offset: "20px" },
  { name: "MongoDB Compass", logo: "https://cdn.simpleicons.org/mongodb/47A248", category: "Database Tool", row: 4, column: 3, scale: "md", offset: "20px" },
  { name: "VS Code", logo: VSCODE_LOGO, category: "Editor", row: 4, column: 4, scale: "md", offset: "20px" },
  { name: "CNN", logo: "https://cdn.simpleicons.org/pytorch/EE4C2C", category: "Deep Learning", row: 4, column: 5, scale: "md", offset: "20px" },
  { name: "LSTM", logo: "https://cdn.simpleicons.org/tensorflow/FF6F00", category: "Sequence Models", row: 4, column: 6, scale: "lg", offset: "20px" },
  { name: "Raspberry Pi", logo: "https://cdn.simpleicons.org/raspberrypi/A22846", category: "Edge AI", row: 4, column: 7, scale: "md", offset: "20px" },
  { name: "PyTorch", logo: "https://cdn.simpleicons.org/pytorch/EE4C2C", category: "Framework", row: 4, column: 8, scale: "md", offset: "20px" },
  { name: "HTML5", logo: "https://cdn.simpleicons.org/html5/E34F26", category: "Markup", row: 5, column: 2, scale: "md", offset: "-2px" },
  { name: "CSS3", logo: CSS3_LOGO, category: "Styling", row: 5, column: 3, scale: "md", offset: "-2px" },
  { name: "REST API", logo: "https://cdn.simpleicons.org/openapiinitiative/6BA539", category: "Architecture", row: 5, column: 4, scale: "md", offset: "-2px" },
  { name: "MERN", logo: "https://cdn.simpleicons.org/react/61DAFB", category: "Full Stack", row: 5, column: 5, scale: "md", offset: "-2px" },
  { name: "Edge AI", logo: "https://cdn.simpleicons.org/nvidia/76B900", category: "Deployment", row: 5, column: 6, scale: "md", offset: "-2px" },
  { name: "Computer Vision", logo: "https://cdn.simpleicons.org/opencv/5C3EE8", category: "AI/ML", row: 5, column: 7, scale: "md", offset: "-2px" },
  { name: "TensorFlow", logo: "https://cdn.simpleicons.org/tensorflow/FF6F00", category: "Framework", row: 5, column: 8, scale: "md", offset: "-2px" },
  { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/FFFFFF", category: "Deploy", row: 6, column: 3, scale: "md", offset: "10px" },
  { name: "Render", logo: "https://cdn.simpleicons.org/render/46E3B7", category: "Hosting", row: 6, column: 4, scale: "md", offset: "10px" },
  { name: "Multithreading", logo: "https://cdn.simpleicons.org/cplusplus/00599C", category: "Performance", row: 6, column: 5, scale: "md", offset: "10px" },
  { name: "Deep Learning", logo: "https://cdn.simpleicons.org/pytorch/EE4C2C", category: "AI/ML", row: 6, column: 6, scale: "md", offset: "10px" },
];

const stackStats = [
  { value: "20+", label: "core technologies across full-stack, AI, and systems" },
  { value: "03", label: "major domains: products, pipelines, and performance" },
  { value: "02", label: "internships applying these skills in real environments" },
];

const quickGroups = [
  "Frontend systems",
  "Backend and APIs",
  "Realtime architecture",
  "Computer vision and deep learning",
  "Systems programming in C++",
  "Edge-aware AI deployments",
];

const featuredStack = [
  ...stackApps.filter((app) => app.name === "Render"),
  ...stackApps.filter((app) => app.name !== "Render"),
];

export default function Toolkit() {
  return (
    <section id="skills" className="section-space scroll-mt-28 overflow-hidden">
      <div className="section-shell">
        <div className="flex flex-col gap-3">
          <div className="min-w-0">
            <p className="section-kicker">Tech Stack</p>
            <h2 className="section-title max-w-none">
              The stack behind the products I ship.
            </h2>
          </div>

          <p className="section-copy max-w-none">
            Full-stack, AI/ML, realtime infrastructure, and systems work in one
            focused toolkit.
          </p>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-[0.84fr_1.16fr]">
          <motion.article
            className="mobile-premium-panel premium-blue-panel glass-panel rounded-[30px] p-6 md:p-7"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-(--text)">
              Stack Summary
            </p>
            <h3 className="mt-3 max-w-[14ch] text-[1.75rem] font-semibold leading-[1.05] tracking-[-0.03em]">
              Built for intelligent, scalable software.
            </h3>

            <div className="mt-5 grid gap-3">
              {stackStats.map((item) => (
                <div
                  key={item.label}
                  className="mobile-premium-card premium-blue-card rounded-[20px] px-4 py-3.5"
                >
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-(--text)">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-(--muted)">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {quickGroups.map((item) => (
                <div
                  key={item}
                  className="mobile-premium-card premium-blue-card rounded-2xl px-4 py-2.5 text-sm text-(--muted)"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mobile-premium-card premium-blue-card mt-6 rounded-[22px] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-(--accent)">
                Working Style
              </p>
              <p className="mt-2 text-sm leading-6 text-(--muted)">
                Interfaces, APIs, and AI systems that work cleanly together in
                production.
              </p>
            </div>
          </motion.article>

          <motion.div
            className="mobile-premium-panel premium-blue-panel glass-panel rounded-[36px] p-5"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.08, duration: 0.65 }}
          >
            <div className="flex flex-col gap-3 border-b border-white/8 px-1 pb-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-(--muted)">
                  Core Toolkit
                </p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-(--muted)">
                  Core technologies I use most often.
                </p>
              </div>

              <div className="mobile-premium-chip premium-blue-chip rounded-full px-4 py-2 text-xs uppercase tracking-[0.16em] text-(--muted)">
                Selected Technologies
              </div>
            </div>

            <div className="mt-5 grid grid-cols-4 gap-1 max-[390px]:gap-0.5 sm:gap-1.5 md:grid-cols-5 xl:grid-cols-6">
              {featuredStack.map((app, index) => (
                <motion.article
                  key={app.name}
                  className="mobile-premium-card premium-blue-card toolkit-card rounded-xl px-1 py-1.5 max-[390px]:px-0.5 max-[390px]:py-1 sm:rounded-[18px] sm:px-2 sm:py-2.5"
                  initial={{ opacity: 0, scale: 0.82 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: index * 0.02, duration: 0.32 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="toolkit-card-icon flex h-7 w-7 items-center justify-center rounded-[9px] border border-[rgba(0,113,227,0.16)] bg-[linear-gradient(180deg,rgba(30,34,45,1),rgba(12,14,21,1))] shadow-[0_10px_18px_rgba(0,0,0,0.2)] max-[390px]:h-6.5 max-[390px]:w-6.5 sm:h-10 sm:w-10 sm:rounded-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={app.logo}
                      alt={`${app.name} logo`}
                        width={22}
                        height={22}
                      loading="lazy"
                        className="h-4 w-4 object-contain sm:h-5.5 sm:w-5.5"
                    />
                  </div>
                  <div className="mt-1 max-[390px]:mt-0.75 sm:mt-1.5">
                    <h3 className="text-[8px] font-semibold leading-[1.1] tracking-[-0.02em] text-white max-[390px]:text-[7.25px] sm:text-[10px]">
                      {app.name}
                    </h3>
                  </div>
                  </div>
                </motion.article>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
