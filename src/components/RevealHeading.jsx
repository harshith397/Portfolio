import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const RevealHeading = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
  return (
    <div ref={ref} className="flex overflow-hidden">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: "0%", opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: i * 0.04 }}
          className="inline-block text-xs md:text-sm lg:text-sm font-semibold tracking-[0.15em] md:tracking-[0.1em] lg:tracking-[0.1em] uppercase text-zinc-400"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};
export default RevealHeading;