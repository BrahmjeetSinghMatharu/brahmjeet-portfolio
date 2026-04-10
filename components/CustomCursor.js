"use client";

import { useEffect, useRef, useState } from "react";
import { isSafariBrowser } from "@/lib/browser";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(mediaQuery.matches);

    updateEnabled();
    mediaQuery.addEventListener("change", updateEnabled);

    return () => {
      mediaQuery.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled || isSafariBrowser()) return undefined;

    let animationFrameId = 0;
    const cursorElement = cursorRef.current;

    if (!cursorElement) return undefined;

    const current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { ...current };

    cursorElement.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;

    const updateCursor = () => {
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;

      cursorElement.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      animationFrameId = window.requestAnimationFrame(updateCursor);
    };

    const handleMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
    };

    const handleOver = (event) => {
      const nextActive = Boolean(
        event.target.closest("a, button, [data-cursor='interactive']")
      );

      cursorElement.classList.toggle("is-active", nextActive);
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    animationFrameId = window.requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{ willChange: "transform" }}
    />
  );
}
