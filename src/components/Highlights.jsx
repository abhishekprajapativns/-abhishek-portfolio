const highlights = [
  {
    icon: "</>",
    number: "2+",
    label: "Full Stack Projects Built",
  },
  {
    icon: "🔐",
    number: "JWT",
    label: "Authentication Implementation",
  },
  {
    icon: "🔌",
    number: "API",
    label: "Scalable & Secure REST APIs",
  },
  {
    icon: "📱",
    number: "100%",
    label: "Mobile First Responsive Design",
  },
  {
    icon: "☁️",
    number: "Deploy",
    label: "Experience with Vercel & Render",
  },
  {
    icon: "✨",
    number: "Clean",
    label: "Readable & Scalable Code",
  },
];

function Highlights() {
  return (
    <section className="py-20 px-[6%]">
      {/* Section Label */}
      <p className="text-xs font-mono text-[#667eea] tracking-widest uppercase mb-2">
        Highlights
      </p>

      {/* Section Title */}
      <h2 className="text-3xl font-bold text-white mb-10">
        What I Bring to the Table
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="bg-[#13102e] border border-[#2a2450] rounded-2xl p-5 text-center hover:border-[#667eea] transition-colors"
          >
            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-[#667eea]/10 border border-[#667eea]/20 flex items-center justify-center mx-auto mb-3 text-sm font-mono text-[#667eea]">
              {item.icon}
            </div>

            {/* Number */}
            <p
              className="text-xl font-bold mb-1"
              style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {item.number}
            </p>

            {/* Label */}
            <p className="text-[#a89bc2] text-xs leading-relaxed">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
