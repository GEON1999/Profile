import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const mobileVariant = {
  animate: {
    x: 0,
    opacity: 1,
  },
};

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
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  return (
    <section id="about" className="py-24 my-24 bg-gray-50 scroll-mt-24">
      <motion.div>
        <div className="felx justify-center text-center font-serif text-4xl lg:text-5xl md:mb-20 mb-5 ">
          <span className="border-b-2 px-8 py-1  border-black border-opacity-70">
            ABOUT
          </span>
          <div>
            <span className=" text-base px-4 py-1 border-slate-400 text-slate-400">
              About real me
            </span>
          </div>
        </div>
        <div className="md:mx-20 mx-4 ">
          <div className="">
            <div className="mb-32 lg:w-[40vw] flex justify-center lg:justify-start flex-col font-light text-gray-600">
              <motion.h1
                ref={ref}
                variants={!isMobile ? titleFadeIn : mobileVariant}
                initial={!isMobile ? "initail" : "animate"}
                animate={!isMobile ? (isInView ? "animate" : "") : "animate"}
                className="w-[40w] md:text-2xl text-lg font-mono text-black  "
              >
                Phantom Fear.
              </motion.h1>
              <motion.h2
                variants={!isMobile ? titleFadeIn : mobileVariant}
                initial={!isMobile ? "initail" : "animate"}
                animate={!isMobile ? (isInView ? "animate" : "") : "animate"}
                className="mt-1 mb-5 font-medium text-black"
              >
                "공포의 허상"
              </motion.h2>
              <motion.div
                className="space-y-6"
                variants={!isMobile ? textFadeIn : mobileVariant}
                initial={!isMobile ? "initail" : "animate"}
                animate={!isMobile ? (isInView ? "animate" : "") : "animate"}
              >
                <p>
                  삶을 대하는 태도가 무거워질 때면, 보이지 않는 저편에서
                  '두려움'이라는 이름의 파도가 우리를 덮칠 듯 다가옵니다. 여유가
                  부족한 순간에는 스스로 만들어낸 공포에 휘둘리며 멈춰 서기도
                  하지요.
                </p>
                <p>
                  저 또한 두려움과 후회의 늪에 빠져, 아무것도 할 수 없다는
                  주문을 스스로에게 걸며 한동안 주저앉아 있었습니다.
                </p>
                <p>
                  그러다 문득 '두려움은 허상일 뿐'이고, 우리는 그저 찰나의
                  순간을 지나가고 있다는 사실을 깨달았습니다. 그 순간 저는
                  자유로움을 느꼈습니다.
                </p>
              </motion.div>
            </div>
            <div className="flex flex-col lg:items-end font-light text-gray-600 mb-32">
              <motion.h1
                className="lg:w-[40w] md:text-2xl text-lg font-mono text-black"
                ref={ref2}
                variants={!isMobile ? titleFadeIn2 : mobileVariant}
                initial={!isMobile ? "initail" : "animate"}
                animate={!isMobile ? (isInView2 ? "animate" : "") : "animate"}
              >
                Awareness.
              </motion.h1>
              <motion.h2
                variants={!isMobile ? titleFadeIn2 : mobileVariant}
                initial={!isMobile ? "initail" : "animate"}
                animate={!isMobile ? (isInView2 ? "animate" : "") : "animate"}
                className="mt-1 mb-5 font-medium text-black"
              >
                "알아차림"
              </motion.h2>
              <motion.div
                className="space-y-6 flex flex-col items-end"
                variants={!isMobile ? textFadeIn2 : mobileVariant}
                initial={!isMobile ? "initail" : "animate"}
                animate={!isMobile ? (isInView2 ? "animate" : "") : "animate"}
              >
                <p className="lg:w-[40vw]">
                  심리학자들은 우리가 현재를 겨우 2~3초만 인지할 수 있다고
                  말합니다. 그 짧고도 짧은 시간이 지나면 심리적으로는 과거가
                  되어버리는 것이지요. 테세우스의 배처럼 우리 몸을 이루는 세포도
                  끊임없이 교체되기에, '지난 나'가 진정한 '나'인지도 확신할 수
                  없습니다. 결국 확신할 수 있는 것은 이 순간, 이 찰나뿐 일지도
                  모르겠습니다.
                </p>

                <p className="lg:w-[40vw]">
                  그래서 저는 이 찰나를, 아주 잠깐의 현재를 온전히 살아가는 대에
                  집중하고자 노력했습니다. 매일 절반 이상을 보내는 직장을 단순한
                  수입수단으로만 여기지 않고, 진심으로 좋아하는 일을 하기로
                  결심했습니다.
                </p>
                <p className="lg:w-[40vw]">
                  독서와 글쓰기를 즐기며, 눈에 보이는 기록과 성과에서 만족을
                  얻는 제게 프론트엔드 개발은 가장 자연스러운 선택이었습니다.
                  독학으로 시작해 회사에서 실제 프로젝트를 경험하면서, 개발이
                  제게 단순한 생계 수단을 넘어 '자아를 실현하는 창구'임을
                  확신하게 되었습니다.
                </p>
              </motion.div>
            </div>
            <div className="lg:w-[40vw] flex justify-center lg:justify-start flex-col font-light text-gray-600">
              <motion.h1
                ref={ref3}
                variants={!isMobile ? titleFadeIn : mobileVariant}
                initial={!isMobile ? "initail" : "animate"}
                animate={!isMobile ? (isInView3 ? "animate" : "") : "animate"}
                className="w-[40w] md:text-2xl text-lg font-mono text-black"
              >
                Breakthrough.
              </motion.h1>
              <motion.h2
                className="mt-1 mb-4 font-medium text-black"
                variants={!isMobile ? titleFadeIn : mobileVariant}
                initial={!isMobile ? "initail" : "animate"}
                animate={!isMobile ? (isInView3 ? "animate" : "") : "animate"}
              >
                "도약"
              </motion.h2>
              <motion.div
                className="space-y-6"
                variants={!isMobile ? textFadeIn : mobileVariant}
                initial={!isMobile ? "initail" : "animate"}
                animate={!isMobile ? (isInView3 ? "animate" : "") : "animate"}
              >
                <p>
                  이제 저는 더 뛰어난 개발자가 되고자 합니다. 아직 부족한
                  알고리즘과 컴퓨터 과학 기초 지식을 꾸준히 쌓아, 전체 흐름을
                  이해하고 선택의 이유를 명확히 설명할 수 있는 역량을 갖추려
                  노력 중입니다.
                </p>
                <p>
                  끊임없이 배우고 유연한 자세로 수용하며, 팀과 사용자에게
                  편안함을 주는 코드를 손수 만들어가겠습니다. 앞으로 함께할
                  여정에서도 이 열정을 잃지 않고, 팀에 활기를 불어넣는 사람이
                  되겠습니다.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
