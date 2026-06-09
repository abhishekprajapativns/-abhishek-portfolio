function About() {
  return (
    <section id="about" className="py-20 px-[6%]">
      {/* Section Label */}

      <p className="text-xs font-mono text-[#667eea] tracking-widest uppercase mb-2">
        About Me
      </p>

      {/* Section Title */}

      <h2 className="text-3xl font-bold text-white mb-10">Get to know me</h2>

      {/* Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}

        <div>
          {/* Description */}

          <p className="text-[#a89bc2] leading-relaxed mb-4">
            I'm a passionate{" "}
            <span className="text-[#667eea]">MERN Stack Developer</span> who
            loves building modern, scalable and efficient web applications.
          </p>

          <p className="text-[#a89bc2] leading-relaxed mb-8">
            I mainly work with{" "}
            <span className="text-[#667eea]">
              MongoDB, Express.js, React.js and Node.js
            </span>{" "}
            to develop full-stack applications.
          </p>

          {/* Info Boxes */}

          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: "⚡", label: "Experience", value: "Fresher" },
              { icon: "📍", label: "Location", value: "India" },
              { icon: "✅", label: "Availability", value: "Open to Work" },
              { icon: "📧", label: "Email", value: "abhishek@example.com" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#13102e] border border-[#2a2450] rounded-xl p-3 flex items-center gap-3"
              >
                <span>{item.icon}</span>
                <div>
                  <p className="text-[#a89bc2] text-xs">{item.label}</p>
                  <p className="text-white text-sm font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}

        <div className="bg-[#13102e] border border-[#2a2450] rounded-2xl p-6">
          <h3 className="text-white font-semibold text-lg mb-5">What I Do</h3>

          {[
            "Build responsive and interactive front-end using React.js",
            "Develop RESTful APIs with Node.js & Express.js",
            "Work with MongoDB for efficient data management",
            "Implement authentication & authorization (JWT)",
            "Deploy full-stack applications",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 mb-4">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                }}
              >
                <span className="text-white text-xs">✓</span>
              </div>
              <p className="text-[#a89bc2] text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default About;
