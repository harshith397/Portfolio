import { useState } from "react";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Connect";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="selection:bg-black selection:text-white" >
      <Header/>
      <Hero id="Me"/>
      <AboutMe id="About"/>
     <Skills id="Skills"/>
      <Projects id="Work"/>
      <Contact id="Connect"/>
    </div>
  )
}

export default Home;
