import React, { useState, useEffect } from "react";

const MAILTO = "mailto:medichelmeharshith6@gmail.com?subject=Hey%20Harshith!&body=Hi%20Harshith%2C%20I%20came%20across%20your%20portfolio%20and...";

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
          backgroundColor: "#FFE600", color: "#000000", border: "3px solid #000000",
          borderRadius: "0px", padding: "16px 32px",
          boxShadow: pressed ? "0px 0px 0px #000" : hovered ? "4px 4px 0px #000" : "6px 6px 0px #000",
          transform: pressed ? "translate(6px,6px)" : hovered ? "translate(2px,2px)" : "translate(0,0)",
          transition: "transform 0.1s ease, box-shadow 0.1s ease", cursor: "pointer",
          fontFamily: "'Inter', sans-serif", fontWeight: 900, fontSize: "15px",
          textTransform: "uppercase", letterSpacing: "2px", whiteSpace: "nowrap",
        }}
      >CONNECT_NOW</div>
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
          backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(200,200,200,0.4)", borderRadius: "9999px", padding: "14px 36px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          transform: pressed ? "scale(0.98)" : hovered ? "scale(1.02)" : "scale(1)",
          transition: "all 0.2s ease", cursor: "pointer",
          fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "15px",
          letterSpacing: "0.3px", color: "#1a1a1a", whiteSpace: "nowrap",
        }}
      >Connect Now</div>
    </a>
  );
};

const OutlinedButton = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={MAILTO} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: hovered ? "#000000" : "#ffffff",
          color: hovered ? "#ffffff" : "#000000",
          border: "2px solid #000000",
          borderRadius: "0px",
          padding: "14px 32px",
          transition: "all 0.2s ease",
          cursor: "pointer",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: "14px",
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

const SkeuomorphicButton = () => {
  const [pressed, setPressed] = useState(false);
  return (
    <a href={MAILTO} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
      <div
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        style={{
          background: "linear-gradient(to bottom, #ffffff, #e5e7eb)", borderRadius: "8px",
          padding: pressed ? "17px 32px 11px" : "14px 32px",
          border: "1px solid #d1d5db", borderBottom: pressed ? "1px solid #d1d5db" : "4px solid #d1d5db",
          boxShadow: "inset 0px 1px 0px rgba(255,255,255,0.8)",
          transform: pressed ? "translateY(3px)" : "translateY(0)", transition: "all 0.08s ease",
          cursor: "pointer", fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "15px",
          color: "#374151", textShadow: "0 1px 0 rgba(255,255,255,0.5)",
          letterSpacing: "0.3px", whiteSpace: "nowrap",
        }}
      >Connect Now</div>
    </a>
  );
};


const TerminalButton = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={MAILTO} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: "#1a1a1a", border: "2px solid #00FF41", borderRadius: "0px",
          padding: "14px 32px",
          boxShadow: hovered ? "0 0 12px #00FF41" : "none", transition: "box-shadow 0.2s ease",
          cursor: "pointer", fontFamily: "'JetBrains Mono','Fira Code',monospace",
          fontWeight: 700, fontSize: "13px", textTransform: "lowercase", letterSpacing: "2px",
          color: "#00FF41", whiteSpace: "nowrap",
          clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
        }}
      >connect now</div>
    </a>
  );
};

const NeonButton = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={MAILTO} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: "#1a0a2e", border: "2px solid #FF00FF", borderRadius: "4px",
          padding: "14px 32px",
          boxShadow: hovered
            ? "0 0 24px #FF00FF, 0 0 48px rgba(255,0,255,0.4), inset 0 0 12px rgba(255,0,255,0.1)"
            : "0 0 16px #FF00FF, 0 0 32px rgba(255,0,255,0.3)",
          transition: "box-shadow 0.3s ease", cursor: "pointer",
          fontFamily: "'JetBrains Mono','Courier New',monospace", fontWeight: 700,
          fontSize: "13px", textTransform: "uppercase", letterSpacing: "3px",
          color: "#00FFFF", textShadow: "0 0 8px #00FFFF, 0 0 16px rgba(0,255,255,0.5)",
          whiteSpace: "nowrap",
        }}
      >CONTACT.EXE</div>
    </a>
  );
};


const BUTTON_COMPONENTS = [
   GlassButton, OutlinedButton,
    NeonButton,BrutalistButton,TerminalButton,
];

const CyclingButton = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % BUTTON_COMPONENTS.length);
    }, 350);
    return () => clearInterval(timer);
  }, [paused]);

  const ButtonComponent = BUTTON_COMPONENTS[index];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ width: "280px", height: "60px", position: "relative" }}
    >
      <div
        key={index}
        style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          animation: "fadeScale 0.25s ease-out",
        }}
      >
        <ButtonComponent />
      </div>
      <style>{`
        @keyframes fadeScale {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default CyclingButton;
