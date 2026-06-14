const contacts = [
  {
    label: "Email",
    sub: "Send me an email",
    link: "mailto:abhishek.prajapati.it@gmail.com",
    svg: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#667eea"
        strokeWidth="2"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    sub: "Connect with me",
    link: "https://www.linkedin.com/in/abhishek-prajapati-03036b3b4/",
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#667eea">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    sub: "Check out my work",
    link: "https://github.com/abhishekprajapativns",
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#e2d9f3">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Resume",
    sub: "Get my latest resume",
    link: "#",
    svg: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#667eea"
        strokeWidth="2"
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

function Contact() {
  return (
    <section id="contact" style={{ padding: "80px 6%" }}>
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
        Let's Connect
      </div>

      {/* Section Title */}
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "#e2d9f3",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Let's build something amazing together!
      </div>

      {/* Intro */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#a89bc2",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          I'm currently open to new opportunities. Whether you have a question
          or just want to say hi, my inbox is always open!
        </p>
      </div>

      {/* Contact Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.25rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {contacts.map((item) => (
          <a
            key={item.label}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#13102e",
              border: "1px solid #2a2450",
              borderRadius: "14px",
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "0.75rem",
              transition: "transform 0.2s, border-color 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
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
                width: "50px",
                height: "50px",
                borderRadius: "14px",
                background: "rgba(102,126,234,0.1)",
                border: "1px solid rgba(102,126,234,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.svg}
            </div>

            {/* Label */}
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: "600",
                color: "#e2d9f3",
              }}
            >
              {item.label}
            </div>

            {/* Sub */}
            <div style={{ fontSize: "0.7rem", color: "#a89bc2" }}>
              {item.sub}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
