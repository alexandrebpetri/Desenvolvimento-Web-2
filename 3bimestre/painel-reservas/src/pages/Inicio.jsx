import { Link } from "react-router";
import CartaoResumo from "../components/CartaoResumo";
import { salas } from "../data/salas";

export default function Inicio({ reservas }) {
  const emAndamento = reservas.filter((r) => r.status === "em andamento").length;
  const confirmadas = reservas.filter((r) => r.status === "confirmada").length;

  const salasComReservaAtiva = new Set(
    reservas
      .filter((r) => r.status === "em andamento" || r.status === "confirmada")
      .map((r) => r.salaId)
  ).size;

  return (
    <main>
      <p className="sobretitulo">28 de agosto de 2026</p>
      <h1>Reservas de salas</h1>
      <p>Acompanhe rapidamente a ocupação das salas de aula.</p>

      <section className="resumo">
        <CartaoResumo
          titulo="Em andamento"
          valor={emAndamento}
          descricao="reservas acontecendo agora"
        />
        <CartaoResumo
          titulo="Confirmadas"
          valor={confirmadas}
          descricao="próximas reservas"
        />
        <CartaoResumo
          titulo="Salas ocupadas"
          valor={`${salasComReservaAtiva}/${salas.length}`}
          descricao="salas com reserva ativa"
        />
      </section>

      <p style={{ marginTop: "1.5rem" }}>
        <Link to="/reservas">Ver todas as reservas →</Link>
      </p>
    </main>
  );
}