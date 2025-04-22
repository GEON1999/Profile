export default function About() {
  return (
    <section id="about" className="py-24 my-24 bg-[#F9FAFB] scroll-mt-24">
      <div>
        <div className="felx justify-center text-center font-serif text-4xl lg:text-5xl md:mb-[105px] mb-5 ">
          <span className="border-b-2 px-8 py-1  border-black border-opacity-70">
            ABOUT
          </span>
          <div>
            <span className="text-base px-4 py-1 border-slate-400 text-slate-400">
              About real me
            </span>
          </div>
        </div>
        <div className="md:mx-20 mx-4 flex justify-center relative">
          <div className="flex-col justify-center items-center hidden 2xl:flex absolute top-20 ">
            <div className="w-[15px] h-[15px] bg-black rounded-full" />
            <div className="lg:h-[891px] w-[1px] bg-black" />
            <div className="w-[15px] h-[15px] bg-black rounded-full" />
          </div>
          <img
            src="/images/awareness.png"
            className="w-[145px] h-[145px] hidden 2xl:block absolute top-96"
            alt="about"
          />
          <div className="flex flex-col justify-center lg:w-[1178px]">
            <div className="flex flex-col lg:items-end font-light mb-[100px]">
              <div>
                <h1 className="md:text-2xl text-lg font-mono text-black  ">
                  Phantom Fear
                </h1>
                <h2 className="mt-1 mb-5 font-medium text-black">
                  "공포의 허상"
                </h2>
                <div className="lg:w-[478px] space-y-[30px]">
                  <p>
                    삶을 대하는 태도가 무거워질 때면, 보이지 않는 저편에서
                    '두려움'이라는 <br /> 이름의 파도가 우리를 덮칠 듯
                    다가옵니다. 여유가 부족한 순간에는 스스로 <br /> 만들어낸
                    공포에 휘둘리며 멈춰 서기도 하지요.
                  </p>
                  <p>
                    저 또한 두려움과 후회의 늪에 빠져, 아무것도 할 수 없다는
                    주문을 스스로에게 <br /> 걸며 한동안 주저앉아 있었습니다.
                  </p>
                  <p>
                    그러다 문득 '두려움은 허상일 뿐'이고, 우리는 그저 찰나의
                    순간을 지나가고 <br /> 있다는 사실을 깨달았습니다. 그 순간
                    저는 자유로움을 느꼈습니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:items-start font-light mb-[100px]">
              <div className="flex flex-col lg:items-end">
                <h1 className=" md:text-2xl text-lg font-mono text-black">
                  Awareness
                </h1>
                <h2 className="mt-1 mb-5 font-medium text-black">"알아차림"</h2>
                <div className="lg:w-[478px] space-y-[30px] lg:text-end">
                  <p>
                    심리학자들은 우리가 현재를 겨우 2~3초만 인지할 수 있다고
                    말합니다. <br /> 그 짧고도 짧은 시간이 지나면 심리적으로는
                    과거가 되어버리는 것이지요. <br /> 테세우스의 배처럼 우리
                    몸을 이루는 세포도 끊임없이 교체되기에, <br /> '지난 나'가
                    진정한 '나'인지도 확신할 수 없습니다. <br /> 결국 확신할 수
                    있는 것은 이 순간, 이 찰나뿐 일지도 모르겠습니다.
                  </p>
                  <p>
                    그래서 저는 이 찰나를, 아주 잠깐의 현재를 온전히 살아가는
                    대에
                    <br /> 집중하고자 노력했습니다. 매일 절반 이상을 보내는
                    직장을
                    <br />
                    단순한 수입수단으로만 여기지 않고, 진심으로 좋아하는 일을
                    하기로 결심했습니다.
                  </p>
                  <p>
                    독서와 글쓰기를 즐기며, 눈에 보이는 기록과 성과에서 만족을
                    얻는 제게 <br /> 프론트엔드 개발은 가장 자연스러운
                    선택이었습니다.
                    <br />
                    독학으로 시작해 회사에서 실제 프로젝트를 경험하면서, 개발이
                    제게 단순한 <br /> 생계 수단을 넘어 '자아를 실현하는
                    창구'임을 확신하게 되었습니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:items-end font-light mb-[100px]">
              <div>
                <h1 className=" md:text-2xl text-lg font-mono text-black">
                  Breakthrough
                </h1>
                <h2 className="mt-1 mb-4 font-medium text-black">"도약"</h2>
                <div className="lg:w-[478px] space-y-[30px]">
                  <p>
                    이제 저는 더 뛰어난 개발자가 되고자 합니다. 아직 부족한
                    알고리즘과 컴퓨터 <br /> 과학 기초 지식을 꾸준히 쌓아, 전체
                    흐름을 이해하고 선택의 이유를 명확히 설 <br />
                    명할 수 있는 역량을 갖추려 노력 중입니다.
                  </p>
                  <p>
                    끊임없이 배우고 유연한 자세로 수용하며, 팀과 사용자에게
                    편안함을 주는 코 <br />
                    드를 손수 만들어가겠습니다. 앞으로 함께할 여정에서도 이
                    열정을 잃지 않고, <br />
                    팀에 활기를 불어넣는 사람이 되겠습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
