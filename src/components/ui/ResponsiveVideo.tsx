"use client";

import { useEffect, useState } from "react";

interface VideoSource {
  src: string;
  poster: string;
}

interface ResponsiveVideoProps {
  desktop: VideoSource;
  mobile: VideoSource;
}

// CSS(hidden)로 숨긴 video도 다운로드는 발생하므로,
// matchMedia로 뷰포트에 맞는 영상 하나만 렌더링한다. (md = 768px)
export default function ResponsiveVideo({
  desktop,
  mobile,
}: ResponsiveVideoProps) {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  if (isDesktop === null) return null;

  const { src, poster } = isDesktop ? desktop : mobile;

  return (
    <video
      key={src}
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
