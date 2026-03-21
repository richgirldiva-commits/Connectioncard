export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0a",
        color: "#ffffff",
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>
          Welcome to Connection Card Home
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "24px" }}>
          Your trip profile, meetup, and connection platform.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/signup"
            style={{
              padding: "14px 24px",
              background: "#f5c94c",
              color: "#111",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Sign Up
          </a>
          <a
            href="/login"
            style={{
              padding: "14px 24px",
              border: "1px solid #fff",
              color: "#fff",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Log In
          </a>
        </div>
      </div>
    </main>
  );
}
