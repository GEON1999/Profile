import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Contact from "../components/contact";
import Layout from "../components/layout";

const titleFadeIn = {
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  initail: {
    x: -200,
    opacity: 0,
  },
};

const textFadeIn = {
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.2,
    },
  },
  initail: {
    x: -200,
    opacity: 0,
  },
};

const titleFadeIn2 = {
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  initail: {
    x: 200,
    opacity: 0,
  },
};

const textFadeIn2 = {
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.2,
    },
  },
  initail: {
    x: 200,
    opacity: 0,
  },
};

export default function About() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  useEffect(() => {
    if (isInView) {
      console.log("view!");
    }
  }, [isInView]);
  return (
    <AnimatePresence>
      <div>
        <Layout />
        <motion.div className="pt-40">
          <div className="felx justify-center text-center font-serif text-5xl md:mb-20 mb-10 ">
            <span className="border-b-2 px-8 py-1  border-black border-opacity-70">
              ABOUT
            </span>
            <div>
              <span className=" text-base px-4 py-1 border-slate-400 text-slate-400">
                scroll down to read more
              </span>
            </div>
          </div>
          <div className="md:mx-20 mx-4 ">
            <div className="">
              <div className="space-y-8 mb-32 lg:w-[40vw] flex justify-center lg:justify-start flex-col font-light text-gray-600">
                <motion.h1
                  ref={ref}
                  variants={titleFadeIn}
                  initial={"initail"}
                  animate={isInView ? "animate" : ""}
                  className="w-[40w] md:text-2xl text-lg font-mono text-black  "
                >
                  Choice.
                </motion.h1>
                <motion.h2
                  variants={titleFadeIn}
                  initial={"initail"}
                  animate={isInView ? "animate" : ""}
                  className="relative bottom-5 font-medium text-black"
                >
                  “삶은 선택의 연속이다.”
                </motion.h2>
                <motion.div
                  className="space-y-8"
                  variants={textFadeIn}
                  initial={"initail"}
                  animate={isInView ? "animate" : ""}
                >
                  <p>
                    사람은 살아가면서 하루 평균 35,000번의 선택을 한다고 합니다.
                    이 선택은 아주 사소한 것부터 내 인생을 변화시킬 수 있을 만큼
                    중요한 선택일 수도 있습니다.
                  </p>
                  <p>
                    인생에는 다양한 선택의 기로와 선택지들이 즐비해있지만 저는
                    눈앞에 놓인 대부분의 선택지가 만족스럽지 않았습니다.
                  </p>
                  <p>
                    35001번째의 선택, 이때까지와 다른 새로운 선택지가
                    필요했습니다, 차별화되고 저를 성장시켜줄.
                  </p>
                  <p>
                    유년 시절 저는 잘 맞지 않던 학교를 자퇴하였고 이후 알게
                    되었습니다. 모두가 당연히 가야 한다고 말하던 학교도 또
                    하나의 선택일 뿐이었다는 것을.
                  </p>
                </motion.div>
              </div>
              <div className="space-y-8 flex flex-col lg:items-end font-light text-gray-600 mb-32">
                <motion.h1
                  className="lg:w-[40w] md:text-2xl text-lg font-mono text-black"
                  ref={ref2}
                  variants={titleFadeIn2}
                  initial={"initail"}
                  animate={isInView2 ? "animate" : ""}
                >
                  Experience.
                </motion.h1>
                <motion.h2
                  variants={titleFadeIn2}
                  initial={"initail"}
                  animate={isInView2 ? "animate" : ""}
                  className="relative bottom-5 font-medium text-black"
                >
                  “경험은 가장 훌륭한 스승이다.”
                </motion.h2>
                <motion.div
                  className="space-y-8 flex flex-col items-end"
                  variants={textFadeIn2}
                  initial={"initail"}
                  animate={isInView2 ? "animate" : ""}
                >
                  <p className="lg:w-[40vw]">
                    학교를 자퇴한 저를 이끌어 줄 새로운 스승이 필요했고, 저만의
                    선택에 맞는 새로운 스승을 찾기 위한 다양한 경험의
                    시작이었습니다.
                  </p>
                  <p className="lg:w-[40vw]">
                    첫걸음은 &#39;필리핀 유학&#39;이었습니다.
                  </p>
                  <p className="lg:w-[40vw]">
                    자퇴 이후 오히려 모든 것이 통제된 스파르타 어학원에서 오전
                    6시부터 오후 9시까지 정해진 일과를 진행하면서 많은 시간과
                    노력을 투자하였습니다.
                  </p>
                  <p className="lg:w-[40vw]">
                    그리고 필리핀 유학 이후 캐나다 유학, 컬리지 입학, 한국에
                    귀국한 이후 회사 생활까지 연이어 다양한 경험을 하였으며
                    노력과 결과에 대한 성취 또한 느끼게 되었습니다.
                  </p>
                  <p className="lg:w-[40vw]">
                    저는 제 선택들로 얻은 차별화된 경험으로 역량을 키울 수
                    있었고 더 나은 퍼포먼스를 보여줄 수 있게 되었다고
                    생각합니다.
                  </p>
                </motion.div>
              </div>
              <div className="space-y-8  lg:w-[40vw] flex justify-center lg:justify-start flex-col font-light text-gray-600">
                <motion.h1
                  ref={ref3}
                  variants={titleFadeIn}
                  initial={"initail"}
                  animate={isInView3 ? "animate" : ""}
                  className="w-[40w] md:text-2xl text-lg font-mono text-black"
                >
                  High Goal.
                </motion.h1>
                <motion.h2
                  className="relative bottom-5 font-medium text-black"
                  variants={titleFadeIn}
                  initial={"initail"}
                  animate={isInView3 ? "animate" : ""}
                >
                  “계획을 실행에 옮기면 꿈은 실현된다.”
                </motion.h2>
                <motion.div
                  className="space-y-8"
                  variants={textFadeIn}
                  initial={"initail"}
                  animate={isInView3 ? "animate" : ""}
                >
                  <p>
                    저는 실행력이 강하다고 자부합니다. 특히 어떠한 일을
                    행함으로써 실체가 있는 결과를 얻었을 때 실행력과 승부욕이
                    강해집니다.
                  </p>
                  <p>저는 그래서 프로그래밍이 좋았습니다.</p>
                  <p>
                    제 손으로 코딩을 하며, 차근차근 결과물들이 쌓아 올리고 그
                    결과들이 목표를 향해 나가는 모습이 저와 많이 닮았다고
                    생각합니다.
                  </p>
                  <p>
                    프로그래밍은 이제 시작하는 단계이기에 경험이 부족하지만,
                    목표를 향한 강한 의지가 길잡이가 되어줄 것이며, 어느새 결과
                    앞에 대려다 줄 것이라 생각합니다.
                  </p>
                  <p>
                    지금까지의 제 선택들과 그로 인해 얻은 경험들은 어려움 앞에서
                    더욱 빛을 발할 것이고, 차츰차츰 앞으로 나아가 완성된
                    개발자가 될 것입니다.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <Contact />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
