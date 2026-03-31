import { projects } from "@/data/projects";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#F9FAFB] scroll-mt-20">
      <SectionTitle title="PROJECTS" subtitle="My recent projects" />

      <div className="section-container">
        {projects.map((project) => (
          <div key={project.id} className="mb-12 md:mb-28">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
