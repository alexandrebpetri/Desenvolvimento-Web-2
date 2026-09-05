import { NavLink } from "react-router";
import { useReservas } from "../context/ReservasContext";

export default function Cabecalho() {
  const { reservas } = useReservas();
  const emAndamento = reservas.filter(
    (reserva) => reserva.status === "em andamento"
  ).length;

  return (
    <header className="cabecalho">
      <span className="marca">Reservas</span>
      <nav aria-label="Navegação principal">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "ativo" : undefined)}
        >
          Resumo
        </NavLink>
        <NavLink
          to="/reservas"
          className={({ isActive }) => (isActive ? "ativo" : undefined)}
        >
          Reservas
        </NavLink>
        <NavLink
          to="/salas"
          className={({ isActive }) => (isActive ? "ativo" : undefined)}
        >
          Salas
        </NavLink>
      </nav>
      <p>{emAndamento} em andamento</p>
    </header>
  );
}