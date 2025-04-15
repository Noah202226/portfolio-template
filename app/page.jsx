import Image from "next/image";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import { HeroWithCards } from "./components/HeroWithCards";
import ProjectOne from "./components/ProjectOne";
import ProjectTwo from "./components/ProjectTwo";
import { Stats } from "./components/Stats";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import InfiniteScroll from "./components/InfiniteScroll";
import TableOfContent from "./components/TableOfContent";
import Slideshow from "./components/Slideshow";
import AnimateOnScroll from "./components/AnimateOnScroll";
import { AboutMe } from "./components/AboutMe";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <AnimateOnScroll direction="down">
        <Hero />
      </AnimateOnScroll>

      <AnimateOnScroll direction="up" delay={1.5}>
        <TableOfContent />
      </AnimateOnScroll>

      <AnimateOnScroll direction="right">
        <AboutMe />
      </AnimateOnScroll>

      <AnimateOnScroll direction="left">
        <Education />
      </AnimateOnScroll>

      <AnimateOnScroll direction="right">
        <HeroWithCards />
      </AnimateOnScroll>

      {/* <AnimateOnScroll direction="right">
        <ProjectTwo />
      </AnimateOnScroll> */}

      <AnimateOnScroll direction="right">
        <Experience />
      </AnimateOnScroll>

      <AnimateOnScroll direction="left">
        <Projects />
      </AnimateOnScroll>

      <AnimateOnScroll direction="right">
        <Stats />
      </AnimateOnScroll>

      <AnimateOnScroll direction="down">
        <InfiniteScroll speed={10} />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <Slideshow />
      </AnimateOnScroll>

      <AnimateOnScroll direction="down">
        <Footer />
      </AnimateOnScroll>
    </>
  );
}
