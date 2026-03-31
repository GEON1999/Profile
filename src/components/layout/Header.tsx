"use client";

import { useState } from "react";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "CAREER", href: "#career" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="md:text-xl md:pt-7 font-bold fixed w-full z-10 bg-white pb-4">
      <div className="flex justify-between md:mx-20 mx-4 mt-5 md:mt-0">
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
            <a key={label} href={href}>
              <li className="cursor-pointer hover:scale-110 transition-all duration-200">
                {label}
              </li>
            </a>
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

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6">
          {navItems.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setIsOpen(false)}>
              <li className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
                {label}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
}
