const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
  },

  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },

  {
    category: "Database",
    items: ["MongoDB"],
  },

  {
    category: "Other Skills",
    items: ["Git & GitHub", "VS Code", "Postman", "Vercel"],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-20 px-[6%]">
      {/* Section Label */}
      <p className="text-xs font-mono text-[#667eea] tracking-widest uppercase mb-2">
        My Skills
      </p>

      {/* Section Title */}
      <h2 className="text-3xl font-bold text-white mb-10">
        Technologies I work with
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {skills.map((skillBox) => (
          <div
            key={skillBox.category}
            className="bg-[#13102e] border border-[#2a2450] rounded-2xl p-5 hover:border-[#667eea] transition-colors"
          >
            {/* Category Title */}
            <p className="text-xs font-mono text-[#00d4ff] tracking-widest uppercase mb-4 pb-3 border-b border-[#2a2450]">
              {skillBox.category}
            </p>

            {/* Items */}
            {skillBox.items.map((item) => (
              <div key={item} className="flex items-center gap-2 mb-3">
                <span className="text-[#667eea]">▹</span>
                <span className="text-[#a89bc2] text-sm">{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
