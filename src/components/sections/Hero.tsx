"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Video Background for text mask */}
      <div className="relative mb-8">
        <div className="relative">
          {/* Text with video mask effect */}
          <div className="text-[25vw] font-extrabold leading-none text-center select-none">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "url(/videos/dark.mp4)",
              }}
            >
              GEON
            </span>
          </div>

          {/* Overlay video for text masking using CSS */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{
                mixBlendMode: "screen",
              }}
            >
              <source src="/videos/sea.mp4" type="video/mp4" />
            </video>
            <div
              className="absolute inset-0 bg-white"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>

          {/* Fallback: solid text behind for the masking effect */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <span className="text-[25vw] font-extrabold leading-none text-gray-900">
              GEON
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <div className="flex justify-center mt-4">
          <span className="text-[3vw] md:text-2xl font-extrabold text-gray-900 tracking-[0.3em]">
            Adaptability
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </section>
  );
}
