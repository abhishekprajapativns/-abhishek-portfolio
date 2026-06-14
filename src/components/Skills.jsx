const skillsData = [
  {
    category: "Frontend",
    items: [
      {
        name: "HTML5",
        svg: (
          <svg
            viewBox="0 0 24 24"
            style={{ width: "16px", height: "16px", flexShrink: 0 }}
          >
            <path
              d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
              fill="#E34F26"
            />
          </svg>
        ),
      },
      {
        name: "CSS3",
        svg: (
          <svg
            viewBox="0 0 24 24"
            style={{ width: "16px", height: "16px", flexShrink: 0 }}
          >
            <path
              d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
              fill="#1572B6"
            />
          </svg>
        ),
      },
      {
        name: "JavaScript",
        svg: (
          <svg
            viewBox="0 0 24 24"
            style={{ width: "16px", height: "16px", flexShrink: 0 }}
          >
            <rect width="24" height="24" fill="#F7DF1E" rx="2" />
            <path
              d="M6 18.5l1.9-1.15c.37.65.7 1.2 1.5 1.2.77 0 1.26-.3 1.26-1.48V10h2.33v7.1c0 2.44-1.43 3.55-3.52 3.55-1.88 0-2.98-1-3.47-2.15zM16.5 18.3l1.9-1.1c.5.82 1.15 1.42 2.3 1.42.97 0 1.58-.48 1.58-1.15 0-.8-.63-1.08-1.7-1.55l-.58-.25c-1.68-.72-2.8-1.62-2.8-3.52 0-1.75 1.33-3.08 3.42-3.08 1.48 0 2.55.52 3.32 1.87l-1.82 1.17c-.4-.72-.83-.99-1.5-.99-.68 0-1.12.43-1.12 1 0 .7.43.98 1.43 1.42l.58.25c1.98.85 3.1 1.72 3.1 3.67 0 2.1-1.65 3.25-3.86 3.25-2.16 0-3.56-1.03-4.24-2.4z"
              fill="#323330"
            />
          </svg>
        ),
      },
      {
        name: "React.js",
        svg: (
          <svg
            viewBox="0 0 24 24"
            style={{ width: "16px", height: "16px", flexShrink: 0 }}
          >
            <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
            <ellipse
              cx="12"
              cy="12"
              rx="10.5"
              ry="4"
              stroke="#61DAFB"
              strokeWidth="1"
              fill="none"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="10.5"
              ry="4"
              stroke="#61DAFB"
              strokeWidth="1"
              fill="none"
              transform="rotate(60 12 12)"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="10.5"
              ry="4"
              stroke="#61DAFB"
              strokeWidth="1"
              fill="none"
              transform="rotate(120 12 12)"
            />
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        svg: (
          <svg
            viewBox="0 0 24 24"
            fill="#38BDF8"
            style={{ width: "16px", height: "16px", flexShrink: 0 }}
          >
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
          </svg>
        ),
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        svg: (
          <svg
            viewBox="0 0 24 24"
            fill="#339933"
            style={{ width: "16px", height: "16px", flexShrink: 0 }}
          >
            <path d="M11.998 24c-.321 0-.641-.084-.924-.247l-2.935-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.603.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.274 0l8.795-5.076V6.921L11.979 1.607 2.91 6.679v10.147l2.409 1.392c1.307.654 2.108-.116 2.108-.891V7.786h1.37v10.017c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.55l-2.304-1.328C.966 18.218.5 17.378.5 16.488V6.341c0-.893.466-1.729 1.224-2.177L10.52.289c.74-.386 1.72-.386 2.455 0l8.796 5.875c.758.448 1.229 1.284 1.229 2.177v10.147c0 .889-.471 1.725-1.229 2.173l-8.796 5.07c-.282.163-.603.247-.927.247" />
          </svg>
        ),
      },
      {
        name: "Express.js",
        svg: (
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            style={{ flexShrink: 0 }}
          >
            <rect width="24" height="24" rx="3" fill="#1a1a1a" />
            <text
              x="3"
              y="16"
              fontFamily="monospace"
              fontSize="10"
              fill="#e2d9f3"
              fontWeight="600"
            >
              ex
            </text>
          </svg>
        ),
      },
      {
        name: "REST APIs",
        svg: (
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            style={{ flexShrink: 0 }}
          >
            <rect width="24" height="24" rx="3" fill="#1a1640" />
            <text
              x="3"
              y="16"
              fontFamily="monospace"
              fontSize="8"
              fill="#00d4ff"
            >
              API
            </text>
          </svg>
        ),
      },
      {
        name: "JWT Auth",
        svg: (
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            style={{ flexShrink: 0 }}
          >
            <rect width="24" height="24" rx="3" fill="#1a1640" />
            <text
              x="3"
              y="16"
              fontFamily="monospace"
              fontSize="8"
              fill="#a78bfa"
            >
              JWT
            </text>
          </svg>
        ),
      },
      {
        name: "Mongoose",
        svg: (
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            style={{ flexShrink: 0 }}
          >
            <rect width="24" height="24" rx="3" fill="#1a1640" />
            <text
              x="2"
              y="16"
              fontFamily="monospace"
              fontSize="7"
              fill="#4ade80"
            >
              MNG
            </text>
          </svg>
        ),
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "MongoDB",
        svg: (
          <svg
            viewBox="0 0 24 24"
            fill="#47A248"
            style={{ width: "16px", height: "16px", flexShrink: 0 }}
          >
            <path d="M17.193 9.555c-1.264-5.58-4.252-7.243-4.394-7.243-.347.004-.382.048-.536.226-.137.163-3.064 2.432-3.064 10.009 0 5.984 4.158 10.098 7.596 10.103 3.452 0 7.394-4.178 7.394-10.103 0-1.38-.12-2.67-.396-3.793z" />
          </svg>
        ),
      },
      {
        name: "Mongoose",
        svg: (
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            style={{ flexShrink: 0 }}
          >
            <rect width="24" height="24" rx="3" fill="#1a1640" />
            <text
              x="2"
              y="16"
              fontFamily="monospace"
              fontSize="7"
              fill="#fb923c"
            >
              MNG
            </text>
          </svg>
        ),
      },
      {
        name: "Firebase",
        svg: (
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            style={{ flexShrink: 0 }}
          >
            <rect width="24" height="24" rx="3" fill="#1a0a0a" />
            <text
              x="2"
              y="16"
              fontFamily="monospace"
              fontSize="7"
              fill="#f87171"
            >
              FB
            </text>
          </svg>
        ),
      },
    ],
  },
  {
    category: "Other Skills",
    items: [
      {
        name: "Git & GitHub",
        svg: (
          <svg
            viewBox="0 0 24 24"
            fill="#F05032"
            style={{ width: "16px", height: "16px", flexShrink: 0 }}
          >
            <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.605-.406V8.835c-.6-.401-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
          </svg>
        ),
      },
      {
        name: "VS Code",
        svg: (
          <svg
            viewBox="0 0 24 24"
            fill="#007ACC"
            width="16"
            height="16"
            style={{ flexShrink: 0 }}
          >
            <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 00.102.45c.16.33.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925l.892-.515.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 00.313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39-.51-.554-.637-1.175-.637-1.81 0-2.031 1.531-3.188 3.905-3.188z" />
          </svg>
        ),
      },
      {
        name: "Netlify",
        svg: (
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            style={{ flexShrink: 0 }}
          >
            <rect width="24" height="24" rx="3" fill="#0a1628" />
            <text
              x="2"
              y="16"
              fontFamily="monospace"
              fontSize="7"
              fill="#00C7B7"
            >
              NTL
            </text>
          </svg>
        ),
      },
      {
        name: "Postman",
        svg: (
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            style={{ flexShrink: 0 }}
          >
            <rect width="24" height="24" rx="3" fill="#2d1a0a" />
            <text
              x="2"
              y="15"
              fontFamily="monospace"
              fontSize="7"
              fill="#fb923c"
            >
              PST
            </text>
          </svg>
        ),
      },
      {
        name: "Render",
        svg: (
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            style={{ flexShrink: 0 }}
          >
            <rect width="24" height="24" rx="3" fill="#0a1628" />
            <text
              x="2"
              y="16"
              fontFamily="monospace"
              fontSize="7"
              fill="#46E3B7"
            >
              RDR
            </text>
          </svg>
        ),
      },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" style={{ padding: "80px 6%" }}>
      {/* Section Label */}
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
        My Skills
      </div>

      {/* Section Title */}
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "#e2d9f3",
          marginBottom: "2.5rem",
        }}
      >
        Technologies I work with
      </div>

      {/* Skills Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.25rem",
        }}
      >
        {skillsData.map((box) => (
          <div
            key={box.category}
            className="group"
            style={{
              background: "#13102e",
              border: "1px solid #2a2450",
              borderRadius: "14px",
              padding: "1.25rem",
              transition: "transform 0.2s, border-color 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.borderColor = "#667eea";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "#2a2450";
            }}
          >
            {/* Category Header */}
            <div
              style={{
                fontSize: "0.72rem",
                fontFamily: "'Fira Code', monospace",
                color: "#00d4ff",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "1rem",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid #2a2450",
              }}
            >
              {box.category}
            </div>

            {/* Skill Rows */}
            {box.items.map((item) => (
              <div
                key={item.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "0.6rem",
                }}
              >
                {item.svg}
                <span style={{ fontSize: "0.8rem", color: "#a89bc2" }}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
