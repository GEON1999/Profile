import { useState } from "react";
import Contact from "../components/contact";
import Layout from "../components/layout";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetail from "../components/ProjectDetail";
import { cls } from "../libs/utils";
import projectData from "../project.json";

export default function Projects() {
  const [toggleBox, setToggleBox] = useState<
    "DayShare" | "LauncherAdmin" | "Battlepod" | "Playdonut" | null
  >(null);

  return (
    <div>
      <div>
        <Layout />
        <div className="felx justify-center text-center font-serif text-5xl mb-10 pt-40 flex-col">
          <div>
            <span className="border-b-2 border-black border-opacity-70 px-8 py-1 ">
              PROJECTS
            </span>
          </div>
          <div>
            <span className=" text-base px-4 py-1 border-slate-400 text-slate-400">
              Click the boxes below to see a preview
            </span>
          </div>
        </div>
        <div className=" flex  mx-5 flex-col justify-center items-center">
          <div className="text-2xl font-serif justify-items-start mb-14"></div>
          <div className="md:grid md:grid-cols-2 flex flex-col  gap-20">
            <motion.div
              whileHover={{ scale: 1.1 }}
              layoutId="project-DayShare"
              onClick={() => setToggleBox("DayShare")}
              className=" space-y-5 w-96 cursor-pointer"
            >
              <div>
                <div className="absolute border-b border-gray-300 w-96" />
                <div className="relative -top-3 text-center ">
                  <span className="text-xl font-serif bg-white px-3">
                    DayShare
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2  items-start  ml-5 gap-5">
                <span className="">
                  <h1 className="text-lg">Next.js 14</h1>
                  <p className="text-sm text-gray-500">
                    Enhanced loading speed with server components
                  </p>
                </span>
                <span>
                  <h1 className="text-lg">Tailwind</h1>
                  <p className="text-sm text-gray-500">
                    Consistent design with utility classes for faster
                    development
                  </p>
                </span>
                <span>
                  <h1 className="text-lg">AWS</h1>
                  <p className="text-sm text-gray-500">
                    RDS for database, EC2 for hosting, S3 for file storage
                  </p>
                </span>
                <span>
                  <h1 className="text-lg">Flutter</h1>
                  <p className="text-sm text-gray-500">
                    Single codebase for iOS/Android development
                  </p>
                </span>
                <span>
                  <h1 className="text-lg">FastAPI</h1>
                  <p className="text-sm text-gray-500">
                    Async processing with auto documentation
                  </p>
                </span>
                <span className="">
                  <h1 className="text-lg ">zustand</h1>
                  <p className="text-sm text-gray-500">
                    Minimized boilerplate for simpler state management
                  </p>
                </span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              layoutId="project-LauncherAdmin"
              className=" space-y-5 w-96 cursor-pointer "
              onClick={() => setToggleBox("LauncherAdmin")}
            >
              <div>
                <div className="absolute border-b border-gray-300 w-96" />
                <div className="relative -top-3 text-center ">
                  <span className="text-xl font-serif bg-white px-3">
                    Launcher Admin
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2  items-start  ml-5 gap-5">
                <span>
                  <h1 className="text-lg">Nextjs 14</h1>
                  <p className="text-sm text-gray-500">
                    Enhanced loading speed with server components
                  </p>
                </span>
                <span className="">
                  <h1 className="text-lg ">Typescript</h1>
                  <p className="text-sm text-gray-500">
                    Type safety to prevent runtime errors and enable
                    autocomplete
                  </p>
                </span>
                <span className="">
                  <h1 className="text-lg">tanstack query</h1>
                  <p className="text-sm text-gray-500">
                    Optimized data fetching with caching and auto-refetching
                  </p>
                </span>
                <span>
                  <h1 className="text-lg">valtio</h1>
                  <p className="text-sm text-gray-500">
                    Real-time data sync critical for ad management platform
                  </p>
                </span>
                <span>
                  <h1 className="text-lg">axios</h1>
                  <p className="text-sm text-gray-500">
                    Consistent API communication with interceptors
                  </p>
                </span>
                <span>
                  <h1 className="text-lg">NextAuth</h1>
                  <p className="text-sm text-gray-500">
                    Seamless integration with Next.js for streamlined
                    authentication
                  </p>
                </span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              layoutId="project-Battlepod"
              className=" space-y-5 w-96 cursor-pointer "
              onClick={() => setToggleBox("Battlepod")}
            >
              <div>
                <div className="absolute border-b border-gray-300 w-96" />
                <div className="relative -top-3 text-center ">
                  <span className="text-xl font-serif bg-white px-3">
                    Battlepod
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 items-start ml-5 gap-5">
                <span className="">
                  <h1 className="text-lg ">React</h1>
                  <p className="text-sm text-gray-500">
                    Component-based UI for reusability and maintainability
                  </p>
                </span>
                <span>
                  <h1 className="text-lg">gsap</h1>
                  <p className="text-sm text-gray-500">
                    High-performance animations for smooth user experience
                  </p>
                </span>
                <span className="">
                  <h1 className="text-lg">ngrok</h1>
                  <p className="text-sm text-gray-500">
                    HTTPS and external access in local development
                  </p>
                </span>
                <span>
                  <h1 className="text-lg">passport</h1>
                  <p className="text-sm text-gray-500">
                    Multiple authentication strategies for custom auth logic
                  </p>
                </span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              layoutId="project-Playdonut"
              className=" space-y-5 w-96 cursor-pointer "
              onClick={() => setToggleBox("Playdonut")}
            >
              <div>
                <div className="absolute border-b border-gray-300 w-96" />
                <div className="relative -top-3 text-center ">
                  <span className="text-xl font-serif bg-white px-3">
                    Playdonut
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2  items-start  ml-5 gap-5">
                <span className="">
                  <h1 className="text-lg ">Javascript</h1>
                  <p className="text-sm text-gray-500">
                    Lightweight solution for rapid development without
                    frameworks
                  </p>
                </span>
                <span className="">
                  <h1 className="text-lg ">HTML</h1>
                  <p className="text-sm text-gray-500">
                    Simple markup for quick prototyping and minimal overhead
                  </p>
                </span>
                <span>
                  <h1 className="text-lg">CSS</h1>
                  <p className="text-sm text-gray-500">
                    Pure styles for efficient rendering and smaller bundle size
                  </p>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
        <Contact />
      </div>

      {/* 숨겨진 이미지 프리로더 (선택적) */}
      <div className="hidden">
        {projectData.projects.map((project) =>
          project.images?.map((imgSrc: string, idx: number) => (
            <img key={`${project.id}-${idx}`} src={imgSrc} alt="preload" />
          ))
        )}
      </div>

      <AnimatePresence>
        {toggleBox !== null && (
          <div
            className={cls(
              "fixed w-full h-full bg-gray-800 bg-opacity-20 top-0 bottom-0 left-0 right-0 z-40"
            )}
          >
            <ProjectDetail
              id={toggleBox}
              layoutId={`project-${toggleBox}`}
              onClose={() => setToggleBox(null)}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
