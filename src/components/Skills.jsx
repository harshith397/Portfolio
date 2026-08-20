import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiPython,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFastapi,
  SiNodedotjs,
  
  SiHuggingface,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSqlite,
  SiDocker,
  SiGit,
  SiLinux,
  SiGithubactions,
  SiC,
  SiOpenjdk,
  SiGo,
  SiMqtt,
  SiArduino,
} from "@icons-pack/react-simple-icons";
import { SiOllama } from '@icons-pack/react-simple-icons';
import skillsData from "../data/skills.json";
import RevealHeading from "./RevealHeading";
const ICON_MAP = {
  SiPython: SiPython,
  SiReact: SiReact,
  SiTypescript: SiTypescript,
  SiTailwindcss: SiTailwindcss,
  SiFastapi: SiFastapi,
  SiNodedotjs: SiNodedotjs,
  SiHuggingface: SiHuggingface,
  SiPostgresql: SiPostgresql,
  SiMongodb: SiMongodb,
  SiRedis: SiRedis,
  SiSqlite: SiSqlite,
  SiDocker: SiDocker,
  SiGit: SiGit,
  SiLinux: SiLinux,
  SiGithubactions: SiGithubactions,
  SiMqtt: SiMqtt,
  SiGo: SiGo,
  SiC: SiC,
  SiJava: SiOpenjdk,
  SiArduino: SiArduino,
  SiOllama: SiOllama
};

const SkillPill = ({ name, icon, color }) => {
  const Icon = icon ? ICON_MAP[icon] : null;
  return (
    <span className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm">
      {Icon && <Icon size={20} color={color} />}
      {name}
    </span>
  );
};

const CategoryRow = ({ label, skills, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.35,
        ease: [0.33, 1, 0.68, 1],
        delay: index * 0.08,
      }}
      className="flex flex-col md:flex-row md:items-start gap-3 md:gap-8"
    >
      {/* Category label — fixed width on md+ so pills always start at same x */}
      <span className="shrink-0 md:w-32 text-xs font-semibold tracking-[0.1em] uppercase text-zinc-400 md:pt-2">
        {label}
      </span>

      {/* Pills — wrap naturally to new line */}
      <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-3">
        {skills.map((skill) => (
          <SkillPill key={skill.name} {...skill} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = ({ id }) => {
  const { categories } = skillsData;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <section id={id} className="w-full px-8 md:px-20 lg:px-32 py-22 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
          className="mb-8"
        >
          <RevealHeading text="Skills" />
          <div className="mt-2 w-10 h-[1.5px] bg-zinc-200" />
        </motion.div>

        {/* Category rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1], delay: 0.06 }}
          className="flex flex-col gap-6"
        >
          {categories.map((cat, i) => (
            <CategoryRow
              key={cat.label}
              label={cat.label}
              skills={cat.skills}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
