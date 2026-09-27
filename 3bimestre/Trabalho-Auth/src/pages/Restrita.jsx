import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Restrita() {
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
    <section className="card-container">
      <h1>Página Restrita</h1>
      <p className="alerta-sucesso">
        Acesso autorizado! Esta área é visível apenas para usuários autenticados.
      </p>

      <div className="painel-usuario">
        <h3>Sua Identificação</h3>
        <p><strong>E-mail conectado:</strong> {usuario?.email}</p>
        <p><strong>ID do Usuário:</strong> {usuario?.id}</p>
      </div>

      <button type="button" onClick={handleSair} className="btn-perigo">
        Encerrar Sessão (Logout)
      </button>
    </section>
  );
}