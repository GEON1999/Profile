interface SectionTitleProps {
  title: string;
  subtitle: string;
  /** 섹션별 하단 마진 등 래퍼에 추가할 클래스 */
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <div
      className={`flex justify-center text-center font-serif text-4xl lg:text-5xl flex-col ${className}`}
    >
      <h2>
        <span className="border-b-2 border-black border-opacity-70 px-8 py-1">
          {title}
        </span>
      </h2>
      <div>
        <span className="text-base px-4 py-1 text-gray-500">{subtitle}</span>
      </div>
    </div>
  );
}
