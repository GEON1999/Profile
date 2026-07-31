import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Career from "@/components/sections/Career";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <div className="bg-[#F9FAFB]">
          <Career />
          <Projects />
          <Skills />
          {/* About은 의도적으로 하단 배치 — 방문자(리크루터)는 경력을 먼저,
              끝까지 읽은 사람에게 서사를 준다 */}
          <About />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
