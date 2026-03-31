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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3"
        >
          <span className="text-4xl md:text-5xl font-thin text-gray-700 flex -tracking-[0.15em]">
            {"GEON".split("").map((char, i) => (
              <span
                key={i}
                className="md:group-hover:tracking-normal transition-all duration-150"
              >
                {char}
              </span>
            ))}
          </span>
          <span className="hidden sm:flex flex-col font-thin text-xs text-gray-500 leading-tight">
            <span>Build</span>
            <span>Together</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm font-light text-gray-600 hover:text-gray-900 hover:scale-110 transition-all duration-200 inline-block"
              >
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
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-md ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
