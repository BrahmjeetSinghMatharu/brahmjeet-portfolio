"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const sentence = "Brahmjeet Singh";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.12,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: "easeInOut",
    },
  },
};

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const words = useMemo(() => sentence.split(" "), []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setLoading(false);
    }, 1700);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(20px)" }}
          transition={{ duration: 0.42, ease: "easeInOut", delay: 1.25 }}
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white 0.7px, transparent 0.8px), radial-gradient(circle at 80% 60%, white 0.7px, transparent 0.8px)",
              backgroundSize: "18px 18px, 22px 22px",
            }}
          />

          <div className="relative z-10 flex w-[min(92vw,760px)] flex-col items-center px-6 text-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-x-4 gap-y-2"
            >
              {words.map((word) => (
                <motion.span
                  key={word}
                  variants={wordVariants}
                  className="text-[clamp(2.2rem,5vw,4.75rem)] font-semibold tracking-[-0.02em] text-[#F5F5F7]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 h-0.5 w-[min(70vw,360px)] overflow-hidden rounded-full bg-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, var(--accent) 0%, var(--accent-hover) 100%)",
                  boxShadow: "0 0 10px rgba(0,113,227,0.4)",
                }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.3, delay: 0.5, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
