import Link from "next/link";
import type { Project } from "@/types";
import ImageCarousel from "@/components/ui/ImageCarousel";
import TechBadge from "@/components/ui/TechBadge";
import TabPanel from "@/components/ui/TabPanel";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, technologies, images, work, issues, github, website, period, role } =
    project;

  const roleLabel =
    role === "personal" ? "1人 개인 프로젝트" : undefined;

  return (
    <div className="w-full mx-auto rounded-lg p-3 xl:p-6">
      <div className="flex flex-col xl:flex-row items-start justify-center xl:gap-20">
        {/* Left — Image Carousel */}
        <div className="w-full xl:w-[842px] mb-6 xl:mb-0">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-3 xl:mb-5 font-serif">
            <h3 className="text-2xl xl:text-3xl font-bold mb-2 xl:mb-0">
              {name}
            </h3>
            <div className="flex gap-2 items-center text-[13px] font-sans text-gray-500">
              <span>{period}</span>
              {roleLabel && (
                <>
                  <span>|</span>
                  <span>{roleLabel}</span>
                </>
              )}
            </div>
          </div>

          {images.length > 0 && (
            <ImageCarousel images={images} alt={name} />
          )}

          {/* Description + Links */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t mt-5 pt-3">
            <p className="text-[13px] text-gray-600 mb-3 md:mb-0">
              {description}
            </p>
            <div className="flex gap-2 text-sm">
              {github && (
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                  aria-label={`${name} GitHub 저장소`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    className="w-5 h-5"
                    fill="currentColor"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </Link>
              )}
              {website && (
                <Link
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#0026A4] transition-colors"
                  aria-label={`${name} 웹사이트`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Right — Details */}
        <div className="flex flex-col gap-6 w-full md:w-[564px]">
          {/* Technologies */}
          <div>
            <h4 className="text-[20px] font-bold mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <TechBadge key={index} name={tech} />
              ))}
            </div>
          </div>

          {/* Work */}
          {work.length > 0 && (
            <div>
              <h4 className="text-[20px] font-bold mb-2">Work</h4>
              <ul className="space-y-1">
                {work.map((item, index) => (
                  <li key={index} className="flex">
                    <span className="mr-2 text-gray-400">•</span>
                    <div className="text-[15px]">
                      <span className="font-bold">{item.title}</span>{" "}
                      <span className="text-sm text-gray-500">
                        {item.description[0]}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Issues Tab Panel */}
          {issues && issues.length > 0 && <TabPanel issues={issues} />}
        </div>
      </div>
    </div>
  );
}
