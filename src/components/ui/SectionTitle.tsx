interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center text-center mb-12 xl:mb-20">
      <h2 className="font-serif text-4xl lg:text-5xl tracking-tight">
        <span className="border-b-2 border-gray-900/70 px-8 py-1">
          {title}
        </span>
      </h2>
      <p className="mt-3 text-base text-gray-400">{subtitle}</p>
    </div>
  );
}
