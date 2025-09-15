import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import DarkModeToggle from "@/components/DarkModeToggle";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <DarkModeToggle />
      <Hero />
      <Skills />
      <Projects />
      <Testimonials />
      <About />
      <Contact />
    </main>
  );
};

export default Index;