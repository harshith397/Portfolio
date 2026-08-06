import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import RevealHeading from "./RevealHeading";
import CyclingButton from "./CyclingButton"
const MAILTO = "mailto:medichelmeharshith6@gmail.com?subject=Hey%20Harshith!";

// ── Button components ──────────────────────────────────────────

const BrutalistButton = () => {
  const [pressed, setPressed] = useState(false);
  const [hovered, setHovered] = useState(false);
  return (
    <a href={MAILTO} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPressed(false); }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        style={{
          backgroundColor: "#FFE600",
          color: "#000000",
          border: "3px solid #000000",
          borderRadius: "0px",
          padding: "16px 32px",
          boxShadow: pressed ? "0px 0px 0px #000" : hovered ? "4px 4px 0px #000" : "6px 6px 0px #000",
          transform: pressed ? "translate(6px,6px)" : hovered ? "translate(2px,2px)" : "translate(0,0)",
          transition: "transform 0.1s ease, box-shadow 0.1s ease",
          cursor: "pointer",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 900,
          fontSize: "15px",
          textTransform: "uppercase",
          letterSpacing: "2px",
          whiteSpace: "nowrap",
        }}
      >
        CONNECT_NOW
      </div>
    </a>
  );
};

const GlassButton = () => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  return (
    <a href={MAILTO} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPressed(false); }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        style={{
          backgroundColor: hovered ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(200,200,200,0.4)",
          borderRadius: "9999px",
          padding: "14px 36px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          transform: pressed ? "scale(0.98)" : hovered ? "scale(1.02)" : "scale(1)",
          transition: "all 0.2s ease",
          cursor: "pointer",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: "15px",
          letterSpacing: "0.3px",
          color: "#1a1a1a",
          whiteSpace: "nowrap",
        }}
      >
        Connect Now
      </div>
    </a>
  );
};

const SkeuomorphicButton = () => {
  const [pressed, setPressed] = useState(false);
  return (
    <a href={MAILTO} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
      <div
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        style={{
          background: "linear-gradient(to bottom, #ffffff, #e5e7eb)",
          borderRadius: "8px",
          padding: pressed ? "17px 32px 11px" : "14px 32px",
          border: "1px solid #d1d5db",
          borderBottom: pressed ? "1px solid #d1d5db" : "4px solid #d1d5db",
          boxShadow: "inset 0px 1px 0px rgba(255,255,255,0.8)",
          transform: pressed ? "translateY(3px)" : "translateY(0)",
          transition: "all 0.08s ease",
          cursor: "pointer",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: "15px",
          color: "#374151",
          textShadow: "0 1px 0 rgba(255,255,255,0.5)",
          letterSpacing: "0.3px",
          whiteSpace: "nowrap",
        }}
      >
        Connect Now
      </div>
    </a>
  );
};

const CyberpunkButton = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={MAILTO} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "#0F0F11",
          borderRadius: "12px",
          padding: "14px 32px",
          border: "1px solid transparent",
          backgroundImage: "linear-gradient(#0F0F11,#0F0F11),linear-gradient(135deg,#6366F1,#EC4899)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box,border-box",
          boxShadow: hovered ? "0 0 28px rgba(99,102,241,0.6),0 0 8px rgba(236,72,153,0.4)" : "0 0 20px rgba(99,102,241,0.4)",
          transition: "box-shadow 0.3s ease",
          cursor: "pointer",
          fontFamily: "'JetBrains Mono','Fira Code',monospace",
          fontWeight: 600,
          fontSize: "14px",
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: "#ffffff",
          textShadow: "0 0 8px rgba(255,255,255,0.6)",
          whiteSpace: "nowrap",
        }}
      >
        CONNECT_NOW
      </div>
    </a>
  );
};

