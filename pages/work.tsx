import Image from "next/image";
import { useEffect, useState } from "react";
import Contact from "../components/contact";
import Layout from "../components/layout";
import { cls } from "../libs/utils";


export default function Work() {
  const [hoverJs, setHoverJs] = useState<
    "beforeHover" | "hover" | "afterHover"
  >("beforeHover");
  const onJsEnter = () => setHoverJs("hover");
  const onJsLeave = () => {
    setTimeout(() => setHoverJs("beforeHover"), 1500), setHoverJs("afterHover");
  };

  const [hoverNext, setHoverNext] = useState<
    "beforeHover" | "hover" | "afterHover"
  >("beforeHover");
  const onNextEnter = () => setHoverNext("hover");
  const onNextLeave = () => {
    setTimeout(() => setHoverNext("beforeHover"), 1500),
      setHoverNext("afterHover");
  };

  const [hoverReact, setHoverReact] = useState<
    "beforeHover" | "hover" | "afterHover"
  >("beforeHover");
  const onReactEnter = () => setHoverReact("hover");
  const onReactLeave = () => {
    setTimeout(() => setHoverReact("beforeHover"), 1500),
      setHoverReact("afterHover");
  };

  const [hoverNode, setHoverNode] = useState<
    "beforeHover" | "hover" | "afterHover"
  >("beforeHover");
  const onNodeEnter = () => setHoverNode("hover");
  const onNodeLeave = () => {
    setTimeout(() => setHoverNode("beforeHover"), 1500),
      setHoverNode("afterHover");
  };
  return (
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
            className=" space-y-5 w-96"
            onMouseEnter={onNextEnter}
            onMouseLeave={onNextLeave}
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
                className={cls(
                  "absolute opacity-95 z-10 grayscale ",
                  hoverNext === "hover"
                    ? "animate-fadeIn "
                    : hoverNext === "afterHover"
                    ? "animate-fadeOut"
                    : hoverNext === "beforeHover"
                    ? "hidden"
                    : ""
                )}
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
            className=" space-y-5 w-96"
            onMouseEnter={onReactEnter}
            onMouseLeave={onReactLeave}
            href="https://github.com/GEON1999/Netflix-clone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative bottom-40 md:left-40">
              <Image
                src="/react.gif"
                width={500}
                height={600}
                className={cls(
                  "absolute opacity-95 z-10 grayscale ",
                  hoverReact === "hover"
                    ? "animate-fadeIn "
                    : hoverReact === "afterHover"
                    ? "animate-fadeOut"
                    : hoverReact === "beforeHover"
                    ? "hidden"
                    : ""
                )}
                alt="project"
              />
            </div>
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
            className=" space-y-5 w-96"
            onMouseEnter={onNodeEnter}
            onMouseLeave={onNodeLeave}
            href="https://github.com/GEON1999/wetube-reloaded"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative md:top-20 bottom-20 md:right-40">
              <Image
                src="/node.gif"
                width={500}
                height={600}
                className={cls(
                  "absolute opacity-95 z-10 grayscale ",
                  hoverNode === "hover"
                    ? "animate-fadeIn "
                    : hoverNode === "afterHover"
                    ? "animate-fadeOut"
                    : hoverNode === "beforeHover"
                    ? "hidden"
                    : ""
                )}
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
            className="space-y-5 w-96 transition duration-1000 ease-out hover:ease-in"
            onMouseEnter={onJsEnter}
            onMouseLeave={onJsLeave}
            href="https://github.com/GEON1999/portfolio-collection"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={cls("relative md:top-20 bottom-20 md:left-40 ")}>
              <Image
                src="/js.gif"
                width={500}
                height={600}
                className={cls(
                  "absolute opacity-95 z-10 grayscale ",
                  hoverJs === "hover"
                    ? "animate-fadeIn "
                    : hoverJs === "afterHover"
                    ? "animate-fadeOut"
                    : hoverJs === "beforeHover"
                    ? "hidden"
                    : ""
                )}
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
  );
}
