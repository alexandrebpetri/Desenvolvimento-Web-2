import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { usuario } = useAuth();

  return (
    <section className="card-container">
      <h1>Página Pública</h1>
      <p>
        Esta página é acessível a qualquer visitante, independente de estar conectado ou não.
      </p>

      {usuario ? (
        <div className="alerta-sucesso">
          <p>Você está conectado como: <strong>{usuario.email}</strong></p>
          <Link to="/restrita" className="btn-primario">
            Acessar Área Restrita
          </Link>
        </div>
      ) : (
        <div className="acoes-visitante">
          <p>Para testar o acesso restrito, faça login ou crie uma conta:</p>
          <div className="grupo-botoes">
            <Link to="/login" className="btn-primario">
              Entrar na conta
            </Link>
            <Link to="/cadastro" className="btn-secundario">
              Criar nova conta
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}