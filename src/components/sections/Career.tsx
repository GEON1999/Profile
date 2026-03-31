import { careers } from "@/data/career";
import Image from "next/image";

export default function Career() {
  return (
    <section id="career" className="my-24 scroll-mt-40 bg-[#F9FAFB]">
      <div className="flex justify-center text-center font-serif text-4xl lg:text-5xl mb-5 flex-col">
        <div>
          <span className="border-b-2 border-black border-opacity-70 px-8 py-1">
            CAREER
          </span>
        </div>
        <div>
          <span className="text-base px-4 py-1 border-slate-400 text-slate-400">
            A collection of my work experience
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-10 px-4 lg:px-40 mt-4 lg:mt-10">
          {careers.map((career) => (
            <div
              key={career.id}
              className="flex lg:flex-row flex-col items-center lg:gap-10 gap-3 lg:bg-white rounded-2xl lg:shadow-sm py-[25px] px-[32px]"
            >
              {/* Logo */}
              <div className="w-28 h-28 lg:w-[126px] lg:h-[126px] rounded-2xl overflow-hidden flex justify-center items-center border border-[#DDDDDD] aspect-square">
                <Image
                  src={career.logo}
                  alt={career.company}
                  width={career.logoWidth ?? 126}
                  height={career.logoHeight ?? 126}
                  className={
                    career.logoWidth
                      ? `w-[${career.logoWidth}px] h-[${career.logoHeight}px]`
                      : ""
                  }
                />
              </div>

              {/* Info */}
              <div className="lg:w-[400px] w-full text-center lg:text-left">
                <h3
                  className="text-[24px] font-bold"
                  style={{ color: career.roleColor }}
                >
                  {career.company}
                </h3>
                <p className="text-[#404040] font-bold text-[15px]">
                  {career.period}
                </p>
                <p className="text-[#404040] font-bold text-[15px] mt-2">
                  {career.description}
                </p>
              </div>

              {/* Divider */}
              <div className="hidden lg:block border-l border-[#DDDDDD] h-[120px] w-[1px]" />

              {/* Highlights */}
              <div className="w-full lg:w-[350px] mt-4 lg:mt-0">
                <p
                  className="text-white w-[108px] mx-auto lg:mx-0 text-center rounded-full text-[13px] py-[1px]"
                  style={{ backgroundColor: career.roleColor }}
                >
                  {career.role}
                </p>
                <ul className="list-disc list-inside text-[13px] text-black mt-1">
                  {career.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
