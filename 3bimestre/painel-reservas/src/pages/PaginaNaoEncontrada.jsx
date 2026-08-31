import { Link } from "react-router";

export default function PaginaNaoEncontrada() {
  return (
    <main>
      <h1>Página não encontrada (404)</h1>
      <p>O endereço acessado não existe no sistema de reservas.</p>
      <Link to="/" className="botao-voltar" style={{ marginTop: "1rem" }}>
        ← Voltar para o início
      </Link>
    </main>
  );
}