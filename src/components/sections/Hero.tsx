import ResponsiveVideo from "@/components/ui/ResponsiveVideo";

const TAGLINE_CHARS = "Frontend Engineer".split("");

export default function Hero() {
  return (
    // min-h-screen: 히어로가 첫 화면을 꽉 채워 다음 섹션이 걸쳐 보이지 않게 한다.
    // h-screen이 아닌 min-을 쓰는 건 GEON이 25vw라 가로로 긴 화면에서 콘텐츠가
    // 100vh를 넘길 수 있어, 그때는 잘리는 대신 늘어나야 하기 때문.
    <section
      id="home"
      className="text-center relative pt-56 min-h-screen flex flex-col justify-center"
    >
      <div className="mb-32 flex flex-col">
        {/* GEON — video visible INSIDE the text */}
        <div className="relative inline-block bg-white overflow-hidden">
          <h1 className="text-[25vw] font-extrabold text-black flex flex-col leading-none select-none">
            <span>GEON</span>
          </h1>
          {/* sea.mp4 for desktop, dark.mp4 for mobile — screen blend makes video show through black text, white stays white */}
          <ResponsiveVideo
            desktop={{
              src: "/videos/sea.mp4",
              poster: "/videos/sea-poster.jpg",
            }}
            mobile={{
              src: "/videos/dark.mp4",
              poster: "/videos/dark-poster.jpg",
            }}
          />
        </div>

        {/*
          Tagline — video visible INSIDE each letter.

          leading을 1.5로 두는 건 디자인이 아니라 기능이다. 비디오는 inset-0라
          컨테이너 높이만큼만 깔리는데, leading-none이면 컨테이너 높이가 폰트
          크기와 같아 베이스라인 아래로 내려간 디센더(g·p·y)에는 영상이 닿지
          않아 그 부분만 검게 남는다. 줄높이로 여백을 확보해 디센더까지 덮는다.
          남는 여백은 bg-white 위 screen 블렌드라 흰색이 되어 보이지 않는다.

          overflow-hidden은 쓰지 않는다. 클리핑하면 디센더가 잘린다. 비디오가
          컨테이너를 소수점 단위로 넘치는 문제는 globals.css에서 body 배경을
          흰색으로 명시해 해결했다.
        */}
        <div className="relative inline-block bg-white mt-20">
          <span className="flex justify-center text-[3vw] font-extrabold text-black leading-[1.5] select-none whitespace-pre">
            {TAGLINE_CHARS.map((char, i) => (
              <span key={i}>{char}</span>
            ))}
          </span>
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/videos/dark-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ mixBlendMode: "screen" }}
          >
            <source src="/videos/dark.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
