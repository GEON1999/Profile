import Image from "next/image";
import { useEffect, useState } from "react";
import Layout from "../components/layout";

export default function About() {
  const [hoverJs, setHoverJs] = useState(false);
  const onJsEnter = () => setHoverJs(true);
  const onJsLeave = () => setHoverJs(false);

  const [hoverNext, setHoverNext] = useState(false);
  const onNextEnter = () => setHoverNext(true);
  const onNextLeave = () => setHoverNext(false);

  const [hoverReact, setHoverReact] = useState(false);
  const onReactEnter = () => setHoverReact(true);
  const onReactLeave = () => setHoverReact(false);

  const [hoverNode, setHoverNode] = useState(false);
  const onNodeEnter = () => setHoverNode(true);
  const onNodeLeave = () => setHoverNode(false);
  return (
    <div>
      <Layout />
      <div className="felx justify-center text-center font-serif text-5xl mb-20">
        STACK
      </div>
      <div className=" flex  mx-5 flex-col justify-center items-center">
        <div className="text-2xl font-thin font-serif justify-items-start mb-14">
          Main Project
        </div>
        <div className="md:grid md:grid-cols-2 flex flex-col  gap-20 mb-96">
          <a
            className=" space-y-5 w-96"
            onMouseEnter={onNextEnter}
            onMouseLeave={onNextLeave}
            href="https://github.com/GEON1999/carrot-market"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative bottom-40 right-40">
              {hoverNext ? (
                <Image
                  alt="project"
                  src="/next.gif"
                  width={500}
                  height={600}
                  className="absolute opacity-80"
                />
              ) : (
                ""
              )}
            </div>
            <div className="">
              <span className="p-2 bg-white text-xl font-serif">Next.js</span>
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
            <div className="relative bottom-40 left-40">
              {hoverReact ? (
                <Image
                  src="/next.gif"
                  width={500}
                  height={600}
                  className="absolute opacity-80"
                  alt="project"
                />
              ) : (
                ""
              )}
            </div>
            <div className="">
              <span className="p-2 bg-white text-xl font-serif">React.js</span>
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
            <div className="relative top-20 right-40">
              {hoverNode ? (
                <Image
                  src="/next.gif"
                  width={500}
                  height={600}
                  className="absolute opacity-80"
                  alt="project"
                />
              ) : (
                ""
              )}
            </div>
            <div className="">
              <span className="p-2 bg-white text-xl font-serif">Node.js</span>
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
            <div className="relative top-20 left-40 ">
              {hoverJs ? (
                <Image
                  src="/next.gif"
                  width={500}
                  height={600}
                  className="absolute opacity-80"
                  alt="project"
                />
              ) : (
                ""
              )}
            </div>
            <div className="">
              <span className="p-2 bg-white text-xl font-serif">
                Javascript
              </span>
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
    </div>
  );
}
