import { aboutSections } from "@/data/about";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 my-24 bg-[#F9FAFB] scroll-mt-24">
      <div>
        <div className="flex justify-center text-center font-serif text-4xl lg:text-5xl md:mb-[105px] mb-5">
          <div className="flex flex-col">
            <span className="border-b-2 px-8 py-1 border-black border-opacity-70">
              ABOUT
            </span>
            <div>
              <span className="text-base px-4 py-1 border-slate-400 text-slate-400">
                About real me
              </span>
            </div>
          </div>
        </div>
        <div className="md:mx-20 mx-4 flex justify-center relative">
          {/* Timeline — desktop only */}
          <div className="flex-col justify-center items-center hidden 2xl:flex absolute top-20">
            <div className="w-[15px] h-[15px] bg-black rounded-full" />
            <div className="lg:h-[891px] w-[1px] bg-black" />
            <div className="w-[15px] h-[15px] bg-black rounded-full" />
          </div>

          {/* Awareness image */}
          <Image
            src="/images/awareness.png"
            width={145}
            height={145}
            alt="about"
            className="w-[145px] h-[145px] hidden 2xl:block absolute top-96"
          />

          <div className="flex flex-col justify-center lg:w-[1178px]">
            {aboutSections.map((section, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={section.titleEn}
                  className={`flex flex-col font-light mb-[100px] ${
                    isEven ? "lg:items-end" : "lg:items-start"
                  }`}
                >
                  <div
                    className={`${!isEven ? "flex flex-col lg:items-end" : ""}`}
                  >
                    <h1 className="md:text-2xl text-lg font-serif font-bold text-black">
                      {section.titleEn}
                    </h1>
                    <h2
                      className={`mt-1 ${
                        index === 2 ? "mb-4" : "mb-5"
                      } font-bold text-[15px] text-[#404040]`}
                    >
                      &ldquo;{section.titleKo}&rdquo;
                    </h2>
                    <div
                      className={`lg:w-[478px] space-y-[30px] ${
                        !isEven ? "lg:text-end" : ""
                      }`}
                    >
                      {section.paragraphs.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
