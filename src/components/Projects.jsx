const projects = [
  {
    title: "CargoBid",
    description:
      "A full-stack cargo bidding platform where shippers post cargo and transports place competitive quotes. Features JWT authentication with dual roles.",
    techs: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    live: "https://cargo-bid.vercel.app",
    github: "https://github.com/abhishekprajapativns/CargoBid",
    emoji: "🚚",
  },

  {
    title: "Myntra Clone",
    description:
      "A full-stack Myntra e-commerce clone with JWT authentication, product listing from MongoDB, wishlist, cart, and multi-step checkout.",
    techs: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    live: "https://myntra-clone-bay-three.vercel.app",
    github: "https://github.com/abhishekprajapativns/myntra-clone",
    emoji: "🛍️",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 px-[6%]">
      {/* Section Label */}
      <p className="text-xs font-mono text-[#667eea] tracking-widest uppercase mb-2">
        My Projects
      </p>

      {/* Section Title */}
      <h2 className="text-3xl font-bold text-white mb-10">
        Some Things I've Built
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#13102e] border border-[#2a2450] rounded-2xl overflow-hidden hover:border-[#667eea] transition-colors group"
          >
            {/* Top gradient line */}
            <div
              className="h-1"
              style={{
                background: "linear-gradient(90deg, #667eea, #764ba2)",
              }}
            />

            {/* Emoji placeholder */}
            <div className="h-40 flex items-center justify-center text-6xl bg-[#1a1640]">
              {project.emoji}
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-white font-semibold text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-[#a89bc2] text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-full text-[#667eea] border border-[#667eea]/30 bg-[#667eea]/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded-lg border border-[#2a2450] text-[#a89bc2] hover:border-[#667eea] hover:text-[#667eea] transition-all"
                >
                  ⚡ Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded-lg border border-[#2a2450] text-[#a89bc2] hover:border-[#667eea] hover:text-[#667eea] transition-all"
                >
                  ⬡ GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
