import Layout from "../components/layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [state, setState] = useState<"initial" | "github" | "mail">("initial");
  return (
    <div>
      <div>
        <Layout />
        <div className="felx justify-center text-center font-serif text-5xl mb-10 pt-40 flex-col">
          <div>
            <span className="border-b-2 border-black border-opacity-70 px-8 py-1 ">
              CONTACT
            </span>
          </div>
          <div>
            <span className=" text-base px-4 py-1 border-slate-400 text-slate-400">
              Contact me in a convenient way
            </span>
          </div>
        </div>
        <div className="flex justify-center space-x-40 lg:space-x-96">
          <Link href="https://github.com/GEON1999">
            <a target="_blank" rel="noopener noreferrer" className="Link-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                className="w-7 h-7 md:w-10 md:h-10 cursor-pointer"
                onClick={() => setState("github")}
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
          </Link>
          <Link href="mailto:phgst12@gmail.com">
            <a target="_blank" rel="noopener noreferrer" className="Link-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 md:w-10 md:h-10 cursor-pointer"
                onClick={() => setState("mail")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
      <div className="w-full h-64 xl:h-[26rem] bg-slate-200 bg-opacity-20 mt-10 flex justify-center items-center text-center">
        <span className="text-xl opacity-60 font-serif">
          {state === "initial"
            ? "Click Icon"
            : state === "github"
            ? "https://github.com/GEON1999"
            : state === "mail"
            ? "phgst12@gmail.com"
            : ""}
        </span>
      </div>
      <div className="flex justify-center text-center items-center flex-col mt-10 lg:mt-14 mb-10">
        <p className="font-mono">How was this website? </p>
        <p className="font-mono text-slate-400 text-sm">
          if you don&#39;t mind, please take part in the survey
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6  animate-bounce text-slate-600 my-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <Link href="https://forms.gle/vtpBJ4M19RguGBW27">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-3 rounded-full bg-white border-black border text-sm hover:bg-black hover:text-white hover:ease-out duration-1000"
          >
            PARTAKE
          </a>
        </Link>
      </div>
    </div>
  );
}
