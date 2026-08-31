import { Link } from "react-router";
import StatusReserva from "./StatusReserva";

export default function ListaReservas({ reservas, onAlterarStatus }) {
  return (
    <ul className="lista-reservas">
      {reservas.map((reserva) => (
        <li key={reserva.id}>
          <div>
            <strong>
              <Link to={`/reservas/${reserva.id}`}>{reserva.turma}</Link>
            </strong>
            <p>
              <Link to={`/salas/${reserva.salaId}`}>{reserva.sala}</Link> ·{" "}
              {reserva.horario}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <StatusReserva status={reserva.status} />
            {onAlterarStatus && (
              <select
                value={reserva.status}
                onChange={(e) => onAlterarStatus(reserva.id, e.target.value)}
                className="select-status"
                aria-label={`Alterar status da reserva ${reserva.turma}`}
              >
                <option value="confirmada">confirmada</option>
                <option value="em andamento">em andamento</option>
                <option value="concluida">concluída</option>
              </select>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}