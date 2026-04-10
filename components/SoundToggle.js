"use client";

import { useEffect, useRef, useState } from "react";

function WavesIcon({ enabled }) {
  return (
    <>
      <style>{`
        @keyframes wave-flow {
          0%   { transform: translateX(-6px); opacity: 0.15; }
          50%  { opacity: 1; }
          100% { transform: translateX(6px);  opacity: 0.15; }
        }
        @keyframes bar-dance {
          0%, 100% { transform: scaleY(0.35); }
          50%       { transform: scaleY(1); }
        }
        @keyframes slash-draw {
          from { stroke-dashoffset: 28; opacity: 0; }
          to   { stroke-dashoffset: 0;  opacity: 1; }
        }
        @keyframes slash-fade {
          from { stroke-dashoffset: 0;  opacity: 1; }
          to   { stroke-dashoffset: 28; opacity: 0; }
        }
        .slash-on  { animation: slash-draw 0.22s ease forwards; }
        .slash-off { animation: slash-fade 0.18s ease forwards; }
      `}</style>

      <svg
        aria-hidden="true"
        viewBox="0 0 28 28"
        className="h-5 w-5 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated bars when ON — 5 bars of varying heights */}
        {enabled ? (
          <g transform="translate(2, 7)">
            {[
              { x: 2,  h: 8,  delay: "0s",     dur: "0.55s" },
              { x: 6,  h: 14, delay: "0.1s",   dur: "0.7s"  },
              { x: 10, h: 11, delay: "0.05s",  dur: "0.62s" },
              { x: 14, h: 14, delay: "0.15s",  dur: "0.68s" },
              { x: 18, h: 8,  delay: "0.08s",  dur: "0.58s" },
            ].map((bar, i) => (
              <rect
                key={i}
                x={bar.x}
                y={(14 - bar.h) / 2}
                width="2.5"
                height={bar.h}
                rx="1.25"
                fill="currentColor"
                style={{
                  transformOrigin: `${bar.x + 1.25}px ${7}px`,
                  animation: `bar-dance ${bar.dur} ease-in-out ${bar.delay} infinite`,
                }}
              />
            ))}
          </g>
        ) : (
          /* Static flat bars when OFF */
          <g transform="translate(2, 7)" opacity="0.32">
            {[2, 6, 10, 14, 18].map((x, i) => (
              <rect
                key={i}
                x={x}
                y="5"
                width="2.5"
                height="4"
                rx="1.25"
                fill="currentColor"
              />
            ))}
            {/* Slash */}
            <line
              x1="0" y1="14" x2="22" y2="-1"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeDasharray="28"
              className="slash-on"
            />
          </g>
        )}
      </svg>
    </>
  );
}

