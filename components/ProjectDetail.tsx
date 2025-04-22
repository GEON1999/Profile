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
}

export default function ProjectDetail({ id }: ProjectDetailProps) {
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [activeTab, setActiveTab] = useState<
    "challenges" | "solutions" | "result"
  >("challenges");

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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  useEffect(() => {
    if (project?.images) {
      setImagesLoaded(new Array(project.images.length).fill(false));
    }
  }, [project]);

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  // 탭 렌더링 함수
  const renderTabContent = (issue: Issue) => {
    switch (activeTab) {
      case "challenges":
        return (
          <div className="text-[15px] bg-white rounded-lg px-4 py-2 shadow-md">
            <h4 className="font-bold">{issue.title}</h4>
            <p className="text-[13px]">{issue.description[0]}</p>
          </div>
        );
      case "solutions":
        return (
          <div className="text-[15px] bg-white rounded-lg px-4 py-2 shadow-md">
            <h4 className="font-bold">{issue.title}</h4>
            <ul className="list-disc list-inside text-[13px] ">
              {issue.solution.map((sol: string, idx: number) => (
                <li key={idx}>{sol}</li>
              ))}
            </ul>
          </div>
        );
      case "result":
        return (
          <div className="text-[15px] bg-white rounded-lg px-4 py-2 shadow-md">
            <h4 className="font-bold">{issue.title}</h4>
            <ul className="list-disc list-inside text-[13px] ">
              {issue.result.map((res: string, idx: number) => (
                <li key={idx}>{res}</li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full mx-auto my-6 xl:my-12 rounded-lg p-3 xl:p-6">
      <div className="flex flex-col xl:flex-row items-start justify-center xl:space-x-[80px]">
        <div className="relative border-gray-200 rounded overflow-hidden flex flex-col w-full xl:w-[842px] mb-6 xl:mb-0">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between container mb-3 xl:mb-[18px] font-serif">
            <h1 className="text-2xl xl:text-3xl font-bold mb-2 xl:mb-0">
              {name}
            </h1>
            <div className="flex space-x-2 items-center text-[13px] font-sans">
              <p className="">{period}</p>
              {role === "personal" && (
                <>
                  <div className="">|</div>
                  <p className="">1人 개인 프로젝트</p>
                </>
              )}
            </div>
          </div>
          {images && images.length > 0 && (
            <>
              {/* @ts-ignore */}
              <Slider {...sliderSettings}>
                {images.map((img, idx) => (
                  <div key={idx} className="outline-none">
                    <div className="relative w-full h-[250px] md:h-[350px] lg:h-[420px] 2xl:w-[842px] 2xl:h-[483px]">
                      {!imagesLoaded[idx] && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                          <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-400 rounded-full animate-spin"></div>
                        </div>
                      )}
                      <Image
                        src={img}
                        alt={`${name} screenshot ${idx}`}
                        layout="fill"
                        objectFit="contain"
                        priority={idx === 0}
                        quality={100}
                        onLoadingComplete={() => handleImageLoad(idx)}
                        style={{ opacity: imagesLoaded[idx] ? 1 : 0 }}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </>
          )}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t mt-[20px] pt-[10px]">
            <p className="text-[13px] font-sans mb-3 md:mb-0">{description}</p>
            <div className="flex space-x-2 text-sm">
              {github && (
                <Link href={github} passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-black transition-colors cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                      className="w-5 h-5"
                    >
                      <path
                        fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      ></path>
                    </svg>
                  </a>
                </Link>
              )}
              {website && (
                <Link href={website} passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-black transition-colors cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 -960 960 960"
                      fill="#374151"
                      className="w-6 h-6 transition-colors hover:fill-[#0026A4]"
                    >
                      <path d="M838-65 720-183v89h-80v-226h226v80h-90l118 118-56 57ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 20-2 40t-6 40h-82q5-20 7.5-40t2.5-40q0-20-2.5-40t-7.5-40H654q3 20 4.5 40t1.5 40q0 20-1.5 40t-4.5 40h-80q3-20 4.5-40t1.5-40q0-20-1.5-40t-4.5-40H386q-3 20-4.5 40t-1.5 40q0 20 1.5 40t4.5 40h134v80H404q12 43 31 82.5t45 75.5q20 0 40-2.5t40-4.5v82q-20 2-40 4.5T480-80ZM170-400h136q-3-20-4.5-40t-1.5-40q0-20 1.5-40t4.5-40H170q-5 20-7.5 40t-2.5 40q0 20 2.5 40t7.5 40Zm34-240h118q9-37 22.5-72.5T376-782q-55 18-99 54.5T204-640Zm172 462q-18-34-31.5-69.5T322-320H204q29 51 73 87.5t99 54.5Zm28-462h152q-12-43-31-82.5T480-798q-26 36-45 75.5T404-640Zm234 0h118q-29-51-73-87.5T584-782q18 34 31.5 69.5T638-640Z" />
                    </svg>
                  </a>
                </Link>
              )}
              <Link href="mailto:phgst12@gmail.com" passHref>
                <a className="flex items-center text-gray-700 hover:text-black transition-colors cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-6 w-full md:w-auto 2xl:w-[564px]">
          <div>
            <h3 className="text-[20px] font-bold mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-[10px] py-[5px] bg-black rounded-full text-sm text-white hover:bg-[#0026A4]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {work && work.length > 0 && (
            <div>
              <h3 className="text-[20px] font-bold mb-2">Work</h3>
              <ul className="space-y-[3px]">
                {work.map((item: Work, index: number) => (
                  <li key={index} className="flex">
                    <div className="mr-2">•</div>
                    <div className="text-[15px] space-x-1 ">
                      <span className="font-bold">{item.title}</span>{" "}
                      <span className="text-sm text-[#777777]">
                        {item.description[0]}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {issues && issues.length > 0 && (
            <div>
              <div className="flex justify-between items-center font-bold text-[16px] md:text-[20px]">
                <button
                  className={`${
                    activeTab === "challenges"
                      ? " text-black"
                      : "text-[#999999] hover:text-black"
                  }`}
                  onClick={() => setActiveTab("challenges")}
                >
                  Challenges
                </button>
                <div className="h-[1px] w-[10%] md:w-[115px] border-t border-[#999999]"></div>
                <button
                  className={`${
                    activeTab === "solutions"
                      ? " text-black"
                      : "text-[#999999] hover:text-black"
                  }`}
                  onClick={() => setActiveTab("solutions")}
                >
                  Solutions
                </button>
                <div className="h-[1px] w-[10%] md:w-[115px] border-t border-[#999999]"></div>
                <button
                  className={`${
                    activeTab === "result"
                      ? " text-black"
                      : "text-[#999999] hover:text-black"
                  }`}
                  onClick={() => setActiveTab("result")}
                >
                  Result
                </button>
              </div>

              <div className="space-y-4">
                {issues.map((issue: Issue, index: number) => (
                  <div key={index} className="mt-2 bg-gray-50 rounded-lg">
                    {renderTabContent(issue)}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
