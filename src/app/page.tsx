import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
// TODO: About 섹션 임시 숨김 — 복구 시 아래 import와 렌더, Header의 ABOUT 항목을 함께 되살릴 것
// import About from "@/components/sections/About";
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
          {/* <About /> */}
          <Career />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
