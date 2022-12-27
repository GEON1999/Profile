import { useEffect, useState } from "react";
import Image from "next/image";
import Contact from "../components/contact";
import Layout from "../components/layout";
import { cls } from "../libs/utils";
import { motion, AnimatePresence } from "framer-motion";


const variants = {
  hover: {
    opacity : 100
  },
  initial: {
    opacity: 0
  }
};

export default function Work() {
const [hoverNext, setHoverNext] = useState(false)
const isNextHover = () => setHoverNext(true)
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
          <a
            className=" space-y-5 w-96 group/next "
            
            href="https://github.com/GEON1999/carrot-market"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative bottom-40 md:right-40">
              <Image
                alt="project"
                src="/next.gif"
                width={500}
                height={100}
                className="absolute  z-10 grayscale scale-0  group-hover/next:animate-[fadeInOut_1s_ease-in]  "
              />
            </div>
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
                <p className="text-sm text-gray-500">to make responsive web</p>
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
          </a>
          <a
            className=" space-y-5 w-96 group/react:"
            onMouseEnter={isNextHover}
            href="https://github.com/GEON1999/Netflix-clone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div className="relative bottom-40 md:left-40" variants={variants} animate={hoverNext ? "hover" : "initial"}>
              <Image
                src="/react.gif"
                width={500}
                height={600}
                className="absolute opacity-95 z-10 grayscale "
                alt="project"
              />
            </motion.div >
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
          </a>
          <a
            className=" space-y-5 w-96 group/node:"
            href="https://github.com/GEON1999/wetube-reloaded"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative md:top-20 bottom-20 md:right-40">
              <Image
                src="/node.gif"
                width={500}
                height={600}
                className="absolute opacity-95 z-10 grayscale invisible group-hover/node:visible"
                alt="project"
              />
            </div>
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
          </a>
          <a
            className="space-y-5 w-96 transition duration-1000 ease-out hover:ease-in group/js:"
            href="https://github.com/GEON1999/portfolio-collection"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={cls("relative md:top-20 bottom-20 md:left-40 ")}>
              <Image
                src="/js.gif"
                width={500}
                height={600}
                className="absolute opacity-95 z-10 grayscale invisible group-hover/js:visible"
                alt="project"
              />
            </div>
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
          </a>
        </div>
      </div>
      <Contact />
    </div>
    </AnimatePresence>
  );
}
