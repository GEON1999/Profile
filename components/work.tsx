export default function Work() {
  return (
    <section id="career" className="my-24 scroll-mt-40 bg-[#F9FAFB]">
      <div className="felx justify-center text-center font-serif text-4xl lg:text-5xl mb-5 flex-col">
        <div>
          <span className="border-b-2 border-black border-opacity-70 px-8 py-1 ">
            CAREER
          </span>
        </div>
        <div>
          <span className=" text-base px-4 py-1 border-slate-400 text-slate-400">
            A collection of my work experience
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-10 px-4 lg:px-40 mt-4 lg:mt-10 ">
          <div className="flex lg:flex-row flex-col items-center lg:gap-10 gap-3 lg:bg-white rounded-2xl lg:shadow-sm py-[25px] px-[32px]">
            <div className="w-28 h-28 lg:w-[126px] lg:h-[126px] rounded-2xl overflow-hidden flex justify-center items-center border border-[#DDDDDD] aspect-square ">
              <img src="/images/career/playdonut_logo.png" alt="work1" />
            </div>
            <div className="lg:w-[400px] w-full text-center lg:text-left">
              <h3 className="text-[24px] font-bold text-[#9F0F0F]">
                Playdonut
              </h3>
              <p className="text-[#404040] font-bold text-[15px]">
                2023.04-2024.09
              </p>
              <p className="text-[#404040] font-bold text-[15px] mt-2">
                PC방 런처를 기반으로 e스포츠 토너먼트 대회를{" "}
                <br className="hidden md:block" /> 주최하는 플랫폼 서비스
              </p>
            </div>
            <div className="hidden lg:block border-l border-[#DDDDDD] h-[120px] w-[1px]"></div>
            <div className="w-full lg:w-[350px] mt-4 lg:mt-0">
              <p className="bg-[#9F0F0F] text-white w-[108px] mx-auto lg:mx-0 text-center rounded-full text-[13px] py-[1px]">
                프론트엔드 개발
              </p>
              <ul className="list-disc list-inside text-[13px] text-black mt-1">
                <li>e스포츠 관련 토너먼트 플랫폼 개발</li>
                <li>PC방 사용자의 활동을 추적하는 웹 MVP 개발</li>
                <li>PC방 런처 어드민 페이지 신규 개발 및 유지보수</li>
                <li>포트폴리오 웹 퍼블리싱 및 유지보수 전담</li>
                <li>Code Migration (Trimou → Next.js)</li>
              </ul>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center lg:gap-10 gap-3 lg:bg-white rounded-2xl lg:shadow-sm py-[25px] px-[32px]">
            <div className="w-28 h-28 lg:w-[126px] lg:h-[126px] rounded-2xl overflow-hidden flex justify-center items-center border border-[#DDDDDD] aspect-square ">
              <img
                className="w-[100px] h-[100px]"
                src="/images/career/igs_logo.png"
                alt="work2"
              />
            </div>
            <div className="lg:w-[400px] w-full text-center lg:text-left">
              <h3 className="text-[24px] font-bold text-[#FF7520]">IGS</h3>
              <p className="text-[#404040] font-bold text-[15px]">
                2021.05-2022.04.30
              </p>
              <p className="text-[#404040] font-bold text-[15px] mt-2">
                넷마블 게임을 주축으로 다양한 게임사의 운영,{" "}
                <br className="hidden md:block" /> CS, QA 서비스를 제공하는 게임
                서비스 전문 기업
              </p>
            </div>
            <div className="hidden lg:block border-l border-[#DDDDDD] h-[120px] w-[1px]"></div>
            <div className="w-full lg:w-[350px] mt-4 lg:mt-0">
              <p className="bg-[#FF7520] text-white w-[108px] mx-auto lg:mx-0 text-center rounded-full text-[13px] py-[1px]">
                프로젝트 매니저
              </p>
              <ul className="list-disc list-inside text-[13px] text-black mt-1">
                <li>프로젝트 일정 및 담당자 업무 관리</li>
                <li>데이터 및 VOC 기반 이벤트 / 콘텐츠 기획 및 제안</li>
                <li>웹 콘텐츠 기획 및 관리</li>
                <li>
                  커뮤니티 및 인게임 데이터, 유저 지표 분석을 통한 인사이트 도출
                </li>
                <li>데이터 지표 기반 게임 내/외 개선 및 전략 수립</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
