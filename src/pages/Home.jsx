import { useState } from "react";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Connect";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="selection:bg-black selection:text-white">
      <Header/>
      <Hero id="Me"/>
      <AboutMe id="About"/>
      <Skills id="Skills"/>
      <Projects id="Work"/>
      <Contact id="Connect"/>
      <p className="text-center text-xs text-zinc-400 py-6">
        Inspired by{" "}
        <a
          href="https://www.gowthamoleti.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-zinc-600 transition-colors"
        >
          Gautham Oleti
        </a>
      </p>
    </div>
  );
};

export default Home;