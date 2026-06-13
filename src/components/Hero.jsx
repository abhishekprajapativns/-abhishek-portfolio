function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      id="home"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "100px 6% 60px",
        gap: "2rem",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 70% 50%, rgba(102,126,234,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Left Side */}
      <div className="relative" style={{ zIndex: 2 }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-block",
            border: "1px solid rgba(102,126,234,0.4)",
            background: "rgba(102,126,234,0.08)",
            color: "#667eea",
            padding: "5px 14px",
            borderRadius: "20px",
            fontSize: "0.72rem",
            fontFamily: "'Fira Code', monospace",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "1.2rem",
          }}
        >
          MERN Stack Developer
        </div>

        {/* Hi I'm */}
        <div
          style={{
            fontSize: "1.8rem",
            fontWeight: "400",
            color: "#e2d9f3",
            lineHeight: "1.2",
          }}
        >
          Hi, I'm
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            background: "linear-gradient(135deg, #667eea, #764ba2, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: "1.1",
            marginBottom: "1rem",
          }}
        >
          Abhishek Prajapati
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "0.92rem",
            color: "#a89bc2",
            lineHeight: "1.9",
            marginBottom: "2rem",
            maxWidth: "420px",
          }}
        >
          I build scalable, performant and user-friendly web applications with
          the <span style={{ color: "#667eea", fontWeight: "500" }}>MERN</span>{" "}
          stack.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "2rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#projects"
            className="flex items-center hover:-translate-y-0.5 transition-transform"
            style={{
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "#fff",
              padding: "11px 26px",
              borderRadius: "30px",
              fontWeight: "500",
              fontSize: "0.88rem",
              gap: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            View My Work →
          </a>

          <a
            href="#contact"
            className="transition-all hover:bg-[#667eea]/10"
            style={{
              border: "1.5px solid rgba(102,126,234,0.5)",
              color: "#667eea",
              padding: "11px 26px",
              borderRadius: "30px",
              fontWeight: "500",
              fontSize: "0.88rem",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div style={{ display: "flex", gap: "1rem" }}>
          {/* GitHub */}

          <a
            href="https://github.com/abhishekprajapativns"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:text-[#667eea]"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              border: "1px solid #2a2450",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#a89bc2",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/abhishek-prajapati-03036b3b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:text-[#667eea]"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              border: "1px solid #2a2450",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#a89bc2",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* Email */}

          <a
            href="mailto:abhishek.prajapati.it@gmail.com"
            className="transition-all hover:text-[#667eea]"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              border: "1px solid #2a2450",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#a89bc2",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>

          {/* Code icon */}

          <a
            href="#"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              border: "1px solid rgba(102,126,234,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#667eea",
              fontFamily: "'Fira Code', monospace",
              fontSize: "0.7rem",
            }}
          >
            &lt;/&gt;
          </a>
        </div>
      </div>

      {/* Right Side - Orbit */}
      <div
        className="relative flex items-center justify-center"
        style={{ zIndex: 2, height: "420px" }}
      >
        <div className="relative" style={{ width: "360px", height: "360px" }}>
          {/* Ring 1 */}
          <div
            className="absolute rounded-full"
            style={{
              width: "280px",
              height: "280px",
              top: "50%",
              left: "50%",
              border: "1px solid rgba(102,126,234,0.2)",
              transform: "translate(-50%, -50%)",
              animation: "spin1 20s linear infinite",
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                width: "8px",
                height: "8px",
                background: "#667eea",
                top: "0",
                left: "50%",
                marginLeft: "-4px",
                marginTop: "-4px",
              }}
            />
          </div>

          {/* Ring 2 */}
          <div
            className="absolute rounded-full"
            style={{
              width: "360px",
              height: "360px",
              top: "50%",
              left: "50%",
              border: "1px solid rgba(102,126,234,0.2)",
              transform: "translate(-50%, -50%)",
              animation: "spin1 30s linear infinite reverse",
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                width: "8px",
                height: "8px",
                background: "#764ba2",
                top: "0",
                left: "50%",
                marginLeft: "-4px",
                marginTop: "-4px",
              }}
            />
          </div>

          {/* Center AP */}
          <div
            className="absolute text-center"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              style={{
                fontSize: "4.5rem",
                fontWeight: "800",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: "1",
              }}
            >
              AP
            </div>
            <div
              style={{
                fontSize: "0.72rem",
                color: "#a89bc2",
                fontFamily: "'Fira Code', monospace",
                marginTop: "4px",
              }}
            >
              Code. Build. Deploy.
            </div>
            <div
              style={{
                fontSize: "0.78rem",
                color: "#667eea",
                fontFamily: "'Fira Code', monospace",
                marginTop: "2px",
              }}
            >
              &lt;/&gt;
            </div>
          </div>

          {/* React - Top */}
          <div
            className="absolute flex flex-col items-center"
            style={{
              gap: "5px",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <svg viewBox="0 0 24 24" style={{ width: "36px", height: "36px" }}>
              <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
              <ellipse
                cx="12"
                cy="12"
                rx="10.5"
                ry="4"
                stroke="#61DAFB"
                strokeWidth="1.2"
                fill="none"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="10.5"
                ry="4"
                stroke="#61DAFB"
                strokeWidth="1.2"
                fill="none"
                transform="rotate(60 12 12)"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="10.5"
                ry="4"
                stroke="#61DAFB"
                strokeWidth="1.2"
                fill="none"
                transform="rotate(120 12 12)"
              />
            </svg>
            <span
              style={{
                fontSize: "0.65rem",
                fontFamily: "'Fira Code', monospace",
                color: "#61DAFB",
              }}
            >
              React
            </span>
          </div>

          {/* Node.js - Right */}
          <div
            className="absolute flex flex-col items-center"
            style={{
              gap: "5px",
              top: "50%",
              right: "-20px",
              transform: "translateY(-50%)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="#339933"
              style={{ width: "36px", height: "36px" }}
            >
              <path d="M11.998 24c-.321 0-.641-.084-.924-.247l-2.935-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.603.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.274 0l8.795-5.076V6.921L11.979 1.607 2.91 6.679v10.147l2.409 1.392c1.307.654 2.108-.116 2.108-.891V7.786h1.37v10.017c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.55l-2.304-1.328C.966 18.218.5 17.378.5 16.488V6.341c0-.893.466-1.729 1.224-2.177L10.52.289c.74-.386 1.72-.386 2.455 0l8.796 5.875c.758.448 1.229 1.284 1.229 2.177v10.147c0 .889-.471 1.725-1.229 2.173l-8.796 5.07c-.282.163-.603.247-.927.247" />
            </svg>
            <span
              style={{
                fontSize: "0.65rem",
                fontFamily: "'Fira Code', monospace",
                color: "#339933",
              }}
            >
              Node.js
            </span>
          </div>

          {/* MongoDB - Bottom */}
          <div
            className="absolute flex flex-col items-center"
            style={{
              gap: "5px",
              bottom: "10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="#47A248"
              style={{ width: "36px", height: "36px" }}
            >
              <path d="M17.193 9.555c-1.264-5.58-4.252-7.243-4.394-7.243-.347.004-.382.048-.536.226-.137.163-3.064 2.432-3.064 10.009 0 5.984 4.158 10.098 7.596 10.103 3.452 0 7.394-4.178 7.394-10.103 0-1.38-.12-2.67-.396-3.793z" />
            </svg>
            <span
              style={{
                fontSize: "0.65rem",
                fontFamily: "'Fira Code', monospace",
                color: "#47A248",
              }}
            >
              MongoDB
            </span>
          </div>

          {/* Express - Left */}
          <div
            className="absolute flex flex-col items-center"
            style={{
              gap: "5px",
              top: "50%",
              left: "-30px",
              transform: "translateY(-50%)",
            }}
          >
            <svg viewBox="0 0 24 24" style={{ width: "36px", height: "36px" }}>
              <text
                x="0"
                y="16"
                fontFamily="'Fira Code',monospace"
                fontSize="11"
                fill="#e2d9f3"
                fontWeight="600"
              >
                ex
              </text>
            </svg>
            <span
              style={{
                fontSize: "0.65rem",
                fontFamily: "'Fira Code', monospace",
                color: "#a89bc2",
              }}
            >
              Express.js
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <div
        className="absolute flex flex-col items-center"
        style={{
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          gap: "6px",
          color: "#a89bc2",
          fontSize: "0.72rem",
          fontFamily: "'Fira Code', monospace",
          animation: "bounce 2s infinite",
        }}
      >
        <span>Scroll Down</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
