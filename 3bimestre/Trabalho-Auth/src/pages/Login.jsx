import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [mensagemErro, setMensagemErro] = useState("");

  const { entrar } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setMensagemErro("");

    if (!email.trim() || !senha.trim()) {
      setMensagemErro("Informe seu e-mail e senha.");
      return;
    }

    setEnviando(true);

    try {
      await entrar(email, senha);
      navigate("/restrita");
    } catch (erro) {
      if (erro.message.includes("Invalid login credentials")) {
        setMensagemErro("Credenciais inválidas. Verifique seu e-mail e senha.");
      } else if (erro.message.includes("Email not confirmed")) {
        setMensagemErro("E-mail ainda não confirmado. Verifique sua caixa de entrada.");
      } else {
        setMensagemErro(erro.message || "Erro ao realizar login.");
      }
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section className="card-container">
      <h2>Entrar no Sistema</h2>

      {mensagemErro && (
        <p className="alerta-erro" role="alert">
          {mensagemErro}
        </p>
      )}

      <form onSubmit={handleSubmit} className="formulario">
        <div className="campo">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={enviando}
            placeholder="seu@email.com"
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            disabled={enviando}
            placeholder="Sua senha"
            required
          />
        </div>

        <button
          type="submit"
          className="btn-primario"
          disabled={enviando || !email.trim() || !senha.trim()}
        >
          {enviando ? "Entrando..." : "Entrar"}
        </button>
      </form>

      <p className="texto-rodape-form">
        Ainda não tem conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </section>
  );
}