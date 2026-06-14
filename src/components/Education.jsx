function Education() {
  return (
    <section
      id="education"
      style={{
        padding: "60px 6%",
        background: "rgba(102,126,234,0.02)",
        borderTop: "1px solid #2a2450",
        borderBottom: "1px solid #2a2450",
      }}
    >
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
        Education
      </div>

      {/* Section Title */}
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "#e2d9f3",
          marginBottom: "2rem",
          textAlign: "left",
        }}
      >
        My Academic Journey
      </div>

      {/* Single Card — no timeline needed for 1 item */}
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Year */}
        <div
          style={{
            fontSize: "0.7rem",
            fontFamily: "'Fira Code', monospace",
            color: "#667eea",
            marginBottom: "0.4rem",
          }}
        >
          2019 — 2021
        </div>

        {/* Card */}
        <div
          style={{
            background: "#13102e",
            border: "1px solid #2a2450",
            borderRadius: "12px",
            padding: "1.2rem 1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            transition: "border-color 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#667eea";
            e.currentTarget.style.transform = "translateX(6px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#2a2450";
            e.currentTarget.style.transform = "translateX(0)";
          }}
        >
          <div>
            <div
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                marginBottom: "0.25rem",
                color: "#e2d9f3",
              }}
            >
              Master of Science in IT (MSc IT)
            </div>
            <div style={{ fontSize: "0.82rem", color: "#a89bc2" }}>
              Hemwati Nandan Bahuguna Garhwal University (HNBGU)
            </div>
          </div>
          <div
            style={{
              fontSize: "1rem",
              fontWeight: "700",
              color: "#4ade80",
              whiteSpace: "nowrap",
              marginLeft: "1.5rem",
            }}
          >
            7.83 CGPA
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
