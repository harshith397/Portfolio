import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GLASS, GLASS_LG } from "../theme/glass";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const sectionIds = ["Me", "About", "Skills", "Work", "Connect"];

// formats section id into readable label: "AboutMe" → "About Me"
const formatLabel = (id) => id.replace(/([A-Z])/g, " $1").trim();

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("AboutMe");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (id) => {
    scrollToId(id);
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-[20px] left-0 right-0 z-50 flex justify-center px-4">

      {/* ── MOBILE NAV ── */}
      <div className="lg:hidden flex flex-col items-center w-full max-w-[180px]">

        {/* Pill: hamburger left + active section name center */}
        <div className={`grid grid-cols-3 items-center w-full rounded-[50px] px-3 py-2 ${GLASS} bg-white/80 backdrop-blur-md border border-white/30 shadow-md`}>
          
          {/* Hamburger */}
          <button
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-black/5 transition-colors duration-200"
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute block w-5 h-[1.5px] bg-zinc-800 transition-all duration-300 ${isOpen ? "top-[7px] rotate-45" : "top-0"}`} />
              <span className={`absolute block w-5 h-[1.5px] bg-zinc-800 top-[7px] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`absolute block w-5 h-[1.5px] bg-zinc-800 transition-all duration-300 ${isOpen ? "top-[7px] -rotate-45" : "top-[14px]"}`} />
            </span>
          </button>

          {/* Active section name */}
          <span className="text-sm font-semibold text-zinc-800 tracking-wide text-center">
            {formatLabel(activeSection)}
          </span>

          {/* Spacer to keep name centered */}
          <div className="w-9 h-9" />
        </div>

        {/* Dropdown nav card */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`mt-2 w-full rounded-2xl px-2 py-2 ${GLASS} bg-white/90 backdrop-blur-md border border-white/30 shadow-lg`}
            >
              {sectionIds.map((id) => {
                const isActive = activeSection === id;
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(id); }}
                    className={`flex items-center w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200
                      ${isActive ? "bg-zinc-800 text-white" : "text-zinc-700 hover:bg-black/5"}`}
                  >
                    {formatLabel(id)}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── DESKTOP NAV ── */}
      <div className={`hidden lg:flex flex-row items-center justify-center gap-2 rounded-[50px] px-4 py-3 ${GLASS_LG} bg-white/10 backdrop-blur-md border border-white/20 shadow-md`}>
        {sectionIds.map((id) => {
          const isActive = activeSection === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick(id); }}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                ${isActive ? "text-white" : "text-zinc-800 hover:bg-black/5"}`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute inset-0 bg-zinc-800 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{formatLabel(id)}</span>
            </a>
          );
        })}
      </div>

    </header>
  );
}

export default Header;