export default function SoundToggle() {
  const audioRef         = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const enabledRef       = useRef(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const audio = new Audio("/click.mp3");
    audio.preload = "auto";
    audio.loop    = true;
    audio.volume  = 0.18;
    audio.playsInline = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleSound = () => {
    const next = !enabledRef.current;
    enabledRef.current = next;
    setEnabled(next);
    setPressed(true);
    setTimeout(() => setPressed(false), 180);

    if (!next && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    if (next && audioRef.current) {
      audioRef.current.play().catch(() => {
        enabledRef.current = false;
        setEnabled(false);
      });
    }
  };

  return (
    <>
      <style>{`
        @keyframes pill-glow-pulse {
          0%, 100% {
            box-shadow:
              0 18px 50px rgba(0,0,0,0.45),
              0 0 0 rgba(0,113,227,0.1);
          }
          50% {
            box-shadow:
              0 20px 56px rgba(0,0,0,0.5),
              0 0 34px rgba(0,113,227,0.32);
          }
        }
        @keyframes sheen-pass {
          0% { transform: translateX(-145%); opacity: 0; }
          20% { opacity: 0.5; }
          50% { opacity: 0.7; }
          100% { transform: translateX(145%); opacity: 0; }
        }
        @keyframes status-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0,201,167,0.45); }
          50% { box-shadow: 0 0 0 6px rgba(0,201,167,0); }
        }
        .sound-pill {
          position: fixed;
          bottom: 20px;
          left: 20px;
          z-index: 90;
          isolation: isolate;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 16px 11px 12px;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.14);
          background:
            linear-gradient(155deg, rgba(255,255,255,0.09), rgba(255,255,255,0.02) 40%, rgba(0,0,0,0.2)),
            rgba(10,10,12,0.78);
          backdrop-filter: blur(20px) saturate(130%);
          -webkit-backdrop-filter: blur(20px) saturate(130%);
          box-shadow: 0 18px 50px rgba(0,0,0,0.45);
          cursor: pointer;
          transition:
            border-color 220ms ease,
            background 220ms ease,
            transform 160ms cubic-bezier(0.34,1.56,0.64,1),
            box-shadow 220ms ease;
          will-change: transform, border-color, box-shadow;
          user-select: none;
        }
        .sound-pill::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          border: 1px solid rgba(255,255,255,0.09);
          pointer-events: none;
          z-index: -1;
        }
        .sound-pill::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 38%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
          filter: blur(0.3px);
          pointer-events: none;
          animation: sheen-pass 3.8s ease-in-out infinite;
          z-index: 0;
        }
        .sound-pill:hover {
          border-color: rgba(255,255,255,0.3);
          background:
            linear-gradient(155deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03) 40%, rgba(0,0,0,0.26)),
            rgba(14,14,17,0.9);
          transform: scale(1.04) translateY(-1px);
          box-shadow: 0 22px 54px rgba(0,0,0,0.5);
        }
        .sound-pill:active, .sound-pill.pressed {
          transform: scale(0.95) translateY(1px);
        }
        .sound-pill.on {
          animation: pill-glow-pulse 3.2s ease-in-out infinite;
          border-color: rgba(0,113,227,0.44);
        }
        .sound-pill.on:hover {
          border-color: rgba(0,113,227,0.68);
          background:
            linear-gradient(155deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03) 40%, rgba(0,0,0,0.26)),
            rgba(0,113,227,0.16);
        }
        .sound-pill.off {
          border-color: rgba(255,255,255,0.11);
        }
        .sound-pill.off::after {
          opacity: 0.45;
          animation-duration: 5s;
        }
        .sound-label {
          position: relative;
          z-index: 1;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
          transition: color 220ms ease;
          white-space: nowrap;
        }
        .sound-pill.on .sound-label  { color: rgba(255,255,255,0.82); }
        .sound-pill.off .sound-label { color: rgba(255,255,255,0.38); }
        .sound-badge {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          transition: background 220ms ease, border-color 220ms ease;
        }
        .sound-pill.on .sound-badge {
          background: rgba(0,113,227,0.26);
          border-color: rgba(0,113,227,0.52);
        }
        .sound-status-dot {
          position: relative;
          z-index: 1;
          width: 7px;
          height: 7px;
          border-radius: 9999px;
          margin-left: 2px;
          background: rgba(255,255,255,0.28);
          transition: background 220ms ease;
        }
        .sound-pill.on .sound-status-dot {
          background: #00c9a7;
          animation: status-dot 1.8s ease-out infinite;
        }
        .sound-pill.off .sound-status-dot {
          background: rgba(255,255,255,0.26);
        }
        @media (max-width: 640px) {
          .sound-pill {
            left: 14px;
            bottom: 14px;
            padding: 10px 14px 10px 11px;
            gap: 9px;
          }
          .sound-label {
            font-size: 10px;
            letter-spacing: 0.16em;
          }
        }
      `}</style>

      <button
        type="button"
        onClick={toggleSound}
        className={`sound-pill ${enabled ? "on" : "off"} ${pressed ? "pressed" : ""}`}
        aria-label={enabled ? "Turn sound off" : "Turn sound on"}
        aria-pressed={enabled}
      >
        {/* Icon */}
        <span className="sound-badge"
          style={{
            color: enabled ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.32)",
            transition: "color 200ms ease",
            display: "flex",
            alignItems: "center",
          }}
        >
          <WavesIcon enabled={enabled} />
        </span>

        {/* Label */}
        <span className="sound-label">
          {enabled ? "Sound On" : "Sound Off"}
        </span>
        <span className="sound-status-dot" aria-hidden="true" />
      </button>
    </>
  );
}
