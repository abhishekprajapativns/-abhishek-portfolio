const projects = [
  {
    emoji: "🚚",
    name: "CargoBid",
    desc: "A full-stack cargo bidding platform where shippers post cargo and transporters place competitive quotes. Features JWT authentication with dual roles.",
    chips: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    live: "https://cargo-bid.vercel.app",
    github: "https://github.com/abhishekprajapativns/CargoBid",
  },
  {
    emoji: "🛍️",
    name: "Myntra Clone",
    desc: "A full-stack Myntra e-commerce clone with JWT authentication, product listing from MongoDB, wishlist, cart, and multi-step checkout.",
    chips: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    live: "https://myntra-clone-bay-three.vercel.app",
    github: "https://github.com/abhishekprajapativns/myntra-clone",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "80px 6%",
        background: "rgba(102,126,234,0.02)",
        borderTop: "1px solid #2a2450",
        borderBottom: "1px solid #2a2450",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "0.7rem",
              fontFamily: "'Fira Code', monospace",
              color: "#667eea",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            My Projects
          </div>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "#e2d9f3",
            }}
          >
            Some Things I've Built
          </div>
        </div>

        <a
          href="#"
          style={{
            fontSize: "0.82rem",
            color: "#667eea",
            border: "1px solid rgba(102,126,234,0.3)",
            padding: "6px 14px",
            borderRadius: "20px",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(102,126,234,0.1)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          View All Projects →
        </a>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1.25rem",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.name}
            style={{
              background: "#13102e",
              border: "1px solid #2a2450",
              borderRadius: "14px",
              overflow: "hidden",
              transition: "transform 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.borderColor = "#667eea";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "#2a2450";
            }}
          >
            {/* Emoji */}
            <div
              style={{
                height: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.5rem",
                borderBottom: "1px solid #2a2450",
                background: "#1a1640",
              }}
            >
              {project.emoji}
            </div>

            {/* Body */}
            <div style={{ padding: "1.1rem" }}>
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  marginBottom: "0.4rem",
                  color: "#e2d9f3",
                }}
              >
                {project.name}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "#a89bc2",
                  lineHeight: "1.6",
                  marginBottom: "0.9rem",
                }}
              >
                {project.desc}
              </div>

              {/* Chips */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "5px",
                  marginBottom: "0.9rem",
                }}
              >
                {project.chips.map((chip) => (
                  <span
                    key={chip}
                    style={{
                      fontSize: "0.65rem",
                      fontFamily: "'Fira Code', monospace",
                      background: "rgba(102,126,234,0.1)",
                      border: "1px solid rgba(102,126,234,0.2)",
                      color: "#667eea",
                      padding: "3px 9px",
                      borderRadius: "10px",
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div style={{ display: "flex", gap: "0.6rem" }}>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.75rem",
                    padding: "5px 13px",
                    borderRadius: "8px",
                    border: "1px solid #2a2450",
                    color: "#a89bc2",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#667eea";
                    e.currentTarget.style.color = "#667eea";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#2a2450";
                    e.currentTarget.style.color = "#a89bc2";
                  }}
                >
                  ⚡ Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.75rem",
                    padding: "5px 13px",
                    borderRadius: "8px",
                    border: "1px solid #2a2450",
                    color: "#a89bc2",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#667eea";
                    e.currentTarget.style.color = "#667eea";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#2a2450";
                    e.currentTarget.style.color = "#a89bc2";
                  }}
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
