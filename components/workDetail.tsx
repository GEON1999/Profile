import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
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
  const placeholderText = [
    { type: "heading1", text: "Framer Motion" },
    {
      type: "heading2",
      text: "Animating responsive text!",
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
      <motion.div
        variants={variants}
        initial={"initial"}
        animate={id ? "toggled" : ""}
        layoutId={id ? String(id) : ""}
        exit={id === null ? "exit" : ""}
        transition={{ duration: 1 }}
        className="absolute top-[20vh] left-[10vw] w-[80vw] h-[60vh] bg-white rounded-md"
      >
        <div
          className={cls(
            "flex items-center space-x-4 grayscale absolute ",
            id ? "z-50" : ""
          )}
        >
          <div className="p-4 ">
            <Image
              alt="project"
              src={`/${id}.gif`}
              width={500}
              height={500}
              className="shadow-lg"
            />
          </div>
          <motion.div
            className="App"
            initial="hidden"
            // animate="visible"
            animate={"visible"}
            variants={textBox}
          >
            <div className="container">
              {placeholderText.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
