export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-[6%] pt-16">
      {/* Left Side */}

      <div className="flex-1">
        <p className="text-[#667eea] text-sm font-mono mb-2">Hi, I'm</p>

        <h1 className="text-5xl font-bold text-white mb-3">
          Abhishek Prajapati
        </h1>

        <h2
          className="text-2xl font-semibold mb-6"
          style={{
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Full Stack Developer
        </h2>

        <p className="text-[#a89bc2] text-base max-w-md mb-8 leading-relaxed">
          I build modern web applications using the MERN stack. Passionate about
          clean code and great user experiences.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="#contact"
            className="px-6 py-3 text-white rounded-full font-medium hover:opacity-90 transition-all"
            style={{
              background: "linear-gradient(135deg, #667eea, #764ba2)",
            }}
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-[#667eea] text-[#667eea] rounded-full font-medium hover:bg-[#667eea] hover:text-white transition-all"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center">
        {/* Orbit Container */}
        <div className="relative w-64 h-64">
          {/* Center AP */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
              }}
            >
              AP
            </div>
          </div>

          {/* Orbit Ring */}
          <div
            className="absolute inset-0 rounded-full border border-[#667eea]/30"
            style={{ animation: "orbit 8s linear infinite" }}
          >
            {/* M - top */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2"
              style={{ animation: "counter-orbit 8s linear infinite" }}
            >
              <span className="text-[#667eea] font-bold text-lg">M</span>
            </div>

            {/* E - left */}
            <div
              className="absolute top-1/2 -left-3 -translate-y-1/2"
              style={{ animation: "counter-orbit 8s linear infinite" }}
            >
              <span className="text-[#764ba2] font-bold text-lg">E</span>
            </div>

            {/* R - bottom */}
            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2"
              style={{ animation: "counter-orbit 8s linear infinite" }}
            >
              <span className="text-[#667eea] font-bold text-lg">R</span>
            </div>

            {/* N - right */}
            <div
              className="absolute top-1/2 -right-3 -translate-y-1/2"
              style={{ animation: "counter-orbit 8s linear infinite" }}
            >
              <span className="text-[#764ba2] font-bold text-lg">N</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
