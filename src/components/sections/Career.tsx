import { careers } from "@/data/career";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

export default function Career() {
  return (
    <section id="career" className="py-24 bg-[#F9FAFB] scroll-mt-20">
      <SectionTitle title="CAREER" subtitle="A collection of my work experience" />

      <div className="section-container">
        <div className="flex flex-col gap-6 max-w-[1000px] mx-auto">
          {careers.map((career) => (
            <div
              key={career.id}
              className="flex flex-col lg:flex-row items-center lg:gap-10 gap-4 bg-white rounded-2xl shadow-sm py-6 px-8"
            >
              {/* Logo */}
              <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden flex items-center justify-center border border-gray-200 flex-shrink-0">
                <Image
                  src={career.logo}
                  alt={career.company}
                  width={career.logoWidth ?? 126}
                  height={career.logoHeight ?? 126}
                  className="object-contain"
                />
              </div>

              {/* Info */}
              <div className="lg:w-[400px] w-full text-center lg:text-left">
                <h3
                  className="text-2xl font-bold"
                  style={{ color: career.roleColor }}
                >
                  {career.company}
                </h3>
                <p className="text-gray-600 font-bold text-[15px]">
                  {career.period}
                </p>
                <p className="text-gray-600 font-bold text-[15px] mt-2">
                  {career.description}
                </p>
              </div>

              {/* Divider — desktop only */}
              <div className="hidden lg:block border-l border-gray-200 h-28 flex-shrink-0" />

              {/* Highlights */}
              <div className="w-full lg:w-[350px]">
                <span
                  className="inline-block text-white text-center rounded-full text-[13px] px-4 py-0.5 mb-2"
                  style={{ backgroundColor: career.roleColor }}
                >
                  {career.role}
                </span>
                <ul className="list-disc list-inside text-[13px] text-gray-700 space-y-0.5">
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
