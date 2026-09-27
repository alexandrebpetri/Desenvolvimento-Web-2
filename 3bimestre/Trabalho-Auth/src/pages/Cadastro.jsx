import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [mensagemErro, setMensagemErro] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState("");

  const { cadastrar } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setMensagemErro("");
    setMensagemSucesso("");

    if (!email.trim() || !senha.trim()) {
      setMensagemErro("Preencha todos os campos obrigatórios.");
      return;
    }

    if (senha.length < 6) {
      setMensagemErro("A senha deve possuir no mínimo 6 caracteres.");
      return;
    }

    setEnviando(true);

    try {
      const resposta = await cadastrar(email, senha);

      // Se o Supabase exigir confirmação de e-mail e não retornar sessão imediata:
      if (resposta?.user && !resposta?.session) {
        setMensagemSucesso(
          "Conta criada! Um e-mail de confirmação foi enviado. Verifique sua caixa de entrada antes de realizar o login."
        );
      } else {
        setMensagemSucesso("Conta criada com sucesso! Redirecionando...");
        setTimeout(() => {
          navigate("/restrita");
        }, 1500);
      }
    } catch (erro) {
      if (erro.message.includes("already registered")) {
        setMensagemErro("Este e-mail já está cadastrado no sistema.");
      } else {
        setMensagemErro(erro.message || "Falha ao criar conta. Tente novamente.");
      }
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section className="card-container">
      <h2>Cadastro de Usuário</h2>

      {mensagemErro && (
        <p className="alerta-erro" role="alert">
          {mensagemErro}
        </p>
      )}

      {mensagemSucesso && (
        <p className="alerta-sucesso" role="status">
          {mensagemSucesso}
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
            placeholder="Mínimo 6 caracteres"
            required
          />
        </div>

        <button
          type="submit"
          className="btn-primario"
          disabled={enviando || !email.trim() || !senha.trim()}
        >
          {enviando ? "Cadastrando..." : "Criar Conta"}
        </button>
      </form>

      <p className="texto-rodape-form">
        Já possui uma conta? <Link to="/login">Faça Login</Link>
      </p>
    </section>
  );
}