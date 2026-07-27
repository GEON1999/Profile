import { skillGroups } from "@/data/skills";
import SectionTitle from "@/components/ui/SectionTitle";
import TechBadge from "@/components/ui/TechBadge";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#F9FAFB] scroll-mt-24">
      <SectionTitle
        title="SKILLS"
        subtitle="What I build with"
        className="mb-12 lg:mb-[70px]"
      />

      <div className="mx-4 md:mx-20 flex justify-center">
        <div className="grid gap-5 md:grid-cols-2 w-full max-w-[1100px]">
          {skillGroups.map(({ title, core, context, items }) => (
            <div
              key={title}
              className={`bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.06)] ${
                core ? "md:col-span-2 border border-black/10" : ""
              }`}
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
                <h3 className="text-[18px] font-bold text-gray-900">{title}</h3>
                {core && (
                  <span className="px-2 py-0.5 rounded-full bg-black text-white text-[11px] font-semibold tracking-wider">
                    CORE
                  </span>
                )}
                {context && (
                  <span className="text-[13px] text-gray-500">{context}</span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <TechBadge key={item} name={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
