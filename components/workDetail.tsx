import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cls } from "../libs/utils";
import AnimatedText from "./AnimatedText";

const variants = {
  toggled: {
    opacity: 100,
    zIndex: 1,
  },
  initial: {
    opacity: 0,
    zIndex: -10,
  },
  exit: {
    opacity: 0,
    zIndex: -10,
  },
};

export default function WorkDetail({ id }: any) {
  const [toggleBtn, setToggleBtn] = useState<"git" | "web" | "mail" | null>(
    null
  );

  const placeholderText = [
    { type: "heading1", text: `${id} Project.` },
    {
      type: "heading2",
      text: "Check out more info",
    },
  ];
  const textBox = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  return (
    <AnimatePresence>
      <div className="flex justify-center">
        <motion.div
          variants={variants}
          initial={"initial"}
          animate={id ? "toggled" : ""}
          layoutId={id ? String(id) : ""}
          exit={id === null ? "exit" : ""}
          transition={{ duration: 1 }}
          className="fixed top-32 w-96 md:w-[40rem] 2xl:w-[50rem] h-[60vh] bg-white rounded-md flex justify-center items-center"
        >
          <div
            className={cls(
              "flex items-center space-x-4 lg:space-x-10  grayscale absolute flex-col lg:flex-row px-2 md:px-4 py-2",
              id ? "z-40" : ""
            )}
          >
            <div className=" lg:hidden">
              <Image
                alt="project"
                src={`/${id}.gif`}
                width={300}
                height={300}
                className="shadow-lg "
              />
            </div>
            <div className="hidden lg:block">
              <Image
                alt="project"
                src={`/${id}.gif`}
                width={700}
                height={600}
                className="shadow-lg "
              />
            </div>

            <motion.div
              className="App"
              initial="hidden"
              // animate="visible"
              animate={"visible"}
              variants={textBox}
            >
              <div className="flex flex-col items-center">
                <div className="container lg:mb-32  font-serif">
                  {placeholderText.map((item, index) => {
                    return <AnimatedText {...item} key={index} />;
                  })}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 lg:w-10 lg:h-10 animate-bounce text-slate-400 lg:mb-40"
                >
                  <motion.path
                    initial={{ pathLength: 0, fill: "none", opacity: 0 }}
                    animate={{
                      pathLength: 1,
                      fill: "dfd0c6",
                      opacity: 1,
                    }}
                    transition={{
                      default: { duration: 3, ease: "easeInOut" },
                      fill: { duration: 3, ease: [1, 0, 0.8, 1] },
                    }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <div className="flex z-50 mt-10 md:mt-5">
                  <Link
                    href={
                      id === "Next"
                        ? "https://github.com/GEON1999/carrot-market"
                        : id === "React"
                        ? "https://github.com/GEON1999/Netflix-clone"
                        : id === "Node"
                        ? "https://github.com/GEON1999/wetube-reloaded"
                        : id === "Js"
                        ? "https://github.com/GEON1999/portfolio-collection"
                        : ""
                    }
                  >
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <motion.path
                          initial={{ pathLength: 1, fill: "none", opacity: 0 }}
                          animate={{
                            pathLength: 0,
                            fill: "dfd0c6",
                            opacity: 1,
                          }}
                          transition={{
                            default: { duration: 3, ease: "easeInOut" },
                            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
                          }}
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                        />
                      </svg>
                    </motion.a>
                  </Link>
                  <Link
                    href={
                      id === "Next"
                        ? "https://carrot-market-4enoiaajg-geon1999.vercel.app/"
                        : id === "React"
                        ? "https://geon1999.github.io/Netflix-clone/"
                        : id === "Node"
                        ? "https://github.com/GEON1999/wetube-reloaded"
                        : id === "Js"
                        ? "https://geon1999.github.io/portfolio-collection/"
                        : ""
                    }
                  >
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mx-10"
                      >
                        <motion.path
                          initial={{ pathLength: 0, fill: "none", opacity: 0 }}
                          animate={{
                            pathLength: 1,
                            fill: "#dfd0c6",
                            opacity: 1,
                          }}
                          transition={{
                            default: { duration: 3, ease: "easeInOut" },
                            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
                          }}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    </motion.a>
                  </Link>
                  <Link href="mailto:phgst12@gmail.com">
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <motion.path
                          initial={{ pathLength: 0, fill: "none", opacity: 0 }}
                          animate={{
                            pathLength: 1,
                            fill: "#dfd0c6",
                            opacity: 1,
                          }}
                          transition={{
                            default: { duration: 3, ease: "easeInOut" },
                            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
                          }}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </motion.a>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
