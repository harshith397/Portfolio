import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const MarkerSpan = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <span
      ref={ref}
      style={{
        background: "linear-gradient(#FEF08A, #FEF08A) no-repeat left center",
        backgroundSize: isInView ? "100% 85%" : "0% 85%",
        transition: isInView ? "background-size 1.5s ease" : "none",
        paddingBottom: "1px",
      }}
    >
      {children}
    </span>
  );
};

export default MarkerSpan;