import ResponsiveVideo from "@/components/ui/ResponsiveVideo";

const ADAPTABILITY_CHARS = "Adaptability".split("");

export default function Hero() {
  return (
    <section
      id="home"
      className="text-center relative pt-56 lg:h-[90vh] flex flex-col justify-center"
    >
      <div className="mb-32 flex flex-col">
        {/* GEON — video visible INSIDE the text */}
        <div className="relative inline-block bg-white overflow-hidden">
          <h1 className="text-[25vw] font-extrabold text-black flex flex-col leading-none select-none">
            <span>GEON</span>
          </h1>
          {/* sea.mp4 for desktop, dark.mp4 for mobile — screen blend makes video show through black text, white stays white */}
          <ResponsiveVideo
            desktop={{ src: "/videos/sea.mp4", poster: "/videos/sea-poster.jpg" }}
            mobile={{ src: "/videos/dark.mp4", poster: "/videos/dark-poster.jpg" }}
          />
        </div>

        {/* Adaptability — video visible INSIDE each letter */}
        <div className="relative inline-block bg-white overflow-hidden mt-2">
          <span className="flex justify-center text-[3vw] font-extrabold text-black leading-none select-none">
            {ADAPTABILITY_CHARS.map((char, i) => (
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
