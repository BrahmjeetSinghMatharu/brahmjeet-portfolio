"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

const contactCards = [
  {
    label: "GitHub",
    value: "github.com/brahmjeetsinghmatharu",
    href: "https://github.com/brahmjeetsinghmatharu",
    icon: "github",
  },
  {
    label: "LinkedIn",
    value: "LinkedIn profile",
    href: "https://www.linkedin.com/in/brahmjeetsinghmatharu/",
    icon: "linkedin",
  },
  {
    label: "Email",
    value: "brahmjeetsingh07@gmail.com",
    href: "mailto:brahmjeetsingh07@gmail.com",
    icon: "email",
  },
];

const availabilityItems = [
  "Internships",
  "Full-time roles",
  "Freelance projects",
];

function ContactIcon({ type }) {
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42a3.18 3.18 0 0 0-1.34-1.75c-1.1-.76.08-.75.08-.75a2.51 2.51 0 0 1 1.83 1.23 2.56 2.56 0 0 0 3.5 1 2.57 2.57 0 0 1 .76-1.61c-2.66-.3-5.47-1.33-5.47-5.93A4.64 4.64 0 0 1 6.6 8.8a4.3 4.3 0 0 1 .12-3.18s1-.33 3.3 1.25a11.38 11.38 0 0 1 6 0c2.28-1.58 3.29-1.25 3.29-1.25a4.3 4.3 0 0 1 .12 3.18 4.63 4.63 0 0 1 1.24 3.22c0 4.61-2.82 5.62-5.5 5.92a2.88 2.88 0 0 1 .82 2.23v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9h4v12H3Zm7 0h3.83v1.64h.05A4.2 4.2 0 0 1 17.66 8c4 0 4.74 2.63 4.74 6.05V21h-4v-6.13c0-1.46-.03-3.34-2.03-3.34-2.04 0-2.36 1.6-2.36 3.24V21h-4Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" aria-hidden="true">
      <path
        d="M4 6.5h16v11H4z"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m5 8 7 5 7-5"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FinalCTA() {
  const handleScrollHome = (event) => {
    const target = document.querySelector("#home");
    if (!target) return;

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="flex min-h-[calc(100svh-4.5rem)] scroll-mt-28 items-start py-8 md:items-center md:py-10"
    >
      <div className="section-shell">
        <motion.div
          className="mobile-premium-panel contact-stage premium-blue-panel glass-panel relative overflow-hidden rounded-[2.4rem] px-6 py-8 md:px-10 md:py-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-stage-grid pointer-events-none absolute inset-0 opacity-60" />
          <div className="contact-stage-glow pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-[rgba(0,113,227,0.18)] blur-3xl" />
          <div className="contact-stage-glow pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[rgba(86,170,255,0.16)] blur-3xl" />
          <div className="contact-stage-glow-delayed pointer-events-none absolute right-[24%] top-[18%] h-32 w-32 rounded-full bg-white/6 blur-3xl" />

          <p className="section-kicker">Let&rsquo;s Connect</p>

          <div className="relative z-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
            <div className="flex flex-col justify-between">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="max-w-[10ch] text-[clamp(2.5rem,5vw,4.9rem)] font-semibold leading-[0.9] tracking-[-0.065em]">
                  Let&apos;s Build Something Worth Shipping.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/74 max-[390px]:text-[15px] max-[390px]:leading-6.5 max-[375px]:text-[14.5px] max-[360px]:text-[14px] md:text-lg">
                  Whether you&apos;re looking for a full-stack engineer, an AI
                  integration specialist, or someone who can do both, I&apos;m
                  open to the conversation. Let&apos;s connect and figure out what
                  we can build together.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {availabilityItems.map((item, index) => (
                    <motion.span
                      key={item}
                      className="mobile-premium-chip rounded-full border border-white/10 bg-white/4 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/74"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.08 * index,
                        ease: "easeOut",
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="mt-6 flex flex-col gap-3 sm:flex-row"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
              >
                <MagneticButton>
                  <a
                    href="mailto:brahmjeetsingh07@gmail.com"
                    className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(0,113,227,1),rgba(41,151,255,0.96))] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(0,113,227,0.24)] transition duration-200 ease-out hover:brightness-110"
                  >
                    Let&apos;s Talk
                  </a>
                </MagneticButton>

                <a
                  href="#home"
                  onClick={handleScrollHome}
                  className="inline-flex items-center justify-center rounded-full border border-[rgba(86,170,255,0.28)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,113,227,0.06))] px-7 py-3.5 font-medium text-(--text) transition duration-200 hover:bg-[rgba(0,113,227,0.14)] hover:text-(--text)"
                >
                  Back To Top
                </a>
              </motion.div>

            </div>

            <div className="flex flex-col justify-center gap-4">
              <motion.div
                className="mobile-premium-card premium-blue-card rounded-[1.6rem] p-4"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.14, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/52">
                      Availability
                    </p>
                    <p className="mt-2.5 max-w-xl text-sm leading-6 text-white/78">
                      Available for internships, full-time roles, and freelance
                      projects. Open to opportunities starting immediately.
                    </p>
                  </div>
                  <div className="hidden min-w-30 items-center justify-end gap-2 sm:flex">
                    <span className="contact-pulse-dot h-2.5 w-2.5 rounded-full bg-(--accent)" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/54">
                      Ready now
                    </span>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 gap-3 max-[390px]:gap-2.5 max-[375px]:gap-2 sm:grid-cols-3">
                {contactCards.map((card, index) => (
                  <motion.a
                    key={card.label}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mobile-premium-card contact-card premium-blue-card group flex min-h-30.5 flex-col justify-between rounded-[1.4rem] p-4 max-[390px]:min-h-28.5 max-[390px]:p-3.5 max-[375px]:min-h-27 max-[375px]:p-3 max-[360px]:min-h-25.5 max-[360px]:p-2.5"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.08 * index,
                      ease: "easeOut",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-(--accent) transition duration-200 group-hover:scale-[1.04] group-hover:border-white/18 group-hover:bg-white/10">
                        <ContactIcon type={card.icon} />
                      </div>
                      <span className="text-sm text-white/38 transition duration-200 group-hover:text-white/68">↗</span>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/48">
                        {card.label}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
