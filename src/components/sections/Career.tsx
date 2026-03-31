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
              className="flex flex-col lg:flex-row gap-6 lg:gap-10 bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.06)] py-[32px] px-[24px] lg:px-[40px] items-start"
            >
              {/* Left Column: Logo & Role */}
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:w-[150px] shrink-0">
                <div className="w-20 h-20 lg:w-[126px] lg:h-[126px] rounded-2xl overflow-hidden flex justify-center items-center border border-[#DDDDDD] aspect-square bg-white">
                  <Image
                    src={career.logo}
                    alt={career.company}
                    width={career.logoWidth ?? 126}
                    height={career.logoHeight ?? 126}
                    className="object-contain"
                    style={
                      career.logoWidth && career.logoHeight
                        ? { width: career.logoWidth, height: career.logoHeight }
                        : undefined
                    }
                  />
                </div>
                <div className="flex flex-col items-start gap-1">
                  <p
                    className="text-white px-3 py-1 rounded-full text-[12px] font-semibold tracking-wide"
                    style={{ backgroundColor: career.roleColor }}
                  >
                    {career.role}
                  </p>
                  <p className="text-[#888888] text-[13px] font-medium hidden lg:block">
                    {career.period}
                  </p>
                </div>
              </div>

              {/* Mobile Period */}
              <p className="text-[#888888] text-[13px] font-medium lg:hidden -mt-2">
                {career.period}
              </p>

              {/* Right Column: Info & Details */}
              <div className="flex flex-col flex-1 w-full text-left">
                <h3
                  className="text-[26px] font-extrabold leading-tight"
                  style={{ color: career.roleColor }}
                >
                  {career.company}
                </h3>

                {/* Description */}
                <p className="text-[#4b5563] text-[15px] mt-3 leading-relaxed">
                  {career.description}
                </p>

                {/* Special Achievement Block */}
                {career.specialAchievement && (
                  <div className="mt-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200/60 rounded-xl shadow-sm">
                    <p className="text-[#b45309] font-bold text-[14px] flex items-center gap-2">
                      {career.specialAchievement}
                    </p>
                  </div>
                )}

                {/* Tech Stacks & Tools */}
                {(career.techStack || career.dxTools) && (
                  <div className="mt-5 flex flex-col gap-2">
                    {career.techStack && (
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[13px] font-semibold text-gray-500 w-24">
                          Tech Stack
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {career.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[12px] font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {career.dxTools && (
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[13px] font-semibold text-gray-500 w-24">
                          AI & DX Tools
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {career.dxTools.map((tool) => (
                            <span
                              key={tool}
                              className="px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded text-[12px] font-medium"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Divider */}
                <div className="border-b border-[#EEEEEE] w-full my-6 hidden lg:block" />

                {/* Achievements Sections */}
                {career.achievements && career.achievements.length > 0 && (
                  <div className="mt-2 lg:mt-0 flex flex-col gap-5">
                    <h4 className="text-[14px] font-bold text-gray-400 tracking-wider">
                      KEY ACHIEVEMENTS
                    </h4>
                    {career.achievements.map((ach, idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                        <p className="font-bold text-[15px] text-gray-800">
                          {ach.title}
                        </p>
                        <ul className="list-none space-y-1.5 mt-1 text-[14px] text-gray-600">
                          {ach.description.map((desc, dIdx) => (
                            <li key={dIdx} className="flex items-start">
                              <span className="mr-2 text-gray-400 mt-[2px]">
                                •
                              </span>
                              <span className="leading-snug">{desc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Legacy Highlights (for other jobs) */}
                {career.highlights && career.highlights.length > 0 && (
                  <div className="mt-4 lg:mt-0">
                    <ul className="list-none space-y-2 text-[14px] text-gray-600">
                      {career.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 text-gray-400 mt-[2px]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
