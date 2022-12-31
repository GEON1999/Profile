import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { cls } from "../libs/utils";

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
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
