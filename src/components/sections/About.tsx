import { aboutSections } from "@/data/about";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F9FAFB] scroll-mt-20">
      <SectionTitle title="ABOUT" subtitle="About real me" />

      <div className="section-container">
        <div className="relative max-w-[1178px] mx-auto">
          {/* Timeline line — desktop only */}
          <div className="hidden 2xl:flex flex-col items-center absolute left-1/2 -translate-x-1/2 top-20">
            <div className="w-3.5 h-3.5 bg-gray-900 rounded-full" />
            <div className="w-px h-[800px] bg-gray-900" />
            <div className="w-3.5 h-3.5 bg-gray-900 rounded-full" />
          </div>

          {aboutSections.map((section, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={section.titleEn}
                className={`flex flex-col font-light mb-24 ${
                  isEven ? "lg:items-end" : "lg:items-start"
                }`}
              >
                <div
                  className={`${
                    !isEven ? "flex flex-col lg:items-end" : ""
                  }`}
                >
                  {/* Image for Awareness section */}
                  {section.image && (
                    <div className="hidden 2xl:block absolute left-1/2 -translate-x-1/2 mt-8">
                      <Image
                        src={section.image}
                        alt={section.titleKo}
                        width={145}
                        height={145}
                        className="rounded-full"
                      />
                    </div>
                  )}

                  <h3 className="md:text-2xl text-lg font-mono text-gray-900">
                    {section.titleEn}
                  </h3>
                  <h4 className="mt-1 mb-5 font-medium text-gray-900">
                    &ldquo;{section.titleKo}&rdquo;
                  </h4>

                  <div
                    className={`lg:w-[478px] space-y-6 ${
                      !isEven ? "lg:text-end" : ""
                    }`}
                  >
                    {section.paragraphs.map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
