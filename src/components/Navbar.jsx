import { useState } from "react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0d0a1e]/90 backdrop-blur-md border-b border-[#2a2450]">
      <div className="flex items-center justify-between px-[6%] h-16">
        {/* Logo */}
        <div
          className="font-mono text-2xl font-black text-transparent"
          style={{
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          AP.
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Home", "About", "Projects", "Skills", "Education", "Contact"].map(
            (link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-[#a89bc2] hover:text-[#667eea] transition-colors relative group"
              >
                {link}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{
                    background: "linear-gradient(90deg, #667eea, #764ba2)",
                  }}
                />
              </a>
            ),
          )}
        </div>

        {/* Resume Button */}

        <a
          href="#"
          className="hidden md:block px-6 py-2 text-sm text-white rounded-full transition-all hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }}
        >
          Download Resume ↓
        </a>

        {/* Hamburger - mobile */}
        <button
          className="md:hidden text-white text-xl"
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
                className="text-sm font-semibold text-white hover:text-[#667eea]"
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

export default Navbar;