// Style 5: Terminal / Hacker (dark bg, green border, monospace)
const TerminalButton = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={MAILTO} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: "#1a1a1a",
          border: "2px solid #00FF41",
          borderRadius: "0px",
          padding: "14px 32px",
          boxShadow: hovered ? "0 0 12px #00FF41" : "none",
          transition: "box-shadow 0.2s ease",
          cursor: "pointer",
          fontFamily: "'JetBrains Mono','Fira Code',monospace",
          fontWeight: 700,
          fontSize: "13px",
          textTransform: "lowercase",
          letterSpacing: "2px",
          color: "#00FF41",
          whiteSpace: "nowrap",
          clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
        }}
      >
        connect_now
      </div>
    </a>
  );
};

// Style 6: Neon Cyberpunk (magenta glow, dark bg, cyan text)
const NeonButton = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={MAILTO} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: "#1a0a2e",
          border: "2px solid #FF00FF",
          borderRadius: "4px",
          padding: "14px 32px",
          boxShadow: hovered
            ? "0 0 24px #FF00FF, 0 0 48px rgba(255,0,255,0.4), inset 0 0 12px rgba(255,0,255,0.1)"
            : "0 0 16px #FF00FF, 0 0 32px rgba(255,0,255,0.3)",
          transition: "box-shadow 0.3s ease",
          cursor: "pointer",
          fontFamily: "'JetBrains Mono','Courier New',monospace",
          fontWeight: 700,
          fontSize: "13px",
          textTransform: "uppercase",
          letterSpacing: "3px",
          color: "#00FFFF",
          textShadow: "0 0 8px #00FFFF, 0 0 16px rgba(0,255,255,0.5)",
          whiteSpace: "nowrap",
        }}
      >
        CONTACT.EXE
      </div>
    </a>
  );
};

const BUTTON_COMPONENTS = [
  BrutalistButton,
  GlassButton,
  SkeuomorphicButton,
  CyberpunkButton,
  TerminalButton,
  NeonButton,
];



// ── Social pill ────────────────────────────────────────────────
const SocialPill = ({ href, label, svgPath, viewBox = "0 0 24 24", iconBg = "#000000" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-sm hover:scale-105 hover:shadow-md transition-all duration-200"
  >
    <span
      className="flex items-center justify-center w-7 h-7 rounded-full shrink-0"
      style={{ backgroundColor: iconBg }}
    >
      <svg viewBox={viewBox} fill="white" width={14} height={14}>
        <path d={svgPath} />
      </svg>
    </span>
    {label}
  </a>
);



// ── Main ───────────────────────────────────────────────────────
const Contact = ({ id }) => (
  <section id={id} className="w-full px-8 md:px-20 lg:px-32 py-24 bg-white">
    <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-12">

      <div className="w-full">
        <RevealHeading text="Connect" />
        <div className="mt-2 w-10 h-[1.5px] bg-zinc-200" />
      </div>

      <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-zinc-800 leading-tight max-w-2xl">
        Let's work together.
      </h2>

      <CyclingButton />

      <div className="flex flex-wrap justify-center gap-3">
        <SocialPill
        iconBg="#000000"
          href="https://x.com/harrshth_24"
          label="Twitter"
          svgPath="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
        />
        <SocialPill
          href="https://www.linkedin.com/in/harshith-medichelme/"
          iconBg="#0A66C2"
          label="LinkedIn"
          svgPath="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        />
        <SocialPill
          href="https://github.com/harshith397"
          iconBg="#181717"
          label="GitHub"
          svgPath="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        />
        <SocialPill
          href="mailto:medichelmeharshith6@gmail.com"
          iconBg="#EA4335"
          label="Email"
          svgPath="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
        />
      </div>

      <a
        href="/Resume.pdf"
        target="_blank"
        className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-6 py-2 text-sm font-medium text-zinc-600 hover:border-black hover:bg-black hover:text-white transition-all duration-200"
      >
        View Resume
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>

      <span className="text-xs text-zinc-400 border border-zinc-200 rounded-full px-4 py-1.5">
        Hyderabad, India
      </span>

    </div>
  </section>
);

export default Contact;
