interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="flex justify-center text-center font-serif text-4xl lg:text-5xl mb-5 flex-col">
      <div>
        <span className="border-b-2 border-black border-opacity-70 px-8 py-1">
          {title}
        </span>
      </div>
      <div>
        <span className="text-base px-4 py-1 border-slate-400 text-slate-400">
          {subtitle}
        </span>
      </div>
    </div>
  );
}
