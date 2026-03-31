import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-thin text-white tracking-tight">
              GEON
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="https://github.com/GEON1999"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </Link>
            <Link
              href="mailto:phgst12@gmail.com"
              className="hover:text-white transition-colors"
            >
              phgst12@gmail.com
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} GEON. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
