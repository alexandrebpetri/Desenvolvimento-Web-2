import { NavLink } from "react-router";

export default function Cabecalho({ reservas }) {
  const emAndamentoCount = reservas.filter(
    (r) => r.status === "em andamento"
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
      <p>{emAndamentoCount} em andamento</p>
    </header>
  );
}