import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Contact from "../components/contact";
import Layout from "../components/layout";
import { cls } from "../libs/utils";
import { motion, AnimatePresence, useInView } from "framer-motion";

const variants = {
  toggled: {
    opacity: 100,
    zIndex: 1,
  },
  initial: {
    opacity: 0,
    zIndex: -10,
    x: -100,
  },
  exit: {
    opacity: 0,
    zIndex: -10,
  },
};

export default function Work() {
  const [toggleBox, setToggleBox] = useState<
    "next" | "react" | "node" | "js" | null
  >(null);

  return (
    <AnimatePresence>
      <div>
        <Layout />
        <div className="felx justify-center text-center font-serif text-5xl mb-10 pt-40">
          <span className="border-2 px-8 py-2 rounded-full border-black border-opacity-70 ">
            WORK
          </span>
        </div>
        <div className=" flex  mx-5 flex-col justify-center items-center">
          <div className="text-2xl font-serif justify-items-start mb-14"></div>
          <div className="md:grid md:grid-cols-2 flex flex-col  gap-20">
            <motion.div
              layoutId="next"
              onClick={() => setToggleBox("next")}
              className=" space-y-5 w-96 group/next"
            >
              <div>
                <div className="absolute border-b border-gray-300 w-96" />
                <div className="relative -top-3 text-center ">
                  <span className="text-xl font-serif bg-white px-3">
                    Next.js
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
                  <h1 className="text-lg">Tailwind</h1>
                  <p className="text-sm text-gray-500">
                    to make responsive web
                  </p>
                </span>
                <span className="">
                  <h1 className="text-lg">SWR</h1>
                  <p className="text-sm text-gray-500">to fetch data</p>
                </span>
                <span>
                  <h1 className="text-lg">Planet & Prisma</h1>
                  <p className="text-sm text-gray-500">to manage DB with SQL</p>
                </span>
                <span>
                  <h1 className="text-lg">IronSession</h1>
                  <p className="text-sm text-gray-500">to save session</p>
                </span>
                <span>
                  <h1 className="text-lg">Vercel</h1>
                  <p className="text-sm text-gray-500">to deploy</p>
                </span>
              </div>
            </motion.div>
            <motion.div
              layoutId="react"
              className=" space-y-5 w-96 group/react:"
              onClick={() => setToggleBox("react")}
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
              layoutId="node"
              className=" space-y-5 w-96 group/node:"
              onClick={() => setToggleBox("node")}
            >
              <div>
                <div className="absolute border-b border-gray-300 w-96" />
                <div className="relative -top-3 text-center ">
                  <span className="text-xl font-serif bg-white px-3">
                    Node.js
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2  items-start  ml-5 gap-5">
                <span className="">
                  <h1 className="text-lg ">Javascript</h1>
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
              layoutId="js"
              className="space-y-5 w-96 transition duration-1000 ease-out hover:ease-in group/js:"
              onClick={() => setToggleBox("js")}
            >
              <div>
                <div className="absolute border-b border-gray-300 w-96" />
                <div className="relative -top-3 text-center ">
                  <span className="text-xl font-serif bg-white px-3">
                    Javascript
                  </span>
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
      <div
        className={cls(
          "absolute w-screen h-screen bg-gray-800 bg-opacity-20 top-0 flex flex-col",
          toggleBox ? "z-40" : "hidden"
        )}
        onClick={() => setToggleBox(null)}
      >
        <motion.div
          variants={variants}
          initial={"initial"}
          animate={toggleBox ? "toggled" : ""}
          layoutId={toggleBox ? toggleBox : ""}
          exit={toggleBox === null ? "exit" : ""}
          transition={{ duration: 1 }}
          className="absolute top-[30vh] left-[30vw]"
        >
          <div
            className={cls(
              "flex items-center space-x-4 grayscale",
              toggleBox ? "z-50" : ""
            )}
          >
            <motion.img
              alt="project"
              src={`/${toggleBox}.gif`}
              width={500}
              height={500}
            />
            <p>this is responsive web, like dangeon market</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
