import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  return (
    <section id="about">
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
                Present.
              </motion.h1>
              <motion.h2
                variants={titleFadeIn}
                initial={"initail"}
                animate={isInView ? "animate" : ""}
                className="relative bottom-5 font-medium text-black"
              >
                “현재에 대하여”
              </motion.h2>
              <motion.div
                className="space-y-8"
                variants={textFadeIn}
                initial={"initail"}
                animate={isInView ? "animate" : ""}
              >
                <p>
                  우리 인간은 현재를 심리적 인지로 2~3초 정도밖에 하지 못한다고
                  합니다. 2~3초 그 짧은 시간이 지나면 과거가 되는 것이지요.
                  테세우스의 배와 같이 저의 몸을 구성하는 세포들 또한 계속해서
                  교체됩니다.
                </p>
                <p>
                  신체적으로도, 정신적으로도 과거의 저와 현재의 저는 같은
                  사람이라고 단언하기 쉽지 않죠. 그렇기에 저는 이 찰나의 순간인
                  '현재'의 중요성을 매번 되뇌입니다.
                </p>
                <p>현재를 알아차리고, 온전히 만끽하기 위해 노력합니다.</p>
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
                MindControl.
              </motion.h1>
              <motion.h2
                variants={titleFadeIn2}
                initial={"initail"}
                animate={isInView2 ? "animate" : ""}
                className="relative bottom-5 font-medium text-black"
              >
                “두려움에 대하여”
              </motion.h2>
              <motion.div
                className="space-y-8 flex flex-col items-end"
                variants={textFadeIn2}
                initial={"initail"}
                animate={isInView2 ? "animate" : ""}
              >
                <p className="lg:w-[40vw]">
                  삶을 대하는 태도가 심각해 질 때면 보이지 않는 곳 저편에서
                  두려움들이 스멀스멀 올라오기 시작합니다.
                </p>
                {/* <p className="lg:w-[40vw]">
                  첫걸음은 &#39;필리핀 유학&#39;이었습니다.
                </p> */}
                <p className="lg:w-[40vw]">
                  그럴 때마다 저는 이 모든 것이 찰나를 지나는 중일 뿐이라는 것을
                  되뇌입니다. 아주 찰나의 순간을 지나가는 중이라는 것을 인지하는
                  것만으로 자유로워지는 듯 합니다.
                </p>
                <p className="lg:w-[40vw]">
                  자유를, 지금을 온전히 만끽하고자 삶을 살고자 하는 저는
                  자연스럽게, 제가 하고싶은 걸 해야겠다는 다짐을 하게되었습니다.
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
                Programming.
              </motion.h1>
              <motion.h2
                className="relative bottom-5 font-medium text-black"
                variants={titleFadeIn}
                initial={"initail"}
                animate={isInView3 ? "animate" : ""}
              >
                “나에게 개발이란”
              </motion.h2>
              <motion.div
                className="space-y-8"
                variants={textFadeIn}
                initial={"initail"}
                animate={isInView3 ? "animate" : ""}
              >
                <p>
                  그것이 저에게는 개발이었습니다. 읽기를 좋아하고 눈에 보이는
                  기록과 흔적 남기기를 좋아하는 성향의 저에겐 개발이 흥미로웠고,
                  운영 회사를 다니면서 독학을 하였습니다.
                </p>
                <p>저는 그래서 프로그래밍이 좋았습니다.</p>
                <p>
                  이후 제가 작성한 코드를 통해 프로젝트를 만들고, 개발 회사에
                  입사해서 제가 만들고 업데이트한 서비스가 사용자들에게 닿았을
                  땐 큰 쾌감을 느꼈습니다.
                </p>
                <p>
                  저는 여전히 개발이 재미있고, 배움에 열정적입니다. 이 마음을
                  간직하며 계속해서 더 좋은 코드를, 서비스를 만들어나가겠습니다.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
