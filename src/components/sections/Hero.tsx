"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="text-center relative pt-56 lg:h-[90vh] flex flex-col justify-center"
    >
      <div className="mb-32">
        {/* GEON Text with video background */}
        <div className="relative inline-block">
          <div className="text-[25vw] font-extrabold text-white flex flex-col leading-none">
            <span>GEON</span>
          </div>
          {/* Video overlay for text mask — sea.mp4 on md+, dark.mp4 on mobile */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
            style={{ mixBlendMode: "screen" }}
          >
            <source src="/videos/sea.mp4" type="video/mp4" />
          </video>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover md:hidden"
            style={{ mixBlendMode: "screen" }}
          >
            <source src="/videos/dark.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Adaptability Text with dark.mp4 background */}
        <div className="relative inline-block mt-2">
          <span className="flex justify-center text-[3vw] font-extrabold text-white leading-none">
            {"Adaptability".split("").map((char, i) => (
              <p key={i}>{char}</p>
            ))}
          </span>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ mixBlendMode: "screen" }}
          >
            <source src="/videos/dark.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
