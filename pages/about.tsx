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
                    다수의 사람들이 선택한 흔히들 말하는 모범 답안이 아닌 저만의
                    선택을 하고 싶었습니다.
                  </p>
                  <p>
                    그렇게 저는 잘 맞지 않던 학교에서 자퇴를 선택했고, 이 후
                    알게되었습니다. 모두가 당연히 가야한다고 말하던 학교도 또
                    하나의 선택이였다는 것을.
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
                  경험은 저에게 하는 투자라고 생각합니다.
                </motion.h2>
                <motion.div
                  className="space-y-8 flex flex-col items-end"
                  variants={textFadeIn2}
                  initial={"initail"}
                  animate={isInView2 ? "animate" : ""}
                >
                  <p className="lg:w-[40vw]">
                    저는 시야가 좁고 경험이 부족했기에 경험이 절실했습니다.
                    학교를 그만두고 무엇을 해야 할지 알 길이 없는 저는 시야를
                    넓히고 더 많은 경험을 하기 위해 필리핀 유학을 도전
                    해보았습니다. 그것이 저의 &#39;첫 도전&#39; 이였습니다.
                  </p>
                  <p className="lg:w-[40vw]">
                    필리핀 스파르타 어학원에서는 아침 일과가 오전 6시부터 오후
                    9시까지 정해져 있고, 모든 게 통제되어 있었습니다. 무언가 한
                    가지를 위해 그렇게 많은 시간과 노력을 들인 게 처음이라 쉽지
                    않았습니다.
                  </p>
                  <p className="lg:w-[40vw]">
                    선택에는 책임이 따른다는 걸 그때 깨달았던 것 같습니다.
                    하지만 노력과 결과에 대한 성취 또한 느껴보았습니다.
                  </p>
                  <p className="lg:w-[40vw]">
                    이후 캐나다 유학, 컬리지 입학 그리고 회사 생활까지 많은
                    실패와 성취를 통해 경험했습니다.
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
                  높이 향한 꿈은 저를 지속해서 앞으로 나아가게 해주는 원동력
                  입니다.
                </motion.h2>
                <motion.div
                  className="space-y-8"
                  variants={textFadeIn}
                  initial={"initail"}
                  animate={isInView3 ? "animate" : ""}
                >
                  <p>
                    어릴 때는 그저 대단한 사람 되고 싶었습니다. 청소년이 되어
                    아르바이트를 하다 보니 돈의 무게가 느껴졌고 부자가 되고
                    싶다는 생각을 하염없이 했습니다.
                  </p>
                  <p>
                    회사에 다니기 시작하면서는 부자가 되기 위해 벌어야 하는 돈과
                    시간을 계산해보기 시작했습니다. 그리고 왜 부자가 되고
                    싶었는지도 생각해보았습니다.
                  </p>
                  <p>저는 돈으로 시간을 사는 사람이 되고 싶습니다.</p>
                  <p>
                    저는 지속적으로 성취할 수 있는 일을 하는 사람이고 싶습니다.
                  </p>
                  <p>
                    그렇기에 전공으로 선택했으나 시작해보지 못했던 프로그래밍을
                    시작했고, 제가 하는 일에 성취와 자부심을 느끼며 일하고
                    싶습니다.
                  </p>
                  <p>그러기 위해 끊임없이 배우고 또 배우기로 다짐 했습니다.</p>
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
