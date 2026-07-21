import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="py-40 bg-[#F9FAFB] scroll-mt-24">
      <SectionTitle
        title="PROJECTS"
        subtitle="My recent projects"
        className="mb-12 xl:mb-[90px]"
      />

      <div className="container mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="mb-12 md:mb-28">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
