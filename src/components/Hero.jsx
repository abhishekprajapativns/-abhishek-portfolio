function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-[6%] pt-16 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 70% 50%, rgba(102,126,234,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Left Side */}
      <div className="relative z-10">
        {/* Badge */}
        <div className="inline-block border border-[#667eea]/40 bg-[#667eea]/08 text-[#667eea] px-4 py-1 rounded-full text-xs font-mono tracking-widest uppercase mb-5">
          MERN Stack Developer
        </div>

        <p className="text-white text-2xl font-normal mb-1">Hi, I'm</p>

        <h1
          className="text-5xl font-bold mb-4 leading-tight"
          style={{
            background: "linear-gradient(135deg, #667eea, #764ba2, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Abhishek Prajapati
        </h1>

        <p className="text-[#a89bc2] text-base leading-relaxed mb-8 max-w-md">
          I build scalable, performant and user-friendly web applications with
          the <span className="text-[#667eea] font-medium">MERN</span> stack.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 text-white rounded-full font-medium text-sm flex items-center gap-2 hover:opacity-90 transition-all"
            style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }}
          >
            View My Work →
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-[#667eea]/50 text-[#667eea] rounded-full font-medium text-sm flex items-center gap-2 hover:bg-[#667eea]/10 transition-all"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">
          <a
            href="https://github.com/abhishekprajapativns"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-[#2a2450] flex items-center justify-center text-[#a89bc2] hover:border-[#667eea] hover:text-[#667eea] transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-prajapati-03036b3b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-[#2a2450] flex items-center justify-center text-[#a89bc2] hover:border-[#667eea] hover:text-[#667eea] transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="mailto:abhishek.prajapati.it@gmail.com"
            className="w-10 h-10 rounded-full border border-[#2a2450] flex items-center justify-center text-[#a89bc2] hover:border-[#667eea] hover:text-[#667eea] transition-all"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-[#667eea]/40 flex items-center justify-center text-[#667eea] hover:bg-[#667eea]/10 transition-all font-mono text-xs"
          >
            &lt;/&gt;
          </a>
        </div>
      </div>

      {/* Right Side — Orbit */}
      {/* Right Side — Orbit */}
      <div
        className="relative z-10 flex items-center justify-center"
        style={{ height: "420px" }}
      >
        <div className="relative" style={{ width: "360px", height: "360px" }}>
          {/* Ring 1 */}

          <div
            className="absolute rounded-full border border-[#667eea]/20"
            style={{
              top: "50%",
              left: "50%",
              width: "280px",
              height: "280px",
              transform: "translate(-50%, -50%)",
              animation: "spin1 20s linear infinite",
            }}
          />

          {/* Ring 2 */}
          <div
            className="absolute rounded-full border border-[#667eea]/10"
            style={{
              top: "50%",
              left: "50%",
              width: "360px",
              height: "360px",
              transform: "translate(-50%, -50%)",
              animation: "spin1 30s linear infinite reverse",
            }}
          />

          {/* Center AP */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div
              className="text-7xl font-black leading-none"
              style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AP
            </div>
            <p className="text-[#a89bc2] text-xs font-mono mt-1">
              Code. Build. Deploy.
            </p>
            <p className="text-[#667eea] text-xs font-mono">&lt;/&gt;</p>
          </div>

          {/* React - Top */}
          <div
            className="absolute flex flex-col items-center gap-1"
            style={{ top: "10px", left: "50%", transform: "translateX(-50%)" }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
              <ellipse
                cx="12"
                cy="12"
                rx="10.5"
                ry="4"
                stroke="#61DAFB"
                strokeWidth="1.2"
                fill="none"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="10.5"
                ry="4"
                stroke="#61DAFB"
                strokeWidth="1.2"
                fill="none"
                transform="rotate(60 12 12)"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="10.5"
                ry="4"
                stroke="#61DAFB"
                strokeWidth="1.2"
                fill="none"
                transform="rotate(120 12 12)"
              />
            </svg>
            <span className="text-[#61DAFB] text-xs font-mono">React</span>
          </div>

          {/* Node.js - Right */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "-20px",
              transform: "translateY(-50%)",
            }}
            className="flex flex-col items-center gap-1"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="#339933">
              <path d="M11.998 24c-.321 0-.641-.084-.924-.247l-2.935-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.603.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.274 0l8.795-5.076V6.921L11.979 1.607 2.91 6.679v10.147l2.409 1.392c1.307.654 2.108-.116 2.108-.891V7.786h1.37v10.017c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.55l-2.304-1.328C.966 18.218.5 17.378.5 16.488V6.341c0-.893.466-1.729 1.224-2.177L10.52.289c.74-.386 1.72-.386 2.455 0l8.796 5.875c.758.448 1.229 1.284 1.229 2.177v10.147c0 .889-.471 1.725-1.229 2.173l-8.796 5.07c-.282.163-.603.247-.927.247" />
            </svg>
            <span className="text-[#339933] text-xs font-mono">Node.js</span>
          </div>

          {/* MongoDB - Bottom */}
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            className="flex flex-col items-center gap-1"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="#47A248">
              <path d="M17.193 9.555c-1.264-5.58-4.252-7.243-4.394-7.243-.347.004-.382.048-.536.226-.137.163-3.064 2.432-3.064 10.009 0 5.984 4.158 10.098 7.596 10.103 3.452 0 7.394-4.178 7.394-10.103 0-1.38-.12-2.67-.396-3.793z" />
            </svg>
            <span className="text-[#47A248] text-xs font-mono">MongoDB</span>
          </div>

          {/* Express - Left */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "-30px",
              transform: "translateY(-50%)",
            }}
            className="flex flex-col items-center gap-1"
          >
            <div className="w-9 h-9 flex items-center justify-center">
              <span className="text-white font-mono font-bold text-lg">ex</span>
            </div>
            <span className="text-[#a89bc2] text-xs font-mono">Express.js</span>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#a89bc2] text-xs font-mono"
        style={{ animation: "bounce 2s infinite" }}
      >
        <span>Scroll Down</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
