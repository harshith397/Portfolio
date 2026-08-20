import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const headingContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const headingChar = {
  initial: {
    opacity: 0,
    y: 14,
    filter: "blur(8px)",
    letterSpacing: "0.04em",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    letterSpacing: "0.08em",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const RevealHeading = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-wrap overflow-hidden"
      style={{ columnGap: "0.25em" }}
      variants={headingContainer}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      {text.split(" ").map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-flex whitespace-nowrap text-xs md:text-sm lg:text-sm font-semibold tracking-[0.15em] md:tracking-[0.1em] lg:tracking-[0.1em] uppercase text-zinc-400"
        >
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              variants={headingChar}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};
export default RevealHeading;