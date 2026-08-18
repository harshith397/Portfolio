import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import projectsData from "../data/projects_data.json";
import RevealHeading from "./RevealHeading";
import { SiGithub } from "@icons-pack/react-simple-icons";
const featured = projectsData.filter((p) => p.featured);

// ── Desktop Card ──────────────────────────────────────────────
const DesktopCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-10% 0px" });

  return (
  <motion.div
    ref={cardRef}
    initial={{ opacity: 0, y: 20 }}
    animate={isCardInView ? { opacity: 1, y: 0 } : {}}
    transition={{
      duration: 0.35,
      ease: [0.33, 1, 0.68, 1],
      delay: index * 0.08,
    }}
    className="group flex flex-col rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
  >
    {/* Image */}
    <div className="h-64 w-full overflow-hidden bg-zinc-100">
      <img
        src={project.image || "https://placehold.co/600x400?text=Project"}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="flex flex-1 flex-col p-5 gap-3">
      <h3 className="text-lg font-semibold text-zinc-900">{project.title}</h3>
      <p className="text-sm text-zinc-500 line-clamp-2">{project.tagline}</p>

      {/* Actions */}
      <div className="mt-auto flex items-center gap-4 pt-4 border-t border-zinc-100">
        {project.repo_url && (
          <a
            href={project.repo_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-black transition-colors"
          >
            <SiGithub size={22} />
          </a>
        )}
        {project.demo_url && (
          <a
            href={project.demo_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-black transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              width={22}
              height={22}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
  
          </a>
        )}
        <Link
          to={`/project/${project.id}`}
          className="ml-auto flex items-center gap-1 text-sm font-semibold text-black underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          View
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            width={13}
            height={13}
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </Link>
      </div>
    </div>
  </motion.div>
  );
};

// ── Mobile Squircle Card ───────────────────────────────────────
const SquircleCard = ({ project }) => (
  <div className="relative w-full flex flex-col items-center px-6 py-8 rounded-3xl bg-white border border-zinc-200 shadow-md">
    {/* Squircle image */}
    <div
      className="w-full overflow-hidden bg-zinc-100 mb-6"
      style={{ borderRadius: "36px", aspectRatio: "4/3" }}
    >
      <img
        src={project.image || "https://placehold.co/600x400?text=Project"}
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>
    {/* Title + tagline */}
    <h3 className="self-start text-xl font-semibold text-zinc-900 mb-1">
      {project.title}
    </h3>
    <p className="self-start text-sm text-zinc-500 line-clamp-2 mb-6">
      {project.tagline}
    </p>

    {/* Actions */}
    <div className="self-stretch flex items-center gap-4 pt-4 border-t border-zinc-100">
      {project.repo_url && (
        <a
          href={project.repo_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 hover:text-black transition-colors"
        >
          <SiGithub size={24} />
        </a>
      )}
      {project.demo_url && (
        <a
          href={project.demo_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-black transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            width={22}
            height={22}
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        
        </a>
      )}

      <Link
        to={`/project/${project.id}`}
        className="ml-auto flex items-center gap-1 text-sm font-semibold text-black underline underline-offset-2 hover:opacity-60 transition-opacity"
      >
        View
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          width={13}
          height={13}
        >
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </Link>
    </div>
  </div>
);

// ── Mobile Swiper ──────────────────────────────────────────────
const MobileSwiper = ({ projects }) => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > 50 && current < projects.length - 1) setCurrent((p) => p + 1);
    if (delta < -50 && current > 0) setCurrent((p) => p - 1);
    touchStartX.current = null;
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div
        className="w-full"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <SquircleCard project={projects[current]} />
        </motion.div>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? "w-5 h-2 bg-zinc-800" : "w-2 h-2 bg-zinc-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// ── Reveal heading (same as About + Skills) ────────────────────

// ── Main Projects Section ──────────────────────────────────────
const Projects = ({ id }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <section id={id} className="w-full px-8 md:px-20 lg:px-32 py-24 bg-white">
      <div ref={sectionRef} className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
          className="mb-10"
        >
          <RevealHeading text="Featured Projects" />
          <div className="mt-2 w-10 h-[1.5px] bg-zinc-200" />
        </motion.div>

        {/* Mobile swiper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1], delay: 0.06 }}
          className="md:hidden"
        >
          <MobileSwiper projects={featured} />
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {featured.map((project, index) => (
            <DesktopCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1], delay: 0.16 }}
          className="mt-12 flex justify-center"
        >
          <Link
            to="/projects"
            className="flex items-center gap-1 text-sm font-medium text-zinc-500 hover:text-black transition-colors underline underline-offset-4"
          >
            View all projects
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              width={13}
              height={13}
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
