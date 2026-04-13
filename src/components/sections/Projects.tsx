import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-40 bg-[#F9FAFB] scroll-mt-24">
      <div className="flex justify-center text-center font-serif text-4xl lg:text-5xl mb-12 xl:mb-[90px] flex-col">
        <div>
          <span className="border-b-2 border-black border-opacity-70 px-8 py-1">
            PROJECTS
          </span>
        </div>
        <div>
          <span className="text-base px-4 py-1 border-gray-500 text-gray-500">
            My recent projects
          </span>
        </div>
      </div>

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
