import { Link, useParams } from "react-router";
import StatusReserva from "../components/StatusReserva";
import { useReservas } from "../context/ReservasContext";

export default function DetalheReserva() {
  const { id } = useParams();
  const { reservaPorId, alterarStatus } = useReservas();
  const reserva = reservaPorId(id);

  if (!reserva) {
    return (
      <main>
        <Link to="/reservas" className="botao-voltar">
          ← Voltar para reservas
        </Link>
        <h1>Reserva não encontrada</h1>
        <p>Não existe uma reserva com o identificador "{id}".</p>
      </main>
    );
  }

  return (
    <main>
      <Link to="/reservas" className="botao-voltar">
        ← Voltar para reservas
      </Link>
      <p className="sobretitulo">{reserva.sala}</p>
      <h1>{reserva.turma}</h1>

      <div className="card-detalhe">
        <p>
          <strong>Horário:</strong> {reserva.horario}
        </p>
        <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <strong>Status atual:</strong> <StatusReserva status={reserva.status} />
        </p>

        <div className="acoes-status">
          <label htmlFor="select-mudar-status">
            <strong>Alterar situação:</strong>
          </label>
          <select
            id="select-mudar-status"
            value={reserva.status}
            onChange={(evento) => alterarStatus(reserva.id, evento.target.value)}
            className="select-status"
          >
            <option value="confirmada">confirmada</option>
            <option value="em andamento">em andamento</option>
            <option value="concluida">concluída</option>
          </select>
        </div>
      </div>
    </main>
  );
}