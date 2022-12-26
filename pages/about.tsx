import Image from "next/image";
import Contact from "../components/contact";
import Layout from "../components/layout";

export default function About() {
  return (
    
    <div>
     <Layout />
      <div className="pt-40">
        <div className="felx justify-center text-center font-serif text-5xl md:mb-20 mb-10 ">
          <span className="border-2 px-8 py-2 rounded-full border-black border-opacity-70">
            ABOUT
          </span>
        </div>
        <div className="md:mx-20 mx-4 ">
          <div className="">
            <div className="space-y-8 mb-32 w-[40vw] flex justify-start flex-col font-light text-gray-600">
              <h1 className="w-[40w] md:text-2xl text-lg font-mono text-black">
                Choice.
              </h1>
              <p className="relative bottom-5 font-medium text-black">
                중요한 선택일수록 생각보단 행동을 합니다.
              </p>
              <p>
                살아가다 보면 세상은 정해진 선택지와 틀 안에서의 반복 같고,
                옳고 그름이 정해져 있는 것만 같습니다. 그러나 선택지와 틀은
                아는 만큼 보이고, 옳고 그름의 기준도 개개인 마다 다릅니다.
              </p>
              <p>
                그래서 저만의 기준이 필요했습니다. 상대적이지 않고 잘 변하지
                않는, 하지만 그 기준은 세우지 못했습니다. 보이는 게 달라지면서
                항상 기준도 바뀌었습니다. 무엇보다 &#39;경험&#39;의 양이
                부족해서인지, 시야가 좁았고, 좁은 시야 앞에 놓은 선택지들은
                항상 두려움의 대상이었습니다.
              </p>
              <p>
                눈앞에 놓인 선택지는 모두 마음에 들지 않았고, 틀 안에서
                벗어나고 싶었습니다. 학창 시절 학교와 잘 맞지 않던 저는 자퇴를
                결정 했습니다. 많은 청소년이 그렇듯, 저에게도 어려움들이
                있었고 그런 상황에서 맞지 않는 학교에 가야 할 이유를 찾지
                못했습니다.
              </p>
              <p>
                그렇게 자퇴를 결정하게 되었고, 그 선택 후 알게 되었습니다.
                모두가 당연시하던 학교도 선택이였다는 것을. 두려움은 실체보다
                부풀려져 있었다는 사실을.
              </p>
            </div>
            <div className="space-y-8 flex flex-col items-end font-light text-gray-600 mb-32">
              <h1 className="w-[40w] md:text-2xl text-lg font-mono text-black">
                Experience.
              </h1>
              <p className="relative bottom-5 font-medium text-black">
                경험은 저에게 하는 투자라고 생각합니다.
              </p>
              <p className="w-[40vw]">
                저는 시야가 좁고 경험이 부족했기에 경험이 절실했습니다. 학교를
                그만두고 무엇을 해야 할지 알 길이 없는 저는 시야를 넓히고 더
                많은 경험을 하기 위해 비교적 필리핀 유학을 도전 해보았습니다.
                그것이 저의 &#39;첫 도전&#39; 이였습니다.
              </p>
              <p className="w-[40vw]">
                필리핀 스파르타 어학원에서는 아침 일과가 오전 6시부터 오후
                9시까지 정해져 있고, 모든 게 통제되어 있었습니다. 무언가 한
                가지를 위해 그렇게 많은 시간과 노력을 들인 게 처음이라 쉽지
                않았습니다.
              </p>
              <p className="w-[40vw]">
                선택에는 책임이 따른다는 걸 그때 깨달았던 것 같습니다. 하지만
                노력과 결과에 대한 성취 또한 느껴보았습니다.
              </p>
              <p className="w-[40vw]">
                이후 캐나다 유학, 컬리지 입학 그리고 회사 생활까지 많은 실패와
                성취를 통해 경험했습니다.
              </p>
            </div>
            <div className="space-y-8  w-[40vw] flex justify-start flex-col font-light text-gray-600">
              <h1 className="w-[40w] md:text-2xl text-lg font-mono text-black">
                High Goal.
              </h1>
              <p className="relative bottom-5 font-medium text-black">
                높이 향한 꿈은 저를 지속해서 앞으로 나아가게 해주는 원동력
                입니다.
              </p>
              <p>
                어릴 때는 그저 대단한 사람 되고 싶었습니다. 청소년이 되어
                아르바이트를 하다 보니 돈의 무게가 느껴졌고 부자가 되고 싶다는
                생각을 하염없이 했습니다.
              </p>
              <p>
                회사에 다니기 시작하면서는 부자가 되기 위해 벌어야 하는 돈과
                시간을 계산해보기 시작했습니다. 그리고 왜 부자가 되고
                싶었는지도 생각해보았습니다.
              </p>
              <p>저는 돈으로 시간을 사는 사람이 되고 싶습니다.</p>
              <p>저는 제가 성취할 수 있는 일을 하는 사람이고 싶습니다.</p>
              <p>
                그렇기에 전공으로 선택했으나 시작해보지 못했던 프로그래밍을
                시작했고, 제가 하는 일에 성취감과 자부심을 느끼며 일하고
                싶습니다.
              </p>
              <p>그러기 위해 끊임없이 배우고 앞으로 나아가려 합니다.</p>  
            </div> 
          </div>
        </div>
        <Contact />
      </div>
     
    </div>
      
  );
}
