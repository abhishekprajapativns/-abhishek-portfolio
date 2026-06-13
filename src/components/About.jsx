function About() {
  return (
    <section
      id="about"
      style={{
        padding: "80px 6%",
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
        About Me
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
        Get to know me
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Left Side */}
        <div>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#a89bc2",
              lineHeight: "1.9",
              marginBottom: "0.75rem",
            }}
          >
            I'm a passionate{" "}
            <span style={{ color: "#667eea" }}>MERN Stack Developer</span> who
            loves building modern, scalable and efficient web applications. I
            enjoy solving real-world problems and turning ideas into reality
            with clean code and great user experiences.
          </p>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#a89bc2",
              lineHeight: "1.9",
              marginBottom: "0.75rem",
            }}
          >
            I mainly work with{" "}
            <span style={{ color: "#667eea" }}>
              MongoDB, Express.js, React.js and Node.js
            </span>{" "}
            to develop full-stack applications.
          </p>

          {/* Meta Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem",
              marginTop: "1.5rem",
            }}
          >
            {[
              { icon: "⚡", label: "Experience", value: "Fresher" },
              { icon: "📍", label: "Location", value: "India" },
              { icon: "✅", label: "Availability", value: "Open to Work" },
              {
                icon: "📧",
                label: "Email",
                value: "abhishek.prajapati.it@gmail.com",
                small: true,
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "#13102e",
                  border: "1px solid #2a2450",
                  borderRadius: "10px",
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.78rem",
                }}
              >
                <span style={{ color: "#667eea" }}>{item.icon}</span>
                <div>
                  <span
                    style={{
                      color: "#a89bc2",
                      fontSize: "0.7rem",
                      display: "block",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      color: "#e2d9f3",
                      fontWeight: "500",
                      fontSize: item.small ? "0.72rem" : "inherit",
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - What I Do */}
        <div
          style={{
            background: "#13102e",
            border: "1px solid #2a2450",
            borderRadius: "14px",
            padding: "1.5rem",
          }}
        >
          <h4
            style={{
              fontSize: "1rem",
              fontWeight: "600",
              marginBottom: "1.2rem",
              color: "#e2d9f3",
            }}
          >
            What I Do
          </h4>

          {[
            "Build responsive and interactive front-end using React.js",
            "Develop RESTful APIs with Node.js & Express.js",
            "Work with MongoDB for efficient data management",
            "Implement authentication & authorization (JWT)",
            "Deploy full-stack applications",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                marginBottom: "0.9rem",
                fontSize: "0.85rem",
                color: "#a89bc2",
                lineHeight: "1.5",
              }}
            >
              {/* Check */}
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: "0",
                  marginTop: "1px",
                  fontSize: "0.6rem",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                ✓
              </div>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
