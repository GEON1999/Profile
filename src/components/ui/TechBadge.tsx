interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="px-3 py-1.5 bg-gray-900 rounded-full text-sm text-white hover:bg-[#0026A4] transition-colors cursor-default">
      {name}
    </span>
  );
}
