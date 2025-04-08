import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Issue, Work } from "../types";
import projectData from "../project.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface ProjectDetailProps {
  id: string;
  layoutId?: string;
  onClose: () => void;
}

export default function ProjectDetail({
  id,
  layoutId,
  onClose,
}: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);

  const project = projectData.projects.find(
    (p) => p.id === id || p.name === id
  );

  if (!project) return null;

  const {
    name,
    description,
    technologies,
    images,
    work,
    issues,
    github,
    website,
    period,
    role,
  } = project;

  const textBox = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % (images?.length || 0));
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + (images?.length || 0)) % (images?.length || 0)
    );
  };

  const NextArrow = (props: any) => (
    <button
      {...props}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 z-10 text-white transition-all"
      onClick={props.onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );

  const PrevArrow = (props: any) => (
    <button
      {...props}
      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 z-10 text-white transition-all"
      onClick={props.onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </button>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_: any, next: number) => setCurrentImageIndex(next),
    customPaging: (i: number) => (
      <div
        className={`w-3 h-3 mx-1 rounded-full ${
          i === currentImageIndex ? "bg-gray-700" : "bg-gray-300"
        }`}
      />
    ),
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-20"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        layoutId={layoutId}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="bg-white w-11/12 max-w-6xl h-[90vh] overflow-y-auto rounded-lg p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 hover:bg-gray-100 rounded-full p-2 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="grid grid-cols-1 gap-8 mt-10">
          <div className="relative aspect-video border border-gray-200 rounded overflow-hidden shadow-lg">
            {images && images.length > 0 && (
              <>
                {imageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-500"></div>
                  </div>
                )}
                <Slider {...sliderSettings}>
                  {images.map((img, idx) => (
                    <div key={idx} className="outline-none">
                      <div className="relative aspect-video">
                        <Image
                          src={img}
                          alt={`${name} screenshot ${idx}`}
                          layout="fill"
                          objectFit="contain"
                          priority={idx === 0}
                          onLoadingComplete={() => setImageLoading(false)}
                          onLoad={() => setImageLoading(false)}
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm z-10">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col space-y-6">
            <motion.div initial="hidden" animate="visible" variants={textBox}>
              <div className="container mb-4 font-serif">
                <div className="flex space-x-4 items-center">
                  <h1 className="text-3xl font-bold">{name}</h1>
                  {role === "personal" && (
                    <p className="text-gray-500 font-sans text-sm">
                      (1人 개인 프로젝트)
                    </p>
                  )}
                </div>
                <p className="text-gray-500 font-sans text-sm">{period}</p>
                <p className="text-gray-600 font-sans">{description}</p>
              </div>
            </motion.div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {work && work.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Work</h3>
                <ul className="space-y-3">
                  {work.map((item: Work, index: number) => (
                    <li key={index} className="border-l-2 border-gray-300 pl-4">
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-gray-600">
                        {item.description[0]}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {issues && issues.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Challenges & Solutions
                </h3>
                <div className="space-y-4">
                  {issues.map((issue: Issue, index: number) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-lg">{issue.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {issue.description[0]}
                      </p>
                      <h5 className="font-medium text-sm mt-2">Solution:</h5>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {issue.solution.map((sol: string, idx: number) => (
                          <li key={idx}>{sol}</li>
                        ))}
                      </ul>
                      <h5 className="font-medium text-sm mt-2">Result:</h5>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {issue.result.map((res: string, idx: number) => (
                          <li key={idx}>{res}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex space-x-4 pt-4 border-t border-gray-200 text-sm">
              {github && (
                <Link href={github}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-black transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      className="w-6 h-6 mr-2"
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      ></path>
                    </svg>
                    <span>GitHub</span>
                  </a>
                </Link>
              )}
              {website && (
                <Link href={website}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-black transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                    <span>Visit Website</span>
                  </a>
                </Link>
              )}
              <Link href="mailto:phgst12@gmail.com">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-black transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <span>Contact</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
