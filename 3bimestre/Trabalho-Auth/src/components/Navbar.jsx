import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { usuario, sair } = useAuth();
  const navigate = useNavigate();

  async function handleSair() {
    try {
      await sair();
      navigate("/login");
    } catch (erro) {
      console.error("Erro ao encerrar sessão:", erro);
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Aplicação Auth</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Página Pública</Link>

        {usuario ? (
          <>
            <Link to="/restrita">Área Restrita</Link>
            <button type="button" onClick={handleSair} className="btn-sair-nav">
              Sair
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/cadastro">Cadastrar</Link>
          </>
        )}
      </div>
    </nav>
  );
}