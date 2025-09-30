import { useState } from "react";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
        color: "white",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: menuOpen ? 0 : "-260px",
          width: "260px",
          height: "100%",
          background: "rgba(30, 41, 59, 0.9)",
          backdropFilter: "blur(6px)",
          transition: "0.3s",
          padding: "30px 20px",
          boxShadow: menuOpen ? "2px 0 12px rgba(0,0,0,0.5)" : "none",
          zIndex: 1000,
        }}
      >
        <h2 style={{ marginBottom: "40px", fontWeight: "bold", fontSize: "1.5rem" }}>Meu SaaS</h2>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "2.2rem" }}>
          <li><a href="#" style={{ color: "#e2e8f0", textDecoration: "none", fontWeight: "600" }}>Início</a></li>
          <li><a href="#features" style={{ color: "#e2e8f0", textDecoration: "none", fontWeight: "600" }}>Recursos</a></li>
          <li><a href="#planos" style={{ color: "#e2e8f0", textDecoration: "none", fontWeight: "600" }}>Planos</a></li>
          <li><a href="#contato" style={{ color: "#e2e8f0", textDecoration: "none", fontWeight: "600" }}>Contato</a></li>
        </ul>
      </div>

      {/* Botão de Menu */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          background: "rgba(59,130,246,0.9)",
          border: "none",
          padding: "12px 16px",
          borderRadius: "8px",
          cursor: "pointer",
          color: "white",
          fontWeight: "bold",
          fontSize: "1.1rem",
          backdropFilter: "blur(4px)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
          zIndex: 1100,
        }}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Hero Section */}
      <header style={{ padding: "140px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3.8rem", marginBottom: "20px", fontWeight: "bold", letterSpacing: "-1px" }}>
          Potencialize sua Empresa
        </h1>
        <p style={{ fontSize: "1.3rem", color: "#cbd5e1", marginBottom: "50px", maxWidth: "700px", marginInline: "auto" }}>
          Uma plataforma poderosa, moderna e confiável para empresas que desejam inovar e crescer com tecnologia de ponta.
        </p>
        <button
          style={{
            background: "rgba(59,130,246,0.95)",
            padding: "16px 32px",
            border: "none",
            borderRadius: "10px",
            fontSize: "1.1rem",
            cursor: "pointer",
            color: "white",
            fontWeight: "bold",
            boxShadow: "0 6px 14px rgba(0,0,0,0.4)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.background = "#2563eb")}
          onMouseOut={(e) => (e.target.style.background = "rgba(59,130,246,0.95)")}
        >
          Conheça Mais
        </button>
      </header>

      {/* Features */}
      <section id="features" style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.6rem", marginBottom: "60px", fontWeight: "bold" }}>Principais Recursos</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          <div
            style={{
              background: "rgba(30, 41, 59, 0.85)",
              padding: "40px",
              borderRadius: "16px",
              width: "300px",
              backdropFilter: "blur(8px)",
              boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
            }}
          >
            <h3 style={{ marginBottom: "15px", fontSize: "1.5rem", fontWeight: "bold" }}>Desempenho</h3>
            <p>Velocidade e escalabilidade para acompanhar o crescimento da sua empresa.</p>
          </div>
          <div
            style={{
              background: "rgba(30, 41, 59, 0.85)",
              padding: "40px",
              borderRadius: "16px",
              width: "300px",
              backdropFilter: "blur(8px)",
              boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
            }}
          >
            <h3 style={{ marginBottom: "15px", fontSize: "1.5rem", fontWeight: "bold" }}>Segurança</h3>
            <p>Proteção avançada e criptografia de dados em nível empresarial.</p>
          </div>
          <div
            style={{
              background: "rgba(30, 41, 59, 0.85)",
              padding: "40px",
              borderRadius: "16px",
              width: "300px",
              backdropFilter: "blur(8px)",
              boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
            }}
          >
            <h3 style={{ marginBottom: "15px", fontSize: "1.5rem", fontWeight: "bold" }}>Insights</h3>
            <p>Relatórios inteligentes para decisões mais estratégicas e rápidas.</p>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" style={{ padding: "100px 20px", textAlign: "center", background: "rgba(15, 23, 42, 0.9)", backdropFilter: "blur(6px)" }}>
        <h2 style={{ fontSize: "2.6rem", marginBottom: "60px", fontWeight: "bold" }}>Nossos Planos</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
          <div
            style={{
              background: "rgba(59, 130, 246, 0.15)",
              padding: "50px",
              borderRadius: "18px",
              width: "280px",
              boxShadow: "0 8px 18px rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h3 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Plano Essencial</h3>
            <p style={{ marginTop: "20px", color: "#cbd5e1" }}>Ideal para pequenas equipes que querem começar com segurança.</p>
          </div>
          <div
            style={{
              background: "rgba(59, 130, 246, 0.25)",
              padding: "50px",
              borderRadius: "18px",
              width: "280px",
              boxShadow: "0 8px 18px rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <h3 style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Plano Avançado</h3>
            <p style={{ marginTop: "20px", color: "#cbd5e1" }}>Recursos completos para empresas que buscam escalar.</p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <footer id="contato" style={{ padding: "70px 20px", textAlign: "center", background: "#0f172a" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px", fontWeight: "bold" }}>Contato</h2>
        <p style={{ color: "#94a3b8", marginBottom: "15px" }}>contato@meusaas.com</p>
        <p style={{ color: "#475569", fontSize: "0.9rem" }}>© 2025 Meu SaaS. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Home;
