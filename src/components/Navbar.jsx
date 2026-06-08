import { useState } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0d0a1e]/90 backdrop-blur-md border-b border-[#2a2450]">
      <div className="flex items-center justify-between px-[6%] h-16">
        {/* Logo */}
        <div
          className="font-mono text-xl font-bold text-transparent bg-clip-text"
          style={{
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            WebkitBackgroundClip: "text",
          }}
        >
          AP.
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "About", "Projects", "Skills", "Education", "Contact"].map(
            (link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-[#a89bc2] hover:text-[#667eea] transition-colors"
              >
                {link}
              </a>
            ),
          )}
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-4 py-2 text-sm font-medium border border-[#667eea] text-[#667eea] rounded-full hover:bg-[#667eea] hover:text-white transition-all"
        >
          Resume
        </a>

        {/* Hamburger - mobile only */}
        <button
          className="md:hidden text-[#a89bc2]"
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-[6%] py-4 flex flex-col gap-4 border-t border-[#2a2450]">
          {["Home", "About", "Projects", "Skills", "Education", "Contact"].map(
            (link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-[#a89bc2] hover:text-[#667eea]"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ),
          )}
        </div>
      )}
    </nav>
  );
}
