import { useEffect, useState } from "react";
import Contact from "../components/contact";
import Layout from "../components/layout";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetail from "../components/ProjectDetail";
import { cls } from "../libs/utils";
import projectData from "../project.json";

export default function Projects() {
  const [toggleBox, setToggleBox] = useState<
    "DayShare" | "React" | "Node" | "Js" | null
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
                    to make a server side web app
                  </p>
                </span>
                <span>
                  <h1 className="text-lg">Tailwind</h1>
                  <p className="text-sm text-gray-500">
                    to make responsive web
                  </p>
                </span>
                <span>
                  <h1 className="text-lg">AWS</h1>
                  <p className="text-sm text-gray-500">to manage DB & server</p>
                </span>
                <span>
                  <h1 className="text-lg">Flutter</h1>
                  <p className="text-sm text-gray-500">
                    to make a cross platform mobile app
                  </p>
                </span>
                <span>
                  <h1 className="text-lg">FastAPI</h1>
                  <p className="text-sm text-gray-500">
                    to make a server side API
                  </p>
                </span>
                <span className="">
                  <h1 className="text-lg ">zustand</h1>
                  <p className="text-sm text-gray-500">to manage state</p>
                </span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              layoutId="project-React"
              className=" space-y-5 w-96 cursor-pointer "
              onClick={() => setToggleBox("React")}
            >
              <div>
                <div className="absolute border-b border-gray-300 w-96" />
                <div className="relative -top-3 text-center ">
                  <span className="text-xl font-serif bg-white px-3">
                    React.js
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2  items-start  ml-5 gap-5">
                <span className="">
                  <h1 className="text-lg ">Typescript</h1>
                  <p className="text-sm text-gray-500">
                    to manage error & improve productivity
                  </p>
                </span>
                <span>
                  <h1 className="text-lg">Styled-components</h1>
                  <p className="text-sm text-gray-500">
                    To make the code light and simple
                  </p>
                </span>
                <span className="">
                  <h1 className="text-lg">Framer Motion</h1>
                  <p className="text-sm text-gray-500">
                    to make a natural animation effect
                  </p>
                </span>
                <span>
                  <h1 className="text-lg">React Query</h1>
                  <p className="text-sm text-gray-500">
                    to handle data and error
                  </p>
                </span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              layoutId="project-Node"
              className=" space-y-5 w-96 cursor-pointer "
              onClick={() => setToggleBox("Node")}
            >
              <div>
                <div className="absolute border-b border-gray-300 w-96" />
                <div className="relative -top-3 text-center ">
                  <span className="text-xl font-serif bg-white px-3">
                    Node.js
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 items-start ml-5 gap-5">
                <span className="">
                  <h1 className="text-lg ">Js</h1>
                  <p className="text-sm text-gray-500">
                    to make web page interactive
                  </p>
                </span>
                <span>
                  <h1 className="text-lg">MongoDB</h1>
                  <p className="text-sm text-gray-500">
                    to handle data without SQL
                  </p>
                </span>
                <span className="">
                  <h1 className="text-lg">Pug</h1>
                  <p className="text-sm text-gray-500">
                    to make the HTML code simple
                  </p>
                </span>
                <span>
                  <h1 className="text-lg">Scss</h1>
                  <p className="text-sm text-gray-500">
                    to reduce amount of lines in its code
                  </p>
                </span>
                <span>
                  <h1 className="text-lg">Heroku</h1>
                  <p className="text-sm text-gray-500">to deploy</p>
                </span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              layoutId="project-Js"
              className=" space-y-5 w-96 cursor-pointer "
              onClick={() => setToggleBox("Js")}
            >
              <div>
                <div className="absolute border-b border-gray-300 w-96" />
                <div className="relative -top-3 text-center ">
                  <span className="text-xl font-serif bg-white px-3">Js</span>
                </div>
              </div>
              <div className="grid grid-cols-2  items-start  ml-5 gap-5">
                <span className="">
                  <h1 className="text-lg ">HTML</h1>
                  <p className="text-sm text-gray-500">
                    to divide elements structurally
                  </p>
                </span>
                <span>
                  <h1 className="text-lg">CSS</h1>
                  <p className="text-sm text-gray-500">to mkae website fancy</p>
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
