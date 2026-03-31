import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Career from "@/components/sections/Career";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="bg-[#F9FAFB]">
          <About />
          <Career />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
