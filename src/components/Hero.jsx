import React, { useState, useEffect } from "react";
import GridBackground from "./GridBackground";
import heroData from "../data/hero.json";

const PolaroidPhoto = ({ src, alt }) => {
  return (
    <div
      className="relative shrink-0 w-56 md:w-72"
      style={{ transform: "rotate(-3deg)" }}
    >
      {/* White polaroid frame */}
      <div className="bg-white p-3 pb-10 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
        <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover grayscale"
          />
        </div>
        {/* Caption at bottom of polaroid */}
        <p
          className="absolute bottom-2.5 left-0 right-0 text-center text-xs text-gray-400"
          style={{ fontFamily: "cursive" }}
        >
          me.jpeg
        </p>
      </div>
    </div>
  );
};

const Hero = ({ id }) => {
  const { name, role, quote, profileImage, resumeUrl, greetings } = heroData;

  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(intervalId);
  }, [greetings.length]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id={id}
      className="relative overflow-hidden min-h-screen w-full bg-white flex flex-col justify-center px-8 md:px-20 lg:px-32"
    >
      <GridBackground color="#000" opacity={0.07} size={60} />

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center gap-12 md:gap-20 max-w-6xl mx-auto w-full">
        {/* Polaroid photo — sits to the left on md+, above text on mobile */}
        <PolaroidPhoto src={profileImage} alt={name} />

        {/* Text block */}
        <div className="flex flex-col items-start min-w-0 w-full">
          {/* Cycling greeting — large italic serif like the reference */}
          <div
            className="overflow-hidden mb-1 text-3xl md:text-4xl lg:text-5xl text-gray-800 h-[1.2em]"
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateY(-${currentGreetingIndex * 1.2}em)`,
              }}
            >
              {greetings.map((greeting, i) => (
                <div
                  key={i}
                  className="h-[1.2em] leading-[1.2em] whitespace-nowrap"
                >
                  {greeting}
                </div>
              ))}
            </div>
          </div>

          {/* Name — heavy, very large */}
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-semibold text-black leading-none tracking-tight mb-4">
            I'm {name}.
          </h1>

          {/* Role */}
          <p className="text-sm md:text-lg lg:text-lg text-gray-500 font-medium tracking-widest uppercase mb-4">
            {role}
          </p>

          {/* Quote */}
          {quote && (<p
            className="text-base md:text-lg text-gray-400 max-w-md mb-8 leading-relaxed"
            style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
          >
            "{quote}"
          </p>)}
          
        </div>
      </div>
    </section>
  );
};

export default Hero;


