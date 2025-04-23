import Contact from "../components/contact";
import Layout from "../components/layout";
import About from "../components/about";
import Projects from "../components/projects";
import Work from "../components/work";
import Home from "../components/home";
export default function Index() {
  return (
    <div>
      <Layout>
        <Home />
        <div className="bg-[#F9FAFB]">
          <About />
          <Work />
          <Projects />
          <Contact />
        </div>
      </Layout>
    </div>
  );
}
