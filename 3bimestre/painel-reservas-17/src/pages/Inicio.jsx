import { Link } from "react-router";
import CartaoResumo from "../components/CartaoResumo";
import { useReservas } from "../context/ReservasContext";
import { salas } from "../data/salas";

export default function Inicio() {
  const { reservas } = useReservas();

  const emAndamento = reservas.filter((r) => r.status === "em andamento");
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
          valor={emAndamento.length}
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

      {/* Solução do Desafio Curto */}
      <section style={{ margin: "1.5rem 0", padding: "1rem", background: "#ffffff", borderRadius: "0.5rem", border: "1px solid #d9e2ec" }}>
        <strong>Aulas acontecendo agora:</strong>
        {emAndamento.length > 0 ? (
          <ul style={{ margin: "0.5rem 0 0", paddingLeft: "1.2rem" }}>
            {emAndamento.map((item) => (
              <li key={item.id}>
                {item.turma} ({item.sala})
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ margin: "0.5rem 0 0" }}>Nenhuma reserva em andamento agora.</p>
        )}
      </section>

      <p style={{ marginTop: "1.5rem" }}>
        <Link to="/reservas">Ver todas as reservas →</Link>
      </p>
    </main>
  );
}