interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="px-[10px] py-[5px] bg-black rounded-full text-sm text-white hover:bg-[#0026A4]">
      {name}
    </span>
  );
}
