import Projects from "@/components/Projects";
import Hero from "../components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="flex flex-col gap-14 mb-14 md:gap-36 lg:gap-48 md:mx-[60px]">
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
