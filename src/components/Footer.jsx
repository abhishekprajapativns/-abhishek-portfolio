function Footer() {
  return (
    <footer
      style={{
        background: "#13102e",
        borderTop: "1px solid #2a2450",
        padding: "1.5rem 6%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "0.78rem",
        color: "#a89bc2",
      }}
    >
      <span>© 2025 Abhishek Prajapati. All rights reserved.</span>

      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        Built with using{" "}
        <span style={{ color: "#667eea" }}>React & Tailwind CSS</span>
        &nbsp;·&nbsp;
        <a href="#home" style={{ color: "#667eea" }}>
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
