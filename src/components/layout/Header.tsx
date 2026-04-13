"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "CAREER", href: "#career" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav aria-label="메인 네비게이션" className="md:text-xl md:pt-7 font-bold fixed top-0 w-full z-50 bg-white pb-4">
      <div className="flex justify-between md:mx-20 mx-4 mt-5 md:mt-0 relative z-50 bg-white">
        {/* Logo — intentionally overlapping letters */}
        <a href="#home">
          <div className="group flex space-x-3 justify-center items-center">
            <div className="flex flex-col cursor-pointer">
              <span className="text-5xl font-thin flex items-end text-gray-700 -space-x-4">
                <p className="md:group-hover:mx-[0.5px] md:hover:ease-out duration-150">
                  G
                </p>
                <p className="md:group-hover:mx-[0.5px] md:hover:ease-out duration-150">
                  E
                </p>
                <p className="md:group-hover:mx-[0.5px] md:hover:ease-out duration-150">
                  O
                </p>
                <p className="md:group-hover:mx-[0.5px] md:hover:ease-out duration-150">
                  N
                </p>
              </span>
            </div>
            <div className="flex flex-col font-thin items-start text-sm">
              <p>Build </p>
              <p>Together</p>
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex flex-row justify-center items-end space-x-8 text-base font-thin">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="inline-block cursor-pointer hover:scale-110 transition-all duration-200">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="메뉴 열기"
          aria-expanded={isOpen}
        >
          <span
            className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible h-screen" : "opacity-0 invisible h-screen"
        }`}
      >
        <ul className="flex flex-col items-center gap-10">
          {navItems.map(({ label, href }, index) => (
            <li key={label} className="overflow-hidden">
              <a 
                href={href} 
                onClick={() => setIsOpen(false)} 
                className={`text-4xl font-light text-gray-800 hover:text-black transition-all duration-500 delay-[${index * 100}ms] block ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
