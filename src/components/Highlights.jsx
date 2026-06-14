const highlights = [
  { icon: "</>", number: "5+", label: "Full Stack Projects Built" },
  { icon: "🔐", number: "JWT", label: "Authentication Implementation" },
  { icon: "🔌", number: "API", label: "Scalable & Secure API Development" },
  { icon: "📱", number: "100%", label: "Mobile First Responsive Design" },
  { icon: "☁️", number: "Deploy", label: "Experience with Render & Netlify" },
  { icon: "✨", number: "Clean", label: "Readable & Scalable Code" },
];

function Highlights() {
  return (
    <section id="highlights" style={{ padding: "80px 6%" }}>
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
        Highlights
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
        What I Bring to the Table
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "1rem",
        }}
      >
        {highlights.map((item) => (
          <div
            key={item.label}
            style={{
              background: "#13102e",
              border: "1px solid #2a2450",
              borderRadius: "12px",
              padding: "1.25rem",
              textAlign: "center",
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
            {/* Icon */}
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                background: "rgba(102,126,234,0.1)",
                border: "1px solid rgba(102,126,234,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 0.75rem",
                fontSize: "1.1rem",
              }}
            >
              {item.icon}
            </div>

            {/* Number */}
            <div
              style={{
                fontSize: "1.3rem",
                fontWeight: "700",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "0.2rem",
              }}
            >
              {item.number}
            </div>

            {/* Label */}
            <div
              style={{
                fontSize: "0.65rem",
                color: "#a89bc2",
                lineHeight: "1.5",
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
