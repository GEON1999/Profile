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
          className="fixed flex justify-center items-center lg:top-[26rem] xl:top-[28rem] top-96"
        >
          <div
            className={cls(
              "w-96 h-[30rem] lg:w-[45rem] lg:h-[40rem] xl:w-[60rem] xl:h-[50rem] flex justify-center items-center space-x-4 lg:space-x-10  grayscale absolute flex-col lg:flex-row px-1 md:px-10 py-5 lg:py-5 bg-white ",
              id ? "z-40" : ""
            )}
          >
            <img
              alt="project"
              src={`/${id}.gif`}
              className="shadow-2xl  lg:w-[32rem] lg:h-[32rem] xl:w-[40rem] xl:h-[40rem] w-80 h-80 mb-4"
            />

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

                <div className="flex z-50  md:mt-5">
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
                        height="32px"
                        version="1.1"
                        viewBox="0 0 32 32"
                        width="32px"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
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
                          d="M11.393,30.176c-0.171,0-0.342-0.029-0.506-0.089C4.695,27.841,0.728,21.911,1.015,15.33   c0.012-0.275,0.232-0.485,0.521-0.478c0.276,0.012,0.49,0.246,0.478,0.521c-0.268,6.142,3.435,11.677,9.214,13.772   c0.151,0.056,0.318,0.033,0.453-0.063c0.139-0.098,0.218-0.25,0.217-0.417l-0.008-1.573c-3.927,0.561-4.857-2.375-4.867-2.406   c-0.552-1.405-1.342-1.82-1.35-1.824c-0.342-0.229-0.996-0.676-0.81-1.262c0.167-0.528,0.852-0.563,1.136-0.572   c1.736,0.122,2.616,1.693,2.652,1.76c0.956,1.643,2.414,1.446,3.335,1.094c0.09-0.452,0.239-0.863,0.439-1.216   c-2.872-0.486-6.176-1.973-6.176-7.568c0-1.531,0.479-2.88,1.424-4.016C7.465,10.408,7.205,8.97,7.917,7.157   C7.972,7.017,8.087,6.91,8.23,6.864C8.374,6.817,9.703,6.47,12.46,8.29c1.119-0.291,2.309-0.442,3.539-0.448   c1.234,0.006,2.423,0.157,3.543,0.448c2.756-1.82,4.08-1.473,4.226-1.426c0.143,0.046,0.257,0.153,0.312,0.292   c0.715,1.813,0.456,3.251,0.247,3.927c0.944,1.133,1.422,2.482,1.422,4.016c0,5.595-3.308,7.078-6.185,7.559   c0.354,0.623,0.549,1.426,0.549,2.32c0,1.013-0.005,2.465-0.01,3.692c0,0.166,0.077,0.315,0.214,0.412   c0.137,0.096,0.306,0.119,0.463,0.063C26.295,27.141,30,21.858,30,16c0-3.863-1.54-7.46-4.335-10.129   c-2.794-2.667-6.462-4.037-10.336-3.855c-0.275,0.021-0.509-0.201-0.523-0.476c-0.013-0.276,0.2-0.51,0.476-0.523   c4.152-0.19,8.08,1.274,11.073,4.131C29.351,8.007,31,11.861,31,16c0,6.277-3.97,11.937-9.878,14.084   c-0.463,0.167-0.978,0.099-1.38-0.185c-0.401-0.283-0.64-0.744-0.638-1.233c0.005-1.226,0.01-2.676,0.01-3.688   c0-1.459-0.567-2.107-0.811-2.317c-0.15-0.13-0.21-0.337-0.151-0.526c0.059-0.19,0.225-0.327,0.422-0.349   c3.054-0.34,6.176-1.401,6.176-6.686c0-1.38-0.458-2.582-1.36-3.569c-0.13-0.143-0.167-0.347-0.094-0.526   c0.139-0.34,0.524-1.537-0.042-3.198c-0.423,0.012-1.503,0.189-3.34,1.44c-0.122,0.083-0.274,0.109-0.416,0.068   c-1.084-0.302-2.293-0.465-3.499-0.472c-1.218,0.006-2.395,0.165-3.494,0.472c-0.141,0.042-0.293,0.015-0.416-0.068   c-1.83-1.245-2.91-1.427-3.346-1.438c-0.563,1.661-0.177,2.855-0.039,3.196c0.072,0.179,0.036,0.383-0.094,0.525   c-0.904,0.991-1.362,2.192-1.362,3.57c0,5.282,3.115,6.35,6.162,6.697c0.196,0.022,0.361,0.158,0.42,0.347   c0.059,0.188,0.001,0.395-0.147,0.525c-0.224,0.197-0.621,0.672-0.756,1.64c-0.023,0.17-0.133,0.316-0.29,0.386   c-0.75,0.338-3.316,1.237-4.858-1.413c-0.011-0.019-0.525-0.921-1.444-1.186c0.326,0.218,1.077,0.852,1.631,2.265   c0.043,0.133,0.808,2.409,4.313,1.646c0.148-0.031,0.301,0.003,0.419,0.098c0.118,0.094,0.187,0.237,0.188,0.387l0.011,2.17   c0.002,0.491-0.237,0.955-0.641,1.239C12,30.082,11.698,30.176,11.393,30.176z"
                          fill="#263238"
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
