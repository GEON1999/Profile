import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function Contact() {
  return (
    <div className="flex space-x-[6vw] justify-center items-center my-28">
      <div className="space-y-2">
        <div className="relative border-b-2 top-8 border-black w-full" />
        <span className=" text-lg font-extrabold">Contact</span>

        <p className="font-thin text-sm ">
          저와 함께하고 싶으시다면, 연락해 주세요.
        </p>
      </div>
      <Link href="/contact">
        <a className="px-5 py-3 rounded-full text-sm font-thin shadow-sm border-black border hover:bg-black hover:text-white hover:ease-out duration-1000 ">
          CLICK
        </a>
      </Link>
    </div>
  );
}
