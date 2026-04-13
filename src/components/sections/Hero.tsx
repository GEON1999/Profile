"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="text-center relative pt-56 lg:h-[90vh] flex flex-col justify-center"
    >
      <div className="mb-32 flex flex-col">
        {/* GEON — video visible INSIDE the text */}
        <div className="relative inline-block bg-white overflow-hidden">
          <div className="text-[25vw] font-extrabold text-black flex flex-col leading-none select-none">
            <span>GEON</span>
          </div>
          {/* sea.mp4 for desktop, dark.mp4 for mobile — screen blend makes video show through black text, white stays white */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/videos/sea-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover hidden md:block pointer-events-none"
            style={{ mixBlendMode: "screen" }}
          >
            <source src="/videos/sea.mp4" type="video/mp4" />
          </video>
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/videos/dark-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover md:hidden pointer-events-none"
            style={{ mixBlendMode: "screen" }}
          >
            <source src="/videos/dark.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Adaptability — video visible INSIDE each letter */}
        <div className="relative inline-block bg-white overflow-hidden mt-2">
          <span className="flex justify-center text-[3vw] font-extrabold text-black leading-none select-none">
            {"Adaptability".split("").map((char, i) => (
              <p key={i}>{char}</p>
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
