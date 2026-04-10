"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Stack" },
  { href: "#process", label: "Work" },
  { href: "#journey", label: "Journey" },
  { href: "#leetcode", label: "LeetCode" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isJourneyActive, setIsJourneyActive] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.22,
  });

  useEffect(() => {
    const sectionIds = ["home", ...new Set(links.map((link) => link.href.slice(1)))];

    const updateNavbarState = () => {
      const navbarProbe = window.innerHeight * 0.18;
      let nextActive = "home";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= navbarProbe && rect.bottom >= navbarProbe) {
          nextActive = id;
          break;
        }
      }

      const journeySection = document.getElementById("journey");
      if (journeySection) {
        const rect = journeySection.getBoundingClientRect();
        const navBandTop = 0;
        const navBandBottom = 108;
        setIsJourneyActive(rect.top <= navBandBottom && rect.bottom >= navBandTop);
      } else {
        setIsJourneyActive(false);
      }

      setActiveSection(nextActive);
    };

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateNavbarState);
    };

    updateNavbarState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleNavClick = (event, href) => {
    if (!href.startsWith("#")) return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();

    const y = target.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({
      top: Math.max(0, y),
      behavior: "smooth",
    });
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40 px-3 pt-3 max-[390px]:px-2.5 max-[390px]:pt-2.5 max-[375px]:px-2 max-[360px]:px-1.5 sm:px-4 sm:pt-4 md:px-8"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div
        className={`section-shell relative flex items-center justify-between gap-2 overflow-hidden rounded-full border px-3 py-2 shadow-[0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl transition duration-300 sm:px-4 sm:py-2.5 md:px-5 ${
          isJourneyActive
            ? "border-black/8 bg-white/88 text-black"
            : "border-[rgba(0,113,227,0.2)] bg-[linear-gradient(180deg,rgba(10,14,24,0.86),rgba(8,10,18,0.74))] text-white"
        }`}
      >
        <motion.div
          className={`pointer-events-none absolute inset-x-10 top-0 h-px ${
            isJourneyActive
              ? "bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.14),transparent)]"
              : "bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]"
          }`}
          animate={{ opacity: [0.45, 0.9, 0.45] }}
          transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
        />
        <motion.div
          className={`pointer-events-none absolute -right-8 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full blur-2xl ${
            isJourneyActive
              ? "bg-[rgba(0,113,227,0.08)]"
              : "bg-[rgba(0,113,227,0.2)]"
          }`}
          animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.72, 0.45] }}
          transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut" }}
        />

        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "#home")}
          className={`relative z-10 text-[10.5px] font-semibold uppercase tracking-[0.16em] transition duration-300 ease-out max-[390px]:text-[10px] max-[375px]:text-[9.5px] max-[360px]:tracking-[0.13em] sm:text-[12px] sm:tracking-[0.24em] ${
            isJourneyActive ? "text-black" : "text-white"
          }`}
        >
          Brahmjeet.
        </a>

        <nav className="relative z-10 hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
              className={`relative rounded-full px-2.5 py-1 text-[12px] uppercase tracking-[0.15em] transition duration-300 ease-out ${
                activeSection === link.href.slice(1)
                  ? "font-bold text-[#b9e0ff] bg-[linear-gradient(135deg,rgba(0,113,227,0.22),rgba(255,255,255,0.08))] shadow-[inset_0_0_0_1px_rgba(0,113,227,0.2),0_0_24px_rgba(0,113,227,0.16)]"
                  : isJourneyActive
                    ? "font-medium text-black/58 hover:text-black"
                    : "font-medium text-white/72 hover:text-white"
              }`}
            >
              <span>{link.label}</span>
              {activeSection === link.href.slice(1) ? (
                <motion.span
                  className="absolute -bottom-2.25 left-0 h-0.5 w-full rounded-full bg-[linear-gradient(90deg,rgba(0,113,227,1),rgba(86,170,255,0.55),transparent)]"
                  initial={{ scaleX: 0, opacity: 0.45 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  style={{ transformOrigin: "left center" }}
                />
              ) : null}
            </a>
          ))}
        </nav>

        <MagneticButton>
          <a
            href="mailto:brahmjeetsingh07@gmail.com"
            className="relative z-10 rounded-full bg-[linear-gradient(135deg,rgba(0,113,227,1),rgba(41,151,255,0.96))] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white shadow-[0_8px_20px_rgba(0,113,227,0.22)] transition duration-300 ease-out max-[390px]:px-2.5 max-[390px]:py-1.25 max-[390px]:text-[9.5px] max-[375px]:px-2 max-[375px]:text-[9px] max-[360px]:hidden hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,rgba(12,120,235,1),rgba(61,164,255,1))] sm:px-4 sm:py-2 sm:text-[12px] sm:tracking-[0.12em]"
          >
            Let&apos;s Talk
          </a>
        </MagneticButton>

        <div
          className={`pointer-events-none absolute inset-x-2 bottom-0.75 h-0.5 overflow-hidden rounded-full ${
            isJourneyActive ? "bg-black/8" : "bg-white/8"
          }`}
        >
          <motion.div
            className="relative h-full origin-left rounded-full bg-[linear-gradient(90deg,rgba(122,195,255,0.95),rgba(0,113,227,0.96),rgba(0,113,227,0.45))] shadow-[0_0_18px_rgba(0,113,227,0.28)]"
            style={{ scaleX: progressScale }}
          >
            <motion.div
              className="absolute inset-y-0 right-0 w-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.7))]"
              animate={{ x: [-14, 10, -14] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
