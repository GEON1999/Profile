"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(
    new Array(images.length).fill(false)
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  };

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((img, idx) => (
            <div key={idx} className="flex-[0_0_100%] min-w-0">
              <div className="relative w-full h-[250px] md:h-[350px] lg:h-[420px] 2xl:h-[483px] flex items-center justify-center">
                {!imagesLoaded[idx] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                    <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-500 rounded-full animate-spin" />
                  </div>
                )}
                <div className={`relative w-full h-full ${img.includes('purple-ui') ? 'max-w-[200px] max-h-[120px] lg:max-w-[300px] lg:max-h-[150px]' : ''}`}>
                  <Image
                    src={img}
                    alt={`${alt} screenshot ${idx + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 842px"
                    priority={idx === 0}
                    quality={100}
                    unoptimized={img.includes('purple-ui')}
                    onLoad={() => handleImageLoad(idx)}
                    style={{ opacity: imagesLoaded[idx] ? 1 : 0 }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 rounded-full p-2 text-white transition-all opacity-0 group-hover:opacity-100"
        aria-label="이전 이미지"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 rounded-full p-2 text-white transition-all opacity-0 group-hover:opacity-100"
        aria-label="다음 이미지"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi?.scrollTo(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === selectedIndex ? "bg-gray-900 w-6" : "bg-gray-300"
            }`}
            aria-label={`이미지 ${idx + 1}로 이동`}
          />
        ))}
      </div>
    </div>
  );
}
