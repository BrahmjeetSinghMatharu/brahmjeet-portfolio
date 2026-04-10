"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollText({ eyebrow, text }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const words = containerRef.current.querySelectorAll(".marquee-word");

      gsap.fromTo(
        words,
        { opacity: 0.28, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 78%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-space">
      <div
        ref={containerRef}
        className="section-shell premium-blue-panel glass-panel rounded-4xl px-6 py-10 md:px-10 md:py-14"
      >
        <p className="section-kicker text-(--accent)">{eyebrow}</p>
        <p className="max-w-5xl text-3xl font-semibold leading-[1.08] tracking-[-0.055em] text-white/92 md:text-5xl">
          {text.split(" ").map((word, index) => (
            <span key={`${word}-${index}`} className="marquee-word">
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
