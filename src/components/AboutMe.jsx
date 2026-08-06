import React, { useRef } from "react";
import { Server, Smartphone, Globe, Cpu, Wifi } from "lucide-react";
import aboutData from "../data/about.json";
import RevealHeading from "./RevealHeading";
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
          <span className="font-medium text-zinc-700">{segment.content}</span>
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


const AboutMe = ({ id }) => {
  const { paragraphs } = aboutData;

  return (
    <section
      id={id}
      className="w-full px-8 md:px-20 lg:px-34 py-20 bg-white"
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
            <p
              key={paraIndex}
              className="text-1xl md:text-3xl lg:text-2xl text-zinc-600 leading-relaxed font-light"
            >
              {para.map((segment, segIndex) => renderSegment(segment, segIndex))}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutMe;