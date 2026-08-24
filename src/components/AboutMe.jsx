import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Server, Smartphone, Globe, Cpu, Wifi } from "lucide-react";
import aboutData from "../data/about.json";
import RevealHeading from "./RevealHeading";
import MarkerSpan from "./MarkerSpan";
const ICON_MAP = {
  Server:     { component: Server,     color: "#3b82f6", rotate: -10 },
  Smartphone: { component: Smartphone, color: "#8b5cf6", rotate: 8  },
  Globe:      { component: Globe,      color: "#10b981", rotate: -6  },
  Cpu:        { component: Cpu,        color: "#f97316", rotate: 12  },
  Wifi:       { component: Wifi,       color: "#0ea5e9", rotate: -8  },
};

const InlineIcon = ({ name }) => {
  const entry = ICON_MAP[name];
  if (!entry) return null;
  const Icon = entry.component;
  return (
    <Icon
      size={20}
      color={entry.color}
      className="inline-block align-middle mb-[3px] mx-[4px]"
      style={{
        transform: `rotate(${entry.rotate}deg)`,
        filter: `drop-shadow(2px 2px 4px ${entry.color}40)`
      }}
    />
  );
};

const renderSegment = (segment, index) => {
  switch (segment.type) {
    case "text":
      return <span className="font-sans text-zinc-550" key={index}>{segment.content}</span>;
    case "keyword":
      return (
        <span key={index} className="inline-flex items-baseline">
          <InlineIcon name={segment.icon} />
          <MarkerSpan><span className="font-semibold text-zinc-800">{segment.content}</span></MarkerSpan>
        </span>
      );
    case "quote":
      return (
        <span
          key={index}
          className="italic text-zinc-700"
          style={{ fontFamily: "Georgia, serif" }}
        >
          "{segment.content}"
        </span>
      );
    default:
      return null;
  }
};

const AboutParagraph = ({ para, paraIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.35,
        ease: [0.33, 1, 0.68, 1],
        delay: paraIndex * 0.08,
      }}
      className="text-base md:text-2xl lg:text-lg text-zinc-800 leading-relaxed font-normal"
    >
      {para.map((segment, segIndex) => renderSegment(segment, segIndex))}
    </motion.p>
  );
};


const AboutMe = ({ id }) => {
  const { paragraphs } = aboutData;

  return (
    <section
      id={id}
      className="w-full px-8 md:px-20 lg:px-34 py-15 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section label with char reveal */}
        <div className="mb-8">
          <RevealHeading text="About" />
          <div className="mt-2 w-10 h-[1.5px] bg-zinc-200" />
        </div>

        {/* Multi-paragraph block */}
        <div className="flex flex-col gap-8">
          {paragraphs.map((para, paraIndex) => (
            <AboutParagraph key={paraIndex} para={para} paraIndex={paraIndex} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutMe;